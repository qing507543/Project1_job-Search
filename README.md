# Project1_job-Search: Job Search Tool


## Criteria:

The completed application should meet the following criteria:

* As a user, I can sign up my information and create a profile.

* As a user, I can put in my career name in the search bar and receive the responses from the API portal

* As a user, I can sort the results as date posted, salary, job title, location, education level, parttime/fulltime


[Remotive Job API documentation](https://github.com/remotive-com/remote-jobs-api)

[Free Job Search API documentation](https://www.arbeitnow.com/api/job-board-api)

### The Homepage

The homepage (`index.html`) should have the following:

* A simple, well thought-out UI.

* For the first-time visitors, we provide the form to sign up in the website to create the profile.

* search bar for users to input their job titles and the locations



### The Search Results Page

The search results page (`search-results.html`) should have and do the following:

* On page load, if there are query parameters, immediately parse them and use them in a request URL to fetch data from Indeed API

* If there is a value for the format query parameter, use the format endpoint to search for something based on the chosen format. 

* If there is no value for the format query parameter, use the search endpoint to search for all types of data. 

* The response from the API request will then be displayed on the page. It is up to you and your team to determine which data should be displayed from the overall `response` object, but you must use data from the `results` property in the `response` object. 

* The same form from the homepage should be here as well. Instead of redirecting a user to another page, however, it will perform a search right on the page and display the new results.

## Assets

The following image demonstrates the homepage's appearance and functionality:


![](Assests/Images/Screen%20Shot%202022-06-02%20at%208.54.56%20PM%20(2).png)
