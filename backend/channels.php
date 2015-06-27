<?php

$channels = array_filter(glob('channels/*'), 'is_dir');
log($channels, "channels.php");

?>
