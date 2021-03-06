import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma img-container">
      <div className="absolute mt2 ">
        {imageUrl ? (
          <img
            id="inputImage"
            src={imageUrl}
            alt="Face to detect"
            width="400px"
            height="auto"
          />
        ) : (
          <p>Please enter a valid URL</p>
        )}

        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
