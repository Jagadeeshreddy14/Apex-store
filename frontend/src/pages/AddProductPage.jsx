import React from 'react';
import { Navbar } from '../features/navigation/components/Navbar';
import { AddProduct } from '../features/admin/components/AddProduct';
import { Box, Container, Typography, useTheme } from '@mui/material';

export const AddProductPage = () => {
    const theme = useTheme();

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.background.default})`, // Gradient background
                    minHeight: '100vh', // Full height
                    paddingTop: '4rem', // Space for Navbar
                    paddingBottom: '2rem', // Bottom padding
                }}
            >
                <Container maxWidth="md">
                    {/* Page Title */}
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.primary.dark,
                            textAlign: 'center',
                            marginBottom: '2rem', // Space below the title
                        }}
                    >
                        Add New Product
                    </Typography>

                    {/* AddProduct Component */}
                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.paper, // White background
                            borderRadius: '12px', // Rounded corners
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
                            padding: '2rem', // Inner spacing
                        }}
                    >
                        <AddProduct />
                    </Box>
                </Container>
            </Box>
        </>
    );
};