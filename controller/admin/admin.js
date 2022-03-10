import { executeQuery } from "../../config/db";

const getAllAdmins = async (req, res) => {
  try {
    let dataAdmin = await executeQuery(
      `
        select * from admin
        `,
      []
    );
    res.send(dataAdmin);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createAdmin = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  try {
    let dataAdmin = await executeQuery(
      `
        insert into admin(email, name, password)
        values(?, ?, ?)
        `,
      [email, username, password]
    );
    res.send({ data: dataAdmin, message: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export { getAllAdmins, createAdmin };
