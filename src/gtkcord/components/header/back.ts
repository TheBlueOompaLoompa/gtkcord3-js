export class Back {
    revealer;   // Gtk.Revealer
    button; // Gtk.Button

    constructor(Gtk, main) {
        // Create button
        this.button = new Gtk.Button();
        this.button.setIconName('go-previous-symbolic');
        this.button.show();

        // Create revealer
        this.revealer = new Gtk.Revealer();
        this.revealer.setChild(this.button);
        this.revealer.setRevealChild(false);

        main.addController(new Gtk.EventController());
    }
}