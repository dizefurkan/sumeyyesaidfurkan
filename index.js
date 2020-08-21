(() => {
  const cards = document.getElementsByClassName("card");
  const outside = cards[0];
  const inside = cards[1];
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const isLimitedHeight = windowHeight > 600 && windowWidth < 600;
  const maxHeight = isLimitedHeight
    ? 600
    : windowHeight;
  const cardTop = isLimitedHeight
    ? ((windowHeight - maxHeight) / 2) + maxHeight * 0.05
    : maxHeight * 0.05;
  const cardHeight = maxHeight * 0.9;

  for (card of cards) {
    card.style.height =  cardHeight + "px";
    card.style.top = cardTop + "px";

    card.onclick = () => {
      outside.classList.toggle("hide");
      inside.classList.toggle("show");
    }
    card.onmousedown = (event) => {
      console.log("MOUSE DOWN", event)
    }
    card.onmouseup = (event) => {
      console.log("MOUSE UP", event)
    }
  };
})();
