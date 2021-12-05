document.addEventListener("keypress", (e) => {
  let key = e.key.toUpperCase();
  if (e.shiftKey) {
    key += "b";
  }
  playKey(key);
});

const playKey = (key) => {
  const note = document.getElementById(key);
  if (!note) return;
  const keyElement = document.querySelector(`div[data-note="${key}"]`);
  note.currentTime = 0;
  note.play();
  keyElement.classList.add("active");
  note.addEventListener("ended", () => {
    keyElement.classList.remove("active");
  });
};

const redirect = () => {
  window.location.href = "https://github.com/MaheshUdvag/Javascript-learning";
};
