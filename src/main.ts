import * as gi from 'node-gtk';
const GLib = gi.require('GLib', '2.0');
const Gtk = gi.require('Gtk', '4.0');

function main(){
	const loop = GLib.MainLoop.new(null, false);
	const app = new Gtk.Application('com.oompa.gtkcord3', 0);
	app.on('activate', onActivate);
	const status = app.run([]);

	console.log('Finished with status:', status);

	function onActivate() {
		const window = new Gtk.ApplicationWindow(app);
		window.setTitle('Gtkcord3');
		window.setDefaultSize(config.WindowWidth, config.WindowHeight);
		window.on('close-request', onQuit);

		const label = new Gtk.Label({ label: 'Gtkcord3', vexpand: 1 });

		const closeButton = new Gtk.Button({ label: 'Close' });
		closeButton.on('clicked', () => window.close());

		const root = new Gtk.Box( { orientation: 1 } );
		root.append(label);
		root.append(closeButton);

		window.setChild(root);
		window.show();
		window.present();

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