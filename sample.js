/* 
This is a practice problem I enjoyed doing. I love working with problems involving nodes.
You can test my answer by changing the data in the data.json file and running this file with node sample.js

Given a data file containing an array of strings representing a hierarchy, e.g.:

[
 "animals.dogs.poodle",
 "animals.cats.tabby",
 "animals.cats.siamese",
 "animals.dogs.labrador",
 "animals.dogs.hound",
 "plants.trees",
 "animals.birds.parrot.grey"
 ...]

Write a script in Javascript to create a tree data structure out of it. Output the root and it first child.

*/
//Getting data from JSON file
let data = require('./data.json');

//creating Node Class
class Node {
    constructor(value){
        this.value = value;
        this.children = {};
    }
}

//Creating Tree Class
class Tree {
    constructor(root){
        this.root = root; 
        this.firstChild = null;
    }

    appendChild(items){
        let node = this.root;
        let counter = 0;
        items.forEach((item) => {
            if(!node.children[item]){
                node.children[item] = new Node(item);
            }
            node = node.children[item];
            if(counter === 0){
                this.firstChild = node;
                counter += 1;
            }
        });
    }
}


function treeMaker(arr){
    let tree = new Tree(new Node('root'));

    arr.forEach((string) =>{
        let items = string.split('.');
        tree.appendChild(items);
    });
    return tree;
}

let answer = treeMaker(data);

//outputting root and first child
console.log('root node',answer.root);
console.log('first child', answer.firstChild);

