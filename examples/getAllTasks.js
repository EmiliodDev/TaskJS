fetch('/tasks', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer <token>' // put your token here
    }
  })
  .then(response => {
    if (response.status === 200) {
      // Tasks retrieved successfully
      response.json().then(data => {
        console.log("Tasks:", data.tasks);
      });
    } else {
      // Error retrieving tasks
      console.error("Error retrieving tasks");
    }
  })
  .catch(error => {
    // Handle request errors
    console.error(error);
  });
  
