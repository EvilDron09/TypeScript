abstract class Animal{
    isALive: boolean
    constructor(isALive: boolean) {
        this.isALive = isALive;
    }
    abstract bark ():void;
}

class Bird extends Animal{
    wings: boolean;

    constructor(isALive: boolean, wings: boolean) {
        super(isALive);
        this.wings = wings;
    }
    bark():void {
        console.log('chik chirik')
    }
}
