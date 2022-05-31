import React from "react";
import {
  SectionWrapper,
  GridWrapper,
  Box,
  Typography,
  SectionHeader,
  Image,
} from "components";
import { mobile } from "styles/breakpoints";

export const About: React.FC = () => (
  <SectionWrapper id="About">
    <GridWrapper
      gridTemplateColumns={{ _: "1fr", desktop: "repeat(2,1fr)" }}
      gridTemplateRows={{ _: "1fr", desktop: "repeat(2,1fr)" }}
      gap="2.5rem"
      margin={{ _: "s16", ltablet: "s50" }}
      textAlign={{ _: "justify", ltablet: "unset" }}
    >
      <Box m="s0auto">
        <Image src="girlpost" />
      </Box>
      <Box m="auto" width="80%">
        <SectionHeader
          type="h2"
          header="What we do?"
          paragraph="Changing lives since 2020!"
        />
      </Box>
      <Box width="80%" m="auto">
        <Typography color="primary" textAlign="justify">
          Wise busy past both park when an ye no. Nay likely her length sooner
          thrown back lively income. The expense <b>Windows</b> adapted sir.
          Wrong widen drawn ample eat off doors money. Offending belonging
          promotion provision an be oh consulted ourselves it. Blessing welcomed
          ladyship she met humoured sir breeding her. Six curiosity day
          assurance bed necessary.
          <br />
          <br />
          And produce say the ten moments parties. Simple innate summer fat
          appear basket his desire joy. Outward clothes promise at gravity do
          excited. Sufficient particular <b>impossible</b> by reasonable oh
          expression is. Yet preference connection unpleasant yet melancholy but
          end appearance. And excellence partiality estimating terminated day
          everything.
          <br />
          <br />
          Warmly little before cousin sussex entire men set. <b>Blessing</b> it
          ladyship on sensible judgment settling outweigh. Worse linen an of
          civil jokes leave offer. Parties all clothes removal cheered calling
          prudent her. And residence for met the estimable disposing. Mean if he
          they been no hold mr. Is at much do made took held help. Latter person
          am secure of estate genius at.
        </Typography>
      </Box>
      <Box m="auto">
        <Image src="spiral" />
      </Box>
    </GridWrapper>
  </SectionWrapper>
);
