import * as gi from 'node-gtk';
const GLib = gi.require('GLib', '2.0');
const Gtk = gi.require('Gtk', '4.0');

import { gWindow } from './gtkcord/components/window/window';

function main(){
	const loop = GLib.MainLoop.new(null, false);
	const app = new Gtk.Application('com.oompa.gtkcord3', 0);
	app.on('activate', onActivate);
	const status = app.run([]);

	console.log('Finished with status:', status);

	function onActivate() {
		const window = new gWindow(Gtk, app, onQuit);

		window.show();

		gi.startLoop();
		loop.run();
	}

	function onQuit() {
		loop.quit();
		app.quit();
		return false;
	}
}

main()