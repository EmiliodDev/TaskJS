fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "example@example.com",
      "password": "password123"
    })
  })
  .then(response => {
    if (response.status === 200) {
      // User logged in successfully
      const data = response.json();
      console.log("User logged in", data.token);
    } else if (response.status === 401) {
      // Error: Invalid username or password
      console.error("Invalid username or password");
    } else {
      // Other error
      console.error("Error logging in");
    }
  })
  .catch(error => {
    // Handle request errors
    console.error(error);
  });
  
