<?php
namespace App\Services;
use Illuminate\Support\Facades\Log;


/*********************************************************************************************************************
Code for ConsumerRegistartion

-------------------------------------------------------------------------------------------------------------------
Funtions: 	__contruct				- Function constructor to initialise values.
            consumerProfile 	    - Function to create XML input of consumerProfile for registration to Webservice.
            consumerQuestion		- Function to process the questions combination depending on brand, comm, drink etc.
            createQuestionTag		- Function is to process the questions combination depending on brand, comm, drink etc.
            converttoArray			- Function to convert the postData array in combination of category, questions, answers.
            consumeraccount         - Function to create Question tags for useraccount fields.
            createFieldsarray       - Function to create the fields array depending on posted array.
            registerConsumer		- Function is an entry point, called from outside by passing the consumer posted data.

-------------------------------------------------------------------------------------------------------------------
Description: This is an interface to structure and filter the form data posted by the user.
Author: Infosys
Last modified on : 01/29/2015
*********************************************************************************************************************/
error_reporting(E_ALL & ~E_NOTICE);

class NEOconsumerRegister extends NEOapi
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


    public function __construct()
    {
        $this->NEOapi = new NEOapi();
        $configParameters = $this->NEOapi->getConfig_parameters(storage_path() . "/CIDBapi/App.config");
        $this->InputType= $configParameters['InputType'];
        $this->consumerProfile = array();
        $this->consumerPreferences = array();
        $this->SocialNetworks = array();
        $this->ConversionLocations = array();
        $this->FacebookConnect  = array();
        $this->DigitalInteractions = array();
        $this->ExtendedProfile= array();
        $this->ExtendedOptInPreferences = array();
        $this->HubLifeStyles = array();
        $this->consumeraccount = array();
        $this->consumerCountry = '';
        $this->globalProfilefields = array('CP_PromoCode','CP_AcquisitionSource','CP_AddressType','CP_EmailType','CP_PhoneType','CP_IsDefaultFlag','CP_IsDefault_Email');
        $this->globalCountries =
            array(1=>"AD", 2=>"AE", 3=>"AF", 4=>"AG", 5=>"AI", 6=>"AL", 7=>"AM", 8=>"AN", 9=>"AO", 10=>"AQ", 11=>"AR", 12=>"AS", 13=>"AT", 14=>"AU", 15=>"AW", 16=>"AZ", 17=>"BA", 18=>"BB", 19=>"BD", 20=>"BE", 21=>"BF", 22=>"BG", 23=>"BH", 24=>"BI", 25=>"BJ", 26=>"BM", 27=>"BN", 28=>"BO", 29=>"BR", 30=>"BS", 31=>"BT", 32=>"BV", 33=>"BW", 34=>"BY", 35=>"BZ", 36=>"CA", 37=>"CC", 38=>"CF", 39=>"CG", 40=>"CH", 41=>"CI", 42=>"CK", 43=>"CL", 44=>"CM", 45=>"CN", 46=>"CO", 47=>"CR", 48=>"CS", 49=>"CU", 50=>"CV", 51=>"CX", 52=>"CY", 53=>"CZ", 54=>"DE", 55=>"DJ", 56=>"DK", 57=>"DM", 58=>"DO", 59=>"DZ", 60=>"EC", 61=>"EE", 62=>"EG", 63=>"EH", 64=>"ER", 65=>"ES", 66=>"ET", 67=>"FI", 68=>"FJ", 69=>"FK", 70=>"FM", 71=>"FO", 72=>"FR", 73=>"FX", 74=>"GA", 75=>"GB", 76=>"GD", 77=>"GE", 78=>"GF", 79=>"GH", 80=>"GI", 81=>"GL", 82=>"GM", 83=>"GN", 84=>"GP", 85=>"GQ", 86=>"GR", 87=>"GS", 88=>"GT", 89=>"GU", 90=>"GW", 91=>"GY", 92=>"HK", 93=>"HM", 94=>"HN", 95=>"HR", 96=>"HT", 97=>"HU", 98=>"ID", 99=>"IE", 100=>"IL", 101=>"IN", 102=>"IO", 103=>"IQ", 104=>"IR", 105=>"IS", 106=>"IT", 107=>"JM", 108=>"JO", 109=>"JP", 110=>"KE", 111=>"KG", 112=>"KH", 113=>"KI", 114=>"KM", 115=>"KN", 241=>"KR", 117=>"KW", 118=>"KY", 119=>"KZ", 120=>"LA", 121=>"LB", 122=>"LC", 123=>"LI", 124=>"LK", 125=>"LR", 126=>"LS", 127=>"LT", 128=>"LU", 129=>"LV", 130=>"LY", 131=>"MA", 132=>"MC", 133=>"MD", 134=>"MG", 135=>"MH", 136=>"MK", 137=>"ML", 138=>"MM", 139=>"MN", 140=>"MO", 141=>"MP", 142=>"MQ", 143=>"MR", 144=>"MS", 145=>"MT", 146=>"MU", 147=>"MV", 148=>"MW", 149=>"MX", 150=>"MY", 151=>"MZ", 152=>"NA", 153=>"NC", 154=>"NE", 155=>"NF", 156=>"NG", 157=>"NI", 158=>"NL", 159=>"NO", 160=>"NP", 161=>"NR", 162=>"NU", 163=>"NZ", 164=>"OM", 165=>"PA", 166=>"PE", 167=>"PF", 168=>"PG", 169=>"PH", 170=>"PK", 171=>"PL", 172=>"PM", 173=>"PN", 174=>"PR", 175=>"PT", 176=>"PW", 177=>"PY", 178=>"QA", 179=>"RE", 180=>"RO", 181=>"RU", 182=>"RW", 183=>"SA", 184=>"SB", 185=>"SC", 186=>"SD", 187=>"SE", 188=>"SG", 189=>"SH", 190=>"SI", 191=>"SJ", 192=>"SK", 193=>"SL", 194=>"SM", 195=>"SN", 196=>"SO", 197=>"SR", 198=>"ST", 199=>"SU", 200=>"SV", 201=>"SY", 202=>"SZ", 203=>"TC", 204=>"TD", 205=>"TF", 206=>"TG", 207=>"TH", 208=>"TJ", 209=>"TK", 210=>"TM", 211=>"TN", 212=>"TO", 213=>"TP", 214=>"TR", 215=>"TT", 216=>"TV", 217=>"TW", 218=>"TZ", 219=>"UA", 220=>"UG", 221=>"UM", 222=>"US", 223=>"UY", 224=>"UZ", 225=>"VA", 226=>"VC", 227=>"VE", 228=>"VG", 229=>"VI", 230=>"VN", 231=>"VU", 232=>"WF", 233=>"WS", 234=>"YE", 235=>"YT", 236=>"YU", 237=>"ZA", 238=>"ZM", 239=>"ZR", 240=>"ZW", 242=>"RS", 243=>"AX", 244=>"CD", 245=>"GG", 246=>"IM", 247=>"JE", 248=>"ME", 249=>"PS", 250=>"BL", 251=>"MF", 252=>"TL", 253=>"ZZ");
    }



        /********************************************************************************************
            Function consumerProfile:
            This function is to create XML for ConsumerProfile section
        *********************************************************************************************/
        public function consumerProfile($postData)
        {
            $this->consumerProfile = array();
            $profileTag = '';
            $addressTag  = '';
            $phoneTag = '';
            $promoCode = '';
            $emailTag = '';
            /*
            Default tags which are part of Consumer profile section, array is created to maintain the logical order in which
            the tags are to be mapped in XML.
            *///changed Zipcode to ZipCode
            $standardTags = array('FirstName'=>array('Title','FirstName','LastName','AlternateFirstName','AlternateLastName','DOB','Gender','MaritalStatus','NationalID','PassportNumber','Education','Profession','Suffix','Company','MiddleName','AlternateMiddleName','MaternalLastName','AlternateMaternalLastName','AlternateTitle','AlternateSuffix'),'Address1'=>array('Address1','Address2','Address3','Address4','City','State','Country','ZipCode','AddressType','StateOther','Province','House','Apartment','Building','District'),'EmailId'=>array('EmailId','EmailType','IsDefaultFlag','IsDefaultEmail'),
            'PhoneNumber'=>array('InternationalCode','AreaCode','PhoneNumber','PhoneType','Extension'));

            /*
                Fetch all the posted data for consumer profile and create Tags for all he values.
            */
            foreach ($postData as $key => $value) {
                $splitIndex = explode('_', $key);
                //$fieldName = ucfirst(strtolower($splitIndex[1]));
                $fieldName = $splitIndex[1];
                $this->consumerProfile[$fieldName] = '<'.$fieldName.'>'. $value.'</'.$fieldName.'>';
            }//end foreach


            if (array_key_exists('FirstName', $this->consumerProfile)) {
                foreach ($standardTags['FirstName'] as $keyName) {
                    if (isset($this->consumerProfile[$keyName])) {
                        $profileTag .= $this->consumerProfile[$keyName];
                        unset($this->consumerProfile[$keyName]);
                    }
                }
            }

            if (!array_key_exists('Address1', $this->consumerProfile)) {
                unset($this->consumerProfile['AddressType']);
            }
            if (!array_key_exists('EmailId', $this->consumerProfile)) {
                unset($this->consumerProfile['EmailType']);
                unset($this->consumerProfile['IsDefaultFlag']);
            }

            if (!array_key_exists('PhoneNumber', $this->consumerProfile)) {
                unset($this->consumerProfile['PhoneType']);
            }

            //Adding the Address data in Address1 Tag as required by the XML format
            $InputType        = strtoupper($this->InputType);
            if (array_key_exists('Address1', $this->consumerProfile)) {
                if ($InputType =='JSON') {
                    $addressTag ="<Address></Address>";
                }
                $addressTag .= "<Address>";

                foreach ($standardTags['Address1'] as $keyName) {
                    if (isset($this->consumerProfile[$keyName])) {
                        $addressTag .= $this->consumerProfile[$keyName];
                        unset($this->consumerProfile[$keyName]);
                    }
                }


                $addressTag .="<ModifyFlag>I</ModifyFlag>";
                $addressTag .="</Address>";
            }
            //Adding the PhoneNumber data in PhoneNumber Tag as required by the XML format
            if (array_key_exists('PhoneNumber', $this->consumerProfile)) {
                if ($InputType =='JSON') {
                    $phoneTag ="<Phone></Phone>";
                }
                $phoneTag .= "<Phone>";
                foreach ($standardTags['PhoneNumber'] as $keyName) {
                    if (isset($this->consumerProfile[$keyName])) {
                        $phoneTag .= $this->consumerProfile[$keyName];
                        unset($this->consumerProfile[$keyName]);
                    }
                }

                $phoneTag .="<ModifyFlag>I</ModifyFlag>";
                $phoneTag .="</Phone>";
            }

            //Adding the Promocode data in Promocode Tag as required by the XML format
            if ($InputType =='JSON') {
                $promoCode ="<PromoCode></PromoCode>";
            }
            $promoCode .= $this->consumerProfile['PromoCode'];

            unset($this->consumerProfile['PromoCode']);


            $acquisitionSource = isset($this->consumerProfile['AcquisitionSource'])?$this->consumerProfile['AcquisitionSource']: '';

            unset($this->consumerProfile['AcquisitionSource']);

            //Adding the Email data in Email Tag as required by the XML format
            if (array_key_exists('EmailId', $this->consumerProfile)) {
                if ($InputType =='JSON') {
                    $emailTag ="<Email></Email>";
                }
                $emailTag .= "<Email>";
                foreach ($standardTags['EmailId'] as $keyName) {
                    if (isset($this->consumerProfile[$keyName])) {
                        if ($keyName=="EmailType") {
                            $abc = $this->consumerProfile['EmailType'];
                            $EmailCategory= str_replace('EmailType', 'EmailCategory', $abc);
                            $emailTag .= $EmailCategory;
                        } else {
                            $emailTag .= $this->consumerProfile[$keyName];
                        }
                        unset($this->consumerProfile[$keyName]);
                    }
                }

                $emailTag .="<ModifyFlag>I</ModifyFlag>";
                $emailTag .="</Email>";
            }

            $this->consumerProfile['profile'] = $profileTag;
            $this->consumerProfile['Address'] = $addressTag;

            $this->consumerProfile['phone'] = $phoneTag;
            $this->consumerProfile['PromoCode'] = $promoCode;
            $this->consumerProfile['AcquisitionSource'] = $acquisitionSource;

            $this->consumerProfile['Email'] = $emailTag;


            $this->consumerProfile = implode('', $this->consumerProfile);

            return ($this->consumerProfile);
        }

        /********************************************************************************************/

        /********************************************************************************************
            Function consumerQuestion:
            This function is to process the questions combination depending on brand, comm, drink etc.
        *********************************************************************************************/
        public function consumerQuestion($postData)
        {
            $qArray=array();
            $answerText ='';
            $modifyFlag='I';  //I for registration
            foreach ($postData as $categoryId=>$questions) {
                foreach ($questions as $questionId=>$Answers) {
                    $questionId .' = '. $countAnswers = isset($Answers[1])? 1 : 0;

                    if ($countAnswers==1) {
                        foreach ($Answers as $AnswerIndex=>$AnswerValue) {
                            $optionId    = isset($AnswerValue['optionId'])?$AnswerValue['optionId']:'';
                            $answerText = null;
                             //if data contains AnswerText value, optionId =0
                            if (isset($AnswerValue['AnswerText'])) {
                                $optionId =0;
                                $answerText = $AnswerValue['AnswerText'];
                            } elseif (!isset($AnswerValue['optionId'])) {
                                $optionId=99;
                            }


                            if ($questionId==92) {
                                $answerText = $this->consumerCountry =    $this->globalCountries[$optionId];//Handle country Questions
                            }
                            if (array_key_exists('textother', $AnswerValue)) {
                                if ($AnswerValue['textother']) {
                                    $answerText = $AnswerValue['textother'];
                                }//else
                               //{
                               //$answerText = ' ';

                              // }
                            }

                            $commchannel= isset($AnswerValue['Comm'])? $AnswerValue['Comm'] :'';

                            $brand        = isset($AnswerValue['Brand'])? $AnswerValue['Brand']:'';

                            $drink        = isset($AnswerValue['Drink'])? $AnswerValue['Drink']:'';

                            $countFields = count($AnswerValue);
                            $questionId .' = '. $countFields;



                            /******************************/
                            $optionIds = array_unique(explode(',', $optionId));  //Explode over ',' since options might be multiple
                            foreach ($optionIds as $optionId) {
                                if ($countFields==1) {
                                    $commmChannel='';
                                    $brandId='';
                                    $str =    $this->createQuestionTag($categoryId, $questionId, $optionId, $answerText, $modifyFlag, $commmChannel, $brandId);
                                    array_push($qArray, $str);
                                } else {
                                    $commmChannel='';
                                    $brandId='';
                                    $commchannels = array_unique(explode(',', $commchannel)); //Explode over ',' since comm might be multiple
                                        $brand =  array_unique(explode(',', $brand)); //Explode over ',' since brand might be multiple
                                        $drink = array_unique(explode(',', $drink)); //Explode over ',' since drink might be multiple


                                        foreach ($commchannels as $commmChannel) {
                                            foreach ($brand as $brandId) {
                                                if (empty($drink[0])) {
                                                    //call to form the question and answers tag.
                                                    $str =    $this->createQuestionTag($categoryId, $questionId, $optionId, $answerText, $modifyFlag, $commmChannel, $brandId);
                                                    array_push($qArray, $str);
                                                } else {
                                                    foreach ($drink as $drinkcatId) {
                                                        //call to form the question and answers tag.
                                                    $str =    $this->createQuestionTag($categoryId, $questionId, $optionId, $answerText, $modifyFlag, $commmChannel, $brandId, $drinkcatId);
                                                        array_push($qArray, $str);
                                                    }
                                                }
                                            }
                                        }
                                }
                            }//end foreach ($optionIds as $optionId)




                            /******************************/
                        }
                    } else {
                        $optionId    = $Answers['optionId'];

                        if (isset($Answers['AnswerText'])) {
                            $optionId =0;
                        } elseif (!isset($Answers['optionId'])) {
                            $optionId=99;
                        }

                        $answerText = $Answers['AnswerText'];
                        if ($questionId==92) {
                            $answerText = $this->consumerCountry =    $this->globalCountries[$optionId];//Handle country Questions
                        }
                        if (array_key_exists('textother', $AnswerValue)) {
                            if ($AnswerValue['textother']) {
                                $answerText = $AnswerValue['textother'];
                            }//else
                              // {
                              // $answerText = ' ';

                              // }
                        }

                        $commchannel= $Answers['Comm'];
                        $brand        = $Answers['Brand'];
                        $drink        = $Answers['Drink'];

                        $countFields = count($Answers);
                        $questionId .' = '. $countFields;



                            /******************************/
                            $optionIds = array_unique(explode(',', $optionId));
                        foreach ($optionIds as $optionId) {
                            if ($countFields==1) {
                                $commmChannel='';
                                $brandId='';
                                        //call to form the question and answers tag.
                                        $str =    $this->createQuestionTag($categoryId, $questionId, $optionId, $answerText, $modifyFlag, $commmChannel, $brandId);
                                array_push($qArray, $str);
                            } else {
                                $commmChannel='';
                                $brandId='';
                                $commchannels = array_unique(explode(',', $commchannel));
                                $brand =  array_unique(explode(',', $brand));
                                $drink = array_unique(explode(',', $drink));


                                foreach ($commchannels as $commmChannel) {
                                    foreach ($brand as $brandId) {
                                        if (empty($drink[0])) {
                                            //call to form the question and answers tag.
                                                    $str =    $this->createQuestionTag($categoryId, $questionId, $optionId, $answerText, $modifyFlag, $commmChannel, $brandId);
                                            array_push($qArray, $str);
                                        } else {
                                            foreach ($drink as $drinkcatId) {
                                                //call to form the question and answers tag.
                                                    $str =    $this->createQuestionTag($categoryId, $questionId, $optionId, $answerText, $modifyFlag, $commmChannel, $brandId, $drinkcatId);
                                                array_push($qArray, $str);
                                            }
                                        }
                                    }
                                }
                            }
                        }


                            /******************************/
                    }
                }     //end foreach($questions as $questionId=>$Items)
            } //end foreach($postData as $categoryId=>$questions)
                $qArray = implode('', $qArray);
            return $qArray;
        }
        /********************************************************************************************/

        /********************************************************************************************
            Function converttoArray:
            This function is to convert the postdata array in Questions, Category and Answer
            combination array.
        *********************************************************************************************/
        public function converttoArray($postData=array())
        {
            $temparray = array();
            foreach ($postData as $formName=>$formValue) {
                $splitName = explode("_", $formName);
                $categoryId = $splitName[1];
                $questionId = $splitName[2];
                $prefix    = $splitName[3];
                if(count($splitName) > 4) {
                    $mulprefix = $splitName[4];
                } else {
                    $mulprefix = null;
                }
                


                if (isset($mulprefix) && $mulprefix=="freetext") {
                    $mulprefix='AnswerText';
                }
                if (!isset($mulprefix)) {
                    $mulprefix ='optionId';
                }


                //$temparray[$categoryId][$questionId][$prefix] = ($formValue) ;

                if (isset($temparray[$categoryId][$questionId][$prefix])) {
                    if (isset($mulprefix)) {
                        $a =(array)$temparray[$categoryId][$questionId][$prefix];
                        $a[$mulprefix]  =$formValue;
                        $temparray[$categoryId][$questionId][$prefix] = $a;
                        unset($a);
                    }
                } else {
                    $temparray[$categoryId][$questionId][$prefix][$mulprefix] = $formValue;
                }
            }
            return $this->consumerQuestion($temparray);
        }

        /********************************************************************************************/

        /********************************************************************************************
            Function consumerAccount:
            This function is to create XML for UserAccount section
        *********************************************************************************************/
        public function consumeraccount($consumerData)
        {
            $this->consumeraccount= array();
            $credentialTag = '';
            $secretQuestionTag = '';
            $secretQuestion = array();
            $InputType        = strtoupper($this->InputType);
            /*
            Default tags which are part of User Account section, array is created to maintain the logical order in which
            the tags are to be mapped in XML.
            */
            $consumerAccountTags = array('LoginName'=>array('LoginName','Password'));
            /*
                Fetch all the posted data for consumer profile and create Tags for all he values.
            */

            foreach ($consumerData as $key => $value) {
                $splitIndex = explode('_', $key);
                if ($splitIndex[0]!='SQ') {
                    $fieldName = $splitIndex[1];
                    $this->consumeraccount[$fieldName] = '<'.$fieldName.'>'. $value.'</'.$fieldName.'>';
                } elseif ($splitIndex[0]=='SQ') {
                    $qCatid = $splitIndex[1];
                    $qQuestionid = $splitIndex[2];
                    $secretQuestion[$qQuestionid] = $value;
                }
            }//end foreach

            //Adding the Login data in LoginName Tag as required by the XML format
            if (array_key_exists('LoginName', $this->consumeraccount)) {
                $credentialTag = "<LoginCredentials>";
                foreach ($consumerAccountTags['LoginName'] as $keyName) {
                    if (isset($this->consumeraccount[$keyName])) {
                        $credentialTag .= $this->consumeraccount[$keyName];
                        unset($this->consumeraccount[$keyName]);
                    }
                }
                $credentialTag .="</LoginCredentials>";
            }

            //Adding the Seceret questions data in secretQuestion Tag as required by the XML format
            foreach ($secretQuestion as $keyIndex=>$keyValue) {
                $secretQuestionTag  = "<SecretQuestions>";
                $secretQuestionTag .= "<QuestionID>".$keyIndex."</QuestionID>";

                if ($InputType =='JSON') {
                    $secretQuestionTag .="<Answer></Answer>";
                }

                $secretQuestionTag .="<Answer>";
                $secretQuestionTag .="<ModifyFlag>I</ModifyFlag>";
                $secretQuestionTag .="<AnswerText>".$keyValue."</AnswerText>";
                $secretQuestionTag .="</Answer>";

                $secretQuestionTag .="</SecretQuestions>";
            }



            $this->consumeraccount['LoginCredentials'] = $credentialTag;
            $this->consumeraccount['SecretQuestions'] = $secretQuestionTag;

            $this->consumeraccount = implode('', $this->consumeraccount);
            //print_r($this->consumeraccount);exit;
            return($this->consumeraccount);
        }

        /********************************************************************************************/

        /********************************************************************************************
            Function createQuestionTag:
            This function is to create the Questions tag.
        *********************************************************************************************/
        public function createQuestionTag($catId, $questionId, $optionId, $answerText, $modifyFlag, $commmChannel='', $brandId='', $drinkcatId='')
        {
            $InputType        = strtoupper($this->InputType);
            $questionTag  = '';
            if ($InputType =='JSON') {
                $questionTag .="<QuestionCategory></QuestionCategory>";
            }
            $questionTag .= '<QuestionCategory>';
            $questionTag .= '<CategoryID>'.$catId.'</CategoryID>';
            if ($InputType =='JSON') {
                $questionTag .="<QuestionAnswers></QuestionAnswers>";
            }
            $questionTag .= '<QuestionAnswers>';
            $questionTag .= '<QuestionID>'.$questionId.'</QuestionID>';
            if ($InputType =='JSON') {
                $questionTag .="<Answer></Answer>";
            }
            $questionTag .= '<Answer>';
            $questionTag .= '<OptionID>'.$optionId.'</OptionID>';
            $questionTag .= '<ModifyFlag>'.$modifyFlag.'</ModifyFlag>';

            if ($brandId!='') {
                $questionTag .= '<BrandID>'.$brandId.'</BrandID>';
            }
            if ($drinkcatId!='') {
                $questionTag .=    '<DrinkCategoryID>'.$drinkcatId.'</DrinkCategoryID>';
            }
            if ($commmChannel!='') {
                $questionTag .=    '<CommunicationChannel>'.$commmChannel.'</CommunicationChannel>';
            }
            if ($answerText!='') {
                $questionTag .=    '<AnswerText>'.$answerText.'</AnswerText>';
            }

            $questionTag .= '</Answer>';
            $questionTag .= '</QuestionAnswers>';
            $questionTag .= '</QuestionCategory>';

            return $questionTag;
        }
        /********************************************************************************************/

        /********************************************************************************************
            Function createFieldsarray:
            This function is to create the fields array to split data into array of each section.
        *********************************************************************************************/
        public function createFieldsarray($postData)
        {
            //print_r($postData);exit;
            foreach ($postData as $index => $value) {
                $splitIndex = explode('_', $index);
                $fieldCategory = $splitIndex[0];

                switch ($fieldCategory) {

                   case 'CP':
                        $this->consumerProfile[$index] = $value;

                    break;
                    case 'PR':
                        $this->consumerPreferences[$index] = $value;
                    break;
                    case 'SN':
                        $this->SocialNetworks[$index] = $value;
                    break;
                    case 'CL':
                        $this->ConversionLocations[$index] = $value;
                    break;
                    case 'FC':
                        $this->FacebookConnect[$index] = $value;
                    break;
                    case 'DI':
                        $this->DigitalInteractions[$index] = $value;
                    break;
                    case 'EP':
                        $this->ExtendedProfile[$index] = $value;
                    break;
                    case 'EO':
                        $this->ExtendedOptInPreferences[$index] = $value;
                    break;
                    case 'HL':
                        $this->HubLifeStyles[$index] = $value;
                    break;
                    case 'UA':
                        $this->consumeraccount[$index] = $value;
                    break;
                    case 'SQ':
                        $this->consumeraccount[$index] = $value;
                    break;
                    case 'HD':
                        {

                            $fieldName = $splitIndex[1];
                            if ($fieldName=='PR'||$fieldName=='SN'||$fieldName=='CL'||$fieldName=='FC'||$fieldName=='DI'||$fieldName=='EP'||$fieldName=='EO'||$fieldName=='HL'||$fieldName=='UA') {
                                $fieldName = str_replace('HD_', '', $index);
                                $data[$fieldName] = $value;
                                $this->createFieldsarray($data);
                            } else {
                                foreach ($this->globalProfilefields as $key=>$fieldname) {
                                    $tempField = explode('_', $fieldname);

                                    if ($tempField[1] == $splitIndex[1]) {
                                        $data[$fieldname] = $value;

                                        $this->createFieldsarray($data);

                                        $data=array();
                                        break;
                                    }
                                }
                            }



                        }
                    break;


                }//end switch
            }//end foreach

        $data['consumerProfile'] = $this->consumerProfile;
            $data['consumerPreferences'] = $this->consumerPreferences;
            $data['SocialNetworks'] = $this->SocialNetworks;
            $data['ConversionLocations'] = $this->ConversionLocations;
            $data['FacebookConnect'] = $this->FacebookConnect;
            $data['DigitalInteractions'] = $this->DigitalInteractions;
            $data['ExtendedProfile'] = $this->ExtendedProfile;
            $data['ExtendedOptInPreferences'] = $this->ExtendedOptInPreferences;
            $data['HubLifeStyles'] = $this->HubLifeStyles;
            $data['consumeraccount'] = $this->consumeraccount;

            return $data;
        }
        /********************************************************************************************/

        /********************************************************************************************
            Function showdebug:
            This function is for debugging.
        *********************************************************************************************/
        public function showdebug($postData)
        {
            echo '<pre>';
            print_r($postData);
            exit;
        }
        /********************************************************************************************/

        /********************************************************************************************
            Function registerConsumer:
            This function is to create the fields array to split data into array of each section.
        *********************************************************************************************/
        public function registerConsumer($postData)
        {
            $Brand = '';
            $Comm = '';
            $Drink = '';
            foreach ($postData as $index => $value) {
                if (is_array($value)) {
                    $count = 1;
                        //to create brand/Comm/Drink for multi select posted Fields
                        foreach ($value as $postvalue) {
                            $tempField = explode('_', $index);
                            $index = $tempField[0].'_'.$tempField[1].'_'.$tempField[2];
                            $tindex = $index.'_'.$count;

                            if (isset($_POST["HD_".$tindex."_Brand"])) {
                                $Brand = $_POST["HD_".$tindex."_Brand"];
                            }
                            if (isset($_POST["HD_".$tindex."_Comm"])) {
                                $Comm = $_POST["HD_".$tindex."_Comm"];
                            }
                            if (isset($_POST["HD_".$tindex."_Drink"])) {
                                $Drink = $_POST["HD_".$tindex."_Drink"];
                            }


                            $postData["HD_".$tindex."_Brand"] = $Brand;

                            $postData["HD_".$tindex."_Comm"] = $Comm;

                            $postData["HD_".$tindex."_Drink"] = $Drink;

                            $postData[$tindex] =    $postvalue;
                            $count++;
                        }
                    $Brand = "";
                    $Comm = "";
                    $Drink = "";
                    unset($postData[$index]);
                }

                    //to store textother field in postOther Array
                    $splitfield = explode('_', $index);
                if (isset($splitfield[4]) && $splitfield[4]=="textother") {
                    if ($value == "") {
                        $postOther[$index]=$value;
                    }
                }

                    //unset the hidden brand/comm/drink which is not having corresponding the index
                    if (isset($splitfield[5]) && $splitfield[5]=="Brand") {
                        $checkBrandIndex = $splitfield[1]."_". $splitfield[2]."_". $splitfield[3]."_". $splitfield[4];
                    }
                if (isset($splitfield[5]) && $splitfield[5]=="Comm") {
                    $checkCommIndex = $splitfield[1]."_". $splitfield[2]."_". $splitfield[3]."_". $splitfield[4];
                }
                if (isset($splitfield[5]) && $splitfield[5]=="Drink") {
                    $checkDrinkIndex = $splitfield[1]."_". $splitfield[2]."_". $splitfield[3]."_". $splitfield[4];
                }

                if (isset($checkBrandIndex) && !(array_key_exists($checkBrandIndex, $postData))) {
                    unset($postData["HD_".$checkBrandIndex."_Brand"]);
                }
                if (isset($checkCommIndex) && !(array_key_exists($checkCommIndex, $postData))) {
                    unset($postData["HD_".$checkCommIndex."_Comm"]);
                }
                if (isset($checkDrinkIndex) &&!(array_key_exists($checkDrinkIndex, $postData))) {
                    unset($postData["HD_".$checkDrinkIndex."_Drink"]);
                }
            }


            if (isset($postOther)) {
                $postData = array_filter($postData);
                $postData  =array_merge($postData, $postOther);
            } else {
                $postData = array_filter($postData);
            }

            $processedData = $this->createFieldsarray($postData);
            //create the xml for the posted fields.
            $consumerPreferences    = "<Preferences>".$this->converttoArray($processedData['consumerPreferences'])."</Preferences>";
            $consumerProfile = '<?xml version="1.0" encoding="UTF-8"?>'."<Consumer><ConsumerProfile>"    .$this->consumerProfile($processedData['consumerProfile'])."</ConsumerProfile>";
            $SocialNetworks = "<SocialNetworks>".$this->converttoArray($processedData['SocialNetworks'])."</SocialNetworks>";

            $ConversionLocations = "<ConversionLocations>".$this->converttoArray($processedData['ConversionLocations'])."</ConversionLocations>";

            $FacebookConnect = "<FacebookConnect>".$this->converttoArray($processedData['FacebookConnect'])."</FacebookConnect>";
            $DigitalInteractions = "<DigitalInteractions>".$this->converttoArray($processedData['DigitalInteractions'])."</DigitalInteractions>";
            $ExtendedProfile = "<ExtendedProfile>".$this->converttoArray($processedData['ExtendedProfile'])."</ExtendedProfile>";
            $ExtendedOptInPreferences = "<ExtendedOptInPreferences>".$this->converttoArray($processedData['ExtendedOptInPreferences'])."</ExtendedOptInPreferences>";
            $HubLifeStyles = "<HubLifeStyles>".$this->converttoArray($processedData['HubLifeStyles'])."</HubLifeStyles>";
            $consumeraccount = "<UserAccount>".$this->consumeraccount($processedData['consumeraccount'])."</UserAccount>";
            if (empty($processedData['DigitalInteractions'])) {
                $DigitalInteractions='';
            }
            if (empty($processedData['SocialNetworks'])) {
                $SocialNetworks='';
            }
            if (empty($processedData['ConversionLocations'])) {
                $ConversionLocations='';
            }
            if (empty($processedData['FacebookConnect'])) {
                $FacebookConnect='';
            }
            if (empty($processedData['ExtendedProfile'])) {
                $ExtendedProfile='';
            }
            if (empty($processedData['ExtendedOptInPreferences'])) {
                $ExtendedOptInPreferences='';
            }
            if (empty($processedData['HubLifeStyles'])) {
                $HubLifeStyles='';
            }
            if (empty($processedData['consumeraccount'])) {
                $consumeraccount='';
            }
            //Combine all XMLs created for individual sections.
            $data = $consumerProfile.$consumerPreferences.$SocialNetworks.$ConversionLocations.$FacebookConnect
            .$DigitalInteractions.$ExtendedProfile.$ExtendedOptInPreferences.$HubLifeStyles.$consumeraccount."</Consumer>";

           /*
            header('Content-Type: text/xml; charset=utf-8');
            print_r($data);exit;*/

            /***************************************************************************
            *Function called to Register a New User				   					   *
            *Pass parameter:														   *
            *	-User Details XML													   *
            ***************************************************************************/
            $cid = $this->NEOapi->createConsumer($data);
            // return $data;

            preg_match('/Location:(.*?)\n/', $cid['response']['0'], $matches);
            $locurl = trim(array_pop($matches));
            $cid['location'] = $locurl;
            preg_match('/consumers\/(.*?)\/[registration|profile]/', $cid['location'], $matches);
            $consumerid = trim(array_pop($matches));
            $cid['consumerid'] = $consumerid;
            $retcode="?cid=".$cid['consumerid'];
            preg_match("/[^\/]+$/", $cid['location'], $word);
            $last_word = $word[0];

            $str = explode("/", $cid['location']);
            $pdconsumer = $str[count($str)-2];
            if ($pdconsumer == "pdconsumers") {
                $consumerid = $str[count($str)-1];
                $cid['consumerid'] = $consumerid;
                $retcode="?cid=".$cid['consumerid'];
            }

            if ($last_word== "profile") {
                $message = "The created consumer record has been auto-activated. Please ensure that you implement logic to send out Account Activation Emails to the respective consumer's email address if required.";
                $retcode = $retcode.'&msg='.$message;
            }

            $res = array('cid' => $cid);
            if ($cid['status'] == 'success') {
                $res['success'] = true;
                $res['msg'] = "Customer Added with email: " . $postData['CP_EmailId']." having Consumer id: ".$cid['consumerid'];
             /***************************************************************************
                *Function called to Activate a Registered User				   		 *
                *Pass parameter:												     *
                *	-Consumer Id													 *
                ***************************************************************************/

                        $active = $this->NEOapi->activateConsumer($cid);
                $res['active'] = $active;

                if ($active['status']=='failure') {
                    $res['msg'] = "Customer Activation Failed for: " . $postData['CP_EmailId']." having Consumer id: ".$cid['consumerid'];
                } elseif ($active['status']=='success') {
                    $res['msg'] = "Customer Activation Successfully for: " . $postData['CP_EmailId']." having Consumer id: ".$cid['consumerid'];
                }
                $res['consumerID'] = $cid['consumerid'];
                $res['retcode'] = $retcode;
            } elseif ($cid['status'] =='failure') {
                $res['msg'] = "Unsuccessful add customer request for " .$postData['CP_EmailId']." Error Response = ". $cid['consumerid'];
                $res['success'] = false;

                $res['errcode'] = array();
                if (is_array($cid['response'])) {
                  foreach ($cid['response'] as $value) {
                      $res['errcode'][] = $value;
                  }
                } else {
                  $res['errcode'][] = $cid['response'];
                }

            }

            return $res;
        }
}
