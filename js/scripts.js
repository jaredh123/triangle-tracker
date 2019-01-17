$(document).ready(function() {
  $("#run").submit(function(event) {

    var s1 = parseFloat($("#input1").val());
    var s2 = parseFloat($("#input2").val());
    var s3 = parseFloat($("#input3").val());

    var convert = function(s1, s2, s3) {
console.log(0<s2<s1+s3)
//Equilateral
      if (s1 == s2 && s1 == s3) {
        return "Equilateral triangle";
      }

//Isosceles
      else if (s1 == s2 || s1 == s3 || s2 == s3) {
        if( s1 == s2 && s1 != s3){
          if (0 < s3 && s3 < s1 + s2){
            return "Isosceles triangle";
          }
          else{
            return "Not a triangle";
          }
        }
        else if (s1 == s3 && s1 != s2){
          if (0 < s2 && s2 < s1 + s3){
            return "Isosceles triangle";
          }
          else{
            return "Not a triangle";
          }
        }
        else if (s2 == s3 && s2 != s1){
          if (0 < s1 && s1 < s3 + s2){
            return "Isosceles triangle";
          }
          else{
            return "Not a triangle";
          }
        }
      }

//Scalene
      else if (s1 != s2 && s1 != s3 && s2 != s3){
        if (0 < s1 && s1 < s2 + s3 && 0 < s2 && s2 < s1 + s3 && 0 < s3 && s3 < s1 + s2){
          return "Scalene Triangle";
        }
        else{
          return "Not a triangle";
        }
      }

//Error
      else {
        return "*Inaudible screaming*";
      }
    };

    var result = convert(s1, s2, s3);
    alert(result);
    event.preventDefault();
  });
});
