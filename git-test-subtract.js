// subtract.js [dev/commit1]
// return subtraction of two numbers
function subtract(a, b, bMINUSa) {
<<<<<<< HEAD
    if (bMINUSa === true) {
        return b - a;
    }
    else {
        return a - b;
    }
=======
    return (bMINUSa) ? b - a : a - b;
>>>>>>> dev
};
