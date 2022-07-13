import React from 'react'
import {BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <span style={{textAlign: "center", padding: ".5em 0"}}>Ready to grow your business? <br/>Let's connect</span>
        <div style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "2em",
        }}>
        <span style={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content"
        }}>
          <BsTwitter color="gold"/>
          <a href="https://twitter.com/kamo_io" target="_blank" rel="noreferrer">Twitter</a>
        </span>
        <span style={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content"
        }}>
          <FiMail color="gold"/>
          <a href="mailto:hellokamo04@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </span>
        </div>
    </footer>
  )
}

export default Footer