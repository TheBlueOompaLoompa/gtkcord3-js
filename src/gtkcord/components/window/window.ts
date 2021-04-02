import * as gi from 'node-gtk';
import { join } from 'node:path';
import { Header } from './header';

export class gWindow {
    window;
    app;

    header;
    main;

    fileCSS;

    constructor(application){
        this.app = application;
        this.header = new Header();
    }
}