//Solution 1: 33ms 44.97 MB
class Solution {
    public List<String> commonChars(String[] words) {
        List<String> commonChars = new ArrayList<>();

        for (char letter : words[0].toCharArray()) {
            boolean isCommon = true;
            for (int i = 0; i < words.length; i++) {
                String originalWord=words[i];
                words[i] = words[i].replaceFirst(Character.toString(letter), "");
                if (originalWord.equals(words[i])) {
                    isCommon = false;
                    break;
                }
            }

            if(isCommon){
                commonChars.add(Character.toString(letter));
            }
        }

        return commonChars;
    }
}

//Solution 2: 21ms 45.05 MB
class Solution {
    public List<String> commonChars(String[] words) {
        List<String> commonChars = new ArrayList<>();

        for (char letter : words[0].toCharArray()) {
            boolean isCommon = true;
            for (String word : words) {
                if (!word.contains(Character.toString(letter))) {
                    isCommon = false;
                    break;
                }
            }
            
            if (isCommon) {
                commonChars.add(Character.toString(letter));
                for (int i = 0; i < words.length; i++) {
                    words[i] = words[i].replaceFirst(Character.toString(letter), "");
                }
            }
        }
        
        return commonChars;
    }
}

//Solution 3: 3ms 42.52 MB
class Solution {
    public int[] getCharFreqs(String word) {
        int[] freqs = new int[26];

        for (int i = 0; i < word.length(); i++) {
            freqs[word.charAt(i) - 'a']++;
        }

        return freqs;
    }

    public List<String> commonChars(String[] words) {
        List<String> commonChars = new ArrayList<>();

        int[] freqs = getCharFreqs(words[0]);

        for (int i = 1; i < words.length; i++) {
            int[] currentCharFreqs = getCharFreqs(words[i]);

            for (int j = 0; j < 26; j++) {
                freqs[j] = Math.min(freqs[j], currentCharFreqs[j]);
            }
        }

        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < freqs[i]; j++) {
                commonChars.add(Character.toString((char) (i + 'a')));
            }
        }

        return commonChars;
    }
}

//Solution 4: 3ms 42.33 MB
class Solution {
    public List<String> commonChars(String[] words) {
        List<String> commonChars = new ArrayList<>();

        // Initialize the frequency array for the first word
        int[] minFreq = new int[26];
        for (char ch : words[0].toCharArray()) {
            minFreq[ch - 'a']++;
        }

        // Update the frequency array based on the minimum frequency in each word
        for (int i = 1; i < words.length; i++) {
            int[] charCount = new int[26];
            for (char ch : words[i].toCharArray()) {
                charCount[ch - 'a']++;
            }
            for (int j = 0; j < 26; j++) {
                minFreq[j] = Math.min(minFreq[j], charCount[j]);
            }
        }

        // Collect the common characters based on the minimum frequency
        for (int i = 0; i < 26; i++) {
            while (minFreq[i] > 0) {
                commonChars.add(Character.toString((char) (i + 'a')));
                minFreq[i]--;
            }
        }

        return commonChars;
    }
}

//Solution 4: 1ms 42.77 MB
class Solution {
    private int[] calculateCharFrequencies(String s) {
        int[] freqs = new int[26];
        for (char ch : s.toCharArray()) {
            freqs[ch - 'a']++;
        }
        return freqs;
    }

    private void updateMinFrequencies(int[] minFreqs, int[] currentFreqs) {
        for (int i = 0; i < 26; i++) {
            minFreqs[i] = Math.min(minFreqs[i], currentFreqs[i]);
        }
    }

    public List<String> commonChars(String[] words) {
        int[] minFreqs = calculateCharFrequencies(words[0]);

        for (int i = 1; i < words.length; i++) {
            int[] currentFreqs = calculateCharFrequencies(words[i]);
            updateMinFrequencies(minFreqs, currentFreqs);
        }

        List<String> commonCharacters = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            if (minFreqs[i] > 0) {
                String character = String.valueOf((char) ('a' + i));
                for (int j = 0; j < minFreqs[i]; j++) {
                    commonCharacters.add(character);
                }
            }
        }

        return commonCharacters;
    }
}