import { Spinner } from "../animations/spinner"

export class Loading {
    spinner;

    constructor(Gtk) {
        var spinner = new Spinner(Gtk, 25);
        spinner.Show();
        this.spinner = spinner.spinner;
    }
}