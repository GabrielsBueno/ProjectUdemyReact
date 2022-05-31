import './styles.css'

export const TextInput = ({placeholder, searchValue, handleChange}) => {
    return(
        <input 
        className='textInput'
        placeholder={placeholder}
        type='search'
        value={searchValue}
        onChange={handleChange}
        />
    )
}