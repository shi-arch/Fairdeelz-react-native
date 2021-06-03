const validateMobileNo = (inputText) => {
	let mobileNoRegex = /^[6-9]\d{9}$/
	if (inputText && (inputText.match(mobileNoRegex))) {
		return true
	} else {
		return false
	}
}

const validateEmail = (inputText) => {
	let mobileNoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (inputText && inputText.match(mobileNoRegex)) {
		return true
	} else {
		return false
	}
}
const isNotEmpty = (inputText) => {
	if(inputText !==null && inputText !==undefined){
		inputText.toString().trim()
	}
	return inputText && inputText.toString().trim() !== ''
}

const isValidNumber = (inputNo) => {
	try {
		inputNo = parseInt(inputNo)
	} catch (err) {
		return false
	}
	return Number.isInteger(inputNo) && inputNo >= 0
}
const removeWhiteSpaces = (inputJson) => {
	return JSON.parse(JSON.stringify(inputJson).replace(/"\s+|\s+"/g, '"'))
}


const validateLength = (inputText, length) => {
	if (inputText.length >= length) {
		return true
	} else {
		return false
	}
}


export const validateDate = (text) => {
	return /^\d{2}\/\d{2}\/\d{4}$/.test(text) || /^\d{2}-\d{2}-\d{4}$/.test(text);
}

export const pattern =  {
	adv_reg_regex:/([A-Z]{1}-\d{1,}\/\d{4})$/,
	max_legnth_seven_digit:/^\s*-?[0-9]{1,7}\s*$/
	}

	export const caseValidate =  {
		case_validate_regex:/d{1,3}$/
	}
	
	

export {validateMobileNo, validateEmail, isNotEmpty, removeWhiteSpaces, validateLength, isValidNumber}

