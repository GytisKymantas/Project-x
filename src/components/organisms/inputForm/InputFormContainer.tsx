import React, { useState, useEffect } from "react";
import {
  FlexWrapper,
  InputFormData,
  MetricWrapper,
  QuizAnswer,
} from "components";
import { useDispatch } from "react-redux";
import { setUserData } from "state/slices/userDataSlice";
import styled from "styled-components/macro";
import { pageNext } from "state/slices/pageSlice";

export const InputFormContainer: React.FC = () => {
  const [age, setAge] = useState<string>("");
  const [desiredWeight, setDesiredWeight] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [feet, setFeet] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [ifImperial, setIfImperial] = useState(false);
  const [inches, setInches] = useState<string>("");
  const [userState, setUserState] = useState({
    age: null as unknown as string,
    desiredWeight: null as unknown as string,
    email: "",
    feet: null as unknown as string,
    height: null as unknown as string,
    inches: null as unknown as string,
    weight: null as unknown as string,
  });
  const [weight, setWeight] = useState<string>("");

  const dispatch = useDispatch();

  const handleFunction = () => {
    setUserState({
      age: age,
      desiredWeight: desiredWeight,
      email: email,
      feet: feet,
      height: height,
      inches: inches,
      weight: weight,
    });
  };

  const handleSystem = () => {
    setAge("");
    setDesiredWeight("");
    setEmail("");
    setFeet("");
    setHeight("");
    setIfImperial(!ifImperial);
    setInches("");
    setWeight("");
  };

  useEffect(() => {
    dispatch(setUserData(userState));
  }, [userState]);

  return (
    <MetricWrapper handleSystem={handleSystem} Imperial={ifImperial}>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(pageNext());
        }}
      >
        <FlexWrapper flexDirection="column" gap="1.5625rem" width="100%">
          {ifImperial ? (
            <>
              <InputFormData
                setStateValue={setAge}
                maxValue={100}
                measurement="years"
                minValue={18}
                placeholder="Age"
                type="number"
                value={age}
              />
              <InputFormData
                imperial
                imperialSetStateValue={setInches}
                imperialValue={inches}
                imperialMinValue={0}
                imperialMaxValue={11}
                imperialPlaceholder="Inches"
                imperialMeasurement="in"
                setStateValue={setFeet}
                maxValue={6}
                measurement="ft"
                minValue={4}
                placeholder="Feet"
                type="number"
                value={feet}
              />
              <InputFormData
                setStateValue={setWeight}
                minValue={100}
                measurement="lb"
                maxValue={350}
                placeholder="Weight"
                type="number"
                value={weight}
              />
              <InputFormData
                setStateValue={setDesiredWeight}
                minValue={100}
                measurement="lb"
                maxValue={300}
                placeholder="Desired Weight"
                type="number"
                value={desiredWeight}
              />
              <InputFormData
                setStateValue={setEmail}
                maxLength={50}
                minLength={3}
                measurement="email"
                placeholder="E-mail"
                type="email"
                value={email}
              />
            </>
          ) : (
            <>
              <InputFormData
                placeholder="Age"
                maxValue={100}
                measurement="years"
                minValue={18}
                setStateValue={setAge}
                type="number"
                value={age}
              />
              <InputFormData
                placeholder="Height"
                maxValue={240}
                measurement="cm"
                minValue={100}
                setStateValue={setHeight}
                type="number"
                value={height}
              />
              <InputFormData
                placeholder="Weight"
                maxValue={150}
                measurement="kg"
                minValue={40}
                setStateValue={setWeight}
                type="number"
                value={weight}
              />
              <InputFormData
                placeholder="Desired Weight"
                maxValue={150}
                measurement="kg"
                minValue={30}
                setStateValue={setDesiredWeight}
                type="number"
                value={desiredWeight}
              />
              <InputFormData
                placeholder="E-mail"
                maxLength={50}
                minLength={3}
                measurement="email"
                setStateValue={setEmail}
                type="email"
                value={email}
              />
            </>
          )}
          <QuizAnswer isSubmit onClick={handleFunction} type="submit">
            SUBMIT
          </QuizAnswer>
        </FlexWrapper>
      </FormContainer>
    </MetricWrapper>
  );
};

const FormContainer = styled.form`
  width: 100%;
`;
