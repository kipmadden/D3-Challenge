// @TODO: YOUR CODE HERE!
// Load data from data.csv
d3.csv("data.csv").then(function(demographic) {
    
    console.log(demographic);
  
    // // log a list of id
    // var ids = demographic.map(data => data.id);
    // console.log("id", ids);
  
    // // Cast each hours value in demographic as a number using the unary + operator
    // demographic.forEach(function(data) {
    //   data.poverty = +data.poverty;
    //   console.log("id:", data.id);
    //   console.log("poverty:", data.poverty);
    // });
  });
