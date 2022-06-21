import mongoose from "mongoose";


class Users {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string; //regex, containing @
    password: string; //hashed
    age: number;
    systemLanguage: string;
    bio: string; // Hoc sinh lop ..., truong ..., TP. ...
    birthday: Date;
    phone: string; // regex
    gender: string;
    avatarUrl: string;
    status: string; // online | offline ?
    resultId: mongoose.Types.ObjectId; //Ref: Result

    // role: number | string; 
    // salt: string; 
}


/*  
                    Already confirmed

    1. User of Learning: ONLY STUDENTs --> role: UNNECESSARY
    2. salt --> OMIT
*/

/*
                    Need asking
    1. guest: boolean ?
    2. learningPath ?
*/

