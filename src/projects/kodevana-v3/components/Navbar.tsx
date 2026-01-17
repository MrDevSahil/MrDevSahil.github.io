import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-28 pt-52 bg-[#111111] h-screen flex flex-col gap-40 absolute top-0 left-0 z-50 font-sans">
      <Link
        to="/projects/kodevana-v3"
        className="text-4xl font-semibold rotate-[-90deg]"
      >
        KODEVANA
      </Link>
      <nav className="h-full font-Josh">
        <ul className="flex flex-col h-full justify-evenly gap-3">
          <Link to="#">
            <li className="h-fit text-xl rotate-[-90deg] text-center">
              CONTACTS
            </li>
          </Link>
          <Link to="#">
            <li className="h-fit mt-6 text-xl rotate-[-90deg] text-center">
              SERVICES
            </li>
          </Link>
          <Link to="#">
            <li className="h-fit mt-2 text-xl rotate-[-90deg] text-center">
              WORKS
            </li>
          </Link>
          <Link to="#">
            <li className="h-fit text-xl rotate-[-90deg] text-center">ABOUT</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
