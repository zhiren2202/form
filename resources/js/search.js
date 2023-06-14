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

// 조회/초기화1 - 채용년도
$(document).ready(function(){
	setDateBox();
});
function setDateBox(){
	var dt = new Date();
	var year = dt.getFullYear();

	for(var y = (year); y >=(year-2); y--){
		if(year == y-1) {
			$("[id*='recruit-year']").append("<option selected value='"+ y +"'>"+ y + "년" +"</option>");
		}else{
			$("[id*='recruit-year']").append("<option value='"+ y +"'>"+ y + "년" +"</option>");
		}
	}
};

// 조회/초기화1 - 등록일자
$(function () {
  $(".fromDate").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $(".toDate").datepicker("option", "minDate", selectedDate);
    },
  });
  $(".toDate").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $(".fromDate").datepicker("option", "maxDate", selectedDate);
    },
  });
});

// 조회/초기화1 (폼 추가 생성)
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