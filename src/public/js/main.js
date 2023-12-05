document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('home-page')) {
        var pageInfo = {
            route: "/"
        };

        var header = document.getElementById("header");

        if (pageInfo.route === "/") {
            header.classList.remove('scrollNav');
        } else {
            header.classList.add('scrollNav');
        }

        window.onscroll = function () {
            window.onscroll = function () {
                scroll = document.body.scrollTop;
                header = document.getElementById("header");

                if (scroll > 20) {
                    header.classList.add('scrollNav');
                } else if (scroll < 20) {
                    header.classList.remove('scrollNav');
                }
            }
        };
    }
});