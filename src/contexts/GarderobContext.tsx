import {useContext, createContext} from 'react';
import {GarderobItemType} from '@/types';

const GarderobContext = createContext<GarderobItemType | object>({});

const GarderobProvider = GarderobContext.Provider;
const GarderobConsumer = GarderobContext.Consumer;

const useGarderobContext = () => useContext(GarderobContext) as GarderobItemType;

export {useGarderobContext, GarderobProvider};
