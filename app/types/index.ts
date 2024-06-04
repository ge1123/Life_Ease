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


