export const STEP_ONE = [
  {
    question: "How often do you do physical activity?",
    navigatePage: "2",
    state: { quizAnswer: "" },
    title: "2-3 hrs per week",
    id: "2342",
    quizAnswer: "2-3 hrs per week",
  },
  {
    title: "4-6 hrs per week",
    id: "23424",
    quizAnswer: "4-6 hrs per week",
  },
  {
    title: "6-9 hrs per week",
    id: "22342",
    quizAnswer: "6-9 hrs per week",
  },
];

export const STEP_TWO = [
  {
    question: "What are your fitness goals?",
    navigatePage: "3",
    multipleChoice: true,
    multipleState: [],
    title: "Muscle tone",
    id: "1",
    quizAnswer: "Muscle",
  },
  {
    title: "Strength",
    id: "2",
    quizAnswer: "Strength",
  },
  {
    title: "Flexibility",
    id: "3",
    quizAnswer: "Flexibility",
  },
  {
    title: "Reduce stress",
    id: "4",
    quizAnswer: "Stress",
  },
  {
    title: "Overall health",
    id: "5",
    quizAnswer: "Health",
  },
  {
    title: "Weight loss",
    id: "6",
    quizAnswer: "Weight",
  },
  {
    title: "Cardiovascularity",
    id: "7",
    quizAnswer: "Cardiovascularity",
  },
];

export const STEP_THREE = [
  {
    question:
      "Have you consumed any type of tobacco products in the past 14 days??",
    navigatePage: "4",
    state: { quizAnswer: "" },
    multipleChoice: false,
    id: "1",
    title: "Yes",
    quizAnswer: "Yes",
  },
  {
    id: "2",
    title: "No",
    quizAnswer: "No",
  },
];

export const STEP_FOUR = [
  {
    question: "Do you or does your family have history with heart issues??",
    navigatePage: "5",
    multipleChoice: false,
    state: { quizAnswer: "" },
    id: "1",
    title: "Yes",
    quizAnswer: "Yes",
  },
  {
    id: "2",
    title: "No",
    quizAnswer: "No",
  },
  {
    id: "3",
    title: "Not sure",
  },
];

export const STEP_FIVE = [
  {
    question: "Are You asthmatic?",
    navigatePage: "6",
    multipleChoice: false,
    state: { quizAnswer: "" },
    id: "1",
    title: "Yes",
    quizAnswer: "Yes",
  },
  {
    id: "2",
    title: "No",
    quizAnswer: "No",
  },
];

export const STEP_SIX = [
  {
    question: "Which of the following conditions apply to you?",
    navigatePage: "6",
    multipleChoice: true,
    multipleState: [],
    id: "1",
    title: "High blood pressure",
    quizAnswer: "Pressure",
  },
  {
    id: "2",
    title: "Overweight",
    quizAnswer: "Overweight",
  },
  {
    id: "3",
    title: "Diabetes",
    quizAnswer: "Diabetes",
  },
  {
    id: "4",
    title: "Bulimia",
    quizAnswer: "Bulimia",
  },
  {
    id: "5",
    title: "Chest discomfort",
    quizAnswer: "Chest",
  },
  {
    id: "6",
    title: "Shortness of Breath",
    quizAnswer: "Breath",
  },
  {
    id: "7",
    title: "Anxiety",
    quizAnswer: "Anxiety",
  },
  {
    id: "8",
    title: "Other",
    quizAnswer: "Other",
  },
  {
    id: "9",
    title: "None",
    quizAnswer: "None",
  },
];
