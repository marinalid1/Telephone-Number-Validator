/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/

function telephoneCheck(str) {
    // dashRegex looks for three digits followed by a dash, then the same pattern and the last one looks for a group of four, optional digit 1 in the beginning
    const  dashRegex = /^1? ?[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    // paraenthesisRegex looks for three digits in paranthesis followed by an optional space, then looks for a group of three then a group of four seperated by a dash, optional digit 1 in the beginning
    const  parenthesisRegex = /^1? ?\([0-9]{3}\) ?[0-9]{3}-[0-9]{4}$/;
    // spaceRegex looks for three digits followed by a space, then the same pattern and the last one looks for a group of four, optional digit 1 in the beginning
    const  spaceRegex = /^1? ?[0-9]{3} [0-9]{3} [0-9]{4}$/;
    // straightRegex looks for ten digits, with an optional digit 1 at the start
    const  straightRegex = /^1?[0-9]{10}$/;
 
    // if str test true for ANY of the regex, return true
    if(dashRegex.test(str) === true || parenthesisRegex.test(str) === true || spaceRegex.test(str)=== true || straightRegex.test(str) === true){
        return true;
    }
      // if str does not test true for any if the regex, defaults to false
      return false;
   }
   
   telephoneCheck("5555555555");
 
