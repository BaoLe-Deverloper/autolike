$(function () {





    get_numberPost();
    function get_numberPost() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { fbLike: "get_numberfbPosts" }, function (response) {
                if (response.number.numberPosts != 0 && response.number.numberPosts != null) {
                    $("#num_Posts").html("Tìm Thấy Tât cả " + response.number.numberPosts + " bài viết");
                    $("#num_liked").html("Đã Thích : " + response.number.numberLiked + " Có thể thích : " + response.number.numberNoLike);
                    $(".like_posts").removeAttr('disabled');
                     $(".unlike_posts").removeAttr('disabled');
                }

            });
        });
    }

    get_comments();
    function get_comments() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { fbLike: "get_comments" }, function (response) {
                if (response.number.num_com != 0 &&  response.number.num_com != null) {
                $("#num_comments").html("Tìm Thấy Tât cả " + response.number.num_com + " bình luận");
                $("#num_comments_info").html("Đã Thích : " + response.number.num_liked + " Có thể thích : " + response.number.num_Nolike);
                $(".like_comments").removeAttr('disabled');
                $(".unlike_comments").removeAttr('disabled');
            
            }

            });
        });
    }

    get_numberAddFriends();
    function get_numberAddFriends() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { fbLike: "get_numberAddFriends" }, function (response) {
                if (response.number.newFriends != 0 && response.number.newFriends != null) {
                    $("#numberAddFriends").html("Tìm Thấy Tât cả " + response.number.newFriends + " bạn mới");
                    $("#numberAddFriends_info").html('');
                    $(".send_Add").removeAttr('disabled');
                }
                if (response.number.newFriends != 0 && response.number.newFriends != null) {
                    $("#numberLoiMoi").html("Bạn có " + response.number.loimoi + " Lời mời kết bạn");
                    $("#numberLoiMoi_info").html('');
                    $(".Confirm_Add").removeAttr('disabled');
                }
            });
        });
    }
   
    $('.like_posts').off().on('click', function () {

        send_fblike("like_posts");

       
    })
    $('.unlike_posts').off().on('click', function () {

        send_fblike("unlike_posts");
       
    })
    $('.like_comments').off().on('click', function () {

        send_fblike( "like_comments");
       
    })
    $('.unlike_comments').off().on('click', function () {

        send_fblike("unlike_comments");
    
    })
    $('.Confirm_Add').off().on('click', function () {

        send_fblike("Confirm_Add");
      
    })
    $('.UnConfirm_Add').off().on('click', function () {

        send_fblike("UnConfirm_Add");
       
    })
    $('.send_Add').off().on('click', function () {

        send_fblike("send_Add");
      
    })



    function send_fblike (val){
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { fbLike: val }, function (response) {

            });
        });
    }



    $(".btn-dark").off().on("click", function(){
       sendName_Css ("dark");
    })
    $(".btn-light").off().on("click", function(){
        sendName_Css ("light");
    })
    $(".btn-black").off().on("click", function(){
        sendName_Css ("black");
    })
    $(".btn-Special").off().on("click", function(){
        sendName_Css ("specia");
    })

    function sendName_Css (name)
    {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { fbCss: name }, function (response) {

            });
        });
    }

}());





