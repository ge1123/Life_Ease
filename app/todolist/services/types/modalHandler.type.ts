
import { Dispatch, SetStateAction } from 'react';

export type FormatDate = (date: Date|string) => string;
export type ToggleModalOpenState = (setShowModal: Dispatch<SetStateAction<boolean>>) => void;
