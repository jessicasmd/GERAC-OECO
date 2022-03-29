import React, { ChangeEvent, useState, useEffect } from "react";
import {Grid, Box, Typography, TextField, Button} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import {login} from "../../services/Services";
import UserLogin from "../../models/UserLogin";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";

import "./Login.css";

function Login(){
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const[userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
        useEffect(() => {
            if(token != ''){
                dispatch(addToken(token));
                history.push ('/inicio')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
           await login(`/usuario/logar`, userLogin, setToken)

           toast.success('Usuário logado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
        }catch(error){
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='fundo'>
            <Grid xs={6} alignItems="center">
                <Box paddingX={20} >
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textosLogin">Entrar</Typography>
                        <TextField
                        value={userLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                        id="usuario"
                        label="Usuário"
                        variant="outlined"
                        name="usuario"
                        margin="normal"
                        fullWidth
                        required
                        placeholder="Insira o e-mail cadastrado"
                        />

                        <TextField
                        value={userLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                        id="senha"
                        label="Senha"
                        variant="outlined"
                        name="senha"
                        margin="normal"
                        type="password"
                        fullWidth
                        required
                        placeholder="Insira a senha cadastrada"
                        />

                        <Box marginTop={2} textAlign="center">
                            <Button type="submit" variant="contained" color="primary" className="botaoLogin">
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                        <Typography variant="subtitle1" gutterBottom align="center" className="textcadastrese">Cadastre-se</Typography>
                        </Link>
                        </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;