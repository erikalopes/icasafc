
import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import history from './history';
import HomePage from './components/HomePage';
import Tabelas from './components/StickyHeadTable';
import ImageGridList from './components/ImageGridList';
import News from './components/News';
import Midia from './components/Midia';
//AQUI ADICIONA TODAS OS COMPONENTES QUE VÃO SER RENDERIZADOS.
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        {/**exact é pra dizer que o componente só pode renderizar na path especificada */}
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/home'} component={HomePage} />
        <Route exact path={'/Tabelas'} component={Tabelas} />
        <Route exact path={'/ImageGridList'} component={ImageGridList} />
        <Route exact path={'/Midia'} component={Midia} />
        <Route exact path={'/Noticia'} component={News} />
      </Switch>
    </Router>
  );
}
