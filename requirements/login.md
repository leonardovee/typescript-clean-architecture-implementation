# Login

> ### Use case

1. ✅ Request **POST** on route **/api/login**
2. ✅ Validate **email** and **password**
3. ✅ Validate that **email** is a valid e-mail
4. ✅ **Search** the user with the provided e-mail
5. ✅ Generate a access **token** de from user id
6. ✅ **Update** the user with the new token
7. ✅ Returns **200** with the token and username

> ### Exceptions

1. ✅ Returns a **404** if the API don't exists
2. ✅ Returns a **400** if no valid e-mail or password are provided
3. ✅ Returns a **400** if e-mail is invalid
4. ✅ Returns a **401** if user is not found
5. ✅ Returns a **500** if token generation throws
6. ✅ Returns a **500** if user update throws