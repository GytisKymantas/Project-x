// import React, { useState, useEffect } from "react";
// import { QuizAnswer } from "../../atoms/buttons/QuizAnswer";
// import { useDispatch, useSelector } from "react-redux";
// import { setMultipleChoice, setQuizAnswers } from "state/slice";
// import { navigate } from "gatsby";

// import {
//   Typography,
//   FlexWrapper,
//   ContentWrapper,
//   SectionWrapper,
//   Box,
// } from "components";
// import { selectState } from "state/selectors";

// interface QuizQuestionsContainerProps {
//   answers?: any;
// }

// export const QuizQuestionsContainer: React.FC<QuizQuestionsContainerProps> = ({
//   answers,
// }) => {
//   const dispatch = useDispatch();
//   const question = answers[0].question;
//   const page = answers[0].navigatePage;
//   const isMultipleChoice = answers[0].multipleChoice;
//   const isState = answers[0].state;
//   const isMultipleState = answers[0].multipleState;
//   const useSelectState = useSelector(selectState);

//   const [selectedUser, setSelectedUser] = useState(isState);
//   const [selectedMultipleUser, setSelectedMultipleUser] =
//     useState(isMultipleState);

//   console.log(selectedUser, "selected user");
//   console.log(selectedMultipleUser, "selected multiple user");
//   console.log(useSelectState, "redux state");

//   {
//     !isMultipleChoice &&
//       useEffect(() => {
//         dispatch(setQuizAnswers(selectedUser));
//       }, [selectedUser]);
//   }

//   const handleStateButton = () => {
//     dispatch(setMultipleChoice(selectedMultipleUser));
//     navigate(`/questions/female/step_${page}`);
//   };

//   return (
//     <SectionWrapper>
//       <ContentWrapper>
//         <Typography color="primary" type="h2" textAlign={"center"}>
//           {question}
//         </Typography>
//         <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
//           {answers.map(({ title, id, quizAnswer }, i: string) => (
//             <Box
//               key={id}
//               // onClick={() =>
//               //   setSelectedUser({
//               //     quizAnswer,
//               //   })
//               // }
//             >
//               {!isMultipleChoice ? (
//                 <QuizAnswer
//                   onClick={() =>
//                     setSelectedUser(
//                       {
//                         quizAnswer,
//                       },
//                       navigate(`/questions/female/step_${page}`)
//                     )
//                   }
//                   key={id}
//                 >
//                   {title}
//                 </QuizAnswer>
//               ) : (
//                 <QuizAnswer
//                   onClick={() =>
//                     setSelectedMultipleUser((array) => array.concat(quizAnswer))
//                   }
//                   key={id}
//                 >
//                   {title}
//                 </QuizAnswer>
//               )}
//             </Box>
//           ))}
//           {isMultipleChoice && (
//             <QuizAnswer onClick={handleStateButton} isSubmit>
//               submit
//             </QuizAnswer>
//           )}
//         </FlexWrapper>
//         {/* <Box position={"absolute"} top="0" left="0" zIndex={-1}>
//           <Image src="quizBackGround" />
//         </Box> */}
//       </ContentWrapper>
//     </SectionWrapper>
//   );
// };
