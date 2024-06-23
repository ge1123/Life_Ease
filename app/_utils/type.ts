/**
 * 定義一個泛型異步函數類型，用於獲取數據。
 * @template T - 返回數據的類型。
 * @param {string} url - 請求的 URL。
 * @param {RequestInit} [config] - 可選的請求配置。
 * @returns {Promise<T[]>} 包含 T 類型元素的 Promise 數組。
 */
type GetDataAsync = <T>(url: string, config?: RequestInit) => Promise<T[]>;

/**
 * 定義一個泛型異步函數類型，用於創建數據。
 * @template T - 創建數據的類型。
 * @param {string} url - 請求的 URL。
 * @param {T} data - 要創建的數據。
 * @param {RequestInit} [config] - 可選的請求配置。
 * @returns {Promise<T>} 創建的 T 類型數據的 Promise。
 */
type CreateDataAsync = <T>(url: string, data: T, config?: RequestInit) => Promise<T>;

/**
 * 定義一個異步函數類型，用於刪除數據。
 * @param {string} url - 請求的 URL。
 * @param {RequestInit} [config] - 可選的請求配置。
 * @returns {Promise<void>} 不包含數據的 Promise。
 */
type DeleteDataAsync = (url: string, config?: RequestInit) => Promise<void>;

/**
 * 定義一個泛型異步函數類型，用於更新數據。
 * @template T - 更新數據的類型。
 * @param {string} url - 請求的 URL。
 * @param {T} data - 要更新的數據。
 * @param {RequestInit} [config] - 可選的請求配置。
 * @returns {Promise<void>} 不包含數據的 Promise。
 */
type UpdateDataAsync = <T>(url: string, data: T, config?: RequestInit) => Promise<void>;

/**
 * 定義一個泛型異步函數類型，用於設置請求配置。
 * @template T - 設置數據的類型。
 * @param {string} method - 請求方法（如 'GET', 'POST' 等）。
 * @param {RequestInit} config - 基本請求配置。
 * @param {T} [data] - 可選的數據。
 * @returns {Promise<RequestInit>} 請求配置的 Promise。
 */
type SetConfigAsync = <T>(method: string, config: RequestInit, data?: T) => Promise<RequestInit>

/**
 * 定義一個泛型異步函數類型，用於處理響應。
 * @template T - 響應數據的類型。
 * @param {Response} response - 請求的響應對象。
 * @returns {Promise<T>} 處理後的 T 類型數據的 Promise。
 */
type HandleResponseAsync = <T>(response: Response) => Promise<T>;

/**
 * 定義一個接口，用於表示帶有分頁結果的響應結構。
 * @template T - 響應數據的類型。
 * @property {number} code - 響應碼。
 * @property {string} status - 響應狀態。
 * @property {{ items: T[], total: number }} data - 分頁數據對象，包含數據項和總數。
 */
interface PageResultResponse<T> {
    code: number;
    status: string;
    data: {
        items: T[];
        total: number;
    };
}

/**
 * 定義一個接口，用於表示列表結果的響應結構。
 * @template T - 響應數據的類型。
 * @property {number} code - 響應碼。
 * @property {string} status - 響應狀態。
 * @property {T[]} data - 數據數組。
 */
interface ListResultResponse<T> {
    code: number;
    status: string;
    data: T[];
}