import React, { useState } from 'react'
import CardValidator from './utils/CardValidator'
import CardInputField from './components/CardInputField'
import ExpirationDateField from './components/ExpirationDateField'

const BASE_INPUT_STATE = {
  valid: true,
  value: '',
  errorMessage: null
}

const App = () => {
  const [cardholderName, setCardHolderName] = useState(BASE_INPUT_STATE)
  const [cardNumber, setCardNumber] = useState(BASE_INPUT_STATE)
  const [expirationMonth, setExpirationMonth] = useState(BASE_INPUT_STATE)
  const [expirationYear, setExpirationYear] = useState(BASE_INPUT_STATE)
  const [cvc, setCvc] = useState(BASE_INPUT_STATE)

  const cardValidator = new CardValidator()

  const fieldsToValidate = {
    'cardholderName': {
      validationFunction: cardValidator.validateCardholderName,
      setState: setCardHolderName
    },
    'cardNumber': {
      validationFunction: cardValidator.validateCardNumber,
      setState: setCardNumber
    },
    'expirationDate': {
      validationFunction: cardValidator.validateExpirationMonth,
      setState: setExpirationMonth
    },
    'expirationYear': {
      validationFunction: cardValidator.validateExpirationYear,
      setState: setExpirationYear
    },
    'cvc': {
      validationFunction: cardValidator.validateCVC,
      setState: setCvc
    }
  }



  const handleInputFieldChange = (fieldName, value) => {
    const fieldObject = fieldsToValidate[fieldName]
    const fieldValidator = fieldObject.validationFunction
    const newState = fieldValidator(value)
    fieldObject.setState(newState)
  }

  console.log(cardholderName)

  

  return (
    <div className="font-['Space_Grotesk'] text-[12px]">
      <div className="">

      </div>

      <div className="p-10 flex flex-col gap-4">
        <CardInputField type="text" name={'cardholderName'} title={'CARDHOLDER NAME'} placeholder={'e.g. Jane Appleseed'} inputObject={cardholderName} handleInputFieldChange={handleInputFieldChange} />
        <CardInputField type="text" name={'cardNumber'} title={'CARD NUMBER'} placeholder={'e.g. 1234 5678 9123 0000'} inputObject={cardholderName} handleInputFieldChange={handleInputFieldChange} />
        
        <div className="grid grid-cols-2 gap-3">
          <ExpirationDateField expirationMonth={expirationMonth} expirationYear={expirationYear} handleInputFieldChange={handleInputFieldChange} />
          <CardInputField type="text" name={'cvc'} title={'CVC'} placeholder={'e.g. 123'} inputObject={cvc} handleInputFieldChange={handleInputFieldChange} />
        </div>
        
        
        
      </div>
    </div>
  );
}

export default App;
