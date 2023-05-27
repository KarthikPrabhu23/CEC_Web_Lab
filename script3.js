function findLeftMostVowel() {
    var inputString = document.getElementById("inputString").value.toLowerCase();
    var vowels = ["a", "e", "i", "o", "u"];
  
    for (var i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        document.getElementById("output1").textContent =
          "Left-Most Vowel Position: " + (i + 1);
        return;
      }
    }
  
    document.getElementById("output1").textContent = "No vowels found.";
  }
  
  function reverseDigits() {
    var inputNumber = document.getElementById("inputNumber").value;
    var reversedNumber = parseFloat(
      inputNumber.toString().split("").reverse().join("")
    );
  
    document.getElementById("output2").textContent =
      "Reversed Number: " + reversedNumber;
  }