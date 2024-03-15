const id =document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

//함수마다 물러오는 문법이 참 다르단 말이지...
//id는 mini1103 password는 intern0315
login.addEventListener('click',() => {
    if(id.value =='mini1103'){
        if(password.value =='intern0315') {
            alert('환영합니다!')
            errStack = 0;
            //성공후 페이지 변환 넣기
        }
        //비밀번호랑 아이디 입력 안한경우도 넣고싶음 none도 안되고 null도 안되는데 순서를 잘못입력했나
        else{
            alert('비밀번호가 일치하지 않습니다!')
            errStack ++;
        }

    }
    else {
        alert('아이디가 존재하지 않습니다. 다시 입력해주세요!')        
    }

    if (errStack>=5){
        alert('비밀번호 오류 5회 이상입니다. 비밀번호 재설정을 권장드립니다.')
    }


})
