import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";
import { AgeInput } from "./AgeInput";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "state/slice";
import { selectUserData } from "state/selectors";
import { navigate } from "gatsby";
import { WeightInput } from "./WeightInput";
import { HeightInput } from "./HeightInput";
import { DesiredWeightInput } from "./DesiredWeightInput";
import { Imperial } from "./Imperial";

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
          py="10px"
          mb="25px"
          justifyContent="center"
          borderBottom="1px solid gray"
        >
          <MeasurementWrapper>
            <Typography
              fontWeight="700"
              color={ifImperial ? "orange" : "primary"}
              borderBottom={
                ifImperial ? "1px solid orange" : "1x solid primary"
              }
              onClick={handleImperialSystem}
            >
              Imperial
            </Typography>
          </MeasurementWrapper>
          <MeasurementWrapper>
            <Typography
              fontWeight="fw700"
              color={ifImperial ? "primary" : "orange"}
              borderBottom={
                ifImperial ? "1px solid primary" : "1x solid orange"
              }
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
            <BaseButton onClick={handleFunction} type="submit">
              SUBMIT
            </BaseButton>
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
