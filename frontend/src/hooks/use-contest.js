import { useContext } from 'react';
import { ContestContext } from '../contexts/contest-context';

export const useContest = () => useContext(ContestContext);
