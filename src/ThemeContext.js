import { createContext } from 'react';

const ThemeContext = createContext(['green', () => {}]); //empty function because this hook does not update anything

export default ThemeContext;
