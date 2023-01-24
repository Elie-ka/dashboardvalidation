
function getElementHtml() {
    const form = document.querySelector("#form");
    const userName = document.querySelector("#username");
    const passWord = document.querySelector("#password");
    const danger = document.querySelector("#danger");
    const h3 = document.querySelector("#h3");

    return {
        form, userName, passWord, danger, h3
    };
}

const user = [
    {
        username: 'eliek',
        password: '12345',
        nom: 'elie kayembe'
    },
    {
        username: 'adin',
        password: 'password',
        nom: 'adina kambale'
    }
];


getElementHtml().form.addEventListener("submit", function (e) {
    e.preventDefault();
    validation()

})

function validation() {
    const userNameValue = getElementHtml().userName.value;
    const passwordValue = getElementHtml().passWord.value;
    if (userNameValue.length === 0 || passwordValue.length === 0) {
        getElementHtml().userName.classList.add("sourdine");
        getElementHtml().passWord.classList.add("sourdine");
        getElementHtml().danger.textContent = "field empty";
        getElementHtml().danger.classList.add("danger");
    } else {
        for (let i = 0; i < user.length; i++) {
            if (userNameValue !== user[i].username || passwordValue !== user[i].password) {

                getElementHtml().danger.classList.add("danger");
                getElementHtml().danger.textContent = "username or password incorrect";
                getElementHtml().userName.classList.add("sourdine");
                getElementHtml().passWord.classList.add("sourdine");
            } else {
                window.location.href = "dashboard.html";
                getElementHtml().danger.textContent = " ";
                getElementHtml().h3.innerHTML = `salut`;// a revoir 
                console(h3); // a revoir
                getElementHtml().userName.textContent = " ";
                getElementHtml().passWord.textContent = " ";
                getElementHtml().userName.classList.remove("sourdine");
                getElementHtml().passWord.classList.remove("sourdine");
                break;
            }
        }
    }
}


