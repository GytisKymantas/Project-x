import React, { useState, useEffect } from "react";
import {
  Box,
  FlexWrapper,
  InputFormData,
  BaseButton,
  MetricWrapper,
} from "components";
import styled from "styled-components/macro";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { setUserData } from "state/slices/userDataSlice";

export const InputFormContainer: React.FC = () => {
  const [ifImperial, setIfImperial] = useState(false);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [desiredWeight, setDesiredWeight] = useState("");
  const [userState, setUserState] = useState({
    age: null,
    height: null,
    weight: null,
    feet: null,
    inches: null,
    desiredWeight: null,
  });
  const dispatch = useDispatch();

  const handleFunction = () => {
    setUserState({
      age: age,
      height: height,
      weight: weight,
      desiredWeight: desiredWeight,
      feet: feet,
      inches: inches,
    });
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
    <MetricWrapper
      handleImperial={handleImperialSystem}
      handleMetric={handleMetricSystem}
      Imperial={ifImperial}
    >
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/loading");
        }}
      >
        <FlexWrapper flexDirection="column" gap="1.5625rem" width="100%">
          {ifImperial ? (
            <>
              <InputFormData
                setStateValue={setAge}
                value={age}
                placeholder={"Age"}
                minValue={18}
                maxValue={100}
                measurement={"years"}
              />
              <InputFormData
                imperial
                setStateValue={setFeet}
                imperialSetStateValue={setInches}
                value={feet}
                imperialValue={inches}
                placeholder={"Feet"}
                imperialPlaceholder={"Inches"}
                minValue={4}
                maxValue={6}
                imperialMinValue={0}
                imperialMaxValue={11}
                measurement={"ft"}
                imperialMeasurement={"in"}
              />
              <InputFormData
                setStateValue={setWeight}
                value={weight}
                placeholder={"Weight"}
                minValue={100}
                maxValue={350}
                measurement={"lb"}
              />
              <InputFormData
                setStateValue={setDesiredWeight}
                value={desiredWeight}
                placeholder={"Desired Weight"}
                minValue={100}
                maxValue={300}
                measurement={"lb"}
              />
            </>
          ) : (
            <>
              <InputFormData
                setStateValue={setAge}
                value={age}
                placeholder={"Age"}
                minValue={18}
                maxValue={100}
                measurement={"years"}
              />
              <InputFormData
                setStateValue={setHeight}
                value={height}
                placeholder={"Height"}
                minValue={100}
                maxValue={240}
                measurement={"cm"}
              />
              <InputFormData
                setStateValue={setWeight}
                value={weight}
                placeholder={"Weight"}
                minValue={40}
                maxValue={150}
                measurement={"kg"}
              />
              <InputFormData
                setStateValue={setDesiredWeight}
                value={desiredWeight}
                placeholder={"Desired Weight"}
                minValue={30}
                maxValue={150}
                measurement={"kg"}
              />
            </>
          )}
          <BaseButton onClick={handleFunction} type="submit">
            SUBMIT
          </BaseButton>
        </FlexWrapper>
      </FormContainer>
    </MetricWrapper>
  );
};

const FormContainer = styled.form`
  width: 100%;
`;

// const INPUT_ARRAY = [{
//   setStateValue:setAge(),
//   value:age,
//   palceholder:"Age"
//   minValue:50,
//   maxValue:150,
//   measurement:"years"
//   id:"1"

// }]
