import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import styles from "../../../styles/SignLong.module.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";

const SignLong = () => {
  return (
    <>
      <Grid>
        <Paper elevation={10} className={styles.Paper}>
          <Grid align="center">
            <Avatar className={styles.Avatar}>
              <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="UserName"
            className={styles.input}
            placeholder="Enter your UserName"
            fullWidth
            required
          ></TextField>
          <TextField
            label="Password"
            type="password"
            className={styles.input}
            placeholder="Enter your Password"
            fullWidth
            required
          ></TextField>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            sx={{
              color: blue[800],
              "&.Mui-checked": {
                color: blue[600],
              },
            }}
            label="Remenber me"
          />
         <Button color="primary" align="center" type="Submit" fullWidth className={styles.sumit}>Sign In</Button>
         <Typography>
            <Link href="/restorepassword">
                Forgot your password or UserName ?
            </Link>
         </Typography>
         <Typography>Do you have an account ?
            <Link href="/signup">
                Sign Up
            </Link>
         </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default SignLong;
