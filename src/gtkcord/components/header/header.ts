import { MainHamburger } from './hamburger';
import { Back } from './back';

export class Header {
    Gtk;

    main; // Gtk.Box

    guildNameHeader;    // Gtk.HeaderBar
    guildName;  // Gtk.Label

    // Right
    backHeader; // Gtk.HeaderBar
    back: Back;
    channelNameHeader   // Gtk.HeaderBar
    channelName;// Gtk.Label
    chMenuBtnHeader;    // Gtk.HeaderBar
    chMenuBtn: ChMenuButton;

    hamburgerHeader;    // Gtk.HeaderBar
    hamburger: MainHamburger;

    constructor(Gtk) {
        this.Gtk = Gtk;
        this.main = new Gtk.Box();

        /*
         * Left side
        */

        // Add hamburger button
        this.hamburger = new MainHamburger(Gtk);
        // Header
        this.hamburgerHeader = new Gtk.HeaderBar();
        this.hamburgerHeader.setShowTitleButtons(false);
        this.hamburgerHeader.setTitleWidget(this.hamburger.button);
        this.hamburgerHeader.show();

        // Add guild name widget
        this.guildName = new Gtk.Label({ label: 'gtkcord4' });
        this.guildName.show();
        // Header
        this.guildNameHeader = new Gtk.HeaderBar();
        this.guildNameHeader.setShowTitleButtons(false);
        this.guildNameHeader.setTitleWidget(this.guildName);
        this.guildNameHeader.show();
        
        // Show left side
        this.main.append(this.hamburgerHeader);
        this.main.append(this.guildNameHeader);

        /*
         * Right side
        */

        // Add back button
        this.back = new Back(Gtk, this.main);
        // Header
        this.backHeader = new Gtk.HeaderBar();
        this.backHeader.setShowTitleButtons(false);
        this.backHeader.setTitleWidget(this.back.revealer);
        this.backHeader.show();

        // Add channel name widget
        this.channelName = new Gtk.Label({ label: '' });
        this.channelName.setHexpand(true);
        this.channelName.show();
        // Header
        this.channelNameHeader = new Gtk.HeaderBar();
        this.channelNameHeader.setShowTitleButtons(true);
        this.channelNameHeader.setTitleWidget(this.channelName);
        this.channelNameHeader.setHexpand(true);
        this.channelNameHeader.show();

        // Show right side
        this.main.append(this.backHeader);
        this.main.append(this.channelNameHeader);
    }

    show() {
        this.main.show();
    }

    setGuild(name: string) {
        this.guildName.setText(name);
    }
}