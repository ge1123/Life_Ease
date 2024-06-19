interface Todo {
    date: string;
    description: string;
};

interface MonthlyTask {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueDate: string;
};

interface MonthsDict {
    [key: string]: number;
};