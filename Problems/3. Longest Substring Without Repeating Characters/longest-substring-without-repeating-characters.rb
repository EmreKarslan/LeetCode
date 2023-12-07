#Solution 1: 110ms 211 MB
def length_of_longest_substring(s)
  return 1 if s.length == 1

  longestSubstring = ""
  tempLongestSubstring = ""

  s.each_char do |char|
    indexOfChar = tempLongestSubstring.index(char)
    if indexOfChar != nil
      if tempLongestSubstring.length > longestSubstring.length
        longestSubstring = tempLongestSubstring 
      end
      tempLongestSubstring = tempLongestSubstring[indexOfChar + 1..-1]
    end
    tempLongestSubstring += char
  end

  if tempLongestSubstring.length > longestSubstring.length
    longestSubstring = tempLongestSubstring 
  end

  return longestSubstring.length
end