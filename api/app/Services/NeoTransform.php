<?php
namespace App\Services;

class NeoTransform {

	public static function transformDataToNeo($formData = null)
	{
		if(!$formData) {
			return false;
		}

		$data = array(
			'HD_Consumerid' => isset($formData['neo_id']) ? $formData['neo_id'] : '',

			'CP_FirstName' => $formData['firstname'],
			'CP_LastName' => $formData['lastname'],
			'CP_Gender' => $formData['gender'],
			'CP_DOB' => $formData['dob_year'] .'-'. $formData['dob_month'] .'-'. str_pad($formData['dob_day'], 2, '0', STR_PAD_LEFT),
			'PR_4_92_1' => 36, // Canada
			'CP_EmailId' => $formData['email'],
			'HD_EmailType' => 1,
			'CP_PhoneNumber' => str_replace(["-", "–"], '', $formData['phone']),
			'HD_PhoneType' => 3,
			'CP_Address1' => $formData['address'],
			'HD_AddressType' => 1,
			'CP_Address2' => isset($formData['address2']) ? $formData['address2'] : '',
			'CP_City' => $formData['city'],
			'CP_State' => $formData['province'],
			'CP_Country' => 'CA', // Canada
			'CP_ZipCode' => $formData['zipcode'],

			//I would like to receive information from thebar.com and other Diageo brands
			'PR_1_64_1' => 99,
			'HD_PR_1_64_1_Brand' => 203,
			'HD_PR_1_64_1_Comm' => 1,
			'PR_1_64_2' => 99,
			'HD_PR_1_64_2_Brand' => 203,
			'HD_PR_1_64_2_Comm' => 2,
			'PR_1_64_3' => 99,
			'HD_PR_1_64_3_Brand' => 203,
			'HD_PR_1_64_3_Comm' => 3,
			'PR_1_64_4' => 99,
			'HD_PR_1_64_4_Brand' => 18,
			'HD_PR_1_64_4_Comm' => 1,
			'PR_1_64_5' => 99,
			'HD_PR_1_64_5_Brand' => 18,
			'HD_PR_1_64_5_Comm' => 2,
			'PR_1_64_6' => 99,
			'HD_PR_1_64_6_Brand' => 18,
			'HD_PR_1_64_6_Comm' => 3,

			'EO_12_231_1' => 99,  // May we contact you through 'Mobile SMS' about {Brand}
			'HD_EO_12_231_1_Brand' => 203,

			'PR_4_269_1_freetext' => $formData['province'], // Province

			'HD_IsDefaultFlag' => 1,

			'HD_PromoCode' => NeoApiHelper::PROMOCODE,
			'CP_AcquisitionSource' => NeoApiHelper::ACQUISITION_SOURCE
		);

		$data['UA_LoginName'] = $formData['email'];

		if(isset($formData['password'])) {
			$data['UA_Password'] = $formData['password'];
		}

		// Log::info('NeoTransform', array(
		// 	'input' => $formData,
		// 	'output' => $data
		// ));

		return $data;
	}

	public static function transformUpdateData($formData = null, $consumer, $request = null)
	{
		if(!$formData) {
			$formData = $request->all();
		}

		$data = array(
		    "ConsumerProfile" => [
	        "FirstName" => $formData['firstname'],
	        "LastName" => $formData['lastname'],
	        "DOB" => $formData['dob_year'] .'-'. $formData['dob_month'] .'-'. str_pad($formData['dob_day'], 2, '0', STR_PAD_LEFT),
	        "Gender" => intval($formData['gender']),
	        "Address" => [[
            "AddressID" => $consumer->ConsumerProfile->Address[0]->AddressID,
            "Address1" => $formData['address'],
            "Address2" => isset($formData['address2']) ? $formData['address2'] : '',
            "City" => $formData['city'],
            "State" => $formData['province'],
            "Country" => "CA",
            "ZipCode" => $formData['zipcode'],
            "AddressType" => 1,
            "ModifyFlag" => "U"
	        ]],
	        "Phone" => [[
            "PhoneID" => $consumer->ConsumerProfile->Phone[0]->PhoneID,
            "PhoneNumber" => str_replace(["-", "–"], '', $formData['phone']),
            "PhoneType" => 3,
            "ModifyFlag" => "U"
	        ]],
	        "Email" => [[
            "Id" => $consumer->ConsumerProfile->Email[0]->Id,
            "EmailId" => $formData['email'],
            "EmailCategory" => 1,
            "IsDefaultFlag" => 1,
            "ModifyFlag" => "U"
	        ]],
	        "PromoCode" => [NeoApiHelper::PROMOCODE],
	        "AcquisitionSource" => "WEWI19WA01"
		    ],
				"Preferences" => [
					"QuestionCategory" => [[
		        "CategoryID" => 4,
		        "QuestionAnswers" => [
		          [
		            "QuestionID" => 269,
		            "Answer" => [[
	                "OptionID" => 0,
	                "ModifyFlag" => "U",
	                "BrandID" => 203,
	                "AnswerText" => $formData['province'],
	              ]]
		          ]
		        ]
					]]
	      ]
		);

		return $data;
	}

	public static function transformDataFromNeo($consumer)
	{
		if(!is_object($consumer) || !$consumer->ConsumerProfile) {
			return false;
		}

		$dob = self::dobToArray($consumer->ConsumerProfile->DOB);

		$data = array(
			'firstname' => $consumer->ConsumerProfile->FirstName,
			'lastname' => $consumer->ConsumerProfile->LastName,
			'gender' => $consumer->ConsumerProfile->Gender,
			'dob_year' => $dob['year'],
			'dob_month' => $dob['month'],
			'dob_day' => $dob['day'],
			'email' => $consumer->ConsumerProfile->Email[0]->EmailId,
			'phone' => $consumer->ConsumerProfile->Phone[0]->PhoneNumber,
			'address' => $consumer->ConsumerProfile->Address[0]->Address1,
			'address2' => isset($consumer->ConsumerProfile->Address[0]->Address2) ? $consumer->ConsumerProfile->Address[0]->Address2 : '',
			'city' => $consumer->ConsumerProfile->Address[0]->City,
			'province' => $consumer->ConsumerProfile->Address[0]->State,
			'zipcode' => $consumer->ConsumerProfile->Address[0]->ZipCode,
		);

		return $data;
	}

	private static function dobToArray($dob='')
	{
		$date = new \DateTime($dob);
		return [
			'day' => $date->format('j'), // Day of the month without leading zeros
			'month' => $date->format('m'), // Numeric representation of a month, with leading zeros
			'year' => $date->format('Y'), // A full numeric representation of a year, 4 digits
		];
	}

}
