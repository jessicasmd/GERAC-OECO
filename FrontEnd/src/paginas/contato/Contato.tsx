import React from 'react';
import {Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import './Contato.css';


function Contato() {
    return (
        <Grid container direction="row" justifyContent='center' alignItems='center'>
            <Grid alignItems='center'xs={8}>
                <Box paddingX={20}>
                     <form>
                        <Typography variant='h3' gutterBottom color= 'textPrimary' component='h3' align= 'center' className="textos1"><br></br>Entre em contato</Typography>

                        <Typography gutterBottom color= 'textPrimary' component='h6' align= 'left' className="textos2">Nome</Typography>
                        <TextField variant="outlined" fullWidth/>

                        <Typography gutterBottom color= 'textPrimary' component='h6' align= 'left' className="textos2"><br></br>E-mail</Typography>
                        <TextField variant="outlined" fullWidth/>

                        <Typography gutterBottom color= 'textPrimary' component='h6' align= 'left' className="textos2"><br></br>Assunto</Typography>
                        <TextField multiline rows={4} variant="outlined" fullWidth/>
 
                        <Box marginTop={1} textAlign='center'>
                            <Link to= '/contato' className= "text-decorator-none">
                                <Button type='submit' variant='contained' color='primary' className="botaoContato">
                                    enviar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={3} className="imgContato" >
            </Grid>
            <Grid xs={12}>
            </Grid>
        </Grid>

    );
}

export default Contato;