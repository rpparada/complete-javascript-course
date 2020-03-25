/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
let streeSizeClassification = new Map();
function createMap(){
  streeSizeClassification.set(100,'tiny');
  streeSizeClassification.set(200,'small');
  streeSizeClassification.set(300,'normal');
  streeSizeClassification.set(400,'big');
  streeSizeClassification.set(500,'huge');
  streeSizeClassification.set(0,'unknown');
}

class BasicElement {
  constructor(name, buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends BasicElement {
  constructor(name, buildYear, numberOfTrees=0){
    super(name, buildYear);
  }

  calculateTreeDensity(numberOfTrees, area) {
    this.numberOfTrees = numberOfTrees;
    this.area = area;
    this.treeDensity = numberOfTrees/area;
  }
}

class Street extends BasicElement {
  constructor(name, buildYear){
    super(name, buildYear);
  }

  setLength(length){
    this.length = length;
    this.classification = streeSizeClassification.get(this.length);
  }

}

class Town {
  constructor(parks, streets) {
    this.parks = parks;
    this.streets = streets;
  }

  calculateParksAgeAverage(){
    let sumAges = 0;
    for (const cur of this.parks){
      sumAges = sumAges + (2020 - cur.buildYear);
    }
    this.parkAgesAverage = sumAges / this.parks.length;
  }

  getParkTreeCounts(count){
    this.selectedParks = [];
    for (const cur of this.parks){
      if (cur.numberOfTrees > count){
        this.selectedParks.push(cur);
      }
    }
  }

  calculateTotalAverageStreeLength() {
    let sum = 0;
    for (const cur of this.streets){
      sum = sum + cur.length;
    }
    this.streetsLength = sum;
    this.streetsAverage = sum / this.streets.length;
  }

  printReport(){

    let line1 = `1. Tree density of each park in the town:`;
    let line1_1 = ''
    for (const cur of this.parks) {
      line1_1 = line1_1 + `Park ${cur.name} has a density of ${cur.treeDensity}.\n`
    }
    let line2 = `2. Average age of each town's park: ${this.parkAgesAverage}`;
    let line3 = `3. The name of the park that has more than 10 trees:`;
    let line3_1 = '';
    for (const cur of this.selectedParks) {
      line3_1 = line3_1 + `Park ${cur.name} has ${cur.numberOfTrees} trees.\n`
    }
    let line4 = `4. Total and average length of the town's streets: ${this.streetsLength} and ${this.streetsAverage}`;
    let line5 = `5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal:`;
    let line5_1 = '';
    for (const cur of this.streets) {
      line5_1 = line5_1 + `Street ${cur.name} classified as ${cur.classification}.\n`
    }

    console.log(line1);
    console.log(line1_1);
    console.log(line2);
    console.log(line3);
    console.log(line3_1);
    console.log(line4);
    console.log(line5);
    console.log(line5_1);

  }
}

function inicio() {

  // Creates stree size classification
  createMap();

  // Creates parks
  const p1 = new Park('p1',1980);
  const p2 = new Park('p2',1970);
  const p3 = new Park('p3',1944);

  p1.calculateTreeDensity(10,200);
  p2.calculateTreeDensity(50,200);
  p3.calculateTreeDensity(100,200);

  // Creates streets
  const s1 = new Street('s1',1765);
  const s2 = new Street('s2',1765);
  const s3 = new Street('s3',1765);

  s1.setLength(100);
  s2.setLength(200);
  s3.setLength(300);

  // Creats town
  t = new Town([p1,p2,p3],[s1,s2,s3]);
  t.getParkTreeCounts(10);
  t.calculateParksAgeAverage();
  t.calculateTotalAverageStreeLength();

  return t

}

town = inicio();
town.printReport();
