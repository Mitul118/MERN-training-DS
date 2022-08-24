window.onload = function () {
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    		    
    var headingNode;
    for(var i = 0; i<h2Elements.length;i++)
    {
        headingNode=h2Elements[i];
        
        //Event Handler
        headingNode.onclick = function() {
            var h2 = this;

            // var h2=headingNode
            if(h2.hasAttribute("class"))
            {
                h2.removeAttribute("class");
            }
            else{
                h2.setAttribute("class","minus");
            }
            if (h2.nextElementSibling.hasAttribute("class")) {
                h2.nextElementSibling.removeAttribute("class");
            }
            else{
                h2.nextElementSibling.setAttribute("class","open");
            }
        }
    }

    // TODO
    // Get all <h2> elements
    	
    // Attach event handler

}
var $ = function (id) {
	return document.getElementById(id);
}