var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");

var check = 0;

// var removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", function(){

    if(check == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        check = 1;
    }

    else{
        istatus.innerHTML = "Strangers";
        istatus.style.color = "red";
        addFriend.innerHTML = "Add Friend";
        check = 0;
    }



    
})






// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Strangers";
//     istatus.style.color = "red";
// })
