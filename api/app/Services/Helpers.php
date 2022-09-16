<?php
namespace App\Services;

/**
 *
 */
class Helpers
{
  const URL_DEV = 'http://worldclass.diageo.thoriumd.com/';
  const URL_STAGING = 'https://staging.diageoworldclasscanada.com/';
  const URL_PROD = 'https://www.diageoworldclasscanada.com/';


  public static function getSiteURL()
	{
		if ($_SERVER['ENVIROMENT'] == 'Dev'){
      $url = self::URL_DEV;
    }
		elseif ($_SERVER['ENVIROMENT'] == 'Staging') {
			$url = self::URL_STAGING;
		}
		else {
      $url = self::URL_PROD;
    }
		return $url;
	}

  public static function get_client_ip()
  {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']) && $_SERVER['HTTP_CLIENT_IP'])
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']) && $_SERVER['HTTP_X_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']) && $_SERVER['HTTP_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']) && $_SERVER['HTTP_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'])
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';

    if( is_array($ipaddress) )
      return $ipaddress[0];
    else
    return $ipaddress;
  }
}
