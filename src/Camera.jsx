import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = ({setImage, image}) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Tomar Foto</button>
      {image && <img src={image} alt="Foto Capturada" />}
    </>
  );
};

export default Camera;
