#Solution 1: 72ms 212.5 MB
def find_median_sorted_arrays(nums1, nums2)
    total_length = nums1.length + nums2.length
    median_index = (total_length / 2).floor
    
    i = 0
    j = 0
    current = 0
    previous = nil
    count = 0

    while count <= median_index
        previous = current

        if i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])
            current = nums1[i]
            i += 1
        else
            current = nums2[j]
            j += 1
        end

        count += 1
    end

    if total_length.even?
        return (previous + current) / 2.0
    else
        return current.to_f
    end
end

#Solution 2: 70ms 213.1 MB
def find_median_sorted_arrays(nums1, nums2)
    combined_nums=(nums1+nums2).sort
    median_index = (combined_nums.length / 2).floor

    if combined_nums.length.even?
        return (combined_nums[median_index]+combined_nums[median_index-1]) / 2.0
    else
        return combined_nums[median_index].to_f
    end
end

#Solution 3: 63ms 213.1 MB
def find_median_sorted_arrays(nums1, nums2)
  res = (nums1 + nums2).sort
  size = res.size
  (res[size.pred >> 1] + res[size >> 1]) / 2.0
end