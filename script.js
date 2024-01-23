const word = document.getElementById('word');
const inbox = document.getElementById('inbox');

word.addEventListener('input', moodchange);

function moodchange() {
    if (word.value == "happy") {
        inbox.style.backgroundColor ="yellow";
    }
    else if (word.value == "sad") {
        inbox.style.backgroundColor ="blue";
    }
    else if (word.value == "mad") {
        inbox.style.backgroundColor ="red";
    }
    else if (word.value == "joy") {
        inbox.style.backgroundColor ="pink";
    }
    else if (word.value == "purple") {
        inbox.style.backgroundColor ="purple";
    }
    else {
        inbox.style.backgroundColor ="grey";
    }
}