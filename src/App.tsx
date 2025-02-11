import { useState } from 'react';
import TaskList from './Components/Tasklist';
import TaskForm from './Components/Taskform';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  // Utilisation d'un HOOK détat (useState) pour stocker la liste des tâches (initialement vide)
  const [tasks, setTasks] = useState<Task[]>([]);

  // fonction pour ajouter une nvelle tâche
  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1, //donne un ID en incrémentant la longueur 
      title,  
      completed: false,//La tâche est créer comme non terminée par defaut 
    };
    // on ajoute la NT à la liste 
    setTasks([...tasks, newTask]);
  };

  // Fonction pour marquer une tâhce comme terminée ou non 
  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

    // Fonction pour supprimer une tâche à partir de son id
    const handleDeleteTask = (id: number) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };

  // on return un titre, un formulaire pour ajouter des tâches et la liste des tâches
  return (
    <div>
      <h1>Dashboard de Gestion de Tâches</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
