export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  icon: string;
  color: string;
  content: string;
}

export const categories = [
  { name: "Manual Testing", slug: "manual", icon: "ًں§ھ", color: "from-blue-500 to-cyan-500" },
  { name: "REST Assured", slug: "rest-assured", icon: "âک•", color: "from-orange-500 to-red-500" },
  { name: "Cypress", slug: "cypress", icon: "ًںŒ²", color: "from-emerald-500 to-teal-500" },
  { name: "Python", slug: "python", icon: "ًںگچ", color: "from-yellow-500 to-green-500" },
  { name: "Postman", slug: "postman", icon: "ًں“®", color: "from-orange-400 to-orange-600" },
  { name: "Test Cases", slug: "test-cases", icon: "✓", color: "from-purple-500 to-indigo-500" },
];

export const posts: Post[] = [
  {
    slug: "introduction-to-api-testing",
    title: "Introduction to API Testing: A Complete Guide",
    description: "Learn what API testing is, why it matters, the types of API tests, and the key concepts every QA engineer needs to know before diving into automation.",
    category: "manual",
    tags: ["API Basics", "Manual Testing", "REST", "HTTP"],
    readTime: "8 min read",
    date: "2024-01-15",
    icon: "ًں§ھ",
    color: "from-blue-500 to-cyan-500",
    content: `
## What is API Testing?

API (Application Programming Interface) testing is a type of software testing that validates APIs directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.

Unlike UI testing, API testing operates at the **business logic layer** of the software architecture. It doesn't require a graphical interface — instead, you interact directly with the application's programming interface.

> **Key Insight:** API testing is often faster, more reliable, and easier to maintain than UI testing because APIs are less prone to change than user interfaces.

## Why API Testing Matters

- **Early bug detection** — Catch issues before they reach the UI layer
- **Faster feedback loops** — API tests run faster than UI tests
- **Language-independent** — Test any API regardless of the tech stack
- **Better coverage** — Test edge cases that are hard to reach through the UI
- **Continuous Integration** — Easily integrated into CI/CD pipelines

## Types of API Testing

### 1. Functional Testing
Verifies that the API does exactly what it's supposed to do. Tests each endpoint's behavior against expected results.

### 2. Load Testing
Measures API performance under high traffic. How many requests per second can the API handle before degrading?

### 3. Security Testing
Checks for vulnerabilities like SQL injection, authentication bypass, and unauthorized data access.

### 4. Integration Testing
Validates that different APIs or services work together correctly when combined.

### 5. Regression Testing
Ensures that new changes haven't broken existing API functionality.

### 6. Contract Testing
Verifies that the API response matches a defined contract/schema (e.g., Swagger/OpenAPI spec).

### 7. Negative Testing
Tests how the API handles invalid inputs, missing parameters, and unexpected scenarios.

## HTTP Fundamentals for API Testers

Understanding HTTP is the foundation of API testing.

### HTTP Methods

| Method | Purpose | Idempotent |
|--------|---------|-----------|
| GET | Retrieve data | Yes |
| POST | Create new resource | No |
| PUT | Update/replace resource | Yes |
| PATCH | Partially update resource | No |
| DELETE | Delete resource | Yes |
| HEAD | Like GET but no body | Yes |
| OPTIONS | Get allowed methods | Yes |

### HTTP Status Codes

**2xx — Success**
- \`200 OK\` — Request succeeded
- \`201 Created\` — Resource created
- \`204 No Content\` — Success, no body to return

**3xx — Redirection**
- \`301 Moved Permanently\` — Resource has a new URL
- \`304 Not Modified\` — Cached version is still valid

**4xx — Client Errors**
- \`400 Bad Request\` — Invalid syntax
- \`401 Unauthorized\` — Authentication required
- \`403 Forbidden\` — No permission
- \`404 Not Found\` — Resource doesn't exist
- \`422 Unprocessable Entity\` — Validation errors

**5xx — Server Errors**
- \`500 Internal Server Error\` — Generic server error
- \`502 Bad Gateway\` — Upstream server error
- \`503 Service Unavailable\` — Server overloaded/down

## REST API Structure

A typical REST API request consists of:

\`\`\`
GET https://api.example.com/users/123 HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
Content-Type: application/json
Accept: application/json
\`\`\`

### URL Anatomy

\`\`\`
https://api.example.com/v1/users/123/orders?status=pending&page=1
|-------|---------------|---|-----|---|------|----------------------|
scheme   host           ver resource  id  nested    query params
\`\`\`

## Key API Testing Checklist

Before testing any API endpoint, always verify:

- ✓ Correct HTTP method used
- ✓ Proper authentication/authorization headers
- ✓ Request body schema matches spec
- ✓ Response status code is correct
- ✓ Response body structure matches spec
- ✓ Response time is within acceptable limits
- ✓ Headers in response are correct
- ✓ Error messages are meaningful
- ✓ Edge cases are covered

## API Documentation Tools

- **Swagger/OpenAPI** — Industry standard for documenting REST APIs
- **Postman** — Document and test APIs together
- **Redoc** — Beautiful API docs from OpenAPI spec
- **Insomnia** — Lightweight API client with docs support

## What's Next?

Now that you understand the fundamentals, you're ready to start testing APIs manually using Postman, then move on to automation with REST Assured, Cypress, or Python!
    `,
  },
  {
    slug: "manual-api-testing-postman",
    title: "Manual API Testing with Postman: Step-by-Step Guide",
    description: "Master manual API testing using Postman. Learn to send requests, write tests, use environments, and organize your workspace effectively.",
    category: "manual",
    tags: ["Postman", "Manual Testing", "REST", "Assertions"],
    readTime: "12 min read",
    date: "2024-01-22",
    icon: "ًں§ھ",
    color: "from-blue-500 to-cyan-500",
    content: `
## Getting Started with Postman

Postman is the world's most popular API testing tool. It provides a graphical interface for sending HTTP requests and inspecting responses — making manual API testing accessible and efficient.

## Setting Up Postman

1. Download Postman from [postman.com](https://www.postman.com/downloads/)
2. Create a free account (required for collections sync)
3. Create a new **Workspace** for your project

## Sending Your First Request

### Basic GET Request

\`\`\`
Method: GET
URL: https://jsonplaceholder.typicode.com/users/1
\`\`\`

Click **Send** and examine the response:
- **Status:** 200 OK
- **Response Time:** ~200ms
- **Response Body:** JSON object with user data

### POST Request with Body

\`\`\`
Method: POST
URL: https://jsonplaceholder.typicode.com/posts
Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "title": "My Test Post",
  "body": "This is the post content",
  "userId": 1
}
\`\`\`

## Writing Tests in Postman

The **Tests** tab in Postman uses JavaScript to write assertions. The \`pm\` object gives you access to request/response data.

### Status Code Assertions

\`\`\`javascript
// Check status code
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

// Check multiple valid codes
pm.test("Success status", function () {
  pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);
});
\`\`\`

### Response Body Assertions

\`\`\`javascript
// Parse JSON response
const jsonData = pm.response.json();

// Check specific field
pm.test("User ID is correct", function () {
  pm.expect(jsonData.id).to.eql(1);
});

// Check field exists
pm.test("Email exists", function () {
  pm.expect(jsonData).to.have.property("email");
});

// Check email format
pm.test("Valid email format", function () {
  pm.expect(jsonData.email).to.match(/^[\\w.-]+@[\\w.-]+\\.\\w+$/);
});

// Check array
pm.test("Users array is not empty", function () {
  pm.expect(jsonData).to.be.an("array").that.is.not.empty;
});

// Deep equality
pm.test("User name matches", function () {
  pm.expect(jsonData.name).to.equal("Leanne Graham");
});
\`\`\`

### Response Time Assertions

\`\`\`javascript
pm.test("Response time under 2 seconds", function () {
  pm.expect(pm.response.responseTime).to.be.below(2000);
});
\`\`\`

### Header Assertions

\`\`\`javascript
pm.test("Content-Type is JSON", function () {
  pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});
\`\`\`

## Working with Environments

Environments let you switch between development, staging, and production without changing your requests.

### Creating an Environment

1. Click **Environments** → **Add**
2. Name it: \`Development\`
3. Add variables:

| Variable | Value |
|----------|-------|
| baseUrl | https://api.dev.example.com |
| apiKey | dev_abc123 |
| userId | 1 |

### Using Variables in Requests

\`\`\`
GET {{baseUrl}}/users/{{userId}}
Authorization: Bearer {{apiKey}}
\`\`\`

### Setting Variables from Tests

\`\`\`javascript
// Save response data to environment variable
const jsonData = pm.response.json();
pm.environment.set("authToken", jsonData.token);
pm.environment.set("createdUserId", jsonData.id);
\`\`\`

## Pre-request Scripts

Run code **before** the request is sent. Useful for generating dynamic data.

\`\`\`javascript
// Generate timestamp
pm.environment.set("timestamp", new Date().toISOString());

// Generate random email
const randomNum = Math.floor(Math.random() * 10000);
pm.environment.set("randomEmail", \`test\${randomNum}@example.com\`);

// Set dynamic auth token
const token = btoa("username:password");
pm.request.headers.add({
  key: "Authorization",
  value: \`Basic \${token}\`
});
\`\`\`

## Authentication in Postman

### Bearer Token

\`\`\`
Authorization Tab → Bearer Token → Enter your token
\`\`\`

### Basic Auth

\`\`\`
Authorization Tab → Basic Auth → Enter username/password
\`\`\`

### API Key

\`\`\`
Authorization Tab → API Key → Header: X-API-Key, Value: your-key
\`\`\`

### OAuth 2.0

\`\`\`
Authorization Tab → OAuth 2.0 → Configure token URL, client ID, scopes
\`\`\`

## Organizing with Collections

Collections group related requests together.

### Collection Structure Best Practice

\`\`\`
• User Service API
  • Authentication
    POST Login
    POST Refresh Token
    POST Logout
  • Users
    GET Get All Users
    GET Get User by ID
    POST Create User
    PUT Update User
    DELETE Delete User
  • Error Cases
    GET Invalid User ID
    POST Missing Required Fields
    GET Unauthorized Access
\`\`\`

### Collection Variables

Set variables at the collection level for shared data across all requests:
- Right-click collection → **Edit** → **Variables** tab

## Data-Driven Testing with CSV

1. Create \`test-data.csv\`:
\`\`\`csv
userId,expectedName,expectedEmail
1,Leanne Graham,Sincere@april.biz
2,Ervin Howell,Shanna@melissa.tv
3,Clementine Bauch,Nathan@yesenia.net
\`\`\`

2. In the test script:
\`\`\`javascript
const userId = pm.iterationData.get("userId");
const expectedName = pm.iterationData.get("expectedName");

pm.test(\`User \${userId} has correct name\`, function () {
  pm.expect(pm.response.json().name).to.equal(expectedName);
});
\`\`\`

3. Run collection → Select CSV file → Set iterations

## Running Collections with Newman (CLI)

Newman is Postman's command-line runner.

\`\`\`bash
# Install Newman
npm install -g newman

# Run a collection
newman run MyCollection.json

# Run with environment
newman run MyCollection.json -e dev-env.json

# Run with CSV data
newman run MyCollection.json -d test-data.csv

# Generate HTML report
npm install -g newman-reporter-htmlextra
newman run MyCollection.json --reporters htmlextra --reporter-htmlextra-export report.html
\`\`\`

## Best Practices

1. **Always test the happy path first**, then move to edge cases
2. **Use descriptive test names** — "User ID matches" not "Test 1"
3. **Chain requests** — Save response data and use in next request
4. **Test one thing per test** — Keep assertions focused
5. **Use environments** — Never hardcode URLs or credentials
6. **Version your collections** — Export and commit to Git
    `,
  },
  {
    slug: "postman-collections-advanced",
    title: "Postman Collections: Advanced Guide with Real Examples",
    description: "Deep dive into Postman Collections — from structure and organization to sharing, CI/CD integration, and building a complete test suite.",
    category: "postman",
    tags: ["Postman", "Collections", "Newman", "CI/CD", "Automation"],
    readTime: "10 min read",
    date: "2024-02-01",
    icon: "ًں“®",
    color: "from-orange-400 to-orange-600",
    content: `
## What are Postman Collections?

A Postman Collection is a group of saved API requests organized into folders. Collections are the backbone of API testing in Postman — they allow you to:

- Organize related requests
- Share APIs with teammates
- Run automated test suites
- Generate API documentation
- Create mock servers

## Collection Hierarchy

\`\`\`
Collection
├── Variables (collection-level)
├── Authorization (default auth)
├── Pre-request Script (runs before every request)
├── Tests (runs after every request)
└── Folders
    ├── Folder (with own auth/scripts)
    │   ├── Request 1
    │   └── Request 2
    └── Subfolder
        └── Request 3
\`\`\`

## Building a Complete Collection: E-Commerce API

Let's build a real-world test collection for an e-commerce API.

### Collection Variables

\`\`\`
baseUrl: https://api.shop.example.com/v1
adminToken: (empty — set by login test)
userToken: (empty — set by login test)
createdProductId: (empty — set by create product test)
createdOrderId: (empty — set by create order test)
\`\`\`

### Collection Pre-request Script

\`\`\`javascript
// Auto-refresh token if expired
const tokenExpiry = pm.collectionVariables.get("tokenExpiry");
const currentTime = Date.now();

if (tokenExpiry && currentTime > parseInt(tokenExpiry)) {
  pm.sendRequest({
    url: pm.collectionVariables.get("baseUrl") + "/auth/refresh",
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: {
      mode: "raw",
      raw: JSON.stringify({
        refreshToken: pm.collectionVariables.get("refreshToken")
      })
    }
  }, function (err, response) {
    if (!err && response.code === 200) {
      const data = response.json();
      pm.collectionVariables.set("userToken", data.accessToken);
      pm.collectionVariables.set("tokenExpiry", Date.now() + (data.expiresIn * 1000));
    }
  });
}
\`\`\`

## Complete Request Examples

### 1. POST /auth/login

**Request Body:**
\`\`\`json
{
  "email": "admin@shop.com",
  "password": "{{adminPassword}}"
}
\`\`\`

**Tests:**
\`\`\`javascript
const response = pm.response.json();

pm.test("Login successful", () => {
  pm.response.to.have.status(200);
});

pm.test("Token is returned", () => {
  pm.expect(response).to.have.property("accessToken");
  pm.expect(response.accessToken).to.be.a("string").and.not.empty;
});

pm.test("Refresh token is returned", () => {
  pm.expect(response).to.have.property("refreshToken");
});

pm.test("Token expiry is set", () => {
  pm.expect(response).to.have.property("expiresIn");
  pm.expect(response.expiresIn).to.be.above(0);
});

// Save tokens for subsequent requests
pm.collectionVariables.set("adminToken", response.accessToken);
pm.collectionVariables.set("refreshToken", response.refreshToken);
pm.collectionVariables.set("tokenExpiry", Date.now() + (response.expiresIn * 1000));
\`\`\`

### 2. GET /products

**Headers:**
\`\`\`
Authorization: Bearer {{adminToken}}
\`\`\`

**Tests:**
\`\`\`javascript
const response = pm.response.json();

pm.test("Status 200", () => pm.response.to.have.status(200));

pm.test("Response is an array", () => {
  pm.expect(response.data).to.be.an("array");
});

pm.test("Pagination metadata present", () => {
  pm.expect(response).to.have.property("total");
  pm.expect(response).to.have.property("page");
  pm.expect(response).to.have.property("perPage");
});

pm.test("Product schema is valid", () => {
  if (response.data.length > 0) {
    const product = response.data[0];
    pm.expect(product).to.have.all.keys("id", "name", "price", "category", "stock");
    pm.expect(product.price).to.be.a("number").and.above(0);
    pm.expect(product.stock).to.be.a("number").and.at.least(0);
  }
});
\`\`\`

### 3. POST /products (Create Product)

**Request Body:**
\`\`\`json
{
  "name": "Test Product {{$randomInt}}",
  "description": "Test description",
  "price": 29.99,
  "category": "electronics",
  "stock": 100,
  "sku": "TEST-{{$randomAlphaNumeric}}"
}
\`\`\`

**Tests:**
\`\`\`javascript
const response = pm.response.json();

pm.test("Product created with 201", () => {
  pm.response.to.have.status(201);
});

pm.test("Created product has ID", () => {
  pm.expect(response.id).to.exist;
  pm.collectionVariables.set("createdProductId", response.id);
});

pm.test("Created product data matches input", () => {
  pm.expect(response.price).to.equal(29.99);
  pm.expect(response.stock).to.equal(100);
  pm.expect(response.category).to.equal("electronics");
});

pm.test("CreatedAt timestamp is set", () => {
  pm.expect(response.createdAt).to.exist;
  const createdDate = new Date(response.createdAt);
  pm.expect(createdDate).to.be.instanceOf(Date);
});
\`\`\`

### 4. GET /products/:id (Get Product)

**URL:** \`{{baseUrl}}/products/{{createdProductId}}\`

**Tests:**
\`\`\`javascript
const response = pm.response.json();

pm.test("Status 200", () => pm.response.to.have.status(200));

pm.test("Returns correct product", () => {
  pm.expect(response.id).to.equal(pm.collectionVariables.get("createdProductId"));
});
\`\`\`

### 5. DELETE /products/:id

**Tests:**
\`\`\`javascript
pm.test("Product deleted", () => {
  pm.response.to.have.status(204);
});

// Verify it's gone
pm.sendRequest({
  url: pm.collectionVariables.get("baseUrl") + "/products/" + pm.collectionVariables.get("createdProductId"),
  method: "GET",
  header: { "Authorization": "Bearer " + pm.collectionVariables.get("adminToken") }
}, function(err, response) {
  pm.test("Product no longer exists", () => {
    pm.expect(response.code).to.equal(404);
  });
});
\`\`\`

## Schema Validation with Postman

\`\`\`javascript
const Ajv = require("ajv");
const ajv = new Ajv();

const userSchema = {
  type: "object",
  required: ["id", "name", "email", "role"],
  properties: {
    id: { type: "string", format: "uuid" },
    name: { type: "string", minLength: 1, maxLength: 100 },
    email: { type: "string", format: "email" },
    role: { type: "string", enum: ["admin", "user", "moderator"] },
    createdAt: { type: "string", format: "date-time" }
  },
  additionalProperties: false
};

const validate = ajv.compile(userSchema);
const valid = validate(pm.response.json());

pm.test("Response matches schema", () => {
  pm.expect(valid).to.be.true;
  if (!valid) console.log(ajv.errorsText(validate.errors));
});
\`\`\`

## CI/CD Integration with Newman

### GitHub Actions

\`\`\`yaml
name: API Tests

on: [push, pull_request]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Newman
        run: npm install -g newman newman-reporter-htmlextra
      
      - name: Run API Tests
        run: |
          newman run collections/api-tests.json \\
            -e environments/staging.json \\
            --reporters cli,htmlextra \\
            --reporter-htmlextra-export reports/api-test-report.html \\
            --bail
      
      - name: Upload Test Report
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: api-test-report
          path: reports/api-test-report.html
\`\`\`

### Newman CLI Options

\`\`\`bash
newman run collection.json \\
  -e environment.json \\          # Environment file
  -g globals.json \\              # Global variables
  -d test-data.csv \\             # Data file
  -n 5 \\                         # Iteration count
  --timeout-request 5000 \\       # Request timeout (ms)
  --delay-request 500 \\          # Delay between requests (ms)
  --bail \\                        # Stop on first failure
  --color on \\                    # Colorized output
  --verbose                       # Verbose logging
\`\`\`

## Postman API Documentation

Enable documentation for your collection:

1. Right-click collection → **View Documentation**
2. Add descriptions to each request
3. Publish to the Postman API Network or a private URL
4. Share with your team

## Best Practices for Collections

1. **Use folders** to group requests by resource/feature
2. **Set collection-level auth** to avoid repeating headers
3. **Use collection variables** for shared data
4. **Write tests at collection level** for common assertions
5. **Export and version control** your collections in Git
6. **Use Postman Flows** for complex multi-step API workflows
7. **Mock servers** for testing when API isn't ready
    `,
  },
  {
    slug: "rest-assured-java-api-testing",
    title: "REST Assured: Complete Java API Testing Guide",
    description: "Learn REST Assured from scratch — setting up, writing tests, handling authentication, request specifications, response validation, and integrating with TestNG/JUnit.",
    category: "rest-assured",
    tags: ["REST Assured", "Java", "TestNG", "JUnit", "Maven"],
    readTime: "15 min read",
    date: "2024-02-10",
    icon: "âک•",
    color: "from-orange-500 to-red-500",
    content: `
## What is REST Assured?

REST Assured is a Java library that simplifies testing and validation of REST APIs. It has a domain-specific language (DSL) that allows you to write tests in a Given-When-Then format, making tests readable and maintainable.

## Project Setup

### Maven Dependencies (pom.xml)

\`\`\`xml
<dependencies>
    <!-- REST Assured -->
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <version>5.4.0</version>
        <scope>test</scope>
    </dependency>
    
    <!-- JSON Schema Validator -->
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>json-schema-validator</artifactId>
        <version>5.4.0</version>
        <scope>test</scope>
    </dependency>
    
    <!-- TestNG -->
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.8.0</version>
        <scope>test</scope>
    </dependency>
    
    <!-- Hamcrest (assertion library) -->
    <dependency>
        <groupId>org.hamcrest</groupId>
        <artifactId>hamcrest-all</artifactId>
        <version>1.3</version>
        <scope>test</scope>
    </dependency>
    
    <!-- Jackson for JSON -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.16.1</version>
    </dependency>
</dependencies>
\`\`\`

## Basic REST Assured Structure

REST Assured follows the **Given-When-Then** BDD pattern:

\`\`\`java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class BasicApiTest {

    @Test
    public void testGetUser() {
        given()
            .baseUri("https://jsonplaceholder.typicode.com")
            .header("Accept", "application/json")
        .when()
            .get("/users/1")
        .then()
            .statusCode(200)
            .body("id", equalTo(1))
            .body("name", equalTo("Leanne Graham"))
            .body("email", notNullValue())
            .time(lessThan(3000L));
    }
}
\`\`\`

## Setting Up Base Configuration

Create a base class for common configuration:

\`\`\`java
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import org.testng.annotations.BeforeClass;

import static org.hamcrest.Matchers.lessThan;

public class BaseTest {
    
    protected static RequestSpecification requestSpec;
    protected static ResponseSpecification responseSpec;
    
    @BeforeClass
    public static void setUp() {
        // Request specification
        requestSpec = new RequestSpecBuilder()
            .setBaseUri("https://api.example.com")
            .setBasePath("/v1")
            .setContentType(ContentType.JSON)
            .setAccept(ContentType.JSON)
            .addHeader("X-API-Version", "1.0")
            .addFilter(new RequestLoggingFilter())
            .addFilter(new ResponseLoggingFilter())
            .build();
        
        // Response specification (apply to all responses)
        responseSpec = new ResponseSpecBuilder()
            .expectResponseTime(lessThan(5000L))
            .expectHeader("Content-Type", "application/json; charset=utf-8")
            .build();
        
        // Set globally
        RestAssured.requestSpecification = requestSpec;
        RestAssured.responseSpecification = responseSpec;
    }
}
\`\`\`

## Complete Test Examples

### GET Request Tests

\`\`\`java
public class GetRequestTests extends BaseTest {
    
    @Test
    public void testGetAllUsers() {
        given()
            .spec(requestSpec)
            .queryParam("page", 1)
            .queryParam("perPage", 10)
        .when()
            .get("/users")
        .then()
            .spec(responseSpec)
            .statusCode(200)
            .body("data", not(empty()))
            .body("data.size()", equalTo(10))
            .body("total", greaterThan(0))
            .body("data[0].id", notNullValue())
            .body("data[0].email", containsString("@"));
    }
    
    @Test
    public void testGetUserById() {
        int userId = 1;
        
        given()
            .spec(requestSpec)
            .pathParam("id", userId)
        .when()
            .get("/users/{id}")
        .then()
            .statusCode(200)
            .body("id", equalTo(userId))
            .body("name", not(emptyString()))
            .body("email", matchesPattern("[\\\\w.]+@[\\\\w.]+\\\\.[\\\\w]+"));
    }
    
    @Test
    public void testGetUserNotFound() {
        given()
            .spec(requestSpec)
        .when()
            .get("/users/999999")
        .then()
            .statusCode(404)
            .body("error", equalTo("User not found"))
            .body("code", equalTo("USER_NOT_FOUND"));
    }
}
\`\`\`

### POST Request Tests

\`\`\`java
import org.json.simple.JSONObject;

public class PostRequestTests extends BaseTest {
    
    @Test
    public void testCreateUser() {
        JSONObject body = new JSONObject();
        body.put("name", "John Doe");
        body.put("email", "john.doe@example.com");
        body.put("role", "user");
        body.put("age", 30);
        
        given()
            .spec(requestSpec)
            .body(body.toJSONString())
        .when()
            .post("/users")
        .then()
            .statusCode(201)
            .header("Location", containsString("/users/"))
            .body("id", notNullValue())
            .body("name", equalTo("John Doe"))
            .body("email", equalTo("john.doe@example.com"))
            .body("createdAt", notNullValue());
    }
    
    @Test
    public void testCreateUserWithInvalidEmail() {
        JSONObject body = new JSONObject();
        body.put("name", "John Doe");
        body.put("email", "invalid-email");
        
        given()
            .spec(requestSpec)
            .body(body.toJSONString())
        .when()
            .post("/users")
        .then()
            .statusCode(422)
            .body("errors.email", hasItem("must be a valid email"));
    }
    
    @Test
    public void testCreateUserMissingRequired() {
        given()
            .spec(requestSpec)
            .body("{}")
        .when()
            .post("/users")
        .then()
            .statusCode(400)
            .body("errors.name", hasItem("is required"))
            .body("errors.email", hasItem("is required"));
    }
}
\`\`\`

### PUT & PATCH Tests

\`\`\`java
public class UpdateRequestTests extends BaseTest {
    
    private String userId;
    
    @BeforeClass
    public void createTestUser() {
        // Create a user first
        JSONObject body = new JSONObject();
        body.put("name", "Test User");
        body.put("email", "test.update@example.com");
        
        userId = given()
            .spec(requestSpec)
            .body(body.toJSONString())
        .when()
            .post("/users")
        .then()
            .statusCode(201)
            .extract().path("id");
    }
    
    @Test
    public void testFullUpdateUser() {
        JSONObject body = new JSONObject();
        body.put("name", "Updated Name");
        body.put("email", "updated@example.com");
        body.put("role", "admin");
        
        given()
            .spec(requestSpec)
            .pathParam("id", userId)
            .body(body.toJSONString())
        .when()
            .put("/users/{id}")
        .then()
            .statusCode(200)
            .body("name", equalTo("Updated Name"))
            .body("email", equalTo("updated@example.com"))
            .body("updatedAt", notNullValue());
    }
    
    @Test
    public void testPartialUpdateUser() {
        given()
            .spec(requestSpec)
            .pathParam("id", userId)
            .body("{\\"name\\": \\"Partially Updated\\"}")
        .when()
            .patch("/users/{id}")
        .then()
            .statusCode(200)
            .body("name", equalTo("Partially Updated"))
            // Email should not change
            .body("email", equalTo("updated@example.com"));
    }
}
\`\`\`

## Authentication

### Bearer Token Auth

\`\`\`java
public class AuthTests extends BaseTest {
    
    private String authToken;
    
    @Test(priority = 1)
    public void testLogin() {
        authToken = given()
            .spec(requestSpec)
            .body("{\\"email\\": \\"admin@example.com\\", \\"password\\": \\"password123\\"}")
        .when()
            .post("/auth/login")
        .then()
            .statusCode(200)
            .body("token", notNullValue())
            .extract().path("token");
    }
    
    @Test(priority = 2, dependsOnMethods = "testLogin")
    public void testProtectedEndpointWithToken() {
        given()
            .spec(requestSpec)
            .header("Authorization", "Bearer " + authToken)
        .when()
            .get("/admin/dashboard")
        .then()
            .statusCode(200);
    }
    
    @Test
    public void testProtectedEndpointWithoutToken() {
        given()
            .spec(requestSpec)
        .when()
            .get("/admin/dashboard")
        .then()
            .statusCode(401)
            .body("message", equalTo("Authentication required"));
    }
}
\`\`\`

## Extracting Response Data

\`\`\`java
@Test
public void testExtractResponseData() {
    // Extract single value
    String email = given()
        .spec(requestSpec)
    .when()
        .get("/users/1")
    .then()
        .statusCode(200)
        .extract().path("email");
    
    // Extract entire response
    Response response = given()
        .spec(requestSpec)
    .when()
        .get("/users")
    .then()
        .extract().response();
    
    // Work with the response
    int total = response.path("total");
    List<String> emails = response.path("data.email");
    String firstUserName = response.path("data[0].name");
    
    // Deserialize to POJO
    UserResponse userResponse = given()
        .spec(requestSpec)
    .when()
        .get("/users/1")
    .then()
        .extract().as(UserResponse.class);
    
    Assert.assertEquals(userResponse.getId(), 1);
}
\`\`\`

## JSON Schema Validation

\`\`\`java
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

@Test
public void testResponseMatchesSchema() {
    given()
        .spec(requestSpec)
    .when()
        .get("/users/1")
    .then()
        .statusCode(200)
        .body(matchesJsonSchemaInClasspath("schemas/user-schema.json"));
}
\`\`\`

Create \`src/test/resources/schemas/user-schema.json\`:

\`\`\`json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "required": ["id", "name", "email"],
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string", "minLength": 1 },
    "email": { "type": "string", "format": "email" },
    "role": { "type": "string", "enum": ["admin", "user", "moderator"] }
  }
}
\`\`\`

## TestNG Configuration

\`testng.xml\`:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="API Test Suite" parallel="classes" thread-count="5">
    <test name="User API Tests">
        <classes>
            <class name="tests.GetRequestTests"/>
            <class name="tests.PostRequestTests"/>
            <class name="tests.UpdateRequestTests"/>
            <class name="tests.AuthTests"/>
        </classes>
    </test>
</suite>
\`\`\`

## Running Tests

\`\`\`bash
# Run all tests
mvn test

# Run specific class
mvn test -Dtest=GetRequestTests

# Run with environment
mvn test -Denv=staging

# Generate Allure report
mvn allure:report
\`\`\`
    `,
  },
  {
    slug: "cypress-api-testing",
    title: "Cypress API Testing: Complete Guide with Examples",
    description: "Learn how to use Cypress for API testing — from basic cy.request() calls to intercepts, fixtures, custom commands, and integrating API tests into your E2E suite.",
    category: "cypress",
    tags: ["Cypress", "JavaScript", "E2E", "cy.request", "Intercept"],
    readTime: "13 min read",
    date: "2024-02-18",
    icon: "ًںŒ²",
    color: "from-emerald-500 to-teal-500",
    content: `
## Cypress for API Testing

While Cypress is primarily known for end-to-end browser testing, it's also a powerful tool for API testing. Using \`cy.request()\`, you can make HTTP requests directly and run API tests without a browser, or combine API calls with UI tests for comprehensive coverage.

## Setup

### Installation

\`\`\`bash
# Create new project
mkdir api-blog-cypress && cd api-blog-cypress
npm init -y

# Install Cypress
npm install --save-dev cypress

# Open Cypress
npx cypress open
\`\`\`

### Cypress Configuration (cypress.config.ts)

\`\`\`typescript
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.example.com/v1',
    env: {
      apiKey: 'your-api-key',
      adminEmail: 'admin@example.com',
      adminPassword: 'password123',
    },
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
    supportFile: 'cypress/support/e2e.ts',
    defaultCommandTimeout: 10000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
})
\`\`\`

## cy.request() Basics

\`\`\`typescript
describe('Basic API Tests', () => {
  it('GET request - fetch user', () => {
    cy.request('GET', '/users/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(1)
      expect(response.body.email).to.contain('@')
    })
  })

  it('POST request - create resource', () => {
    cy.request({
      method: 'POST',
      url: '/posts',
      body: {
        title: 'Test Post',
        body: 'Post content',
        userId: 1,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.id).to.exist
    })
  })
})
\`\`\`

## Complete API Test Suite

### Authentication Tests

\`\`\`typescript
// cypress/e2e/api/auth.cy.ts
describe('Authentication API', () => {
  const loginUrl = '/auth/login'
  const credentials = {
    email: Cypress.env('adminEmail'),
    password: Cypress.env('adminPassword'),
  }

  it('POST /auth/login - valid credentials', () => {
    cy.request({
      method: 'POST',
      url: loginUrl,
      body: credentials,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('accessToken')
      expect(response.body).to.have.property('refreshToken')
      expect(response.body.accessToken).to.be.a('string')
      expect(response.body.expiresIn).to.be.a('number').and.greaterThan(0)

      // Store token for later use
      Cypress.env('authToken', response.body.accessToken)
    })
  })

  it('POST /auth/login - invalid password returns 401', () => {
    cy.request({
      method: 'POST',
      url: loginUrl,
      body: { ...credentials, password: 'wrongpassword' },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.error).to.eq('Invalid credentials')
    })
  })

  it('POST /auth/login - missing email returns 400', () => {
    cy.request({
      method: 'POST',
      url: loginUrl,
      body: { password: 'password' },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.errors).to.have.property('email')
    })
  })

  it('POST /auth/logout - invalidates token', () => {
    cy.request({
      method: 'POST',
      url: '/auth/logout',
      headers: { Authorization: \`Bearer \${Cypress.env('authToken')}\` },
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
})
\`\`\`

### Users API Tests

\`\`\`typescript
// cypress/e2e/api/users.cy.ts
describe('Users API', () => {
  let authToken: string
  let createdUserId: string

  before(() => {
    // Login before all tests
    cy.request({
      method: 'POST',
      url: '/auth/login',
      body: {
        email: Cypress.env('adminEmail'),
        password: Cypress.env('adminPassword'),
      },
    }).then((response) => {
      authToken = response.body.accessToken
    })
  })

  it('GET /users - returns paginated users', () => {
    cy.request({
      method: 'GET',
      url: '/users',
      headers: { Authorization: \`Bearer \${authToken}\` },
      qs: { page: 1, perPage: 5 },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.be.an('array')
      expect(response.body.data).to.have.length.at.most(5)
      expect(response.body).to.have.all.keys('data', 'total', 'page', 'perPage')
      
      // Validate user schema
      response.body.data.forEach((user: any) => {
        expect(user).to.have.all.keys('id', 'name', 'email', 'role', 'createdAt')
        expect(user.email).to.match(/^[\\w.]+@[\\w.]+\\.[\\w]+$/)
      })
    })
  })

  it('POST /users - creates a new user', () => {
    const newUser = {
      name: 'API Test User',
      email: \`testuser\${Date.now()}@example.com\`,
      role: 'user',
    }

    cy.request({
      method: 'POST',
      url: '/users',
      headers: { Authorization: \`Bearer \${authToken}\` },
      body: newUser,
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.id).to.exist
      expect(response.body.name).to.eq(newUser.name)
      expect(response.body.email).to.eq(newUser.email)
      expect(response.body.createdAt).to.exist
      
      // Check Location header
      expect(response.headers).to.have.property('location')
      expect(response.headers.location).to.include(response.body.id)

      createdUserId = response.body.id
    })
  })

  it('GET /users/:id - returns created user', () => {
    cy.request({
      method: 'GET',
      url: \`/users/\${createdUserId}\`,
      headers: { Authorization: \`Bearer \${authToken}\` },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(createdUserId)
    })
  })

  it('PATCH /users/:id - partial update', () => {
    cy.request({
      method: 'PATCH',
      url: \`/users/\${createdUserId}\`,
      headers: { Authorization: \`Bearer \${authToken}\` },
      body: { name: 'Updated Name' },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('Updated Name')
    })
  })

  it('DELETE /users/:id - removes user', () => {
    cy.request({
      method: 'DELETE',
      url: \`/users/\${createdUserId}\`,
      headers: { Authorization: \`Bearer \${authToken}\` },
    }).then((response) => {
      expect(response.status).to.eq(204)
    })

    // Verify deletion
    cy.request({
      method: 'GET',
      url: \`/users/\${createdUserId}\`,
      headers: { Authorization: \`Bearer \${authToken}\` },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})
\`\`\`

## Custom Commands

Create reusable commands in \`cypress/support/commands.ts\`:

\`\`\`typescript
declare global {
  namespace Cypress {
    interface Chainable {
      apiLogin(email?: string, password?: string): Chainable<string>
      apiRequest(options: ApiRequestOptions): Chainable<Cypress.Response<any>>
    }
  }
}

// Login command that caches token
Cypress.Commands.add('apiLogin', (
  email = Cypress.env('adminEmail'),
  password = Cypress.env('adminPassword')
) => {
  return cy.request({
    method: 'POST',
    url: '/auth/login',
    body: { email, password },
  }).then((response) => {
    const token = response.body.accessToken
    Cypress.env('authToken', token)
    return token
  })
})

// Authenticated API request
Cypress.Commands.add('apiRequest', (options) => {
  return cy.request({
    ...options,
    headers: {
      Authorization: \`Bearer \${Cypress.env('authToken')}\`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
    failOnStatusCode: options.failOnStatusCode ?? true,
  })
})

// Usage:
// cy.apiLogin().then(token => { ... })
// cy.apiRequest({ method: 'GET', url: '/users' }).then(response => { ... })
\`\`\`

## Fixtures for Test Data

Create \`cypress/fixtures/user.json\`:

\`\`\`json
{
  "validUser": {
    "name": "Test User",
    "email": "test@example.com",
    "role": "user"
  },
  "adminUser": {
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"
  },
  "invalidUser": {
    "name": "",
    "email": "not-an-email",
    "role": "invalid-role"
  }
}
\`\`\`

Using fixtures in tests:

\`\`\`typescript
describe('User API with Fixtures', () => {
  it('creates user from fixture', () => {
    cy.fixture('user').then((userData) => {
      cy.apiRequest({
        method: 'POST',
        url: '/users',
        body: userData.validUser,
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq(userData.validUser.name)
      })
    })
  })
})
\`\`\`

## Network Intercepts for UI + API Testing

\`\`\`typescript
describe('Combined UI and API Testing', () => {
  it('intercepts API calls in E2E test', () => {
    // Intercept and validate API call made by the UI
    cy.intercept('GET', '/api/users*').as('getUsers')
    
    cy.visit('/users')
    cy.wait('@getUsers').then((interception) => {
      expect(interception.response?.statusCode).to.eq(200)
      expect(interception.response?.body.data).to.be.an('array')
    })
  })

  it('mocks API response for UI testing', () => {
    // Return mock data instead of real API call
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: {
        data: [
          { id: '1', name: 'Mock User', email: 'mock@test.com' },
        ],
        total: 1,
      },
    }).as('mockGetUsers')

    cy.visit('/users')
    cy.wait('@mockGetUsers')
    cy.contains('Mock User').should('be.visible')
  })
})
\`\`\`

## Running Tests

\`\`\`bash
# Open Cypress UI
npx cypress open

# Run all tests headlessly
npx cypress run

# Run specific spec file
npx cypress run --spec "cypress/e2e/api/users.cy.ts"

# Run with different environment
npx cypress run --env apiUrl=https://staging.api.com

# Run with reporter
npx cypress run --reporter mochawesome
\`\`\`
    `,
  },
  {
    slug: "python-api-testing-requests-pytest",
    title: "Python API Testing with Requests & Pytest",
    description: "Master API testing in Python using the requests library and pytest framework — from basic requests to fixtures, parametrize, mocking, and CI/CD integration.",
    category: "python",
    tags: ["Python", "Pytest", "Requests", "Fixtures", "Mocking"],
    readTime: "14 min read",
    date: "2024-03-01",
    icon: "ًںگچ",
    color: "from-yellow-500 to-green-500",
    content: `
## Python for API Testing

Python is one of the most popular languages for API testing due to its simplicity, the powerful \`requests\` library, and the feature-rich \`pytest\` framework. Together, they make for a clean, readable, and highly maintainable test suite.

## Setup

### Install Dependencies

\`\`\`bash
pip install requests pytest pytest-html pytest-xdist faker python-dotenv
\`\`\`

### Project Structure

\`\`\`
api-tests/
├── conftest.py          # Shared fixtures
├── pytest.ini           # Pytest configuration
├── .env                 # Environment variables
├── tests/
│   ├── test_auth.py
│   ├── test_users.py
│   ├── test_products.py
│   └── test_orders.py
├── utils/
│   ├── api_client.py    # Base API client
│   └── helpers.py       # Test helpers
└── data/
    └── test_data.py     # Test data
\`\`\`

### pytest.ini

\`\`\`ini
[pytest]
addopts = -v --tb=short --html=reports/report.html
testpaths = tests
markers =
    smoke: Quick smoke tests
    regression: Full regression suite
    auth: Authentication tests
    users: User management tests
\`\`\`

## Building the API Client

\`\`\`python
# utils/api_client.py
import requests
import os
from typing import Optional, Dict, Any

class APIClient:
    def __init__(self, base_url: str, token: Optional[str] = None):
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
        if token:
            self.set_auth_token(token)
    
    def set_auth_token(self, token: str):
        self.session.headers['Authorization'] = f'Bearer {token}'
    
    def get(self, endpoint: str, params: Optional[Dict] = None, **kwargs):
        return self.session.get(f'{self.base_url}{endpoint}', params=params, **kwargs)
    
    def post(self, endpoint: str, body: Optional[Dict] = None, **kwargs):
        return self.session.post(f'{self.base_url}{endpoint}', json=body, **kwargs)
    
    def put(self, endpoint: str, body: Optional[Dict] = None, **kwargs):
        return self.session.put(f'{self.base_url}{endpoint}', json=body, **kwargs)
    
    def patch(self, endpoint: str, body: Optional[Dict] = None, **kwargs):
        return self.session.patch(f'{self.base_url}{endpoint}', json=body, **kwargs)
    
    def delete(self, endpoint: str, **kwargs):
        return self.session.delete(f'{self.base_url}{endpoint}', **kwargs)
\`\`\`

## Conftest.py — Shared Fixtures

\`\`\`python
# conftest.py
import pytest
import os
from faker import Faker
from dotenv import load_dotenv
from utils.api_client import APIClient

load_dotenv()
fake = Faker()

BASE_URL = os.getenv('API_BASE_URL', 'https://api.example.com/v1')

@pytest.fixture(scope='session')
def api_client():
    """Base API client (no auth)"""
    return APIClient(BASE_URL)

@pytest.fixture(scope='session')
def auth_token(api_client):
    """Get auth token by logging in"""
    response = api_client.post('/auth/login', {
        'email': os.getenv('ADMIN_EMAIL'),
        'password': os.getenv('ADMIN_PASSWORD'),
    })
    assert response.status_code == 200, f"Login failed: {response.text}"
    return response.json()['accessToken']

@pytest.fixture(scope='session')
def authenticated_client(auth_token):
    """API client with auth token"""
    client = APIClient(BASE_URL, token=auth_token)
    return client

@pytest.fixture
def new_user_data():
    """Generate random user data for each test"""
    return {
        'name': fake.name(),
        'email': fake.unique.email(),
        'role': 'user',
    }

@pytest.fixture
def created_user(authenticated_client, new_user_data):
    """Create a user and clean up after test"""
    response = authenticated_client.post('/users', new_user_data)
    assert response.status_code == 201
    user = response.json()
    
    yield user  # Test runs here
    
    # Cleanup
    authenticated_client.delete(f"/users/{user['id']}")
\`\`\`

## Authentication Tests

\`\`\`python
# tests/test_auth.py
import pytest

@pytest.mark.auth
class TestAuthentication:
    
    def test_login_valid_credentials(self, api_client):
        response = api_client.post('/auth/login', {
            'email': 'admin@example.com',
            'password': 'password123',
        })
        
        assert response.status_code == 200
        data = response.json()
        assert 'accessToken' in data
        assert 'refreshToken' in data
        assert isinstance(data['accessToken'], str)
        assert len(data['accessToken']) > 0
        assert data['expiresIn'] > 0
    
    def test_login_invalid_password_returns_401(self, api_client):
        response = api_client.post('/auth/login', {
            'email': 'admin@example.com',
            'password': 'wrongpassword',
        })
        
        assert response.status_code == 401
        assert response.json()['error'] == 'Invalid credentials'
    
    def test_login_missing_email_returns_400(self, api_client):
        response = api_client.post('/auth/login', {
            'password': 'password123',
        })
        
        assert response.status_code == 400
        errors = response.json()['errors']
        assert 'email' in errors
    
    @pytest.mark.parametrize('email', [
        '',
        'notanemail',
        'missing@',
        '@nodomain.com',
    ])
    def test_login_invalid_email_format(self, api_client, email):
        response = api_client.post('/auth/login', {
            'email': email,
            'password': 'password123',
        })
        
        assert response.status_code in [400, 422]
    
    def test_access_protected_route_without_token(self, api_client):
        response = api_client.get('/admin/dashboard')
        assert response.status_code == 401
    
    def test_access_protected_route_with_invalid_token(self, api_client):
        api_client.set_auth_token('invalid.token.here')
        response = api_client.get('/admin/dashboard')
        assert response.status_code == 401
\`\`\`

## Users CRUD Tests

\`\`\`python
# tests/test_users.py
import pytest
import re

@pytest.mark.users
class TestGetUsers:
    
    def test_get_all_users_returns_200(self, authenticated_client):
        response = authenticated_client.get('/users')
        assert response.status_code == 200
    
    def test_get_users_response_structure(self, authenticated_client):
        response = authenticated_client.get('/users')
        data = response.json()
        
        assert 'data' in data
        assert 'total' in data
        assert 'page' in data
        assert 'perPage' in data
        assert isinstance(data['data'], list)
        assert isinstance(data['total'], int)
    
    def test_get_users_pagination(self, authenticated_client):
        response = authenticated_client.get('/users', params={'page': 1, 'perPage': 5})
        data = response.json()
        
        assert len(data['data']) <= 5
        assert data['page'] == 1
    
    def test_get_user_by_id(self, authenticated_client, created_user):
        user_id = created_user['id']
        response = authenticated_client.get(f'/users/{user_id}')
        
        assert response.status_code == 200
        data = response.json()
        assert data['id'] == user_id
    
    def test_get_nonexistent_user_returns_404(self, authenticated_client):
        response = authenticated_client.get('/users/nonexistent-id-12345')
        assert response.status_code == 404
        assert 'error' in response.json()


@pytest.mark.users
class TestCreateUser:
    
    def test_create_user_success(self, authenticated_client, new_user_data):
        response = authenticated_client.post('/users', new_user_data)
        
        assert response.status_code == 201
        data = response.json()
        assert 'id' in data
        assert data['name'] == new_user_data['name']
        assert data['email'] == new_user_data['email']
        assert 'createdAt' in data
        
        # Cleanup
        authenticated_client.delete(f"/users/{data['id']}")
    
    def test_create_user_returns_location_header(self, authenticated_client, new_user_data):
        response = authenticated_client.post('/users', new_user_data)
        
        assert response.status_code == 201
        assert 'Location' in response.headers
        
        user_id = response.json()['id']
        authenticated_client.delete(f"/users/{user_id}")
    
    @pytest.mark.parametrize('missing_field', ['name', 'email'])
    def test_create_user_missing_required_field(self, authenticated_client, new_user_data, missing_field):
        incomplete_data = {k: v for k, v in new_user_data.items() if k != missing_field}
        response = authenticated_client.post('/users', incomplete_data)
        
        assert response.status_code in [400, 422]
        errors = response.json().get('errors', {})
        assert missing_field in errors
    
    def test_create_user_duplicate_email(self, authenticated_client, created_user, new_user_data):
        duplicate_data = {**new_user_data, 'email': created_user['email']}
        response = authenticated_client.post('/users', duplicate_data)
        
        assert response.status_code == 409
        assert 'email' in response.json().get('error', '').lower()
    
    @pytest.mark.parametrize('invalid_email', [
        'notanemail',
        'missing.domain@',
        '@nodomain',
        'spaces in@email.com',
        '',
    ])
    def test_create_user_invalid_email(self, authenticated_client, new_user_data, invalid_email):
        invalid_data = {**new_user_data, 'email': invalid_email}
        response = authenticated_client.post('/users', invalid_data)
        
        assert response.status_code in [400, 422]


@pytest.mark.users  
class TestUpdateUser:
    
    def test_full_update_user(self, authenticated_client, created_user):
        user_id = created_user['id']
        update_data = {
            'name': 'Completely Updated',
            'email': 'completely.updated@example.com',
            'role': 'admin',
        }
        
        response = authenticated_client.put(f'/users/{user_id}', update_data)
        
        assert response.status_code == 200
        data = response.json()
        assert data['name'] == 'Completely Updated'
        assert data['email'] == 'completely.updated@example.com'
    
    def test_partial_update_user(self, authenticated_client, created_user):
        user_id = created_user['id']
        original_email = created_user['email']
        
        response = authenticated_client.patch(f'/users/{user_id}', {'name': 'Partial Update'})
        
        assert response.status_code == 200
        data = response.json()
        assert data['name'] == 'Partial Update'
        assert data['email'] == original_email  # Unchanged
\`\`\`

## Response Validation Helpers

\`\`\`python
# utils/helpers.py
import re
from datetime import datetime

def assert_valid_uuid(value: str):
    uuid_pattern = r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
    assert re.match(uuid_pattern, value, re.IGNORECASE), f"'{value}' is not a valid UUID"

def assert_valid_email(value: str):
    email_pattern = r'^[\\w.+\\-]+@[\\w\\-]+\\.[\\w.]+$'
    assert re.match(email_pattern, value), f"'{value}' is not a valid email"

def assert_valid_iso_datetime(value: str):
    try:
        datetime.fromisoformat(value.replace('Z', '+00:00'))
    except ValueError:
        raise AssertionError(f"'{value}' is not a valid ISO datetime")

def assert_response_time(response, max_ms: int = 2000):
    elapsed_ms = response.elapsed.total_seconds() * 1000
    assert elapsed_ms < max_ms, f"Response took {elapsed_ms:.0f}ms (max: {max_ms}ms)"

def assert_schema(data: dict, required_keys: list):
    for key in required_keys:
        assert key in data, f"Missing required field: '{key}'"
\`\`\`

## Mocking with pytest-mock

\`\`\`python
# tests/test_with_mocks.py
import pytest
from unittest.mock import patch, Mock

def test_external_api_call_mocked(api_client):
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {'id': '1', 'name': 'Mock User'}
    
    with patch('utils.api_client.requests.Session.get', return_value=mock_response):
        response = api_client.get('/users/1')
        assert response.status_code == 200
        assert response.json()['name'] == 'Mock User'
\`\`\`

## Running Tests

\`\`\`bash
# Run all tests
pytest

# Run with verbose output
pytest -v

# Run specific file
pytest tests/test_users.py

# Run specific class
pytest tests/test_users.py::TestCreateUser

# Run specific test
pytest tests/test_users.py::TestCreateUser::test_create_user_success

# Run by marker
pytest -m smoke
pytest -m "users and not slow"

# Run in parallel (4 workers)
pytest -n 4

# Generate HTML report
pytest --html=reports/report.html --self-contained-html

# Run with coverage
pytest --cov=utils --cov-report=html
\`\`\`
    `,
  },
  {
    slug: "comprehensive-api-test-cases",
    title: "100+ API Test Cases: Complete Coverage Guide",
    description: "A comprehensive collection of API test cases covering CRUD operations, authentication, validation, error handling, performance, and security — with examples for every scenario.",
    category: "test-cases",
    tags: ["Test Cases", "Coverage", "CRUD", "Security", "Validation"],
    readTime: "20 min read",
    date: "2024-03-10",
    icon: "✓",
    color: "from-purple-500 to-indigo-500",
    content: `
## Complete API Test Case Coverage

This guide provides a comprehensive list of test cases to cover for any REST API. Use this as your testing checklist to ensure thorough coverage.

---

## 1. Authentication & Authorization Test Cases

### Login/Token Endpoints

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-AUTH-001 | Login with valid email and password | 200 OK + token returned |
| TC-AUTH-002 | Login with invalid password | 401 Unauthorized |
| TC-AUTH-003 | Login with non-existent email | 401 Unauthorized |
| TC-AUTH-004 | Login with empty email field | 400 Bad Request |
| TC-AUTH-005 | Login with empty password field | 400 Bad Request |
| TC-AUTH-006 | Login with empty body | 400 Bad Request |
| TC-AUTH-007 | Login with SQL injection in email | 400/401 (not 500) |
| TC-AUTH-008 | Login with very long password (>1000 chars) | 400 Bad Request |
| TC-AUTH-009 | Access protected route with valid token | 200 OK |
| TC-AUTH-010 | Access protected route without token | 401 Unauthorized |
| TC-AUTH-011 | Access protected route with expired token | 401 Unauthorized |
| TC-AUTH-012 | Access protected route with malformed token | 401 Unauthorized |
| TC-AUTH-013 | Access admin route with user token | 403 Forbidden |
| TC-AUTH-014 | Refresh token with valid refresh token | 200 OK + new token |
| TC-AUTH-015 | Refresh token with expired refresh token | 401 Unauthorized |
| TC-AUTH-016 | Logout with valid token | 204 No Content |
| TC-AUTH-017 | Use token after logout | 401 Unauthorized |

---

## 2. GET Endpoints (Read)

### Fetch All Resources

\`\`\`
Endpoint: GET /resources
\`\`\`

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-GET-001 | Get all resources (authenticated) | 200 + array |
| TC-GET-002 | Get all resources (unauthenticated) | 401 |
| TC-GET-003 | Get resources with valid pagination (page=1&perPage=10) | 200 + 10 items max |
| TC-GET-004 | Get resources with page=0 | 400 or default to 1 |
| TC-GET-005 | Get resources with perPage=-1 | 400 |
| TC-GET-006 | Get resources with perPage=1000 (exceeds limit) | 200 + max allowed |
| TC-GET-007 | Get resources with sort=name&order=asc | 200 + sorted ascending |
| TC-GET-008 | Get resources with sort=name&order=desc | 200 + sorted descending |
| TC-GET-009 | Get resources with invalid sort field | 400 |
| TC-GET-010 | Filter resources by valid field (e.g. status=active) | 200 + filtered |
| TC-GET-011 | Filter resources by invalid field value | 200 (empty) or 400 |
| TC-GET-012 | Search resources by keyword | 200 + matching results |
| TC-GET-013 | Search with empty keyword | 200 + all results |
| TC-GET-014 | Get resources when table is empty | 200 + empty array |

### Fetch Single Resource

\`\`\`
Endpoint: GET /resources/:id
\`\`\`

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-GET-015 | Get resource by valid existing ID | 200 + resource |
| TC-GET-016 | Get resource by non-existent ID | 404 Not Found |
| TC-GET-017 | Get resource by deleted resource ID | 404 Not Found |
| TC-GET-018 | Get resource with invalid ID format | 400 or 404 |
| TC-GET-019 | Get resource with SQL injection as ID | 400 or 404 |
| TC-GET-020 | Response contains all expected fields | 200 + schema valid |
| TC-GET-021 | Response time is within SLA | < 2000ms |

---

## 3. POST Endpoints (Create)

\`\`\`
Endpoint: POST /resources
\`\`\`

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-POST-001 | Create resource with all valid required fields | 201 + created resource |
| TC-POST-002 | Create resource with all valid fields (including optional) | 201 |
| TC-POST-003 | Create resource missing required field (name) | 400/422 + error |
| TC-POST-004 | Create resource missing all required fields | 400/422 |
| TC-POST-005 | Create resource with empty string for required field | 400/422 |
| TC-POST-006 | Create resource with null value for required field | 400/422 |
| TC-POST-007 | Create resource with extra/unknown fields | 201 (fields ignored) or 400 |
| TC-POST-008 | Create resource with invalid data type (number for string) | 400/422 |
| TC-POST-009 | Create resource with too-long string (>max length) | 400/422 |
| TC-POST-010 | Create resource with too-short string (<min length) | 400/422 |
| TC-POST-011 | Create resource with invalid email format | 400/422 |
| TC-POST-012 | Create resource with duplicate unique field (email) | 409 Conflict |
| TC-POST-013 | Create resource with negative number | 400/422 |
| TC-POST-014 | Create resource with zero where positive required | 400/422 |
| TC-POST-015 | Create resource with special characters | 201 or 400 |
| TC-POST-016 | Create resource with HTML/script injection | 201 (escaped) or 400 |
| TC-POST-017 | Create resource with empty body | 400 |
| TC-POST-018 | Create resource with non-JSON body | 415 Unsupported Media Type |
| TC-POST-019 | Response includes Location header with resource URL | Location header present |
| TC-POST-020 | Created resource can be fetched by GET | 200 |

---

## 4. PUT Endpoints (Full Update)

\`\`\`
Endpoint: PUT /resources/:id
\`\`\`

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-PUT-001 | Full update with all valid fields | 200 + updated resource |
| TC-PUT-002 | Full update of non-existent resource | 404 |
| TC-PUT-003 | Full update with missing required field | 400/422 |
| TC-PUT-004 | Full update with empty body | 400 |
| TC-PUT-005 | Verify all fields are updated | 200 + all new values |
| TC-PUT-006 | Full update preserves readonly fields (id, createdAt) | 200 + readonly fields same |
| TC-PUT-007 | Full update another user's resource | 403 Forbidden |

---

## 5. PATCH Endpoints (Partial Update)

\`\`\`
Endpoint: PATCH /resources/:id
\`\`\`

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-PATCH-001 | Partial update one field | 200 + field updated |
| TC-PATCH-002 | Partial update multiple fields | 200 + all fields updated |
| TC-PATCH-003 | Partial update does not change other fields | 200 + untouched fields same |
| TC-PATCH-004 | Partial update with non-existent resource | 404 |
| TC-PATCH-005 | Partial update with empty body | 200 (no-op) or 400 |
| TC-PATCH-006 | Partial update with invalid field value | 400/422 |
| TC-PATCH-007 | Partial update readonly field (id) | 400 or ignored |

---

## 6. DELETE Endpoints

\`\`\`
Endpoint: DELETE /resources/:id
\`\`\`

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-DEL-001 | Delete existing resource | 204 No Content |
| TC-DEL-002 | Delete non-existent resource | 404 Not Found |
| TC-DEL-003 | Delete already-deleted resource | 404 Not Found |
| TC-DEL-004 | GET deleted resource returns 404 | 404 |
| TC-DEL-005 | Delete another user's resource (unauthorized) | 403 Forbidden |
| TC-DEL-006 | Cascade delete removes related resources | Related 404 |
| TC-DEL-007 | Soft delete — resource still in DB but not returned | 404 |

---

## 7. Header Validation

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-HDR-001 | Request without Content-Type for POST | 415 |
| TC-HDR-002 | Request with wrong Content-Type | 415 |
| TC-HDR-003 | Request with Accept: application/xml | 406 |
| TC-HDR-004 | Response includes Content-Type: application/json | Header present |
| TC-HDR-005 | Response includes correct CORS headers | Headers present |
| TC-HDR-006 | Response includes security headers (X-Frame-Options, etc.) | Headers present |

---

## 8. Security Test Cases

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-SEC-001 | SQL Injection in query parameter | 400 or safe response |
| TC-SEC-002 | SQL Injection in request body | 400 or safe response |
| TC-SEC-003 | XSS payload in string field | 400 or escaped |
| TC-SEC-004 | Path traversal in URL parameter | 400 or 404 |
| TC-SEC-005 | Mass assignment (extra fields in body) | Fields ignored or 400 |
| TC-SEC-006 | IDOR — access another user's data | 403 |
| TC-SEC-007 | Brute force login (many failed attempts) | 429 or account lock |
| TC-SEC-008 | Sensitive data not in response (passwords, tokens) | Field absent |
| TC-SEC-009 | API tokens not logged in server logs | Not in response headers |
| TC-SEC-010 | HTTPS enforced (HTTP redirects) | 301 to HTTPS |

---

## 9. Performance & Load Test Cases

| # | Test Case | Expected Result |
|---|-----------|----------------|
| TC-PERF-001 | Single GET request under 2 seconds | < 2000ms |
| TC-PERF-002 | Single POST request under 3 seconds | < 3000ms |
| TC-PERF-003 | 100 concurrent GET requests | No errors, < 5s |
| TC-PERF-004 | Sustained load over 5 minutes | No memory leaks |
| TC-PERF-005 | Large payload (10MB body) | 413 or handled |
| TC-PERF-006 | Very large list response (10,000 items) | Paginated properly |

---

## 10. Edge Cases & Boundary Testing

\`\`\`javascript
// Example boundary test cases for a price field (0.01 to 99999.99)
const boundaryTests = [
  { price: 0.01,     expected: 201 },  // Min valid
  { price: 99999.99, expected: 201 },  // Max valid
  { price: 0.00,     expected: 422 },  // Below min
  { price: 100000,   expected: 422 },  // Above max
  { price: -1,       expected: 422 },  // Negative
  { price: null,     expected: 422 },  // Null
  { price: "abc",    expected: 422 },  // Wrong type
  { price: 9.999,    expected: 201 },  // Auto-round to 10.00
]
\`\`\`

---

## 11. API Contract / Schema Tests

\`\`\`python
# Example using jsonschema in Python
from jsonschema import validate

user_schema = {
    "type": "object",
    "required": ["id", "name", "email", "createdAt"],
    "properties": {
        "id": {"type": "string", "format": "uuid"},
        "name": {"type": "string", "minLength": 1, "maxLength": 100},
        "email": {"type": "string", "format": "email"},
        "role": {"type": "string", "enum": ["admin", "user", "moderator"]},
        "createdAt": {"type": "string", "format": "date-time"},
        "updatedAt": {"type": "string", "format": "date-time"},
    },
    "additionalProperties": False
}

def test_user_schema(authenticated_client):
    response = authenticated_client.get('/users/1')
    assert response.status_code == 200
    validate(instance=response.json(), schema=user_schema)
\`\`\`

---

## Test Case Template

Use this template for each test case in your test plan:

| Field | Value |
|-------|-------|
| **Test ID** | TC-USERS-001 |
| **Title** | Create user with valid data |
| **Method** | POST |
| **Endpoint** | /api/v1/users |
| **Precondition** | Valid auth token available |
| **Request Body** | \`{"name": "John", "email": "john@test.com"}\` |
| **Expected Status** | 201 |
| **Expected Body** | \`{"id": "...", "name": "John", "email": "john@test.com"}\` |
| **Priority** | High |
| **Category** | Functional — Positive |

---

> **Pro Tip:** Aim for at least 3 types of test cases per endpoint: a happy path test, a negative test (invalid input), and an authorization test. From there, add edge cases for completeness.
    `,
  },
  {
    slug: "api-testing-best-practices",
    title: "API Testing Best Practices: Tips from the Field",
    description: "Real-world best practices for API testing — test design, CI/CD integration, reporting, naming conventions, test data management, and building a maintainable test suite.",
    category: "test-cases",
    tags: ["Best Practices", "CI/CD", "Test Design", "Maintenance"],
    readTime: "9 min read",
    date: "2024-03-20",
    icon: "✓",
    color: "from-purple-500 to-indigo-500",
    content: `
## Why Best Practices Matter

Writing API tests is easy. Writing **good** API tests that are reliable, maintainable, and actually catch bugs is hard. This guide covers the lessons learned from real-world API testing at scale.

## 1. Test Design Principles

### Follow the Testing Pyramid

\`\`\`
         /\\
        /  \\
       / UI \\    (Few — Slow — Expensive)
      /------\\
     /  API   \\   (Many — Fast — Reliable)
    /----------\\
   /    Unit    \\  (Most — Fastest — Cheapest)
  /--------------\\
\`\`\`

API tests sit in the middle and provide the best **return on investment**. They are faster than UI tests, more realistic than unit tests, and less brittle than either.

### The AAA Pattern

Structure every test as: **Arrange, Act, Assert**

\`\`\`python
def test_create_user_returns_correct_data(authenticated_client):
    # ARRANGE — Set up test data
    user_data = {
        "name": "Test User",
        "email": "testuser@example.com",
    }
    
    # ACT — Perform the action
    response = authenticated_client.post("/users", user_data)
    
    # ASSERT — Verify the outcome
    assert response.status_code == 201
    assert response.json()["name"] == "Test User"
\`\`\`

### One Assertion Per Concern

Don't test everything in a single test. Each test should have one clear purpose:

\`\`\`python
# BAD — testing too many things
def test_user_api():
    response = client.post("/users", user_data)
    assert response.status_code == 201
    assert response.json()["name"] == "Test"
    assert response.json()["email"] == "test@example.com"
    assert "Location" in response.headers
    assert response.elapsed.total_seconds() < 2
    # ... 20 more assertions

# GOOD — focused tests
def test_create_user_returns_201(authenticated_client):
    response = authenticated_client.post("/users", valid_user_data)
    assert response.status_code == 201

def test_create_user_body_contains_id(authenticated_client):
    response = authenticated_client.post("/users", valid_user_data)
    assert "id" in response.json()

def test_create_user_sets_location_header(authenticated_client):
    response = authenticated_client.post("/users", valid_user_data)
    assert "Location" in response.headers
\`\`\`

## 2. Test Independence

### Never Depend on Test Order

\`\`\`python
# BAD — test depends on previous test
def test_get_user():
    # Assumes user was created by test_create_user
    response = client.get(f"/users/{GLOBAL_USER_ID}")
    assert response.status_code == 200

# GOOD — each test creates its own data
def test_get_user(authenticated_client, created_user):
    # created_user fixture creates AND yields the user
    response = authenticated_client.get(f"/users/{created_user['id']}")
    assert response.status_code == 200
\`\`\`

### Always Clean Up

\`\`\`python
@pytest.fixture
def created_order(authenticated_client):
    # Create
    response = authenticated_client.post("/orders", order_data)
    order = response.json()
    
    yield order  # ← Test runs here
    
    # Cleanup — always runs, even if test fails
    authenticated_client.delete(f"/orders/{order['id']}")
\`\`\`

## 3. Test Data Management

### Use Factories for Test Data

\`\`\`python
from faker import Faker

fake = Faker()

class UserFactory:
    @staticmethod
    def valid():
        return {
            "name": fake.name(),
            "email": fake.unique.email(),
            "role": "user",
        }
    
    @staticmethod
    def admin():
        return {**UserFactory.valid(), "role": "admin"}
    
    @staticmethod
    def without_email():
        user = UserFactory.valid()
        del user["email"]
        return user
    
    @staticmethod
    def with_invalid_email():
        return {**UserFactory.valid(), "email": "not-an-email"}
\`\`\`

### Separate Test Data from Test Logic

\`\`\`python
# data/test_data.py
VALID_EMAILS = [
    "simple@example.com",
    "user.name@domain.org",
    "user+tag@gmail.com",
]

INVALID_EMAILS = [
    "notanemail",
    "@nodomain",
    "spaces here@test.com",
    "missing.dot@",
    "",
]

# tests/test_users.py
from data.test_data import INVALID_EMAILS

@pytest.mark.parametrize("email", INVALID_EMAILS)
def test_create_user_rejects_invalid_email(authenticated_client, email):
    response = authenticated_client.post("/users", {"name": "Test", "email": email})
    assert response.status_code in [400, 422]
\`\`\`

## 4. Naming Conventions

Use descriptive names that explain **what is being tested**:

\`\`\`
# Pattern: test_[action]_[condition]_[expected_result]

test_create_user_with_valid_data_returns_201
test_create_user_with_missing_email_returns_422
test_get_user_by_valid_id_returns_user_data
test_get_user_by_nonexistent_id_returns_404
test_delete_user_without_auth_returns_401
test_login_with_invalid_password_returns_401
\`\`\`

## 5. Environment Configuration

\`\`\`python
# config.py
import os
from dataclasses import dataclass

@dataclass
class Config:
    base_url: str
    admin_email: str
    admin_password: str
    request_timeout: int = 30

def get_config() -> Config:
    env = os.getenv("TEST_ENV", "staging")
    
    configs = {
        "dev": Config(
            base_url="https://api.dev.example.com/v1",
            admin_email="admin@dev.example.com",
            admin_password=os.getenv("DEV_PASSWORD"),
        ),
        "staging": Config(
            base_url="https://api.staging.example.com/v1",
            admin_email="admin@staging.example.com",
            admin_password=os.getenv("STAGING_PASSWORD"),
        ),
        "production": Config(
            base_url="https://api.example.com/v1",
            admin_email="admin@example.com",
            admin_password=os.getenv("PROD_PASSWORD"),
            request_timeout=60,
        ),
    }
    
    return configs[env]
\`\`\`

## 6. CI/CD Integration

### GitHub Actions Example

\`\`\`yaml
name: API Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 6 * * *'  # Daily at 6am

jobs:
  api-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        environment: [staging, production]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: pip install -r requirements.txt
      
      - name: Run API tests
        env:
          TEST_ENV: \${{ matrix.environment }}
          STAGING_PASSWORD: \${{ secrets.STAGING_PASSWORD }}
          PROD_PASSWORD: \${{ secrets.PROD_PASSWORD }}
        run: |
          pytest tests/ \\
            -m "not slow" \\
            --html=reports/report-\${{ matrix.environment }}.html \\
            --self-contained-html \\
            -n 4 \\
            --tb=short
      
      - name: Upload test reports
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: api-test-reports
          path: reports/
      
      - name: Notify on failure
        if: failure()
        uses: 8398a57/action-slack@v3
        with:
          status: \${{ job.status }}
          webhook_url: \${{ secrets.SLACK_WEBHOOK }}
\`\`\`

## 7. Logging and Debugging

\`\`\`python
import logging
import json

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s %(message)s'
)
logger = logging.getLogger(__name__)

class LoggingAPIClient(APIClient):
    def _log_request(self, method, url, **kwargs):
        logger.info(f"→ {method} {url}")
        if kwargs.get('json'):
            logger.debug(f"  Body: {json.dumps(kwargs['json'], indent=2)}")
    
    def _log_response(self, response):
        logger.info(f"← {response.status_code} ({response.elapsed.total_seconds()*1000:.0f}ms)")
        try:
            logger.debug(f"  Body: {json.dumps(response.json(), indent=2)}")
        except:
            logger.debug(f"  Body: {response.text[:200]}")
\`\`\`

## 8. Test Categories and Markers

\`\`\`python
# Use markers to categorize tests
@pytest.mark.smoke          # Quick, critical path tests
@pytest.mark.regression     # Full regression suite  
@pytest.mark.security       # Security-specific tests
@pytest.mark.performance    # Performance tests
@pytest.mark.destructive    # Tests that delete/modify data

# Run only smoke tests in CI pre-deploy
# pytest -m smoke

# Run full regression nightly
# pytest -m regression

# Skip destructive tests in production
# pytest -m "not destructive"
\`\`\`

## Common Mistakes to Avoid

1. **Hardcoded credentials** — Always use environment variables
2. **Shared test state** — Each test should be independent
3. **No cleanup** — Always delete test data after tests
4. **Testing implementation** — Test behavior, not internals
5. **Ignoring response time** — Always assert performance
6. **Only testing happy paths** — 30-40% of tests should be negative
7. **No retry logic** — Add retries for flaky network tests
8. **Poor test names** — Names should explain what and why
9. **Testing the mock** — Ensure you're hitting real endpoints
10. **No schema validation** — Always validate response structure
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((p) => p.category === categorySlug);
}

export function getFeaturedPosts(count = 3): Post[] {
  return posts.slice(0, count);
}

