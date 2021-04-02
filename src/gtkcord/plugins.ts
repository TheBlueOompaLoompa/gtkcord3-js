import * as config from './config/config';
import { rmSync } from 'fs';

class Plugin {
    name:   string;   // Optional
    author: string; // Optional
    OnReady: Function;

    path:   string;

    constructor(OnReady: Function, path: string, name?: string, author?: string){

    }
}

export function removePlugin(application, path:string) {
    application.plugins.forEach(plugin => {
        // Remove from list
        application.plugins = application.plugins.filter((plugin) => plugin.path == path);

        // Remove from filesystem
        rmSync(path);
    });
}

function loadPlugin(path:string) {
    // Import plugin
    var p = require(path);
    var plugin = new Plugin(p.OnReady, path);
    
    // Assign name and author if they exist
    plugin.name = p.name ? p.name : undefined;
    plugin.author = p.author ? p.author : undefined;

    return plugin;
}

export function loadPlugins(){
    const { files, path } = config.mustRead("plugins");

    var plugins: Plugin[] = [];

    for(var i = 0; i < files.length; i++){
        var file = files[i];

        var plugin = loadPlugin(path + file);
        plugins.push(plugin);
    }

    return plugins;
}