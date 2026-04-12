import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight={800}
          fontSize="clamp(1.8rem, 3.2vw, 2.7rem)"
          sx={{
            letterSpacing: "0.1em",
            lineHeight: 1,
            background: `linear-gradient(120deg, ${theme.palette.primary.dark} 15%, ${theme.palette.primary.main} 85%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              theme.palette.mode === "dark"
                ? "0 0 28px rgba(0, 213, 250, 0.18)"
                : "0 4px 14px rgba(0, 107, 125, 0.15)",
          }}
        >
          SOCIOPEDIA
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
