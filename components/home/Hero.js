import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import { pages, siteName, heroContent } from "../../siteInfo";
import Header from "../layout/Header";
import SocialMediaIcons from "../general/SocialMediaIcons";

const heroImage = "/images/hero.webp";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
  url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 5%",
            }}
        >
            <Header light />
            <Container maxWidth="lg">
                <Box sx={{ padding: "35vh 0" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            marginBottom: ".25em",
                            color: lightTheme.palette.custom.light,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {siteName}
                    </Typography>
                    {/* <Typography
                        variant="h5"
                        sx={{
                            color: lightTheme.palette.custom.lightMuted,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {heroContent.secondaryText}
                    </Typography> */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: ".5em",
                            margin: "1em 0",
                            justifyContent: { xs: "center", md: "left" },
                        }}
                    >
                        <Link href={heroContent.buttonOne.href}>
                            <Button
                                size="large"
                                variant={heroContent.buttonOne.variant}
                            >
                                {heroContent.buttonOne.text}
                            </Button>
                        </Link>
                    </Box>
                    <SocialMediaIcons color="primary" fontSize="30px" />
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
