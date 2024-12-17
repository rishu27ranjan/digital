# DIGITAL_ONBOARD
This is a Node.js-based application that manages hotel guest onboarding processes. It allows administrators to add and manage guests efficiently while generating unique QR codes for guests to fill in their details. The system supports two main roles:

Main Admin - Manages hotel registrations.
Guest Admin - Manages guest records.
# Features
Admin Registration & Authentication: Secure login for main admins using JWT-based authentication.
Guest Management: Guest Admins can add guests and generate QR codes with unique identification codes.
QR Code Generation: Automatically generates a QR code for each guest, which can be used for quick identification.
Secure Access: Protected routes for admins to prevent unauthorized access.
Guest Data Retrieval: View all registered guests' information securely.

# Technologies Used
Node.js: JavaScript runtime for server-side logic.
Express.js: Lightweight framework for building APIs.
MongoDB: NoSQL database for storing user and guest data.
Mongoose: ODM library for MongoDB.
JWT (JSON Web Tokens): Secure authentication and authorization.
Bcrypt.js: Password hashing for secure login.
QRCode: Library to generate unique QR codes.
Dotenv: Environment variable management.

# API END POINTS
# Admin Routes
/api/admin/register-POST
/api/admin/login-POST
# Guest Admin Routes
/api/guest-admin/guests-POST
/api/guest-admin/guests-GET
