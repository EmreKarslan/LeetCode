#Solution 1: 59ms 211 MB
def reverse(x)
    is_negative = x < 0
    x = x.abs
    reversed_x = 0

    while x > 0
        reversed_x = reversed_x * 10 + (x % 10)
        x /= 10
    end

    max_int = 2**31 - 1
    result = is_negative ? -reversed_x : reversed_x

    result.abs > max_int ? 0 : result
end

#Solution 2: 53ms 211.06 MB
def reverse(x)
    sign = x.negative? ? -1 : 1
    x = x.abs
    reversed_x = 0
    bound = 2**31 - 1

    while x.positive?
        reversed_x = reversed_x * 10 + (x % 10)
        return 0 if reversed_x > bound

        x /= 10
    end

    sign * reversed_x
end