<?php
require_once('DiDom/ClassAttribute.php');
require_once('DiDom/Document.php');
require_once('DiDom/Element.php');
require_once('DiDom/Encoder.php');
require_once('DiDom/Errors.php');
require_once('DiDom/Query.php');
require_once('DiDom/StyleAttribute.php');
require_once('DiDom/Node.php');
require_once('DiDom/Exceptions/InvalidSelectorException.php');
use DiDom\ClassAttribute;
use DiDom\Document;
use DiDom\Element;
use DiDom\Encoder;
use DiDom\Errors;
use DiDom\Query;
use DiDom\StyleAttribute;
use DiDom\Exceptions\InvalidSelectorException;
use DiDom\Node;

$document = new Document('https://www.chtotib.ru/studentu/', true);
$posts = $document->find('a[href^=https://drive.google.com/]');
$resultArr = [];

foreach($posts as $post) {
	array_push($resultArr, $post->getAttribute('href'));
}
echo json_encode($resultArr);
