package Solution

//Solution 1: 81ms 8.28 MB
func minOperations(nums []int, xorSum int) int {
	for _, num := range nums {
		xorSum ^= num
	}

	flips := 0

	for xorSum != 0 {
		if xorSum&1 != 0 {
			flips++
		}
		xorSum = xorSum >> 1
	}

	return flips
}
