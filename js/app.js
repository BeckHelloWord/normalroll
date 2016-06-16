var product = {
    doFun: function () {
        this.tabSth();
    },
    tabSth: function () {
        var num = 0;

        var leftBox = $('.left-ui'), rightBox = $('.right-ui');
        var liLeft = leftBox.find('.left-list').length, liRight = rightBox.find('.right-list').length;
        $('.count').html(liLeft);
        $('.current').html(num + 1);
        var liLwidth = leftBox.find('.left-list').outerWidth(true);
        var liRwidth = rightBox.find('.right-list').outerWidth(true);
        leftBox.css({width: liLeft * liLwidth});
        rightBox.css({width: liRight * liRwidth});

        //右点击
        $('.next').click(function () {
            if (num >= liLeft - 1) {
                return false;
            } else {
                ++num;
                leftBox.animate({'left': -num * liLwidth}, 500);
                rightBox.animate({'left': -num * liRwidth}, 500);
                $('.current').html(num + 1);
            }
        });
        //左点击
        $('.prev').click(function () {
            if (num <= 0) {
                return false;
            } else {
                --num;
                leftBox.animate({'left': -num * liLwidth}, 500);
                rightBox.animate({'left': -num * liRwidth}, 500);
                $('.current').html(num + 1);
            }
        })

    }
};
