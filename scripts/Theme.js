function Theme() {
  if (document.getElementById('navbar').classList.contains('bg-light')) {
    document.getElementById('navbar').classList.remove('bg-light');
    document.getElementById('navbar').classList.remove('navbar-light');
    Array.from(document.getElementsByClassName('text')).forEach((element) => {
      element.classList.remove('text-dark');
    });
    document.getElementById('submit').style.backgroundColor = '#2980B9';

    Array.from(document.getElementsByClassName('child')).forEach((element) => {
      element.style.border = '1px solid white';
    });
    document.getElementById('navbar').classList.add('bg-dark');
    document.getElementById('navbar').classList.add('navbar-dark');
    Array.from(document.getElementsByClassName('text')).forEach((element) => {
      element.classList.add('text-light');
    });
    document.getElementById('dark').innerHTML = 'Change Theme to Light';
    document.body.style.backgroundColor = 'grey';
  } else {
    document.getElementById('navbar').classList.remove('bg-dark');
    document.getElementById('navbar').classList.remove('navbar-dark');

    Array.from(document.getElementsByClassName('text')).forEach((element) => {
      element.classList.remove('text-light');
    });
    document.getElementById('submit').style.backgroundColor = 'green';

    Array.from(document.getElementsByClassName('child')).forEach((element) => {
      element.style.border = '1px solid black';
    });
    document.getElementById('navbar').classList.add('bg-light');
    document.getElementById('navbar').classList.add('navbar-light');
    Array.from(document.getElementsByClassName('text')).forEach((element) => {
      element.classList.add('text-dark');
    });
    document.getElementById('dark').innerHTML = 'Change Theme to Dark';
    document.body.style.backgroundColor = 'white';
  }
}
