import {ChangeEvent} from 'react'

type filterType = {
    filter: string;
    setFilter: (value: string) => void;
    setSort: (value: string) => void;
}

function Filter({filter, setFilter, setSort}: filterType){
    return(
        <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filterOptions">
            <div>
                <p>status:</p>
                <select value={filter} onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabetica:</p>
                <button onClick={() => setSort("ASC")}>ASC</button>
                <button onClick={() => setSort("DESC")}>DESC</button>
            </div>
        </div>
    </div>
    )
}

export default Filter;