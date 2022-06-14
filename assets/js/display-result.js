var joblist = document.querySelector('#list');
var layout = document.querySelector('#layout');
var jobcontentall = document.querySelector('#main');


//https://remotive.com/api/remote-jobs?search=front%20end
var searchinput = localStorage.getItem("searchinputval");
var query = searchinput.split(" ");
var queryparameter = query[0];

for (var i = 1; i < query.length; i++) {
    queryparameter = queryparameter + "%20" + query[i]
}

var url = "https://remotive.com/api/remote-jobs?search=" + queryparameter
console.log(queryparameter);

var jobcontent = document.querySelector('.job-content');
var jobcontentheader= document.querySelector('.job-content-header');
var jobcontentcard = document.querySelector('.job-content-card');
var jobcontenttitle = document.querySelector('.job-content-title');
var jobcontentcompany = document.querySelector('.job-content-company');
var jobcontenttype = document.querySelector('.job-content-type');
var jobcontentsalary = document.querySelector('.job-content-salary');
var jobcontentdesc = document.querySelector('.job-content-desc');

var jobcontenttitlearray = [];
var jobcontentcompanyarray = [];
var jobcontenttypearray = [];
var jobcontentsalaryarray = [];
var jobcontentdescarray = [];

fetch(url)
.then(function (response) {
return response.json();
}) .then (function(data){


    for (var i = 0; i < data.jobs.length; i++) {

    var jobname = document.createElement('h5');
    jobname.classList.add("job-name");
    jobname.setAttribute('data-number', i);
    jobname.textContent = data.jobs[i].title;
    jobcontenttitlearray[i] = data.jobs[i].title;

    var jobdetail = document.createElement('div');
    jobdetail.classList.add("pure-u-3-4");
    jobdetail.setAttribute('data-number', i);
    jobdetail.appendChild(jobname);
    
    var jobitem = document.createElement('div');
    jobitem.classList.add("job-item","job-item-selected","pure-g");
    jobitem.setAttribute('data-number', i);
    
    var jobcompany = document.createElement('h4');
    jobcompany.classList.add("job-subject");
    jobcompany.setAttribute('data-number', i);
    jobcompany.textContent = data.jobs[i].company_name;
    jobcontentcompanyarray[i]= data.jobs[i].company_name;
    jobdetail.appendChild(jobcompany);

    var jobtype = document.createElement('h3');
    jobtype.classList.add("job-type");
    jobtype.setAttribute('data-number', i);
    jobtype.textContent = data.jobs[i].job_type;
    jobcontenttypearray[i] = data.jobs[i].job_type;
    jobdetail.appendChild(jobtype);

    var jobpostdate = document.createElement('h2');
    jobpostdate.classList.add("job-postdate");
    jobpostdate.setAttribute('data-number', i);
    jobpostdate.textContent = 'Post on: ' + data.jobs[i].publication_date;
    jobdetail.appendChild(jobpostdate);

    var jobtag = document.createElement('p');
    jobtag.classList.add("job-tag");
    jobtag.setAttribute('data-number', i);
    jobtag.textContent = data.jobs[i].tags[0] + ',' +data.jobs[i].tags[1]+ ',' +data.jobs[i].tags[2]+ ',' +data.jobs[i].tags[3]+ ',' +data.jobs[i].tags[4];
    jobdetail.appendChild(jobtag);

    jobcontentsalaryarray[i] = data.jobs[i].salary;
    jobcontentdescarray[i] = data.jobs[i].description;

    jobitem.appendChild(jobdetail);
    joblist.appendChild(jobitem);

    }


})

joblist.addEventListener("click", function (event) {    
    var n = event.target.dataset.number
    jobcontenttitle.textContent = jobcontenttitlearray[n];
    jobcontentcompany.textContent = jobcontentcompanyarray[n];
    jobcontenttype.textContent = jobcontenttypearray[n];
    jobcontentsalary.textContent = jobcontentsalaryarray[n];
    jobcontentdesc.innerHTML = jobcontentdescarray[n];

    });


var returnbtn = document.querySelector('#returnbtn');

returnbtn.addEventListener("click", function(event){
    location.assign("./index.html");
    
})