export class MainHamburger {
    button: Gtk.Button;

    constructor(Gtk){
        this.button = new Gtk.Button();
        this.button.setIconName('open-menu');
        this.button.show();
    }
}