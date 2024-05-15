const fetchPagedData: FetchData = async<T>(url: string, config: RequestInit = {}): Promise<T[]> => {
    const response = await fetch(url, {
        ...config,
        headers: {
            'Accept': 'application/json',
            ...config.headers,
        }
    });

    // 後端server是否能正常連線
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    const result: PagedApiResponse<T> = await response.json();

    // api
    if (result.code !== 200) {
        throw new Error(result.status);
    }

    // 分頁跟全撈的資料結構不同
    if (!result.data.items) {
        return result.data.items;
    }
    return result.data.items;
}

const fetchListData: FetchData = async<T>(url: string, config: RequestInit = {}): Promise<T[]> => {
    const response = await fetch(url, {
        ...config,
        headers: {
            'Accept': 'application/json',
            ...config.headers,
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    const result: ListApiResponse<T> = await response.json();

    if (result.code !== 200) {
        throw new Error(result.status);
    }

    return result.data;
}

const postData: CreateData = async <T>(url: string, data: T, config?: RequestInit): Promise<T> => {
    try {
        const finalConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(config?.headers || {}),
            },
            body: JSON.stringify(data),
            ...config,
        };

        const response = await fetch(url, finalConfig);

        if (!response.ok) {
            throw new Error(`Failed to POST: ${response.status} ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}

const deleteData: DeleteData = async (url: string, config?: RequestInit): Promise<void> => {
    try {
        const finalConfig = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...(config?.headers || {}),
            },
            ...config,
        };

        const response = await fetch(url, finalConfig);

        if (!response.ok) {
            throw new Error(`Failed to DELETE: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error in DELETE request:', error);
        throw error;
    }
}

const updateData: UpdateData = async (url: string, data: any, config?: RequestInit): Promise<void> => {
    try {
        const finalConfig = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(config?.headers || {}),
            },
            body: JSON.stringify(data),
            ...config,
        };

        const response = await fetch(url, finalConfig);

        if (!response.ok) {
            throw new Error(`Failed to PUT: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error in PUT request:', error);
        throw error;
    }
}


export { fetchPagedData, postData, deleteData, updateData, fetchListData };