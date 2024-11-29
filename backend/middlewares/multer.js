import multer from "multer";

const storage = multer.memoryStorage();
export const singleUpload = multer({storage}).single("file");
// //In single where we wrote file. The name should be same as the input tag that we used to upload the file.
// //Provide this single upload to every route where we need to get a file upload functionality. 