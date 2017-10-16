The Goal is to make a signup
module which consists of 3 steps

step 1:
  user email
       password
       password confirmation

step 2:
  user date of birth
       gender
       referrer (from where they heard about us)

step 3:
  navigation to dashboard

  Specs
    1. You are expected to use React + Redux to build the forms.
    2. User should be allowed to go to next step only if all fields on current step are valid.
    3. There is a blue progress meter on top that shows current progress of steps.
    4. When moving from step to step, the page should not reload. This is a Single Page Application.
    5. Style the app exactly as given in the screens above. Though, you are encouraged to suggest
        improvements to the form in a note along with your test.
    6. You are free to use bleeding edge CSS features like Flexbox to make your work easy.
    7. You need to implement following validations:

      1.  Email should be required.
      2.  Email should be a valid email address. Use regex validation.
      3.  Password is required.
      4.  Password should be minimum 6 characters long.
      5.  Password confirmation should match the password.
      6.  All fields in “Date of birth” are required.
      7.  All fields in “Date of birth” should be valid respectively.
          1.  DD should be a number and 31 ≥ DD ≥ 1.
          2.  MM should be a number and 12 ≥ MM ≥ 1.
          3.  YYYY should be a number.
          4.  Dates like 30/2/1991 are invalid.

      8.  The user must be 18 year old or more.
      9.  One gender option must be selected from the 3 given.
      10. “Where did you hear about us?” is optional.
    8. When a field is invalid, it should show a useful message in the label itself, red in colour.
    9. The “Go to Dashboard” button at the last step should print all the details entered as a JSON in
        the Browser console, something like:
      1. { “user_data”: { “email”: …, “password”: …, “date_of_birth”: 1485761262,
          “gender”: “female”, “how_hear_about_us”: null } }
    Now before you begin don’t forget to check out the Extras below, as completing these gives you
    an extra edge ahead of other candidates.

  Extras

    Completing the above specs are enough to say that you’ve completed your test. Although, if you
    want to be adventurous and edge ahead of other candidates you might want to also:
    • Write unit tests for React components and reducers.
    • Add animations between step transitions and to the progress bar.
    • Implement Server side rendering of the form.
    • Use redux-form to implement the forms and validation.

  Finally

    We encourage best practices in our code. And we will do so in our tests too. We expect to see:
    • Clean code and conforming best practices.
    • Good and easy to follow file structure.
    • Giving preference to simpler solution in favour of smart but complicated solution to a problem.
    We hope you have a great time building this mini app. If you have any questions about the test,
    feel free to contact us and we’ll be glad to help.
