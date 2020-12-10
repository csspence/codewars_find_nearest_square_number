/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

const nearestSq = (n) => {
    let smallerNum = n - 1;
    let largerNum = n + 1;
    let nearestSquare = null;
    if(Math.sqrt(n) === Math.floor(Math.sqrt(n)) || Math.sqrt(n) === Math.ceil(Math.sqrt(n))) {
        return n;
    }
    while(nearestSquare === null) {
        if(Math.sqrt(smallerNum) === Math.floor(Math.sqrt(smallerNum)) || Math.sqrt(smallerNum) === Math.ceil(Math.sqrt(smallerNum))) {
            nearestSquare = smallerNum;
        } else if(Math.sqrt(largerNum) === Math.floor(Math.sqrt(largerNum)) || Math.sqrt(largerNum) === Math.ceil(Math.sqrt(largerNum))) {
            nearestSquare = largerNum;
        } else {
            smallerNum--;
            largerNum++;
        }
    }

    return nearestSquare;
}