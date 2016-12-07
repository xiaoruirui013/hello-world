/**
 * Created by Administrator on 2016/12/2.
 */
$(function(){
    var $tab_bar = $("#yz_tousu .tab .tab- .text");
    $tab_bar.click(function(){
        $(this).addClass('tslist-bg').siblings().removeClass('tslist-bg');
        var index = $tab_bar.index(this);
        $('#yz_tousu>#tab_content>.tab_list').eq(index).show().siblings().hide();
    });





});