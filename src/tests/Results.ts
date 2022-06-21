import mongoose from "mongoose";


class Result {
    id: mongoose.Types.ObjectId;
    rewardIds: mongoose.Types.ObjectId[]; // NO Reward founded
    star: number;
    userId: mongoose.Types.ObjectId; 
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
                _id: mongoose.Types.ObjectId;
                id: number; // dont know what for
                contentTime: number;
                learningTime: number;
                result: number;
            }
        >;
        // contains a list of theoryDone type (record history when students learn theories)
    }
}