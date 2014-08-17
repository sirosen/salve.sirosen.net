$(document).ready(
    $.getJSON("/javascripts/info.json",
        function ( obj ) {
            $('.versionstring').each(
                function (index, elem) {
                    elem.innerHTML = "Latest Stable Version " + obj.version
                }
            )
        }
    )
)
