//Get Data
const data = [
    {
      id: 1, 
      name: 'Parrot', 
      percent: 95, 
      offset: 0,
      inhue: '0',
      outhue: 'blue'
    }, {
      id: 2, 
      name: "Canary", 
      percent: 20, 
      offset: 0,
      inhue: '50',
      outhue: 'green'
    }, {
      id: 3, 
      name: "Ostrich", 
      percent: 40, 
      offset: 0,
      inhue: '100',
      outhue: 'lime'
    }, {
      id: 4, 
      name: "Eagle", 
      percent: 60, 
      offset: 0,
      inhue: '150',
      outhue: 'magenta'
    }, {
      id: 5, 
      name: "empty", 
      percent: 50, 
      offset: 0,
      inhue: '200',
      outhue: 'black'
    },
    {
      id: 6, 
      name: "empty", 
      percent: 0, 
      offset: 0,
      inhue: '250',
      outhue: 'black'
    }
  ];
  
  //alerty(data[0].name);//"parrot"
  
  //Javacript is working:
  document.body.style.backgroundColor = "white";//works!
  document.getElementById('yaya').style.backgroundColor= "black";//works!
  document.getElementById('yaya').style.border= "1px solid red";//works!
  
  //Create SVG Circle elements from Data
  const chartNodes = function(){
    
    for(x in data){
    const circlehere = document.createElementNS("http://www.w3.org/2000/svg","svg");
    circlehere.setAttribute("id", "svgid");
    circlehere.setAttribute("viewBox", "0 0 64 64");
    circlehere.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    document.getElementById('all-charts').appendChild(circlehere);
    const chartM = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circlehere.appendChild(chartM);
    chartM.setAttribute("class", "circlass-"+ x);
    chartM.classList.add("cir");  
    chartM.setAttribute("r", "25%");
    chartM.setAttribute("cx", "50%");
    chartM.setAttribute("cy", "50%");
    //Create Text Element
    const chartText = document.createElementNS("http://www.w3.org/2000/svg", "text");   
   chartText.setAttributeNS(null, "x", "20");
    chartText.setAttributeNS(null, "y", "35");   
   circlehere.appendChild(chartText); 
   const textNode = document.createTextNode(data[x].percent + "%");
  chartText.appendChild(textNode);   
     
    console.log("name", data[x].name);
      
    //add individual classes to each circle
   const cirSelector = "#svgid " + ".circlass-" + x; 
      const cirPrime = document.querySelector(cirSelector);
      
  const cirChange = "stroke-dashoffset: 0; stroke-dasharray: 55 100; transition: stroke 3s, stroke-dasharray 1s;";
  
  //Create Dynamic Inline Styles from Data   
  const chartMaker = function(percent = 0, offset = 0, inhue = gold){
  
    const chartStyles = `stroke: hsla(${inhue}, 100%, 50%,.6); fill: hsla(${inhue}, 100%, 30%, 1); stroke-dasharray: ${percent} 100; stroke-dashoffset: ${offset};  transition: stroke 3s, stroke-dasharray 1s;`
    return chartStyles
  }
  
  //generate initial circle styles    
  const cirInitial = chartMaker(101, 0, data[x].inhue, data[x].outhue);
  
  //generate specific circle style
  const cirOne = chartMaker(data[x].percent, data[x].offset, data[x].inhue);
      
  //log specific circle style to check
  console.log("cirOne: ", cirOne);
  
  //set starting and finishing state    
  cirPrime.style.cssText = cirInitial; 
  
  //set mouseOver and Out functions    
  function mouseOver() {
    cirPrime.style.cssText = cirOne;
  }
  function mouseOut() {
    cirPrime.style.cssText = cirInitial;
  }
      
  //attach mouseover and mouse out functions as event listeners   
  cirPrime.onmouseover = function() {mouseOver()};
  cirPrime.onmouseout = function() {mouseOut()};
    //end other code  
      
    } 
  };
  
  // execute entire chartNodes Function
  chartNodes();
  
  //Javacript is STILL working:
  document.getElementById('yaya').style.border= "1px solid green";//works!
  
  //babel required
  //reference: https://css-tricks.com/controlling-css-animations-transitions-javascript/