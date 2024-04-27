package Solution

import "math"

//Solution 1: 5ms 6.73 MB
func findRotateSteps(ring string, key string) int {
	keyLength := len(key)
	ringLength := len(ring)
	indexMap := make(map[byte][]int)
	for i := 0; i < ringLength; i++ {
		currentChar := ring[i]
		if slice, ok := indexMap[currentChar]; ok {
			// Append the new value to the existing slice
			indexMap[currentChar] = append(slice, i)
		} else {
			// Create a new slice with the current index
			indexMap[currentChar] = []int{i}
		}
	}

	memo := make([][]int, ringLength)
	for i := range memo {
		memo[i] = make([]int, keyLength)
		for j := range memo[i] {
			memo[i][j] = -1
		}
	}

	var helper func(currentRingIndex int, currentKeyIndex int) int
	helper = func(currentRingIndex int, currentKeyIndex int) int {
		if currentKeyIndex == keyLength {
			return 0
		}

		if memo[currentRingIndex][currentKeyIndex] != -1 {
			return memo[currentRingIndex][currentKeyIndex]
		}

		minCost := math.MaxInt32

		currentChar := key[currentKeyIndex]
		slice := indexMap[currentChar]
		for i := 0; i < len(slice); i++ {
			targetIndex := slice[i]
			innerDistance := abs(currentRingIndex - targetIndex)
			outerDistance := abs(targetIndex - currentRingIndex)
			if targetIndex < currentRingIndex {
				outerDistance = abs(targetIndex + ringLength - currentRingIndex)
			} else {
				outerDistance = abs(currentRingIndex + ringLength - targetIndex)
			}
			minDistance := min(innerDistance, outerDistance)
			cost := minDistance + helper(targetIndex, currentKeyIndex+1)
			minCost = min(minCost, cost)
		}
		memo[currentRingIndex][currentKeyIndex] = minCost
		return minCost
	}

	return helper(0, 0) + keyLength
}

func abs(value int) int {
	if value < 0 {
		return -value
	}

	return value
}

func min(value1 int, value2 int) int {
	if value1 < value2 {
		return value1
	}

	return value2
}
