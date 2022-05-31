import React, { useState, useEffect } from "react";
import { Box } from "components";
import styled, { keyframes } from "styled-components/macro";
import { navigate } from "gatsby";
import { Loader } from "components";

export const LoadingPage: React.FC = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setState(!state), 2900);

    return () => clearTimeout(timeout);
  }, []);

  if (state) {
    navigate("/checkout");
  }

  return (
    <Box>
      <LoadingBar>
        <Bar>
          <Progress></Progress>
        </Bar>
      </LoadingBar>
      <Loader />
    </Box>
  );
};

const animate = keyframes`
0% { width: 0; }
20% {
    width: 10%;
}

25% {
    width: 24%;
}

43% {
    width: 41%;
}

56% {
    width: 50%;
}

66% {
    width: 52%;
}

71% {
    width: 60%;
}

75% {
    width: 76%;
}

94% {
    width: 86%;
}

100% {
    width: 100%;
}
`;

const LoadingBar = styled(Box)`
  border-radius: 3.75rem;
  overflow: hidden;
  width: 100%;
`;

const Bar = styled.span`
  display: block;
  background: rgba(0, 0, 0, 0.075);
`;

const Progress = styled.span`
  display: block;
  animation: ${animate} 3s ease infinite;
  background: green;
  color: #fff;
  padding: 0.3125rem;
  width: 0;
`;
