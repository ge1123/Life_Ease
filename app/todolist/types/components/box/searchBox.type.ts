
/**
 * 搜尋資料的對話框。
 * 
 * @interface SearchBoxProps
 * @property {string} searchKeyword - 當前的搜索關鍵字。
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} handleSearchChange - 處理搜索輸入變更的函數。
 */
export interface SearchBoxProps {
    searchKeyword: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
