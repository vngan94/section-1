# API Documentation


## Base URL
```
http://localhost:3005/api
```


## Endpoints


### 1. GET /status


Check if server is running.


**Request:**
```bash
GET /api/status
```


**Response (200 OK):**
```json
{
  "message": "Server is running",
  "port": 3005
}
```


---


### 2. POST /feedback


Submit new feedback.


**Request:**
```bash
POST /api/feedback
Content-Type: application/json
```


**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "This is a test feedback message that is long enough"
}
```


**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Feedback submitted successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "This is a test feedback message that is long enough",
    "createdAt": "2026-02-15T10:30:00.000Z"
  }
}
```


**Error Responses:**


**400 Bad Request** - Missing required fields:
```json
{
  "error": "Missing required fields: name, email, message"
}
```


**400 Bad Request** - Invalid email:
```json
{
  "error": "Invalid email format"
}
```


**400 Bad Request** - Message too short:
```json
{
  "error": "Message must be at least 10 characters"
}
```


**500 Internal Server Error:**
```json
{
  "error": "Failed to create feedback"
}
```


---


### 3. GET /feedback


Retrieve all submitted feedback.


**Request:**
```bash
GET /api/feedback
```


**Success Response (200 OK):**
```json
{
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "message": "This is a test feedback message that is long enough",
      "createdAt": "2026-02-15T10:30:00.000Z"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "message": "Excellent support team",
      "createdAt": "2026-02-15T10:35:00.000Z"
    }
  ]
}
```


**Error Response (500 Internal Server Error):**
```json
{
  "error": "Failed to retrieve feedback"
}
```




**500 Internal Server Error:**
```json
{
  "error": "Failed to retrieve feedback"
}
```


---


## HTTP Status Codes


| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input data |
| 500 | Internal Server Error - Server error |


---


## Testing Examples


### Using curl


**Check status:**
```bash
curl http://localhost:3005/api/status
```


**Submit feedback:**
```bash
curl -X POST http://localhost:3005/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "This is a test feedback message that is long enough"
  }'
```


**Get all feedback:**
```bash
curl http://localhost:3005/api/feedback
```




### Common Request Headers
```
Content-Type: application/json
```


### Common Response Headers
```
Content-Type: application/json; charset=utf-8
```
