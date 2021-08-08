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


    // 好友列表 

    $(".btnShowFriend").click(function () {
        $(".asideMenu").toggleClass("active");
    });


    // 新增常用配送地址
    var addressOrder = 1;

    $(".addDelAdressBtn").click(function () {
        addressOrder++;
        var addDelAdressHTML =
            `<div class="AddAdressItem">
                <label for="DeliveryAddresses" style="visibility: hidden;">常用配送地址${addressOrder}：</label>
                <input type="text" class="form-control" id="DeliveryAddresses" name="DeliveryAddresses" placeholder="留白請刪除...">
                <button type="button" class="Addressclose">刪除</button>
                </div>
                <br><br>`;
        $(this).before(addDelAdressHTML);
    })

    // 刪除常用配送地址
    // 動態新增的元素必須要用此寫法才行
    $(".AddressSection").on("click", ".Addressclose", function () {
        addressOrder--;
        $(this).closest(".AddAdressItem").remove();
    })

    // 欄位判斷
    $(".submitBtn").click(function () {
        
        // 密碼配對
        let password = $("#Password").trim($("#Password")).val();
        let passwordAgain = $("#passwordAgain").trim().val();

        if (password != passwordAgain) {
            alert("密碼不相同，請重新輸入");
        }
    })

    //是否啟用
    var switchStatus = false;
    $(".IsEnalbe input").change(function (e){
        if ($(this).is(':checked')) {
            switchStatus = $(this).is(':checked');
            console.log(switchStatus);
        }
        else {
            switchStatus = $(this).is(':checked');
            console.log(switchStatus);
        }
    });

});