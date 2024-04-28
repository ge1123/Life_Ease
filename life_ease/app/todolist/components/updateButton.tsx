const UpdateButton = ({ id, handleUpdate }: UpdateButtonProps) => {
    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
            onClick={() => console.log('update')}
        >
            <i className="fas fa-edit align-middle"></i>
        </button>
    )
}


export default UpdateButton;