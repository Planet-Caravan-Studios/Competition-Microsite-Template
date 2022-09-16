<?php
namespace App\Services;

use App\Services\NeoTransform;
use GuzzleHttp\Client;


class NeoApiHelper
{
  const API_STAGING = 'https://neowebservices-staging.diageo.com/neowebservices/';
  const API_PROD = 'https://neowebservices.diageo.com/neowebservices/';
  const APP_ID = '9201019';
  const VERSION = '2.0';
  const PROMOCODE = 'DNA107DJO0720WC0010';

  private $client;

  function __construct()
  {
    if ($_SERVER['ENVIROMENT'] == 'Dev' || $_SERVER['ENVIROMENT'] == 'Staging') {
      $url = self::API_STAGING;
    } else {
      $url = self::API_PROD;
    }

    $this->client = new Client([
      'base_uri' => $url . self::APP_ID . '/' . self::VERSION . '/consumers/',
      'verify' => false
    ]);
  }

  public function login($username, $password)
  {
    $res = $this->client->request('GET', 'useraccount', [
      'query' => [
        'loginname' => $username,
        'password' => $password,
        'promocode' => self::PROMOCODE
      ]
    ]);
    $body = (string) $res->getBody();
    // Log::info('NEO login', ['response' => $body]);
    return $body;
  }

  public function getUser($neoId)
  {
    $res = $this->client->request('GET', $neoId . '/all');
    $body = json_decode($res->getBody());
    // Log::info('NEO getUser', ['response' => print_r($body, true)]);
    return $body;
  }

  public function updateUser($formData)
  {
    $existingData = $this->getUser($formData['neo_id']);
    $req = NeoTransform::transformUpdateData($formData, $existingData);
    // Log::info('NEO updateUser', ['data' => json_encode($req)]);
    $res = $this->client->request('PUT', $formData['neo_id'], [
      'json' => $req
    ]);
    $body = json_decode($res->getBody());
    // Log::info('NEO updateUser', ['response' => print_r($body, true)]);
    return $body;
  }

  public function forgotPassword($email='')
  {
    $res = $this->client->request('GET', 'useraccount', [
      'query' => [
        'loginname' => $email,
        'temptoken' => 0
      ]
    ]);
    $body = json_decode($res->getBody());
    // Log::info('NEO forgotPassword', ['response' => $body]);
    return $body;
  }

  public function resetPassword($email='', $password='', $token='')
  {
    $res = $this->client->request('PUT', 'useraccount', [
      'query' => [
        'loginname' => $email,
        'password' => $password,
        'temptoken' => $token
      ]
    ]);
    $body = json_decode($res->getBody());
    // Log::info('NEO resetPassword', ['response' => $body]);
    return $body;
  }

  public function unsubscribe($data)
  {
    $data = [
      "ConsumerDetails" => [
        "FirstName" => $data['FirstName'],
        "LastName" => $data['LastName'],
        "DOB" => $data['DOB'],
        "PromoCode" => "DNA107OGB1019WC0007",
        "CountryOfResidence" => $data['Country']
      ],
      "Preference" => [[
        "QuestionID" => 80,
        "OptionID" => 1,
        "OptionDetails" => [
          "Email" => [[
            "EmailId" => $data['EmailId'],
            "EmailCategory" => 1,
            "IsDefaultFlag" => 1,
            "ModifyFlag" => "D"
          ]]
        ],
        "BrandID" => 241,
        "CommunicationChannel" => 1
      ]]
    ];
    $res = $this->client->request('PUT', 'preferences/unsubscribe', [
      'json' => $data
    ]);
    $body = json_decode($res->getBody());
    return $body;
  }
}
