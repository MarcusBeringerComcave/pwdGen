const numbers = []
const lettersLower = []
const lettersUpper = []
const signs = ['@', '#', '*', '^', '!', '?', '$', '%', '&', '+', '-', '=', '(', ')']

// @params pwd : string 
export const pwdCheck = (pwd) => {
    const checkNumbers = pwd.split('').some(v => numbers.includes(v))
    const checkLetterLower = pwd.split('').some(v => lettersLower.includes(v))
    const checkLetterUpper = pwd.split('').some(v => lettersUpper.includes(v))
    const checkSigns = pwd.split('').some(v => signs.includes(v))
    const arr = [checkNumbers, checkLetterLower, checkLetterUpper, checkSigns]
    return arr
}
// @params riskBarEl : htmlElement
// @params pwdCheck : boolean[] 
// @params pwdLenght? : integer 
export const pwdRisk = (riskBarEl, pwdLength = 12, fnCheck) => {
    const pwdRisk = fnCheck.filter(v => v == true).length
    if (pwdRisk == 2) {
        if (pwdLength > 11 && pwdLength < 15) riskBarEl.setAttribute('class', 'risk-high')
        if (pwdLength > 14 && pwdLength < 18) riskBarEl.setAttribute('class', 'risk-normal')
        if (pwdLength == 18) riskBarEl.setAttribute('class', 'risk-low')
    }
    if (pwdRisk == 3) {
        if (pwdLength == 12 || pwdLength == 13) riskBarEl.setAttribute('class', 'risk-high')
        if (pwdLength > 13 && pwdLength < 17) riskBarEl.setAttribute('class', 'risk-normal')
        if (pwdLength == 17 || pwdLength == 18) riskBarEl.setAttribute('class', 'risk-low')
    }
    if (pwdRisk == 4) {
        if (pwdLength == 12) riskBarEl.setAttribute('class', 'risk-high')
        if (pwdLength > 12 && pwdLength < 16) riskBarEl.setAttribute('class', 'risk-normal')
        if (pwdLength > 15 && pwdLength < 19) riskBarEl.setAttribute('class', 'risk-low')
    }
    return pwdRisk
}

// numbers 0-9
for (let i = 48; i <= 57; i++) {
    numbers.push(String.fromCharCode(i))
}
// lettersLower a-z
for (let i = 65; i <= 90; i++) {
    lettersLower.push(String.fromCharCode(i).toLowerCase())
}
// lettersUpper A-Z
for (let i = 65; i <= 90; i++) {
    lettersUpper.push(String.fromCharCode(i).toUpperCase())
}
// @params pwdLength : integer 
export const pwdGenWeak = (pwdLength = 12) => {
    const arr = [...numbers, ...lettersLower, ...lettersUpper, ...signs]
        .sort(() => Math.random() - 0.5)
        .slice(0, parseInt(pwdLength))
    return arr.join('')
}
// @params pwdLength : integer 
export const pwdGenStrong = (pwdLength = 12) => {
    const arr = []
    let tmp = []
    let count = 0

    for (let i = 0; i < pwdLength; i++) {
        numbers.sort(() => Math.random() - 0.5)
        lettersLower.sort(() => Math.random() - 0.5)
        lettersUpper.sort(() => Math.random() - 0.5)
        signs.sort(() => Math.random() - 0.5)
        tmp = [numbers[0], lettersLower[0], lettersUpper[0], signs[0]]
        arr.push(tmp[count])
        count++
        if (count > 3) count = 0
    }
    return arr.join('')
}
