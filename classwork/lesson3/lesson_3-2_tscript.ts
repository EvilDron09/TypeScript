interface IAnimal{
    isALive: boolean
    sound:()=>void;
}

interface X{
    id:number
}

class Birds implements IAnimal,X{
    private _wings: boolean;
    private _id: number;
    private _isALive: boolean;

    constructor(wings: boolean, id: number, isALive: boolean) {
        this._wings = wings;
        this._id = id;
        this._isALive = isALive;
    }

    get wings(): boolean {
        return this._wings;
    }

    set wings(value: boolean) {
        this._wings = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get isALive(): boolean {
        return this._isALive;
    }

    set isALive(value: boolean) {
        this._isALive = value;
    }

    sound(): void {
    }

}
