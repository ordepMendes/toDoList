import { useState } from 'react'
import './App.css'

import ToDoCard from './components/ToDoCard'
import ToDoForm from './components/ToDoForm'
import Search from './components/Search'
import Filter from './components/Filter'

type listType = {
  id: number,
  text: string,
  category: string,
  isCompleted: boolean
}

function App() {
  const [filter, setFilter] = useState('All');
  const [ sort, setSort] = useState('ASC');
  const [search, setSearch] = useState('')
  const [list, setList] = useState<listType[]>([])

  const addToDo = (text: string, category: string) => {
    const newToDo = [...list, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }];


    setList(newToDo);
  }

  const removeToDo = (id: number) => {
    const newToDos = [...list];
    const filteredToDos = newToDos.filter((todo) => todo.id !== id ? todo : null);
    setList(filteredToDos);
  }

  const completeToDo = (id: number) => {
    const newToDos = [...list];
    newToDos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setList(newToDos);
  }

  return (
     <main className='app'>
        <h1>Lista de tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className='todo-list'>
          {list
          .filter((todo) => filter === 'All' ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((list) => list.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a, b) => sort === 'ASC' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((item, i) => (
           <ToDoCard
            category={item.category}
            text={item.text}
            key={i}
            remove={removeToDo}
            completed={completeToDo}
            id={item.id}
            isCompleted={item.isCompleted}/>
          ))}
          <ToDoForm addToDo={addToDo}  />
        </div>
     </main>
  )
}

export default App
