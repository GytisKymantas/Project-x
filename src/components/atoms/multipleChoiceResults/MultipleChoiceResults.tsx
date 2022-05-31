import React from "react";
import {
  Box,
  SectionWrapper,
  GridWrapper,
  Typography,
  FlexWrapper,
} from "components";
import { useSelector } from "react-redux";
import {
  selectMultipleChoice,
  selectMultipleChoiceGoals,
} from "state/selectors";
import { Verified } from "assets/images";

export const MultipleChoiceResults: React.FC = () => {
  const multipleData = useSelector(selectMultipleChoice);
  const multipleGoalData = useSelector(selectMultipleChoiceGoals);
  console.log(multipleData, "multiple data");
  console.log(multipleGoalData, "multiple data");
  return (
    <SectionWrapper>
      <Typography color="primary">
        The subscription plan will contain::
      </Typography>
      <GridWrapper gridTemplateColumns="repeat(2,1fr)">
        <Box>
          {/* {multipleData.map((object) => (
            <li>
              <Verified /> {object}
            </li>
          ))} */}
        </Box>
        <Box>
          {/* {multipleGoalData.map((object) => (
            <li>
              <Verified /> {object}
            </li>
          ))} */}
        </Box>
      </GridWrapper>
    </SectionWrapper>
  );
};
