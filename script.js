function outputUpdate() {
            
    $("#outputContent").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssContent").val() + "</style></head><body>" + $("#htmlContent").val() + "</body></html>");

    document.getElementById("outputContent").contentWindow.eval($("#jsContent").val());

}

$(".Btn").click(function () {
    var panelId = $(this).attr("id") + "Content";
    $("#" + panelId).toggleClass("hidden");
    var panelsActive = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / panelsActive) - 21);
});

// On Page load 

$(".panel").height($(window).height() - $("#navBar").height() - 48);
$(".panel").width(($(window).width() / 2) - 21);

outputUpdate();

// on change on any textarea

$("textarea").on('change keyup paste', function () {
    outputUpdate();
});