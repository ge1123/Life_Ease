type GetDataAsync = <T>(url: string, config?: RequestInit) => Promise<T[]>;

type CreateDataAsync = <T>(url: string, data: T, config?: RequestInit) => Promise<T>;

type DeleteDataAsync = (url: string, config?: RequestInit) => Promise<void>;

type UpdateDataAsync = <T>(url: string, data: T, config?: RequestInit) => Promise<void>;

type SetConfigAsync = <T>(method: string, config: RequestInit, data?: T) => Promise<RequestInit>

type HandleResponseAsync = <T>(response: Response) => Promise<T>;

interface PageResultResponse<T> {
    code: number;
    status: string;
    data: {
        items: T[];
        total: number;
    };
}

interface ListResultResponse<T> {
    code: number;
    status: string;
    data: T[];
}

const setConfigAsync: SetConfigAsync = async (method, config, data) => {
    const baseConfig: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...(config?.headers || {}),
        },
        ...config,
    };

    if (data !== undefined) {
        return {
            ...baseConfig,
            body: JSON.stringify(data),
        };
    }

    return baseConfig;
};

const handleResponseAsync: HandleResponseAsync = async (response) => {
    // 後端server是否能正常連線
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }
    return response.json();
};

const fetchPagedDataAsync: GetDataAsync = async<T>(url: string, config: RequestInit = {}) => {

    const requestInit: RequestInit = await setConfigAsync('GET', config);
    const response: Response = await fetch(url, requestInit);
    const result: PageResultResponse<T> = await handleResponseAsync(response);

    if (result.code !== 200) {
        throw new Error(result.status);
    }

    return result.data.items;
}

const fetchListDataAsync: GetDataAsync = async<T>(url: string, config: RequestInit = {}) => {

    const requestInit: RequestInit = await setConfigAsync('GET', config);
    const response: Response = await fetch(url, requestInit);
    const result: ListResultResponse<T> = await handleResponseAsync(response);

    if (result.code !== 200) {
        throw new Error(result.status);
    }

    return result.data;
}

const createDataAsync: CreateDataAsync = async (url, data, config = {}) => {

    const requestInit: RequestInit = await setConfigAsync('POST', config, data);
    const response: Response = await fetch(url, requestInit);
    return handleResponseAsync(response);
}

const deleteDataAsync: DeleteDataAsync = async (url, config = {}) => {

    const requestInit: RequestInit = await setConfigAsync('DELETE', config);
    const response: Response = await fetch(url, requestInit);
    await handleResponseAsync<void>(response);
}

const updateDataAsync: UpdateDataAsync = async (url, data, config = {}) => {

    const requestInit: RequestInit = await setConfigAsync('PUT', config, data);
    const response: Response = await fetch(url, requestInit);
    await handleResponseAsync<void>(response);
}


export {
    fetchPagedDataAsync,
    createDataAsync,
    deleteDataAsync,
    updateDataAsync,
    fetchListDataAsync
};