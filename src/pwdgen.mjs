const numbers = []
const lettersLower = []
const lettersUpper = []
const signs = ['@', '#', '*', '^', '!', '$', '%', '&', '+', '(', ')']

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
export const pwdGen = (max = 12) => {
    return [...numbers, ...lettersLower, ...lettersUpper, ...signs]
        .sort(() => Math.random() - 0.5)
        .slice(0, parseInt(max))
        .join('')
}
