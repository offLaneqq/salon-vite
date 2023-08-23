import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  // window.addEventListener("scroll", function() {
  //   const header = this.document.querySelector(".header")
  //   header.classList.toggle("active", this.window.screenY > 200)
  // })

  return (
    <>
      <header className="bg-amber-500 py-2 fixed w-full">
        <div className="flex justify-center mx-6">
          <div className="cursor-pointer">
            <img
              src="./src/assets/atom.png"
              className="w-10"
              onClick={() => setNavbar(!navbar)}
            />
          </div>
          {navbar ? (
            <div className="text-2xl flex">
              <ul className="flex mx-9 gap-9">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <SearchOutlinedIcon />
                  {/* <WorkIcon />
                <GridViewIcon /> */}
                </li>
              </ul>
            </div>
          ) : null}
          <div className="flex gap-10 justify-end fixed right-16 top-3 text-3xl">
            <i className="fab fa-facebook-f facebook text-blue-700 hover:text-white hover:bg-blue-700 w-9 h-9 rounded-full pl-2 pt-1" />
            <i className="fab fa-instagram instagram" />
            <i className="fab fa-twitter twitter" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;