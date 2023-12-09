#Solution: 52ms 47 MB
# @param {string} s
# @param {number} numRows
# @return {string}

def convert(s, num_rows)
    return s if num_rows==1 || s.length==1

    length= s.length
    itr = (num_rows-1) *2
    answer = String.new

    (0..num_rows-1).each do |row|
        current_index=row
        current_itr=itr
        if row!=0 && row!=num_rows-1
            current_itr=itr-(2*row)
        end

        while current_index<length
            answer << s[current_index]
            current_index+=current_itr

            if row!=0 && row!=num_rows-1
                current_itr=(itr-current_itr).abs
            end
        end 
    end

    answer
end
