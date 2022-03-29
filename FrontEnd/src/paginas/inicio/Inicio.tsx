import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducers';

import './Inicio.css';

function Inicio() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa1'>

                <Grid item xs={12} className="imgInicio">
                </Grid>

                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo1'><p>Seja bem-vinde!</p></Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" >
                        <Box>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botaoInicio'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Inicio;