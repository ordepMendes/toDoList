import { useState, FormEvent, ChangeEvent  } from "react";

type toDoFormType = {
    addToDo: (text: string, category: string) => void;
}

function ToDoForm({addToDo} :toDoFormType){
    const [text, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!text || !category){
            return;
        }else{
            addToDo(text, category);
            setCategory('');
            setValue('');
        }
        
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }

    return(
        <div>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" onChange={changeInput} value={text}/>
                <select onChange={changeSelect} value={category}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Hobby">Hobby</option>
                    <option value="Estudo">Estudo</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm;