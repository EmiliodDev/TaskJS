fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": "exampleuser",
      "password": "password123",
      "email": "example@example.com"
    })
  })
  .then(response => {
    if (response.status === 201) {
      // User registered successfully
      console.log("User registered");
    } else if (response.status === 400) {
      // Error: User already exists
      console.error("User already exists");
    } else {
      // Other error
      console.error("Error registering user");
    }
  })
  .catch(error => {
    // Handle request errors
    console.error(error);
  });
  
