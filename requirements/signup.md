# Signup

> ### Use case

1. ✅ Request **POST** on route **/api/signup**
2. ✅ Validate **name**, **email**, **password** and **passwordConfirmation**
3. ✅ Validate that **password** and **passwordConfirmation** are equal
4. ✅ Validate that **email** is a valid e-mail
5. ⛔️ **Validate** if the e-mail is already been taken
6. ✅ Generate a **hashed password**
7. ✅ **Create** a account user with the provided data
8. ✅ Generate a access **token** de from user id
9. ✅ **Update** the user with the new token
10. ✅ Returns **200** with the token and username

> ### Exceptions

1. ✅ Returns a **404** if the API don't exists
2. ✅ Returns a **400** if no validname, email, password ou passwordConfirmation are provided
3. ✅ Returns a **400** if password and passwordConfirmation are not equal
4. ✅ Returns a **400** if e-mail is invalid
5. ⛔️ Returns a **403** if e-mail is already been taken
6. ✅ Returns a **500** if generate hashed password throws
7. ✅ Returns a **500** if create user throws
8. ✅ Returns a **500** if if token generation throws
9. ✅ Returns a **500** if user update throws