// import React from 'react'
// import PayPal from './PayPal';
// import { useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import PayPalBlog from './PayPalBlog';
// import PayPalCommerce from './PayPalCommerce';
// import PayPalHub from './PayPalHub';
// import PayPalMembership from './PayPalMembership';
// import "../styles/PurchaseScreen.css";

// const PurchaseScreen = () => {
//     const item = useParams().item;

//     useEffect(() => {
//         const source = document.querySelector(".paypal");
//         try{
//             source.removeChild(source.childNodes[1]);
//         }catch(err){
//             console.log(err);
//         }
//     });
//   return (
//     <div className='purchase-screen'>
//         <h1>Purchasing: {item}</h1>
//         {item === "landing" ? <PayPal/> :
//         item === "blog" ? <PayPalBlog/> :
//         item === "ecommerce" ? <PayPalCommerce/> :
//         item === "hub" ? <PayPalHub/> :
//         item === "membership" ? <PayPalMembership/> :
//         null} 
//     </div>
//   )
// }

// export default PurchaseScreen