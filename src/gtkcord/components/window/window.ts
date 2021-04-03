import { LoadHeader } from './header';
import { Header } from '../header/header';
import * as Settings from '../settings/settings';

export class gWindow {
    window;
    app;

    lHeader: LoadHeader;
    header: Header;
    main;

    fileCSS;

    constructor(Gtk, application, onQuit) {
        this.app = application;
        // Create window from application
        this.window = new Gtk.ApplicationWindow(application);
        this.window.setTitle('Gtkcord4');
        this.window.setDefaultSize(Settings.WindowWidth, Settings.WindowHeight);
        this.window.on('close-request', onQuit);

        // Create header
        this.lHeader = new LoadHeader(Gtk);
        this.lHeader.Show();
        this.window.setTitlebar(this.lHeader.headerBar);

        this.window.setChild(this.lHeader.main);
    }

    show() {
        this.window.show();
		this.window.present();
    }
}