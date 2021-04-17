
class Element {
    constructor(tagName, props, children) {
        this.tagName = tagName;
        this.props = props;
        this.children = children;
        this.key = props.key?props.key:null
    }
}

function createElement(tagName, props, children) {
    return new Element(tagName, props, children);
}

function render(domObj) {
    let el = document.createElement(domObj.tagName);

    for (let key in domObj.props) {
        let value = domObj.props[key];
        setAttr(el, key, value);
    }

    domObj.children.forEach(child => {

        child = (child instanceof Element) ? render(child) : document.createTextNode(child);

        el.appendChild(child);
    });

    return el;
}

function setAttr(node, key, value) {
    switch(key) {
        case 'value':
            if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

export {
    createElement,
    render,
    setAttr,
    Element
}