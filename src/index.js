import {createElement,render} from './element'
import diff from './diff'
import patch from './patch';

var div1 = createElement('div',{id:'virtual-dom'},[
    createElement('p',{},['Virtual DOM']),
    createElement('ul', { id: 'list' }, [
        createElement('li', { class: 'item' }, ['Item 1']),
        createElement('li', { class: 'item' }, ['Item 2']),
        createElement('li', { class: 'item' }, ['Item 3'])
    ]),
  ]) 
  var div2 = createElement('div',{id:'virtual-dom'},[
    createElement('p',{},['Virtual DOM']),
    createElement('ul', { id: 'list-group' }, [
        createElement('li', { class: 'item' }, ['Item 21']),
        createElement('li', { class: 'item' }, ['Item 23']),
        createElement('li', { class: 'item' }, ['Item 24'])
    ]),
  ]) 


  let root = render(div1)

  document.body.appendChild(root)

  let patches = diff(div1,div2)
  console.log(patches)

  patch(root, patches);


