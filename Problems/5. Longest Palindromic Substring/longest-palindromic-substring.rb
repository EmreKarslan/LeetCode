#Solution 1: 610ms 211.12 MB
def expand_around_center(s, left, right)
  while left >= 0 && right < s.length && s[left] == s[right]
    left -= 1
    right += 1
  end

  right - left - 1
end

def longest_palindrome(s)
  return s if s.nil? || s.empty?

  left = 0
  right = 0

  s.each_char.with_index do |char, i|
    len1 = expand_around_center(s, i, i)
    len2 = expand_around_center(s, i, i + 1)

    max_length = [len1, len2].max

    if max_length > right - left
      left = i - ((max_length - 1) / 2).floor
      right = i + (max_length / 2).floor
    end
  end

  s[left..right]
end