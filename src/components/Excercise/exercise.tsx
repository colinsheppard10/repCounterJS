class Exercise {
  anchor1: number;
  anchor2: number;
  anchor3: number;
  name: string;

  constructor({anchor1, anchor2, anchor3, name}: any) {
    this.anchor1 = anchor1;
    this.anchor2 = anchor2;
    this.anchor3 = anchor3;
    this.name = name
  }
}

export const exerciseList = [
  new Exercise({anchor1: 1, anchor2: 2, anchor: 3, name:'curl'}),
  new Exercise({anchor1: 1, anchor2: 2, anchor: 3, name:'press'}),
  new Exercise({anchor1: 1, anchor2: 2, anchor: 3, name:'side raise'}),
  new Exercise({anchor1: 1, anchor2: 2, anchor: 3, name:'over head'})
]

