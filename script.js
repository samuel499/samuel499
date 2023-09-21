// Define a class
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}

// Event listener for the button
document.getElementById('button').addEventListener('click', () => {
    try {
        // Use switch statement
        const operation = 'add';
        const calc = new Calculator();
        let result;

        switch (operation) {
            case 'add':
                result = calc.add(5, 3);
                break;
            case 'subtract':
                result = calc.subtract(5, 3);
                break;
            default:
                throw new Error('Invalid operation');
        }

        // Display the result
        document.getElementById('result').innerHTML = `Result: ${result}`;
    } catch (error) {
        // Handle errors with try-catch-finally
        console.error(error);
    } finally {
        console.log('Operation completed.');
    }
});
