import { getStudentByEmail } from "../../../../controller/student/student";
import nc from "next-connect";

const handler = nc();
handler.get(getStudentByEmail);
export default handler;
