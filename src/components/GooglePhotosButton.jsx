import React from "react";
import "./GooglePhotosButton.css";
import googlePhotosIcon from "../assets/tech/googlephoto.png"; // ✅ use your file

const GooglePhotosButton = () => {
  const googlePhotosLink = "https://photos.app.goo.gl/6FYkFXnT61RqR8t7A";

  return (
    <button
      className="google-photos-btn"
      onClick={() => window.open(googlePhotosLink, "_blank")}
    >
      <img src={googlePhotosIcon} alt="Google Photos" />
    </button>
  );
};

export default GooglePhotosButton;