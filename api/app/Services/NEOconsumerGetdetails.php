<?php
namespace App\Services;


/****************************************************************************************************************************************************
Code for Consumer GetDetails
-----------------------------------------------------------------------------------------------------------------------------------------------------
Funtions: 	__contruct				- Function constructor to initialise values.
			setConsumerProfile      - Function to set the ConmerProfile fields that are retrieved from GetDetails.
			extractData             - Function to extract the CategoryId,QuestionId, Option Id and Answer Text are retrieved from GetDetails.
			setconsumerData         - Function to set the ConsumerPreference,Social Networks etc. fields that are retrieved from GetDetails.
			setconsumeraccount      - Function to set the User account fields that are retrieved from GetDetails.


------------------------------------------------------------------------------------------------------------------------------------------------------
Description: This is an interface to structure and filter the form data posted by the user.
Author: Infosys
Last modified on : 01/29/2015
******************************************************************************************************************************************************/
error_reporting(E_ALL & ~E_NOTICE);

class NEOconsumerGetdetails extends NEOapi
{
	private $consumerProfile;
	private $consumerPreferences;
	private $SocialNetworks;
	private $ConversionLocations;
	private $FacebookConnect ;
	private $DigitalInteractions;
	private $ExtendedProfile;
	private $ExtendedOptInPreferences;
	private $HubLifeStyles;
	private $consumeraccount;
	private $consumerCountry;
	private $globalProfilefields;
	private $globalCountries;

	function __construct($consumerId){
	    $this->NEOapi = new NEOapi();
		/***************************************************************************
		*Function called to Get the details of the consumer	   		   			   *
		*Pass parameter:														   *
		*	-Consumer ID														   *
		***************************************************************************/

		$details = $this->NEOapi->getConsumerDetails($consumerId);
		$configParameters = $this->NEOapi->getConfig_parameters(storage_path() . "/CIDBapi/App.config");

		$this->InputType = strtoupper($configParameters['InputType']);
		if($details['status'] == 'success'){
			$xml_data = $details['response'][1];

			if($this->InputType =="XML"){
			 $xml = simplexml_load_string($xml_data);
			 $json = json_encode($xml);
			 $dataArray = json_decode($json, true);
			}
			else if($this->InputType =="JSON"){

				$dataArray = json_decode($xml_data, true);

			}

			$this->consumerProfile = $dataArray['ConsumerProfile'];
			$this->consumerPreferences = $dataArray['Preferences']['QuestionCategory'];

			$this->SocialNetworks = $dataArray['SocialNetworks']['QuestionCategory'];
			$this->ConversionLocations = $dataArray['ConversionLocations']['QuestionCategory'];
			$this->FacebookConnect = $dataArray['FacebookConnect']['QuestionCategory'];
			$this->DigitalInteractions = $dataArray['DigitalInteractions']['QuestionCategory'];
			$this->ExtendedProfile = $dataArray['ExtendedProfile']['QuestionCategory'];
			$this->ExtendedOptInPreferences = $dataArray['ExtendedOptInPreferences']['QuestionCategory'];
			$this->HubLifeStyles = $dataArray['HubLifeStyles']['QuestionCategory'];
			$this->consumeraccount = $dataArray['UserAccount'];


		}

		else
		{
			foreach ($details['response'] as $key => $value)
			{
				 	Log::info('NEO error', $value);
					// $errcode="?func=getdetails&msg=$value";
					// header("Location:../Error.php".$errcode);
			}
		}
	}


	/********************************************************************************************/

	/********************************************************************************************
			Function setConsumerProfile:
			This Function is to set the ConmerProfile fields that are retrieved from GetDetails.
	*********************************************************************************************/

	public function setConsumerProfile($consumerFields){


		if($this->InputType=='JSON'){
			foreach($this->consumerProfile as $field=>$value){
			$tempSplit = explode("_",$field);
			$fieldName = $tempSplit[1];

			if(is_array($value)){
				unset($this->consumerProfile[$field]);
				foreach($value as $index=>$val){

					if(is_array($val)){
						unset($this->consumerProfile[$index]);

						foreach($val as $index2=>$val2){


							$this->consumerProfile["CP_".$index2] = $val2;


						}

					}else{
						$this->consumerProfile["CP_".$index] = $val;
					}



				}

			}else{
				$this->consumerProfile["CP_".$field] = $value;
			}


		}
		//Set the value by comparing front end fields and fields that are formed using Getdetails
		foreach($consumerFields as $field=>$value){
			$tempSplit = explode("_",$field);

			 $fieldName = $tempSplit[1];

			$data[$field] = $this->NEOapi->get_value_by_key($this->consumerProfile,$field);
		}



		foreach($data as $index=>$value){
			if(is_array($value)){
				unset($data[$field]);
				foreach($value as $index=>$val){
					$data["CP_".$index] = $val;
				}

			}else{
				$data["CP_".$field] = $value;
			}

		}

		}
		else if($this->InputType=='XML'){

					foreach($consumerFields as $field=>$value){
						$tempSplit = explode("_",$field);
						$fieldName = $tempSplit[1];
						$data[$field] = $this->NEOapi->get_value_by_key($this->consumerProfile,$fieldName);
					}



					foreach($data as $index=>$value){
						if(is_array($value)){
							unset($data[$field]);
							foreach($value as $index=>$val){
								$data["CP_".$index] = $val;
							}

						}else{
							$data["CP_".$field] = $value;
						}

					}
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
	private function extractData($splitfieldval,$postData,$dataArray,$prefix){

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
						{	$countfor = 1;

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
								 while ($count0<=7)
									{
									    //create the index to match the field from front end.
										$field_TempIndex = $field_optionIndex."_".$count0;

										//If field contains Freetext value
										if($answr['OptionID']==0 && isset($answr['AnswerText'])){
										$OptionID = $answr['AnswerText'];
										$field_TempIndex = $field_TempIndex."_freetext";
									    }

										//condition to handle othertext's dropdown and set the value
										if($answr['OptionID']!=0 && isset($answr['AnswerText']) && $questionId!=92 && $splitfieldval[$field_TempIndex]){

										$OptionID = $answr['OptionID'];

									    }

										//create Comm index to match the field from front end.
										$field_commoptionIndex =  "HD_".$field_TempIndex."_"."Comm";
										//create brand index to match the field from front end.
										$field_brandoptionIndex =  "HD_".$field_TempIndex."_"."Brand";
										//create Drink index to match the field from front end.
										$field_drinkoptionIndex =  "HD_".$field_TempIndex."_"."Drink";

									    //If Comm value is set in the front end
										if(isset($splitfieldval[$field_commoptionIndex])){

										  $Commpresent = 1;
										}else{

										  $Commpresent = 0;
										}
										 //If Brand value is set in the front end
										if(isset($splitfieldval[$field_brandoptionIndex])){

										  $Brandpresent = 1;
										}else{

										  $Brandpresent = 0;
										}
										 //If Drink value is set in the front end
										if(isset($splitfieldval[$field_drinkoptionIndex])){

										  $Drinkpresent = 1;
										}else{

										  $Drinkpresent = 0;
										}


                                       $index = $Commpresent.$Brandpresent.$Drinkpresent;

									   //to handle text other field
									  if($questionId!=92 && $answr['OptionID']!=0 && isset($answr['AnswerText'])  ){

											$OptionID1 = $answr['AnswerText'];
											if(is_array($answr['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_".$countfor."_textother"] = $OptionID1;
										}
									 //to handle multi select field

                                    if($splitfieldval[$field_optionIndex."_".$count0."[]"]){


                                      $temparray[$field_optionIndex."_".$countfor] = $OptionID;
                                    }

									else{
									/*comparing front end Comm/Brand/Drink values with the corresponding GetDetails values to set the value for multiple question */

									switch($index)

										{

										    case "000":


											if($splitfieldval[$field_optionIndex."_".$countfor."_freetext"]){

											$temparray[$field_optionIndex."_".$countfor."_freetext"] = $OptionID;
											}

											else if ($splitfieldval[$field_optionIndex."_".$countfor]){

											$temparray[$field_optionIndex."_".$countfor] = $OptionID;
											}

											break 2;


											case "111":
											 if ($splitfieldval[$field_commoptionIndex] == $CommChannel && $splitfieldval[$field_brandoptionIndex]== $BrandId && $splitfieldval[$field_drinkoptionIndex] == $DrinkId)
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "110":

											 if ($splitfieldval[$field_commoptionIndex] == $CommChannel && $splitfieldval[$field_brandoptionIndex]== $BrandId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

										    case "101":
											 if ($splitfieldval[$field_commoptionIndex] == $CommChannel && $splitfieldval[$field_drinkoptionIndex] == $DrinkId )
											{
												$temparray[$field_TempIndex] = $OptionID;
											    break 2;

											}
											break;

											case "011":

											 if ($splitfieldval[$field_brandoptionIndex] == $BrandId  && $splitfieldval[$field_drinkoptionIndex] == $DrinkId )
											{

												$temparray[$field_TempIndex] = $OptionID;
												 break ;

											}
											break;

											case "100":
											 if ($splitfieldval[$field_commoptionIndex] == $CommChannel )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

											case "010":

											 if ($splitfieldval[$field_brandoptionIndex]== $BrandId )
											{
												$temparray[$field_TempIndex] = $OptionID;
												 break 2;

											}
											break;

                                           case "001":
											 if ($splitfieldval[$field_drinkoptionIndex] == $DrinkId )
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

								$countfor++;

							}


						}else
						{

							$answers = $QuestAns['Answer'];

							$OptionID 	= $answers['OptionID'];
							$BrandId 	= $answers['BrandID'];
							$CommChannel= $answers['CommunicationChannel'];
							$DrinkId  	= $answers['DrinkCategoryID'];
							$AnswerText = $answers['AnswerText'];



							$countIndex = 1;
							$field_optionIndex = $prefix.$categoryId."_".$questionId."_".$countIndex;
							if($answers['OptionID']==0 && isset($answers['AnswerText'])){
										$OptionID = $answers['AnswerText'];
										$field_optionIndex = $field_optionIndex."_freetext";
							 }
						   if($answers['OptionID']!=0 && isset($answers['AnswerText']) && $questionId!=92 && $splitfieldval[$field_optionIndex]){

										$OptionID = $answers['OptionID'];

							}
							//to handle text other
							if($questionId!=92 && $answers['OptionID']!=0 && isset($answers['AnswerText'])  ){

											$OptionID1 = $answers['AnswerText'];
											if(is_array($answers['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_textother"] = $OptionID1;
							}
							 if($splitfieldval[$field_optionIndex."[]"]){


                                      $temparray[$field_optionIndex] = $OptionID;
                              }
							//create the index to match the field from front end.
							$field_brandIndex =  "HD_".$field_optionIndex."_"."Brand";
							//create brand index to match the field from front end.
							$field_commoptionIndex = "HD_".$field_optionIndex."_"."Comm";
							//create comm index to match the field from front end.
							$field_drinkoptionIndex = "HD_".$field_optionIndex."_"."Drink";
							//create drink index to match the field from front end.
							 if(isset($OptionID)){$temparray[$field_optionIndex]	= $OptionID;}//add value with the index in temparray


						}

				}
			}else
			{

				$questionId = $categories['QuestionAnswers']['QuestionID'];
				$answers = $categories['QuestionAnswers']['Answer'];

					if(isset($answers[0]))
					{	$countfor=1;


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

										//create the index to match the field from front end.
										$field_TempIndex = $field_optionIndex."_".$count0;

										//If field contains Freetext value
										if($ans['OptionID']==0 && isset($ans['AnswerText'])){
										$OptionID = $ans['AnswerText'];
										$field_TempIndex = $field_TempIndex."_freetext";
									    }

										//condition to handle othertext's dropdown and set the value
										if($ans['OptionID']!=0 && isset($ans['AnswerText']) && $questionId!=92 && $splitfieldval[$field_TempIndex]){

										$OptionID = $ans['OptionID'];

									    }

										//create Comm index to match the field from front end.
										$field_commoptionIndex =  "HD_".$field_TempIndex."_"."Comm";
										//create brand index to match the field from front end.
										$field_brandoptionIndex =  "HD_".$field_TempIndex."_"."Brand";
										//create drink index to match the field from front end.
										$field_drinkoptionIndex =  "HD_".$field_TempIndex."_"."Drink";


                                         //If Comm value is set in the front end
										if(isset($splitfieldval[$field_commoptionIndex])){

										  $Commpresent = 1;
										}else{

										  $Commpresent = 0;
										}

										 //If brand value is set in the front end
										if(isset($splitfieldval[$field_brandoptionIndex])){

										  $Brandpresent = 1;
										}else{

										  $Brandpresent = 0;
										}

										 //If drink value is set in the front end
										if(isset($splitfieldval[$field_drinkoptionIndex])){

										  $Drinkpresent = 1;
										}else{

										  $Drinkpresent = 0;
										}

								       //to handle text other field
									  if($questionId!=92 && $ans['OptionID']!=0 && isset($ans['AnswerText'])  ){

											$OptionID1 = $ans['AnswerText'];
											if(is_array($ans['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_".$countfor."_textother"] = $OptionID1;
										}
                                       $index = $Commpresent.$Brandpresent.$Drinkpresent;
									 //to handle multi select field

                                    if($splitfieldval[$field_optionIndex."_".$count0."[]"]){


                                      $temparray[$field_optionIndex."_".$countfor] = $OptionID;
                                    }
									else{
                                    /*comparing front end Comm/Brand/Drink values with the corresponding GetDetails values to set the value for multiple question */
										   switch($index)

											{

												case "000":

												if($splitfieldval[$field_optionIndex."_".$countfor."_freetext"]){

												$temparray[$field_optionIndex."_".$countfor."_freetext"] = $OptionID;
												}

												else if ($splitfieldval[$field_optionIndex."_".$countfor]){

												$temparray[$field_optionIndex."_".$countfor] = $OptionID;
												}

												break 2;

												case "111":
												 if ($splitfieldval[$field_commoptionIndex] == $CommChannel && $splitfieldval[$field_brandoptionIndex]== $BrandId && $splitfieldval[$field_drinkoptionIndex] == $DrinkId)
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "110":
												 if ($splitfieldval[$field_commoptionIndex] == $CommChannel && $splitfieldval[$field_brandoptionIndex]== $BrandId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "101":
												 if ($splitfieldval[$field_commoptionIndex] == $CommChannel && $splitfieldval[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "011":

												 if ($splitfieldval[$field_brandoptionIndex]== $BrandId  && $splitfieldval[$field_drinkoptionIndex] == $DrinkId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "100":
												 if ($splitfieldval[$field_commoptionIndex] == $CommChannel )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

												case "010":
												 if ($splitfieldval[$field_brandoptionIndex]== $BrandId )
												{
													$temparray[$field_TempIndex] = $OptionID;
													 break 2;

												}
												break;

											   case "001":
												 if ($splitfieldval[$field_drinkoptionIndex] == $DrinkId )
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
							$countfor++;
							}


					}
					else
					{

						$OptionID 	= $answers['OptionID'];
						$BrandId 	= $answers['BrandID'];
						$CommChannel= $answers['CommunicationChannel'];
						$DrinkId  	= $answers['DrinkCategoryID'];
						$AnswerText = $answers['AnswerText'];

						$countIndex = 1;
						//create the index to match the field from front end.
						$field_optionIndex = $prefix.$categoryId."_".$questionId."_".$countIndex;

						if($answers['OptionID']==0 && isset($answers['AnswerText'])){
										$OptionID = $answers['AnswerText'];
										$field_optionIndex = $field_optionIndex."_freetext";
							 }
						if($answers['OptionID']!=0 && isset($answers['AnswerText']) && $questionId!=92 && $splitfieldval[$field_optionIndex]){

										$OptionID = $answers['OptionID'];

							}

						  //to handle text other
						  if($questionId!=92 && $answers['OptionID']!=0 && isset($answers['AnswerText'])  ){

											$OptionID1 = $answers['AnswerText'];
											if(is_array($answers['AnswerText'])){
											$OptionID1 = "";
											}
											$temparray[$field_optionIndex."_textother"] = $OptionID1;
							}
                         if($splitfieldval[$field_optionIndex."[]"]){


                                      $temparray[$field_optionIndex] = $OptionID;
                              }

						$field_brandIndex =  "HD_".$field_optionIndex."_"."Brand";
						//create brand index to match the field from front end.
						$field_commoptionIndex = "HD_".$field_optionIndex."_"."Comm";
						//create comm index to match the field from front end.
						$field_drinkoptionIndex = "HD_".$field_optionIndex."_"."Drink";
						//create drink index to match the field from front end.
						 if(isset($OptionID)){$temparray[$field_optionIndex]	= $OptionID;}//add value with the index in temparray

					}
			}
		}



	$formFieldsval =  explode(',',$_POST['fieldsval']);

    //to form multi select field in array format
	foreach($formFieldsval as $field){
			$tmpfieldarray = explode('~',$field);

			$tmpfieldarraymulti = explode('_',$tmpfieldarray[0]);

			$multiselect  =  $tmpfieldarraymulti[3];

			if($multiselect == "1[]"){

			  $index1 = $tmpfieldarray[0];
			  $index1 = str_replace('[]','',$index1);
				$count =0;
				$multioption = array();
				$storedindex = 0;
			  foreach($temparray  as $index=>$values)
			   {

				$splitpostData = explode('_',$index1);
				$splittemparray = explode('_',$index);

				$comppost = $splitpostData[0].'_'.$splitpostData[1].'_'.$splitpostData[2];
				$comptemp = $splittemparray[0].'_'.$splittemparray[1].'_'.$splittemparray[2];


				if( $comppost ==  $comptemp )//&& $splitpostData[3]!= $splittemparray[3]

					{
					if($count == 0)
					{
						$storedindex = $comptemp;
					}

					$multioption[$count] = $values;
					$count++;

					}

			   }
			   if ($count > 1)
			   {
				 $temparray[$storedindex."_1"] =array_values($multioption);

			   }

		}
	}


		return $temparray;
	}
	/********************************************************************************************/

	/********************************************************************************************
			Function setconsumerData:
			This Function is to set the ConsumerPreference,Social Networks etc. fields
			that are retrieved from GetDetails
	*********************************************************************************************/
	public function setconsumerData($splitfieldval,$postData,$tagData,$prefix){
		$data = $this->$tagData;

		$temparray = array();
		if(isset($data['CategoryID'])){
			$data = array(0=>$data);
		}
		//call to form the Consumer Preference/Hublifestyle etc field and values
		$temparray = $this->extractData($splitfieldval,$postData,$data,$prefix);


		foreach($temparray as $index=>$value){
			if(is_array($value)){
					$value = array_unique($value);
			}

			$temparray[$index] = $value;

		}

		return $temparray;
	}
	/********************************************************************************************/

	/********************************************************************************************
			Function setconsumerData:
			This Function is to set the User account fields that are retrieved from GetDetails.
	*********************************************************************************************/

    public function setconsumeraccount($consumerFields){

			//Adding the Login data in UA Tag
			foreach($consumerFields as $field=>$value){
			   if (strpos($field,'UA_Password') !== false) {
			     continue;
			    }else{
				$tempSplit = explode("_",$field);
				$fieldName = $tempSplit[1];
				$data[$field] = $this->NEOapi->get_value_by_key($this->consumeraccount,$fieldName);
				}
			  }


			foreach($data as $index=>$val){
				if(is_array($val)){
					foreach($val as $index2=>$val2){
						$data[$index2] = $val2;

					}
					unset($data[$index]);
				}else{
						$data[$index] = $val;
				}
			}

		   //Adding the Seceret questions data in SQ Tag
			foreach($this->consumeraccount['SecretQuestions'] as $field=>$value){

			    $questinId = $this->consumeraccount['SecretQuestions']['QuestionID'];

				if($this->InputType=="JSON"){
				  $answer = $this->consumeraccount['SecretQuestions']['Answer'][0]['AnswerText'] ;
				}
				else if($this->InputType=="XML"){
				  $answer = $this->consumeraccount['SecretQuestions']['Answer']['AnswerText'] ;
				}

			    foreach($consumerFields as $fields=>$values){

				$tempSplit = explode("_",$fields);

			    $subfield = $tempSplit[0];
				$questinIdnew = $tempSplit[2];
				if($subfield=='SQ'){
			       if($questinIdnew==$questinId){
				      $data[$fields] = $answer;

				    }
				 }

				}

			}


			return $data;

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




if($_POST['getDetails']){
$consumerId = $_POST['HD_Consumerid'];
$getDetailsObject = new NEOconsumerGetdetails($consumerId);

$formFields =  explode(',',$_POST['fields']);
$formFieldsval =  explode(',',$_POST['fieldsval']);

$splitfieldval = array();

        foreach($formFieldsval as $field){
			$tmpfieldarray = explode('~',$field);
			$splitfieldval[$tmpfieldarray[0]] = $tmpfieldarray[1];

		}

		// to create the fields array and to split data into array of each section.
		foreach($formFields as $field){
				$splitfield = explode('_',$field);
				$fieldCategory = $splitfield[0];

				if($fieldCategory=='HD'){
					$fieldCategory = $splitfield[1];
				}
				$field = str_replace('[]','',$field);

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



$SN= array();
$CL= array();
$FC= array();
$DI= array();
$EP= array();
$EO= array();
$HL= array();
$UA= array();

//create the post fields for the Get XML.

$CP = $getDetailsObject->setConsumerProfile($consumerProfile);


$PR = $getDetailsObject->setconsumerData($splitfieldval,$consumerPreferences, 'consumerPreferences','PR_');
if(isset($SocialNetworks)){

$SN = $getDetailsObject->setconsumerData($splitfieldval,$SocialNetworks, 'SocialNetworks','SN_');
}

if(isset($ConversionLocations)){

$CL = $getDetailsObject->setconsumerData($splitfieldval,$ConversionLocations, 'ConversionLocations','CL_');
}

if(isset($FacebookConnect)){

$FC = $getDetailsObject->setconsumerData($splitfieldval,$FacebookConnect ,'FacebookConnect','FC_');

}
if(isset($DigitalInteractions)){

$DI = $getDetailsObject->setconsumerData($splitfieldval,$DigitalInteractions ,'DigitalInteractions','DI_');
}
if(isset($ExtendedProfile)){

$EP = $getDetailsObject->setconsumerData($splitfieldval,$ExtendedProfile,'ExtendedProfile','EP_');
}

if(isset($ExtendedOptInPreferences)){

$EO = $getDetailsObject->setconsumerData($splitfieldval,$ExtendedOptInPreferences,'ExtendedOptInPreferences','EO_');
}

if(isset($HubLifeStyles)){

$HL = $getDetailsObject->setconsumerData($splitfieldval,$HubLifeStyles,'HubLifeStyles','HL_');
}

$UA = $getDetailsObject->setconsumeraccount($consumeraccount);
//Combine all post fields created for individual sections.
 $finaldata = array_merge($CP,$PR,$SN,$CL,$FC,$DI,$EP,$EO,$HL,$UA);
Log::info('NEO error', $finaldata);
 return $finaldata;


}
?>
