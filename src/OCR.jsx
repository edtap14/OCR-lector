import React, { useState,useCallback } from 'react';
import { createWorker } from 'tesseract.js';

const OCR = ({ image }) => {
  const [text, setText] = useState(null);
  const worker = createWorker();

//   console.log('ocr: ', image);

// const recognizeText = async () => {
    
//     const { data } = await Tesseract.recognize(image,'spa',{
//         psm:10,
//         tessjs_create_hocr: '0',
//         // rect: {
//         //     left: 100,
//         //     top: 100,
//         //     width: 400,
//         //     height: 200
//         //   }
//     });
//     console.log(data);
//   };
const convertImageToText = useCallback(async () => {
    if(!image) return;
    await worker.load();
    await worker.loadLanguage("spa");
    await worker.initialize("spa");
    const { data } = await worker.recognize(image, {
        tessjs_create_hocr: '0',
        psm: 10 
    });
    console.log(data);
  }, [worker, image]);

  //console.log(text)

  return (
    <>
      <button onClick={convertImageToText}>Escanear Texto</button>
      {text && <pre>{text}</pre>}
    </>
  );
};

export default OCR;


// import React, {useState, useEffect} from 'react'
// import { createWorker } from 'tesseract.js' 

// const OCR = ({image}) => {

//     const worker = createWorker({
//         logger: m => console.log(m),
//       });
//       const doOCR = async () => {
//         await worker.load();
//         await worker.loadLanguage('eng');
//         await worker.initialize('eng');
//         const { data: { text } } = await worker.recognize(image);
//         setOcr(text);
//       };
//       const [ocr, setOcr] = useState('Recognizing...');
//       useEffect(() => {
//         doOCR();
//       });
//       return (
//         <div className="App">
//           <p>{ocr}</p>
//         </div>
//       );
// }

// export default OCR
