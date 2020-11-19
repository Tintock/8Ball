
function _Random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  function getAnswer(x) {
    var answer_list =["It is certain.", "It is decidedly so.", "Without a doubt.","Yes – definitely.","You may rely on it."," As I see it, yes.","Most likely."
    ," Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again","Ask again later.","Better not tell you now.","Cannot predict now."," Concentrate and ask again."
    ,"Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];
    if (x%20 == 0){
      return answer_list[0];
    }
    else if (x%20 ==1){
        return answer_list[1];
    }
    else if (x%20 ==2){
        return answer_list[2];
    }
    else if (x%20 ==3){
        return answer_list[3];
    }
    else if (x%20 ==4){
        return answer_list[4];
    }
    else if (x%20 ==5){
        return answer_list[5];
    }
    else if (x%20 ==6){
        return answer_list[6];
    }
    else if (x%20 ==7){
        return answer_list[7];
    }
    else if (x%20 ==8){
        return answer_list[8];
    }
    else if (x%20 ==9){
        return answer_list[9];
    }else if (x%20 ==10){
        return answer_list[10];
    }
    else if (x%20 ==11){
        return answer_list[11];
    }
    else if (x%20 ==12){
        return answer_list[12];
    }
    else if (x%20 ==13){
        return answer_list[13];
    }
    else if (x%20 ==14){
        return answer_list[14];
    }
    else if (x%20 ==15){
        return answer_list[15];
    }
    else if (x%20 ==16){
        return answer_list[16];
    }
    else if (x%20 ==17){
        return answer_list[17];
    }
    else if (x%20 ==18){
        return answer_list[18];
    }
    else if (x%20 ==19){
        return answer_list[19];
    }
  }
  
  function ball_function() {
      var para = document.getElementById("8ball");
      var x = _Random(0,20);
      var answer = getAnswer(x);
      para.innerHTML = answer;
  };
  