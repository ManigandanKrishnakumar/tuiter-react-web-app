import { Link } from 'react-router-dom';
import Nav from '../../Nav';
import Classes from './classes';
import ConditionalOutput from './conditional-output';
import Styles from './styles';
import TodoList from './todo/todo-list';

function Assignment6() {
    return (
        <div>
            <Nav />
            <h1>Assignment 6</h1>
            <Classes />
            <Styles />
            <ConditionalOutput />
            <TodoList />
        </div>
    );
}
export default Assignment6;
