var titre = document.querySelector('.maj');
var mots1 = titre.textContent.split(' ');
//var mots2 = desc.textContent.split(' ');

var nouveauContenu1 = '';
mots1.forEach(function(mot) {
    nouveauContenu1 += '<span class="lettre">' + mot.charAt(0) + '</span>' + mot.slice(1) + ' ';
});
/*var nouveauContenu2 = '';
mots2.forEach(function(mot) {
    nouveauContenu2 += '<span class="lettre">' + mot.charAt(0) + '</span>' + mot.slice(1) + ' ';
});
*/
titre.innerHTML = nouveauContenu1.trim();
//desc.innerHTML = nouveauContenu2.trim();