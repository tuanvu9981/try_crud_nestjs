import { ObjectId } from "mongoose";

export abstract class BaseDto {
    name: string;
    _id: string;

    constructor(_id: string, name: string){
        this.name = name;
        this._id = _id;
    }
}