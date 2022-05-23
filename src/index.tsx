import React, { StrictMode } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components/macro";
import { theme } from "styles/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "state/store";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin:0;
    }

    body {
        overflow:hidden auto;
    }
    html {
        font-family: ${theme.fontFamily.primary}
    }
`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {element}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
