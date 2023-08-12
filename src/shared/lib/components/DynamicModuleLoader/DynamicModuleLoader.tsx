import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

// type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: ReactNode
} 

// МОЖНО ПОТОМ переделать в ХУК

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([stateKey, reducer]) => {
      const mounted = store.reducerManager.getReducerMap()[stateKey as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(stateKey as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${stateKey} reducer` })      
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([stateKey, reducer]) => {
          store.reducerManager.remove(stateKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${stateKey} reducer` })  
        });
      }
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>  
      {children}
    </>
  )
}
