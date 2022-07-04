import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../../../styles/Layout.module.css";

const DrawComp = () => {
  const [openDrawer, setDrawer] = useState(false);
  const PAGES_DRAW = ["HOME", "About Us", "Contact", "Services", "LOGIN ", "SIGN UP "]

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setDrawer(false)}>
        <List>
            {
                PAGES_DRAW.map((page, index) => (
                  <>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemText onClick={() => setDrawer(!openDrawer)} key={index}>{page}</ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                  </>
                ))
              }
        </List>
      </Drawer>
      <IconButton
        className={styles.menu}
        onClick={() => setDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawComp;
