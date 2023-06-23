// 조회1 - 등록일자1
$(function () {
  $("#search-start").datepicker({
    showOn: "both",
    buttonImage:
      "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly: true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "-1M",
    onClose: function (selectedDate) {
      $("#search-end").datepicker("option", "minDate", selectedDate);
    },
  });
  $("#search-end").datepicker({
    showOn: "both",
    buttonImage:
      "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly: true,
    buttonText: "날짜선택",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: "0",
    onClose: function (selectedDate) {
      $("#search-start").datepicker("option", "maxDate", selectedDate);
    },
  });
});


// 기간 설정 버튼
if (!window.App) {
  App = {};
}
if (!App.board) {
  App.board = {};
}

$(function () {
  var boardApp = new App.board.search_t();
  boardApp.init();
});

App.board.search_t = function () {
  var self;

  return {
    init() {
      self = this;

      self.btnClick();
    },

    btnClick() {
      var d = new Date();
      // 오늘날의 년, 월, 일 데이터
      var day = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      var toDay = new Date(new Date().setDate(day + 1))
        .toISOString()
        .split("T")[0];
      var beforeWeek = new Date(new Date().setDate(day - 6))
        .toISOString()
        .split("T")[0];
      var beforeMonth = new Date(new Date().setMonth(month - 1))
        .toISOString()
        .split("T")[0];
      var beforeyear3 = new Date(new Date().setYear(year - 3))
        .toISOString()
        .split("T")[0];
      $(".week").click(function () {
        $("#search-start").attr("value", beforeWeek);
        $("#search-end").attr("value", toDay);
      });
      $(".month").click(function () {
        $("#search-start").attr("value", beforeMonth);
        $("#search-end").attr("value", toDay);
      });
      $(".year3").click(function () {
        $("#search-start").attr("value", beforeyear3);
        $("#search-end").attr("value", toDay);
      });
      $(".init").click(function () {
        $("#search-start").attr("value", "");
        $("#search-end").attr("value", "");
      });
    },
  };
};
