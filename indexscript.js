const user=[{id:1,username:'mukta@gmail.com',password:'mukta'},
            {id:1,username:'sai@gmail.com',password:'sai'}]

loginCheck1=document.getElementById('loginCheck')
// loginCheck1.addEventListener('click',()=>{
    document.getElementById('login').addEventListener('click', () => {
        const userName1 = document.getElementById('userName').value;
        const password1 = document.getElementById('password').value;
    
        
    let loggedIn = false;

    user.forEach(user => {
        if (user.username === userName1 && user.password === password1) {
            loggedIn = true;
        }
    });

    if (loggedIn) {
        alert('Login Success');
        window.location.href = "Homepage.html"; // Redirect to homepage
    } else {
        alert('Incorrect Username or Password......');
    }
});




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


//     userName1=document.getElementById('userName').value;
//     password1=document.getElementById('password').value;

//     console.log(userName1);
//     user.forEach(elmn=>{
//     //     if(elmn.username==userName1 && elmn.password==<PASSWORD>){
//     //         loginCheck1.innerHTML="Login Success";
//     //         loginCheck1.style.color="green";
//     //     }
//     //     else{
//     //         loginCheck1.innerHTML="Login Failed";
//     //         loginCheck1.style.color="red";
//     //     }
//     // })

//     if(elmn.username !== userName1){
//         alert('incorrect Username or Password');
//     }else{
//         if(elmn.password!== password1){
//             alert('incorrect Username or Password');
//         }else{
//             alert('Login Success');
//             window.location.href="Homepage.html";
//         }
//     }
// })














//Anita mam coding

// const products=[{id:1,name1:'NOKIA',Description:'display-12 RAM-4 CAMERA-12',  img:'nokia.jpg',  price:10},
// {id:2,name1:'OPPO',Description:'display-12 RAM-4 CAMERA-12',img:'oppo.jpg',price:20},
// {id:3,name1:'REALMI',Description:'display-12 RAM-4 CAMERA-12',img:'realmi.jpg',price:30}]

// ContainerProducts=document.getElementById('ContainerProduct');

// products.forEach(element =>{
//     // const div=document.createElement('div');
//     // div.className='product';
//     // div.id=element.id;
//     // ContainerProducts.appendChild(div);
//     // const h2=document.createElement('h2');
//     // h2.textContent=element.name1;
//     // div.appendChild(h2);
//     // const h3=document.createElement('h3');
//     // h3.textContent=element.Description;
//     // div.appendChild(h3);
//     // const h4=document.createElement('h4');
//     // h4.textContent=element.price;
//     // div.appendChild(h4);

//     newProduct=document.createElement('div');
//     newProduct.className='cart';
//     newProduct.style.width='18rem';
//     newProduct.innerHTML=`<div class="card-body">
//     <h5 class="card-title">${element.name1}</h5>
//     <p class="card-text">${element.Description}</p>
//     <p class="card-text">Rs.${element.price}</p>
//     <img src="${element.img}" class="card-img-top" alt="...">
//     <a href="#" class="btn btn-danger" type="button" onclick="addToCart(${element.id});">Add To Cart<a>
//     </div>`
//     ContainerProducts.appendChild(newProduct);
// });

// cart=[];
// totalPrice=0;
// function showCartProducts(){
//     showCartProducts1=document.getElementById('showCartProducts');
//     cart.forEach(elmn=>{
//         cartProduct=document.createElement('div');
//         cartProduct.innerHTML=`<h4>${elmn.name1}</h4>
//         <p>${elmn.price}</p>`
//         showCartProducts1.appendChild(cartProduct);
      
//         totalPrice=totalPrice+elmn.price;
//         console.log(totalPrice);
//         document.getElementById('totalPrice').innerHTML=totalPrice;
//     })
// }

// // function showCartProducts() {
// //     showCartProducts1 = document.getElementById('showCartProducts');
// //     // Clear previous content
// //     showCartProducts1.innerHTML = "";
// //     cart.forEach(elmn => {
// //         cartProduct = document.createElement('div');
// //         cartProduct.innerHTML = `<h4>${elmn.name1}</h4>
// //         <p>${elmn.price}</p>`
// //         showCartProducts1.appendChild(cartProduct);

// //         totalPrice = totalPrice + elmn.price;
// //         console.log(totalPrice);
// //         document.getElementById('totalPrice').innerHTML = totalPrice;
// //     })
// // }

// function addToCart(id){
//     // cart.push({id:id,name1:products[id-1].name1,Description:products[id-1].Description,price:products[id-1].price});
//     // showCartProducts();

//     // for(let i=0;i<cart.length;i++){
//     //     if(cart[i].id==id){
//     //         cart[i].price=products[id-1].price;
//     //         showCartProducts();
//     //     }
//     // }

//     adddedProduct=products.find(p=>p.id===id)
//     console.log(adddedProduct);
//     cart.push(adddedProduct);
//     console.log(cart);
//     document.getElementById('productCount').innerHTML=cart.length;
//     showCartProducts();
// }



