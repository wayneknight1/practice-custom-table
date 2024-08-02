import React from 'react'
import axios from 'axios'
import Header from './Header'
import DisplayTasks from './DisplayTasks'
import { Provider } from 'react-redux'
import store from './store'
import Table from './Table'
export const tasksApi = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'Content-Type':'application/json'}
})
function App() {
  return (
    <Provider store={store}>
        <Header/>
        <DisplayTasks/>
        <Table/>
    </Provider>
  )
}

export default App