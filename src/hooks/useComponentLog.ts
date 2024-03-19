import { ComponentLogContext } from '@/context/ComponentLogContext';
import { useContext } from 'react';

export const useComponentLog = () => useContext(ComponentLogContext);
