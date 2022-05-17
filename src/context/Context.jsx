import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import { vscodeTheme } from "../styles/global/AppGlobalStyled";
import { reducer } from "../reducer/Reducer";

export const AppContext = createContext();

// const URL = import from gitconnected *****

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, { theme: vscodeTheme });

  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data));
  }, []);

  return (
    <AppContext.Provider
      value={{
        sidebarToggle,
        setSidebarToggle,
        data,
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
