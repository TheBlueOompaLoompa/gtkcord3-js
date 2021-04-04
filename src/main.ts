import * as gi from 'node-gtk';
const GLib = gi.require('GLib', '2.0');
const Gtk = gi.require('Gtk', '4.0');

import { gWindow } from './gtkcord/components/window/window';
import { Login, tryLoadToken } from './gtkcord/login/login';

const loop = GLib.MainLoop.new(null, false);
const app = new Gtk.Application('com.oompa.gtkcord4', 0);

function onQuit() {
	loop.quit();
	app.quit();
	return false;
}

async function main(){
	// Try to get the token from keyring
	var token = await tryLoadToken();
	
	app.on('activate', () => {
		const window = new gWindow(Gtk, app, onQuit);

		// Create login window
		var login = new Login(Gtk, onQuit, (token: string) =>{
			// Show main window after entering token
			window.show();
		});
		// Show the login window if failed to get token or on success show main window
		if(token == null){
			login.show();
		}
		else {
			window.show();
		}

		gi.startLoop();
		loop.run();
	});

	const status = app.run([]);

	console.log('Finished with status:', status);
}

main()