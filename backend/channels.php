<?php

require('./utility.php');

function get_channel_names() {
    $channels = array_filter(glob('channels/*'), 'is_dir');
    $channels = array_map(function ($s) {return str_replace("channels/", "", $s);}, $channels);

    return $channels;
}

function get_channels() {
    // [{name: "clouds", papers: ["noon_clouds.jpg", "beautiful_sky.jpeg"]}]
    $channels = get_channel_names();

    return array_map(function ($name) {
        return array(
            "name"   => $name,
            "papers" => get_files_of_type_in_directory("channels/$name", ['png', 'jpg', 'jpeg'])
        );
    }, $channels);
}

echo json_encode(get_channels());

?>
