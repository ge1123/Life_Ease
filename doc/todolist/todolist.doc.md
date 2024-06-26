### todolist doc

```
todolist
│
├── components (UI 元件)
│   ├── box 
│   │   ├── searchBox.tsx 
│   │   ├── inputField.tsx
│   │   └── types
│   │       ├── index.type.ts
│   │       ├── searchBox.type.ts
│   │       └── inputField.type.ts
│   ├── button (按鈕元件)
│   │   ├── addButton.tsx 
│   │   ├── addCloseButton.tsx 
│   │   ├── addSubmitButton.tsx 
│   │   ├── deleteButton.tsx
│   │   ├── editButton.tsx
│   │   ├── editCloseButton.tsx
│   │   ├── searchButton.tsx
│   │   ├── updateSubmitButton.tsx
│   │   └── types
│   │       ├── addButton.type.ts
│   │       ├── addCloseButton.type.ts
│   │       ├── addSubmitButton.type.ts
│   │       ├── deleteButton.type.ts
│   │       ├── editButton.type.ts
│   │       ├── editCloseButton.type.ts
│   │       ├── index.type.ts
│   │       ├── searchButton.type.ts
│   │       └── updateSubmitButton.type.ts
│   ├── form (表單元件)
│   │   ├── addForm.tsx
│   │   ├── editForm.tsx
│   │   ├── todolist.tsx
│   │   └── types
│   │       ├── addForm.type.ts
│   │       ├── editForm.type.ts
│   │       └── index.type.ts
│   ├── list (列表元件)
│   │   ├── todoItem.tsx
│   │   └── types
│   │       ├── index.type.ts
│   │       └── todoItem.type.ts
│   ├── modal (模態框元件)
│   │   ├── addItem.tsx
│   │   ├── addTodoModal.tsx
│   │   ├── editItem.tsx
│   │   ├── editItemModal.tsx
│   │   └── types
│   │       ├── addItem.type.ts
│   │       ├── addItemModal.type.ts
│   │       ├── editItem.type.ts
│   │       ├── editItemModal.type.ts
│   │       └── index.type.ts
├── context (上下文)
│   ├── todoContext.tsx
│   └── types
│       └── todoContext.type.ts
├── hooks (自定義鉤子)
│   ├── index.ts
│   ├── useAddTodo.ts
│   ├── useEditTodo.ts
│   ├── useModal.ts
│   ├── useTodo.ts
│   └── types
│       ├── index.type.ts
│       ├── useAddTodo.type.ts
│       ├── useEditTodo.type.ts
│       ├── useModal.type.ts
│       ├── useTodo.type.ts
├── services (服務)
│   ├── addHandler.ts
│   ├── api.ts
│   ├── index.ts
│   ├── modalHandler.ts
│   ├── searchHandler.ts
│   ├── updateHandler.ts
│   └── types
│       ├── addHandler.type.ts
│       ├── api.type.ts
│       ├── index.type.ts
│       ├── modalHandler.type.ts
│       ├── searchHandler.type.ts
│       └── updateHandler.type.ts
├── styles (樣式)
│   ├── addItem.scss
│   ├── deleteButton.scss
│   ├── editItem.scss
│   ├── index.scss
│   ├── inputField.scss
│   ├── todoItem.scss
│   ├── todoList.scss
│   └── updateButton.scss
└── types (類型)
    ├── common.type.ts
    ├── index.type.ts
    └── todolistSchema.type.ts
```