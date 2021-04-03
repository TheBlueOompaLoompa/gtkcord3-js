import { Header } from './header';
import * as Settings from '../settings/settings';

export class gWindow {
    window;
    app;

    header: Header;
    main;

    fileCSS;

    constructor(Gtk, application, onQuit) {
        this.app = application;
        // Create window from application
        this.window = new Gtk.ApplicationWindow(application);
        this.window.setTitle('Gtkcord4');
        this.window.setDefaultSize(Settings.WindowWidth, Settings.WindowHeight);
        this.window.on('destroy', onQuit);

        // Create header
        this.header = new Header({ window: this.window });
    }

    show() {
        this.window.show();
		this.window.present();
    }
}