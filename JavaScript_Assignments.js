//Q1
function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));

//Q2   It didnt work

//Q3 
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(randomInt(100));

//Q4
function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
       return n.toFixed(d);
       }
   console.log(decimals(7.150212, 3));
   console.log(decimals(7.170212, 2));
   console.log(decimals(8420, 2));

//Q7
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(12, 13));
  console.log(gcd_two_numbers(9, 3));

//Q8
function powerof2(n) {
    if (typeof n !== 'Is a power of 2') 
         return 'Not a power of two'; 
   
       return n && (n & (n - 1)) === 0;
   }
   
   console.log(powerof2(4));
   console.log(powerof2(18));
   console.log(powerof2(256));

//Q9
function round(num, dec){
    if ((typeof num !== 'number') || (typeof dec !== 'number')) 
  return false; 
    var num_sign = num >= 0 ? 1 : -1; 
    return (Math.round((num*Math.pow(10,dec))+(num_sign*0.0001))/Math.pow(10,dec)).toFixed(dec);
  }
  console.log(round(12.375,2));
  console.log(round(12.37499,2));
  console.log(round(-10.3079499, 3));

  //Q10
  protectEmail = function (userEmail) {
    var avg, splitted, part1, part2;
    splitted = userEmail.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "****@" + part2;
};
console.log(protectEmail("vedaantyadav10@gmail.com"));

//Q11
function Cap(string) 
{  
     return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(Cap("test"));

//Q12
var num1, num2;
num1 = 2
num2 = 8                                                
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ "."); }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  { console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ "."); }                  
else
  { console.log("The values "+ num1+ " and "+num2+ " are equal."); }

//Q13
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var averageMarks = 0;
for (var i=0; i < students.length; i++) {
    averageMarks += students[i][1];
        var Average = (averageMarks/students.length);
}
console.log("Average grade: " + (averageMarks)/students.length);

        if (Average < 60){
          console.log("Grade : F");      
          } 
        else if (Average < 70) {
                console.log("Grade : D"); 
                  } 
        else if (Average < 80) 
             {
                console.log("Grade : C"); 
        } else if (Average < 90) {
                console.log("Grade : B"); 
        } else if (Average < 100) {
                console.log("Grade : A"); 
}

//Q14
var x,y,charecter;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
        charecter=charecter+("*");        
      }
 console.log(charecter);
 charecter='';    
}

//Q15
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);
for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");

