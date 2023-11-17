import './index.css'
import React from 'react'

import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import LogIn from './screens/LogIn'
import Recuperar from './screens/Recuperar'
import Recuperado from './screens/Recuperado'
import User from './screens/User'
import Salas from './screens/Salas'
import Categorias from './screens/Categorias'
import SalasEspecificas from './screens/SalasEspecificas'
import Sala from './screens/Sala'
import Produtos from './screens/Produtos'
import Produto from './screens/Produto'
import EmFalta from './screens/EmFalta'
import Requisitar from './screens/Requisitar'
import Requisicao from './screens/Requisição'
import CriarCategoria from './screens/Administracao/CriarCategoria'
import CriarProduto from './screens/Administracao/CriarProduto'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/logIn',
      element: <LogIn/>
    },
    {
      path: '/recuperar',
      element: <Recuperar/>
    },
    {
      path: '/recuperado',
      element: <Recuperado/>
    },
    {
      path: '/user',
      element: <User/>
    },
    {
      path: '/salas',
      element: <Salas/>
    },
    {
      path: '/categorias',
      element: <Categorias/>
    },
    {
      path: '/emFalta',
      element: <EmFalta/>
    },
    {
      path: '/requisitar',
      element: <Requisitar/>
    },
    {
      path: '/salasEspecificas/:letra', // Alterado para aceitar um parâmetro de letra
      element: <SalasEspecificas />,
    },
    {
      path: '/sala/:sala_id', // Alterado para aceitar um parâmetro de sala
      element: <Sala />,
    },
    {
      path: '/produtos',
      element: <Produtos/>
    },
    {
      path: '/produto/:produto_id',  // Define uma rota parametrizada para o produto
      element: <Produto />
    },
    {
      path: '/Requisicao/:id',
      element: <Requisicao/>
    },
    {
      path: '/criarCategoria',
      element: <CriarCategoria/>
    },
    {
      path: '/criarProduto',
      element: <CriarProduto/>
    },
    {
      path: '/produtos/:categoria_id', // Define a parameterized route for category
      element: <Produtos />
    },
    {
      path: '/criarProduto/:categoria_id', // Define a parameterized route for category
      element: <CriarProduto />
    },
  ]
)
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
