import Image from "next/image";
import { CheckCircle } from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="auth_sidebar pt-14 h-screen w-screen relative">
      <div className="w-4/5 mx-auto">
        <div>
          <img
            src="./img/logo/lil_logo.png"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="sidebar_text">
          <h2 className="text-white text-3xl font-bold mb-8">Lorem, ipsum.</h2>
          <ul>
            <li className="mb-2">
              <CheckCircle className="mr-4 sidebar_icon" />
              <span className='text-white'>Lorem, ipsum dolor.</span>
            </li>
            <li className="mb-2">
              <CheckCircle className="mr-4 sidebar_icon" />
              <span className='text-white'>Lorem ipsum dolor sit.</span>
            </li>
            <li className="mb-2">
              <CheckCircle className="mr-4 sidebar_icon" />
              <span className='text-white'>Lorem ipsum dolor sit.</span>
            </li>
            <li className="mb-2">
              <CheckCircle className="mr-4 sidebar_icon" />
              <span className='text-white'>Lorem, ipsum dolor.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
