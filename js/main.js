// Лекція 28

// Завдання 1

const textReplace = document.querySelectorAll('h2');

textReplace[1].innerHTML = 'DOM method description';



// Завдання 2

const links = document.querySelectorAll('[href^="site.ua/ua/"]');

console.table(links,['href']);



// Задвання 3

const list = document.getElementById('ul')
const itemFirst = document.getElementById('first')

const itemNull = document.createElement('li');
const itemSecond = document.createElement('li');
const itemFourth = document.createElement('li');

itemNull.setAttribute('id', 'null');
itemNull.innerHTML = 0;
list.prepend(itemNull);

itemSecond.setAttribute('id', 'second');
itemSecond.innerHTML = 2;
list.insertBefore(itemSecond, list.children[2])


itemFourth.setAttribute('id', 'fourth');
itemFourth.innerHTML = 4;
list.appendChild(itemFourth);



// Завдання 4

const body = document.querySelector('body');
const h1 = document.querySelectorAll('h1')[1];

const link = document.createElement('a');

link.setAttribute('id', 'link');
link.setAttribute('href', 'https://dom.spec.whatwg.org/');
list.after(link);
link.append(h1)







