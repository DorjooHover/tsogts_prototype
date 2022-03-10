import nc from "next-connect";
import {
  getAllStudents,
  createStudent,
} from "../../../controller/student/student";

const handler = nc();
handler.get(getAllStudents);
handler.post(createStudent);

export default handler;
