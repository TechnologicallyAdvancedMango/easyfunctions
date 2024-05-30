// Add Elements
function addElement(tagName, content, attributes) {
    // Create a new element
    var element = document.createElement(tagName);

    // Set the content
    element.innerHTML = content;

    // Set the attributes
    if(attributes && typeof attributes === 'object') {
        for(var key in attributes) {
            if(attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
    }

    // Append the element to the body
    document.body.appendChild(element);
}

// Console
document.getElementById("console").addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        var code = document.getElementById("console").value;
        eval(code);
    }
});
