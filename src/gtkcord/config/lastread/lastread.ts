import { UnmarshalFromFile } from "../config";

class State {
    path: string;
    store: Store;

    constructor(path: string, store: Store){
        this.path = path;
        this.store = store;
    }
}

class Store {
    map: Map<string, {channelId, isDM}>;
    locked: boolean;

    constructor(){
        this.map = new Map<string, {channelId, isDM}>();
        this.locked = false;
    }

    lock(){ this.locked = true; }
    unlock(){ this.locked = false; }

    load(file: string){
        this.lock();
        this.map = UnmarshalFromFile(file);
        this.unlock();
    }
}

export function New(file: string): State {
    var store = new Store();
    store.load(file);

    return new State(file, store);
} 