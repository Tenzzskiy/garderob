import {useContext, createContext} from 'react';
import {CategoryPageType} from '@/types';

const CatalogContext = createContext<CategoryPageType | object>({});

const CatalogProvider = CatalogContext.Provider;
const CatalogConsumer = CatalogContext.Consumer;

const useCatalogContext = () => useContext(CatalogContext) as CategoryPageType;

export {useCatalogContext, CatalogProvider};
