// import React from "react";
// import { Box, Input, FlexWrapper, Typography } from "components";

// interface AgeInputProps {
//   setStateValue: (e: React.FormEvent<HTMLInputElement>) => void;
//   value?: number;
// }
// //TODO: value
// export const AgeInput: React.FC<AgeInputProps> = ({ setStateValue, value }) => (
//   <FlexWrapper width="100%" position="relative" justifyContent="space-between">
//     <Input
//       type="number"
//       placeholder="Age"
//       onChange={(e: React.FormEvent<HTMLInputElement>) =>
//         setStateValue(e.target.value)
//       }
//       required
//       value={value}
//       minValue={18}
//       maxValue={100}
//     />
//     <Box mt="s16" position="absolute" right="0">
//       <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
//         years
//       </Typography>
//     </Box>
//   </FlexWrapper>
// );
