console.log('Тренировка');

const html = document.documentElement;
console.log(document.parentElement);//  у document нет родителя
console.log(html.tagName);

console.log(html.childNodes);
console.log(html.lastChild);
console.log(html.childNodes[1]);
console.log(document.head);
console.log(document.body);
console.log(html.children);
console.log(html.children[1].children);

//методы документа для перебора и обращения к элементам DOM.
console.log('--------------------------------------------------------------------')
const id = document.getElementById('title');
console.log("-> id", id);

const className = document.getElementsByClassName('item');
console.log("-> document.getElementsBy className", className);
console.log("->document.getElementsBy  className[1]", className[1]);

// редкие случаи:
//1) Получить один элемент по классу (есть возможность перебрать через forEach):
console.log('1) получить один элемент по классу:');
const name = document.getElementsByName('title-items');
console.log('document.getElementsBy Name', name);
//2) Получить все элементы по имени тега.
console.log('2) Получить все элементы по имени тега.');
const tagName = document.getElementsByTagName('li');
console.log('document.getElementsBy TagName',tagName);

// Поиск по селектору :
console.log('Поиск по селектору :');

const h1 = document.querySelector('#title');
console.log('document.querySelector (h1)', h1);

const h2 = document.querySelectorAll('h2');
console.log('document.querySelectorAll (h2)', h2);
const h22 = document.querySelectorAll('[alt="Типы и грамматические конструкции"]')
console.log('(h22)', h22);

const h23 = document.querySelector('.container .props__list .props__item:nth-child(3)');
console.log('h23',h23);

const container = document.querySelector('.container');
const propsItem = container.querySelector('.props__item');
console.log("-> propsItem", propsItem);

const propsLists = document.querySelectorAll('.props__list');
console.log("-> propsLists", propsLists);
const propsItems = document.querySelectorAll('.props__item');
console.log("-> propsItems", propsItems);

//Практика
console.log(propsItems[2]);
// propsItems[2].remove();
propsLists[1].append(propsItems[2]);
propsLists[0].prepend(propsItems[5]);

propsLists[0].after(propsItems[5]);
propsLists[0].before(propsItems[5]);
propsLists[0].replaceWith(propsItems[5]);

const cloneElem = propsItems[2].cloneNode(true);
const elem = document.createElement('h1');
const text = document.createTextNode('Новый элемент');
h1.append(text, text);