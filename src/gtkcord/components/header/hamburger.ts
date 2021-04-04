export class MainHamburger {
    button;

    constructor(Gtk){
        this.button = new Gtk.Button();
        this.button.setIconName('open-menu');
        this.button.show();
    }
}