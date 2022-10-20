/**
 Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

Example
headA refers to 1 -> 3 -> 7 -> NULL
headB refers to 1 -> 2 -> NULL
The new list is 1 -> 1 -> 2 -> 3 -> 7 -> NULL

The new list is 

Function Description

Complete the mergeLists function in the editor below.

mergeLists has the following parameters:

SinglyLinkedListNode pointer headA: a reference to the head of a list
SinglyLinkedListNode pointer headB: a reference to the head of a list
Returns

SinglyLinkedListNode pointer: a reference to the head of the merged list
Input Format

The first line contains an integer , the number of test cases.

The format for each test case is as follows:

The first line contains an integer , the length of the first linked list.
The next  lines contain an integer each, the elements of the linked list.
The next line contains an integer , the length of the second linked list.
The next  lines contain an integer each, the elements of the second linked list.

Constraints
1<=t<=10
1<=n,m<=1000
1<=list[i]<=1000, where list[i] is the ith element of the list

, where  is the  element of the list.
Sample Input

1
3
1
2
3
2
3
4
Sample Output

1 2 3 3 4 
Explanation

The first linked list is: 
1 -> 3 -> 7 -> NULL
The second linked list is: 
3 -> 4 -> NULL
Hence, the merged linked list is: 
1 -> 2 -> 3 -> 3 -> 4 -> NULL
 */

// Given two sorted linked lists (descending)
// Return a merged linked list
// If either head is null then, simply return the other nodelist
// If neither head null,
//  check which linked list has the lower value
//  Have the node with the lower value, be the previous' next value

/**
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  if (head1 === null) return head2
  if (head2 === null) return head1
  if (head1.data < head2.data) {
    head1.next = mergeLists(head1.next, head2)
    return head1
  } else {
    head2.next = mergeLists(head1, head2.next)
    return head2
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const tests = parseInt(readLine(), 10)

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llist1Count = parseInt(readLine(), 10)

    let llist1 = new SinglyLinkedList()

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = parseInt(readLine(), 10)
      llist1.insertNode(llist1Item)
    }

    const llist2Count = parseInt(readLine(), 10)

    let llist2 = new SinglyLinkedList()

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = parseInt(readLine(), 10)
      llist2.insertNode(llist2Item)
    }

    let llist3 = mergeLists(llist1.head, llist2.head)

    printSinglyLinkedList(llist3, ' ', ws)
    ws.write('\n')
  }

  ws.end()
}
