<?php
namespace App\Services;



/********************************************************************************************************************************************************
Code for Consumer Update
---------------------------------------------------------------------------------------------------------------------------------------------------------
Funtions: 	__contruct			    - Function constructor to initialise values.
			consumerProfile 	    - Function to create XML input of consumerProfile for registration to Webservice.
			consumerQuestion   	    - Function to split the  Consumer Preference/Social Network etc. fields and to call the the Create Question tag.
			formatArray             - Function to retrieve the Category Id ,Question Id , and Answer text from the posted array.
			createQuestionTag 	    - Function to create Question tags depending on inputs.
			consumeraccount         - Function to create Question tags for user account fields.
			setConsumerProfile      - Function to set the ConmerProfile fields that are retrieved from GetDetails.
			setconsumeraccount      - Function to set the User account fields that are retrieved from GetDetails.
			extractData             - Function to extract the CategoryId,QuestionId, Option Id and Answer Text are retrieved from GetDetails.
			setconsumerData         - Function to set the ConsumerPreference,Social Networks etc. fields that are retrieved from GetDetails.
			RetriveData             - Function is to extract field from according to the key.
			updateData              - Function to extract the new,changed and old field from the posted array and getDetails and create the xml for updated fields.

-----------------------------------------------------------------------------------------------------------------------------------------------------------
Description: This is an interface to structure and filter the form data posted by the user.
Author: Infosys
Last modified on : 11/24/2014
***********************************************************************************************************************************************************/
error_reporting(E_ALL & ~E_NOTICE);



class NEOconsumerUpdate extends NEOapi{

	private $consumerProfile;
	private $oldconsumerProfile;
	public $InputType='x';
	private $globalCountries;
	private $discardedFields;
	private $discardedGetFields;
	private $promoCode;
	private $phoneId;
	private $addressId;
	private $emailId;
	private $loginName;
	private $AddressType;
	private $AcquisitionSource;
	private $EmailType;
	private $IsDefaultFlag;


	function __construct($consumerId){

		$this->NEOapi = new NEOapi();
	    $this->globalCountries =
			array (1=>"AD", 2=>"AE", 3=>"AF", 4=>"AG", 5=>"AI", 6=>"AL", 7=>"AM", 8=>"AN",9=>"AO",10=>"AQ",11=>"AR",12=>"AS",13=>"AT",14=>"AU",15=>"AW",16=>"AZ",17=>"BA",18=>"BB",19=>"BD",20=>"BE",21=>"BF",22=>"BG",23=>"BH",24=>"BI",25=>"BJ",26=>"BM",27=>"BN",28=>"BO",29=>"BR",30=>"BS",31=>"BT",32=>"BV",33=>"BW",34=>"BY",35=>"BZ",36=>"CA",37=>"CC",38=>"CF",39=>"CG",40=>"CH",41=>"CI",42=>"CK",43=>"CL",44=>"CM",45=>"CN",46=>"CO",47=>"CR",48=>"CS",49=>"CU",50=>"CV",51=>"CX",52=>"CY",53=>"CZ",54=>"DE",55=>"DJ",56=>"DK",57=>"DM",58=>"DO",59=>"DZ",60=>"EC",61=>"EE",62=>"EG",63=>"EH",64=>"ER",65=>"ES",66=>"ET",67=>"FI",68=>"FJ",69=>"FK",70=>"FM",71=>"FO",72=>"FR",73=>"FX",74=>"GA",75=>"GB",76=>"GD",77=>"GE",78=>"GF",79=>"GH",80=>"GI",81=>"GL",82=>"GM",83=>"GN",84=>"GP",85=>"GQ",86=>"GR",87=>"GS",88=>"GT",89=>"GU",90=>"GW",91=>"GY",92=>"HK",93=>"HM",94=>"HN",95=>"HR",96=>"HT",97=>"HU",98=>"ID",99=>"IE",100=>"IL",101=>"IN",102=>"IO",103=>"IQ",104=>"IR",105=>"IS",106=>"IT",107=>"JM",108=>"JO",109=>"JP",110=>"KE",111=>"KG",112=>"KH",113=>"KI",114=>"KM",115=>"KN",241=>"KR",117=>"KW",118=>"KY",119=>"KZ",120=>"LA",121=>"LB",122=>"LC",123=>"LI",124=>"LK",125=>"LR",126=>"LS",127=>"LT",128=>"LU",129=>"LV",130=>"LY",131=>"MA",132=>"MC",133=>"MD",134=>"MG",135=>"MH",136=>"MK",137=>"ML",138=>"MM",139=>"MN",140=>"MO",141=>"MP",142=>"MQ",143=>"MR",144=>"MS",145=>"MT",146=>"MU",147=>"MV",148=>"MW",149=>"MX",150=>"MY",151=>"MZ",152=>"NA",153=>"NC",154=>"NE",155=>"NF",156=>"NG",157=>"NI",158=>"NL",159=>"NO",160=>"NP",161=>"NR",162=>"NU",163=>"NZ",164=>"OM",165=>"PA",166=>"PE",167=>"PF",168=>"PG",169=>"PH",170=>"PK",171=>"PL",172=>"PM",173=>"PN",174=>"PR",175=>"PT",176=>"PW",177=>"PY",178=>"QA",179=>"RE",180=>"RO",181=>"RU",182=>"RW",183=>"SA",184=>"SB",185=>"SC",186=>"SD",187=>"SE",188=>"SG",189=>"SH",190=>"SI",191=>"SJ",192=>"SK",193=>"SL",194=>"SM",195=>"SN",196=>"SO",197=>"SR",198=>"ST",199=>"SU",200=>"SV",201=>"SY",202=>"SZ",203=>"TC",204=>"TD",205=>"TF",206=>"TG",207=>"TH",208=>"TJ",209=>"TK",210=>"TM",211=>"TN",212=>"TO",213=>"TP",214=>"TR",215=>"TT",216=>"TV",217=>"TW",218=>"TZ",219=>"UA",220=>"UG",221=>"UM",222=>"US",223=>"UY",224=>"UZ",225=>"VA",226=>"VC",227=>"VE",228=>"VG",229=>"VI",230=>"VN",231=>"VU",232=>"WF",233=>"WS",234=>"YE",235=>"YT",236=>"YU",237=>"ZA",238=>"ZM",239=>"ZR",240=>"ZW",242=>"RS",243=>"AX",244=>"CD",245=>"GG",246=>"IM",247=>"JE",248=>"ME",249=>"PS",250=>"BL",251=>"MF",252=>"TL",253=>"ZZ");

		$this->discardedFields = array('HD_PromoCode','HD_AcquisitionSource','HD_AddressType','HD_EmailType','HD_PhoneType','HD_IsDefaultFlag','HD_IsDefaultEmail','HD_Consumerid','UA_Password');
		$this->discardedGetFields = array('CP_ModifyFlag');

		$details = $this->NEOapi->getConsumerDetails($consumerId);
		$configParameters = $this->NEOapi->getConfig_parameters(storage_path() . "/CIDBapi/App.config");

		$this->InputType= $configParameters['InputType'];
	    $InputType 		= strtoupper( $this->InputType );
		if($details['status'] == 'success'){
			$xml_data = $details['response'][1];

			if($InputType =="XML"){

			 $xml = simplexml_load_string($xml_data);
			 $json = json_encode($xml);
			 $dataArray = json_decode($json, true);
			}
			else if($InputType =="JSON"){
		    $dataArray = json_decode($xml_data, true);

			}


			$this->consumerPreferences = $dataArray['Preferences']['QuestionCategory'];

			$this->SocialNetworks = $dataArray['SocialNetworks']['QuestionCategory'];
			$this->ConversionLocations = $dataArray['ConversionLocations']['QuestionCategory'];
			$this->FacebookConnect = $dataArray['FacebookConnect']['QuestionCategory'];
			$this->DigitalInteractions = $dataArray['DigitalInteractions']['QuestionCategory'];
			$this->ExtendedProfile = $dataArray['ExtendedProfile']['QuestionCategory'];
			$this->ExtendedOptInPreferences = $dataArray['ExtendedOptInPreferences']['QuestionCategory'];
			$this->HubLifeStyles = $dataArray['HubLifeStyles']['QuestionCategory'];
			$this->consumeraccount = $dataArray['UserAccount'];
			$this->loginName = $dataArray['UserAccount']['LoginCredentials']['LoginName'];

		    if($InputType =="XML"){
			 $this->PromoCode = $dataArray['ConsumerProfile']['PromoCode'];
			 $this->AddressType = $dataArray['ConsumerProfile']['Address']['AddressType'];
			 $this->AcquisitionSource =  $dataArray['ConsumerProfile']['AcquisitionSource'];
			 $this->EmailType = $dataArray['ConsumerProfile']['Email']['EmailCategory'];
			 $this->PhoneType = $dataArray['ConsumerProfile']['Phone']['PhoneType'];
			 $this->IsDefaultFlag= $dataArray['ConsumerProfile']['Email']['IsDefaultFlag'];
			 $this->consumerProfile = $dataArray['ConsumerProfile'];
			 $this->phoneId = $dataArray['ConsumerProfile']['Phone']['PhoneID'];
			 $this->addressId = $dataArray['ConsumerProfile']['Address']['AddressID'];
			 $this->emailId = $dataArray['ConsumerProfile']['Email']['Id'];
			 }
			 else if($InputType =="JSON"){

			 $this->PromoCode = $dataArray['ConsumerProfile']['PromoCode'][0];
			 $this->AddressType = $dataArray['ConsumerProfile']['Address'][0]['AddressType'];
			 $this->AcquisitionSource =  $dataArray['ConsumerProfile']['AcquisitionSource'];
			 $this->EmailType = $dataArray['ConsumerProfile']['Email'][0]['EmailCategory'];
			 $this->PhoneType = $dataArray['ConsumerProfile']['Phone'][0]['PhoneType'];
			 $this->IsDefaultFlag= $dataArray['ConsumerProfile']['Email'][0]['IsDefaultFlag'];
			 $this->consumerProfile = $dataArray['ConsumerProfile'];
			 $this->phoneId = $dataArray['ConsumerProfile']['Phone'][0]['PhoneID'];
			 $this->addressId = $dataArray['ConsumerProfile']['Address'][0]['AddressID'];
			 $this->emailId = $dataArray['ConsumerProfile']['Email'][0]['Id'];

			 }



		}

		else
		{
			foreach ($details['response'] as $key => $value)
			{
					return $value;
			}
		}
	}

    /********************************************************************************************/

	/********************************************************************************************
		Function consumerQuestion:
		This function is to process the questions combination depending on brand, comm, drink etc.
	*********************************************************************************************/

	public function consumerQuestion($questionCategory, $postData,$modifyFlag1){
				$qArray=array();
			$answerText ='';

			foreach($postData as $categoryId=>$questions){
					foreach($questions as $questionId=>$Answers){
						foreach($Answers as $AnswerIndex=>$AnswerValue){
							$optionId 	= isset($AnswerValue['optionId'])?$AnswerValue['optionId']:'';

							 //if data contains AnswerText value, optionId =0
							if(isset($AnswerValue['AnswerText'])){
									$optionId =0;
								 }else if(!isset($AnswerValue['optionId'])){
									$optionId=99;
								 }
							$answerText = $AnswerValue['AnswerText'];
						    if($questionId==92){
							$answerText = $this->consumerCountry = 	$this->globalCountries[$optionId];//Handle country Questions
						    }
							if(array_key_exists('textother',$AnswerValue))
							{
							   if($AnswerValue['textother'])
							   {
							   $answerText = $AnswerValue['textother'];

							   }else
							   {
							   $answerText = ' ';

							   }

							}

							$commchannel= $AnswerValue['Comm'];
							$brand 		= $AnswerValue['Brand'];
							$drink 		= $AnswerValue['Drink'];
							/* if(isset($AnswerValue['AnswerText'])){

								$modifyFlag1 = 'U';
								}else{

								$modifyFlag1 = $modifyFlag;
								}*/

							$countFields = count($AnswerValue);
							$questionId .' = '. $countFields;



							/******************************/
							$optionIds = array_unique(explode(',',$optionId)); //Explode over ',' since options might be multiple
							foreach($optionIds as $optionId){

								if($countFields==1){
										$commmChannel='';
										$brandId='';
										$str =	$this->createQuestionTag($categoryId,$questionId,$optionId,$answerText,$modifyFlag1,$commmChannel,$brandId);
										array_push($qArray ,$str);
									}else{
										$commmChannel='';
										$brandId='';
										$commchannels = array_unique(explode(',',$commchannel)); //Explode over ',' since comm might be multiple
										$brand =  array_unique(explode(',',$brand)); //Explode over ',' since brand might be multiple
										$drink = array_unique( explode(',',$drink)); //Explode over ',' since drink might be multiple


										foreach($commchannels as $commmChannel){
											foreach($brand as $brandId){
												if(empty($drink[0]))	{
												   //call to form the question and answers tag.
													$str =	$this->createQuestionTag($categoryId,$questionId,$optionId,$answerText,$modifyFlag1,$commmChannel,$brandId);
													array_push($qArray ,$str);
												}else{
													foreach($drink as $drinkcatId){
													 //call to form the question and answers tag.
													$str =	$this->createQuestionTag($categoryId,$questionId,$optionId,$answerText,$modifyFlag1,$commmChannel,$brandId,$drinkcatId);
													array_push($qArray ,$str);
													}
												}
											}
										}


									}



							}




							/******************************/



							}


					}	 //end foreach($questions as $questionId=>$Items)
			}   //end foreach($postData as $categoryId=>$questions)

			$qArray = implode('',$qArray );

			return $qArray;

		}
	/********************************************************************************************/

	/********************************************************************************************
		Function formatArray:
		This function is to convert the postdata array in Questions, Category and Answer
		combination array.
	*********************************************************************************************/
	public function formatArray($tagName,$postData, $modifyFlag){

	//print_r($getDetails);
			$temparray = array();

			  foreach($postData as $formName=>$formValue){

				$splitName = explode("_",$formName);

				$categoryId = $splitName[1];
				$questionId = $splitName[2];
				$prefix 	= $splitName[3];
				$mulprefix 	= $splitName[4];
				if($mulprefix=="freetext"){

				   /* if(array_key_exists($formName,$getDetails)){
						echo $formName;
						 $modifyFlag1 = "U";

						}*/
					$mulprefix='AnswerText';


				}

				if(!isset($mulprefix)){
					$mulprefix ='optionId';
				}


				//$temparray[$categoryId][$questionId][$prefix] = ($formValue) ;

				if(isset($temparray[$categoryId][$questionId][$prefix])){
					if(isset($mulprefix)){

						 $a =(array)$temparray[$categoryId][$questionId][$prefix];
						 $a[$mulprefix]  =$formValue;
						 $temparray[$categoryId][$questionId][$prefix] = $a;
						 unset($a);
					}
				}else{
						$temparray[$categoryId][$questionId][$prefix][$mulprefix] = $formValue;
				}


			}


			return $this->consumerQuestion($tagName,$temparray,$modifyFlag);
	}
	/********************************************************************************************/

	/********************************************************************************************
		Function consumerProfile:
		This function is to create XML for ConsumerProfile section
	*********************************************************************************************/

    public function consumerProfile($postData,$modifyFlag){

			$this->consumerProfile = '';

           /*
			Default tags which are part of Consumer profile section, array is created to maintain the logical order in which
			the tags are to be mapped in XML.
			*///changed Zipcode to ZipCode
			$standardTags = array('FirstName'=>array('Title','FirstName','LastName','AlternateFirstName','AlternateLastName','DOB','Gender','MaritalStatus','NationalID','PassportNumber','Education','Profession','Suffix','Company','MiddleName','AlternateMiddleName','MaternalLastName','AlternateMaternalLastName','AlternateTitle','AlternateSuffix'),'Address1'=>array('AddressID','Address1','Address2','Address3','Address4','City','State','Country','ZipCode','AddressType','StateOther','Province','House','Apartment','Building','District'),'EmailId'=>array('Id','EmailId','EmailType','IsDefaultFlag','IsDefaultEmail'),
			'PhoneNumber'=>array('PhoneID','InternationalCode','AreaCode','PhoneNumber','PhoneType','Extension'));

            /*
				Fetch all the posted data for consumer profile and create Tags for all he values.
			*/

			foreach($postData as $key => $value){
				$splitIndex = explode('_',$key);
				//$fieldName = ucfirst(strtolower($splitIndex[1]));
				$fieldName = $splitIndex[1];
				$this->consumerProfile[$fieldName] = '<'.$fieldName.'>'. $value.'</'.$fieldName.'>';
			 }//end foreach

			if(array_key_exists('FirstName',$this->consumerProfile)){

			foreach($standardTags['FirstName'] as $keyName){
			if(isset($this->consumerProfile[$keyName])){

							$profileTag .= $this->consumerProfile[$keyName];
							 unset($this->consumerProfile[$keyName]);
						}

			}
			}

			//Adding the Address data in Address1 Tag as required by the XML format
			$InputType 		= strtoupper( $this->InputType );
			if(array_key_exists('Address1',$this->consumerProfile)){
			    if($InputType =='JSON'){
					$addressTag ="<Address></Address>";
				 }
				 $addressTag .= "<Address>";

				 foreach($standardTags['Address1'] as $keyName){
						if($keyName=='AddressType' ){

							 $addressTag .="<AddressType>".  $this->AddressType."</AddressType>";
						    unset($this->consumerProfile[$keyName]);
						}
						if($keyName=='AddressID' ){

						    $addressTag .="<AddressID>".  $this->addressId."</AddressID>";
						    unset($this->consumerProfile[$keyName]);

						}


							$addressTag .= $this->consumerProfile[$keyName];
							 unset($this->consumerProfile[$keyName]);

				 }

				 $addressTag .='<ModifyFlag>'.$modifyFlag.'</ModifyFlag>';
				 $addressTag .="</Address>";


			}

			//Adding the PhoneNumber data in PhoneNumber Tag as required by the XML format
			if(array_key_exists('PhoneNumber',$this->consumerProfile)){
			if($InputType =='JSON'){
				 $phoneTag ="<Phone></Phone>";
				 }
				 $phoneTag .= "<Phone>";
				 foreach($standardTags['PhoneNumber'] as $keyName){
						    if($keyName=="PhoneID"){
								$phoneTag .="<PhoneID>".  $this->phoneId ."</PhoneID>";
								unset($this->consumerProfile[$keyName]);
							}

						     if($keyName=="PhoneType"){
								$phoneTag .="<PhoneType>".  $this->PhoneType ."</PhoneType>";
								unset($this->consumerProfile[$keyName]);
							}

							$phoneTag .= $this->consumerProfile[$keyName];
							 unset($this->consumerProfile[$keyName]);

				 }

				 $phoneTag .='<ModifyFlag>'.$modifyFlag.'</ModifyFlag>';
				 $phoneTag .="</Phone>";

			}

			//Adding the Promocode data in Promocode Tag as required by the XML format
			if($InputType =='JSON'){
				 $promoCode ="<PromoCode></PromoCode>";
				 }
			$promoCode .= "<PromoCode>".$this->PromoCode."</PromoCode>";

			unset($this->consumerProfile['PromoCode']);
			if(isset($this->AcquisitionSource)){
			$acquisitionSource = "<AcquisitionSource>".$this->AcquisitionSource."</AcquisitionSource>";
			unset($this->consumerProfile['AcquisitionSource']);
			}

			//Adding the Email data in Email Tag as required by the XML format
			if(array_key_exists('EmailId',$this->consumerProfile)){
			if($InputType =='JSON'){
				 $emailTag ="<Email></Email>";
				 }
				 $emailTag .= "<Email>";
				 foreach($standardTags['EmailId'] as $keyName){

						if($keyName=="Id"){
						 $emailTag .="<Id>".$this->emailId."</Id>";
						  unset($this->consumerProfile[$keyName]);
						   }

						 if($keyName=="EmailType"){
						 $emailTag .="<EmailCategory>".$this->EmailType."</EmailCategory>";
						  unset($this->consumerProfile[$keyName]);
						   }
						 if($keyName=="IsDefaultFlag"){
						 $emailTag .="<IsDefaultFlag>".$this->IsDefaultFlag."</IsDefaultFlag>";
						  unset($this->consumerProfile[$keyName]);
						   }

							$emailTag .= $this->consumerProfile[$keyName];
							 unset($this->consumerProfile[$keyName]);

				 }

				 $emailTag .='<ModifyFlag>'.$modifyFlag.'</ModifyFlag>';
				 $emailTag .="</Email>";

			}
			 $this->consumerProfile['profile'] = $profileTag;
			$this->consumerProfile['Address'] = $addressTag;

			$this->consumerProfile['phone'] = $phoneTag;
			$this->consumerProfile['PromoCode'] = $promoCode;
			$this->consumerProfile['AcquisitionSource'] = $acquisitionSource;

			$this->consumerProfile['Email'] = $emailTag;


			$this->consumerProfile = implode('',$this->consumerProfile);

			return ($this->consumerProfile);

		}
	/********************************************************************************************/

	/********************************************************************************************
			Function consumerAccount:
			This function is to create XML for UserAccount section
	*********************************************************************************************/
	public function consumeraccount($consumerData,$modifyFlag){

			$this->consumeraccount=array();
			$secretQuestion =array();
		    $InputType = strtoupper( $this->InputType );
			$consumerAccountTags = array('LoginName'=>array('LoginName'));

			/*
				Fetch all the posted data for consumer profile and create Tags for all he values.
			*/
			foreach($consumerData as $key => $value){
				$splitIndex = explode('_',$key);
				 if($splitIndex[0]=='SQ'){
					$qCatid = $splitIndex[1];
					$qQuestionid = $splitIndex[2];
					$secretQuestion[$qQuestionid] = $value;
				}
			 }//end foreach

			//Adding the Login data in LoginName Tag as required by the XML format
				 $credentialTag = "<LoginCredentials>";
				 $credentialTag .="<LoginName>".$consumerData['UA_LoginName']."</LoginName>";
				 $credentialTag .="</LoginCredentials>";


			//Adding the Seceret questions data in secretQuestion Tag as required by the XML format
			if(!empty($secretQuestion)){
			foreach($secretQuestion as $keyIndex=>$keyValue){
				$secretQuestionTag .= "<SecretQuestions>";
				$secretQuestionTag .= "<QuestionID>".$keyIndex."</QuestionID>";

				if($InputType =='JSON'){
				 $secretQuestionTag .="<Answer></Answer>";
				 }

				$secretQuestionTag .="<Answer>";
				$secretQuestionTag .='<ModifyFlag>'.$modifyFlag.'</ModifyFlag>';
				$secretQuestionTag .="<AnswerText>".$keyValue."</AnswerText>";
				$secretQuestionTag .="</Answer>";

				$secretQuestionTag .="</SecretQuestions>";
			}
          }


			$this->consumeraccount['LoginCredentials'] = $credentialTag;
			$this->consumeraccount['SecretQuestions'] = $secretQuestionTag;

			$this->consumeraccount = implode('',$this->consumeraccount);

			return($this->consumeraccount);

		}
    /********************************************************************************************/


	/********************************************************************************************
			Function createQuestionTag:
			This function is to create the Questions tag.
	*********************************************************************************************/

	function createQuestionTag($catId,$questionId,$optionId,$answerText,$modifyFlag,$commmChannel='',$brandId='', $drinkcatId=''){
			$InputType 		= strtoupper( $this->InputType );
			$questionTag  = '';
			if($InputType =='JSON'){
				 $questionTag .="<QuestionCategory></QuestionCategory>";
			 }
			$questionTag .= '<QuestionCategory>';
			$questionTag .= '<CategoryID>'.$catId.'</CategoryID>';
			if($InputType =='JSON'){
				 $questionTag .="<QuestionAnswers></QuestionAnswers>";
			 }
			$questionTag .= '<QuestionAnswers>';
			$questionTag .= '<QuestionID>'.$questionId.'</QuestionID>';
			if($InputType =='JSON'){
				 $questionTag .="<Answer></Answer>";
			 }
			$questionTag .= '<Answer>';
			$questionTag .= '<OptionID>'.$optionId.'</OptionID>';
			$questionTag .= '<ModifyFlag>'.$modifyFlag.'</ModifyFlag>';

			if($brandId!=''){
				$questionTag .= '<BrandID>'.$brandId.'</BrandID>';
			}
			if($drinkcatId!=''){
			$questionTag .=	'<DrinkCategoryID>'.$drinkcatId.'</DrinkCategoryID>';
			}
			if($commmChannel!=''){
				$questionTag .=	'<CommunicationChannel>'.$commmChannel.'</CommunicationChannel>';
			}
			if($answerText!=''){
				$questionTag .=	'<AnswerText>'.$answerText.'</AnswerText>';
			}

			$questionTag .= '</Answer>';
			$questionTag .= '</QuestionAnswers>';
			$questionTag .= '</QuestionCategory>';

			return $questionTag;
		}
    /********************************************************************************************/

	/********************************************************************************************
			Function setConsumerProfile:
			This Function is to set the ConmerProfile fields that are retrieved from GetDetails.
	*********************************************************************************************/
	public function setConsumerProfile($consumerFields){

		foreach($consumerFields as $field=>$value){
			$tempSplit = explode("_",$field);
			$fieldName = $tempSplit[1];

			if(is_array($value)){
				unset($data[$field]);
				foreach($value as $index=>$val){

					if(is_array($val)){
						unset($data[$index]);

						foreach($val as $index2=>$val2){


							$data["CP_".$index2] = $val2;


						}

					}else{
						$data["CP_".$index] = $val;
					}



				}

			}else{
				$data["CP_".$field] = $value;
			}


		}


		return $data;
	}

	/********************************************************************************************/

	/********************************************************************************************
			Function setconsumerData:
			This Function is to set the User account fields that are retrieved from GetDetails.
	*********************************************************************************************/

	 public function setconsumeraccount($consumerFields){

			$loginName = $consumerFields['LoginCredentials']['LoginName'];

			$SecretQuestions = $consumerFields['SecretQuestions'];

			$data['UA_LoginName'] = $loginName;

			if(isset($SecretQuestions[0])){
				foreach($SecretQuestions as $questions){
						$qId = $questions['QuestionID'];
						$ans = $questions['Answer']['AnswerText'];
						$data['SQ_2_'.$qId] = $ans;
				}

			}else{
					$qId = $SecretQuestions['QuestionID'];
					$ans = $SecretQuestions['Answer']['AnswerText'];
					$data['SQ_2_'.$qId] = $ans;
			}

			return $data;

    }

    /********************************************************************************************/

	/********************************************************************************************
			Function extractData:
			This Function is to extract the CategoryId,QuestionId, Option Id and Answer Text
			are retrieved from GetDetails and to create the id as in the front end
			and then set the value.
	*********************************************************************************************/

    private function extractData($HiddenFieldsArray,$dataArray,$prefix){

		$temparray=array();

		foreach($dataArray   as $index=>$categories)
		{

			$categoryId = $categories['CategoryID'];
			$QuestionAnswers = $categories['QuestionAnswers'];

			if(isset($categories['QuestionAnswers'][0]))
			{
				foreach($QuestionAnswers as	$index2=>$QuestAns){
						$questionId = $QuestAns['QuestionID'];
						if(isset($QuestAns['Answer'][0]))
						{
							$count = 1;

							foreach($QuestAns['Answer'] as $index3=>$answr){

								$OptionID 	= $answr['OptionID'];
								$BrandId 	= $answr['BrandID'];
								$CommChannel= $answr['CommunicationChannel'];
								$DrinkId  	= $answr['DrinkCategoryID'];
								$AnswerText = $answr['AnswerText'];

								$field_optionIndex = $prefix.$categoryId."_".$questionId;

								if(isset($OptionID))

								{
								$count0 = 1;
								while ($count0<=10)
									{
									    //create the index to match the field from front end.
										/*taking while loop count to compare the Comm/Brand/drink hidden field's values
										with the Get detail's Comm/brand/drink values*/
										$field_TempIndex = $field_optionIndex."_".$count0;

										//If index contains Free text value
										if($answr['OptionID']==0 && isset($answr['AnswerText'])){
										$OptionID = $answr['AnswerText'];
										$field_TempIndex = $field_TempIndex."_freetext";
									    }

										//set the value for drop down of other text field
										if($answr['OptionID']!=0 && isset($answr['AnswerText']) && $questionId!=92 && $_POST[$field_TempIndex]){

										$OptionID = $answr['OptionID'];

									    }

										//create Comm index to match the field from front end.
										$field_commoptionIndex =  "HD_".$field_TempIndex."_"."Comm";
										//create brand index to match the field from front end.
										$field_brandoptionIndex =  "HD_".$field_TempIndex."_"."Brand";
										//create Drink index to match the field from front end.
										$field_drinkoptionIndex =  "HD_".$field_TempIndex."_"."Drink";


                                         //If Comm value is set in the front end
										if(isset($_POST[$field_commoptionIndex])){

										  $Commpresent = 1;
										}else{

										  $Commpresent = 0;
										}

										 //If brand value is set in the front end
										if(isset($_POST[$field_brandoptionIndex])){

										  $Brandpresent = 1;
										}else{

										  $Brandpresent = 0;
										}

										 //If drink value is set in the front end
										if(isset($_POST[$field_drinkoptionIndex])){

										  $Drinkpresent = 1;
										}else{

										  $Drinkpresent = 0;
										}


                                       $index = $Commpresent.$Brandpresent.$Drinkpresent;
									  //to handle text other field

									  if($questionId!=92 && $answr['OptionID']!=0 && isset($answr['AnswerText']) ){

											$OptionID1 = $answr['AnswerText'];
											//to check text other is blank
											if(is_array($answr['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_".$count."_textother"] = $OptionID1;
										}

									   /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field ,so we are skipping switch condition*/
										if(is_array($_POST[$field_TempIndex]) && !(isset($answr['AnswerText']))){

										  $temparray[$field_optionIndex."_".$count] = $OptionID;
										}
									else{
									/*If index is other than multi select ,then comparing front end Comm/Brand/Drink values with the corresponding GetDetails values to set the value for multiple question */

										switch($index)

											{

												case "000":
												/*taking for loop count to get the next multiple question index*/
											    if($_POST[$field_optionIndex."_".$count."_freetext"]){

												$temparray[$field_optionIndex."_".$count."_freetext"] = $OptionID;
												}

												else if ($_POST[$field_optionIndex."_".$count]){

												$temparray[$field_optionIndex."_".$count] = $OptionID;
												}

												break 2;

												case "110":
												 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_brandoptionIndex]== $BrandId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "101":
												 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "011":
												 if ($_POST[$field_brandoptionIndex]== $BrandId  && $_POST[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "100":
												 if ($_POST[$field_commoptionIndex] == $CommChannel )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "010":

												 if ($_POST[$field_brandoptionIndex]== $BrandId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

											   case "001":
												 if ($_POST[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

											}
										}
									 $count0++;
									}

								}


								if(isset($BrandId)){


								$countmultiBrand = 1;
                                while ($countmultiBrand<=4)
									{
                                    /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field */
									if(is_array($_POST[$field_optionIndex."_".$countmultiBrand]) && !(isset($answr['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Brand"] = $BrandId;
											   break;
									}
									$countmultiBrand++;
								    }

								}

								if(isset($CommChannel)){

								$countmultiComm = 1;
                                while ($countmultiComm<=4)
									{
									  /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field */
									if(is_array($_POST[$field_optionIndex."_".$countmultiComm]) && !(isset($answr['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Comm"] = $CommChannel;
											   break;
									}
								      $countmultiComm++;
								    }
								}

								if(isset($DrinkId)){
								$countmultiDrink = 1;
                                while ($countmultiDrink<=4)
									{
                                       /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field */
									  if(is_array($_POST[$field_optionIndex."_".$countmultiDrink]) && !(isset($answr['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Drink"] = $DrinkId;
											   break;
									    }
								      $countmultiDrink++;
								    }

								}

								$count++;
							}


						}else
						{

							$answers = $QuestAns['Answer'];
							$OptionID 	= $answers['OptionID'];
							$BrandId 	= $answers['BrandID'];
							$CommChannel= $answers['CommunicationChannel'];
							$DrinkId  	= $answers['DrinkCategoryID'];
							$AnswerText = $answers['AnswerText'];

							$count = 1;
						    $field_optionIndex = $prefix.$categoryId."_".$questionId;

								if(isset($OptionID))

								{
								$count0 = 1;
								while ($count0<=10)
									{

										//create the index to match the field from front end.
										/*taking while loop count to compare the Comm/Brand/drink hidden field's values
										with the Get detail's Comm/brand/drink values*/
										$field_TempIndex = $field_optionIndex."_".$count0;

										//If index contains Free text value
										if($answers['OptionID']==0 && isset($answers['AnswerText'])){
										$OptionID = $answers['AnswerText'];
										$field_TempIndex = $field_TempIndex."_freetext";
									    }

										//set the value for drop down of other text field
										if($answers['OptionID']!=0 && isset($answers['AnswerText']) && $questionId!=92 && $_POST[$field_TempIndex]){

										$OptionID = $answers['OptionID'];

									    }
										//create Comm index to match the field from front end.
										$field_commoptionIndex =  "HD_".$field_TempIndex."_"."Comm";
										//create brand index to match the field from front end.
										$field_brandoptionIndex =  "HD_".$field_TempIndex."_"."Brand";
										//create Drink index to match the field from front end.
										$field_drinkoptionIndex =  "HD_".$field_TempIndex."_"."Drink";


                                          //If Comm value is set in the front end
										if(isset($_POST[$field_commoptionIndex])){

										  $Commpresent = 1;
										}else{

										  $Commpresent = 0;
										}
										  //If brand value is set in the front end
										if(isset($_POST[$field_brandoptionIndex])){

										  $Brandpresent = 1;
										}else{

										  $Brandpresent = 0;
										}
										  //If drink value is set in the front end
										if(isset($_POST[$field_drinkoptionIndex])){

										  $Drinkpresent = 1;
										}else{

										  $Drinkpresent = 0;
										}


                                       $index = $Commpresent.$Brandpresent.$Drinkpresent;

									   //to handle text other field
									  if($questionId!=92 && $answers['OptionID']!=0 && isset($answers['AnswerText'])  ){

											$OptionID1 = $answers['AnswerText'];
											if(is_array($answers['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_".$count."_textother"] = $OptionID1;
										}

									    /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field ,so we are skipping switch condition*/
										if(is_array($_POST[$field_TempIndex]) && !(isset($answers['AnswerText']))){

										  $temparray[$field_optionIndex."_".$count] = $OptionID;
										}
									else
									{
									/*If index is other than multi select ,then comparing front end Comm/Brand/Drink values with the corresponding GetDetails values to set the value for multiple question */
										 switch($index)

											{

												case "000":

												if($_POST[$field_optionIndex."_".$count."_freetext"]){

												$temparray[$field_optionIndex."_".$count."_freetext"] = $OptionID;
												}

												else if ($_POST[$field_optionIndex."_".$count]){

												$temparray[$field_optionIndex."_".$count] = $OptionID;
												}

												break 2;

												case "111":
												 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_brandoptionIndex]== $BrandId && $_POST[$field_drinkoptionIndex] == $DrinkId)
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "110":
												 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_brandoptionIndex]== $BrandId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "101":
												 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "011":
												 if ($_POST[$field_brandoptionIndex]== $BrandId  && $_POST[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "100":
												 if ($_POST[$field_commoptionIndex] == $CommChannel )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "010":
												 if ($_POST[$field_brandoptionIndex]== $BrandId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

											   case "001":
												 if ($_POST[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

											}
									}
									 $count0++;
									}

								}


								if(isset($BrandId)){

								//to handle multi select
								$countmultiBrand = 1;
                                while ($countmultiBrand<=4)
									{
                                    /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field */
									if(is_array($_POST[$field_optionIndex."_".$countmultiBrand]) && !(isset($answers['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Brand"] = $BrandId;
											   break;
									}
									$countmultiBrand++;
								    }

								}

								if(isset($CommChannel)){

								$countmultiComm = 1;
                                while ($countmultiComm<=4)
									{
                                      /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field */
									if(is_array($_POST[$field_optionIndex."_".$countmultiComm]) && !(isset($answers['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Comm"] = $CommChannel;
											   break;
									}
								      $countmultiComm++;
								    }
								}

								if(isset($DrinkId)){
								$countmultiDrink = 1;
                                while ($countmultiDrink<=4)
									{
                                      /*if index is a multi select field then we are not comparing the Comm/drink/Brand values with the get field */
									  if(is_array($_POST[$field_optionIndex."_".$countmultiDrink]) && !(isset($answers['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Drink"] = $DrinkId;
											   break;
									    }
								      $countmultiDrink++;
								    }

								}

						}

				}
			}else
			{

				$questionId = $categories['QuestionAnswers']['QuestionID'];
				$answers = $categories['QuestionAnswers']['Answer'];

					if(isset($answers[0]))
					{

					       $count=1;

							foreach($answers  as $index4=>$ans){

								$OptionID 	= $ans['OptionID'];
								$BrandId 	= $ans['BrandID'];
								$CommChannel= $ans['CommunicationChannel'];
								$DrinkId  	= $ans['DrinkCategoryID'];
								$AnswerText = $ans['AnswerText'];


								$field_optionIndex = $prefix.$categoryId."_".$questionId;

								if(isset($OptionID))

								{

								$count0 = 1;
								while ($count0<=10)
									{


										$field_TempIndex = $field_optionIndex."_".$count0;

										if($ans['OptionID']==0 && isset($ans['AnswerText'])){
										$OptionID = $ans['AnswerText'];
										$field_TempIndex = $field_TempIndex."_freetext";
									    }
										if($ans['OptionID']!=0 && isset($ans['AnswerText']) && $questionId!=92 && $_POST[$field_TempIndex]){

										$OptionID = $ans['OptionID'];

									    }
										$field_commoptionIndex =  "HD_".$field_TempIndex."_"."Comm";
										$field_brandoptionIndex =  "HD_".$field_TempIndex."_"."Brand";
										$field_drinkoptionIndex =  "HD_".$field_TempIndex."_"."Drink";



										if(isset($_POST[$field_commoptionIndex])){

										  $Commpresent = 1;
										}else{

										  $Commpresent = 0;
										}
										if(isset($_POST[$field_brandoptionIndex])){

										  $Brandpresent = 1;
										}else{

										  $Brandpresent = 0;
										}
										if(isset($_POST[$field_drinkoptionIndex])){

										  $Drinkpresent = 1;
										}else{

										  $Drinkpresent = 0;
										}


                                       $index = $Commpresent.$Brandpresent.$Drinkpresent;
									    //to handle text other
									  if($questionId!=92 && $ans['OptionID']!=0 && isset($ans['AnswerText'])  ){

											$OptionID1 = $ans['AnswerText'];
											if(is_array($ans['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_".$count."_textother"] = $OptionID1;
										}
									   //to handle multi select
										if(is_array($_POST[$field_TempIndex]) && !(isset($ans['AnswerText']))){

										  $temparray[$field_optionIndex."_".$count] = $OptionID;
										}
									else
									{
									switch($index)

										{

										    case "000":

											 if($_POST[$field_optionIndex."_".$count."_freetext"]){

											$temparray[$field_optionIndex."_".$count."_freetext"] = $OptionID;
											}

											else if ($_POST[$field_optionIndex."_".$count]){

											$temparray[$field_optionIndex."_".$count] = $OptionID;
											}

											break 2;

											case "111":
											 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_brandoptionIndex]== $BrandId && $_POST[$field_drinkoptionIndex] == $DrinkId)
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "110":
											 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_brandoptionIndex]== $BrandId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

										    case "101":
											 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_drinkoptionIndex] == $DrinkId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "011":
											 if ($_POST[$field_brandoptionIndex]== $BrandId  && $_POST[$field_drinkoptionIndex] == $DrinkId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "100":
											 if ($_POST[$field_commoptionIndex] == $CommChannel )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "010":
											 if ($_POST[$field_brandoptionIndex]== $BrandId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

                                           case "001":
											 if ($_POST[$field_drinkoptionIndex] == $DrinkId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

										}

                                    }
									 $count0++;
									}

								}


								if(isset($BrandId)){

								//to handle multi select
								$countmultiBrand = 1;
                                while ($countmultiBrand<=4)
									{
									if(is_array($_POST[$field_optionIndex."_".$countmultiBrand]) && !(isset($ans['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Brand"] = $BrandId;
											   break;
									}
									$countmultiBrand++;
								    }

								}

								if(isset($CommChannel)){

								//to handle multi select
								$countmultiComm = 1;
                                while ($countmultiComm<=4)
									{
									if(is_array($_POST[$field_optionIndex."_".$countmultiComm]) && !(isset($ans['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Comm"] = $CommChannel;
											   break;
									}
								      $countmultiComm++;
								    }
								}

								if(isset($DrinkId)){
								$countmultiDrink = 1;
                                while ($countmultiDrink<=4)
									{
									  if(is_array($_POST[$field_optionIndex."_".$countmultiDrink]) && !(isset($ans['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Drink"] = $DrinkId;
											   break;
									    }
								      $countmultiDrink++;
								    }

								}

								$count++;

							}


					}
					else
					{

						$OptionID 	= $answers['OptionID'];
						$BrandId 	= $answers['BrandID'];
						$CommChannel= $answers['CommunicationChannel'];
						$DrinkId  	= $answers['DrinkCategoryID'];
						$AnswerText = $answers['AnswerText'];

						$count = 1;
						$field_optionIndex = $prefix.$categoryId."_".$questionId;

								if(isset($OptionID))

								{
								$count0 = 1;
								while ($count0<=10)
									{


										$field_TempIndex = $field_optionIndex."_".$count0;
										if($answers['OptionID']==0 && isset($answers['AnswerText'])){
										$OptionID = $answers['AnswerText'];
										$field_TempIndex = $field_TempIndex."_freetext";
									    }
										if($answers['OptionID']!=0 && isset($answers['AnswerText']) && $questionId!=92 && $_POST[$field_TempIndex]){

										$OptionID = $answers['OptionID'];

									    }
										$field_commoptionIndex =  "HD_".$field_TempIndex."_"."Comm";
										$field_brandoptionIndex =  "HD_".$field_TempIndex."_"."Brand";
										$field_drinkoptionIndex =  "HD_".$field_TempIndex."_"."Drink";



										if(isset($_POST[$field_commoptionIndex])){

										  $Commpresent = 1;
										}else{

										  $Commpresent = 0;
										}
										if(isset($_POST[$field_brandoptionIndex])){

										  $Brandpresent = 1;
										}else{

										  $Brandpresent = 0;
										}
										if(isset($_POST[$field_drinkoptionIndex])){

										  $Drinkpresent = 1;
										}else{

										  $Drinkpresent = 0;
										}


                                       $index = $Commpresent.$Brandpresent.$Drinkpresent;
									     //to handle text other
									   if($questionId!=92 && $answers['OptionID']!=0 && isset($answers['AnswerText']) ){
								            $OptionID1 = $answers['AnswerText'];
											if(is_array($answers['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_".$count."_textother"] = $OptionID1;

										}

										 //to handle multi select
										if(is_array($_POST[$field_TempIndex]) && !(isset($answers['AnswerText']))){

										  $temparray[$field_optionIndex."_".$count] = $OptionID;
										}
									else
									{
									switch($index)

										{

										    case "000":

											if($_POST[$field_optionIndex."_".$count."_freetext"]){

											$temparray[$field_optionIndex."_".$count."_freetext"] = $OptionID;
											}

											else if ($_POST[$field_optionIndex."_".$count]){

											$temparray[$field_optionIndex."_".$count] = $OptionID;
											}

											break 2;


											case "111":
											 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_brandoptionIndex]== $BrandId && $_POST[$field_drinkoptionIndex] == $DrinkId)
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "110":
											 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_brandoptionIndex]== $BrandId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

										    case "101":
											 if ($_POST[$field_commoptionIndex] == $CommChannel && $_POST[$field_drinkoptionIndex] == $DrinkId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "011":
											 if ($_POST[$field_brandoptionIndex]== $BrandId  && $_POST[$field_drinkoptionIndex] == $DrinkId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "100":
											 if ($_POST[$field_commoptionIndex] == $CommChannel )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "010":
											 if ($_POST[$field_brandoptionIndex]== $BrandId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

                                           case "001":
											 if ($_POST[$field_drinkoptionIndex] == $DrinkId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

										}
									}
									 $count0++;
									}

								}


								if(isset($BrandId)){

								//to handle multi select
								$countmultiBrand = 1;
                                while ($countmultiBrand<=4)
									{
									if(is_array($_POST[$field_optionIndex."_".$countmultiBrand]) && !(isset($answers['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Brand"] = $BrandId;
											   break;
									}
									$countmultiBrand++;
								    }

								}


								if(isset($CommChannel)){
								//to handle multi select
								$countmultiComm = 1;
                                while ($countmultiComm<=4)
									{
									if(is_array($_POST[$field_optionIndex."_".$countmultiComm]) && !(isset($answers['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Comm"] = $CommChannel;
											   break;
									}
								      $countmultiComm++;
								    }
								}

								if(isset($DrinkId)){
								$countmultiDrink = 1;
                                while ($countmultiDrink<=4)
									{
									  if(is_array($_POST[$field_optionIndex."_".$countmultiDrink]) && !(isset($answers['AnswerText']))){

											$field_TempbrandIndex = $prefix.$categoryId."_".$questionId."_".$count;
											   $temparray[$field_TempbrandIndex."_"."Drink"] = $DrinkId;
											   break;
									    }
								      $countmultiDrink++;
								    }

								}


					}
			}
		}


		if(isset($HiddenFieldsArray)){

		//appending all hidden fields to the temparray
		 $temparray  =array_merge($temparray, $HiddenFieldsArray);

		}else
		$temparray  = $temparray  ;


		return $temparray;
	}
	/********************************************************************************************/

	/********************************************************************************************
		Function setconsumerData:
		This Function is to set the ConsumerPreference,Social Networks etc. fields
		that are retrieved from GetDetails
	*********************************************************************************************/
	public function setconsumerData($HiddenFieldsArray,$tagData,$prefix){

		$data = $this->$tagData;
		$temparray = array();
		if(isset($data['CategoryID'])){
			$data = array(0=>$data);
		}

		$temparray = $this->extractData($HiddenFieldsArray,$data,$prefix);


		foreach($temparray as $index=>$value){
			$value = explode(',',$value);
			$result = array_unique($value);
			$temparray[$index] = implode(',',$result);
		}

		return $temparray;
	}

	/********************************************************************************************/

	/********************************************************************************************
			Function RetriveData:
			Function is to extract field from according to the key.
	*********************************************************************************************/
	public function RetriveData($data,$key){

			foreach($data as $field=>$value)
				{

									$splitfield = explode('_',$field);

									$fieldCategory = $splitfield[0];

									if($splitfield[0]==$key){

									$Retriveddata[$field] = $value;

									}

			  }
			  return $Retriveddata;

    }
	/********************************************************************************************/

	/********************************************************************************************
			Function updateData:
			Function is to extract the new,changed and old field from the posted array and
			getDetails and create the xml for updated fields
	*********************************************************************************************/
	function updateData($postArray){

	    foreach($postArray as $index => $value){

			$splitfield = explode('_',$index);  ///replace Hd with ''
			if($splitfield[0]=="HD"){
				unset($postArray[$index]);
				$index = str_replace("HD_","",$index);

				$postArray[$index] = $value;
			}

		 }


		 foreach($postArray as $index => $value){

			if(is_array($value)){
					$count = 1;
					    //to create brand/Comm/Drink for multi select posted Fields
						foreach($value as $postvalue){
						   $tempField = explode('_',$index);
						   $index = $tempField[0].'_'.$tempField[1].'_'.$tempField[2];
							$tindex = $index.'_'.$count;

							if(isset($_POST["HD_".$tindex."_Brand"])){

							 $Brand = $_POST["HD_".$tindex."_Brand"];

							}
							if(isset($_POST["HD_".$tindex."_Comm"])){

							 $Comm = $_POST["HD_".$tindex."_Comm"];

							}
							if(isset($_POST["HD_".$tindex."Drink"])){

							 $Drink = $_POST["HD_".$tindex."Drink"];

							}


							$postArray[$tindex."_Brand"] = $Brand;

							$postArray[$tindex."_Comm"] = $Comm;

							$postArray[$tindex."_Drink"] = $Drink;

							$postArray[$tindex] = 	$postvalue;
							$count++;
						}
						$Brand = "";
						$Comm = "";
						$Drink = "";
						Unset($postArray[$index]);
					}

					//to store textother field in postOther Array
					$splitfield = explode('_',$index);
			        if($splitfield[4]=="textother"){
					if ($value == ""){
					 $postOther[$index]=$value;
					 }

					}


                    //unset the hidden brand/comm/drink which is not having corresponding the index
					if($splitfield[4]=="Brand"){

					 $checkbrandIndex = $splitfield[0]."_". $splitfield[1]."_". $splitfield[2]."_". $splitfield[3];

					}
					if($splitfield[4]=="Comm"){

					 $checkcommIndex = $splitfield[0]."_". $splitfield[1]."_". $splitfield[2]."_". $splitfield[3];

					}
					if($splitfield[4]=="Drink"){

					 $checkdrinkIndex = $splitfield[0]."_". $splitfield[1]."_". $splitfield[2]."_". $splitfield[3];

					}

					if(!(array_key_exists($checkbrandIndex,$postArray))){

					unset($postArray[$checkbrandIndex."_Brand"]);

					}
					if(!(array_key_exists($checkcommIndex,$postArray))){

					unset($postArray[$checkcommIndex."_Comm"]);

					}
					if(!(array_key_exists($checkdrinkIndex,$postArray))){

					unset($postArray[$checkdrinkIndex."_Drink"]);

					}
				}
				//if text other field is present with blank value then merge postOther array with postArray
				if(isset($postOther)){

					$postArray = array_filter($postArray);
					$postArray  =array_merge($postArray, $postOther);

				}else
				{
				$postArray = array_filter($postArray);
				}



		$new_consumerPreferences =array();
		$old_consumerPreferences =array();
		$changed_consumerPreferences =array();
		$changed_consumerProfile =array();
		$new_SocialNetworks =array();
		$old_SocialNetworks =array();
		$changed_SocialNetworks =array();
		$new_ConversionLocations =array();
		$old_ConversionLocations =array();
		$changed_ConversionLocations =array();
		$new_FacebookConnect =array();
		$old_FacebookConnect =array();
		$changed_FacebookConnect =array();
		$new_DigitalInteractions =array();
		$old_DigitalInteractions =array();
		$changed_DigitalInteractions =array();
		$new_ExtendedProfile =array();
		$old_ExtendedProfile =array();
		$changed_ExtendedProfile =array();
		$new_ExtendedOptInPreferences =array();
		$old_ExtendedOptInPreferences =array();
		$changed_ExtendedOptInPreferences =array();
		$new_HubLifeStyles =array();
		$old_HubLifeStyles =array();
		$changed_HubLifeStyles =array();
		$changed_consumeraccount =array();

		// to create the fields array and to split data into array of each section.
		foreach($postArray as $field=>$val){
				$splitfield = explode('_',$field);
				$fieldCategory = $splitfield[0];

				if($fieldCategory=='HD'){
					$fieldCategory = $splitfield[1];
				}
				$field = str_replace('[]','',$field);
				$field = str_replace('HD_','',$field);

				switch($fieldCategory){
					case 'CP':
						$consumerProfile[$field] = '';
					break;
					case 'PR':
						$consumerPreferences[$field] = '';
					break;
					case 'SN':
						$SocialNetworks[$field] = '';
					break;
					case 'CL':
						$ConversionLocations[$field] = '';
					break;
					case 'FC':
						$FacebookConnect[$field] = '';
					break;
					case 'DI':
						$DigitalInteractions[$field] = '';
					break;
					case 'EP':
						$ExtendedProfile[$field] = '';
					break;
					case 'EO':
						$ExtendedOptInPreferences[$field] = '';
					break;
					case 'HL':
						$HubLifeStyles[$field] = '';
					break;
					case 'UA':
						$consumeraccount[$field] = '';
					break;
					case 'SQ':
						$consumeraccount[$field] = '';
					break;
				}//end switch

		}//end foreach

		$this->consumerCountry = 	$this->globalCountries[$postArray['PR_4_92']]; //to handle country question

		 //to build Array which contains Comm/brand /drink field in postArray
		   foreach($postArray as $index=>$val){

					   $hiddenfields 	= explode('_',$index);
					   $countHDIndex = 1;
					   $checkhiddenIndex  = $hiddenfields[0]."_".$hiddenfields[1]."_".$hiddenfields[2];
					   if( $hiddenfields[4] == "Brand" || $hiddenfields[4] == "Drink" || $hiddenfields[4] == "Comm" ){

						$HiddenFieldsArray[$index] = $val;
					   }
					   if(is_array($_POST[$checkhiddenIndex."_".$countHDIndex]) && ($hiddenfields[4]!="textother") && ($hiddenfields[4] == "Brand" || $hiddenfields[4] == "Drink" || $hiddenfields[4] == "Comm")){

						unset($HiddenFieldsArray[$index]);

						}

			}
		// to create the fields array and to split data into array of each section.
		foreach($HiddenFieldsArray as $field=>$val){
				$splitfield = explode('_',$field);
				$fieldCategory = $splitfield[0];
				switch($fieldCategory){

					case 'PR':
						$consumerPreferencesHidden[$field] = $val;
					break;
					case 'SN':
						$SocialNetworksHidden[$field] = $val;
					break;
					case 'CL':
						$ConversionLocationsHidden[$field] = $val;
					break;
					case 'FC':
						$FacebookConnectHidden[$field] = $val;
					break;
					case 'DI':
						$DigitalInteractionsHidden[$field] = $val;
					break;
					case 'EP':
						$ExtendedProfileHidden[$field] = $val;
					break;
					case 'EO':
						$ExtendedOptInPreferencesHidden[$field] = $val;
					break;
					case 'HL':
						$HubLifeStylesHidden[$field] = $val;
					break;

				}//end switch



		}
		$SN= array();
		$CL= array();
		$FC= array();
		$DI= array();
		$EP= array();
		$EO= array();
		$HL= array();
		$UA= array();
		$CP = $this->setConsumerProfile($this->consumerProfile);

		$PR = $this->setconsumerData($consumerPreferencesHidden,'consumerPreferences','PR_');
		if(isset($this->SocialNetworks)){

		$SN = $this->setconsumerData($SocialNetworksHidden,'SocialNetworks','SN_');
		}

		if(isset($this->ConversionLocations)){

		$CL = $this->setconsumerData($ConversionLocationsHidden,'ConversionLocations','CL_');
		}

		if(isset($this->FacebookConnect)){

		$FC = $this->setconsumerData($FacebookConnectHidden,'FacebookConnect','FC_');

		}
		if(isset($this->DigitalInteractions)){

		$DI = $this->setconsumerData($DigitalInteractionsHidden,'DigitalInteractions','DI_');
		}
		if(isset($this->ExtendedProfile)){

		$EP = $this->setconsumerData($ExtendedProfileHidden,'ExtendedProfile','EP_');
		}

		if(isset($this->ExtendedOptInPreferences)){

		$EO = $this->setconsumerData($ExtendedOptInPreferencesHidden,'ExtendedOptInPreferences','EO_');
		}

		if(isset($this->HubLifeStyles)){

		$HL = $this->setconsumerData($HubLifeStylesHidden,'HubLifeStyles','HL_');
		}

		$UA = $this->setconsumeraccount($this->consumeraccount);

		$getDetails = array_merge($CP,$PR,$SN,$CL,$FC,$DI,$EP,$EO,$HL,$UA);



		$newFields = array();
		$oldFields = array();
		$changedFields = array();
		$tempArray = array();
        $oldFieldsDelete = array();

	/*print_r($postArray);
	print_r($getDetails);exit;*/


	//to compare posted fields with get fields and their values to set changed & new fields
	foreach($postArray as $index=>$value){
		$t = explode('_',$index);
		if(in_array($index, $this->discardedFields)){
			//unset($postArray[$index]);

			continue;
		}
		else
		{
						$temp = explode('_',$index);
						foreach($getDetails as $detailIndex=>$detailsValue){
							$x = explode('_',$detailIndex);

							$checkBrandIndex = $x[0]."_".$x[1]."_".$x[2]."_".$x[3];
								 if(in_array($detailIndex, $this->discardedGetFields)){
									unset($getDetails[$detailIndex]);

									continue;
							}else{


								if($index == $detailIndex){

									if($value!=$detailsValue){

										$changedFields[$index] = $value;
									}
									$notFoundflag = false;
									break;
								}else{

									$notFoundflag = true;
								}



							}
						}


		}

		if($notFoundflag){

			$newFields[$index] = $value;

		}

		if($t[0]=='CP'){

		$changed_consumerProfile[$index] = $value;
		}

		if($t[0]=='SQ'||$t[0]=='UA'){

		$changed_consumeraccount[$index] = $value;
		}
	}

	//to compare get fields with posted fields and their values to set old fields
    foreach($getDetails as $detailIndex=>$detailsValue){

	   $x = explode('_',$detailIndex);
		if(in_array($detailIndex, $this->discardedGetFields)){
				unset($getDetails[$detailIndex]);

						continue;
		}else{

						$temp = explode('_',$index);
						 foreach($postArray as $index=>$value){
							$t = explode('_',$index);

							if(in_array($index, $this->discardedFields)){

								continue;
							}
							else
							{

							if($detailIndex == $index){

								if($detailsValue!=$value){

									$changedFields2[$detailIndex] = $detailsValue;
								}
								$notFoundflagDelete = false;
								break;
							}else{

								$notFoundflagDelete = true;
							}



							}
						}


		}

		if($notFoundflagDelete){

			$oldFieldsDelete[$detailIndex] = $detailsValue;

		}


	}

    foreach($oldFieldsDelete as $detailIndex=>$detailsValue)
		{
                 $splitIndex = explode('_',$detailIndex);
				 if($splitIndex[0]=="CP"){
				 unset($oldFieldsDelete[$detailIndex]);
				 }

        }

	foreach($postArray as $index=>$val){

			foreach($oldFieldsDelete as $field=>$value){
				if(strpos( $field, $index )!==false){
					$tempArrayDelete[$field]  =$value;
				}elseif(strpos( $index,$field )!==false)
				{
						$tempArrayDelete[$field]  =$value;
				}
			}
	}
	$oldFieldsDelete = array_diff_key($oldFieldsDelete,$tempArrayDelete);

	//to create changed filed array by comparing with postArray
	$tempArray = array();
	foreach($changedFields as $field=>$value){

			foreach($postArray as $index=>$val){
			   $otherfields 	= explode('_',$field);
			   if( $otherfields[4] == "textother"){
			    $othertext  = $otherfields[0]."_".$otherfields[1]."_".$otherfields[2]."_".$otherfields[3];

			    $tempArray[$othertext]  = $_POST[$othertext];
				//to create brand/Comm/Drink for text other Changed Fields and to set the corresponding index.
				if(isset($_POST["HD_".$othertext."_Brand"])){

		             $tempArray[$othertext."_Brand"]  = $_POST["HD_".$othertext."_Brand"];

                }
				if(isset($_POST["HD_".$othertext."_Comm"])){

		             $tempArray[$othertext."_Comm"]  = $_POST["HD_".$othertext."_Comm"];

                }
				if(isset($_POST["HD_".$othertext."_Drink"])){

		             $tempArray[$othertext."_Drink"]  = $_POST["HD_".$othertext."_Drink"];

                }

			   }


				if(strpos( $field, $index )!==false){
					$tempArray[$index]  =$val;
				}elseif(strpos( $index,$field )!==false)
				{
						$tempArray[$index]  =$val;
				}
			}
	}



	$changedFields= $tempArray;
	//to create oldFields array by comparing changedFields and GetDetails array
	$tempArray = array();
	foreach($changedFields as $field=>$value){
		foreach($getDetails as $index=>$val){

		     $otherfields 	= explode('_',$field);
			   if( $otherfields[4] == "textother"){
			    $othertext  = $otherfields[0]."_".$otherfields[1]."_".$otherfields[2]."_".$otherfields[3];

			    $tempArray[$othertext]  = $getDetails[$othertext];
				//to create brand/Comm/Drink for text other Old Fields and to set the corresponding index.
				if(isset($_POST["HD_".$othertext."_Brand"])){

		             $tempArray[$othertext."_Brand"]  = $_POST["HD_".$othertext."_Brand"];

                }
				if(isset($_POST["HD_".$othertext."_Comm"])){

		             $tempArray[$othertext."_Comm"]  = $_POST["HD_".$othertext."_Comm"];

                }
				if(isset($_POST["HD_".$othertext."_Drink"])){

		             $tempArray[$othertext."_Drink"]  = $_POST["HD_".$othertext."_Drink"];

                }

			   }

			if(strpos( $index, $field)!==false){
				$tempArray[$index]  =$val;
			}elseif(strpos($field,$index)!==false){
				$tempArray[$index]  =$val;
			}
		}
	}


	$oldFields = $tempArray;

	//to compare changed and old field and filter the index which is not having the value
	foreach($changedFields as $field=>$value){
		foreach($oldFields as $index=>$val){
		$fields 	= explode('_',$field);
		if((isset($fields[3])&& !is_numeric($fields[3]))||(isset($fields[4])&& !is_numeric($fields[4]))){
		continue;
		}else{
			 if($field==$index){

					$valArray 	= explode(',',$val);
					$valueArray = explode(',',$value);

					$tempArray = array_diff($valArray,$valueArray);
					$valueArray = array_diff($valueArray,$valArray);
					$valArray = $tempArray;
					$valueArray = implode(',',$valueArray );
					$valArray = implode(',',$valArray );
					$changedFields[$field] = $valueArray;
					$oldFields[$index]=$valArray;
					break;

			 }
			 }
		}
	}



	//to add the text other index to changedFields array if its still not having the value
	foreach($changedFields as $fields=>$value){

			foreach($postArray as $index=>$val){
			   $otherfields 	= explode('_',$fields);
			   if( $otherfields[4] == "textother" ){
			    $othertext  = $otherfields[0]."_".$otherfields[1]."_".$otherfields[2]."_".$otherfields[3];

			    $changedFields[$othertext]  = $_POST[$othertext];



			   }
	 }


	 $splitfieldother = explode('_',$fields);
			        if($splitfieldother[4]=="textother"){
					if ($value == ""){
					 $postOtherUpdate[$fields]=$value;
					 }

					}


	 }
	 //to add the text other index to oldFields array if its still not having the value
	 foreach($oldFields as $field=>$value){

			foreach($getDetails as $index=>$val){
			   $otherfields 	= explode('_',$field);
			   if( $otherfields[4] == "textother" ){
			    $othertext  = $otherfields[0]."_".$otherfields[1]."_".$otherfields[2]."_".$otherfields[3];

			    $oldFields[$othertext]  = $getDetails[$othertext];



			   }
	       }
		   $splitfield = explode('_',$field);
		    if($splitfield[4]=="textother"){
			if ($value == ""){
			   $postOtherold[$field]=$value;
			   }

			}
	 }


	 if(isset($postOtherUpdate)){

		$changedFields = array_filter($changedFields);
		$changedFields  =array_merge($changedFields, $postOtherUpdate);

		}else
		{
			$changedFields = array_filter($changedFields);
		}

	  if(isset($postOtherold)){

		$oldFields = array_filter($oldFields);
		$oldFields  =array_merge($oldFields, $postOtherold);

		}else
		{
			$oldFields = array_filter($oldFields);
		}

	if(isset($oldFieldsDelete)){

     $oldFields  =array_merge($oldFields, $oldFieldsDelete);

	}

    //unset the brand index from the getDetails ,for which the brand value is not set in the hidden fields.because the default BrandID will be appended for those index which is not having the Brand value.
    foreach($getDetails as $index=>$val){
    foreach($postArray as $postfield=>$value){
	 $splitgetindex = explode('_',$index);

	$CheckBrandindex = $splitgetindex[0]."_".$splitgetindex[1]."_".$splitgetindex[2];

           if ((!(isset($_POST["HD_".$CheckBrandindex."_1_Brand"])))&&((isset($getDetails[$index."_Brand"])))){

			   unset($getDetails[$index."_Brand"]);
			   }

		}
	}
   //to handle multi select Fields
	$multiPostArray = array();
	$multiGetArray = array();
	$multiselectPostArray = array();

	foreach($postArray as $postfield=>$value){
    foreach($getDetails as $index=>$val){


		     $splitpostfield = explode('_',$postfield);
			 $splitgetfield = explode('_',$index);
			 $countIndex = 1;

			 $checkPostIndex1 = $splitpostfield[0]."_".$splitpostfield[1]."_".$splitpostfield[2];
			 $checkGetIndex1 = $splitgetfield[0]."_".$splitgetfield[1]."_".$splitgetfield[2];

			 //to check multi select is not in getDetails array
			  if(!(is_array($_POST[$checkGetIndex1."_".$countIndex]))){

			 //to check whether the index is a multi select field in a case where multi select fields is not set during registration
			 if(is_array($_POST[$checkPostIndex1."_".$countIndex])&& ($splitpostfield[4]!="textother")){



			 //store brand index from the postArray
			  if($splitpostfield[4]=="Brand"){
			    $brandPostArray[$postfield] = $value;

			  }
			   //store comm index from the postArray
			   if($splitpostfield[4]=="Comm"){
			    $commPostArray[$postfield] = $value;

			  }
			   //store drink index from the postArray
			  if($splitpostfield[4]=="Drink"){
			    $drinkPostArray[$postfield] = $value;

			  }

                if($splitpostfield[4]!="Brand" && $splitpostfield[4]!="Comm" && $splitpostfield[4]!="Drink" ){

					if(!(array_key_exists($checkPostIndex1."_".$countIndex,$getDetails))){

					   $multiselectPostArray[$postfield] = $value;
					}

				}

			  }
			 }

			 //to check whether the index is a multi select field in a case where multi select fields is already set during registration
			  if(is_array($_POST[$checkGetIndex1."_".$countIndex]) && is_array($_POST[$checkPostIndex1."_".$countIndex])&& ($splitpostfield[4]!="textother")&& ($splitgetfield[4]!="textother")){

			  //store brand index from the getDetails array
			  if($splitgetfield[4]=="Brand"){
			    $brandoldArray[$index] = $val;

			  }
			  //store comm index from the getDetails array
			  if($splitgetfield[4]=="Comm"){
			    $commoldArray[$index] = $val;

			  }
			  //store drink index from the getDetails array
			  if($splitgetfield[4]=="Drink"){
			    $drinkoldArray[$index] = $val;

			  }
			  //store brand index from the postArray
			  if($splitpostfield[4]=="Brand"){
			    $brandNewArray[$postfield] = $value;

			  }
			   //store comm index from the postArray
			   if($splitpostfield[4]=="Comm"){
			    $commNewArray[$postfield] = $value;

			  }
			   //store drink index from the postArray
			  if($splitpostfield[4]=="Drink"){
			    $drinkNewArray[$postfield] = $value;

			  }



			  if($checkPostIndex1 == $checkGetIndex1  && $splitgetfield[4]!="Brand" && $splitgetfield[4]!="Comm" && $splitgetfield[4]!="Drink" && $splitpostfield[4]!="Brand" && $splitpostfield[4]!="Comm" && $splitpostfield[4]!="Drink"){
			      //create array which is having multi select fields expect hidden fields from postArray
				   $multiPostArray[$postfield] = $value;

			   }

			   if($checkPostIndex1 == $checkGetIndex1 &&  $splitgetfield[4]!="Brand" && $splitgetfield[4]!="Comm" && $splitgetfield[4]!="Drink"){
			      //create array which is having multi select fields expect hidden fields from GetDetails
					$multiGetArray[$index] = $val;
			   }


			  }

		}

	}

	$PROldArray = array();
	$SNOldArray = array();
	$CLOldArray = array();
	$FCOldArray = array();
	$DIOldArray = array();
	$EPOldArray = array();
	$EOOldArray = array();
	$HLOldArray = array();
	$MultiselectoldArray = array();


	$PRNewArray = array();
	$SNNewArray = array();
	$CLNewArray = array();
	$FCNewArray = array();
	$DINewArray = array();
	$EPNewArray = array();
	$EONewArray = array();
	$HLNewArray = array();
	$MultiselectNewArray = array();


	//calling RetriveData to filter the fields which is having PR fields from multiPostArray
	$PRPostArray = $this->RetriveData($multiPostArray,"PR");
    $PRGetArray = $this->RetriveData($multiGetArray,"PR");

	if(isset($PRPostArray) && isset($PRGetArray)){
	//to create old preference array for multi select fields
	$PROldArray = array_diff($PRGetArray,$PRPostArray);
	//to create changed preference array for multi select fields
	$PRNewArray = array_diff($PRPostArray,$PRGetArray);
	}


	$SNPostArray = $this->RetriveData($multiPostArray,"SN");
    $SNGetArray = $this->RetriveData($multiGetArray,"SN");
	if(isset($SNPostArray) && isset($SNGetArray)){
	//to create old array
	$SNOldArray = array_diff($SNGetArray,$SNPostArray);
	//to create changed array
	$SNNewArray = array_diff($SNPostArray,$SNGetArray);
	}

	$CLPostArray = $this->RetriveData($multiPostArray,"CL");
    $CLGetArray = $this->RetriveData($multiGetArray,"CL");
	if(isset($CLPostArray) && isset($CLGetArray)){
	//to create old array
	$CLOldArray = array_diff($CLGetArray,$CLPostArray);
	//to create changed array
	$CLNewArray = array_diff($CLPostArray,$CLGetArray);
	}

	$FCPostArray = $this->RetriveData($multiPostArray,"FC");
    $FCGetArray = $this->RetriveData($multiGetArray,"FC");
	if(isset($FCPostArray) && isset($FCGetArray)){
	//to create old array
	$FCOldArray = array_diff($FCGetArray,$FCPostArray);
	//to create changed array
	$FCNewArray = array_diff($FCPostArray,$FCGetArray);
	}

	$DIPostArray = $this->RetriveData($multiPostArray,"DI");
    $DIGetArray = $this->RetriveData($multiGetArray,"DI");
	if(isset($DIPostArray) && isset($DIGetArray)){
	//to create old array
	$DIOldArray = array_diff($DIGetArray,$DIPostArray);
	//to create changed array
	$DINewArray = array_diff($DIPostArray,$DIGetArray);
	}

	$EPPostArray = $this->RetriveData($multiPostArray,"EP");
    $EPGetArray = $this->RetriveData($multiGetArray,"EP");
	if(isset($EPPostArray) && isset($EPGetArray)){
	//to create old array
	$EPOldArray = array_diff($EPGetArray,$EPPostArray);
	//to create changed array
	$EPNewArray = array_diff($EPPostArray,$EPGetArray);
	}

	$EOPostArray = $this->RetriveData($multiPostArray,"EO");
    $EOGetArray = $this->RetriveData($multiGetArray,"EO");
	if(isset($EOPostArray) && isset($EOGetArray)){
	//to create old array
	$EOOldArray = array_diff($EOGetArray,$EOPostArray);
	//to create changed array
	$EONewArray = array_diff($EOPostArray,$EOGetArray);
	}

	$HLPostArray = $this->RetriveData($multiPostArray,"HL");
    $HLGetArray = $this->RetriveData($multiGetArray,"HL");
	if(isset($HLPostArray) && isset($HLGetArray)){
	//to create old array
	$HLOldArray = array_diff($HLGetArray,$HLPostArray);
	//to create changed array
	$HLNewArray = array_diff($HLPostArray,$HLGetArray);

	}
	//Combine all old array created for individual sections for multi select fields to form multi-select old array.
	$MultiselectoldArray = array_merge($PROldArray,$SNOldArray,$CLOldArray,$FCOldArray,$DIOldArray,$EPOldArray,$EOOldArray,$HLOldArray);
	//Combine all changed array created for individual sections for multi select fields to form multi-select changed array..
    $MultiselectNewArray = array_merge($PRNewArray,$SNNewArray,$CLNewArray,$FCNewArray,$DINewArray,$EPNewArray,$EONewArray,$HLNewArray);


	//to handle brand index for multi-select old array
	foreach($MultiselectoldArray as $multiGetindex=>$multiGetval){
	foreach($brandoldArray as $brandoldindex=>$brandoldval){

		   $multiGetfields 	= explode('_',$multiGetindex);
		   $brandoldfields 	= explode('_',$brandoldindex);

			$checkmultiGetIndex  = $multiGetfields[0]."_".$multiGetfields[1]."_".$multiGetfields[2]."_".$multiGetfields[3];
			$checkbrandoldIndex  = $brandoldfields[0]."_".$brandoldfields[1]."_".$brandoldfields[2]."_".$brandoldfields[3];

			if(isset($brandoldArray)) {
			//check brand index and old array index are equal
				if($checkbrandoldIndex == $checkmultiGetIndex ){
				  $brandoldArrayVal[$brandoldindex] = $brandoldval;
				  $MultiselectoldArray = array_merge($MultiselectoldArray,$brandoldArrayVal);

				 }

			}else
			$MultiselectoldArray = $MultiselectoldArray;
		}
	}

	//to handle brand index for multi-select changed array
	foreach($MultiselectNewArray as $multiNewindex=>$multiGetval){
	foreach($brandNewArray as $brandnewindex=>$brandnewval){

		   $multiNewfields 	= explode('_',$multiNewindex);
		   $brandnewfields 	= explode('_',$brandnewindex);

			$checkmultiGetIndex  = $multiNewfields[0]."_".$multiNewfields[1]."_".$multiNewfields[2]."_".$multiNewfields[3];
			$checkbrandnewIndex  = $brandnewfields[0]."_".$brandnewfields[1]."_".$brandnewfields[2]."_".$brandnewfields[3];

			if(isset($brandNewArray)) {
				if($checkbrandnewIndex == $checkmultiGetIndex ){
				  $brandnewArrayVal[$brandnewindex] = $brandnewval;
				  $MultiselectNewArray = array_merge($MultiselectNewArray,$brandnewArrayVal);

				 }

			}else
			$MultiselectNewArray = $MultiselectNewArray;
		}
	}

	//to handle brand index for multi-select new array
	foreach($multiselectPostArray as $multiPostindex=>$multiPostval){
	foreach($brandPostArray as $brandpostindex=>$brandpostval){

		   $multiPostfields 	= explode('_',$multiPostindex);
		   $brandpostfields 	= explode('_',$brandpostindex);

			$checkmultiPostIndex  = $multiPostfields[0]."_".$multiPostfields[1]."_".$multiPostfields[2]."_".$multiPostfields[3];
			$checkbrandpostIndex  = $brandpostfields[0]."_".$brandpostfields[1]."_".$brandpostfields[2]."_".$brandpostfields[3];

			if(isset($brandPostArray)) {
				if($checkbrandpostIndex == $checkmultiPostIndex ){
				  $brandpostArrayVal[$brandpostindex] = $brandpostval;
				  $multiselectPostArray = array_merge($multiselectPostArray,$brandpostArrayVal);

				 }

			}else
			$multiselectPostArray = $multiselectPostArray;
		}
	}

	//to handle comm index for multi-select old array
	foreach($MultiselectoldArray as $multiGetindex=>$multiGetval){
	foreach($commoldArray as $commoldindex=>$commoldval){

		   $multiGetfields 	= explode('_',$multiGetindex);
		   $commoldfields 	= explode('_',$commoldindex);

			$checkmultiGetIndex  = $multiGetfields[0]."_".$multiGetfields[1]."_".$multiGetfields[2]."_".$multiGetfields[3];
			$checkcommoldIndex  = $commoldfields[0]."_".$commoldfields[1]."_".$commoldfields[2]."_".$commoldfields[3];

			if(isset($commoldArray)) {
				if($checkcommoldIndex == $checkmultiGetIndex ){
				  $commoldArrayVal[$commoldindex] = $commoldval;
				  $MultiselectoldArray = array_merge($MultiselectoldArray,$commoldArrayVal);

				 }

			}else
			$MultiselectoldArray = $MultiselectoldArray;
		}
	}

	//to handle comm index for multi-select changed array
	foreach($MultiselectNewArray as $multiNewindex=>$multiGetval){
	foreach($commNewArray as $commnewindex=>$commnewval){

		   $multiNewfields 	= explode('_',$multiNewindex);
		   $commnewfields 	= explode('_',$commnewindex);

			$checkmultiGetIndex  = $multiNewfields[0]."_".$multiNewfields[1]."_".$multiNewfields[2]."_".$multiNewfields[3];
			$checkcommnewIndex  = $commnewfields[0]."_".$commnewfields[1]."_".$commnewfields[2]."_".$commnewfields[3];

			if(isset($commNewArray)) {
				if($checkcommnewIndex == $checkmultiGetIndex ){
				  $commnewArrayVal[$commnewindex] = $commnewval;
				  $MultiselectNewArray = array_merge($MultiselectNewArray,$commnewArrayVal);

				 }

			}else
			$MultiselectNewArray = $MultiselectNewArray;
		}
	}

	//to handle comm index for multi-select new array
	foreach($multiselectPostArray as $multiPostindex=>$multiPostval){
	foreach($commPostArray as $commpostindex=>$commpostval){

		   $multiPostfields 	= explode('_',$multiPostindex);
		   $commpostfields 	= explode('_',$commpostindex);

			$checkmultiPostIndex  = $multiPostfields[0]."_".$multiPostfields[1]."_".$multiPostfields[2]."_".$multiPostfields[3];
			$checkcommpostIndex  = $commpostfields[0]."_".$commpostfields[1]."_".$commpostfields[2]."_".$commpostfields[3];

			if(isset($commPostArray)) {
				if($checkcommpostIndex == $checkmultiPostIndex ){
				  $commpostArrayVal[$commpostindex] = $commpostval;
				  $multiselectPostArray = array_merge($multiselectPostArray,$commpostArrayVal);

				 }

			}else
			$multiselectPostArray = $multiselectPostArray;
		}
	}
	//to handle drink index for multi-select old array
	foreach($MultiselectoldArray as $multiGetindex=>$multiGetval){
	foreach($drinkoldArray as $drinkoldindex=>$drinkoldval){

		   $multiGetfields 	= explode('_',$multiGetindex);
		   $drinkoldfields 	= explode('_',$drinkoldindex);

			$checkmultiGetIndex  = $multiGetfields[0]."_".$multiGetfields[1]."_".$multiGetfields[2]."_".$multiGetfields[3];
			$checkdrinkoldIndex  = $drinkoldfields[0]."_".$drinkoldfields[1]."_".$drinkoldfields[2]."_".$drinkoldfields[3];

			if(isset($drinkoldArray)) {
				if($checkdrinkoldIndex == $checkmultiGetIndex ){
				  $drinkoldArrayVal[$drinkoldindex] = $drinkoldval;
				  $MultiselectoldArray = array_merge($MultiselectoldArray,$drinkoldArrayVal);

				 }

			}else
			$MultiselectoldArray = $MultiselectoldArray;
		}
	}

	//to handle drink index for multi-select changed array
	foreach($MultiselectNewArray as $multiNewindex=>$multiGetval){
	foreach($drinkNewArray as $drinknewindex=>$drinknewval){

		   $multiNewfields 	= explode('_',$multiNewindex);
		   $drinknewfields 	= explode('_',$drinknewindex);

			$checkmultiGetIndex  = $multiNewfields[0]."_".$multiNewfields[1]."_".$multiNewfields[2]."_".$multiNewfields[3];
			$checkdrinknewIndex  = $drinknewfields[0]."_".$drinknewfields[1]."_".$drinknewfields[2]."_".$drinknewfields[3];

			if(isset($drinkNewArray)) {
				if($checkdrinknewIndex == $checkmultiGetIndex ){
				  $drinknewArrayVal[$drinknewindex] = $drinknewval;
				  $MultiselectNewArray = array_merge($MultiselectNewArray,$drinknewArrayVal);

				 }

			}else
			$MultiselectNewArray = $MultiselectNewArray;
		}
	}

	//to handle drink index for multi-select new array
	foreach($multiselectPostArray as $multiPostindex=>$multiPostval){
	foreach($drinkPostArray as $drinkpostindex=>$drinkpostval){

		   $multiPostfields 	= explode('_',$multiPostindex);
		   $drinkpostfields 	= explode('_',$drinkpostindex);

			$checkmultiPostIndex  = $multiPostfields[0]."_".$multiPostfields[1]."_".$multiPostfields[2]."_".$multiPostfields[3];
			$checkdrinkpostIndex  = $drinkpostfields[0]."_".$drinkpostfields[1]."_".$drinkpostfields[2]."_".$drinkpostfields[3];

			if(isset($drinkPostArray)) {
				if($checkdrinkpostIndex == $checkmultiPostIndex ){
				  $drinkpostArrayVal[$drinkpostindex] = $drinkpostval;
				  $multiselectPostArray = array_merge($multiselectPostArray,$drinkpostArrayVal);

				 }

			}else
			$multiselectPostArray = $multiselectPostArray;
		}
	}

	//unset the multi-select fields from oldFields
	foreach($oldFields as $oldfield=>$oldvalue1){
	         $splitoldfield = explode('_',$oldfield);
			 $countIndex= 1;
			 $checkOldIndex1 = $splitoldfield[0]."_".$splitoldfield[1]."_".$splitoldfield[2];
		if(is_array($_POST[$checkOldIndex1."_".$countIndex]) && ($splitoldfield[4]!="textother")){

				   unset($oldFields[$oldfield]);
		 }

	}
	if(isset($MultiselectoldArray)){

	//to merge multi-select old array with oldFields array
	$oldFields = array_merge($oldFields,$MultiselectoldArray);

	}

	//unset multi-select fields from newFields array
	foreach($newFields as $newfield=>$newvalue1){
	         $splitnewfield = explode('_',$newfield);
			 $countIndex= 1;
			 $checkNewIndex1 = $splitnewfield[0]."_".$splitnewfield[1]."_".$splitnewfield[2];
		if(is_array($_POST[$checkNewIndex1."_".$countIndex]) && ($splitnewfield[4]!="textother")){

				   unset($newFields[$newfield]);
		 }

	}

	if(isset($multiselectPostArray)){

	//to merge multi-select new array with newFields array
	$newFields = array_merge($newFields,$multiselectPostArray);

	}


	//unset multi-select fields from changed array
	foreach($changedFields as $changedfield=>$chnagevalue1){
	         $splitchangedfield = explode('_',$changedfield);
			 $countIndex= 1;
			 $checkNewIndex1 = $splitchangedfield[0]."_".$splitchangedfield[1]."_".$splitchangedfield[2];
	if(is_array($_POST[$checkNewIndex1."_".$countIndex]) && ($splitchangedfield[4]!="textother")){

			   unset($changedFields[$changedfield]);
	 }

	}

	if(isset($MultiselectNewArray)){

	//to merge multi-select changed array with changedFields array
	$changedFields = array_merge($changedFields,$MultiselectNewArray);

	}


	/*
   	print_r($newFields);
	print_r($changedFields);
	print_r($oldFields);*/

	//to  split NewFields data into array of each section.
    foreach($newFields as $field=>$value)
	{

						$splitfield = explode('_',$field);

						$fieldCategory = $splitfield[0];

						switch($fieldCategory){

							case 'PR':
								$new_consumerPreferences[$field] = $value;
							break;
							case 'SN':
								$new_SocialNetworks[$field] = $value;
							break;
							case 'CL':
								$new_ConversionLocations[$field] = $value;
							break;
							case 'FC':
								$new_FacebookConnect[$field] = $value;
							break;
							case 'DI':
								$new_DigitalInteractions[$field] = $value;
							break;
							case 'EP':
								$new_ExtendedProfile[$field] = $value;
							break;
							case 'EO':
								$new_ExtendedOptInPreferences[$field] = $value;
							break;
							case 'HL':
								$new_HubLifeStyles[$field] = $value;
							break;

						}//end switch

	}//end foreach

    //to  split changedFields data into array of each section.
	foreach($changedFields as $field=>$value)
	{
					$splitfield = explode('_',$field);
					$fieldCategory = $splitfield[0];
					$fieldFreetext = $splitfield[4];

				    if($fieldFreetext!="freetext"){
					switch($fieldCategory){

						case 'PR':
							$changed_consumerPreferences[$field] = $value;
						break;
						case 'SN':
							$changed_SocialNetworks[$field] = $value;
						break;
						case 'CL':
							$changed_ConversionLocations[$field] = $value;
						break;
						case 'FC':
							$changed_FacebookConnect[$field] = $value;
						break;
						case 'DI':
							$changed_DigitalInteractions[$field] = $value;
						break;
						case 'EP':
							$changed_ExtendedProfile[$field] = $value;
						break;
						case 'EO':
							$changed_ExtendedOptInPreferences[$field] = $value;
						break;
						case 'HL':
							$changed_HubLifeStyles[$field] = $value;
						break;



					  }//end switch
				    }

					if($fieldFreetext=="freetext"){

					switch($fieldCategory){
					    case 'PR':
							$changedtext_consumerPreferences[$field] = $value;
						break;
						case 'SN':
							$changedtext_SocialNetworks[$field] = $value;
						break;
						case 'CL':
							$changedtext_ConversionLocations[$field] = $value;
						break;
						case 'FC':
							$changedtext_FacebookConnect[$field] = $value;
						break;
						case 'DI':
							$changedtext_DigitalInteractions[$field] = $value;
						break;
						case 'EP':
							$changedtext_ExtendedProfile[$field] = $value;
						break;
						case 'EO':
							$changedtext_ExtendedOptInPreferences[$field] = $value;
						break;
						case 'HL':
							$changedtext_HubLifeStyles[$field] = $value;
						break;
					}

					}

	}//end foreach


	 //to  split oldFields data into array of each section.
	foreach($oldFields as $field=>$value)
	{
					$splitfield = explode('_',$field);

					$fieldCategory = $splitfield[0];
					$fieldFreetextold = $splitfield[4];

					if($fieldFreetextold!="freetext"){
					switch($fieldCategory){

						case 'PR':
							$old_consumerPreferences[$field] = $value;
						break;
						case 'SN':
							$old_SocialNetworks[$field] = $value;
						break;
						case 'CL':
							$old_ConversionLocations[$field] = $value;
						break;
						case 'FC':
							$old_FacebookConnect[$field] = $value;
						break;
						case 'DI':
							$old_DigitalInteractions[$field] = $value;
						break;
						case 'EP':
							$old_ExtendedProfile[$field] = $value;
						break;
						case 'EO':
							$old_ExtendedOptInPreferences[$field] = $value;
						break;
						case 'HL':
							$old_HubLifeStyles[$field] = $value;
						break;

					}//end switch
					}

	}//end foreach



	   if(!empty($new_consumerPreferences)){
        //send new_consummerprefence with modify flag as "I"
        $preference_insertArray = $this->formatArray('Preferences',$new_consumerPreferences,'I');}
		 if(!empty($old_consumerPreferences)){
        //send old_consummerprefence with modify flag as "D"
		$preference_deleteArray = $this->formatArray('Preferences',$old_consumerPreferences,'D');}
		if(!empty($changed_consumerPreferences)){
        //send changed_consummerprefence with modify flag as "I"
		$preference_updateArray = $this->formatArray('Preferences',$changed_consumerPreferences,'I');}
		if(!empty($changedtext_consumerPreferences)){
        //send changedtext_consumerPreferences with modify flag as "U"	for free text
		$preferencetext_updateArray = $this->formatArray('Preferences',$changedtext_consumerPreferences,'U');}
	    $PR = $preference_insertArray.$preference_deleteArray.$preference_updateArray.$preferencetext_updateArray;


		if(!empty($changed_consumerProfile)){
		$consumerProfile_updateArray = $this->consumerProfile($changed_consumerProfile,'U');}
		$CP = $consumerProfile_updateArray;


        if(!empty($new_SocialNetworks)){
        $SocialNetworks_insertArray = $this->formatArray('SocialNetworks',$new_SocialNetworks,'I');}
		if(!empty($old_SocialNetworks)){
		$SocialNetworks_deleteArray = $this->formatArray('SocialNetworks',$old_SocialNetworks,'D');}
		if(!empty($changed_SocialNetworks)){
		$SocialNetworks_updateArray = $this->formatArray('SocialNetworks',$changed_SocialNetworks,'I');}
		if(!empty($changedtext_SocialNetworks)){
		$SocialNetworkstext_updateArray = $this->formatArray('SocialNetworks',$changedtext_SocialNetworks,'U');}
		$SN = $SocialNetworks_insertArray.$SocialNetworks_deleteArray.$SocialNetworks_updateArray.$SocialNetworkstext_updateArray;



		if(!empty($new_ConversionLocations)){
		$ConversionLocations_insertArray = $this->formatArray('ConversionLocations',$new_ConversionLocations,'I');}
		if(!empty($old_ConversionLocations)){
		$ConversionLocations_deleteArray = $this->formatArray('ConversionLocations',$old_ConversionLocations,'D');}
		if(!empty($changed_ConversionLocations)){
		$ConversionLocations_updateArray = $this->formatArray('ConversionLocations',$changed_ConversionLocations,'I');}
		if(!empty($changedtext_ConversionLocations)){
		$ConversionLocationstext_updateArray = $this->formatArray('ConversionLocations',$changedtext_ConversionLocations,'U');}
		$CL = $ConversionLocations_insertArray.$ConversionLocations_deleteArray.$ConversionLocations_updateArray.$ConversionLocationstext_updateArray;


		if(!empty($new_FacebookConnect)){
		$FacebookConnect_insertArray = $this->formatArray('FacebookConnect',$new_FacebookConnect,'I');}
		if(!empty($old_FacebookConnect)){
		$FacebookConnect_deleteArray = $this->formatArray('FacebookConnect',$old_FacebookConnect,'D');}
		if(!empty($changed_FacebookConnect)){
		$FacebookConnect_updateArray = $this->formatArray('FacebookConnect',$changed_FacebookConnect,'I');}
		if(!empty($changedtext_FacebookConnect)){
		$FacebookConnecttext_updateArray = $this->formatArray('FacebookConnect',$changedtext_FacebookConnect,'U');}
		$FC = $FacebookConnect_insertArray.$FacebookConnect_deleteArray.$FacebookConnect_updateArray.$FacebookConnecttext_updateArray;


		if(!empty($new_DigitalInteractions)){
		$DigitalInteractions_insertArray = $this->formatArray('DigitalInteractions',$new_DigitalInteractions,'I');}
		if(!empty($old_DigitalInteractions)){
		$DigitalInteractions_deleteArray = $this->formatArray('DigitalInteractions',$old_DigitalInteractions,'D');}
		if(!empty($changed_DigitalInteractions)){
		$DigitalInteractions_updateArray = $this->formatArray('DigitalInteractions',$changed_DigitalInteractions,'I');}
		if(!empty($changedtext_DigitalInteractions)){
		$DigitalInteractionstext_updateArray = $this->formatArray('DigitalInteractions',$changedtext_DigitalInteractions,'U');}
		$DI = $DigitalInteractions_insertArray.$DigitalInteractions_deleteArray.$DigitalInteractions_updateArray.$DigitalInteractionstext_updateArray;

		if(!empty($new_ExtendedProfile)){
		$ExtendedProfile_insertArray = $this->formatArray('ExtendedProfile',$new_ExtendedProfile,'I');}
		if(!empty($old_ExtendedProfile)){
		$ExtendedProfile_deleteArray = $this->formatArray('ExtendedProfile',$old_ExtendedProfile,'D');}
		if(!empty($changed_ExtendedProfile)){
		$ExtendedProfile_updateArray = $this->formatArray('ExtendedProfile',$changed_ExtendedProfile,'I');}
		if(!empty($changedtext_ExtendedProfile)){
		$ExtendedProfiletext_updateArray = $this->formatArray('ExtendedProfile',$changedtext_ExtendedProfile,'U');}
		$EP = $ExtendedProfile_insertArray.$ExtendedProfile_deleteArray.$ExtendedProfile_updateArray.$ExtendedProfiletext_updateArray;


		if(!empty($new_ExtendedOptInPreferences)){
		$ExtendedOptInPreferences_insertArray = $this->formatArray('ExtendedOptInPreferences',$new_ExtendedOptInPreferences,'I');}
		if(!empty($old_ExtendedOptInPreferences)){
		$ExtendedOptInPreferences_deleteArray = $this->formatArray('ExtendedOptInPreferences',$old_ExtendedOptInPreferences,'D');}
		if(!empty($changed_ExtendedOptInPreferences)){
		$ExtendedOptInPreferences_updateArray = $this->formatArray('ExtendedOptInPreferences',$changed_ExtendedOptInPreferences,'I');}
		if(!empty($changedtext_ExtendedOptInPreferences)){
		$ExtendedOptInPreferencestext_updateArray = $this->formatArray('ExtendedOptInPreferences',$changedtext_ExtendedOptInPreferences,'U');}
		$EO = $ExtendedOptInPreferences_insertArray.$ExtendedOptInPreferences_deleteArray.$ExtendedOptInPreferences_updateArray.$ExtendedOptInPreferencestext_updateArray;

		if(!empty($new_HubLifeStyles)){
		$HubLifeStyles_insertArray = $this->formatArray('HubLifeStyles',$new_HubLifeStyles,'I');}
		if(!empty($old_HubLifeStyles)){
		$HubLifeStyles_deleteArray = $this->formatArray('HubLifeStyles',$old_HubLifeStyles,'D');}
		if(!empty($changed_HubLifeStyles)){
		$HubLifeStyles_updateArray = $this->formatArray('HubLifeStyles',$changed_HubLifeStyles,'I');}
		if(!empty($changedtext_HubLifeStyles)){
		$HubLifeStylestext_updateArray = $this->formatArray('HubLifeStyles',$changedtext_HubLifeStyles,'U');}
		$HL = $HubLifeStyles_insertArray.$HubLifeStyles_deleteArray.$HubLifeStyles_updateArray.$HubLifeStylestext_updateArray;


		if(!empty($changed_consumeraccount)){
		$consumeraccount_updateArray = $this->consumeraccount($changed_consumeraccount,'U');}


		$UA = $consumeraccount_updateArray;


		/*************************************************/

		    //create the xml for the posted fields.
			$consumerProfile = '<?xml version="1.0" encoding="UTF-8"?>'."<Consumer><ConsumerProfile>".$CP."</ConsumerProfile>";
			$consumerPreferences 	= "<Preferences>".$PR."</Preferences>";
			$SocialNetworks = "<SocialNetworks>".$SN."</SocialNetworks>";
			$ConversionLocations = "<ConversionLocations>".$CL."</ConversionLocations>";
			$FacebookConnect = "<FacebookConnect>".$FC."</FacebookConnect>";
			$DigitalInteractions = "<DigitalInteractions>".$DI."</DigitalInteractions>";
			$ExtendedProfile = "<ExtendedProfile>".$EP."</ExtendedProfile>";
			$ExtendedOptInPreferences = "<ExtendedOptInPreferences>".$EO."</ExtendedOptInPreferences>";
			$HubLifeStyles = "<HubLifeStyles>".$HL."</HubLifeStyles>";
			$consumeraccount = "<UserAccount>".$UA."</UserAccount>";
			if(empty($PR))
			{

			$consumerPreferences='';
			}
			if(empty($DI))
			{

			$DigitalInteractions='';
			}
			if(empty($SN))
			{
			$SocialNetworks='';
			}
			if(empty($CL))
			{
			$ConversionLocations='';
			}
			if(empty($FC))
			{
			$FacebookConnect='';
			}
			if(empty($EP))
			{
			$ExtendedProfile='';
			}
			if(empty($EO))
			{
			$ExtendedOptInPreferences='';
			}
			if(empty($HL))
			{
			$HubLifeStyles='';
			}
			//Combine all XMLs created for individual sections.
			$data = $consumerProfile.$consumerPreferences.$SocialNetworks.$ConversionLocations.$FacebookConnect
			.$DigitalInteractions.$ExtendedProfile.$ExtendedOptInPreferences.$HubLifeStyles.$consumeraccount."</Consumer>";


			/*
			header('Content-Type: text/xml; charset=utf-8');
			print_r($data);exit;*/


			$consumerId = $_POST['HD_Consumerid'];

			/***************************************************************************
			*Function called to Update the details by the consumer				  	   *
			*Pass parameter:														   *
			*	-User Details XML/JSON												   *
			*	-Consumer ID										                   *
			***************************************************************************/
			$cid = $this->NEOapi->updateConsumer($data,$consumerId);
						preg_match('/Location:(.*?)\n/', $cid['response']['0'], $matches);
						$locurl = trim(array_pop($matches));
						$cid['location'] = $locurl;
						preg_match('/consumers\/(.*?)\/[registration|profile]/', $cid['location'], $matches);
						$consumerid = trim(array_pop($matches));
						$cid['consumerid'] = $consumerid;
						$retcode="?cid=".$cid['consumerid'];

			$res = array('cid' => $cid);

			if($cid['status'] == 'success'){
				$res['success'] = true;
				$res['msg'] = "Customer Updated with email: " . $postData['CP_EmailId']." having Consumer id: ".$cid['consumerid'];
				$res['consumerID'] = $cid['consumerid'];
				$res['retcode'] = $retcode;
			}


			else if($cid['status'] =='failure'){
				$res['success'] = false;
				$res['msg'] = "Unsuccessful Update customer request for " .$postData['CP_EmailId']." Error Response = ". $cid['consumerid'];
				$res['errcode'] = array();
				foreach ($cid['response'] as $key=>$value){
					$res['errcode'][] = $value;
				}

		 }

		 return $res;

	}
	/********************************************************************************************/

	/********************************************************************************************
			Function showdebug:
			This function is for debugging.
	*********************************************************************************************/
	function  showdebug($postData){
			echo '<pre>';
			print_r($postData);
			exit;
	}

}


?>
