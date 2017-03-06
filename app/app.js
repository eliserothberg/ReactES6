// var projects = require('../data/projects.json')
// var answer = [];
// // var projectData = require('../data/projects.js')

// console.log(projectData);
// var theListings = require('data/projects.json')

// takes in user info
// $("form").submit(function() {
//   var showInterest = {
//     // name: $('#first_name').val().trim(),
//     yesOrNo: replies,
//   };
// // pushes radio button replies into a created array
//   answer = $(this).serializeArray();

//   for (var i = 0; i < answer.length; i++) { 
//     replies.push(answer[i].value);  
//   }
   
//   console.log(
//     // "showInterest: " + showInterest.name + 
//     "  Interest: " + answer.yesOrNo);

//   $.getJSON(theListings, function(data) {
//     for (i=0; i < projects.length; i++) {
//       JSON.parse(theListings);
//       console.log(theListings);
//     }
//   // order by added timestamp reverse chron 
//   // var ordered = date thing
    
//   $('#listing').append(data);


// });
 
  // var projects = [
  //   {
  //     "added": 1485174060,
  //     "title": "BELLEVILLE COP",
  //     "type": "Feature Film",
  //     "castingDirector": "Lori Wyman",
  //     "startDate": 1492560000
  //   },  
  //   {
  //     "added": 1485145920,
  //     "title": "WATER BY THE SPOONFUL",
  //     "type": "Theatre",
  //     "castingDirector": "Natalia Macker",
  //     "startDate": 1491177600
  //   },
  //   {
  //     "added": 1485147480,
  //     "title": "MARCO",
  //     "type": "Feature Film",
  //     "castingDirector": "Christina Jo'Leigh",
  //     "startDate": 1486425600
  //   },
  //   {
  //     "added": 1485139860,
  //     "title": "IN THE CUT - THE JAY FOUNDATION #305",
  //     "type": "Episodic",
  //     "castingDirector": "Phaedra Harris",
  //     "startDate": 1486944000
  //   },
  //   {
  //     "added": 1485142740,
  //     "title": "MOVIE NIGHT",
  //     "type": "Webisode",
  //     "castingDirector": "Samantha Schwartzman",
  //     "startDate": 1487203200
  //   }
  // ]
// var projectTable=$("<table/>").attr("id","theTable");
// $("#div1").append(projectTable);
// for(var i=0;i<projects.length;i++)
// {
//     var tr="<tr>";
//     var td1="<td>"+projects[i]["title"]+"</td>";
//     var td2="<td>"+projects[i]["type"]+"</td>";
//     var td3="<td>"+projects[i]["startDate"]+"</td></tr>";
//     var td4="<td>"+projects[i]["castingDirector"]+"</td></tr>";




//    $("#theTable").append(tr+td1+td2+td3+td4); 
  
// }

// $(document).ready(function() {


    
//         // initialise some variables
//         var div = $('#showProjects');
//         var listing; 
        
//         // loop through the data
//         projects.forEach(function (project) { 
//             listing = document.createElement('listing'); 
//             listing.innerHTML = project.title + ' - ' + 
//                 project.type + ' - ' + project.castingDirector + ' - ' + project.startDate; 
//             div.append(listing); 
//         });
        
    
    
// });
// console.log(JSON.stringify(projects));


        // $.getJSON(theListings, {}, function(data) {
        //     var $ul = $('#ul')
        //     $.each(data, function(idx, item){
        //         $ul.append('<li style="Project: ' + item.title + '">' + item.type + '-' + item.castingDirector + '-' + item.startDate + '-' +'</li>')
        //     })
        // });
  

  // var currentURL = window.location.origin;
