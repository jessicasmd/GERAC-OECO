import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducers';

import './Footer.css';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" spacing={0} className='footer'>
            <Grid alignItems="center" item xs={3}>
                <Box display="flex" paddingTop={2} className="imgfooter">
                    <img src='https://i.imgur.com/KkOU0Fk.png' alt="" width="50%" height="auto" />
                </Box>
            </Grid>
            <Grid alignItems="center" item xs={3}>
                <Box className='textofooter'>
                    <Typography variant="subtitle2">Projeto realizado durante o</Typography>
                    <Typography variant="subtitle2">Bootcamp da Generation Brasil</Typography>
                    <Box display="flex" paddingTop={2}>
                        <Typography variant="subtitle2">Veja o Geração Eco no GitHub </Typography>
                        <a href="https://github.com/geracao-ECO" target="_blank">
                            <GitHubIcon className="icon" />
                        </a>
                    </Box>
                </Box>
            </Grid>
            <Grid alignItems="center" item xs={3} >
                <Box className='textofooter'>
                    <Typography variant="subtitle2">Entre em contato conosco</Typography>
                    <a href="mailto:projetoodsgeracaoeco@gmail.com" target="_blank">
                        <EmailIcon className='icon2' />
                    </a>
                </Box>
            </Grid>
            <Grid alignItems="center" item xs={3}>
                <Box className='textofooter'>
                <Typography variant="subtitle2"> Geração Eco e Generation Brasil</Typography>
                    <Typography variant="subtitle2">© 2022 Copyright</Typography>
                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;