var $ = function (id) {
    return document.getElementById(id);
}
window.onload = function () {
    var listNode = $("imageList");
    var captionNode = $("caption");
    var imageNode = $("image");
    var imageLinks = listNode.getElementsByTagName("a");
    // TODO task    

    // Process image links
    var i, linkNode, image;
    for (i = 0; i < imageLinks.length; i++) {
        linkNode = imageLinks[i];

        // Attach event handler
        linkNode.onclick = function (evt) {
            var link = this;
            imageNode.src = link.getAttribute("href");
            captionNode.firstChild.nodeValue = link.getAttribute("title");
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        }
        // Preload image
        image = new Image();
        image.src = linkNode.getAttribute("href");
    }




    $("firstLink").focus();
}
