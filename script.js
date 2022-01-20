  function js_style(){
    document.getElementById("text").style.color="red";
    document.getElementById("text").style.fontSize="40px";
    document.getElementById("text").style.fontFamily="verdana";
    document.getElementById("text").style.backgroundColor="black";
    }


    function getFormvalue(){
        var first = document.getElementById("fname").value;
        var second = document.getElementById("lname").value;

      console.log(first);
      console.log(second);
    }

    function numberlinks(){
        alert("Total de links: "+ document.body.getElementsByTagName("a").length);
alert("Primer Link: "+document.body.getElementsByTagName("a")[0]);
alert("Ultimo link: "+document.body.getElementsByTagName("a")[2]);
      
        
    }





   