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
    return {
        numbers: checkNumbers,
        letterLower: checkLetterLower,
        lettersUpper: checkLetterUpper,
        signs: checkSigns
    }
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
// @params max : integer 
export const pwdGenWeak = (max = 12) => {
    return [...numbers, ...lettersLower, ...lettersUpper, ...signs]
        .sort(() => Math.random() - 0.5)
        .slice(0, parseInt(max))
        .join('')
}
// @params max : integer 
export const pwdGenStrong = (max = 12) => {
    const arr = []
    let tmp = []
    let count = 0

    for (let i = 0; i < max; i++) {
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
