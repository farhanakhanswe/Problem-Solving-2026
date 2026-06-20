/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    // two integers m and n . m will be row and n will be col
    // grid will only consist of char . or #
    // where . represents a free cell
    // # represents an obstacle cell
    // a valid path is a squence of free cells that
    // starts at the top-left cell (0,0)
    // ends at the bottom-right cell (m - 1, n - 1)
    // moves only initial point to right or initial point to down
    // return exactly one valid path from top left cell to bottom right cell
    // constraints m > = 1 so row will be atleast 1
    // n will be at most 25 so atmost columns

    // thought process
    // lets take one of the examples m = 2 and n = 3
    // so points are (0,0) (0,1) (0,2) (1,0) (1,1) (1,2)
    // okay lets think of it this way i can only move from left to right
    // and top to down
    // now, it doesn't matter how many columns there are
    // we can construct the valid part from (0,0) move to (0,1) and then go all the way 
    // down to the last row and keep moving towards the right end
    // if there is only one row then we will just return . as many as column 
    // like in example 3
    // the number of elements in the array depends on the number of rows
    // so lets take the first row, first two cols will be .. and the rest of the cols will be #
    // now for the rest of the rows except the last row, only the second col will be . and rest
    // of the cols will be #
    // now for bottom last row, only the first col will be # and the rest will be .

    let arr = [];
    let str = "";

    if(m === 1){
        for(let i = 0; i < n; i++){
            str += ".";
        }
        arr.push(str);
        return arr;
    }

    if(m !== 1 && n == 1){
        for(let i = 0 ; i < m ; i++){
            arr.push(".");
        }

        return arr;
    }
    
    // preparing first element    
    for(let i = 0; i < n ; i++){
        if(i <= 1){
            str += ".";
        }else{
            str += "#";
        }
    }

    arr.push(str);
    str = "";
    
    // lets prepare data for all rows except the top and bottom
    for(let i = 0; i < m - 2; i++){
        str += "#.";
        for(let j = 0 ; j < n - 2; j++){
            str += "#";
        }
        arr.push(str);
        str = "";
    }

    // lets prepare the bottom row
    str = "#.";

    for(let j = 0 ; j < n - 2; j++){
        str += ".";
    }

    arr.push(str);

    return arr;
    
};