(() => {
  const cards = document.getElementsByClassName("card");
  const inside = cards[1];
  for (card of cards) {
    card.onclick = () => {
      inside.classList.toggle("hide");
    }
  };
})()