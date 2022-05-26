import { Gender, Height, Scales, Age } from "assets/images";
import React from "react";

export const NAVIGATION_LINKS = [
  {
    title: "Home",
    id: "1",
  },
  {
    title: "About",
    id: "2",
  },
  {
    title: "Testimonials",
    id: "3",
  },
  {
    title: "Partners",
    id: "4",
  },
];

export const FAQ_DETAILS = [
  {
    id: "1412",
    question: "Can I use an Oyster card?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  {
    id: "2345",
    question: "Can I use freedom pass?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  {
    id: "2346",
    question: "Can I use the offers for a large group?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  {
    id: "2347",
    question: "When do you renew your offers?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
];

export const RATING_STAR_ARRAY = [
  {
    id: "632",
  },
  {
    id: "633",
  },
  {
    id: "634",
  },
  {
    id: "635",
  },
  {
    id: "636",
  },
];

export const REVIEW_CARD_ARRAY = [
  {
    id: "638",
  },
  {
    id: "639",
  },
  {
    id: "640",
  },
];

export const REVIEW_DATA = [
  {
    id: "2452",
    header: "Great service!",
    name: "Johnny Depp",
    paragraph:
      "“Are so beguiled and demoralized by the charms of pleasure. Six curiosity day assurance bed necessary.”",
    occupation: "Actor",
  },
  {
    id: "2454",
    header: "Amazing service!",
    name: "Amber Heard",
    paragraph:
      "“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”",
    occupation: "Actress",
  },
  {
    id: "2455",
    header: "The best service!",
    name: "Will Smith",
    paragraph:
      "“Men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”",
    occupation: "Comedian",
  },
];

export const MEASUREMENT_CONTAINER_DATA = [
  {
    image: <Gender />,
    title: "",
    subtitle: "Gender",
    id: "1212",
  },
  {
    image: <Age />,
    title: "",
    subtitle: "Age",
    id: "1313",
  },
  {
    image: <Height />,
    title: "",
    subtitle: "Height cm",
    id: "1414",
  },
  {
    image: <Scales />,
    title: "",
    subtitle: "Weight",
    id: "1515",
  },
];

export const SUBSCRIPTION_DETAILS = [
  {
    discount: "50% OFF",
    month: "6 month plan",
    monthlyValue: "$15.99",
    oldValue: "$93.98",
    newValue: "$46.99",
    billed: "every 6 months",
    id: 1,
  },
  {
    discount: "25% OFF",
    month: "3 month plan",
    monthlyValue: "$15.99",
    oldValue: "$45.99",
    newValue: "$36.99",
    billed: "every 3 months",
    id: 2,
  },
  {
    discount: "10% OFF",
    month: "1 month plan",
    monthlyValue: "$20.99",
    oldValue: "$20.99",
    newValue: "$16.99",
    billed: "monthly",
    id: 3,
  },
];

export const WIDTH_SCALE = ["14%", "28%", "42%", "58%", "72%", "86%", "100%"];

export const BULLET_ARRAY = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
];

export const PARTNER_IMAGES = [
  "partner1",
  "partner2",
  "partner3",
  "partner4",
  "partner5",
];
export const SCALE_ARRAY = ["1W", "2W", "3W", "4W", ""];

export const SCALE_BULLETS = [
  {
    id: "1",
    top: "-9%",
    left: "13%",
    coeficient: 12,
  },
  {
    id: "2",
    top: "13%",
    left: "31%",
    coeficient: 10,
  },
  {
    id: "3",
    top: "26%",
    left: "52%",
    coeficient: 8,
  },
  {
    id: "4",
    top: "42%",
    left: "67%",
    coeficient: 11.3,
  },
];

// export const Constant = () => {
//   const dispatch = useDispatch();
//   const userQuizAnswers = useSelector(selectQuizAnswers);
//   const workoutFrequencyAnswer = userQuizAnswers?.isWorkingOut;
//   const isSmoking = userQuizAnswers?.isSmoking;
//   const isHeartCondition = userQuizAnswers?.isHeartCondition;
//   const isAsthmatic = userQuizAnswers?.isAsthmatic;

//   const HEALTH_INFORMATION_DATA = [
//     {
//       id: "1",
//       title: workoutFrequencyAnswer,
//       treatment:
//         "Get at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week",
//       answer: true,
//     },
//     {
//       id: "2",
//       title: "So, you're a smoker!",
//       treatment:
//         "Smoking accelerates the buildup of plaque in the arteries, beginning as early as adolescence. It also increases therisk of heart disease, stroke, peripheral vascular disease, aortic aneurysm and sudden death. Regardless of how many years you have used tobacco, quitting now can save your heart.",
//       answer: isSmoking,
//     },
//     {
//       id: "3",
//       title: "Your heart is valuable",
//       treatment:
//         " 1 in 4 deaths in the United States is a result of heart disease. 1 person dies every 36 seconds from heart disease. Coronary heart disease is the most common form of heart disease. Over 800,000 Americans have a heart attack each year.",
//       answer: isHeartCondition,
//     },
//     {
//       id: "4",
//       title: "You're asthmatic!",
//       treatment:
//         "Stay in areas with minimal air pollution. Avoid sports with continuous activity. Basketball, soccer, and long-distance running can be hard on the lungs if your asthma is poorly controlled. Avoid sports that are done in the cold, likecross-country skiing and hockey.",
//       answer: isAsthmatic,
//     },
//   ];

//   return <div>ok</div>;
// };
