import React from 'react';
import { PDFObject } from 'react-pdfobject';
import { Link } from 'react-router-dom';

const Brochure = () => {
 
 return(   <div className="text-xl px-6 md:px-12 pt-10 h-screen">
     <p className="text-3xl"> 📜 brochure</p>
     <p>loved it? sponsor us by <Link style={{ color: 'gray', cursor: 'pointer' }} to="/sponsors">
         filling up the form here
     </Link></p>
     <br/>
     <PDFObject url="https://imabp.github.io/API_Hacks2/data/brochure_apihacks.pdf" height="100vh" width="100%"/>
        </div>
)}
export default Brochure;

