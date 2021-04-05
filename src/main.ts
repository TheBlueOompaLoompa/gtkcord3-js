import * as gi from 'node-gtk';
const GLib = gi.require('GLib', '2.0');
const Gtk = gi.require('Gtk', '4.0');

import { Client } from 'discord.io';

import { gWindow } from './gtkcord/components/window/window';
import { Login, tryLoadToken } from './gtkcord/login/login';
import { Header } from './gtkcord/components/header/header';

import { loginWithToken } from './gtkcord/discord/discord';

const loop = GLib.MainLoop.new(null, false);
const app = new Gtk.Application('com.oompa.gtkcord4');

var client: Client;

function onQuit(): boolean {
	loop.quit();
	app.quit();
	return false;
}

async function main() {
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
			loginWithToken(token, (c: Client) => {
				client = c;
				loop.quit();
				window.header = new Header(Gtk);
				window.header.show();
				window.window.setTitlebar(window.header.main);
				loop.run();
				console.log('Updating header');
			});
			window.show();
		}

		gi.startLoop();
		loop.run();
	});

	const status = app.run([]);

	console.log('Finished with status:', status);
	process.exit(0);
}

main()