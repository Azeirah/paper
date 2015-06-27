<?php
    function get_files_in_directory($directory) {
        return scandir($directory);
        return array_diff(scandir($directory), array('..', '.'));
    }

    function get_files_of_type_in_directory($directory, $filetypes) {
        $files = get_files_in_directory($directory);
        // damn php closures are ugly :D
        $filtered = array_filter($files, function ($filename) use ($filetypes) {
            $path = "channels/$filename";
            return in_array(pathinfo($path)["extension"], $filetypes);
        });

        $result = [];

        foreach ($filtered AS $file) {
            array_push($result, $file);
        }

        return $result;
    }
?>
