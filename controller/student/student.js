import { executeQuery } from "../../config/db";
const getAllStudents = async (req, res) => {
  try {
    let studentData = await executeQuery(
      `
        select * from students
        `,
      []
    );
    res.send(studentData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getStudentByEmail = async (req, res) => {
  let email = req.query.slug;
  try {
    let studentData = await executeQuery(
      `
      select password from students
      where email = ?
        `,
      [email]
    );
    res.send(studentData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createStudent = async (req, res) => {
  let email = req.query.email;
  let name = req.query.name;
  let password = req.query.password;
  let phone = req.query.phone;
  try {
    let studentData = await executeQuery(
      `
    insert into students(email, name, password, phone)
    values(?, ?, ?, ?)
    `,
      [email, name, password, phone]
    );
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
export { getAllStudents, getStudentByEmail, createStudent };
