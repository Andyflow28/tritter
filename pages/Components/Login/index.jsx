import Layout from "../Layout";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";

const Login = () => {

    return(
        <Layout>
            <Container>
        <Grid container direction="column" rowSpacing={3} justifyContent="flex-end" alignItems="center">
            <Grid item>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item>
                <Button variant="contained">Contained</Button>
            </Grid>
        </Grid>
    </Container>
        </Layout>
    )
    
}

export default Login;
