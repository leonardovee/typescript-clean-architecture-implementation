# Add survey

> ### Use case

1. ⛔️ Request **POST** on route **/api/surveys**
2. ⛔️ Validate if the request is made by a **admin**
3. ⛔️ Validate that **question** and **answers** are valid
4. ⛔️ **Create** a survey with the provided data
5. ✅ Returns **204**, without data

> ### Exceptions

1. ⛔️ Returns a **404** if if the API don't exists
2. ⛔️ Returns a **403** if the user isn't admin
3. ✅ Returns a **400** if question nor the answers are provided
4. ✅ Returns a **500** if survey creation throws