// Refactored code block to handle Single Responsability

const isConsonant = (character) => {
    // To handle lower case
    character = character.toUpperCase();

    return (
        !(character == 'A' || 
          character == 'E' || 
          character == 'I' || 
          character == 'O' || 
          character == 'U') &&
          character.match(/[A-Z]/i)
    );
};

export default isConsonant;