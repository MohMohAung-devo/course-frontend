// import { useEffect, useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// const Rating = () => {
//   const { token } = useAuth();
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     const ratingSubmit = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/addRating", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ instructorId, rating, comment }),
//         });

//         setList(response.formData);
//       } catch (err) {
//         console.log("Rating failed", err);
//       }
//     };
//     ratingSubmit();
//   }, [instructorId, rating, number]);

//   return { rating, number };
// };
