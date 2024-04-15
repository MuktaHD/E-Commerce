
const users = [{id: 1, username: 'mukta@gmail.com', password: 'mukta'}];

// registerButton=document.getElementById('registerButton')
// document.addEventListener('DOMContentLoaded', function() {
//     const registerButton = document.getElementById('registerButton');

//     if (registerButton) {
//         registerButton.addEventListener('click', function() {
//             const userName = document.getElementById('userName1').value;
//             const password = document.getElementById('password1').value;

//             // Your registration logic here
//         });
//     } else {
//         console.error("Register button not found.");
//     }
// });
document.getElementById('registerButton').addEventListener('click', () => {
    const userName = document.getElementById('userName1').value;
    const password = document.getElementById('password1').value;

        
     if (userName.trim() === '' || password.trim() === '') {
        alert('Username and password cannot be empty.');
        return;
    }

    if (users.some(users => users.username === userName)) {
        alert('Username already exists. Please choose a different username.');
        return;
     }
    //else {
    //     alert('Incorrect Username or Password');
    // }

    const newUser = {
        id: users.length + 1,
        username: userName,
        password: password
    };

    users.push(newUser);
    alert('Registration successful. You can now login.');
    window.location.href = "index.html"; 
});