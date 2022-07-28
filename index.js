window.onload = function () {
  var btn_equ = document.getElementById("_equ");
  var btn_dot = document.getElementById("_dot");
  var btn_add = document.getElementById("_add");
  var btn_min = document.getElementById("_min");
  var btn_mul = document.getElementById("_mul");
  var btn_div = document.getElementById("_div");
  var btn_squ = document.getElementById("_squ");
  var btn_mp = document.getElementById("_mp");
  var btn_mm = document.getElementById("_mm");
  var btn_mc = document.getElementById("_mc");
  var btn_0 = document.getElementById("_0");
  var btn_1 = document.getElementById("_1");
  var btn_2 = document.getElementById("_2");
  var btn_3 = document.getElementById("_3");
  var btn_4 = document.getElementById("_4");
  var btn_5 = document.getElementById("_5");
  var btn_6 = document.getElementById("_6");
  var btn_7 = document.getElementById("_7");
  var btn_8 = document.getElementById("_8");
  var btn_9 = document.getElementById("_9");
  var btn_clear = document.getElementById("_clear");
  var btn_del = document.getElementById("_del");
  var input = document.getElementById("input");
  var close = document.getElementById('btn_close')
  var open = document.getElementById('btn_open')
  var side = document.getElementById('side')
  var output = []
  var count = 0
  open.onclick = function(){
    side.style.width = '100vw'
    close.style.display = 'inline'
  }
  close.onclick = function(){
    side.style.width = '0px'
    open.style.display = 'inline'
    
  }
  btn_mp.onclick = function(){
    var _count = count
    input.innerHTML = output[_count]
   --_count;
  }
  btn_squ.onclick = function(){
    var exp = input.innerHTML;
    try {
      var Ans = eval(exp);
      var Squ = Ans*Ans
      input.innerHTML = Squ;
      output[count] = exp + " " + "=" + " " + Squ
      input.classList.add("output");
      const newdiv = document.createElement('div')
      newdiv.classList.add('history')
      newdiv.append(exp + " " + "=" + " " + Squ)
      side.append(newdiv)
      count++;
    } catch {
      input.innerHTML = "Syntax Error";
      input.classList.add("output");
    }
  }
  btn_equ.onclick = function () {
    var exp = input.innerHTML;
    try {
      var Ans = eval(exp);
      input.innerHTML = Ans;
      output[count] = exp + " " + "=" + " " + Ans
      input.classList.add("output");
      const newdiv = document.createElement('div')
      newdiv.classList.add('history')
      newdiv.append(exp + " " + "=" + " " + Ans)
      side.append(newdiv)
      count++;
      
    } catch {
      input.innerHTML = "Syntax Error";
      input.classList.add("output");
    }
  };
  btn_dot.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append(".");
  };
  btn_add.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("+");
  };
  btn_min.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("-");
  };
  btn_mul.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("*");
  };
  btn_div.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("/");
  };
  btn_0.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("0");
  };
  btn_1.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("1");
  };
  btn_2.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("2");
  };
  btn_3.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("3");
  };
  btn_4.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("4");
  };
  btn_5.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("5");
  };
  btn_6.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("6");
  };
  btn_7.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("7");
  };
  btn_8.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("8");
  };
  btn_9.onclick = function () {
    if (input.innerHTML == "Input Expression" || input.classList.contains("output")) {
      input.innerHTML = "";
      input.classList.remove("output");
    }
    input.append("9");
  };
  btn_clear.onclick = function () {
    input.innerHTML = "";
    count = 0;
    output = []
  };
  btn_del.onclick = function(){
    if(input.innerHTML !=  "Input Expression"){

        var exp = input.innerHTML
        exp = exp.substring(0,exp.length-1);
        input.innerHTML = exp
    }  
  }
};
