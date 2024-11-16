## Improve scrolling

# Locomotive mai parent/wrapper ko height nahi deni

# to height of children  in vh

# type locomotive js cdn and paste Search on Google only as result vary in diff browser

# locomotive-scroll.css and locomotive-scroll.js dono uthao

# copy url of them
# paste in script tag url
# CSS in link tag

# locomotive js github for nore details

``` Js
// var main = document.querySelector("#main")
// var scroll = new LocomotiveScroll({
//   el:main,
//   //give wrapper or parent here
//   smooth:true,
// }) 

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp:0.1
    //0 to 1 smoothness level
});
```

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="main" data-scroll-container>
    <div id="page1" data-scroll></div>
    <div id="page2" data-scroll>
      <div id="box" data-scroll ></div>
      <div id="box" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal"></div>
      <div id="box" data-scroll data-scroll-speed="10"></div>
    </div>
    <div id="page3" data-scroll></div>
  </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
<script src="script.js"></script>
</html>
```

``` CSS
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body{
  height:100%;
  width:100%;
}

body{
  background-color: #111;
}

/* parent ko height nahi deni */
#page1{
  height:100vh;
  width:100%;
  background-color: gray;
}
#page2{
  height:100vh;
  width:100%;
  background-color: rgba(61, 5, 5, 0.116);
  display: flex;
  align-items: center;
  justify-content: center;
}
#page3{
  height:100vh;
  width:100%;
  background-color:gray;
}
#box{
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background-color: crimson;
  margin:10px;
}
```