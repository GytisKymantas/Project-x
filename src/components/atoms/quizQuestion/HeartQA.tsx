// import React, { useState, useEffect } from "react";
// import { Box } from "components";
// import { QuizAnswer } from "../buttons/QuizAnswer";
// import {
//   setQuizAnswers,
//   setIsAsthmatic,
//   setIsSmoking,
//   setIsWorkingOut,
//   setIsHeart,
// } from "state/slice";
// import { useDispatch, useSelector } from "react-redux";

// interface HeartQAprops {
//   quizAnswer: string | boolean;
//   id: string;
//   handleClick: () => void;
//   title: string;
// }

// export const HeartQA: React.HeartQAprops = ({
//   quizAnswer,
//   id,
//   handleClick,
//   title,
// }) => {
//   const [heartAnswer, setHeartAnswer] = useState({});

//   const dispatch = useDispatch();

//   return (
//     <Box
//       key={id}
//       onClick={() =>
//         setHeartAnswer({
//           quizAnswer,
//         })
//       }
//     >
//       <QuizAnswer onClick={handleClick} key={id}>
//         {title}
//       </QuizAnswer>
//     </Box>
//   );
// };
