// import { ObjectId } from "mongoose";


// /* ************** BLUEPRINT ************** */
// class Department {
//     departmentName: string;
//     headquater: string;
//     departmentEmail: string;
//     subjects: Array<ObjectId>;
// }

// class Subject {
//     name: string;
//     createdDate?: Date;
//     departmentId: ObjectId;
// }

// /* ************** EXAMPLE ************** */
// const CIntro: Subject = {
//     // _id : ObjectId("123")
//     name: "C Introduction",
//     createdDate: new Date("2010-08-24"),
//     departmentId: ObjectId("1234567890")
// }

// const OOP: Subject = {
//     // _id : ObjectId("456")
//     name: "Object-oriented Programming",
//     createdDate: new Date("2009-07-25"),
//     departmentId: ObjectId("123456789")
// }

// const soict: Department = {
//     // _id : ObjectId("1234567890"),
//     departmentName: "School of Information & Communication Techonology",
//     headquater: "HUST B1",
//     departmentEmail: "vp@soict.vn",
//     subjects: [
//         ObjectId("123"),
//         ObjectId("456"),
//     ]
// }

// /* ************** CASE STUDY ************** */

// const WebProg: Subject = {
//     // _id : ObjectId("789")
//     name: "Web Programming",
//     createdDate: new Date("2009-02-25"),
//     departmentId: ObjectId("123456789")
// }

// soict.subjects.push(WebProg.departmentId);                
