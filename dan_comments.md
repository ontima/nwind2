Some notes:

Good start on the README but you should generally include
 A) What the app is for and how to use it
 B) explicit instructions for getting it started (How do I seed the db?)

Excellent job binding your $htttp returns to $scope 

I like that you are thinking of having an error message wrapped in an ng-show. This is the start of good error handling UX. How can you refactor this so that you have a unique message for different types of errors?

Overall this is an elegant little app Ontima! I'm impressed with how simply you were able to map all of the requests on to Angular events, and using $scope.getProducts() upon promise completion is a great way to keep your app displaying the right data without refreshing!

