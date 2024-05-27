interface PagedApiResponse<T> {
    code: number;
    status: string;
    data: {
        items: T[];
        total: number;
    };
}

interface ListApiResponse<T> {
    code: number;
    status: string;
    data: T[];
}

type FetchData = <T>(url: string, config: RequestInit) => Promise<T[]>;

type CreateData = <T>(url: string, data: T, config?: RequestInit) => Promise<T>;

type DeleteData = (url: string, config?: RequestInit) => Promise<void>;

type UpdateData = <T>(url: string, data: T, config?: RequestInit) => Promise<void>;
