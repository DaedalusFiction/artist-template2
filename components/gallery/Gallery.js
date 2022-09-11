import { Box, Grid } from "@mui/material";
import React from "react";
import GalleryImage from "./GalleryImage";

const Gallery = ({ images }) => {
    return (
        <Box sx={{ padding: "3rem 0" }}>
            <Grid container spacing={2}>
                {images &&
                    images.length > 0 &&
                    images.map((image, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <GalleryImage image={image} />
                            </Grid>
                        );
                    })}
            </Grid>
        </Box>
    );
};

export default Gallery;
