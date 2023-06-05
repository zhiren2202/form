// 1-2. 주민등록번호
$(".securityNum").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.securityNum').focus();
    }
});

// 1-3. 전화번호
$(".phoneNum").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.phoneNum').focus();
    }
});

// 1-4. 이메일 입력
var email_rule =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
var email_id =$("#email_id").val();
var email_domain =$("#email_domain").val();
var mail ="";

function setEmailDomain(domain){
    $("#email_domain").val(domain);
};

  // 3. 주소 입력 - 우편번호
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = '';
            var extraAddr = '';

            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }

            if(data.userSelectedType === 'R'){
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                document.getElementById("sample6_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}

// 5. 날짜 입력

$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
  });

  $(function () {
    $(".datepicker").datepicker();
  });
  
  $(function () {
    $(".datepicker1, .datepicker2").datepicker();
  });

  $(function(){
    $('#fromDate').datepicker({
        showOn: "both",
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly : true,
        buttonText: "날짜선택",
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        minDate: 0,
        onClose: function( selectedDate ) {
            $("#toDate").datepicker( "option", "minDate", selectedDate );
        }                
    });

    $('#toDate').datepicker({
        showOn: "both", 
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif", 
        buttonImageOnly : true,
        buttonText: "날짜선택",
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        minDate: 0,
        onClose: function( selectedDate ) {
            $("#fromDate").datepicker( "option", "maxDate", selectedDate );
        }                
    });
  });
  


// 6. 모바일 비밀번호
$(function(){
    $(document).on("keypress keyup keydown", "input[onlyNumber]", function(e){
        console.log(e.which);
        if(/[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(this.value)){ //한글 막기
            e.preventDefault();
            this.value = "";
        }else if (e.which != 8 && e.which != 0 //영문 e막기
            && e.which < 48 || e.which > 57    //숫자키만 받기
            && e.which < 96 || e.which > 105){ //텐키 받기
            e.preventDefault();
            this.value = "";
        }else if (this.value.length >= this.maxLength){ //1자리 이상 입력되면 다음 input으로 이동시키기
            this.value = this.value.slice(0, this.maxLength);
            if($(this).next("input").length > 0){
                $(this).next().focus();
            }else{
                $(this).blur();
            }
        }
    });    
});

// 6. 약관 동의
// 체크박스 전체 선택
$(".checkbox_group").on("click", "#check_all", function () {
    $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
});

// 체크박스 개별 선택
$(".checkbox_group").on("click", ".normal", function() {
    var is_checked = true;

    $(".checkbox_group .normal").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });

    $("#check_all").prop("checked", is_checked);
});

$(".checkbox_group").on("click", "#check_all", function (){
    const target = document.getElementsByClassName('next-button');
    target.disabled = false;
});
