// 1-2. 주민등록번호 (자동 칸 이동)
$(".securityNum").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.securityNum').focus();
    }
});

// 1-2. 주민등록번호 (뒷자리마스킹)
$(".securityNum-msk1").on("keypress", function () {
  var text = $(".securityNum-msk1")
    .val()
    .replace(/[^0-9]/g, "");
  if (text.length >= $(this).attr("maxlength")) {
    $(".securityNum-msk2").focus();
    return;
  }
});

$(".securityNum-msk2")
  .on("keypress", function (e) {
    var inVal = String.fromCharCode(e.which);
  })
  .on("input", function (e) {
    $(this).val(
      $(this)
        .val()
        .replace(/(?<=.{1})./gi, "*")
    );
  });

// 1-2. 생년월일 (개별입력)
$(".birth2").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next(".birth2").focus();
    }
});

// 1-2. 생년월일 (개별선택)
$(document).ready(function(){
	setDateBox();
});
function setDateBox(){
	var dt = new Date();
	var year = dt.getFullYear();
	var month = dt.getMonth()+1;

	for(var y = (year); y >=(year-80); y--){
		if(year == y) {
			$("#birth-year").append("<option selected value='"+ y +"'>"+ y + "년" +"</option>");
		}else{
			$("#birth-year").append("<option value='"+ y +"'>"+ y + "년" +"</option>");
		}
	}
	for(var i = 1; i <= 12; i++){
		if(month == i) {
			$("#birth-month").append("<option selected value='"+ i +"'>"+ i + "월" +"</option>");
		}else{
			$("#birth-month").append("<option value='"+ i +"'>"+ i + "월" +"</option>");
		}
	}
	for(var i = 1; i <= 31; i++){
		if(month == i) {
			$("#birth-day").append("<option selected value='"+ i +"'>"+ i + "일" +"</option>");
		}else{
			$("#birth-day").append("<option value='"+ i +"'>"+ i + "일" +"</option>");
		}
	}
};

// 1-3. 전화번호 - 다음 칸 자동으로 이동
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

// 2-1. 약관 동의
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

// 체크박스 전체 선택/해제 - 확인 버튼 활성화
$('input[id*="check_"]').change(function () {
	var tmpLength = $('input[id*="check_"]').length;
	var checkedLength = $('input[id*="check_"]:checked').length;
	var selectAll = (tmpLength == checkedLength);
    
	$('#check_all').prop('checked', selectAll);
	selectAll ? $('.next-button').removeAttr('disabled'):$('.next-button').attr('disabled','disabled');
});

// 체크박스 필수항목 선택/해제 - 확인 버튼 활성화
$('.essential').change(function () {
	var tmpLength2 = $('.essential').length;
	var checkedLength2 = $('.essential:checked').length;
	var nextBtnOn = (tmpLength2 == checkedLength2);
    
	nextBtnOn ? $('.next-button').removeAttr('disabled'):$('.next-button').attr('disabled','disabled');
});

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
    yearSuffix: '년',
});

// datepicker (basic)
$(function () {
$(".datepicker").datepicker();
});

// datepicker (period)
$(function () {
$(".datepicker1, .datepicker2").datepicker();
});

// datepicker (today, 1month, 이전날짜x)
$(function() {	
    $('.datepicker3').datepicker({
        format : "yyyy-mm-dd",
        autoclose : true, 
        todayHighlight :true,
        minDate: "0",
        maxDate: "+1M",
    }).datepicker("setDate", new Date());
});

// datepicker (시작/종료일 제한)
$(function(){
$('#fromDate').datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    // buttonImage: "/resources/imgs/dynamic-close.png",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function( selectedDate ) {
        $("#toDate").datepicker("option", "minDate", selectedDate);
    }
});
$('#toDate').datepicker({
    showOn: "both", 
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif", 
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function( selectedDate ) {
        $("#fromDate").datepicker( "option", "maxDate", selectedDate );
    }
});
});

// input type="date (today)"
document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);;

// 6-1. 동적 입력 필드 생성 - Div
$(function () {
  var survey_options = document.getElementById("survey_options");
  var add_more_fields = document.getElementById("add_more_fields");
  var remove_fields = document.getElementById("remove_fields");

  add_more_fields.onclick = function () {
    var newField = document.createElement("input");
    newField.setAttribute("type", "text");
    newField.setAttribute("name", "survey_options[]");
    newField.setAttribute("class", "survey_options");
    newField.setAttribute("siz", 50);
    newField.setAttribute("placeholder", "Another Field");
    survey_options.appendChild(newField);
  };

  remove_fields.onclick = function () {
    var input_tags = survey_options.getElementsByTagName("input");
    if (input_tags.length > 2) {
      survey_options.removeChild(input_tags[input_tags.length - 1]);
    }
  };

  document.getElementById("print-values-btn").onclick = function () {
    let allTextBoxes = document.getElementsByName("survey_options[]");
    for (let i of allTextBoxes) {
      console.log(i.value);
    }
  };
});

// 6-2. 동적 입력 필드 생성 - Table
function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
    table_body.append(tr_clone);
    clean_first_tr(table_body.firstElementChild);
}
function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}
function remove_tr(This) {
    if(This.closest('#table_body').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    }else{
        This.closest('tr').remove();
    }
}

// 7. 모바일 비밀번호
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

// 8-1. 첨부파일
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview").src = "";
  }
}

// 8-2. 첨부파일 디자인
function readURL2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview2").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview2").src = "";
  }
}



// 8-3. 첨부파일 추가
function create_tr3(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
    table_body.append(tr_clone);
    clean_first_tr(table_body.firstElementChild);
}
function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}
function remove_tr3(This) {
    if(This.closest('#table_body2').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    }else{
        This.closest('tr').remove();
    }
}

// 9. 검색어 자동완성
const ul = document.querySelector(".pop_rel_keywords");
const searchInput = document.querySelector(".search_input");
const relContainer = document.querySelector(".rel_search");
let cache = "";

const checkInput = () => {
  const beforeInput = searchInput.value;
  timer(beforeInput);
};

const timer = (beforeInput) => {
  setTimeout(() => {
    if (searchInput.value === beforeInput) {
      console.log("입력멈춤");
      loadData(searchInput.value);
      checkInput();
    } else {
      console.log("입력변함");
      checkInput();
    }

    if (searchInput.value === "") {
      relContainer.classList.add("hide");
    } else {
      relContainer.classList.remove("hide");
    }
  }, 200);
};

const loadData = (input) => {
  const url = `https://completion.amazon.com/api/2017/suggestions?session-id=135-3077052-6015425&customer-id=&request-id=DMRETXPQ3PZJQ5TKYSWX&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=undefined&prefix=${input}&event=onFocusWithSearchTerm&limit=11&fb=1&suggestion-type=KEYWORD&suggestion-type=WIDGET&_=1615280967091`;

  if (cache === url) return;
  else {
    cache = url;
    fetch(url)
      .then((res) => res.json())
      .then((res) => fillSearch(res.suggestions));
  }
};

const fillSearch = (suggestArr) => {
  ul.innerHTML = "";
  suggestArr.forEach((el, idx) => {
    const li = document.createElement("li");
    li.innerHTML = el.value;
    ul.appendChild(li);
  });

  const liList = document.querySelectorAll(".pop_rel_keywords li");
};

const highlightText = () => {};

checkInput();

