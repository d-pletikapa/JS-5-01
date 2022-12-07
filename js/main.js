//Задача:
//Всё исправить
//TODO: Необходимо все элементы вернуть на свои места используя только JS

//В файле html можно подключить js файл, изменений в body делать нельзя

const itemListContent = document.getElementsByClassName('content'); //контент у карточек
const Content04 = itemListContent[0];
const Content01 = itemListContent[1];
const Content02 = itemListContent[2];
const Content03 = itemListContent[3];
const Content05 = itemListContent[4];
const Content06 = itemListContent[5];

const headersH2 = document.querySelectorAll('h2'); // заголовки h2
const headersH201 = headersH2[0];
const headersH202 = headersH2[1];
const headersH203 = headersH2[2];
const headersH204 = headersH2[3];
const headersH205 = headersH2[4];
const headersH206 = headersH2[5];

const itemList = document.querySelectorAll('.items .item'); // сама карточка
const itemList04 = itemList[0];
const itemList01 = itemList[1];
const itemList02 = itemList[2];
const itemList03 = itemList[3];
const itemList05 = itemList[4];
const itemList06 = itemList[5];

const propsList = document.querySelectorAll('.props__list'); // ol
const propsList01 = propsList[0];
const propsList02 = propsList[1];
const propsList03 = propsList[2];
const propsList04 = propsList[3];
const propsList05 = propsList[4];
const propsList06 = propsList[5];

const propsItems = document.querySelectorAll('.props__list .props__item'); // li в ol
const propsItems01 = propsList01.querySelectorAll('.props__item');
const propsItems03 = propsList03.querySelectorAll('.props__item');
const propsItems06 = propsList06.querySelectorAll('.props__item');

//ставим на место заголовки
const elem = document.createElement('h2');
const text = document.createTextNode('This и прототивы объектов');
elem.append(text);

headersH202.classList.add('item__title'); // добавили класс для корректного отображения заголовка
elem.classList.add('item__title');// добавили класс для корректного отображения заголовка
headersH204.replaceWith(elem);
headersH203.after(headersH205.cloneNode(true));

headersH205.replaceWith(headersH206.cloneNode(true));
headersH206.replaceWith(headersH203);

// ставим на места li элементы в описании
propsItems01[2].after(propsItems03[3]);
propsList03.append(propsItems06[8]);
propsList03.append(propsItems06[9]);

//ставим на места ol списки
Content05.append(propsList04);
Content03.append(propsList05);

// ставим на места item (карточки)
itemList03.after(itemList04);





