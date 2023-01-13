function plusMinus (score) {
    let accurate = score % 10;
    let detail ='';
    
    if (accurate >= 8) {
      detail ='+';
    } else if(accurate <= 2) {
      detail ='-';
    } else {
      detail ='';
    }
    return detail;
  }
  
  
  function convertScoreToGradeWithPlusAndMinus(score) {
    let grade;
  
    if (100 < score || 0 > score) {
      return 'INVALID SCORE';
    
    } else if (100 === score) {
      return "A+";
    
    } else if (90 <= score) {
      grade = "A";
    
    } else if (80 <= score) {
      grade = "B";
    
    } else if (70 <= score) {
      grade = "C";
    
    } else if (60 <= score) {
      grade = "D";
    
    } else if (0 <= score) {
      grade = "F";
    
    }
  
    if (grade !== "F") {
      grade = grade + plusMinus(score);
    }
  
    return grade;
  }
  