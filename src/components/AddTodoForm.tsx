import { useState } from "react"

interface AddToDoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddToDoForm({ onSubmit}: AddToDoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if(!input.trim()) return; // Prevent adding empty todos

        onSubmit(input);
        setInput(""); // Clear input after submission
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Whats next on the list?"
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button
                type="submit"
                className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
                Add
            </button>
        </form>
    )
}