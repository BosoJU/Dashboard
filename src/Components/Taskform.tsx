import { useState} from 'react';

type TaskFormProps = {
    onAddTask: (title: string) => void ;
};

const TaskFrom = ({onAddTask}: TaskFormProps) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Nouvelle tâche...'
            />
            <button type='submit'>Ajouter</button>
        </form>
    );
};

export default TaskFrom