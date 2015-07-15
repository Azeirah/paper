# Paper is an extremely open project, [learn more](http://martijnbrekelmans.com/paper)

# Paper

Paper *will* at some point be a wallpaper manager. Right now, it's just a work-in-progress.

The idea of Paper as a wallpaper manager is as follows, Paper will be entirely community driven by means of a concept called "channels". Anyone will be able to create channels, and anyone will be able to submit wallpapers to these channels. An upvote/downvote system will be used to maintain the quality of channels. The channels can be subscribed to, and Paper will fetch a new wallpaper for you every 10 minutes, hour, day, whatever you want!

Wallpapers themselves will be favoritable (downloadable), upvotable and downvotable, and people can add tags to wallpapers. The five most common tags will be used to describe the wallpapers.

There will likely be a kind of frontpage with featured channels, some special channels, like random, most popular, least popular etc... It should also come with a search feature

Paper also sets out to tackle the problem of syncing your wallpapers over multiple devices (pcs and laptops only, mobile devices are not in consideration at this moment).

## Development

Right now, Paper is very much in development, all it can is fetch channel names and wallpaper urls from the server, it can't even download them yet!

To get started with Paper, run npm install in the `frontend/resources/app` folder.

Paper requires a running http php server, the simplest way to do this is by installing php and running the php server in the backend folder

1. Install php `sudo apt-get install php5 php5-cli`
2. Run the server from the backend folder `cd backend && php -S localhost:8000`

To run Paper's frontend, run `electron frontend/resources/app`.

## Development philosophy

I know of myself that I tend not to finish projects. I'll take a development approach that has worked for me before. I won't rush anything, I won't "push" myself to work on this. I'll just spend some time on this whenever I feel like it, usually not for any longer than maybe two hours, adding small pieces of functionality each time.

This means that it might be some time before this becomes somewhat usable!

## Working on right now:

- The very core, being able to fetch wallpapers from the server and set them.

## Paper will only work on Linux for the time being, as it is my main operating system.
