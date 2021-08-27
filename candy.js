
const spanSpam = () => {
  for (let i = 1; i < 7; i++) {
    let itm = document.getElementById("candySpan");
    const cln = itm.cloneNode(true);
    document.getElementById("headingGroup").appendChild(cln);
  }
}
