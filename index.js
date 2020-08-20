(() => {
  const cards = document.getElementsByClassName("card");
  const inside = cards[1];
  for (card of cards) {
    const windowHeight = window.innerHeight;

    const cardMargin = windowHeight * 0.1;
    const cardHeight = windowHeight * 0.8;
    card.style.height =  cardHeight+ "px";
    card.style.top = cardMargin + "px";

    card.onclick = () => {
      inside.classList.toggle("hide");
    }
  };
})()