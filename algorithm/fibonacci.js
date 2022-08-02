// 0,1,1,2,3,5,8,13,21
// what value is at the selected index?

function fibonacci(n) {
        return n < 1 ? 0
                : n <= 2 ? 1
                        : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(4))
// 2

// fibonacci(3)
