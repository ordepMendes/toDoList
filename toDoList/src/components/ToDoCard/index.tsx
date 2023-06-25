
type toDoCardType = {
    text: string,
    category: string,
  
}

function toDoCard({ text, category}: toDoCardType){
    return(
        <div className="todo" >
        <div className="content">
          <p>{text}</p>
          <p className="category">({category})</p>
        </div>
        <div>
          <button className="complete">Finalizar</button>
          <button className="remove">x</button>
        </div>
      </div>
    )
}

export default toDoCard;