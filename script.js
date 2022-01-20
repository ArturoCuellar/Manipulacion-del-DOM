  //Ejercicio 1
  function js_style(){
    document.getElementById("text").style.color="red";
    document.getElementById("text").style.fontSize="40px";
    document.getElementById("text").style.fontFamily="verdana";
    document.getElementById("text").style.backgroundColor="black";
    }

//Ejercicio 2
    function getFormvalue(){
        var first = document.getElementById("fname").value;
        var second = document.getElementById("lname").value;

      console.log(first);
      console.log(second);
    }
//Ejercicio 3
    function numberlinks(){
        alert("Total de links: "+ document.body.getElementsByTagName("a").length);
alert("Primer Link: "+document.body.getElementsByTagName("a")[0]);
alert("Ultimo link: "+document.body.getElementsByTagName("a")[2]);
      
        
    }


//Ejercicio 4

function selectContainer(){

  document.getElementById("container").style.background="red";

  document.querySelector("#container").style.background="blue";

  let x = document.getElementsByClassName("second");
  console.log(x);

  let a = document.querySelector("ol .third");
  console.log(a);

  document.querySelector("#container").innerHTML ="Hello Arturo";

  document.querySelector(".footer").classList.remove("main");

  let li= document.createElement("li");

  li.innerText = "four";
  document.querySelector("ul").appendChild(li);

}

selectContainer();


   