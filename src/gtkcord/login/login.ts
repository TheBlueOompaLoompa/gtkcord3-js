import { findPassword, setPassword } from 'keytar';

export class Login {
    window; // Gtk.window
    
    // Window Contents
    main: Gtk.Box;
    description: Gtk.Label;
    tokenInput: Gtk.Entry;
    loginButton: Gtk.Button;

    constructor(Gtk, onQuit: Function, loginCallback: Function) {
        // Create window
        this.window = new Gtk.Window();
        this.window.setTitle('Discord Login');
        this.window.setModal(true);
        this.window.setDefaultSize(350, 150);
        this.window.on('close-request', onQuit);

        // Create main box
        this.main = new Gtk.Box({ orientation: 1 });
        this.main.setMarginTop(25);
        this.main.setMarginBottom(25);
        this.main.setSizeRequest(320, 100);
        this.main.setHalign(Gtk.Align.CENTER);
        this.main.setSpacing(5);

        // Create description
        this.description = new Gtk.Label({ label: 'Discord login token:' });
        this.description.show();
        this.main.append(this.description);

        // Create token input
        this.tokenInput = new Gtk.Entry();
        this.tokenInput.show();
        this.main.append(this.tokenInput);

        // Create login button
        this.loginButton = new Gtk.Button({ label: 'Login' });
        this.loginButton.show();
        this.main.append(this.loginButton);
        
        // Make the login button work
        this.loginButton.on('clicked', () => {
            this.window.hide();

            // Save token and login
            var token = this.tokenInput.getText();
            this.saveToken(token);
            loginCallback(token);
        });

        // Add main to window
        this.main.show();
        this.window.setChild(this.main);
    }

    saveToken(token: string): void {
        setPassword('com.oompa.gtkcord4', 'discord', token);
    }

    show(): void {
        this.window.show();
        this.window.present();
    }
}

export function tryLoadToken(): Promise<string> {
    return findPassword('com.oompa.gtkcord4');
}