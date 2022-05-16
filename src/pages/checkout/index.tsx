import React from "react";
import {
  Navigation,
  SectionWrapper,
  Box,
  Typography,
  FlexWrapper,
  GridWrapper,
  Image,
} from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { selectQuizAnswers } from "state/selectors";
import { useSelector } from "react-redux";
import { Arrow } from "assets/images";
import { navigate } from "gatsby";
import FactsContainer from "components/molecules/checkoutContainer/FactsContainer";
import { CaloricCounter } from "components/molecules/checkoutContainer/CaloricCounter";
import { BMI } from "components/molecules/checkoutContainer/BMI";
import { Variations } from "components/molecules/checkoutContainer/Variations";
import { Satisfaction } from "components/molecules/checkoutContainer/Satisfaction";
import MeasurementsInfoContainer from "components/molecules/checkoutContainer/MeasurementsInfoContainer";
const Checkout: React.FC = () => {
  //   const answers = selectQuizAnswers();
  const userQuizAnswers = useSelector(selectQuizAnswers);
  const workoutFrequencyAnswer = userQuizAnswers.quizAnswer;
  const doYouSmokeAnswer = userQuizAnswers.quizAnswer2;
  console.log(userQuizAnswers, "from checkout");

  return (
    <>
      <SectionWrapper>
        <Box>
          <SectionHeader
            type="h4"
            header="See how Fit on-time can improve your daily life"
            paragraph="Bond with your baby and support his or her development with creative, fun and easy activities."
          />
          <Box mt="50px">
            <Typography type="h5" color="primary" textAlign="center">
              Your summary
            </Typography>
          </Box>
        </Box>
        <MeasurementsInfoContainer />

        <FactsContainer />

        <Box m="50px">
          <Box>
            {workoutFrequencyAnswer && (
              <Box bg="taxi" p="20px">
                <FlexWrapper alignItems="center" gap="20px">
                  <Box position="relative">
                    <Image src="shape360" />
                    {/* <Typography color="primary" type="h2">
                    {workoutFrequencyAnswer}
                  </Typography> */}
                    <Box position="absolute" top="35%" left="33%">
                      <Typography color="primary" type="h6">
                        Frequency
                      </Typography>
                    </Box>
                  </Box>
                  <FlexWrapper flexDirection="column">
                    <Typography color="primary" type="h2">
                      {workoutFrequencyAnswer}
                    </Typography>
                    <Typography color="primary" type="h6">
                      Get at least 150 minutes of moderate aerobic activity or
                      75 minutes of vigorous aerobic activity a week
                    </Typography>
                  </FlexWrapper>
                </FlexWrapper>
              </Box>
            )}
            {doYouSmokeAnswer && (
              <Box bg="taxi" p="20px">
                <FlexWrapper alignItems="center" gap="20px">
                  <FlexWrapper flexDirection="column">
                    <Typography color="primary" type="h2">
                      So, you're a smoker!
                    </Typography>
                    <Typography color="primary" type="h6">
                      Smoking accelerates the buildup of plaque in the arteries,
                      beginning as early as adolescence. It also increases the
                      risk of heart disease, stroke, peripheral vascular
                      disease, aortic aneurysm and sudden death. Regardless of
                      how many years you have used tobacco, quitting now can
                      save your heart.
                    </Typography>
                  </FlexWrapper>
                  <Image src="shape360" />
                </FlexWrapper>
              </Box>
            )}
            {doYouSmokeAnswer && (
              <Box bg="taxi" p="20px">
                <FlexWrapper alignItems="center" gap="20px">
                  <Box position="relative">
                    <Image src="shape360" />
                    {/* <Typography color="primary" type="h2">
                 {workoutFrequencyAnswer}
               </Typography> */}
                    <Box position="absolute" top="35%" left="33%">
                      <Typography color="primary" type="h6">
                        Heart
                      </Typography>
                    </Box>
                  </Box>
                  <FlexWrapper flexDirection="column">
                    <Typography color="primary" type="h2">
                      Your heart is valuable
                    </Typography>
                    <Typography color="primary" type="h6">
                      1 in 4 deaths in the United States is a result of heart
                      disease. 1 person dies every 36 seconds from heart
                      disease. Coronary heart disease is the most common form of
                      heart disease. Over 800,000 Americans have a heart attack
                      each year.1 oct.
                    </Typography>
                  </FlexWrapper>
                </FlexWrapper>
              </Box>
            )}
          </Box>
        </Box>
        <Box>
          <button
            onClick={() => {
              navigate("/questions/female/test_1");
            }}
            type="Button"
          >
            click
          </button>
        </Box>
      </SectionWrapper>
    </>
  );
};

export default Checkout;
