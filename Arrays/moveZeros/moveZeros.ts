class SolutionTS {
    moveZeroes(nums: number[]): number[] {
        const zeroCount = nums.filter(num => num === 0).length;
        nums = nums.filter(num => num !== 0).concat(Array(zeroCount).fill(0));
        return nums;
    }
}

class SolutionTwoTS {
    moveZeroes(nums: number[]): number[] {
        let index = 0;

        // Place non-zero elements at the start of the array
        for (const num of nums) {
            if (num !== 0) {
                nums[index] = num;
                index++;
            }
        }

        // Fill the remaining positions with zeroes
        while (index < nums.length) {
            nums[index] = 0;
            index++;
        }

        return nums;
    }
}

const arrayTS: number[] = [1, 2, 0, 0, 0, 3, 6, 0, -4, -5, 5];
const solutionOneTS = new SolutionTS();
const solutionTwoTS = new SolutionTwoTS();
const resultOneTS: number[] = solutionOneTS.moveZeroes([...arrayTS]);
const resultTwoTS: number[] = solutionTwoTS.moveZeroes([...arrayTS]);
console.log(resultOneTS);
console.log(resultTwoTS);
