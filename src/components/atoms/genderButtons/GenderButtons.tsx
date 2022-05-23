import React, { useState, useEffect } from "react";
import { FlexWrapper, QuizStartButton, BaseButton, Box } from "components";
import { useDispatch } from "react-redux";
import { setGenderData } from "state/slice";
import { navigate } from "gatsby";

export const GenderButtons: React.FC = () => {
  const dispatch = useDispatch();

  const [isMale, setIsMale] = useState({
    isMale: "",
  });

  useEffect(() => {
    dispatch(setGenderData(isMale.isMale));
  }, [isMale]);

  return (
    <>
      <FlexWrapper gap="0.625rem" mt="s20">
        <Box onClick={() => navigate("/questions")}>
          <BaseButton
            onClick={() => setIsMale({ isMale: "Male" })}
            width="8.5625rem"
          >
            Male
          </BaseButton>
        </Box>
        <Box onClick={() => navigate("/questions")}>
          <BaseButton
            onClick={() => setIsMale({ isMale: "Female" })}
            width="8.5625rem"
          >
            Female
          </BaseButton>
        </Box>
      </FlexWrapper>
    </>
  );
};
