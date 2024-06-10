import { Typography } from "@mui/material"

interface props{
    text:any;
}

const Text=({text}:props)=>{
    return(
        <>
        <Typography sx={{
              '@media(max-width : 1200px)':{
                fontSize:'17px'
              }
            }} fontSize={20}>{text}</Typography>
        </>
    )
}

export default Text