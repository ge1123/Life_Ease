import { z } from 'zod';

export const todoListSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    isCompleted: z.boolean(),
    dueDate: z.preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date) {
            return new Date(arg);
        }
        return arg;
    }, z.date()),
});
export type TodoList = z.infer<typeof todoListSchema>;
