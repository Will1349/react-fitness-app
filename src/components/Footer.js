import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/LogoFinal.png';

const Footer = () => (
    <Box
        mt="80px"
        bgcolor="#FFF3F4"
    >

        <Stack
            gap="40px"
            sx={{
                alignItems: 'center',
            }}
            flexWrap="wrap"
            px="20px"
            pt="10px"
        >

            <img
                src={Logo}
                alt="logo"
                style={{
                    width: '30px',
                    height: '30px',
                }}
            />
        </Stack>

        <Typography
            variant="h3"
            sx={{
                fontSize: {
                    lg: '14px',
                    xs: '10px',
                },
            }}
            mt="41px"
            textAlign="center"
            pb="40px"
        >
            <strong> Fitness App </strong> Made by Willams Abad
        </Typography>
    </Box>
);

export default Footer;
