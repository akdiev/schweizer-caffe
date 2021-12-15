import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // const recaptchaRef = React.createRef();

  const handleChange = (e) => {
    const fieldName = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // recaptchaRef.current.execute();

    // sendMail(data)
    //   .then((res) => {
    //     alert("Mail successfully sent.");
    //     setData({
    //       name: "",
    //       email: "",
    //       subject: "",
    //       message: "",
    //     });
    //   })
    //   .catch((err) => {
    //     alert("An error occured. Please, try again.");
    //   });
  };

  // const onReCAPTCHAChange = async (captchaCode) => {
  //   if (!captchaCode) {
  //     return;
  //   }

  //   try {
  //     const response = await axios().post("/api/send-mail", {
  //       body: JSON.stringify({
  //         name: data.name,
  //         email: data.email,
  //         subject: data.subject,
  //         message: data.message,
  //         captcha: captchaCode,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       alert("Email sent successfully!");
  //     } else {
  //       const error = await response.json();
  //       throw new Error(error.message);
  //     }
  //   } catch (error) {
  //     alert(error?.message || "Something went wrong");
  //   } finally {
  //     recaptchaRef.current.reset();
  //     setData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   }
  // };

  return (
    <div className="contact-us-form">
      <form onSubmit={handleSubmit}>
        {/* <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        /> */}
        <input
          name="name"
          className="input mb-5"
          type="text"
          placeholder="Full Name"
          required
          value={data.name}
          onChange={handleChange}
        ></input>
        <input
          name="email"
          className="input mb-5"
          type="email"
          placeholder="Email Address"
          required
          value={data.email}
          onChange={handleChange}
        ></input>
        <input
          name="subject"
          className="input mb-5"
          type="text"
          placeholder="Subject"
          required
          value={data.subject}
          onChange={handleChange}
        ></input>
        <textarea
          name="message"
          className="textarea mb-5"
          placeholder="Message"
          required
          value={data.message}
          onChange={handleChange}
        ></textarea>
        <button className="menu-button full-width button-center">
          SUBMIT MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
