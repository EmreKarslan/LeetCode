#Solution 1: Time Limit Exceed
def two_sum(nums, target)
  nums.each_with_index do |num1, index1|
    nums.each_with_index do |num2, index2|
      next if index1 >= index2
      sum = num1 + num2
      return [index1, index2] if sum == target
    end
  end

  return []
end

#Solution 2: 68ms 212 MB
def two_sum(nums, target)
  pos={}

  nums.each_with_index do |num, index|
    subTarget= target-num
    return [pos[subTarget],index] if pos[subTarget]

    pos[num]=index
  end

  return []
end

#Solution 3: 64ms 212.1 MB
def two_sum(nums, target)
  return [] if nums.length<2
  pos={}

  nums.each_with_index do |num, index|
    subTarget= target-num
    return [pos[subTarget],index] if pos[subTarget]

    pos[num]=index
  end

  return []
end