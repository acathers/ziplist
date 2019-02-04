const firstList = [1, 3, 5];
const secondList = [2, 4, 6];

function zipList(a, b){
  let result = [];
  for(let i = 0; i < a.length; i++){
    result.push(a[i]);
    result.push(b[i]);
  }

  return result;

}

function zipListTheEasyWay(a, b) {
   return _.flatten(_.zip(a,b));
}

console.log(zipList(firstList, secondList));
console.log(zipListTheEasyWay(firstList, secondList));