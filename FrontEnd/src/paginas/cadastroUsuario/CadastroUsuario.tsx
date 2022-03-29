import {useState, useEffect, ChangeEvent } from 'react';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Services';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    
    
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            tipo_usuario: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            tipo_usuario: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
            console.log (userResult)
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

             setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senha && user.senha.length >= 8){
        cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
        toast.success('Usuario cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
        }else{
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!', {
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
        <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo' >
            <Grid item xs={6} className='imagem'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth required/>
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth placeholder= "Insira um e-mail válido" required/>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder="Insira no mínimo 8 caracteres" required />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}id='confirmarSenha' label='Confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth placeholder="Insira no mínimo 8 caracteres" required />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='foto' label='Foto' variant='outlined' name='foto' margin='normal' placeholder="Insira o URL da foto (Opcional)" fullWidth />
                        <TextField value={user.tipo_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='tipo_usuario' label='Tipo de usuário' variant='outlined' name='tipo_usuario' margin='normal' placeholder="Insira o tipo de usuário (ONG ou Membro da comunidade)" required fullWidth />


                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className="botaoCadastro">
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;