import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../../styles/Layout.module.css";
import DrawComp from "./DrawComp";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const NavBar = () => {
  const PAGES = ["HOME", "About Us", "Contact", "Services"]
  const [tabs, setTabs] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className={styles.bar}>
      <Toolbar>
        <Typography>
          <AutoStoriesIcon></AutoStoriesIcon>
        </Typography>
        {isMatch ? (
          <>
            <Typography className={styles.res}>Tritter</Typography>
            <DrawComp />
          </>
        ) : (
          <>
            <Tabs
              variant="h6"
              color="initial"
              className={styles.tabs}
              value={tabs}
              onChange={(e, tabs) => setTabs(tabs)}
              indicatorColor="secondary"
            >
              {
                PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))
              }
            </Tabs>

            <Button
              variant="contained"
              className={styles.btn}
              sx={{ marginLeft: "auto" }}
            >
              Login{" "}
            </Button>
            <Button
              variant="contained"
              className={styles.btn}
              sx={{ marginLeft: "10px" }}
            >
              Sign Up{" "}
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
