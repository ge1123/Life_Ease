
import { Dispatch, SetStateAction } from 'react';

export type FormatDate = (date: Date) => string;
export type ToggleModalOpenState = (setShowModal: Dispatch<SetStateAction<boolean>>) => void;
