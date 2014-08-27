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
