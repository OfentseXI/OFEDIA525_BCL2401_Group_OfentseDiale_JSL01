function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let resultMessage = document.getElementById('result'); // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (/^pet_(20[0-1][0-9]|202[0-4])[A-Za-z]+$/.test(input)) {
        result = "Valid Syntax 🟢";} 
          else {
            result = "Invalid Syntax 🔴";}
        
          document.getElementById("result").innerText = result;
        }
        


