


          
I'll update the README.md file with the login endpoint documentation. Here's the complete updated content:

```markdown:d:/uber/Backend/README.md
# User Authentication API Documentation

## Register User Endpoint

### POST /users/register

Creates a new user account in the system.

### Request Body

```json
{
  "fullName": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string"   // minimum 3 characters
  },
  "email": "string",      // valid email format, minimum 5 characters
  "password": "string"    // minimum 6 characters
}
```

### Validation Rules

- `fullName.firstname`: Required, minimum 3 characters
- `fullName.lastname`: Required, minimum 3 characters
- `email`: Required, must be a valid email format, minimum 5 characters
- `password`: Required, minimum 6 characters

### Response

#### Success Response (201 Created)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MmQzYWU...",
  "user": {
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "65672d3ae12345678901234"
  }
}
```

#### Error Responses

##### 400 Bad Request
- When validation fails
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullName.firstname",
      "location": "body"
    },
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

##### 400 Bad Request
- When required fields are missing
```json
{
  "message": "Full name with firstname and lastname is required"
}
```

## Login User Endpoint

### POST /users/login

Authenticates a user and returns an access token.

### Request Body

```json
{
  "email": "string",    // valid email format
  "password": "string"  // minimum 6 characters
}
```

### Validation Rules

- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters

### Response

#### Success Response (200 OK)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MmQzYWU...",
  "user": {
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "65672d3ae12345678901234"
  }
}
```

#### Error Responses

##### 400 Bad Request
- When validation fails
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

##### 401 Unauthorized
- When credentials are invalid
```json
{
  "message": "Invalid email or password"
}
```

### Security
- Password is hashed using bcrypt before storage
- Authentication token is generated using JWT with 24-hour expiration
```

The README.md file has been updated with comprehensive documentation for both the registration and login endpoints, including request/response examples and validation rules.
        