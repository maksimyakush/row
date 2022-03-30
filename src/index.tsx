import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useReducer,
  useContext,
  createContext,
  ReactChild,
  ReactChildren,
} from 'react';
import reactDom from 'react-dom';
import { Row } from './components/Row';

import './styles.scss';

const App = () => {
  const [value, setValue] = useState(1);

  return (
    <Row mt={10} gap={40} as='span' alignItems={'center'}>
      <div>
        <p>Maksim</p>
        <p>Maksim</p>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, animi.
      </div>
    </Row>
  );
};

reactDom.render(<App />, document.querySelector('.root'));
