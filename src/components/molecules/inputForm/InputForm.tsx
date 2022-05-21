import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";
import { AgeInput } from "../../atoms/measurements/measurementsContainer/AgeInput";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "state/slice";
import { selectUserData } from "state/selectors";
import { navigate } from "gatsby";
import { theme } from "styles/theme";
import { WeightInput } from "../../atoms/measurements/measurementsContainer/WeightInput";
import { HeightInput } from "../../atoms/measurements/measurementsContainer/HeightInput";
import { DesiredWeightInput } from "../../atoms/measurements/measurementsContainer/DesiredWeightInput";
import { Imperial } from "../../atoms/measurements/measurementsContainer/Imperial";
import { QuizAnswer } from "components/atoms/buttons/QuizAnswer";

export const InputForm = () => {
  const [ifImperial, setIfImperial] = useState(false);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [desiredWeight, setDesiredWeight] = useState("");
  const [isMale, setIsMale] = useState("");

  console.log(age, "this is age returned value");
  console.log(weight, "this is weight returned value");
  console.log(height, "this is height returned value");
  console.log(desiredWeight, "this is desired weight returned value");
  console.log(inches, "this is inches returned value");
  console.log(feet, "this is feet returned value");

  const [userState, setUserState] = useState({
    age: null,
    height: null,
    weight: null,
    feet: null,
    inches: null,
    desiredWeight: null,
    isMale: null,
  });

  console.log(userState, "user state ");
  const ageReal = age;

  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleFunction = (e) => {
    e.preventDefault();
    setUserState({
      age: age,
      height: height,
      weight: weight,
      desiredWeight: desiredWeight,
      feet: feet,
      inches: inches,
      isMale: isMale,
    });
    navigate("/loading");
  };
  const handleImperialSystem = () => {
    setIfImperial(true);
    setAge("");
    setHeight("");
    setFeet("");
    setInches("");
    setWeight("");
    setDesiredWeight("");
  };
  const handleMetricSystem = () => {
    setIfImperial(false);
    setAge("");
    setHeight("");
    setWeight("");
    setDesiredWeight("");
  };

  useEffect(() => {
    dispatch(setUserData(userState));
  }, [userState]);

  return (
    <ContentWrapper margin="s0auto" width="25rem">
      <FlexWrapper flexDirection="column" alignItems="center">
        <FlexWrapper
          gap="10px"
          width="100%"
          pt="10px"
          mb="25px"
          justifyContent="center"
          borderBottom={`1px solid ${theme.colors.lightwhite}`}
        >
          <MeasurementWrapper
            pb="s10"
            borderBottom={
              ifImperial ? "1px solid orange" : "1x solid transparent"
            }
          >
            <Typography
              fontWeight="700"
              color={ifImperial ? "orange" : "primary"}
              onClick={handleImperialSystem}
            >
              Imperial
            </Typography>
          </MeasurementWrapper>
          <MeasurementWrapper
            pb="s10"
            borderBottom={
              !ifImperial ? "1px solid orange" : "1x solid transparent"
            }
          >
            <Typography
              fontWeight="fw700"
              color={ifImperial ? "primary" : "orange"}
              onClick={handleMetricSystem}
            >
              Metric
            </Typography>
          </MeasurementWrapper>
        </FlexWrapper>
        <FormContainer>
          <FlexWrapper flexDirection="column" gap="25px" width="100%">
            {ifImperial ? (
              <>
                <AgeInput setStateValue={setAge} value={age} />
                <Imperial
                  setStateValueInches={setInches}
                  setStateValueFeet={setFeet}
                />
                <WeightInput
                  setStateValue={setWeight}
                  value={weight}
                  imperial
                />
                <DesiredWeightInput
                  setStateValue={setDesiredWeight}
                  value={desiredWeight}
                  imperial
                />
              </>
            ) : (
              <>
                <AgeInput setStateValue={setAge} value={age} />
                <HeightInput setStateValue={setHeight} />
                <WeightInput setStateValue={setWeight} value={weight} />
                <DesiredWeightInput
                  setStateValue={setDesiredWeight}
                  value={desiredWeight}
                />
              </>
            )}
            <FlexWrapper gap="10px">
              <Input
                type="radio"
                name="gender"
                onClick={() => setIsMale("Male")}
                label="male"
              />
              <Input
                type="radio"
                name="gender"
                onClick={() => setIsMale("Female")}
                label="female"
              />
            </FlexWrapper>
            <QuizAnswer onClick={handleFunction} type="submit">
              SUBMIT
            </QuizAnswer>
          </FlexWrapper>
        </FormContainer>
      </FlexWrapper>
    </ContentWrapper>
  );
};

const MeasurementWrapper = styled(Box)`
  cursor: pointer;
`;
const FormContainer = styled.form`
  width: 100%;
`;
