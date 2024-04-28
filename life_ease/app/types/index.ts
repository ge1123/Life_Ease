interface ApiResponse<T> {
    code: number;
    status: string;
    data: {
        items: T[];
        total: number;
    };
}

type FetchData = <T>(url: string, config: RequestInit) => Promise<T[]>;

type PostData = <T>(url: string, data: T, config?: RequestInit) => Promise<T>;

type DeleteData = (url: string, config?: RequestInit) => Promise<void>;


