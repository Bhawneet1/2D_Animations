## CSS Animation

# Two parts

- Animation
- Application of animation

# keyframe

- initial to final position 
- Compulsary to give name,duration,delay,iteration


# Code-1

``` CSS
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html,body{
  height:100%;
  width:100%;
}

body{
  background-color: #111;
  padding: 20px;
}

#box{
  height:300px;
  width:300px;
  background-color: crimson;
  border-radius: 10px;
  position: absolute;
  /* to give position in animation */
  /* compulsary to give */
  animation-name: anime;
  animation-duration:3s ;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
}


/* CSS animation

-animation
-application of animation */


@keyframes anime {
    from{
      left:0;
      top:0;
      rotate:0;
    }
    to{
      left:70%;
      top: 50%;
      rotate: 360deg;
    }

```


# Code-2

``` CSS
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html,body{
  height:100%;
  width:100%;
}

body{
  background-color: #111;
  padding: 20px;
}

#box{
  height:300px;
  width:300px;
  background-color: crimson;
  border-radius: 10px;
  position: absolute;
  /* to give position in animation */
  /* compulsary to give */
  animation-name: move;
  animation-duration:3s ;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-fill-mode:both;
  /* jahan katam ho vahi ruk jae backward by default, both kuch forward baaki backward*/
  animation-direction: normal;
  /* by default */
  animation-direction: reverse;
  /* ulta chalega 0% -> 100% ->75% and so on */

  animation-direction: alternate;
  /* ek baar seedha doosri baar ulta */

   /* speed of animation */
  animation-timing-function:ease-in ;
  /* Start low last mai fast */
  animation-timing-function:cubic-bezier(0,.93,.43)

  /* search on google cubic-beizer and select e=wht u want */
}


/* CSS animation

-animation
-application of animation */

/* 
@keyframes anime {
    from{
      left:0;
      top:0;
      rotate:0;
    }
    to{
      left:70%;
      top: 50%;
      rotate: 360deg;
    }
} */

@keyframes move {
  0%{
    left:0;
    top:0;
    background-color: red;
  }
  25%{
    top:0;
    left:70%;
    background-color: green;
  }
  50%{
    left:70%;
    top:50%;
    background-color: blue;

  }
  75%{
    left:0;
    top:50%;
    background-color: rgb(247, 40, 74);
  }
  100%{
    left:0;
    top:0;
    background-color: blueviolet;
  }
}
```

# Cubic-biezer


## After Before

# Create elements in CSS but elements are pseudo elements

# giving content is compulsary hai in after and before

# Code

``` cSS
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html,body{
  height:100%;
  width:100%;
}
body{
  background-color: #111;
  color: white;
  padding: 20px;
}

h1::after{
  content: '  like kardo  ';
  font-size: 20px;
  background-color: royalblue;
  padding: 5px 10px;
  border-radius: 5px ;
  margin-left:5px ;
}

h1::before{
  content: " Subscribe ";
  font-size: 20px;
  background-color: red;
  padding: 5px 10px;
  border-radius: 5px ;
  margin-right: 5px;
}
```


# Code(After Before and CSS)

``` CSS
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html,body{
  height:100%;
  width:100%;
}

body{
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  font-size:100px ;
  font-weight: 500;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  position: relative;
}

h1::after{
  content:"" ;
  position: absolute;
  width:100%;
  height: 10px;
  bottom: 0;
  background-color: #000;
  left:0;
  
}

h1:hover::after{
  animation-name: lineanime;
  animation-duration: 2s;
}
@keyframes lineanime {
  0%{
    width:0;
    left:0;
  }
  50%{
    width:100%;
    left:0;
  }
  100%{
   width:0%;
   left:100%; 
  }
}
```