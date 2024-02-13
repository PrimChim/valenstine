let yes_button = document.getElementById('yes');
let no_button = document.getElementById('no');

let yes_width = 60.7;
let yes_height = 38.5;
let yes_font = 16;

if (yes_button) {
  yes_button.addEventListener('click', function() {
    // add gif of confetti
    // change background color
    document.body.style.backgroundColor = 'palevioletred';
    no_button.style.display = 'none';
    yes_button.style.fontSize = '50px';
    
    // add gif element to the body 10 times in random positions with delay of 1 seconds
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        let img = document.createElement('img');
        let img1 = document.createElement('img');
        img.src = './giphy.gif';
        img1.src = './giphy1.gif';
        img.style.position = 'absolute';
        img.style.top = `${Math.random() * 100}vh`;
        img.style.left = `${Math.random() * 100}vw`;
        img.style.width = '300px';
        img.style.height = '300px';
        img1.style.position = 'absolute';
        img1.style.top = `${Math.random() * 100}vh`;
        img1.style.left = `${Math.random() * 100}vw`;
        img1.style.width = '300px';
        img1.style.height = '300px';
        document.body.appendChild(img);
        document.body.appendChild(img1);
      }, i * 1000);
    }
});
}

if (no_button) {
  no_button.addEventListener('click', function() {
    yes_height = yes_height + 50;
    yes_width = yes_width + 50;
    yes_font += 10;
    yes_button.style.height = `${yes_height}px`;
    yes_button.style.width = `${yes_width}px`;
    yes_button.style.fontSize = `${yes_font}px`;
  });
}