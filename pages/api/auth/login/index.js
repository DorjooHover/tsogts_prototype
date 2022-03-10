import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { email, password, pass } = req.body;
  console.log(pass);
  if (pass !== "" && password === pass) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        username: email,
      },
      secret
    );
    const serialized = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("SetCookie", serialized);
    res.status(200).json({ message: "success" });
  } else {
    res.json({ message: "Нэвтрэх нэр эсвэл нууц үг буруу байна." });
  }
}
