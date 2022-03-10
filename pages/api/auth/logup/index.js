import nc from "next-connect";
import { createAdmin } from "../../../controller/admin/admin";

const handler = nc();
handler.post(createAdmin);

export default handler;
