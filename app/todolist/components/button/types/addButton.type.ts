/**
 * 開啟填寫新一筆資料的按鈕。
 * 
 * @interface AddButtonProps
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 */
export interface AddButtonProps {
    toggleModalVisibility: () => void ;
};
