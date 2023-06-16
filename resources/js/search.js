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

// 채용년도
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

// 조회1 - 등록일자1
$(function () {
  $("#fromDate1").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $("#toDate1").datepicker("option", "minDate", selectedDate);
    },
  });
  $("#toDate1").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $("#fromDate1").datepicker("option", "maxDate", selectedDate);
    },
  });
});

// 조회1 - 등록일자2
$(function () {
  $("#fromDate2").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $("#toDate2").datepicker("option", "minDate", selectedDate);
    },
  });
  $("#toDate2").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $("#fromDate2").datepicker("option", "maxDate", selectedDate);
    },
  });
});

// 조회1 - 수험번호
$(function () {
  var cnt = 0;

  $("#BtnFileAdd1_1").click(function () {
    var oEl = $(".input-multi-file-1_1").find(".flex-table-1_1");

    if (oEl.find(".flex-box-1_1").length < 5) {
      oEl.find(".flex-box-1_1").last().clone().appendTo(oEl);
      oEl.find(".flex-box-1_1").last().find("input").val("");
      oEl.find(".flex-box-1_1").last().find("input").attr("id", "id-num");
    } else {
      alert("조회 가능한 개수는 최대 5개 입니다.");
    }

    return false;
  });

  $("#BtnFileSubtract1_1").click(function () {
    var oEl = $(".input-multi-file-1_1").find(".flex-table-1_1");

    if (oEl.find(".flex-box-1_1").length > 1) {
      oEl.find(".flex-box-1_1").last().remove();
      --cnt;
    } else {
      alert("조회 가능한 개수는 최소 1개 입니다.");
    }

    return false;
  });
});

// 조회1 - 채용년도
$(function () {
  var cnt = 0;

  $("#BtnFileAdd1_2").click(function () {
    var oEl = $(".input-multi-file-1_2").find(".flex-table-1_2");

    if (oEl.find(".flex-box-1_2").length < 5) {
      oEl.find(".flex-box-1_2").last().clone().appendTo(oEl);
      oEl.find(".flex-box-1_2").last().find("select").val("");
      oEl.find(".flex-box-1_2").last().find("select").attr("id", "recruit-year");
    } else {
      alert("추가 조회 가능 개수는 최대 5개 입니다.");
    }

    return false;
  });

  $("#BtnFileSubtract1_2").click(function () {
    var oEl = $(".input-multi-file-1_2").find(".flex-table-1_2");

    if (oEl.find(".flex-box-1_2").length > 1) {
      oEl.find(".flex-box-1_2").last().remove();
      --cnt;
    } else {
      alert("추가 조회 가능 개수는 최소 1개 입니다.");
    }

    return false;
  });
});

// 조회/초기화1 - 등록일자
$(function () {
  $("#fromDate3").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $("#toDate3").datepicker("option", "minDate", selectedDate);
    },
  });
  $("#toDate3").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $("#fromDate3").datepicker("option", "maxDate", selectedDate);
    },
  });
});

// 조회/초기화2 - 등록일자
$(function () {
  $("#fromDate4").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $("#toDate4").datepicker("option", "minDate", selectedDate);
    },
  });
  $("#toDate4").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $("#fromDate4").datepicker("option", "maxDate", selectedDate);
    },
  });
});

// 조회/초기화3 - 제출일자
$(function () {
  $("#fromDate5").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $("#toDate5").datepicker("option", "minDate", selectedDate);
    },
  });
  $("#toDate5").datepicker({
    showOn: "both",
    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly : true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $("#fromDate5").datepicker("option", "maxDate", selectedDate);
    },
  });
});