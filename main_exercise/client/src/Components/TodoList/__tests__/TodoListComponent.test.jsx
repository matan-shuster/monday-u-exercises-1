import {render, screen} from "@testing-library/react";
import TodoListComponent from '../TodoListComponent';
import {Provider} from 'react-redux';
import {store} from '../../../store';
import {getByText} from "@testing-library/react";


const props = {
    todoList: [
        {
            id: 56,
            todo: 'Take dog out for a walk',
            status: 'done',
            urgency: 'low',
        },
        {
            id: 32,
            todo: 'Do the dishes',
            status: 'done',
            urgency: 'low',
        }],
    filteredTodoList: [
     ],
    getTodoList: jest.fn(),
    filterTodoList: jest.fn(),
    deleteSelectedTodo: jest.fn(),
}

describe('TodoListComponent', () => {
    it('renders correctly', () => {
        const tree = render(
            <Provider store={store}>
                <TodoListComponent {...props} />
            </Provider>
        )
        expect(tree).toMatchSnapshot();
        const firstTodo = screen.getByText('Take dog out for a walk');
        expect(firstTodo).toBeInTheDocument();
        const secondTodo = screen.getByText('Do the dishes');
        expect(secondTodo).toBeInTheDocument();

    }
    );
});

test('get todo list', () => {
    const mockGetTodoList = jest.fn();
    const mockFilterTodoList = jest.fn();
    const mockDeleteSelectedTodo = jest.fn();
    render(
        <Provider store={store}>
            <TodoListComponent {...props} getTodoList={mockGetTodoList} filterTodoList={mockFilterTodoList} deleteSelectedTodo={mockDeleteSelectedTodo} />
        </Provider>
    );
    expect(mockGetTodoList).toHaveBeenCalled();
});
