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
} from "react";
import reactDom from "react-dom";
import { Row } from "./components/Row";

import "./styles.scss";

const App = () => {
  const [value, setValue] = useState(1);

  return (
    <Row mt={10} justifyContent={"space-between"}>
      <p>Maksim</p>
      <p>Maksim</p>
    </Row>
  );
};

reactDom.render(<App />, document.querySelector(".root"));
