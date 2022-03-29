import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import "./Sobre.css"
import { TokenState } from "../../store/tokens/tokensReducers";

function Sobre() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
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


    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6} >
                    <Box paddingX={10}>
                        <Typography variant="h3" gutterBottom component="h3" align="center" className="titulosobre" >Projeto Integrador</Typography>
                        <Typography variant="h4" gutterBottom component="h4" align="center" className="titulosobre">Nosso propósito</Typography>
                        <Typography variant="h6" gutterBottom align="center"> O projeto busca ampliar a mentalidade de cada morador sobre a poluição urbana, ameaça a saúde pública, perda de produtividade e renda devido à falta de saneamento básico que acarretam doenças infecciosas. Além disso, unir a participação dos moradores com ONGs que lidam com saneamento básico e água potável, fazendo uma ponte com os órgãos públicos responsáveis por essa problemática e acompanhar a tratativa para sinalizar o que está sendo feito.</Typography>
                    </Box>
                </Grid>

                <Box m={5}>
                    <Grid item xs={6}>
                        <img width="400px" height="400px" src="https://imgur.com/CzotpFA.png" alt="" />
                    </Grid>
                </Box>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={10} xs={10} >
                    <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center">
                        <Typography className="titulosobre" variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >
                            Idealizadores do Projeto
                        </Typography>

                        <Box display="flex" justifyContent="space-around" alignItems="center">

                            <Grid item md={3} xs={10} >
                                <Box className='margemSobre' justifyContent='center'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                                            <img className="foto" src="https://avatars.githubusercontent.com/u/95725748?v=4" alt="[foto Beatriz Santos]" />
                                        </Box>
                                        <Typography className="nomessobre">
                                            Beatriz Santos
                                        </Typography>
                                        <div id="show">
                                            <Typography className="subtitulo" gutterBottom>
                                                <i>Sobre mim:</i>
                                            </Typography>
                                            <Typography className="textoSobre">
                                                <i>Sou uma pessoal comunicativa, dinâmica, tendo facilidade para assimilar e integrar novos conceitos e 
                                                desenvolver trabalho em equipe. Tenho como objetivo de expandir meus conhecimentos, de adquirir novas
                                                habilidades e desenvolver meu lado criativo. Tudo que a área da tecnologia me proporciona. 
                                                </i> 
                                            </Typography>
                                        </div>
                                    </div>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <a href="https://github.com/BiaSa3s" target="_blank" rel="noreferrer">
                                            <GitHubIcon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/beatriz-santos-s%C3%A1" target="_blank" rel="noreferrer">
                                            <LinkedInIcon className="icons" />
                                        </a>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item md={3} xs={10} >
                                <Box className='margemSobre' justifyContent='center'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                                            <img className="foto" src="https://avatars.githubusercontent.com/u/86629378?v=4" alt="[foto Bruna Verrone]" />
                                        </Box>
                                        <Typography className="nomessobre">
                                            Bruna Verrone
                                        </Typography>
                                        <div id="show">
                                            <Typography className="subtitulo" gutterBottom>
                                                <i>Sobre mim:</i>
                                            </Typography>
                                            <Typography className="textoSobre">
                                                <i>Sou formada em Comércio Exterior e tenho uma breve experiência na área. Sou proativa,
                                                organizada, decidida e sempre em busca de aprender e aprimorar meus conhecimentos!
                                                </i> 
                                            </Typography>
                                        </div>
                                    </div>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <a href="https://github.com/verronebruna" target="blank" rel="noreferrer" >
                                            <GitHubIcon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/verronebruna/" target="blank" rel="noreferrer">
                                            <LinkedInIcon className="icons" />
                                        </a>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item md={3} xs={10} >
                                <Box className='margemSobre' justifyContent='center'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                                            <img className="foto" src="https://avatars.githubusercontent.com/u/94875485?v=4" alt="[foto Jessica Dias]" />
                                        </Box>
                                        <Typography className="nomessobre">
                                            Jéssica Dias
                                        </Typography>
                                        <div id="show">
                                            <Typography className="subtitulo" gutterBottom>
                                                <i>Sobre mim:</i>
                                            </Typography>
                                            <Typography className="textoSobre">
                                                <i>Sou uma pessoa apaixonada por tecnologia e gosto muito de aprender, e tenho como principais
habilidades trabalho em equipe e proatividade.</i>
                                            </Typography>
                                        </div>
                                    </div>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <a href="https://github.com/jessicasmd" target="blank" rel="noreferrer">
                                            <GitHubIcon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/j%C3%A9ssica-souza-mendes-dias-a126a2118/" target="blank" rel="noreferrer">
                                            <LinkedInIcon className="icons" />
                                        </a>
                                    </Box>
                                </Box>
                            </Grid>
                            </Box>

                            <Box display="flex" justifyContent="space-around">

                            <Grid item md={3} xs={10} >
                                <Box className='margemSobre' justifyContent='center'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                                            <img className="foto" src="https://avatars.githubusercontent.com/u/70922914?v=4" alt="foto Kaciany Ramos" />
                                        </Box>
                                        <Typography className="nomessobre">
                                            Kaciany Ramos
                                        </Typography>
                                        <div id="show">
                                            <Typography className="subtitulo" gutterBottom>
                                                <i>Sobre mim:</i>
                                            </Typography>
                                            <Typography className="textoSobre">
                                                <i>Fascinada por tecnologia desde a adolescência sempre quis entender como ela funciona, e essa curiosidade de aprender fez com que eu entrasse em uma jornada atrás de conhecimento suficiente para me tornar uma pessoa desenvolvedora, capaz de usar todas minhas habilidades para desenvolver coisas novas, hoje busco uma oportunidade que me proporcione não só crescimento profissional, mas também onde eu possa compartilhar todo meu aprendizado.</i> 
                                                 </Typography>
                                        </div>
                                    </div>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <a href="https://github.com/Kaciany" target="blank" rel="noreferrer">
                                            <GitHubIcon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/kaciany-jesus-89bb02192/" target="blank" rel="noreferrer">
                                            <LinkedInIcon className="icons" />
                                        </a>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item md={3} xs={10} >
                                <Box className='margemSobre' justifyContent='center'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                                            <img className="foto" src="https://avatars.githubusercontent.com/u/95705850?v=4" alt="foto Natália Ferreira" />
                                        </Box>
                                        <Typography className="nomessobre">
                                            Natália Ferreira
                                        </Typography>
                                        <div id="show">
                                            <Typography className="subtitulo" gutterBottom>
                                                <i>Sobre mim:</i>
                                            </Typography>
                                            <Typography className="textoSobre">
                                                <i>A Minha paixão por programação começou durante o curso técnico em automação industrial. Lá fiz meu TCC voltado ao backend, mas a vontade de entender como ajudar os usuários me despertou para o frontend,  o que apliquei no projeto me destacando como tester. No bootcamp eu usei a persistência programando e percebi o quanto aprender com a minha equipe é essencial.</i> 
                                            </Typography>
                                        </div>
                                    </div>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <a href="https://github.com/nataliahisf" target="blank" rel="noreferrer">
                                            <GitHubIcon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/natalia--ferreira/" target="blank" rel="noreferrer">
                                            <LinkedInIcon className="icons" />
                                        </a>
                                    </Box>
                                </Box>
                            </Grid>

                    <Grid item md={3} xs={10} >
                                <Box className='margemSobre' justifyContent='center'>
                                    <div id="mouse">
                                        <Box display="flex" justifyContent="center" >
                        <img className="foto" src="https://media-exp1.licdn.com/dms/image/C4D03AQEZqCs3tjj-tg/profile-displayphoto-shrink_800_800/0/1647639693498?e=1653523200&v=beta&t=fjQ6dqb1-hzCZjrav1WN4bu4tdKxC1D3495100ri6pk" alt="[foto Vinícius Barbosa]" />

                        </Box>
                                        <Typography className="nomessobre">
                                Vinícius Barbosa
                            </Typography>
                                        <div id="show">
                                            <Typography className="subtitulo" gutterBottom>
                                                <i>Sobre mim:</i>
                                            </Typography>
                                            <Typography className="textoSobre">
                                                <i>Uma pessoa com identidade não-binária que usa qualquer pronome (ele, ela, elu).<br></br>
Já fui Analista de Atendimento Bilíngue Jr e Agente de Suporte, atuei em projetos como implementação de suporte pelo WhatsApp, integração de uma filial da SumUp em São José dos Campos e hoje - além de ser Assistente Especializado III - sou uma pessoa formada em desenvolvimento web Java Fullstack Jr e busco adentrar na área da tecnologia em empresas com diversidade. Adoro ter novas ideias, decisões em time e muitas mão na massa! </i> 
                                            </Typography>
                                        </div>
                                    </div>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/vvvvinicius" target="blank" rel="noreferrer">
                                <GitHubIcon className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/vin%C3%ADcius-barbosa-a4355aa8/" target="blank" rel="noreferrer">
                                <LinkedInIcon className="icons" />
                            </a>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;