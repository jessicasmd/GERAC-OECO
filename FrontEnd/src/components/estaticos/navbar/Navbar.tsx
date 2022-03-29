import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducers';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import './Navbar.css'
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense" className='nave'>
                <Box className="geracao">
                    <Typography variant="h3" color="inherit"  className='name'>
                        Geração Eco
                    </Typography>
                </Box>

                <Link to='/inicio' className='text-decorator-none'>
                    <Box mx={4} className='cursor'>
                        <Typography variant="h6" color="inherit"  >
                            Início
                        </Typography>
                    </Box>
                </Link>

                <Link to='/tema' className='text-decorator-none'>
                    <Box mx={4} className='cursor'>
                        <Typography variant="h6" color="inherit"  >
                            Temas
                        </Typography>
                    </Box>
                </Link>

                <Link to='/formularioTema' className='text-decorator-none'>
                    <Box mx={4} className='cursor'>
                        <Typography variant="h6" color="inherit"  >
                            Cadastrar tema
                        </Typography>
                    </Box>
                </Link>

                <Link to='/sobre' className='text-decorator-none'>
                    <Box mx={4} className='cursor'>
                        <Typography variant="h6" color="inherit"  >
                            Sobre nós
                        </Typography>
                    </Box>
                </Link>

                <Link to='/ods' className='text-decorator-none'>
                    <Box mx={4} className='cursor'>
                        <Typography variant="h6" color="inherit"  >
                            ODS 6?
                        </Typography>
                    </Box>
                </Link>

                <Link to='/contato' className='text-decorator-none'>
                    <Box mx={4} className='cursor'>
                        <Typography variant="h6" color="inherit"  >
                            Contato
                        </Typography>
                    </Box>
                </Link>

                <Link to='/login' className='text-decorator-none'>
                    <Box mx={4} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit"  >
                            Logout
                        </Typography>
                    </Box>
                </Link>



            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;