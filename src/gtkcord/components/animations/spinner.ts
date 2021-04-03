export class Spinner {
    spinner;    // Gtk.Spinner
    size: number;

    constructor(Gtk, size: number) {
        // Create Spinner
        this.spinner = new Gtk.Spinner();

        // Set size and alignment
        this.size = size;
        this.spinner.setSizeRequest(size, size);
        this.spinner.setValign(Gtk.Align.CENTER);
        this.spinner.setHalign(Gtk.Align.CENTER);

        // Start spinner
        this.spinner.start();
    }

    Show(){
        this.spinner.show();
    }
}