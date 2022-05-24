import React, { useState } from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";
import { useDispatch, useSelector } from "react-redux";
import { pageNext } from "state/slices/pageSlice";
import { setMultipleChoiceGoals } from "state/slices/multipleChoiceSlice";
import { selectMultipleChoiceGoals } from "state/selectors";
interface IsMultipleGoalsTestProps {
  //   selectedUserState: Object[];
  //   setSelectedUserState: Dispatch<SetStateAction<{}>>;
  //   quizAnswer: string;
  //   title: string;
  answers: any;
  page: any;
  setArrayIndex?: any;
}

export const IsMultipleGoalsTest: React.FC<IsMultipleGoalsTestProps> = ({
  //   selectedUserState,
  //   setSelectedUserState,
  //   quizAnswer,
  //   title,
  answers,
  page,
  setArrayIndex,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Array<string>>([]);
  const dispatch = useDispatch();
  const multipleGoals = useSelector(selectMultipleChoiceGoals);
  console.log(multipleGoals, "multiple goals");
  console.log(selectedAnswer, "local state");
  const handleSelectAnswer = (answer: Array<string>) => {
    console.log(answer);

    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== answer));
    } else {
      setSelectedAnswer((array) => array.concat(answer));
    }
  };

  const handleNextStep = () => {
    dispatch(setMultipleChoiceGoals(selectedAnswer));
    dispatch(pageNext());
  };

  return (
    <Box>
      {answers[page]?.question?.answers.map((answer, i) => (
        <Box position="relative" key={i}>
          <QuizAnswer
            key={i}
            onClick={() => handleSelectAnswer(answer)}
            border={
              selectedAnswer.includes(answer)
                ? "solid 2px black"
                : "solid 2px transparent"
            }
          >
            {answer}
          </QuizAnswer>

          {selectedAnswer.includes(answer) && (
            <Box position={"absolute"} top="28%" left="5%">
              <Check />
            </Box>
          )}
        </Box>
      ))}
      {selectedAnswer.length < 1 && (
        <QuizAnswer onClick={handleNextStep} disabled isSubmit>
          submit
        </QuizAnswer>
      )}
      {selectedAnswer.length >= 1 && (
        <QuizAnswer onClick={handleNextStep}>Submit</QuizAnswer>
      )}
    </Box>
  );
};
