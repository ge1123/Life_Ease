interface Todo {
    date: string;
    description: string;
};

interface MonthlyTask {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueDate: Date;
};

interface MonthsDict {
    [key: string]: number;
};