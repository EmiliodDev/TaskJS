fetch('/tasks/user_id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <token>' // put here your token
    },
    body: JSON.stringify({
      "title": "Task Title",
      "isCompleted": false,
      "description": "Task Description",
      "time": "Task Time",
      "date": "Task Date",
      "isNotificationEnabled": false,
      "repeatDays": ["Monday", "Wednesday"]
    })
  })
  .then(response => {
    if (response.status === 200) {
      // Task created successfully
      response.json().then(data => {
        console.log("Task created:", data.task);
      });
    } else {
      // Error creating task
      console.error("Error creating task");
    }
  })
  .catch(error => {
    // Handle request errors
    console.error(error);
  });
  
