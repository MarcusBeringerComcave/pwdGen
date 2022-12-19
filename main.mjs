import { pwdGenWeak, pwdGenStrong, pwdCheck } from "./src/pwdgen.mjs"

const pwdCheckbox = document.querySelectorAll('input[type="checkbox"]')
const pwdMessage = document.getElementById('pwd-message')
const pwdCopy = document.getElementById('pwd-copy')
const pwdLabel = document.getElementById('pwd-label')
const pwdInput = document.getElementById('pwd-input')
const pwdRange = document.getElementById('pwd-range')
const pwdGenerateWeak = document.getElementById('pwd-generate-weak')
const pwdGenerateStrong = document.getElementById('pwd-generate-strong')

const pwdLabelView = () => pwdLabel.innerHTML = `<i class="fa-solid fa-key"></i> : ${pwdRange.value}`

const pwdLabelCheck = () => {
    Object.values(pwdCheck(pwdInput.value)).forEach((v, idx) => {
        return v == true ? pwdCheckbox[idx].checked = true : pwdCheckbox[idx].checked = false
    })
}

pwdCopy.addEventListener('click', function () {
    console.log('123');
    try {
        navigator.clipboard.writeText(pwdInput.value).then(() => {
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

pwdGenerateWeak.addEventListener('click', () => {
    pwdInput.value = pwdGenWeak(pwdRange.value)
    pwdLabelCheck()
})

pwdGenerateStrong.addEventListener('click', () => {
    pwdInput.value = pwdGenStrong(pwdRange.value)
    pwdLabelCheck()
})

pwdLabelView()
// start with default value maxRange=12
pwdInput.value = pwdGenWeak()
pwdLabelCheck()
