import * as gi from 'node-gtk';
const Handy = gi.require('Handy');

export class Header {
    titleBar;   // handy: TitleBar
    main;       // gtk: Stack
    constructor(){
        this.titleBar = new Handy.TitleBar();
        this.titleBar.show();


    }
}