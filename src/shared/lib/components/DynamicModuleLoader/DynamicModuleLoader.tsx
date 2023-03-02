import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DynamicModuleLoader.module.scss';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducerList
  removeAfterUnmount?: boolean
} 

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const { t } = useTranslation();

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([stateKey, reducer]: ReducerListEntry) => {
      store.reducerManager.add(stateKey, reducer);
      dispatch({ type: `@INIT ${stateKey} reducer` })      
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([stateKey, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(stateKey);
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
