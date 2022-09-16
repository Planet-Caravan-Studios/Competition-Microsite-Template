<?php

namespace App\Http\Controllers;

use App\Services\NEOconsumerRegister;
use App\Services\NeoApiHelper;
use App\Mail\Rsvp;
use App\Event;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Aws\S3\S3Client;
use Carbon\Carbon;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Str;

use Exception;

class CidbController extends BaseController
{
    private $bucket;
    private $folder;
    private $region;
    private $awsAccessKeyId;
    private $awsSecretKey;

    public function __construct(){
        $this->bucket = env('AWS_BUCKET');
        $this->folder = env('AWS_FOLDER');
        $this->region = env('AWS_DEFAULT_REGION'); //us-east-1
        $this->awsAccessKeyId = env('AWS_ACCESS_KEY_ID');
        $this->awsSecretKey = env('AWS_SECRET_ACCESS_KEY');
    }

    public function register (Request $request) {
        try {

            if($request->hasFile('CP_image')){
                Log::info($request->file('CP_image'));
                $res=$this->imageUploader($request->file('CP_image'));
                $request->request->add(['PR_4_416_1_freetext' => $res['fileurl']]);
                $folder=$res['monthfolder'];
                $fileName=$res['filename'];
                Log::info($fileName);
            } else {
                $res = array('filename' => '', 
                'success' => true, 
                'error' => 'no image', 
                'monthfolder' => '', 
                'fileurl' => '');
            }
            if($res['success']) {    
                Log::info('CidbController: trying to register User', array( 'email' => $request->input('CP_EmailId') ));
                $statusCode = 200;
                Log::info('pre-reg');
                $NEOconsumerRegister = new NEOconsumerRegister();
                $neores = $NEOconsumerRegister->registerConsumer($request->all());
            } else {
                $statusCode = 400;
                $neores = 'Bad file type';
            }

        } catch (Exception $e) {
            Log::info('CidbController: cannot register user', array( 'email' => $request->input('CP_EmailId'), 'error' => $e->getMessage()));
            $statusCode = 400;
            $neores = null;
        } finally {
            return response()->json($neores, $statusCode);
        }
    }

    public function unsubscribe(Request $request) {
        try {
            Log::info('CidbController: unsubscribe User', array( 'id' => $request->input('EmailId')));
            $apiHelper = new NeoApiHelper();
            $statusCode = 200;
            $apiHelper->unsubscribe($request->all());
            $res = ["success" => true];
        } catch (Exception $e) {
            Log::info('CidbController: cannot unsubscribe User', array( 'id' => $request->input('EmailId'), 'error' => $e ));
            $statusCode = 400;
            $res = ["success" => false];
        } finally {
            return response()->json($res, $statusCode);
        }
    }

    private function imageUploader($file){
        $success = false;
        $error = '';
        $destinationPath = storage_path().'/images';
        $randName = Str::random(16);
        $originalFileName = rawurlencode($file->getClientOriginalName());
        $filename= $randName . '_' . str_replace('%20', '_', $originalFileName);
        $monthFolder = strtolower(Carbon::now()->format('F'));
        $urlAws = 'https://'.$this->bucket;
        if((preg_match("/\.(png|jpg|jpeg)$/", strtolower($originalFileName))) && (preg_match_all("(\.)", $originalFileName) < 2) && !(preg_match('/[^a-zA-Z\d\-\_\.][^((?!%20).)*$]/', $originalFileName)) ) {
            try{
                $file->move($destinationPath, $filename);
                Log::info($file);
            } catch (Exception $fm){
                //Log::info('Move : ', array( 'move' => $fm));
            }
            
            $path = $destinationPath . '/' . $filename;
            $s3 = new S3Client([
                'version'     => 'latest',
                'region'      => $this->region,
                'credentials' => [
                    'key'    => $this->awsAccessKeyId,
                    'secret' => $this->awsSecretKey
                ]
            ]);
            try {
                $result = $s3->putObject([
                    'Bucket' => $this->bucket,
                    'Key'    => $this->folder . $monthFolder. "/". $filename,
                    'SourceFile' => $path,
                    'ACL'    => 'public-read'
                ]);
                $urlAws .= '.s3.amazonaws.com/'.$this->folder.$monthFolder.'/'.$filename;
                $success = true;
            } catch (Aws\Exception\S3Exception $e) {
                Log::info("There was an error uploading the file.\n");
                $error = 'Image upload failed.';
            } finally {
                unlink($path);
            }
            $res = array('filename' => $filename, 
                'success' => $success, 
                'error' => $error, 
                'monthfolder' => $monthFolder, 
                'fileurl' => $urlAws);

            return $res;
        }
        else {
            $res = array('filename' => $filename, 
                'success' => false, 
                'error' => 'Bad file type', 
                'monthfolder' => '', 
                'fileurl' => '');

            return $res;
        }
    }
}
