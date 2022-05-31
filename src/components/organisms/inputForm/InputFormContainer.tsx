import React, { useState, useEffect } from "react";
import {
  FlexWrapper,
  InputFormData,
  MetricWrapper,
  QuizAnswer,
} from "components";
import styled from "styled-components/macro";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { setUserData } from "state/slices/userDataSlice";

export const InputFormContainer: React.FC = () => {
  const [ifImperial, setIfImperial] = useState(false);
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [feet, setFeet] = useState<string>("");
  const [inches, setInches] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [desiredWeight, setDesiredWeight] = useState<string>("");
  const [userState, setUserState] = useState({
    age: null as unknown as string,
    height: null as unknown as string,
    weight: null as unknown as string,
    feet: null as unknown as string,
    inches: null as unknown as string,
    desiredWeight: null as unknown as string,
    email: "",
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
      email: email,
    });
  };

  const handleSystem = () => {
    setIfImperial(!ifImperial);
    setAge("");
    setHeight("");
    setFeet("");
    setInches("");
    setWeight("");
    setDesiredWeight("");
    setEmail("");
  };

  useEffect(() => {
    dispatch(setUserData(userState));
  }, [userState]);

  return (
    <MetricWrapper handleSystem={handleSystem} Imperial={ifImperial}>
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
                placeholder="Age"
                minValue={18}
                maxValue={100}
                measurement="years"
                type="number"
              />
              <InputFormData
                imperial
                setStateValue={setFeet}
                imperialSetStateValue={setInches}
                value={feet}
                imperialValue={inches}
                placeholder="Feet"
                imperialPlaceholder="Inches"
                minValue={4}
                maxValue={6}
                imperialMinValue={0}
                imperialMaxValue={11}
                measurement="ft"
                imperialMeasurement="in"
                type="number"
              />
              <InputFormData
                setStateValue={setWeight}
                value={weight}
                placeholder="Weight"
                minValue={100}
                maxValue={350}
                type="number"
                measurement="lb"
              />
              <InputFormData
                setStateValue={setDesiredWeight}
                value={desiredWeight}
                placeholder="Desired Weight"
                minValue={100}
                maxValue={300}
                type="number"
                measurement="lb"
              />
              <InputFormData
                setStateValue={setEmail}
                value={email}
                placeholder="E-mail"
                type="email"
                measurement="email"
              />
            </>
          ) : (
            <>
              <InputFormData
                setStateValue={setAge}
                value={age}
                placeholder="Age"
                minValue={18}
                maxValue={100}
                type="number"
                measurement="years"
              />
              <InputFormData
                setStateValue={setHeight}
                value={height}
                placeholder="Height"
                minValue={100}
                maxValue={240}
                type="number"
                measurement="cm"
              />
              <InputFormData
                setStateValue={setWeight}
                value={weight}
                placeholder="Weight"
                minValue={40}
                maxValue={150}
                type="number"
                measurement="kg"
              />
              <InputFormData
                setStateValue={setDesiredWeight}
                value={desiredWeight}
                placeholder="Desired Weight"
                minValue={30}
                maxValue={150}
                type="number"
                measurement="kg"
              />
              <InputFormData
                setStateValue={setEmail}
                value={email}
                placeholder="E-mail"
                type="email"
                measurement="email"
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
