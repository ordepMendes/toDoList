import { useState } from 'react'
import './App.css'
import ToDoCard from './components/ToDoCard'
import ToDoForm from './components/ToDoForm'

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade no projeto',
      category: 'Trabalho',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Leitura',
      category: 'Pessoal',
      isCompleted: false
    },
    {
      id: 1,
      text: 'Estudar js',
      category: 'Estudo',
      isCompleted: false
    }
  ])

  return (
     <main className='app'>
        <h1>Lista de tarefas</h1>
        <div className='todo-list'>
          {list.map((item, i) => (
           <ToDoCard category={item.category} text={item.text} key={i}/>
          ))}
          <ToDoForm />
        </div>
     </main>
  )
}

export default App
