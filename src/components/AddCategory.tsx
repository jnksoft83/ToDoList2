import { useForm } from "react-hook-form";
import { categoriesState } from "../atoms";
import { useSetRecoilState } from "recoil";

interface IForm {
    category: string;
}

function AddCategory() {
    const setCategories = useSetRecoilState(categoriesState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ category }: IForm) => {
        setCategories((old: string[]) => [
            ...old,
            category,
        ]);
        setValue("category", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("category", {
                    required: "Please write a category",
                })}
                placeholder="Write a category"
            />
            <button>Add</button>
        </form>
    );
}

export default AddCategory;