let filterDrop = document.getElementById('filter_drop_button');
let filter = document.getElementById('filter');
let filterDown = document.getElementById('filter_apply');

filterDrop.onclick = function() {
  if(filter.classList.contains('filter_show')) {
    return;
  }
  filter.classList.add('filter_show');
}
filterDown.onclick = function() {
  filter.classList.remove('filter_show');
}
