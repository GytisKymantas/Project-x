import React from "react";
import {
  Box,
  Typography,
  FlexWrapper,
  Image,
  HealthInformation,
} from "components";
import { Footer } from "components";
import { Navigation } from "components";
import {
  selectQuizAnswers,
  selectState,
  selectUserData,
} from "state/selectors";
import { CheckoutHero } from "components/atoms/checkoutContainer/CheckoutHero";
import ScaleSection from "components/molecules/scaleSection/ScaleSection";
import { useSelector } from "react-redux";
import FactsContainer from "components/molecules/factsContainer/FactsContainer";
import MeasurementsInfoContainer from "components/molecules/measurementsInfoContainer/MeasurementsInfoContainer";
import { SubscriptionBoxSection } from "components/atoms/subscriptionBox/SubscriptionBoxSection";
import { HealthInformationSection } from "components/atoms/healthResult/HealthInformationSection";
const Checkout: React.FC = () => {
  const userQuizAnswers = useSelector(selectQuizAnswers);
  const workoutFrequencyAnswer = userQuizAnswers.isWorkingOut;
  const isSmoking = userQuizAnswers.isSmoking;
  const isHeartCondition = userQuizAnswers.isHeartCondition;
  const isAsthmatic = userQuizAnswers.isAsthmatic;

  const select = useSelector(selectState);
  const userData = useSelector(selectUserData);
  console.log(select, "From react redux");
  console.log(userQuizAnswers, "from redux user data");

  return (
    <>
      <Navigation checkoutPage />
      <CheckoutHero />
      <MeasurementsInfoContainer />
      <ScaleSection />
      <HealthInformationSection />
      <SubscriptionBoxSection />
      <Footer />
    </>
  );
};

export default Checkout;

// {workoutFrequencyAnswer && (
//   <Box p="20px">
//     <FlexWrapper alignItems="center" gap="20px">
//       <Box position="relative">
//         <Image src="shape360" />
//         {/* <Typography color="primary" type="h2">
//           {workoutFrequencyAnswer}
//         </Typography> */}
//         <Box position="absolute" top="35%" left="33%">
//           <Typography color="primary" type="h6">
//             Frequency
//           </Typography>
//         </Box>
//       </Box>
//       <FlexWrapper flexDirection="column">
//         <Typography color="primary" type="h2">
//           {workoutFrequencyAnswer}
//         </Typography>
//         <Typography color="primary" type="h6">
//           Get at least 150 minutes of moderate aerobic activity or 75
//           minutes of vigorous aerobic activity a week
//         </Typography>
//       </FlexWrapper>
//     </FlexWrapper>
//   </Box>
// )}
// {doYouSmokeAnswer === true ? (
//   <Box p="20px">
//     <FlexWrapper alignItems="center" gap="20px">
//       <FlexWrapper flexDirection="column">
//         <Typography color="primary" type="h2">
//           So, you're a smoker!
//         </Typography>
//         <Typography color="primary" type="h6">
//           Smoking accelerates the buildup of plaque in the arteries,
//           beginning as early as adolescence. It also increases the
//           risk of heart disease, stroke, peripheral vascular disease,
//           aortic aneurysm and sudden death. Regardless of how many
//           years you have used tobacco, quitting now can save your
//           heart.
//         </Typography>
//       </FlexWrapper>
//       <Image src="shape360" />
//     </FlexWrapper>
//   </Box>
// ) : (
//   ""
// )}
// {isHeartCondition === true && (
//   <Box p="20px">
//     <FlexWrapper alignItems="center" gap="20px">
//       <Box position="relative">
//         <Image src="shape360" />

//         <Box position="absolute" top="35%" left="33%">
//           <Typography color="primary" type="h6">
//             Heart
//           </Typography>
//         </Box>
//       </Box>
//       <FlexWrapper flexDirection="column">
//         <Typography color="primary" type="h2">
//           Your heart is valuable
//         </Typography>
//         <Typography color="primary" type="h6">
//           1 in 4 deaths in the United States is a result of heart
//           disease. 1 person dies every 36 seconds from heart disease.
//           Coronary heart disease is the most common form of heart
//           disease. Over 800,000 Americans have a heart attack each
//           year.1 oct.
//         </Typography>
//       </FlexWrapper>
//     </FlexWrapper>
//   </Box>
// )}
// {isAsthmatic === true && (
//   <Box p="20px">
//     <FlexWrapper alignItems="center" gap="20px">
//       <FlexWrapper flexDirection="column">
//         <Typography color="primary" type="h2">
//           You're Asthmatic!
//         </Typography>
//         <Typography color="primary" type="h6">
//           Stay in areas with minimal air pollution. Avoid sports with
//           continuous activity. Basketball, soccer, and long-distance
//           running can be hard on the lungs if your asthma is poorly
//           controlled. Avoid sports that are done in the cold, like
//           cross-country skiing and hockey.
//         </Typography>
//       </FlexWrapper>
//       <Image src="shape360" />
//     </FlexWrapper>
//   </Box>
// )}
