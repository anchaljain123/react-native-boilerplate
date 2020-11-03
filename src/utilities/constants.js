export const HEADER_BACK_CHEVRON = 'ic_back_header.png';
export const RADIO_BUTTON_CHECKED = 'ic_radio_check.png';
export const RUPEE_ICON = '\u20B9';
export const BULLET_ICON = '\u2022';
// export const ICONS = {
//     'KYC_DOC_UPLOAD': require('../assets/add.png'),
// }

const accountRegex = /^[0-9]{9,18}$/
const ifscRegex = /([A-Za-z0]{4})(0\d{6})$/
const alphaRegex = /^[A-Za-z ]+$/
const passportRegex = /^[A-Za-z][0-9]{7}$/
const alphanumeric = /^([a-zA-Z0-9]+)$/
const emailRegex =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// /^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*\$/
const aadhaarRegex = /^[0-9]+$/

import { cal_age } from './helper/utils'

export const required = (value) => !value ? 'This information is required' : undefined;
export const requiredField = value => !value ? '' : undefined;
export const validateAccount = value => !accountRegex.test(value) ? 'Enter valid account' : undefined;
export const validateEmail = value => !emailRegex.test(value) ? 'Please enter a valid email id' : undefined;
export const validateIfsc = value => !ifscRegex.test(value) ? 'Enter valid ifscode' : undefined;
export const confirmAccount = (value, allValues) => allValues.accountNumber !== value ? 'The account number you entered does not match' : undefined;
export const requiredAge = value => cal_age(value) < 18 ? 'Age should be greater or equal to 18' : undefined;
export const validateAlphabet = value => !alphaRegex.test(value) ? 'Field can only have alphabets' : undefined;
export const validatePassport = (value, allValues) => allValues.addressProofType === 'Passport' && !passportRegex.test(value) ? 'Enter valid passport' : undefined;
export const validateId = (value,allValues) => !alphanumeric.test(value) ? 'Enter valid '+allValues.addressProofType.toLowerCase()+" number" : undefined;
export const validateIssue = value => new Date(value).setHours(0,0,0,0) >= new Date().setHours(0,0,0,0)  ? 'Enter valid issue date' : undefined;
export const validateExpiry = value => new Date(value).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0) ? 'Enter valid expiry date' : undefined;
export const validatedLen = value => value && value.length < 6 ? 'Enter valid pincode' : undefined;
export const validateAadhaar = value => !aadhaarRegex.test(value) ? 'Please enter valid last 4 digits of your Aadhaar Number' : undefined;