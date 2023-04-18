import React, { useState } from 'react';
import Camera from './Camera';
import OCR from './OCR';

const App = () => {
  const [image, setImage] = useState(null);

  // console.log(image);
  return (
    <>
      <Camera setImage={setImage} image={image} />
      {image && <OCR image={image} />}
    </>
  );
};

export default App;