function factorial2737(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
