/**
 * Created by subs on 16.06.22.
 */
/*
 Objects

 1. Write functions for working with shapes in standard Planar coordinate system
 * Points are represented by coordinates `P(X, Y)`
 * Lines are represented by two points, marking their beginning and ending: `L(P1(X1,Y1)`, `P2(X2,Y2))`
 * Calculate the distance between two points
 * Check if three segment lines can form a triangle
 2. Write a function that removes all elements with a given value
 * var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
 * arr.remove(1); // arr = [2, 4, 3, 4, 111, 3, 2, "1"];

 * Attach it to the array object
 * Read about `prototype` and how to attach methods
 3. Write a function that makes a deep copy of an object. The function should work for both primitive and reference types.
 4. Write a function that finds the youngest person in a given array of persons and prints his/hers full name
 * Each person has properties `firstName`, `lastName` and `age`, as shown:
 var persons = [
 { firstName : "Gosho", lastName: "Petrov", age: 32 },
 { firstName : "Bay", lastName: "Ivan", age: 81 }
 ...
 ];

 5. Write a function that groups an array of persons by age, first or last name. The function must return an associative array, with keys - the groups, and values -arrays with persons in this groups. Use function overloading (i.e. just one function).

 var persons = { ... };
 var groupedByFirstName = group(persons, "firstname");
 var groupedByAge = group(persons, "age");
 */