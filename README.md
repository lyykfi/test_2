Describe 3 different data structures that could be used to implement an associative array where both the keys and values are strings, and comment on their relative advantages and disadvantages

Answer:

1)

HashTable by array:

function HashTable() {
    this.length = 0;
    this.items = new Array();
    for (var i = 0; i < arguments.length; i += 2) {
        if (typeof (arguments[i + 1]) != 'undefined') {
            this.items[arguments[i]] = arguments[i + 1];
            this.length++;
        }
    }

    this.removeItem = function (in_key) {
        var tmp_previous;
        if (typeof (this.items[in_key]) != 'undefined') {
            this.length--;
            var tmp_previous = this.items[in_key];
            delete this.items[in_key];
        }

        return tmp_previous;
    }

    this.getItem = function (in_key) {
        return this.items[in_key];
    }

    this.setItem = function (in_key, in_value) {
        var tmp_previous;
        if (typeof (in_value) != 'undefined') {
            if (typeof (this.items[in_key]) == 'undefined') {
                this.length++;
            } else {
                tmp_previous = this.items[in_key];
            }

            this.items[in_key] = in_value;
        }

        return tmp_previous;
    }

    this.hasItem = function (in_key) {
        return typeof (this.items[in_key]) != 'undefined';
    }

    this.clear = function () {
        for (var i in this.items) {
            delete this.items[i];
        }

        this.length = 0;
    }
}

Hash table solutions will take the hash of objects stored in them (its important to note that the hash is a primitive, often an integer or long) and use that hash as an array index, and store a reference to the object at that index in the array. To solve the collision problem, indices in this array will often contain linked list nodes that hold the actual references.

Checking if an object is in the array is as simple as hashing it, looking in the index referred to by the hash, and comparing equality with each object that's there, an operation that runs in amortized constant time, because the hash table can grow larger if collisions are beginning to accumulate.

Time Complexity
Lookup - O(1)	
Insertion - O(1)
Deletion - O(1)

Lookup (worst case) -  O(n)
Insertion (worst case) - O(n)
Deletion (worst case) - O(n)

2) Self-balancing binary search tree

Time Complexity
Lookup - O(log n)	
Insertion - O(log n)
Deletion - O(log n)

Lookup (worst case) -  O(log n)
Insertion (worst case) - O(log n)
Deletion (worst case) - O(log n)

2) unbalanced binary search tree	

Time Complexity
Lookup - O(log n)	
Insertion - O(log n)
Deletion - O(log n)

Lookup (worst case) -  O(n)
Insertion (worst case) - O(n)
Deletion (worst case) - O(n)

