import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store/store';

import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import Inicio from './paginas/inicio/Inicio';
import Contato from "./paginas/contato/Contato";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Ods from './paginas/ods/Ods';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/cadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <ToastContainer />
      <Navbar />
      <Switch>

        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/inicio'>
            <Inicio />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/ods'>
            <Ods />
          </Route>

          <Route path='/contato'>
            <Contato />
          </Route>


          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path="/tema">
            <ListaTema />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>

          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

          <Route path='/posts'> 
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>

          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
