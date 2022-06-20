import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

export abstract class BaseEntity {
    @Prop({type: mongoose.Schema.Types.ObjectId, auto: true})
    _id : ObjectId;

    @Prop({type: mongoose.Schema.Types.String, required: true})
    name: string;
}
