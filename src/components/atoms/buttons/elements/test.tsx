// import React, { useState } from "react";
// import { Box, FlexWrapper, BaseButton } from "components";
// import { Check } from "assets/images";
// import styled from "styled-components/macro";

// interface QuizButtonProps {
//   children: React.ReactNode;
//   isSubmitButton?: boolean;
// }

// export const QuizButton: React.FC<QuizButtonProps> = ({
//   children,
//   isSubmitButton,
//   isSelected,
// }) => {
//   const [select, setSelect] = useState(false);
//   return (
//     <Box
//       maxWidth="22.5625rem"
//       height="3rem"
//       position={isSubmitButton ? undefined : "relative"}
//       m="s8"
//       mt={isSubmitButton ? "s50" : undefined}
//     >
//       {isSubmitButton ? (
//         <BaseButton
//           type={"submit"}
//           onClick={() => console.log("clicked")}
//           disabled={select ? false : true}
//           //   cursor={disabled}
//           background={select ? "red" : "blue"}
//           boxShadow="0px 16px 32px rgba(16, 51, 251, 0.24);"
//         >
//           {children}
//         </BaseButton>
//       ) : (
//         <BaseButton
//           type={"button"}
//           onClick={() => setSelect(!select)}
//           border={select ? "solid 2px black" : "solid 2px transparent"}
//         >
//           <FlexWrapper justifyContent="center">{children}</FlexWrapper>
//         </BaseButton>
//       )}
//       {select && (
//         <Box position={"absolute"} top="28%" left="5%">
//           <Check />
//         </Box>
//       )}
//     </Box>
//   );
// };

// const SubmitButton = styled(BaseButton)`
//   /* &:hover {
//     filter: brightness(85%);
//   }

//   &:active {
//     filter: brightness(115%);
//   } */
// `;
