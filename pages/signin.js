import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Sidebar from "../src/components/auth/Sidebar";
import Navbar from "../src/components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
// import Layout from "../src/components/dashboard/Layout";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState();
  const router = useRouter();
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const loadEmail = async () => {
    let data = axios
      .get(`/api/auth/login/${email}`, {})
      .then((res) =>
        res.data[0] !== undefined
          ? setPass(res.data[0].password)
          : setPass(null)
      );
    console.log(pass, email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    loadEmail();
    const credentials = { email, password, pass };

    const user = await axios.post("/api/auth/login", credentials);
    if (user.data.message === "success") {
      setUser(user.data.message);
      setError("Амжилттай нэвтэрлээ.");
    } else {
      setUser("");
      setError("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };
  const handleGetUser = async () => {
    const user = await axios.get("/api/user");
  };
  const handleLogout = async () => {
    const user = await axios.get("/api/auth/logout");
    setUser();
    setError("Амжилттай гарлаа");
  };
  if (user !== "") {
    router.push("/student");
  }
  return (
    <>
      {!user && (
        <div className="flex relative">
          <Sidebar />
          <div className="auth w-1/3">
            <Navbar data="login" />
            <div className="sign">
              {error && (
                <Alert variant="outlined" severity="info" className="mb-10">
                  {error}
                </Alert>
              )}
              <form action="" onSubmit={handleSubmit}>
                <h2 className="font-bold text-4xl mb-6">Нэвтрэх</h2>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-gray-200 px-3 py-2 border-solid border mb-4"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full rounded-md border-gray-200 px-3 py-2 border-solid border mb-4"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full rounded-md px-3 font-semibold py-3 bg text-white mb-4">
                  Нэвтрэх
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {user && (
        <div className="auth">
          {error && (
            <Alert variant="outlined" severity="success">
              {error}
            </Alert>
          )}
          <button onClick={() => handleGetUser()}>User</button>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      )}
    </>
  );
}
