import { MainHamburger } from './hamburger';
import { Back } from './back';

export class Header {
    Gtk;

    main; // Gtk.Box

    // Left: hamburger and guild name:
    leftSide;   // Gtk.HeaderBar
    leftContainer;  // Gtk.Box
    hamburger: MainHamburger;
    guildName;  // Gtk.Label

    separator;  // Gtk.Separator

    // Right: channel name only.
    rightSide;  // Gtk.HeaderBar
    rightContainer; // Gtk.Box
    back: Back;
    channelName;// Gtk.Label
    chMenuBtn: ChMenuButton;

    constructor(Gtk) {
        this.Gtk = Gtk;

        this.main = new Gtk.Box();

        /*
         * Left side
        */

        // Create left header bar
        this.leftSide = new Gtk.HeaderBar();
        this.leftSide.setShowTitleButtons(false);

        // Create container
        this.leftContainer = new Gtk.Box();

        // Add hamburger button
        this.hamburger = new MainHamburger(Gtk);
        this.leftContainer.append(this.hamburger.button);

        // Add guild name widget
        this.guildName = new Gtk.Label({ label: 'gtkcord4' });
        this.guildName.setMarginStart(10);
        this.guildName.show();
        this.leftContainer.append(this.guildName);
        
        // Show left side
        this.leftContainer.show();
        this.leftSide.setTitleWidget(this.leftContainer);
        this.leftSide.show();
        this.main.append(this.leftSide);

        // Add separator
        this.main.append(new Gtk.Separator());

        /*
         * Right side
        */

        // Create right header bar
        this.rightSide = new Gtk.HeaderBar();
        this.rightSide.setHexpand(true);
        this.rightSide.setShowTitleButtons(true);

        // Create container
        this.rightContainer = new Gtk.Box();
        this.rightContainer.setHexpand(true);

        // Add back button
        this.back = new Back(Gtk);
        this.rightContainer.append(this.back.button);

        // Show right side
        this.rightContainer.show();
        this.rightSide.setTitleWidget(this.rightContainer);
        this.rightSide.show();
        this.main.append(this.rightSide);
    }

    show() {
        this.main.show();
    }

    setGuild(name: string) {
        this.leftContainer.remove(this.guildName);
        this.guildName.setText(name);
        this.leftContainer.append(this.guildName);
    }
}