
console.log('hi!');

const myNotes = document.getElementById('my-notes');

for (let i=0; i<myNotes.children.length; i++) {
    myNotes.children[i].addEventListener('click', (elem) => {

        if (elem.target.style.backgroundColor === 'yellow') {
            elem.target.style.backgroundColor = '#baf7e2';
        } else {
            elem.target.style.backgroundColor = 'yellow';
        }
       
    })
}
