
type toDoCardType = {
  id: number
  text: string,
  category: string,
  isCompleted: boolean
  remove: (id: number) => void,
  completed: (id: number) => void
}

function toDoCard({ text, category, remove, completed, id, isCompleted}: toDoCardType){
    return(
        <div className="todo" >
        <div className="content" style={{textDecoration: isCompleted ? 'line-through' : ''}}>
          <p>{text}</p>
          <p className="category">({category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completed(id)}>Finalizar</button>
        <button className="remove" onClick={() => remove(id)}>x</button>
        </div>
      </div>
    )
}

export default toDoCard;