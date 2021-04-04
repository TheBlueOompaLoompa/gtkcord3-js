import * as Gjs from "./Gjs";
import * as Gtk40 from "./Gtk-4.0";
import * as Gdk40 from "./Gdk-4.0";
import * as Atk10 from "./Atk-1.0";
import * as Cairo10 from "./cairo-1.0";
import * as Pango10 from "./Pango-1.0";
import * as Gio20 from "./Gio-2.0";
import * as GdkPixbuf20 from "./GdkPixbuf-2.0";
import * as GObject20 from "./GObject-2.0";
import * as HarfBuzz00 from "./HarfBuzz-0.0";
import * as GLib20 from "./GLib-2.0";
import * as GModule20 from "./GModule-2.0";
import * as Xlib20 from "./xlib-2.0";
import * as Gsk40 from "./Gsk-4.0";
import * as Graphene10 from "./Graphene-1.0";
import * as PangoCairo10 from "./PangoCairo-1.0";
import * as Clutter10 from "./Clutter-1.0";
import * as Champlain012 from "./Champlain-0.12";
import * as Json10 from "./Json-1.0";
import * as GL10 from "./GL-1.0";
import * as CoglPango10 from "./CoglPango-1.0";
import * as Cogl10 from "./Cogl-1.0";
import * as GVnc10 from "./GVnc-1.0";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
          Gtk: typeof Gtk40
          Gdk: typeof Gdk40
          Atk: typeof Atk10
          cairo: typeof Cairo10
          Pango: typeof Pango10
          Gio: typeof Gio20
          GdkPixbuf: typeof GdkPixbuf20
          GObject: typeof GObject20
          HarfBuzz: typeof HarfBuzz00
          GLib: typeof GLib20
          GModule: typeof GModule20
          xlib: typeof Xlib20
          Gsk: typeof Gsk40
          Graphene: typeof Graphene10
          PangoCairo: typeof PangoCairo10
          Clutter: typeof Clutter10
          Champlain: typeof Champlain012
          Json: typeof Json10
          GL: typeof GL10
          CoglPango: typeof CoglPango10
          Cogl: typeof Cogl10
          GVnc: typeof GVnc10
        }
        versions: {
            Gtk: string
            Gdk: string
            Atk: string
            cairo: string
            Pango: string
            Gio: string
            GdkPixbuf: string
            GObject: string
            HarfBuzz: string
            GLib: string
            GModule: string
            xlib: string
            Gsk: string
            Graphene: string
            PangoCairo: string
            Clutter: string
            Champlain: string
            Json: string
            GL: string
            CoglPango: string
            Cogl: string
            GVnc: string
        }
        searchPath: string[];
    }
}

export { imports }
