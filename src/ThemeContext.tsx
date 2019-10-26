import { createContext } from 'react';

const ThemeContext = createContext<[string, (theme: string) => void]>([
  'green',
  () => {}
]); // empty function because this hook does not update anything

export default ThemeContext;
