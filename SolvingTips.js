//UNDER STANDING PROBMLEM.

//Write a function to add two numbers and returns their sum

// 1. Can I restate the problem in my own words?

// IMPLEMENT ADDITION

// 2. What are the inputs that go into the problem?

//

// 3. What are the outputs that should come from the solution to the problem?

// SHOULD IT BE AN INT, FLOT, or return a STRING.

// 4 . Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?

//DO WE HAVE ENOUGH INFO TO DO THE PROBLEM, WHAT HAPPENS WHEN ONLY ONE PARAMETER IS PASSED.

// 5. How should I label the important pieces of data that are a part of the problem?

// EXPLORE CONCRETE EXAMPLES

//START WITH SIMPLE EXAMPLES
// PROGRESS TO MORE COMPLEX EXAMPLES
// EXPLORE EXAMPLES WITH CONCERETE INPUTS
// EXPLORE EXAMPLES WITH INVALID INPUTS

// PROBLEM SOLVING
// UNDERSTAND THE PROBLEM
// EXPLORE CONCRETE EXMAPLES
//BREAK IT DOWN

// WRITE A FUNCTION which takes in a string and returens counts of each character in the string

function charAtNum(str) {
  const obj = {};
  const lowerStr = str.toLowerCase().replace(/ /g, "");
  //console.log(lowerStr)
  for (const key of lowerStr) {
    console.log(obj[key])
    obj[key] = (obj[key])+ 1 || 1;
    //    obj[key] = obj[key] >0 ? obj[key]+1: 1;
    console.log(obj[key] + "end")
  }
  return obj;
}

//Make object to return at end
// lopp over string
//loop over string for each,
// if the char is a key in object add + to count
// if char is not in object add it and set to 1
// if char is a number/letter
//return object end

console.log(charAtNum("Hi there"));
