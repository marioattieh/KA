import React, { useEffect, useState } from "react";
import "./Home.css";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const location = useLocation().pathname;
  const loc = useLocation();
  const [scroll, setScroll] = useState(true);
  const [float, setfloat] = useState(true);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState(true);
  const slideIn = { animation: "slide-in 300ms forwards" };
  const slideOut = { animation: "slide-out 300ms forwards" };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      const floatCheck = window.scrollY < 600;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
      if (floatCheck !== float) {
        setfloat(floatCheck);
      }
    });
  });
  function toggleSidebar() {
    setOpen((prev) => !prev);
    setFirst(false);
  }
  return (
    <div className="container-home">
      <div className={scroll ? "top-home" : "top-home-active"}>
        <div className="menu-home">
          <svg
            width="31"
            height="20"
            viewBox="0 0 31 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => toggleSidebar()}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2C0 0.895431 0.895431 0 2 0H29C30.1046 0 31 0.895431 31 2C31 3.10457 30.1046 4 29 4H2C0.895431 4 0 3.10457 0 2Z"
              fill="#212121"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 8.89543 0.895431 8 2 8H29C30.1046 8 31 8.89543 31 10C31 11.1046 30.1046 12 29 12H2C0.895431 12 0 11.1046 0 10Z"
              fill="#212121"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 18C0 16.8954 0.895431 16 2 16H29C30.1046 16 31 16.8954 31 18C31 19.1046 30.1046 20 29 20H2C0.895431 20 0 19.1046 0 18Z"
              fill="#212121"
            />
          </svg>
        </div>
        <h2>Koullouna Ahel</h2>
      </div>
      <div
        className={float ? "float-home" : "float-home-active"}
        onClick={() =>
          window.scrollTo({
            top: 400,
            behavior: "smooth",
          })
        }
      >
        ^
      </div>
      {first ? null : (
        <div style={open ? slideOut : slideIn} className="sidebar-home">
          <div className="menu-sidebar-home">
            <h2>Dashboard</h2>
            <svg
              width="31"
              height="20"
              viewBox="0 0 31 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => toggleSidebar()}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2C0 0.895431 0.895431 0 2 0H29C30.1046 0 31 0.895431 31 2C31 3.10457 30.1046 4 29 4H2C0.895431 4 0 3.10457 0 2Z"
                fill="#212121"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10C0 8.89543 0.895431 8 2 8H29C30.1046 8 31 8.89543 31 10C31 11.1046 30.1046 12 29 12H2C0.895431 12 0 11.1046 0 10Z"
                fill="#212121"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 18C0 16.8954 0.895431 16 2 16H29C30.1046 16 31 16.8954 31 18C31 19.1046 30.1046 20 29 20H2C0.895431 20 0 19.1046 0 18Z"
                fill="#212121"
              />
            </svg>
          </div>
          <Link
            onClick={() => toggleSidebar()}
            to="/"
            className={location === "/" ? "sel-side-link" : "side-link"}
          >
            About Us
          </Link>
          <Link
            onClick={() => toggleSidebar()}
            to="/projects"
            className={location === "/projects" ? "sel-side-link" : "side-link"}
          >
            Projects
          </Link>
          <Link
            onClick={() => toggleSidebar()}
            to="/media"
            className={location === "/media" ? "sel-side-link" : "side-link"}
          >
            Media
          </Link>
          <Link
            onClick={() => toggleSidebar()}
            to="/hse"
            className={location === "/hse" ? "sel-side-link" : "side-link"}
          >
            HSE
          </Link>
          <Link
            onClick={() => toggleSidebar()}
            to="/sponsors"
            className={location === "/sponsors" ? "sel-side-link" : "side-link"}
          >
            Sponsors
          </Link>
        </div>
      )}
      <header className="header-home"></header>
      <section className="links-home">
        <Link to="/" className={location === "/" ? "link-sel" : "link"}>
          About Us
        </Link>
        <Link
          to="/projects"
          className={location === "/projects" ? "link-sel" : "link"}
        >
          Projects
        </Link>
        <Link
          to="/media"
          className={location === "/media" ? "link-sel" : "link"}
        >
          Media
        </Link>
        <Link to="/hse" className={location === "/hse" ? "link-sel" : "link"}>
          HSE
        </Link>
        <Link
          to="/sponsors"
          className={location === "/sponsors" ? "link-sel" : "link"}
        >
          Sponsors
        </Link>
      </section>
      <div className="body-home">
        <AnimatePresence exitBeforeEnter>
          <Switch location={loc} key={location}>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/media" component={About} />
            <Route path="/hse" component={About} />
            <Route path="/sponsors" component={About} />
          </Switch>
        </AnimatePresence>
      </div>
      <div className="footer-home">
        <div className="left-foot">
          <h1>Contact Us</h1>
          <div>
            <h2>Email:&nbsp;</h2>
            <Link
              className="email-link"
              to="#"
              onClick={(e) => {
                window.location = "mailto:info@koullounaahel.com";
                e.preventDefault();
              }}
            >
              info@koullounaahel.com
            </Link>
          </div>
          <div>
            <h2>Phone:&nbsp;</h2>
            <Link
              className="email-link"
              to="#"
              onClick={(e) => {
                window.location = "tel:+96170466721";
                e.preventDefault();
              }}
            >
              +96170466721
            </Link>
          </div>
        </div>
        <div className="right-foot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="000000"
            onClick={(e) => {
              const newWindow = window.open(
                "https://www.facebook.com/%D9%83%D9%84%D9%86%D8%A7-%D8%A3%D9%87%D9%84-107222204738776/",
                "_blank",
                "noopener,noreferrer"
              );
              if (newWindow) newWindow.opener = null;
              e.preventDefault();
            }}
          >
            <linearGradient
              id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
              x1="9.993"
              x2="40.615"
              y1="9.993"
              y2="40.615"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2aa4f4"></stop>
              <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
            ></path>
            <path
              fill="#fff"
              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="#000000"
            onClick={(e) => {
              const newWindow = window.open(
                "https://www.youtube.com/channel/UCuRcopB5bdTEUPfXpPZ67Dg",
                "_blank",
                "noopener,noreferrer"
              );
              if (newWindow) newWindow.opener = null;
              e.preventDefault();
            }}
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
