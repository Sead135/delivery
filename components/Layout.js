import {
  AppBar,
  Link,
  Toolbar,
  Button,
  Box,
  List,
  ListItem,
} from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import React, { useEffect, useCallback, useState } from "react";
import NextLink from "next/link";
import { classes } from "../utils/classes";

const Layout = ({ children }) => {

  return (
    <>
      <Head></Head>
      <AppBar position="sticky">
        <Container>
          <Toolbar disableGutters component="nav" sx={classes.navBar}>
            <NextLink href="/" passHref>
              <Link
                underline="none"
                color="text.light"
                sx={{ fontWeight: 700, padding: 0 }}
              >
                Какая-то доставка
              </Link>
            </NextLink>
            <Button variant="outlined" color="secondary">
              Корзина
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container component="main" sx={{ height: 1000 }}>
        {children}
      </Container>
      <Container component="footer"></Container>
    </>
  );
};

export default Layout;
