// Example 1:
console.log(quantileUniform(0.5, 0, 10));  // Output: 5

// Example 2:
console.log(quantileUniform(0.25, 1, 5));  // Output: 2

// Example 3:
console.log(quantileUniform(0.75, -10, 10));  // Output: 5

// Example 4: Handling edge cases
try {
    console.log(quantileUniform(1.2, 0, 1));  // Throws error: Probability p must be between 0 and 1.
} catch (error) {
    console.error(error.message);
}
