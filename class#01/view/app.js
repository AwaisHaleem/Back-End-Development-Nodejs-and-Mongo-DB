var email = document.getElementById('email');
var password = document.getElementById('pass');

function signIn() {

    var obj = {
        method: "POST",
        Headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        data: { email: email.value, password: password.value },
        url: 'localhost:5/auth/signin'
    }
    axios(obj)
        .then((success) => {
            console.log({ success: "success" })
        })
        .catch((err) => {
            console.log({ err: "error" })
        })

    // axios.post('localhost:5/auth/signin', {email: email.value, password: password.value})
    // .then((success)=>{
    //     console.log({success: "success"})
    // })
    // .catch((err)=>{
    //     console.log({err: "error"})
    // })
}