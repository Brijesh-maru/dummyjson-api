// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const Cart = () => {
//   const [products, setproducts] = useState([]);
//   const [cart, setcart] = useState([]);
//   const [showcart, setshowcart] = useState(false);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setproducts(data.products));
//   }, []);

//   //add to cart
//   const addtocart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       setcart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setcart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   //increment quantity
//   const incrementQuantity = (productid) => {
//     setcart(
//       cart.map((item) =>
//         item.id === productid ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   //decrement quantity
//   const decrementQuantity = (productid) => {
//     setcart(
//       cart
//         .map((item) =>
//           item.id === productid
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   //remove from cart
//   const removefromcart = (productid) => {
//     setcart(cart.filter((item) => item.id !== productid));
//   };
//   //toggle cart
//   const togglecart = () => {
//     setshowcart(!showcart);
//   };
//   //calculate total price
//   const gettotalprice = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="container py-4">
//       <h2 className="mb-4 text-center text-decoration-underline">
//         add to cart
//       </h2>

//       <button className="btn btn-primary mb-3" onClick={togglecart}>
//         {showcart ? "hidecart" : "showcart"} ({cart.length})
//       </button>

//       {showcart && (
//         <div className="card p-3 mb-4">
//           <h4>cart</h4>
//           {cart.length === 0 ? (
//             <p>your cart is empty</p>
//           ) : (
//             <>
//               <ul className="list-group">
//                 {cart.map((item) => (
//                   <li
//                     key={item.id}
//                     className="list-group-item d-flex justify-content-between align-items-center"
//                   >
//                     <span className="me-4">{item.title}</span>
//                     <div className="btn-group">
//                       <button
//                         className="btn btn-sm btn-outline-secondary"
//                         onClick={() => decrementQuantity(item.id)}
//                       >
//                         -
//                       </button>
//                       <span className="px-2">{item.quantity}</span>
//                       <button
//                         className="btn btn-sm btn-outline-secondary"
//                         onClick={incrementQuantity(item.id)}
//                       >
//                         +
//                       </button>
//                       <button
//                         className="btn btn-sm btn-danger ms-2"
//                         onClick={removefromcart(item.id)}
//                       >
//                         remove
//                       </button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <p className="mt-3 fw-bold">total : {gettotalprice()}</p>
//             </>
//           )}
//         </div>
//       )}
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-3 mb-4">
//             <div className="card h-100">
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="card-img-top"
//                 height="180"
//                 style={{ objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.price}</p>
//                 <button
//                   onClick={() => addtocart(product)}
//                   className="btn btn-success mt-auto"
//                 >
//                   add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
