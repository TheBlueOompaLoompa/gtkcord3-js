import { homedir } from 'os';
import { mkdirSync, existsSync, readdirSync } from 'fs';

export const WindowWidth	=	1000
export const WindowHeight	=	700

export const EmbedAvatarSize=	24
export const EmbedMaxWidth	=	300
export const EmbedImgHeight	=	300 // max
export const EmbedMargin	=	8

export const AvatarSize		=	42
export const AvatarPadding	=	10

export const MaxMessageWidth=	750

export const SpinnerSize	=	56
export const ChannelWidth	=	240

export const InputIconSize	=	234	// TODO: change this to the node-gtk equivalent of gtk.ICON_SIZE_LARGE_TOOLBAR

export const DefaultEmbedColor = 0x808080

var path: string;

function init() {
    path = homedir() + '/gktcord';

    if(!existsSync(path)){
        mkdirSync(path, {mode: '0o775'});
    }
}

export function mustRead(dir:string) {
    dir = path + dir;

    return { files: readdirSync(dir), path: dir, undefined };
}