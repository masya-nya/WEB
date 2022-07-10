import TodoList from './ToDo/TodoList'

function App() {
    const todos = [
        { id: 1, completed: false, title: 'Купить хлеб!' },
        { id: 2, completed: false, title: 'Купить масло!' },
        { id: 3, completed: false, title: 'Купить молоко!' },
    ]
    return (
        <div className="wrapper">
            <h1>React begin</h1>

            <TodoList todos={todos} />
        </div>
    );
}

export default App;
