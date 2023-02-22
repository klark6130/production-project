import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode
} 
export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;

  const store = createReduxStore();
  return (
    <Provider store={store}>  
      {children}
    </Provider>
  )
}
