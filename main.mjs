import { pwdGenWeak, pwdGenStrong, pwdCheck, pwdRisk } from "./src/pwdgen.mjs"

const pwdCheckbox = document.querySelectorAll('input[type="checkbox"]')
const pwdMessage = document.getElementById('pwd-message')
const pwdCopy = document.getElementById('pwd-copy')
const pwdLabel = document.getElementById('pwd-label')
const pwdInput = document.getElementById('pwd-input')
const pwdRiskBar = document.getElementById('pwd-risk-bar')
const pwdRange = document.getElementById('pwd-range')
const pwdGenerateWeak = document.getElementById('pwd-generate-weak')
const pwdGenerateStrong = document.getElementById('pwd-generate-strong')

const pwdLabelView = () => pwdLabel.innerHTML = `<i class="fa-solid fa-key"></i> : ${pwdRange.value}`

const pwdLabelCheck = () => {
    pwdCheck(pwdInput.value).forEach((v, idx) => {
        return v == true ? pwdCheckbox[idx].checked = true : pwdCheckbox[idx].checked = false
    })
}

pwdCopy.addEventListener('click', function () {
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
    pwdRisk(pwdRiskBar, pwdRange.value, pwdCheck(pwdInput.value))
})

pwdGenerateStrong.addEventListener('click', () => {
    pwdInput.value = pwdGenStrong(pwdRange.value)
    pwdLabelCheck()
    pwdRisk(pwdRiskBar, pwdRange.value, pwdCheck(pwdInput.value))
})

void function init(){
// start with default value maxRange=12
pwdInput.value = pwdGenWeak()
pwdLabelView()
pwdLabelCheck()
pwdRisk(pwdRiskBar, pwdRange.value, pwdCheck(pwdInput.value))
}()