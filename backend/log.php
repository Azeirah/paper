<?php
// Writes to the log file, from file $sourceFile
// will be written like this, say we say "hi" from "check.php"
// ...
// [check.php] hi
// ...
function writeToLog($content, $sourceFile) {
    $result = json_encode($content);

    $theTimeRightNow = date("l M j G:i:s T Y");
    file_put_contents("log.txt", "$theTimeRightNow - [$sourceFile]: $result\n", FILE_APPEND);
}

?>
