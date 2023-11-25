//Solution 1: 1259ms 66.9 MB
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const triples: Set<string> = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        const candidate = [nums[i], nums[left], nums[right]];
        triples.add(JSON.stringify(candidate));
        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Array.from(triples, (triple) => JSON.parse(triple));
}

//Solution 2: 786ms 65.06 MB
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const triples: Set<string> = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        const candidate = [nums[i], nums[left], nums[right]];
        triples.add(JSON.stringify(candidate));
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Array.from(triples, (triple) => JSON.parse(triple));
}

//Solution 3: 201ms 67.8 MB
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const triplets: Set<string> = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        const triplet = [nums[i], nums[left], nums[right]];
        const tripletKey = triplet.join(",");

        if (!triplets.has(tripletKey)) {
          triplets.add(tripletKey);
        }

        // Skip duplicate values for left and right
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Array.from(triplets, (triplet) => triplet.split(",").map(Number));
}

//Solution 4: 155ms 59.2 MB
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const triplets: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values for left and right
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}
