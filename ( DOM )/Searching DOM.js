// DOM manuplation is the most important part of JavaScript in this process we can Control HTML elements by JS

// There are several ways to access Elements in HTML but first we know about that what is ( text_node, comment_node, Element_node)

console.log(document.body.TEXT_NODE)
console.log(document.body.COMMENT_NODE)
console.log(document.body.ELEMENT_NODE)
{
    // Ager hum firstElementChild ko call krte ha to wo hume srif Firstelement ko call out kre ga

    let a = document.body.firstElementChild
    console.log(a)


    // Ager hum firstChild ko call krte ha to waha pr ek text or comment node hume mil sakta ha na k element

    let b = document.body.firstChild
    console.log(b)  // There is a hidden text node in HTML body thats why we can see a text node
}
// lastChild or lastElementChild Both properties working similarly
{
    let c = document.body.lastChild
    console.log(c)

    let d = document.body.lastElementChild
    console.log(d)
}

console.log(document.body.firstElementChild.nextSibling) // Output is = text_node
console.log(document.body.firstElementChild.nextElementSibling) // Output is = next_sibling

// Fark nhi parta aap firstElementChild ya firstChild k zarye parent ko find out kro ha to dono body k hi bache
{
    const parents = document.body.firstElementChild;
    var output = parents.parentElement
    console.log(output)

    const family = document.body.firstChild;
    var out = parents.parentElement
    console.log(out)
}
