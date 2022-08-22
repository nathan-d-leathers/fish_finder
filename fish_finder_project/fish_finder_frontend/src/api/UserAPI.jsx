import axios from 'axios'
import swal from 'sweetalert'
import Cookies from 'js-cookie'

//Setting the default csrftoken
axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');

//Custom Alert
function alert_call(response, url) {
    swal({
        title: "The Recipe Box Says:",
        text: response['data']['data'],
        icon: "success",
        button: {
            text: "Awesome Sauce!",
            value: true,
            visible: true,
            className: "",
            closeModal: true
        },
    }).then( () => {
        window.location.href = `${url}`;
    });
    
};


async function signUpUser(data) {
    let response = await axios.post('/sign_up', data)
    return response
}
async function signOutUser() {
    let response = await axios.post('/sign_out')
    .then((response) => {
        alert_call(response, "/")
    });

}

async function logInUser(data) {

    let response = await axios.post('/log_in', data)
    .then((response) => {
        alert_call(response, "/")
    });

}

async function whoAmI() {
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    console.log('user? ', user)
    return user
}

export {
    signUpUser, 
    signOutUser,
    logInUser,
    whoAmI
}