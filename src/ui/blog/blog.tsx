import { Box, Grid } from "@mui/material"
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({

    MainBox:{
        
    }

});

const Blog = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.MainBox}></Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Blog