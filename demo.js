function factorial2558(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
