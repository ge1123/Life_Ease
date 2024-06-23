/**
 * add, update 輸入的欄位
 * @interface InputFieldProps
 * @property {string} label - 輸入框的標籤文本。
 * @property {string} type - 輸入框的類型（例如 'text', 'password'）。
 * @property {string} name - 輸入框的名稱，用於表單提交。
 * @property {string} placeholder - 輸入框的佔位符文本。
 * @property {string} value - 輸入框的當前值。
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} onChange - 處理輸入框值變更的函數。
 */
export interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}