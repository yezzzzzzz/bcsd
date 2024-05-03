// 전공 변경 알림알림알ㄹ림ㅁㅁㅁ
document.getElementById('major').addEventListener('change', function() {
    alert('전공이 ' + this.value + '로 변경되었습니다.');
});

// 비밀번호 확인 기능
document.getElementById('pw-check').addEventListener('input', function() {
    const password = document.getElementById('pw').value;
    const confirmPassword = this.value;
    if (password && confirmPassword) {
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
        } else {
            alert('비밀번호가 일치합니다.'); // 비밀번호 일치 시 알림
        }
    }
});

// 전화번호 형식 검사
document.getElementById('phone-number').addEventListener('input', function() {
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/; // 전화번호 형식
    if (!phonePattern.test(this.value)) {
        alert('전화번호는 010-1111-2222 형식으로 입력해야 합니다.');
    }
});

// 회원가입 기능
document.getElementById('signup').addEventListener('click', function() {
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;
    if (!id || !pw) {
        alert('모든 필드를 입력해주세요.');
    } else if (!validateEmail(id)) {
        alert('유효하지 않은 이메일 주소입니다.');
    } else {
        alert(`회원가입이 완료되었습니다! ID: ${id}`);
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

//이메일 형식 검사
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
// 폼 초기화 기능
document.getElementById('cancel').addEventListener('click', function() {
    document.getElementById('registration-form').reset();
    alert('폼이 초기화 되었습니다.');
});

// 학번 입력에 따른 전공 자동 선택 로직
document.getElementById('student-number').addEventListener('input', function() {
    const studentNumber = this.value;
    const majorSelect = document.getElementById('major');
    const deptCode = studentNumber.substring(4, 7); // 학번의 5번째부터 7번째 자리 추출

    switch (deptCode) {
        case '136':
            majorSelect.value = 'Computer Science'; // 컴퓨터 공학부
            break;
        case '120':
            majorSelect.value = 'Engineering'; // 기계 공학부
            break;
        case '100':
            majorSelect.value = 'Business'; // 산업경영학부
            break;
        default:
            majorSelect.value = ''; // 해당하는 코드가 없을 경우 기본값으로 설정
            break;
    }
});
