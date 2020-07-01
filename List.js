class List {
    constructor()
    {
        // lists always have a "head" that points to the first node
        this.head = null;
    }
}
// the LAST node in a linked list points to null as the next element
class Node {
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
}

// Add a node to the end list
List.prototype.append = function(data)
{
    console.log('this function is running');
    // in this context, this = this specific instance of List
    let node = new Node(data);

    // check to see if this list has a head element
    if (!this.head)
    {
        // this list has does not have a head element so we set one
        this.head = node;
        return this.head;
    }

    // if there IS a head, start there and find the last node of the list
    let last = this.head;
    while (last.next !== null)
    {
        last = last.next;
    }
    last.next = node; 
    return this.head;
}
// add a new node to the beginning of the list
List.prototype.prepend = function(data)
{
    let node = new Node(data);

    // this node is added to the beginning of the list
    // so the next value is...this.head
    node.next = this.head;

    this.head = node;

    return this.head;
}
// find a node in the list at a given index
List.prototype.findAt = function(index) {
    // decide if we index from 1 or 0
    let count = 0;
    let node = this.head;

    while (node)
    {
        if (index === count)
        {
            return node;
        }
        count++;
        node = node.next;
    }

    // if no node can be found, return null
    return null;
}

List.prototype.insertAt = function(data, index)
{
    // what if the list is empty?
    if (!this.head)
    {
        this.head = new Node(data);
        return this.head;
    }

    // what if index is 0, but list is not empty?
    if (index === 0)
    {
        // kill 3 birds with one code
        this.head = new Node(data, this.head);
        return this.head;
    }

    // every other case means moving things around

    // find the node that will come before the one we are inserting
    const previous = this.findAt(index - 1);
    // create our new node
    let node = new Node(data);
    // set the new node's next value to the node that will come after
    // you can get this by checking the next value of the previous node
    node.next = previous.next;
    // set the next value of the previous node = to our new node
    previous.next = node;

    return this.head;

}

const list1 = new List();
list1.append('data');
list1.prepend('me first');
list1.insertAt('me second', 1);

console.log('list1: ', list1);


const list2 = new List();
list2.prepend('only node');

console.log('list 2: ', list2);




// Remove a node from the list



