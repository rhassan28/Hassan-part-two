var eventType = prompt("what type of event are you going to?")
var tempFahr = prompt("what's the temperature outside?'");

// console.log(eventType);
// console.log(tempFahr);

if (eventType === 'casual' && tempFahr < 54) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear something comfy with a coat.`);
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a casual event, you should wear something comfy and a coat.';
} else if (eventType === 'casual' && tempFahr >= 54 && eventType === 'casual' && tempFahr <= 70) {
   console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear something comfy with a jacket.`);
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a casual event, you should wear something comfy and a jacket.';
} else if (eventType === 'casual' && tempFahr > 70) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear something comfy with no jacket.`)
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a casual event, you should wear something comfy with no jacket.';
}

if (eventType === 'semi-formal' && tempFahr < 54) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear a polo with a coat.`)
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a semi formal event, you should wear a polo and a coat.';
} else if (eventType === 'semi-formal' && tempFahr >= 54 && eventType === 'semi-formal' && tempFahr <= 70) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear a polo with a jacket.`)
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a semi formal, you should wear a polo and a jacket.';
} else if (eventType === 'semi formal' && tempFahr > 70) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear a polo with no jacket.`)
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a semi formal, you should wear a polo with no jacket.';
}

if (eventType === 'formal' && tempFahr <54) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear a suit and a coat.`)
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a casual event, you should wear a suit and a coat.';
} else if (eventType === 'formal' && tempFahr >= 54 && eventType === 'formal' && tempFahr <= 70) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear a suit and a jacket.`)
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a casual event, you should wear suit and a jacket.';
} else if (eventType === 'formal' && tempFahr > 70) {
  console.log(`Since it is ${tempFahr} degrees out and it is a ${eventType} event, you should wear a suit and no jacket.`)
  //para.textContent = 'It is ' + y + ' degrees outside and you are going to a casual event, you should wear a suit with no jacket.';
}
