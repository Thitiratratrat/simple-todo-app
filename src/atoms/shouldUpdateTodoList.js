import { atom } from 'recoil';

const shouldUpdateTodoListAtom = atom({
  key: 'shouldUpdateTodoList',
  default: true,
});

export default shouldUpdateTodoListAtom;