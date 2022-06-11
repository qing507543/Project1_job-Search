var url = "https://remotive.com/api/remote-jobs"
var jobname = document.querySelector('#job-name');
var jobcompany = document.querySelector('#job-subject');
var joblocation = document.querySelector('#job-location');
var jobdec = document.querySelector('#job-desc');
var jobitem = document.querySelector('#job-item');

fetch(url)
.then(function (response) {
return response.json();
}) .then (function(data){
    console.log(data)
})

