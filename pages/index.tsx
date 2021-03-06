import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useRef, useState } from "react";
import About from "../components/about/about";
import RestaurantEvents from "../components/events/events";
import Footer from "../components/footer/footer";
import Hero from "../components/Hero/hero";
import Navbar from "../components/navbar/navbar";
import History from "../components/history/history";
import { Element, animateScroll as scroll, scroller } from "react-scroll";

import { useMediaQuery } from "react-responsive";

import ContactUs from "../components/contact/contactUs";
import EventsGallery from "../components/events/eventsGallery";
import Menu from "../components/menu/menu";
import axios from "axios";
import SingleEventView from "../components/singleEventView/singleEventView";
import { IoMdArrowDropup } from "react-icons/io";

function Home({ data, menus }) {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [singleEventModalContent, setSingleEventModalContent] = useState(null);
  const [showBackToTopIcon, setShowBackToTopIcon] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  let profile = data;
  function scollToElement(element) {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  const testImages = [
    [
      "https://images.unsplash.com/photo-1635942185703-65cbbedb555a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1636054353270-2d4aeb276b68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1636063174502-fa645e66a452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1635939364889-324dbe6d9cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1636059031573-ad0aecbf4e5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    ],
  ];

  const showHideScrollToTop = () => {
    let yOffset = window.pageYOffset;
    yOffset > 249 ? setShowBackToTopIcon(true) : setShowBackToTopIcon(false);
  };

  useEffect(() => {
    if (menuIsOpened || singleEventModalContent) {
      document.querySelector("html").classList.add("is-clipped");
    }
    return () => {
      document.querySelector("html").classList.remove("is-clipped");
    };
  }, [menuIsOpened, singleEventModalContent]);

  useEffect(() => {
    window.addEventListener("scroll", showHideScrollToTop);
  }, []);

  return (
    <div>
      <Element name="#navbar">
        <Navbar
          openMenu={setMenuIsOpened}
          profile={profile}
          scrollTo={(element) => scollToElement(element)}
        />
      </Element>
      <Element className="background-margin" name="#home">
        <Hero profile={profile} />
      </Element>
      {showBackToTopIcon && (
        <span
          className="scroll-to-top"
          onClick={() => scollToElement("#navbar")}
        >
          <IoMdArrowDropup className="arrow-up-icon" />
        </span>
      )}
      <Element name="#restaurant">
        <RestaurantEvents
          readMoreModal={(eventObject) =>
            setSingleEventModalContent(eventObject)
          }
        />
        <EventsGallery />
      </Element>

      <Element name="#about">
        <About images={testImages} openMenu={setMenuIsOpened} />
      </Element>

      <History images={testImages} />
      <Element name="#gallery">
        <EventsGallery rows={1} />
      </Element>
      <ContactUs profile={profile} />

      <Footer profile={profile} isMobile={isMobile} />
      {singleEventModalContent && (
        <SingleEventView
          closeModal={() => setSingleEventModalContent(null)}
          content={singleEventModalContent}
        />
      )}

      {menuIsOpened && (
        <Menu closeModal={() => setMenuIsOpened(false)} menus={menus} />
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  let {
    data: { data },
  } = await axios("https://login.guestie.se/api/profiles/330/", context);

  let menus = await axios(
    "https://login.guestie.se/api/profiles/330/menus",
    context
  );
  menus = menus.data;

  return { props: { data, menus } };
}

export default Home;
