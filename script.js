$(document).ready(function() {
    $("#iconContainer img").mouseenter(function() {
        let name = $(this).attr("data-name");
        $("#inText").text("In: " + name);
        $(this).css("opacity", 0.5);
    });

    $("#iconContainer img").mouseleave(function() {
        let name = $(this).attr("data-name");
        $("#outText").text("Out: " + name);
        $(this).css("opacity", 1.0);
    });

    $("#iconContainer img").dblclick(function() {
        let name = $(this).attr("data-url");
        window.open(URL, "_blank");
    })

    $("#iconContainer img").click(function(event) {
        let image = $(this).attr("src");
        let enlargedIcon = $("<img>").attr("src", image);

        enlargedIcon.css({
            height: "200px",
            width: "auto",
            position: "absolute",
            left: event.pageX + 10,
            top: event.pageY + 10,
            PointerEvent: "none"

        });

        $("body").append(enlargedIcon);
    });

    $("#iconContainer").mousemove(function(event) {
        $("#mouseText").text(
            "Mouse X: " + event.pageX +
            ", Y: " + event.pageY
        );
    });
});