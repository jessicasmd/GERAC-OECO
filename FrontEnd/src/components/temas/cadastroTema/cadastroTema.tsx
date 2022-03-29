import { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducers';
import './cadastroTema.css';


function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<string>("")
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: '',
        tipo_assistencia: ''
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Para acessar, faça login.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }


    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso!', {
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
        back()

    }

    function back() {
        history.push('/tema')
    }

    return (
        <Container maxWidth="sm" className="fundocaixa">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className="cadastrotema">Tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Nome do tema" variant="outlined" name="descricao" margin="normal" placeholder="Insira um nome para o novo tema" fullWidth required />
                <TextField value={tema.tipo_assistencia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tipo_assistencia" label="Tipo de assistência" variant="outlined" name="tipo_assistencia" margin="normal" placeholder="Informe se é ONG ou Membro da Comunidade" fullWidth required />
                <Button type="submit" variant="contained" className="btFinalizar">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema; 