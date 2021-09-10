while(true){
    let age = prompt("당신은 몇살입니까?");
    if(age <20){
        document.write("당신은 미성년자 입니다.");
        break;
    } else if(age >= 20){
        document.write("당신은 성인입니다.");
        break;
    }else{
        alert("숫자만 입력해주십시오.");
    }
    }
document.write("<br><br>환영합니다");
