import type { Todo } from "../type/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({ 
    todos, 
    onCompletedChange, 
    onDelete
}: TodoListProps) {
    const todoSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return a.id - b.id; // Sort by id if completed status is the same
        }
        return a.completed ? 1 : -1; // Completed todos go to the end
    });
    return (
        <>
        <div className="space-y-2">
          {todoSorted.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={onCompletedChange}
              onDelete={onDelete} // Pass the onDelete prop
            />
          ))}
        </div>
        {todoSorted.length === 0 && (
            <p className="text-center text-sm text-gray-500">No todos available</p>
        )}
        </>
    )
}