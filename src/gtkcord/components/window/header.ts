import * as gi from 'node-gtk';
const Handy = gi.require('Handy');
const Gtk = gi.require('Gtk', '4.0');

export class Header {
    titleBar;   // handy: TitleBar
    main;       // gtk: Stack
    constructor(pointers){
        this.titleBar = new Handy.TitleBar();

        this.main = new Gtk.Stack();
        this.main.setTransitionDuration(200);
        console.log(Object.keys(Gtk.Stack))
        //this.main.setTransitionType(Gtk.GTK_STACK_TRANSITION_TYPE_CROSSFADE);

        pointers.window.setTitlebar(this.titleBar);
    }

    Show(){
        this.titleBar.show();
        this.main.show();
    }
}