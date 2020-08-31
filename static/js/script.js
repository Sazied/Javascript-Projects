// Challenge 1: Your age in days

let currentYear = 2020;

const ageInDays = () => {
  let birthYear = prompt("What year were you born?");
  let ageInDaysAlgorithm = (currentYear - birthYear) * 365;

  // use DOM -Document Object Model to show this on the page instead on the console log
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "You are " + ageInDaysAlgorithm + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
};

const reset = () => {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Generate Cat 

const generateCat = () => {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

