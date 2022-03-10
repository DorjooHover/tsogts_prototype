import { getAllAdmins } from "../../../controller/admin/admin";
import nc from 'next-connect'

const handler = nc()
handler.get(getAllAdmins)

export default handler