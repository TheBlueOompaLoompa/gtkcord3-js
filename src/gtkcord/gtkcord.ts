import * as Plugins from './plugins';

const SettingsFile = "settings.json";
const LastReadFile = "lastread.json";

class Application {
    app
    window

    notifier
    MPRIS

    plugins

    // Preferences window, hidden by default
    settings

    // Main Grid, left is always LeftGrid - *gtk.Grid
    main    // handy.Leaflet
    right   // singlebox.box
    // <grid>        <item>       <item>
	// | Left        | Right    |
	// | Left Grid   | Messages |

	// Left Grid
    leftGrid // gtk.Grid
    leftCols // map[int]gtk.Iwidget
    // <item>     <item>
	// | Guilds   | Channels

	// Application states
    header  // header.Header
    guilds  // guild.Guilds
    privates// channel.PrivateChannels
    channels// channel.Channels
    messages// message.Messages
    voice   // voice.Voice

    // LastRead contains the persistent state of the latest channels mapped from
	// guilds.
    lastRead// LastRead

    constructor(Application, Plugins, LastRead, Settings){
        this.app = Application;
        this.plugins = Plugins;
        this.lastRead = LastRead;
        this.settings = MakeSettings();
    }
}

export function New(app){
    const plugins = Plugins.loadPlugins();
    
    return Application
}