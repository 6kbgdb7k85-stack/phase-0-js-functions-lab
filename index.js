function calculateTax(amount){
    const taxRate = 0.10
    return amount*taxRate
}

function convertToUpperCase(string){
    let upperCaseString = '';
    for (let i=0;i<string.length;i++){
        upperCaseString+=(string[i].toUpperCase())
    }
    return upperCaseString;
}

function findMaximum(num1,num2){
    let largerNumber;
    if(num1>num2){
        largerNumber=num1;
    }else if (num2>num1){
        largerNumber=num2;
    }else {
        return num1
    }
    return largerNumber
}

function isPalindrome(word){
    let reverseWord = '';
    for (let i=word.length-1;i>=0;i--){
        reverseWord+=word[i];
    }
    if(reverseWord===word){
        return true;
    }else{
        return false;
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    return originalPrice-(originalPrice*(discountPercentage/100));
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };