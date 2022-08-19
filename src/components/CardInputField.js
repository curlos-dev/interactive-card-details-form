const CardInputField = ({ type, name, title, placeholder, inputObject, handleInputFieldChange }) => {
    return (
        <div className="flex flex-col gap-2">
          <label htmlFor={name} className="tracking-[1px] font-[500]">{title}</label>
          <input type={type} name={name} placeholder={placeholder} value={inputObject.value} onChange={(e) => handleInputFieldChange(name, e.target.value)} className="p-2 px-4 rounded-lg border border-gray-200 focus-visible:outline-1 focus-visible:outline-purple-500 text-[18px]"></input>
          <div className={`${inputObject.valid ? 'hidden' : 'block'} text-[#FF5050]`}>{inputObject.errorMessage}</div>
        </div>
    )
    
}

export default CardInputField