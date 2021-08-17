jQuery(document).ready(function ($) {


    $("#AddressSectionZipCode").multiSelect();

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


    //是否啟用
    var switchStatus = false;
    $(".IsEnalbe input").change(function (e) {
        if ($(this).is(':checked')) {
            switchStatus = $(this).is(':checked');
            console.log(switchStatus);
        }
        else {
            switchStatus = $(this).is(':checked');
            console.log(switchStatus);
        }
    });

    // 預覽圖片

    var previewFunction = function (e) {
        var reader = new FileReader();
        reader.readAsDataURL(e);
        reader.addEventListener("load", function () {
            var img = `<img src = "${reader.result}" class = "preview_Show">`;
            document.getElementById("previewIMG").innerHTML = "";
            document.getElementById("previewIMG").insertAdjacentHTML("beforeend", img);
        })
    }

    $("#formFile").change(function (e) {
        console.log(e.target.files.length) // 取得到值
        if ((this).files.length > 0) { // 取不到值 顯示Cannot read property 'length' of undefined
            previewFunction(this.files[0]);
        } else {
            document.getElementById("previewIMG").innerHTML= '<span class="text">預覽圖</span>';
        }
    })


});