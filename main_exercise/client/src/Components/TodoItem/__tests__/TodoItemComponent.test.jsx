import renderer from 'react-test-renderer';
import TodoItemComponent from "../TodoItemComponent";

const props = {
    id: 1,
    todo: 'Test',
    status: 'done',
    urgency: 'low',
    selectedArray: [],
    deleteTodo: jest.fn(),
    updateStatus: jest.fn(),
    updateUrgency: jest.fn(),
}
it('renders correctly', () => {
    const tree = renderer.create(<TodoItemComponent {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});