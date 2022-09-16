<?php
namespace App\Services;
use Illuminate\Support\Facades\Log;
// $old_error_handler = set_error_handler("myErrorHandler");
function myErrorHandler($errno, $errstr, $errfile, $errline) {
				$debug = false; // initialise on screen error reporting

				$today = date ("D j/n/Y H:i:s");
				switch ($errno) {
					case E_USER_NOTICE:
						 $errorType = "(N)";
						 break;
					case E_USER_WARNING:
						 $errorType = "(W)";
						 break;
					default:
						 $errorType = "*E*";
						 break;
				}
				error_log ($today . " - " . $errorType . " - (" . $errno . "\tfile: \"" . $errfile . "\"\tline: " . $errline . ")\n" . $errstr . "\n---\n");

				if ($debug) {
					 $today . " - " . $errorType . " - " . $errstr . " - (" . $errno . " file: \"" . $errfile . "\" line: " . $errline . ")<BR>";
				}
}

Class NEOapi{

	private $NEOURL;
	private $APPID;
	private $VERSIONID;
	private $MCAL;
	private $SecurityToken;
	private $schemaObject ;
	private $PDCEnabled;


	public function __construct(){
		$configParameters = $this->getConfig_parameters(storage_path() . "/CIDBapi/App.config");
		$this->NEOURL 		= $configParameters['neourl'];
		$this->APPID 		= $configParameters['appid'];
		$this->VERSIONID 	= $configParameters['versionid'];
		$this->MCAL 		= $configParameters['MCAL'];
		$this->SecurityToken= $configParameters['SecurityToken'];
	    $this->InputType= $configParameters['InputType'];
	    $this->PDCEnabled= $configParameters['PDCEnabled'];
	    $this->schemaObject ='';

	 $schemaJson =   file_get_contents(storage_path() . "/CIDBapi/Consumer.json");
	 $this->schemaObject  = json_decode($schemaJson,true);



	}

	public function createConsumer($payload){

		$action = 'register';
		if($this->PDCEnabled == 1){

		$path = $this->NEOURL.'pdconsumers';
		}else{
	    $path = $this->NEOURL.'consumers';
		}
		$type = 'POST';
	    $InputType 		= strtoupper( $this->InputType );

		if($InputType == 'XML'){
		$data['payload'] = $payload;
	    }
		else if($InputType == 'JSON')
		{

			$jsonObject = array();
			$payload=str_replace("&","&amp;",$payload);
			$xml = simplexml_load_string($payload);
			$json = json_encode($xml);
			$json = str_replace('{},','',$json);
			$jsonObject = json_decode($json,true);
			$arr = $this->loopJson($jsonObject);
			$data['payload']=str_replace('\"','',json_encode($arr,JSON_NUMERIC_CHECK));

		}
		//print_R($data);exit;
		$response = $this->sendData($action, $data,$path,$type);
		return $response;
	}

	function loopJson(& $array, $previndex=""){

		foreach($array as $index=> &$value){
			if(is_array($value)){

				$this->loopJson($value,$index);
			}else{
				if(is_numeric($index)){

					$type = $this->get_value_by_key($this->schemaObject ,$previndex);
				}else{
					$type = $this->get_value_by_key($this->schemaObject ,$index);
				}

				if(isset($type['type'])){
					//echo 'KEY = '.$index.' TYPE = '.$type;
					if($type['type']=="integer"){
						$array[$index] = $value;
					}elseif($type['type']=="string"){
						$array[$index] = '"'.$value.'"';
					}elseif($type['type']=="array"){

						$array[$index] = '"'.$value.'"';
					}
				}

			}
		}
		return $array;
	}


	public function get_value_by_key($array,$key){
		 foreach($array as $k=>$each)
		 {
		  if($k==$key)
		  {
		   return $each;
		  }

		  if(is_array($each))
		  {
		   if($return = $this->get_value_by_key($each,$key))
		   {
			return $return;
		   }
		  }

		 }
    }

	public function activateConsumer($data){
		$action = 'active';
		$path = $this->NEOURL.'consumers/'.$data['consumerid'].'/registration';
		$type = 'POST';
		$data['payload'] = null;
		$response = $this->sendData($action,$data,$path,$type);
		return $response;
	}

	public  function getConsumerDetails($consumerid){

			$action = 'getdetails';
			$path = $this->NEOURL.'consumers/'.$consumerid.'/all';
			$type = 'GET';
			$data = array(
				'consumerid' => $consumerid,
				'payload' => null
			);

			$response = $this->sendData($action, $data,$path,$type);
			return $response;
	}

	public  function updateConsumer($consumerdetails,$consumerid){

		$action = 'updatedetails';
	    $path = $this->NEOURL.'consumers/'.$consumerid;
		$type = 'PUT';
		 $InputType = strtoupper( $this->InputType );

		if($InputType == 'XML'){
		$data = array(
			'payload' => $consumerdetails,
			'consumerid' => $consumerid
		);
	    }
		else if($InputType == 'JSON')
		{

			$jsonObject = array();
			$xml = simplexml_load_string($consumerdetails);
			$json = json_encode($xml);
			$json = str_replace('{},','',$json);
			$jsonObject = json_decode($json,true);
			$arr = $this->loopJson($jsonObject);
			$consumerdetailsjson =str_replace('\"','',json_encode($arr,JSON_NUMERIC_CHECK));


			$data = array(
			'payload' => $consumerdetailsjson,
			'consumerid' => $consumerid
		      );

		}


		$response = $this->sendData($action,$data,$path,$type);
		return $response;

	}

	protected function getConfig_parameters($config_file_path){
		$configXML= simplexml_load_file($config_file_path);
		$configuration = $configXML->appSettings->add;
		foreach($configuration as $parameter){
			$key = (string)$parameter['key'];
			$config[$key] = (string)$parameter['value'];
		}

		$Enviroment 	= $_SERVER['ENVIROMENT'];
		// Log::info('Enviroment', $Enviroment);
		$InputType 		= strtoupper( $config['InputType'] );
		$MCALRequired 	= $config['MCALRequired'];
		$PDCEnabled 	= $config['PDCEnabled'];
		if($Enviroment == "Dev"){
		$urlParameterIndex 	= $Enviroment.'URL_'.$InputType;
		}else{
        $urlParameterIndex 	= $Enviroment.'URL';
			if($MCALRequired ){
				$urlParameterIndex .= '_MCAL';
			}
		}


		$version = 'Version'.'_'.$InputType;
		$versionId = $config[$version];
		$neourl = $config[$urlParameterIndex];

		$configParameters['InputType'] = $config['InputType'];
		$configParameters['MCAL'] = $config['MCALRequired'];
		$configParameters['SecurityToken'] = $config['SecurityToken'];
		$configParameters['appid'] = $config['AppID'];
		$configParameters['versionid'] = $versionId;
		$configParameters['PDCEnabled'] = $config['PDCEnabled'];
		$configParameters['neourl'] = $neourl.$configParameters['appid'].'/'.$configParameters['versionid'].'/';
		return $configParameters;
	}

	private function sendData($action, $data, $path, $type){
		// $_log = array('action' => "MAKING REQUEST TO HORIZON",
		// 	'data' => $data,
		// 	'path' => $path
	  // );
		// error_log(print_r($_log, true));
		$http_header = array();
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $path);
		//($type == 'PUT')  && curl_setopt($ch, CURLOPT_PUT, true);
		($type == 'POST') && curl_setopt($ch, CURLOPT_POST, true);
		($type == 'GET')  && curl_setopt($ch, CURLOPT_HTTPGET, true);


		if($this->MCAL){
			$proxy_authorization = "Proxy-Authorization: Basic ".base64_encode($this->SecurityToken);
			array_push($http_header, $proxy_authorization);

			if($action == 'active' || $action == 'login')
			{
				$authorization = "Authorization: Basic ".base64_encode($data['name'].":".$data['password'].":".$data['promocode']);
				array_push($http_header, $authorization);
			}
		}

		if($action == 'active' || $action == 'getdetails' || $action == 'forgotpassword' || $action == 'changepassword' || $action == 'updatepromocode')
		{ $header_content = "Content-length: 0"; }
		else
		{ $header_content = "Content-type: text/xml; charset=utf-8"; }

		array_push($http_header, $header_content);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $http_header);
		curl_setopt($ch, CURLOPT_HEADER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$file_name = '';
		if(!is_null($data['payload']) && !empty($data['payload']))
		{
			if($type == 'POST')	{	curl_setopt($ch, CURLOPT_POSTFIELDS, $data['payload']);	}
			if($type == 'PUT')
			{

				curl_setopt($ch, CURLOPT_POST, true);
				curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
				$InputType 	= strtoupper( $this->InputType );
				if($InputType == 'JSON') {

					curl_setopt($ch, CURLOPT_HTTPHEADER, array(
					'Content-Type: application/json',
					'Content-Length: ' . strlen($data['payload']))
					);
			     }
				curl_setopt($ch, CURLOPT_POSTFIELDS,$data['payload']);

			}
		}

		curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);


		$rawResponse = curl_exec($ch);
		// error_log("CURL response");
		// error_log(print_r($rawResponse, true));
		// error_log(print_r($_SERVER, true));
		return $this->responseExtractor($rawResponse);
	}

	private function responseExtractor($rawResponse){
	        $errorResponse = array();

			//Processing the rawResponse
			$delimiter = "\r\n\r\n"; // HTTP header delimiter
			// check if the 100 Continue header exists
			while ( preg_match('#^HTTP/[0-9\\.]+\s+100\s+Continue#i',$rawResponse) ) {
				$tmp = explode($delimiter,$rawResponse,2); // grab the 100 Continue header
				$rawResponse = $tmp[1]; // update the response, purging the most recent 100 Continue header
			} // repeat


			$result = explode($delimiter,$rawResponse,2);
			$header = $result[0];
			$body = $result[1];

			$getStatus = explode(" ",strtok($header, "\r\n"));
		    $status = (int)trim($getStatus[1]);

			if($status == 200 || $status == 201){
				$response['status'] = 'success';
				$response['response'] = $result;

				return $response;
			}
			else{
			        $InputType 	= strtoupper( $this->InputType );
					if($InputType == "JSON"){

						$dataArray = json_decode($body,true);

						foreach($dataArray['errdoList'] as $res){
						$errorResponse[$res['errCode']] =  $res['errMessage'] ;
						}

					}else if($InputType == "XML"){
					    $responseXML =  simplexml_load_string($body);
						foreach($responseXML->Response as $res){
						$errorResponse[(string) $res->ResponseCode] =  (string) $res->ResponseMessage ;
						}
					}
			}

			$response['status'] = 'failure';
			$response['response'] = print_r($errorResponse, true);
			//print_r($response);exit;
			return $response;
	}


}


?>
