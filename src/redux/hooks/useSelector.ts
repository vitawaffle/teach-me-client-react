import { useSelector as useReduxSelector } from 'react-redux';

import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState } from '../store';

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;
