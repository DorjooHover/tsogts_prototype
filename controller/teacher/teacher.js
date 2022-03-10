import { executeQuery } from "../../config/db";
const getAllStudents = async (req, res) => {
  try {
    let studentData = await executeQuery(`
        select * from students
        `);
    res.send(studentData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getAllStudents };
