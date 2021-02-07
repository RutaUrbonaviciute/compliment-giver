document
.querySelector('.request-compliment')
.addEventListener('click', () => {
  fetch('/compliment')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.querySelector('.compliment').innerText = data.compliment
  })
  .catch((err) => {
    console.log(err)
  });
})