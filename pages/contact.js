import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
{
  /* <head>
  <style>

  </style>
</head>; */
}
const Contact = () => {
  return (
    <>
      <Navbar />
      {/* <h1 style={{ color: "green" }}>Hello World my contact </h1> */}
      <h1>Hello World my contact </h1>
      <p className="intro">subscribe to my chanle </p>

      <style jsx>
        {`
          h1 {
            color: pink;
          }

          .intro {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
