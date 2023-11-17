//Solution: 57ms 43.4 MB
var twoSum = function (nums, target) {
  const pos = new Map();

  for (let i = 0; i < nums.length; i++) {
    const subTarget = target - nums[i];
    if (pos.has(subTarget)) {
      return [pos.get(subTarget), i];
    }

    pos.set(nums[i], i);
  }

  return [-1];
};

//Solution: 47ms 43.4 MB
var twoSum = function (nums, target) {
  if (nums.length < 2) {
    return [];
  }

  const pos = new Map();

  for (let i = 0; i < nums.length; i++) {
    const subTarget = target - nums[i];
    if (pos.has(subTarget)) {
      return [pos.get(subTarget), i];
    }

    pos.set(nums[i], i);
  }

  return [];
};

//Solution: 43ms 42.9 MB
var twoSum = function (nums, target) {
  if (nums.length < 2) {
    return [];
  }
  const pos = {};

  for (let i = 0; i < nums.length; i++) {
    const subTarget = target - nums[i];
    if (pos[subTarget] !== undefined) {
      return [pos[subTarget], i];
    }

    pos[nums[i]] = i;
  }

  return [];
};
