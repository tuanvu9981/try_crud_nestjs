import mongoose, { Date } from "mongoose";

class Result {
    id:mongoose.Types.ObjectId;
    rewardIds: Array<ObjectId>; // NO Reward founded
    star: number;
    userId:mongoose.Types.ObjectId; // Why save here ?
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
                _id:mongoose.Types.ObjectId;
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
    id:mongoose.Types.ObjectId;
    title: string;
    imageUrl: string; // regex 
    description: string;
    topicids: Array<mongoose.Types.ObjectId>; // Ref: Topics
    status: string; // ONLY CMS cares, Learning dont
    rewardId:mongoose.Types.ObjectId; // Where to reference ?
    scope: {
        checkLogin: "",
        scopeType: "PUBLIC",
        trialStudy: "",
        trialUnitNum: 0,
    }; // WHAT is SCOPE ? --> Ai co the vao xem nhu the nao 
}


class Units {
    id:mongoose.Types.ObjectId;
    title: string;
    imageUrl: string; //regex
    thumbnailImageUrl: string;
    star: number;
    overviewId:mongoose.Types.ObjectId;
    learningPoints: Array<
        {
            id:mongoose.Types.ObjectId;
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
    id:mongoose.Types.ObjectId;
    title: string;
    imageUrl: string; //regex
    subTopics: Array<ObjectId> //mongoose.Types.ObjectId of Units & Tests 
}