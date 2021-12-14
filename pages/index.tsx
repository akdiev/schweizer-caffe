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

const Home: NextPage = () => {
  const topRef = useRef(null);
  const router = useRouter();
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  // async function getStaticProps(context = null) {
  //   profile = await getProfileData_One(context);
  // }

  console.log(router.route);

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

  let profile = {
    active_gallery: 208,
    address: "Slakterigatan 6-10, 721 32 Västerås",
    categories: [
      { id: 49, name: "Mexikanskt" },
      { id: 54, name: "Lunch" },
    ],
    city_id: 1,
    closed: false,
    custom_working_time: [
      {
        date: "2021-09-02",
        date_range: "2021-09-05",
        start: null,
        end: null,
        closed: 1,
      },
    ],
    description:
      "Vår restaurang hittar ni inne på Saluhallen Slakteriet. Här serverar vi allt från förrätter till desserter samt bland annat våra superpopulära tacos. Vi har fullständiga rättigheter.",
    email: "HEJ@MRMANGOSTREETFOOD.COM",
    facebook: "https://www.facebook.com/MrMangostreetfood/",
    featured: 1,
    id: 251,
    image: testImages,
    instagram: "https://www.instagram.com/mrmangostreetfood/",
    logo: "",
    lunch_time: [
      { day: 1, start: null, end: null, closed: 1 },
      { day: 2, start: null, end: null, closed: 1 },
    ],
    map_lat: "59.59192615426432",
    map_lon: "16.51395766115796",
    name: "Mr.Mango Saluhallen Slakteriet",
    package_can: [
      "menage gallery",
      "menage event",
      "menage lunch",
      "menage menu",
      "menage analytics social media",
    ],
    phone: "021-33 01 00",
    price_range: { id: 1, name: "Snabbt - $", description: null },
    public: 1,
    rating: 5,
    website: "caffeschweizer.com",
    with: null,

    working_time: {
      friday: [{ start: "8:00", end: "20:00", closed: false }],
      monday: [{ start: null, end: null, closed: true }],
      saturday: [{ start: "8:00", end: "16:00", closed: false }],
      sunday: [{ start: "8:00", end: "16:00", closed: false }],
      thursday: [{ start: "8:00", end: "18:00", closed: false }],
      tuesday: [{ start: "8:00", end: "14:00", closed: false }],
      wednesday: [{ start: "8:00", end: "14:00", closed: false }],
    },
  };

  const executeScroll = () => {
    topRef.current.scrollIntoView();
  };

  return (
    <div ref={topRef} className="fullpage">
      <Navbar
        openMenu={() => setMenuIsOpened(true)}
        scrollTo={(element) => scollToElement(element)}
      />
      <Element name="#home">
        <Hero profile={profile} />
      </Element>
      <Element name="#restaurant">
        <RestaurantEvents />
        <EventsGallery />
      </Element>

      <Element name="#about">
        <About images={testImages} />
      </Element>

      <History images={testImages} />
      <Element name="#gallery">
        <EventsGallery rows={1} />
      </Element>
      <ContactUs />

      <Footer isMobile={isMobile} scrollToTop={executeScroll} />

      <Menu menuIsOpened={menuIsOpened} />
    </div>
  );
};

export default Home;
