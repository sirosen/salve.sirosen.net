$(document).ready(
    $.getJSON("/javascripts/info.json",
        function ( obj ) {
            $('.versionstring').each(
                function (index, elem) {
                    if (elem.id === "stable") {
                        elem.innerHTML = "Latest Stable Version " + obj.stable
                    }
                    else if (elem.id === "dev") {
                        elem.innerHTML = "Latest Development Version " + obj.dev
                    }
                    else {
                        elem.innerHTML = ""
                    }
                }
            )
        }
    )
);

$(function() {
    $(".folding-code").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
        icons: {
            header: "fold-header",
            activeHeader: "active-fold-header"
        }
    })
});
