// datepicker 기본 설정
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

// 문서구분
var email_rule =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
var email_domain =$("#email_domain").val();
var mail ="";

function setEmailDomain(domain){
    $("#email_domain").val(domain);
};

// 조회/초기화1 - 채용년도
$(document).ready(function(){
	setDateBox();
});
function setDateBox(){
	var dt = new Date();
	var year = dt.getFullYear();

	for(var y = (year); y >=(year-2); y--){
		if(year == y-1) {
			$("#recruit-year").append("<option selected value='"+ y +"'>"+ y + "년" +"</option>");
		}else{
			$("#recruit-year").append("<option value='"+ y +"'>"+ y + "년" +"</option>");
		}
	}
};

// 조회/초기화1 - 등록일자
$(function () {
  $(".fromDate").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $(".toDate").datepicker("option", "minDate", selectedDate);
    },
  });
  $(".toDate").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $(".fromDate").datepicker("option", "maxDate", selectedDate);
    },
  });
});
