import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";
const Create = () => {
  const [todos,settodos] = useContext(todocontext);

  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    data.isCompleted = false;
    data.id = nanoid();

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    toast.success("Todo Created!");

    reset();
  };

  return (
    <div className="w-[60%] flex flex-col gap-5 pr-10">
      <h1 className="text-7xl font-normal">
        Set <span className="text-red-300">Reminders</span> for tasks{" "}
      </h1>
      <form
        className="w-full flex flex-col gap-5 "
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          className="py-2 px-3 outline-none border-b-1"
          onChange={(e) => settitle(e.target.value)}
          {...register("title", { required: "title cannot be empty" })}
          type="text"
          placeholder="Title"
        />
        {errors?.title?.message && (
          <small className="text-red-600 text-sm">{errors.title.message}</small>
        )}{" "}
        <button className="px-8 font-semibold py-2 border-1 w-fit ">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
