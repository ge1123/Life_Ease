import { SearchBoxProps } from '@/todolist/types/index.type';

const SearchBox: React.FC<SearchBoxProps> = ({ searchKeyword, handleSearchChange }) => {
    return (
        <input
            type="text"
            className="todoList__searchBox"
            placeholder="請輸入關鍵字進行搜尋"
            value={searchKeyword}
            onChange={handleSearchChange} // 當輸入框值變化時觸發更新狀態的函數
        />
    )
}

export default SearchBox;