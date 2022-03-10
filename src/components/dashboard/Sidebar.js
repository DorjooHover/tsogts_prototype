import Link from "next/link";
import {
  Dashboard,
  Settings,
  Person,
  School,
  LocalLibrary,
} from "@mui/icons-material";
import Image from "next/image";
export default function Sidebar() {
  return (
    <div className="flex-1 h-screen pt-8 w-4/5 mx-auto">
      <div className="w-full">
        <img src="/img/logo/lil_logo.png" alt="" width={100} height={100} />
        {/* <Image src='/img/logo/lil_logo.png' alt="" width={100} height={100} /> */}
      </div>
      <ul className="my-20 relative">
        <li className="mb-4">
          <Link href="/dashboard">
            <a className="text-gray-400">
              <Dashboard className="mr-4" />
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard/student">
            <a className="text-gray-400">
              <Person className="mr-4" />
              <span>Сурагчид</span>
            </a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard/teacher">
            <a className="text-gray-400">
              <School className="mr-4" />
              <span>Багш нар</span>
            </a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard/lesson">
            <a className="text-gray-400">
              <LocalLibrary className="mr-4" />
              <span>Хичээл</span>
            </a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/dashboard/setting">
            <a className="text-gray-400">
              <Settings className="mr-4" />
              <span>Тохиргоо</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
