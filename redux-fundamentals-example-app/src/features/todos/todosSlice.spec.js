import todosReducer from './todosSlice'

test('Add new todo', () => {
    const initialState = [
        { id: 999, text: 'Build something fun!', completed: true, color: 'red' }
    ]

    const action = { type: 'todos/todoAdded', payload: 'new todo' }
    const result = todosReducer(initialState, action)
    
    expect(result[1].id).toBe(1000);
    expect(result[1].text).toBe('new todo');
})

test('Toggles a todo based on id', () => {
    const initialState = [
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ]

    const action = { type: 'todos/todoToggled', payload: 2 }
    const result = todosReducer(initialState, action)
    
    expect(result[0].completed).toBe(true)
})