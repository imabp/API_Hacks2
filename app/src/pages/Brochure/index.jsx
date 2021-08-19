import React from 'react';
import { PDFObject } from 'react-pdfobject';

const Brochure = () => {
 console.log('Brochure');   
 return(   <div className="text-xl px-6 md:px-12 pt-10 h-screen">
     <PDFObject url="https://imabp.github.io/API_Hacks2/data/brochure_apihacks.pdf" height="100vh" width="100%"/>
        </div>
)}
export default Brochure;