import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import REPO_NAME from '@constants/repo'
import Header from '@components/Header'
import routesConfig from '@routes/routesConfig'

import styles from './App.module.scss'

const App = () => {
  return (
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <div className={styles.wrapper}>
        <Header />

        <Switch>
          {routesConfig.map(({ path, exact, component }, index) => (
            <Route
              key={index}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
