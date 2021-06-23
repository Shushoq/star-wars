import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '@components/Header'
import routesConfig from '@routes/routesConfig'

import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Switch>
        {routesConfig.map(({ path, exact, component }, index) => (
          <Route key={index} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </div>
  )
}

export default App
