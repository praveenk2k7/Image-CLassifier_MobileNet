let net; //without any type

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  result = await net.classify(imgEl);
  prob=Math.max.apply(Math, result.map(function(o) { return o.probability; }))
  animalName=result.find(c => c.probability===prob).className
  result.find(c=>console.log(c))
  console.log(animalName);
  const r=document.getElementById('result')
  console.log(r);
  r.innerText=animalName
}

