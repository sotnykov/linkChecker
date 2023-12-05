document.getElementById('redirectToLink').addEventListener('click', function () {
  var link = prompt("Enter the link:");

  if (!/^https?:\/\//i.test(link)) {
    link = 'http://' + link;
  }

  window.location.href = link;
});

document.getElementById('checkProtocol').addEventListener('click', function () {
  var link = prompt("Enter the link to check the protocol:");

  if (/^https?:\/\//i.test(link)) {
    alert("The protocol is present: " + link.match(/^https?:\/\//i)[0]);
  } else {
    alert("The protocol is missing. Adding By default http://");
    link = 'http://' + link;
    alert("Updated link: " + link);
  }
});