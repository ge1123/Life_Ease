/**
 * 關閉視窗的按鈕。
 * @interface CloseButtonProps
 * @property {ToggleModal} toggleModal - 用於切換模態框可見性的函數。
 */
export interface EditCloseButtonProps {
    toggleModalOpenStatus: () => void;
}
