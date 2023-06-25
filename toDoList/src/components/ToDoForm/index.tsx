function ToDoForm(){
    return(
        <div>
            <h2>Criar tarefa:</h2>
            <form>
                <input type="text" placeholder="Digite o título" />
                <select>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Hobby">Hobby</option>
                    <option value="Estudo">Estudo</option>
                </select>
                <button>Criar Tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm;