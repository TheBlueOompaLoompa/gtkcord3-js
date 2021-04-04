import { Loading } from './loading';

export class LoadHeader {
    headerBar;   // Gtk.HeaderBar
    main;       // Gtk.Stack
    Gtk
    constructor(Gtk){
        this.Gtk = Gtk;

        // Setup headerbar
        this.headerBar = new Gtk.HeaderBar();
        this.headerBar.setShowTitleButtons(true)
        this.headerBar.setTitleWidget(new Gtk.Label({ label: 'Connecting to discord' }));

        // Create view stack
        this.main = new Gtk.Stack();
        this.main.setTransitionType(Gtk.StackTransitionType.CROSSFADE);

        // Add loading screen
        this.main.addNamed(new Loading(Gtk).spinner, 'loading');
        this.main.setVisibleChildName('loading');
    }

    show() {
        this.headerBar.show();
        this.main.show();
    }

    hide() {
        this.headerBar.hide();
        this.main.hide();
    }

    SetTitle(title: string){
        this.headerBar.setTitleWidget(new this.Gtk.Label({ label: title }));
    }

    DisplayMain(widget){
        // Check if loading
        var isLoading = this.main.getVisibleChildName() == 'loading';

        // Update main
        this.main.remove(this.main.getChildByName('main'));
        this.main.addNamed(widget, 'main');
        this.main.setVisibleChild('main');

        // Remove loading widget
        if(isLoading){ this.main.remove(this.main.getChildByName('loading')); }
    }
}