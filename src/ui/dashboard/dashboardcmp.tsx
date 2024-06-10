"use client"
import { Box, Grid } from "@mui/material";
import DashboardSidebar from "../shared/dashboardSidebar";
import Sidebardb from "./sidebardb";
import Dsboard from "./dsboard";

const Dashboardcmp = () => {
    return (
        <>
            <Box
                sx={{ backgroundColor: '#080808' }}>
                <Grid container spacing={0}>
                    <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
                        <Box sx={{'@media(max-width : 900px)':{display:'none'}}}>
                        <Sidebardb />
                        </Box>
                    </Grid>
                    <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
                        <Dsboard />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboardcmp;