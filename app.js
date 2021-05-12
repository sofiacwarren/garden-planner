initEvents();
// initialize events on the page
function initEvents(){

  document.querySelector('form').addEventListener('submit', submit);
  document.getElementById('clear').addEventListener('click', clearList);
  document.querySelector('ul').addEventListener('click', deleteOrGot);

}

// submit/interaction
function submit(e) {

  e.preventDefault();
  let input = document.querySelector('input');

  if (input.value != '') {
    addSeed(input.value);
  }

  input.value = '';
}

// add seeds
function addSeed(seed) {

  let ul = document.querySelector('ul');
  let li = document.createElement('li');

  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${seed}</label>`;
  ul.appendChild(li);
  document.querySelector('.seedBoard').style.display = 'block';
}

// clear seed list
function clearList(e) {

  let ul = document.querySelector('ul').innerHTML = '';

}

// action selector
function deleteOrGot(e) {

  if (e.target.className == 'delete') {
    deleteSeed(e);
  }
  else {
    gotSeed(e);
  }
}

// delete seed
function deleteSeed(e) {

  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;

  parentNode.removeChild(remove);
}

// got seed
function gotSeed(e) {
  const seedTarget = e.target.nextSibling;

  if (e.target.checked) {
    seedTarget.style.textDecoration = "line-through";
    seedTarget.style.color = "#ff0000";
  } else {
    seedTarget.style.textDecoration = "none";
    seedTarget.style.color = "#2f4f4f";
  }
}
