
(function () {



    function get_numberPosts() {
        let Posts = {};
        Posts.numberPosts = $('._6a-y._3l2t._18vj').length;
        Posts.numberLiked = $('._3_16._6a-y._3l2t._18vj').length;
        Posts.numberNoLike = Posts.numberPosts - Posts.numberLiked;
        return Posts;

    };


    function get_numberAddFriends() {
        let AddFriends = {};
        AddFriends.newFriends = $(".FriendRequestAdd.addButton").length;
        AddFriends.loimoi = $(".FriendRequestAdd.addButton").length;
        return AddFriends;
    }; 

    function get_comments() {
        let comments = {};
        comments.num_liked = $('._3_16._6a-y._6qw5._77yo').length;
        comments.num_com = $("._6a-y._6qw5._77yo").length;
        comments.num_Nolike = comments.num_com - comments.num_liked;

        return comments;
    };
    function like_posts() {
        $('._6a-y._3l2t._18vj').each(function(element) {
            setTimeout(
                element.click()
            , 3000);
        });
       setTimeout(() => {
        swal("Hoàn Thành", "Bạn vừa thích bài viết", "success");
       },3000 );
    };
    function unlike_posts() {
        swal("Hoàn Thành", "Bạn vừa thích bài viết", "success");
    };
    function like_comments() {
        swal("Hoàn Thành", "Bạn vừa thích bài viết", "success");
    };
    function unlike_comments() {
        swal("Hoàn Thành", "Bạn vừa thích bài viết", "success");
    };
    function Confirm_Add() {
        swal("Hoàn Thành", "Bạn vừa thích bài viết", "success");
    };
    function UnConfirm_Add() {
        swal("Hoàn Thành", "Bạn vừa thích bài viết", "success");
    };
    function send_Add() {
        swal("Hoàn Thành", "Bạn vừa thích bài viết", "success");
    };



    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

        localStorage.setItem('css', JSON.stringify(request.fbCss));

        if (request.fbLike == "get_numberfbPosts")
            sendResponse({ number: get_numberPosts() });
        if (request.fbLike == "get_numberAddFriends")
            sendResponse({ number: get_numberAddFriends() });
        if (request.fbLike == "get_comments")
            sendResponse({ number: get_comments() });


        if (request.fbLike == "like_posts")
            like_posts();
        if (request.fbLike == "unlike_posts")
            unlike_posts();
        if (request.fbLike == "like_comments")
            like_comments();
        if (request.fbLike == "unlike_comments")
            unlike_comments();

        if (request.fbLike == "Confirm_Add")
            Confirm_Add();
        if (request.fbLike == "UnConfirm_Add")
            UnConfirm_Add();
        if (request.fbLike == "send_Add")
            send_Add();
    });
    css();

    function css() {
        let css = JSON.parse(localStorage.getItem('css'));
        if (css == "black") {
            $('body').addClass('_black');
            $('._2s1x ._2s1y').addClass("_black");
            $('#contentCol').addClass('_black');
        }
        if (css == "light") {
            $('body').addClass('_light');
            // $('._2s1x ._2s1y').addClass("_light");
            $('#contentCol').addClass('_light');
        }
    }


})()