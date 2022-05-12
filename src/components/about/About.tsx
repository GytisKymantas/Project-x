import React from "react";
import {
  SectionWrapper,
  GridWrapper,
  Box,
  FlexWrapper,
  Typography,
} from "components";
import { SectionHeader } from "components/sectionHeader/SectionHeader";
import { StaticImage } from "gatsby-plugin-image";

export const About = () => (
  <SectionWrapper id="about">
    <GridWrapper
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      gridTemplateRows={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      gap="40px"
      margin="50px"
    >
      <Box bg="blue">
        {/* <StaticImage
          src="../../assets/images/curl.png"
          alt="Woman curling"
          placeholder="tracedSVG"
          draggable="false"
        /> */}
      </Box>
      <Box margin="auto">
        <SectionHeader
          type="h2"
          header="What we do?"
          paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little gerret repair to desire he esteem."
        />
      </Box>
      <Box>
        <Typography color="primary">
          Wise busy past both park when an ye no. Nay likely her length sooner
          thrown sex lively income. The expense windows adapted sir. Wrong widen
          drawn ample eat off doors money. Offending belonging promotion
          provision an be oh consulted ourselves it. Blessing welcomed ladyship
          she met humoured sir breeding her. Six curiosity day assurance bed
          necessary.
          <br />
          <br />
          And produce say the ten moments parties. Simple innate summer fat
          appear basket his desire joy. Outward clothes promise at gravity do
          excited. Sufficient particular impossible by reasonable oh expression
          is. Yet preference connection unpleasant yet melancholy but end
          appearance. And excellence partiality estimating terminated day
          everything.
          <br />
          <br />
          Warmly little before cousin sussex entire men set. Blessing it
          ladyship on sensible judgment settling outweigh. Worse linen an of
          civil jokes leave offer. Parties all clothes removal cheered calling
          prudent her. And residence for met the estimable disposing. Mean if he
          they been no hold mr. Is at much do made took held help. Latter person
          am secure of estate genius at.
        </Typography>
      </Box>
      <Box bg="taxi"></Box>
    </GridWrapper>
  </SectionWrapper>
);
