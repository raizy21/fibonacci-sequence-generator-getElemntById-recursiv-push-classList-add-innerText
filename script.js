function generateFibonacci() {
  let num = document.getElementById("num").value;
  let sequence = [0, 1];

  while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= num) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  let result = document.getElementById("sequence");
  result.classList.add(".sequence");
  result.innerText = "Fibonacci Sequence:" + sequence.join(",");
}
