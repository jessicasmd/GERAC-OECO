import React from 'react';
import { Grid, Box, Typography, } from '@material-ui/core';
import './Ods.css';

function Ods() {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" className='titulo'><p>Água potável e saneamento</p></Typography>
                        
                        <Grid alignItems="center">
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='descricao'>

                                <b> Objetivo 6.</b> Assegurar a disponibilidade e gestão sustentável da água e saneamento para todas e todos<br></br><br></br>

                                <b>6.1</b> Até 2030, alcançar o acesso universal e equitativo a água potável e segura para todos<br></br><br></br>

                                <b>6.2</b> Até 2030, alcançar o acesso a saneamento e higiene adequados e equitativos para todos, e acabar com a defecação a céu aberto, com especial atenção para as necessidades das mulheres e meninas e daqueles em situação de vulnerabilidade<br></br><br></br>

                                <b>6.3</b> Até 2030, melhorar a qualidade da água, reduzindo a poluição, eliminando despejo e minimizando a liberação de produtos químicos e materiais perigosos, reduzindo à metade a proporção de águas residuais não tratadas e aumentando substancialmente a reciclagem e reutilização segura globalmente<br></br><br></br>

                                <b>6.4</b> Até 2030, aumentar substancialmente a eficiência do uso da água em todos os setores e assegurar retiradas sustentáveis e o abastecimento de água doce para enfrentar a escassez de água, e reduzir substancialmente o número de pessoas que sofrem com a escassez de água<br></br><br></br>

                                <b>6.5</b> Até 2030, implementar a gestão integrada dos recursos hídricos em todos os níveis, inclusive via cooperação transfronteiriça, conforme apropriado<br></br><br></br>

                                <b>6.6</b> Até 2020, proteger e restaurar ecossistemas relacionados com a água, incluindo montanhas, florestas, zonas úmidas, rios, aquíferos e lagos<br></br><br></br>

                                <b>6.a</b> Até 2030, ampliar a cooperação internacional e o apoio à capacitação para os países em desenvolvimento em atividades e programas relacionados à água e saneamento, incluindo a coleta de água, a dessalinização, a eficiência no uso da água, o tratamento de efluentes, a reciclagem e as tecnologias de reuso<br></br><br></br>

                                <b>6.b</b> Apoiar e fortalecer a participação das comunidades locais, para melhorar a gestão da água e do saneamento<br></br><br></br>

                                <a href="https://brasil.un.org/pt-br/sdgs" target="blank" className='text-decorator-none'><b>Os Objetivos de Desenvolvimento Sustentável no Brasil</b></a><br></br>
                                Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.<br></br><br></br>
                            </Typography>
                        </Grid>
                    </Box>
                    
                </Grid>
                <Grid xs={6} className='imgOds'>
                </Grid>
            </Grid>
        </>
    );
}

export default Ods;