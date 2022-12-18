import { pwdGen } from "./src/pwdgen.mjs"

const pwdMessage = document.getElementById('pwd-message')
const pwdCopy = document.getElementById('pwd-copy')
const pwdLabel = document.getElementById('pwd-label')
const pwdInput = document.getElementById('pwd-input')
const pwdRange = document.getElementById('pwd-range')
const pwdGenerate = document.getElementById('pwd-generate')

const pwdLabelView = () => pwdLabel.innerHTML = `<i class="fa-solid fa-key"></i> : ${pwdRange.value}`

pwdCopy.addEventListener('click', function() {
    try {
        navigator.clipboard.writeText(pwdInput.value).then(()=>{
            pwdMessage.classList.add('pwd-message-ani')
            setTimeout(() => pwdMessage.classList.remove('pwd-message-ani'), 1500)
        })
    } catch (err) {
        pwdMessage.textContent = err 
        pwdMessage.classList.add('pwd-message-ani')
    }   
})

pwdRange.addEventListener('input', () => {
    pwdLabelView()
})

pwdGenerate.addEventListener('click', () => {
    pwdInput.value = pwdGen(pwdRange.value)
})

pwdLabelView()
pwdInput.value = pwdGen()
