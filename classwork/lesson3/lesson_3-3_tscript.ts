type AnimalType = {
    isALive: boolean
    sound:()=>void;
}

class Horse implements AnimalType{
    isALive: boolean;

    constructor(isALive: boolean) {
        this.isALive = isALive;
    }

    sound(): void {
    }

}
