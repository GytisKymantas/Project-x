// import React from "react";
// import { Box, Input, FlexWrapper, Typography } from "components";

// interface ImperialInputProps {
//   setStateValueFeet: (e: React.FormEvent<HTMLInputElement>) => void;
//   setStateValueInches: (e: React.FormEvent<HTMLInputElement>) => void;
// }

// export const Imperial: React.FC<ImperialInputProps> = ({
//   setStateValueFeet,
//   setStateValueInches,
// }) => {
//   return (
//     <FlexWrapper gap="1.625rem">
//       <FlexWrapper
//         width="100%"
//         justifyContent="space-between"
//         position="relative"
//       >
//         <Input
//           type="number"
//           placeholder="Height"
//           min={4}
//           max={8}
//           required
//           onChange={(e) => setStateValueFeet(e.target.value)}
//           width="10.125rem"
//         />
//         <Box mt="s16px" position="absolute" right="0">
//           <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
//             ft
//           </Typography>
//         </Box>
//       </FlexWrapper>
//       <FlexWrapper
//         width="100%"
//         justifyContent="space-between"
//         position="relative"
//       >
//         <Input
//           type="number"
//           placeholder="Inches"
//           width="10.125rem"
//           min={0}
//           max={11}
//           required
//           onChange={(e) => setStateValueInches(e.target.value)}
//         />
//         <Box mt="s16" position="absolute" right="0">
//           <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
//             in
//           </Typography>
//         </Box>
//       </FlexWrapper>
//     </FlexWrapper>
//   );
// };
