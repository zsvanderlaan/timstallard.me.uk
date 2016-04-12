<?php

$message = "";

foreach($_POST as $item => $contents){
  $message .= $item . ": " . $contents . "\n";
}

mail("contact@timstallard.me.uk", "Website Email", $message);
print_r($_POST);
