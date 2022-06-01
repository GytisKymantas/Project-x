import React from "react";
import { Box, SectionWrapper, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import {
  selectMultipleChoice,
  selectMultipleChoiceGoals,
} from "state/selectors";
import { Verified, VerifiedYellow } from "assets/images";
import styled from "styled-components/macro";
import { mobile } from "styles/breakpoints";

export const MultipleChoiceResults: React.FC = () => {
  const multipleData = useSelector(selectMultipleChoice);
  const multipleGoalData = useSelector(selectMultipleChoiceGoals);

  return (
    <SectionWrapper>
      <Box m="auto" width={{ _: "80%", ltablet: "100%" }}>
        <Typography type="h4" textAlign="center" color="primary" pb="s50">
          The personalised e-book plan will include:
        </Typography>
      </Box>
      <FlexWrapper
        justifyContent="center"
        gap={mobile ? "1.5625rem" : "3.125rem"}
      >
        <FlexWrapper flexDirection="column">
          <Typography textAlign="center" color="primary" py="s10">
            Your conditions:
          </Typography>
          {multipleData.map((object) => (
            <ListItem key={object}>
              <VerifiedYellow /> {object}
            </ListItem>
          ))}
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Typography textAlign="center" color="primary" py="s10">
            Your goals:
          </Typography>
          {multipleGoalData.map((object) => (
            <ListItem key={object}>
              <Verified /> {object}
            </ListItem>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
};

const ListItem = styled.li`
  list-style-type: none;
  font-family: satisfy;
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  padding: 0.625rem;
`;
