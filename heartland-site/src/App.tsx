import React from 'react';
import FlexDiv from 'common/flex-div';
import NavBar from './container/responsive-nav';
import HeaderBar from './container/header-bar';
import { WhiteRedTheme } from 'common/colors';
import {BrowserRouter, Link} from 'react-router-dom';
import FooterBar from './container/footer-bar';
import { ThemeProvider } from '@material-ui/styles';
import PageContainer from './container/page-container';

export default () => {
  return (
        <FlexDiv
          id="AppContainer"
          flexDirection="column"
          alignItems="center"
          style={{
            paddingTop: '0',
            minHeight: '100vh',
          }}
        >
          <ThemeProvider theme={WhiteRedTheme}>
            <BrowserRouter
              basename="/"
            >
              <HeaderBar/>
              <NavBar/>
              <PageContainer/>
              <FooterBar/>
            </BrowserRouter>
          </ThemeProvider>
        </FlexDiv>
  );
};