type Task = {
    id: number;
    title: string;
    completed: boolean;
  };
  
  type TaskListProps = {
    tasks: Task[];
    onToggleTask: (id: number) => void;
    onDeleteTask: (id: number) => void;  // Assure-toi que cette ligne est bien présente
  };
  
  const TaskList = ({ tasks, onToggleTask, onDeleteTask }: TaskListProps) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  