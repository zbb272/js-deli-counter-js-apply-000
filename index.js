function takeANumber(line){
  line[line.length] = line.length + 1;
  return "Welcome. You are number " + line.length + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  
  var line = "The line is currently: ";
  var i;
  
  for(i = 0; i < (katzDeliLine.length - 1); i++){
    line = line + (i + 1) + ". " + katzDeliLine[i] + ", ";
  }
  line = line + (i + 1) + ". " + katzDeliLine[i];
  
  return line;
}