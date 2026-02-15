# Business Logic Documentation
## Overview
This document describes the business logic and validation rules for the Feedback REST API.
--
## Architecture Pattern
The application follows a **layered architecture** with clear separation of concerns:
```
Request → Routes → Controllers → Validators → Services → Response
```

### Layer Responsibilities

1. **Routes** (`src/routes/`)
   - Define HTTP endpoints and methods
   - Map URLs to controller functions
   - No business logic


2. **Controllers** (`src/controllers/`)
   - Handle HTTP request/response
   - Extract data from request
   - Call validators and services
   - Return appropriate HTTP status codes
   - Wrap operations in try-catch blocks


3. **Validators** (`src/validators/`)
   - Validate input data
   - Return validation results: `{ isValid: boolean, error?: string }`
   - No side effects


4. **Services** (`src/services/`)
   - Contain business logic
   - Perform CRUD operations
   - Transform and normalize data
   - Manage in-memory storage
   - No HTTP/Express dependencies

---

## Validation Rules

### Email Validation

**Regex Pattern:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
```


**Valid Examples:**
- ✅ `john@example.com`
- ✅ `user.name@company.co.uk`
- ✅ `test123@domain.org`


**Invalid Examples:**
- ❌ `user@invalid` (no dot)
- ❌ `not-an-email` (no @ symbol)
- ❌ `user @example.com` (contains space)
- ❌ `@example.com` (missing local part)

### Feedback Validation

**Name Field:**
- Required: Yes
- Type: String
- Processing: Trimmed of leading/trailing whitespace
- Error message: "Missing required fields: name, email, message"


**Email Field:**
- Required: Yes
- Type: String
- Validation: Must match email regex pattern
- Processing: Trimmed and converted to lowercase
- Error messages:
  - "Missing required fields: name, email, message"
  - "Invalid email format"


**Message Field:**
- Required: Yes
- Type: String
- Min length: 10 characters
- Processing: Trimmed of leading/trailing whitespace
- Error messages:
  - "Missing required fields: name, email, message"
  - "Message must be at least 10 characters"

---

## Business Rules Summary


1. **All fields are required** - Name, email, and message must be provided
2. **Email must be valid** - Must match standard email format
3. **Messages have minimum length** - At least 10 characters required
4. **Data is normalized** - Trimmed and lowercased where appropriate
5. **IDs are auto-generated** - Sequential integer starting from 1
6. **Timestamps are automatic** - ISO 8601 format added on creation
7. **Storage is ephemeral** - Data lost on server restart (in-memory only)
