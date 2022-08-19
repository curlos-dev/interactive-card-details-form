class CardValidator {

    validateCardholderName(cardHolderName) {
        if (['', null, undefined].includes(cardHolderName)) {
            return {
                valid: false,
                value: cardHolderName,
                errorMessage: 'Cardholder name can\'t be blank'
            }
        } else if (cardHolderName.length < 3 || cardHolderName.length > 35) {
            return {
                valid: false,
                value: cardHolderName,
                errorMessage: 'Cardholder name must be between 3 and 35 characters long'
            }
        }

        return {
            valid: true,
            value: cardHolderName,
            errorMessage: null
        }
    }

    validateCardNumber(cardNumber) {
        if (['', null, undefined].includes(cardNumber)) {
            return {
                valid: false,
                value: cardNumber,
                errorMessage: 'Cardholder name can\'t be blank'
            }
        } else if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(cardNumber))) {
            return {
                valid: false,
                value: cardNumber,
                errorMessage: 'Card number is not valid'
            }
        }

        return {
            valid: true,
            value: cardNumber,
            errorMessage: null
        }
    }

    validateExpirationMonth(expirationMonth) {
        if (['', null, undefined].includes(expirationMonth)) {
            return {
                valid: false,
                value: expirationMonth,
                errorMessage: 'Expiration month can\'t be blank'
            }
        } else if (expirationMonth.length !== 2) {
            return {
                valid: false,
                value: expirationMonth,
                errorMessage: 'Expiration month must be 2 characters long'
            }
        }

        return {
            valid: true,
            value: expirationMonth,
            errorMessage: null
        }
    }

    validateExpirationYear(expirationYear) {
        if (['', null, undefined].includes(expirationYear)) {
            return {
                valid: false,
                value: expirationYear,
                errorMessage: 'Expiration year can\'t be blank'
            }
        } else if (expirationYear.length !== 2) {
            return {
                valid: false,
                value: expirationYear,
                errorMessage: 'Expiration year must be 2 characters long'
            }
        }

        return {
            valid: true,
            value: expirationYear,
            errorMessage: null
        }
    }

    validateCVC(cvc) {
        if (['', null, undefined].includes(cvc)) {
            return {
                valid: false,
                value: cvc,
                errorMessage: 'CVC can\'t be blank'
            }
        } else if (!((/^[0-9]{3,4}$/).test(cvc))) {
            return {
                valid: false,
                value: cvc,
                errorMessage: 'CVC must be a number that is either 3 or 4 digits long'
            }
        }

        return {
            valid: true,
            value: cvc,
            errorMessage: null
        }
    }
}

export default CardValidator;