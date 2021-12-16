import React from "react";
import { useRouter } from "next/dist/client/router";
import { setEventPages } from "../../utils/helpers";
import Columns from "../../assets/Bulma/Columns";
import Column from "../../assets/Bulma/Column";

interface EventCard {
  id: number;
  image?: string;
  title?: string;
  eventTime?: string;
  description?: string;
  menuUrl?: string;
  lasMer?: boolean;
}

const RestaurantEvents = () => {
  const [currentActive, setCurrentActive] = React.useState(1);

  const eventsPerPage = 4;

  const handleForward = () => {
    currentActive === totalEventPages
      ? setCurrentActive(1)
      : setCurrentActive(currentActive + 1);
  };

  const handleBack = () => {
    currentActive === 1
      ? setCurrentActive(totalEventPages)
      : setCurrentActive(currentActive - 1);
  };

  const currentRestaurantEvents: EventCard[] = [
    {
      id: 0,
      image: "images/eventimage1.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 1,
      image: "images/eventimage2.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 2,
      image: "images/eventimage3.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
      lasMer: true,
    },
    {
      id: 3,
      image: "",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 4,
      image: "images/eventimage2.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 5,
      image: "images/eventimage2.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 6,
      image: "images/eventimage2.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 7,
      image: "images/eventimage3.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 8,
      image: "images/eventimage3.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 9,
      image: "images/eventimage3.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 10,
      image: "images/about-us-gallery1.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
    {
      id: 11,
      image: "images/about-us-gallery1.jpg",
      title: "Libero commodo arcu elementum eget pharetra.",
      eventTime: "Varje tisdag | 15:00 - 20:00",
      description:
        "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
      menuUrl: "test",
    },
  ];

  const totalEventPages = Math.ceil(
    currentRestaurantEvents.length / eventsPerPage
  );
  const pages = setEventPages(totalEventPages);

  const handleClick = (e, pageNum) => {
    setCurrentActive(pageNum);
  };

  return (
    <div className="events-green-background">
      <div className="container events-container ">
        <h1 className="event-header">Events</h1>
        <p className="event-subheader">
          Enim volutpat velit molestie morbi pharetra nam nisi et.
        </p>

        <hr className="gold-line" />
        <div className="events container">
          <Columns>
            {currentRestaurantEvents
              .slice(
                (currentActive - 1) * eventsPerPage,
                eventsPerPage * currentActive
              )
              .map((event, key) => (
                <EventMenuCard key={key} content={event} />
              ))}
          </Columns>
        </div>
        <div className="pagination">
          {totalEventPages > 1 && (
            <>
              {" "}
              <span
                onClick={() => handleBack()}
                className="pagination-back is-clickable"
              >
                <img src="/images/icons/icons/circle-left.png" alt="Go back" />
              </span>
              {pages.map((page, key) => (
                <span
                  key={key}
                  onClick={(e) => handleClick(e, page)}
                  className={`pagination-dot ${
                    currentActive === page && "active-page"
                  }`}
                ></span>
              ))}
              <span
                onClick={() => handleForward()}
                className="pagination-forward is-clickable"
              >
                <img
                  src="/images/icons/icons/circle-right.png"
                  alt="Go forward"
                />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const EventMenuCard = ({ content, ...props }) => {
  const router = useRouter();
  return (
    <Column md={3} lg={3} xs={11}>
      <div className="event-card-container">
        {content.image ? <img alt="food" src={content.image}></img> : ""}

        <div>
          <div className="title-event-time-container">
            <h1 className="title">{content.title}</h1>
            <h2 className="event-time">{content.eventTime}</h2>
          </div>
          <div>
            <div className="description-and-menu-button">
              <p className="description">{content.description}</p>
              {!content.lasMer ? (
                <button
                  className="menu-button margin-bot-28 full-width"
                  onClick={() => router.push(content.menuUrl)}
                >
                  VISA MENY
                </button>
              ) : (
                <div className="event-buttons margin-bot-28 full-width">
                  <button className="lasmer-button">LAS MER</button>
                  <button
                    className="menu-button"
                    onClick={() => router.push(content.menuUrl)}
                  >
                    VISA MENY
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Column>
  );
};

export default RestaurantEvents;
