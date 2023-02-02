import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* ======================= List Items Start here ======================== */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="flex items-center gap-1 headerHover"
        >
          <MenuIcon />
          All
        </li>
        <li className="hidden md:inline-flex headerHover">Today's Deals</li>
        <li className="hidden md:inline-flex headerHover">Customer Service</li>
        <li className="hidden md:inline-flex headerHover">Gift Cards</li>
        <li className="hidden md:inline-flex headerHover">Registry</li>
        <li className="hidden md:inline-flex headerHover">Sell</li>
      </ul>
      {/* ======================= List Items End here ========================== */}
      {/* ======================= SideBar Start here =========================== */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[290px] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {userInfo ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={userInfo.image}
                    alt="UserImg"
                  />
                ) : (
                  <AccountCircleIcon />
                )}
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              {/* ============================ Content & Devices Start here ================ */}
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              {/* ============================ Content & Devices End here ================ */}
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ======================= SideBar End here ============================= */}
      {/* ============ ListItems Start here ============ */}
      {/* ============ ListItems End here ============== */}
      {/* ============ sideNav Start here ============== */}
      {/* ============ sideNav End here ================ */}
    </div>
  );
};

export default HeaderBottom;
