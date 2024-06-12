let log_field = document.getElementById('logIn')
let sig_field = document.getElementById('signIn')
let btn = document.getElementsByTagName('button')[0]
let inputs = document.getElementsByTagName('input')
let section = document.getElementsByTagName('section')[0]

function logSwitch(mode){
    if (mode == 'sig'){
        log_field.style.fontSize = '100%'
        sig_field.style.fontSize = '150%'

        btn.style.fontSize = '0%'
        btn.setAttribute('onclick', 'log(false)')
        setTimeout(()=>{btn.innerText = 'Sign in'
                        btn.style.fontSize = '150%'}, 500)
        
        for (let i = 0; i < 4; i++){
            setTimeout(()=>{
                inputs[i - 1].style.opacity = '1'
                inputs[i - 1].style.height = '60px'
                inputs[i - 1].style.marginBottom = '32px'}, 500 * i)
        }
        
    } else {
        log_field.style.fontSize = '150%'
        sig_field.style.fontSize = '100%'

        btn.style.fontSize = '0%'
        btn.setAttribute('onclick', 'log(true)')
        setTimeout(()=>{btn.innerText = 'Log in'
                        btn.style.fontSize = '150%'}, 500)

        for (let i = 0; i < 4; i++){
            setTimeout(()=>{
                inputs[i - 1].style.opacity = '0'
                inputs[i - 1].style.height = '0px'
                inputs[i - 1].style.marginBottom = '0px'}, 500 * i)
        }
    }
}