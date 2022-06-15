import Head from "next/head";
import React from "react";
import { Header, Container, NavBar, Main, Footer } from "./LayoutComponents";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Главная"}</title>
      </Head>
      <Header>
        <Container>
          <NavBar></NavBar>
        </Container>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <Container></Container>
      </Footer>
    </>
  );
};

export default Layout;
