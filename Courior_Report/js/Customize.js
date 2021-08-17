jQuery(document).ready(function ($) {

    // sideBar

    $('.cart>li>a').click(function (event) {

        event.preventDefault();

        $(this).toggleClass('active');

        //我自己的ul 做收合效果
        $(this).siblings('ul').slideToggle();

        $(this).parent().siblings().find('a').removeClass('active');

        //this以外的都隱藏起來
        $(this).parent().siblings().find('ul').slideUp();

    });

    //datetimepicker

    $.datetimepicker.setLocale('zh'); // kr ko ja en

    var today = new Date();

    $('#start_date').datetimepicker({
        format: 'Y-m-d',
        onShow: function () {
            this.setOptions({
                maxDate: $('#end_date').val() ? $('#end_date').val() : false
            })
        },
        timepicker: false,
        beforeShowDay: function (date) {
            if (date.getYear() > today.getYear() ||
                (date.getYear() == today.getYear() && date.getMonth() > today.getMonth()) ||
                (date.getYear() == today.getYear() && date.getMonth() == today.getMonth() && date.getDate() > today.getDate())
            ) {
                return [false, ""]
            }
            return [true, ""];
        }
    });

    $('#end_date').datetimepicker({
        format: 'Y-m-d',
        onShow: function () {
            this.setOptions({
                minDate: $('#start_date').val() ? $('#start_date').val() : false
            })
        },
        timepicker: false,
        beforeShowDay: function (date) {
            if (date.getYear() > today.getYear() ||
                (date.getYear() == today.getYear() && date.getMonth() > today.getMonth()) ||
                (date.getYear() == today.getYear() && date.getMonth() == today.getMonth() && date.getDate() > today.getDate())
            ) {
                return [false, ""]
            }
            return [true, ""];
        }
    });

    


});