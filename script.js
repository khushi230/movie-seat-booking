const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat :not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelected = document.getElementById("movie");

let ticketPrice = parseInt(movieSelected.value);

const updateCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const updatedCount = selectedSeats.length;
  count.innerHTML = updatedCount;
  total.innerHTML = updatedCount * ticketPrice;
};

movieSelected.addEventListener("change", (e) => {
  ticketPrice = e.target.value;
  updateCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateCount();
});
