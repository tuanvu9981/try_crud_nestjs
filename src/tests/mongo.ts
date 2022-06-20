import { Date, ObjectId } from "mongoose";

class Users {
    id: ObjectId;
    name: string;
    email: string; //regex, containing @
    password: string; //hashed
    role: number | string; //
    systemLanguage: string;
    resultId: ObjectId; //Ref: Result
    bio: string; // Hoc sinh lop ..., truong ..., TP. ...
    birthday: Date;
    phone: string; // regex
    gender: string;
    avatarUrl: string;
    status: string; // online | offline ?
    salt: string; // --> omit
}

class Result {
    id: ObjectId;
    rewardIds: Array<ObjectId>; // NO Reward founded
    star: number;
    userId: ObjectId; // Why save here ?
    progressIndex: {
        currentCategoryIndex: number;
        currentTopicIndex: number;
        currentSubTopicIndex: number;
        currentLearningPointIndex: number;
    };
    progress: {
        // categoriesDone: Array<>;
        // unitsDone: Array<>;
        // testsDone: Array<>;
        // topicsDone: Array<>;
        // quizzesDone: Array<>;
        theoriesDone: Array<
            {
                _id: ObjectId;
                id: number; // dont know what for
                contentTime: number;
                learningTime: number;
                result: number;
            }
        >;
        // contains a list of theoryDone type (record history when students learn theories)
    }
}

class Categories {
    id: ObjectId;
    title: string;
    imageUrl: string; // regex 
    description: string;
    topicids: Array<ObjectId>; // Ref: Topics
    status: string; // ONLY CMS cares, Learning dont
    rewardId: ObjectId; // Where to reference ?
    scope: {
        checkLogin: "",
        scopeType: "PUBLIC",
        trialStudy: "",
        trialUnitNum: 0,
    }; // WHAT is SCOPE ? --> Ai co the vao xem nhu the nao 
}


class Units {
    id: ObjectId;
    title: string;
    imageUrl: string; //regex
    thumbnailImageUrl: string;
    star: number;
    overviewId: ObjectId;
    learningPoints: Array<
        {
            id: ObjectId;
            type: string; // {"theory", "quiz", "checkpoint"}

            // contain 1 of 3 below
            theoryId: number; 
            quizId: number; 
            checkpointId: number;
        }
    >;
    recentlyLive: number; // Unknown
}

class Tests {

}

class Topics {
    id: ObjectId;
    title: string;
    imageUrl: string; //regex
    subTopics: Array<ObjectId> // ObjectId of Units & Tests 
}