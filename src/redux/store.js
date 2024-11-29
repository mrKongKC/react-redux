import { createStore } from 'redux';
import reducer from '../redux/reducers/reducer';

const store = createStore(reducer);

export default store;
