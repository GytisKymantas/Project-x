import React, { useState, useEffect } from "react";
import { FlexWrapper, BaseButton, Box } from "components";
import { setGenderData } from "state/slices/userDataSlice";
import { navigate } from "gatsby";
import { pageReset } from "state/slices/pageSlice";
import { useDispatch } from "react-redux";

export const GenderButtons: React.FC = () => {
  const dispatch = useDispatch();

  const [isMale, setIsMale] = useState({
    isMale: "",
  });

  const handleQuizStart = () => {
    dispatch(pageReset()), navigate("/quiz");
  };

  useEffect(() => {
    dispatch(setGenderData(isMale.isMale));
  }, [isMale]);

  return (
    <FlexWrapper gap="0.625rem" mt="s20">
      <Box onClick={handleQuizStart}>
        <BaseButton
          onClick={() => setIsMale({ isMale: "Male" })}
          width="8.5625rem"
        >
          Male
        </BaseButton>
      </Box>
      <Box onClick={handleQuizStart}>
        <BaseButton
          onClick={() => setIsMale({ isMale: "Female" })}
          width="8.5625rem"
        >
          Female
        </BaseButton>
      </Box>
    </FlexWrapper>
  );
};
