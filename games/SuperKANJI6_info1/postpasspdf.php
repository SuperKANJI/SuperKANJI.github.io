<?php
echo "Wait a second...";
$filename = $_FILES['userfile']['name']
if(!empty($_POST["password"])){
  $pass = $_POST["password"];
  retunepasspdf($file_save,$pass);
}
function retunepasspdf($filename,$pass)
{
$f = "pdftk " . $filename . " output " . $filename . " user_pw " . $pass;
exec($f);
sleep(3);
if (file_exists($filename)) {
    header('Content-Description: File Transfer');
    header( "Content-Type: application/pdf" );
    header('Content-Disposition: attachment; filename="'.basename($filename).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($filename));
    readfile($filename);
    exit;
}
}
?>
