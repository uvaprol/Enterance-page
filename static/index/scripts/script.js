let rows = document.getElementsByTagName('input')

function log(key){
    if (key){
        $.get('/Authorization', {
            'login'   : $(rows[3]).val(),
            'password': $(rows[4]).val(),
        }, (response) => {
            alert(response)
        })
    } else {
    alert(key)
        $.get('/Regestration', {
            'name'    : $(rows[0]).val(),
            'surname' : $(rows[1]).val(),
            'tel'     : $(rows[2]).val(),
            'login'   : $(rows[3]).val(),
            'password': $(rows[4]).val(),
        }, (response) => {
            alert(response)
        })
    }
}
