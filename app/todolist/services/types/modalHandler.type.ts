
import { Dispatch, SetStateAction } from 'react';

export type FormatDate = (date: Date) => string;
export type ToggleModalVisibility = (setShowModal: Dispatch<SetStateAction<boolean>>) => void;
