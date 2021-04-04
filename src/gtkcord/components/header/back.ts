export class Back {
    button; // Gtk.Button

    constructor(Gtk) {
        this.button = new Gtk.Button();
        this.button.setIconName('go-previous-symbolic');
        this.button.show();
    }
}