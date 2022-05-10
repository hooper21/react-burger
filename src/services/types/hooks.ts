import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppThunk, RootState } from '../types';

export const useAppDispatch = () => useDispatch<AppDispatch | AppThunk>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
