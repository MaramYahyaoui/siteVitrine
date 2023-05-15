import { createTheme, lighten } from "@mui/material";

export const Colors = {
  //  primary: "#5f2c3e",
    primary:"#000000D1",
    secondary: "#d1adcc",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    danger2:"#FF5720",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    
    ///////////////
    // Grays
    ///////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    gray1:"#EFEFEF",
    light_gray: "rgb(230,230,230)",
    grayShop:'#EDEDED',
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
    blue:"#E6E6FA		",
  };

  const  theme= createTheme({
    palette:{
      primary:{
        main: Colors.primary
      },
      secondary:{
        main: Colors.secondary
      }

    },
    components: {
      MuiButton:{
        defaultProps:{
          disableRipple: true,
          disableElevation:true,
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width:250,          
            background: Colors.primary,
            color: Colors.secondary,
            borderRadius: '0px 100px 0px 0px',
            borderRight: `1px solid ${Colors.primary}`
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            
          }
        }
      },
    }
  });
  export default theme;
  