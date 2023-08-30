# AddFriend.github.io

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,700&family=Open+Sans:wght@  
&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500;1,700&display=swap" 
rel="stylesheet">

    <style>
              * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy';
}

html, body{
    height: 100%;
    width: 100%;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cornflowerblue;
}

#card{
    height: 450px;
    width: 350px;
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
}

#card img{
    height: 50%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    padding: 10px;
    border-radius: 28px;
}

#card h1{
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 30px;
}

#card h5{
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    color: red;
    /* margin: 20px; */
    margin-bottom: 40px;
}

#card button{
    background-color: cadetblue;
    color: white;
    font-size: 20px;
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    padding: 12px 20px;
    border-radius: 5px;
    border: none;
    margin: 10px;
    cursor: pointer;
}

#card #remove{
    background-color: #dadada;
    color: black;
}
    </style>
    <title>Add Friend</title>
</head>
<body>

    <div id="card">
        <img src="https://ishuvam009.github.io/AddFriend.github.io/img/img4.jpg" alt="">
        <h1>Emily Cooper</h1>
        <h5>Stranger</h5>
        <div id="btn-container">
            <button id="add">Add Friend</button>
            <button id="remove">Remove</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
