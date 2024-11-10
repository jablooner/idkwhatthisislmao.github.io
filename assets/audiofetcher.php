<?php
$musicFolder = '../music';

$audioFiles = [];
if (is_dir($musicFolder)) {
    $files = scandir($musicFolder);
    foreach ($files as $file) {
        $filePath = $musicFolder . '/' . $file;
        if (is_file($filePath) && (preg_match('/\.(mp3|wav|ogg)$/i', $file))) {
            $audioFiles[] = $file;
        }
    }
}

echo json_encode($audioFiles);
?>
