import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import AddCategory from "./AddCategory";

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const categories = useRecoilValue(categoriesState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                {categories?.map((cate: string) => (
                    <option value={cate}>{cate}</option>
                ))}
            </select>
            <AddCategory />
            <hr/>
            <CreateToDo/>
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    )
        ;
}

export default ToDoList;