import React from "react";
import Imgix from "react-imgix";
import { makeSingleArray, setReviewPages } from "../../utils/helpers";
import Star from "../../public/images/icons/Star";
import Column from "../../assets/Bulma/Column";
import Columns from "../../assets/Bulma/Columns";

const History = ({ images }) => {
  const historyImages = [
    "images/history-first-image.jpg",
    "images/history-second-image.jpg",
    "images/history-third-image.jpg",
  ];
  const [currentActive, setCurrentActive] = React.useState(1);

  const reviewsPerPage = 3;

  const reviews: ReviewInterface[] = [
    {
      id: 0,
      rating: 5,
      title: "Perfect Breakfast!",
      text: "We came here for a quick breakfast and were surprised at how many people were sitting here at 10am on a weekday! There were a lot of tables, but they were mostly full. We had to squeeze in different tables. The staff recommended certain dishes, so we ordered them. The croissant was very flaky and just the right amount of bread to toppings.",
      author: {
        id: 0,
        name: "Wendy",
        lastName: "Peterson",
        image: "",
      },
    },
    {
      id: 1,
      rating: 5,
      title: "So good 😊",
      text: "Excellent place for fika! Located really close to the metro station 🚉 I enjoyed a mandelcroissant I ordered and a delicious coffee ☕️",
      author: {
        id: 1,
        name: "Wendy",
        lastName: "Peterson",
        image: "",
      },
    },
    {
      id: 2,
      rating: 5,
      title: "Finest food in a café",
      text: "Modern-healthy lunch dishes aside to traditional swedish sweet pastries. Wounderfull atmosphere, though croweded. It´s the perfect place of a chat with a good friend, but not for studying.",
      author: {
        id: 2,
        name: "Wendy",
        lastName: "Peterson",
        image: "",
      },
    },
    {
      id: 0,
      rating: 2,
      title: "Perfect Breakfast!",
      text: "We came here for a quick breakfast and were surprised at how many people were sitting here at 10am on a weekday! There were a lot of tables, but they were mostly full. We had to squeeze in different tables. The staff recommended certain dishes, so we ordered them. The croissant was very flaky and just the right amount of bread to toppings.",
      author: {
        id: 0,
        name: "Wendy",
        lastName: "Peterson",
        image: "",
      },
    },
    {
      id: 1,
      rating: 1,
      title: "So good 😊",
      text: "Excellent place for fika! Located really close to the metro station 🚉 I enjoyed a mandelcroissant I ordered and a delicious coffee ☕️",
      author: {
        id: 1,
        name: "Wendy",
        lastName: "Peterson",
        image: "",
      },
    },
    {
      id: 2,
      rating: 1,
      title: "Terrible",
      text: "Excellent place for fika! Located really close to the metro station 🚉 I enjoyed a mandelcroissant I ordered and a delicious coffee ☕️",
      author: {
        id: 2,
        name: "Wendy",
        lastName: "Peterson",
        image: "",
      },
    },
    {
      id: 2,
      rating: 1,
      title: "Terrible",
      text: "Excellent place for fika! Located really close to the metro station 🚉 I enjoyed a mandelcroissant I ordered and a delicious coffee ☕️",
      author: {
        id: 2,
        name: "Wendy",
        lastName: "Peterson",
        image: "",
      },
    },
  ];

  const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleClick = (e, pageNum) => {
    setCurrentActive(pageNum);
  };

  const pages = setReviewPages(totalReviewPages);

  const handleForward = () => {
    currentActive === totalReviewPages
      ? setCurrentActive(1)
      : setCurrentActive(currentActive + 1);
  };

  const handleBack = () => {
    currentActive === 1
      ? setCurrentActive(totalReviewPages)
      : setCurrentActive(currentActive - 1);
  };
  return (
    <div className="events-green-background">
      <div className="events-container container">
        <h1 className="event-header">Our History</h1>
        <p className="event-subheader">
          Enim volutpat velit molestie morbi pharetra nam nisi et.
        </p>
        <hr className="gold-line" />
        <div className="cards">
          <div className="history-card">
            <span className="yellow-circle"></span>
            <div className="columns columns-direction">
              <Column xl={6} xs={12}>
                <img className="mobile-img" src={historyImages[0]} />
              </Column>
              <Column xl={6} xs={12}>
                <div className="history-card-right-side">
                  <p className="history-card-headline">Opening</p>
                  <p className="history-card-year">1976</p>
                  <p className="history-card-text">
                    Café Schweiser opened and is a family tradition since the
                    1920s.
                  </p>
                </div>
              </Column>
            </div>
          </div>
          <div className="history-card">
            <span className="yellow-circle"></span>
            <div className="columns">
              <Column xl={6} xs={12}>
                <img className="mobile-img" src={historyImages[1]} />
              </Column>
              <Column xl={6} xs={12}>
                <div className="history-card-right-side">
                  <p className="history-card-headline">BEGINING YEARS</p>
                  <p className="history-card-year">1976-2011</p>
                  <p className="history-card-text">
                    Originally the café was a “Schweizeri (A coffee shop where
                    liqueur was served)” and was founded by Swiss immigrants
                    that came to Sweden in the late 1800s .
                  </p>
                </div>
              </Column>
            </div>
          </div>
          <div className="history-card last-card">
            <span className="yellow-circle"></span>
            <div className="columns">
              <Column xl={6} xs={12}>
                <img className="mobile-img" src={historyImages[2]} />
              </Column>
              <Column xl={6} xs={12}>
                <div className="history-card-right-side">
                  <p className="history-card-headline">present</p>
                  <p className="history-card-year">2011 - Present</p>
                  <p className="history-card-text">
                    Today Café Schweizer is still a family run company with
                    Indira Alikalific and her son, Dino Alikalific as owners.
                    With their passion and love for the profession they bring
                    the tradition to the next generation .
                  </p>
                </div>
              </Column>
            </div>
          </div>
        </div>
        <div className="container reviews">
          <Columns>
            {reviews
              .slice(
                (currentActive - 1) * reviewsPerPage,
                reviewsPerPage * currentActive
              )
              .map((singleReview, k) => (
                <ReviewCard
                  numberOfItems={
                    reviews.slice(
                      (currentActive - 1) * reviewsPerPage,
                      reviewsPerPage * currentActive
                    ).length
                  }
                  key={k}
                  review={singleReview}
                />
              ))}
          </Columns>
        </div>
        <div className="pagination">
          {totalReviewPages > 1 && (
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

interface ReviewInterface {
  id: number;
  rating?: number;
  title?: string;
  text?: string;
  author?: {
    id: number;
    name: string;
    lastName: string;
    image: string;
  };
}

const ReviewCard = ({ review, ...props }) => {
  const createStarArray = () => {
    let newArray = [];
    for (let index = 0; index < review.rating; index++) {
      newArray.push(<Star key={index} />);
    }
    return newArray;
  };
  return (
    <Column lg={4} xs={10}>
      <div className="review-card-container">
        <div className="rating">
          {createStarArray()}

          <p className="review-rating">{review.rating} </p>
        </div>
        <h1 className="review-title">{review.title} </h1>
        <hr className="short-bold-line" />

        <p className="review-text">{review.text}</p>
        <div className="author-box">
          <AuthorPicture url={review.author.image} />
          <div className="author-name">
            <h2 className="header-fullname">
              {review.author.name + " " + review.author.lastName}{" "}
            </h2>
            <p className="subheader-fullname">
              {review.author.name + " " + review.author.lastName}{" "}
            </p>
          </div>
        </div>
      </div>
    </Column>
  );
};

const AuthorPicture = ({ url, ...props }) => {
  return (
    <div className="author-picture-container">
      {url ? (
        <Imgix className="author-picture" src={url} width={56} height={56} />
      ) : (
        <Imgix
          className="author-picture"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          width={56}
          height={56}
        />
      )}
    </div>
  );
};

export default History;
