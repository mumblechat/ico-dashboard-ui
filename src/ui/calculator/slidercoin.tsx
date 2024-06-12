"use client"
import { Box, Grid, InputBase, Slider, TextField, Typography, styled, useTheme } from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'red',
    padding: "1.5rem",
    borderRadius: '12px',
    '@media(max-width : 600px)': {
        padding: "1rem",
        marginTop: '0.8rem'
    }
}));

const ListBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem'
}));

const StyledSlider = styled(Slider)(
    ({ theme }) => `
    .MuiSlider-root {
        background-color: #fff !important;
        padding:16px
      }
    .MuiSlider-rail {
      background: linear-gradient(90deg, #080808, #00FFFF);
      padding:12px
    }
      
    .MuiSlider-track {
      background: linear-gradient(0deg, #fff, #fff);
       
    }
    .MuiSlider-thumb {
        background: linear-gradient(0deg, #00FFFF, #00FFFF);
        padding:20px
      }
  `
);

const Slidercoin = () => {

    const [value, setValue] = useState<number[]>([10,]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <>
            <Box mt={4}>





                <Box sx={{
                    display: 'flex', justifyContent: 'space-between',
                    gap: '1rem',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>
                    <StyledSlider
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="range-slider"
                        min={0}
                        max={100}
                        sx={{
                            backgroundColor: '#101012',
                            border: '1px solid #1D1D20',
                            borderRadius: '30px',
                            '&.Mui-active': {
                                boxShadow: '0 0 0 14px rgba(0, 0, 255, 0.16)', // Change this to your desired active color
                            },
                        }}
                    />
                    {/* <Typography color={'#fff'}>{value}%</Typography> */}

                </Box>
                <Box textAlign={'center'}><Typography color={'#fff'}>Move the slider to see how much your MMCT will be worth at different price targets!</Typography></Box>
            </Box>
        </>
    )
}

export default Slidercoin;