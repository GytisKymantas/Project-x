// import React from "react";
// import { Box, Input, FlexWrapper, Typography } from "components";

// interface WeightInputProps {
//   setStateValue: (e: React.FormEvent<HTMLInputElement>) => void;
//   imperial?: boolean;
//   value?: string;
// }

// export const WeightInput: React.FC<WeightInputProps> = ({
//   setStateValue,
//   imperial,
//   value,
// }) => (
//   <FlexWrapper width="100%" justifyContent="space-between" position="relative">
//     <Input
//       type="number"
//       placeholder="Weight"
//       required
//       value={value}
//       onChange={(e) => setStateValue(e.target.value)}
//       minValue={10}
//       maxValue={230}
//     />
//     <Box mt="s16" position="absolute" right="0">
//       {imperial ? (
//         <Typography color="primary" fontFamily="Satisfy" fontSize="fs15">
//           lb
//         </Typography>
//       ) : (
//         <Typography color="primary" fontFamily="Satisfy" fontSize="fs15">
//           kg
//         </Typography>
//       )}
//     </Box>
//   </FlexWrapper>
// );
