import {render} from "@testing-library/react";
import TodoItemComponent from "../TodoItemComponent";
import {Provider} from "react-redux";
import {store} from "../../../store";

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
    const tree = render(
        <Provider store={store}>
            <TodoItemComponent {...props} />).toJSON();
        </Provider>)
    expect(tree).toMatchSnapshot();
});