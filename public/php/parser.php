<?php
/*
	Download 
	https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/phpquery/phpQuery-0.9.5.386-onefile.zip
	And move to public/php
*/ 

require_once('./phpQuery.php'); 

function curlGetPage($url, $referer = 'https://google.com/')
{
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36');
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_REFERER, $referer);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	$response = curl_exec($ch);	
	curl_close($ch);

	return $response;
}

$page = curlGetPage('https://www.chtotib.ru/studentu/');
$document = phpQuery::newDocument($page);
$posts = $document->find('a[href^=https://drive.google.com/]');
$resultArr = [];

foreach($posts as $post) {
	array_push($resultArr, $post->getAttribute('href'));
}
phpQuery::unloadDocuments();

echo json_encode($resultArr);
