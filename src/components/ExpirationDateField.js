const ExpirationDateField = ({ expirationMonth, expirationYear, handleInputFieldChange }) => {

    return (
        <div className="flex flex-col gap-2">
          <label htmlFor={'expirationDate'} className="tracking-[1px] font-[500]">EXP. DATE (MM/YY)</label>
          <div className="flex gap-2">
            <input type={'text'} name={'expirationMonth'} placeholder={'MM'} maxLength="2" value={expirationMonth.value} onChange={(e) => handleInputFieldChange('ExpirationMonth', e.target.value)} className="p-2 px-4 rounded-lg border border-gray-200 focus-visible:outline-1 focus-visible:outline-purple-500 text-[18px] w-[100%]"></input>
            <input type={'text'} name={'expirationYear'} placeholder={'YY'} maxLength="2" value={expirationYear.value} onChange={(e) => handleInputFieldChange('ExpirationYear', e.target.value)} className="p-2 px-4 rounded-lg border border-gray-200 focus-visible:outline-1 focus-visible:outline-purple-500 text-[18px] w-[100%]"></input>
          </div>
          <div className={`${expirationMonth.valid ? 'hidden' : 'block'} text-[#FF5050]`}>{expirationMonth.errorMessage}</div>
        </div>
    )
}

export default ExpirationDateField