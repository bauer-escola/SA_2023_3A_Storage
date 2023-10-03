import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// telas
import { Login } from '../../screens/Login'
import { SignUp } from '../../screens/SignUp'
import { TabRoutes } from '../bottomTabs/app.route'
import {Salas} from '../../screens/Salas'
import {Categorias} from '../../screens/Categorias'
import {EmFalta} from '../../screens/EmFalta'
import {SalasEspecificas} from '../../screens/SalasEspecificas'
import {CategoriaEspecifica} from '../../screens/CategoriaEspecifica'
import {Sala} from '../../screens/Sala'
import {Product} from '../../screens/Product'
import { HistoricoRequisicao } from '../../screens/HistoricoRequisicao';
import { Recuperar } from '../../screens/Recuperar';
import { Requisitar } from '../../screens/Requisitar';
import { ProdutoRequisitado } from '../../screens/ProdutoRequisitado';
import { Recuperado } from '../../screens/Recuperado';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes () {
  return(
    <Navigator 
    initialRouteName='Login'>
      <Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
      />
       <Screen
      name="Routes"
      component={TabRoutes}
      options={{
        headerShown: false,
      }}
      />
       <Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown: false,
      }}
      />

      <Screen 
        name="Salas"
        component={Salas}
        options={{
          headerShown: false,
        }}
      />

      <Screen 
        name="Categorias"
        component={Categorias}
        options={{
          headerShown: false,
        }}
      />

      <Screen 
        name="EmFalta"
        component={EmFalta}
        options={{
          headerShown: false,
        }}
      />
      <Screen 
        name="SalasEspecificas"
        component={SalasEspecificas}
        options={{
          headerShown: false,
        }}
      />
      <Screen 
        name="CategoriaEspecifica"
        component={CategoriaEspecifica}
        options={{
          headerShown: false,
        }}
      />
      <Screen 
        name="Sala"
        component={Sala}
        options={{
          headerShown: false,
        }}
      />
       <Screen 
        name="Product"
        component={Product}
        options={{
          headerShown: false,
        }}
      />
       <Screen 
        name="HistoricoRequisicao"
        component={HistoricoRequisicao}
        options={{
          headerShown: false,
        }}
      />
       <Screen 
        name="Recuperar"
        component={Recuperar}
        options={{
          headerShown: false,
        }}
      />
       <Screen 
        name="ProdutoRequisitado"
        component={ProdutoRequisitado}
        options={{
          headerShown: false,
        }}
      />
       <Screen 
        name="Requisitar"
        component={Requisitar}
        options={{
          headerShown: false,
        }}
      />
       <Screen 
        name="Recuperado"
        component={Recuperado}
        options={{
          headerShown: false,
        }}
      />

    </Navigator>
  )
}