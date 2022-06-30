importScripts('/api/get_template/template.js');

function do_post(job_id, data, project_id) {
    var request = new XMLHttpRequest();
    request.open('POST', '/api/post_result/' + project_id, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var Module = {
      final: '',
      reads: 0,
      print: (function() {
          return function(text) {
          if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
          Module.final += text + "\n";
          Module.reads += 1;
          if (Module.reads == data.size) request.send('data=' + Module.final + "&job_id="+job_id);
        };
      })()};
    var to_execute = data.arguments.split(" ");
    execute_C_file(to_execute, Module.print, project_id);
  }; 


onmessage = function(e) {
console.log('Message received from main script: ' + e.data);
var project_id = e.data;
!async function(){
  let data =  await fetch('/api/get_job/' + project_id)
    .then((response) => response)
    .then(data => {
        return data;
    })
    data.json().then(function(data) {

      if (data.code == 418) {
        // No more jobs
        console.log("no more jobs")
        postMessage("No jobs");
        return
      }
      if (Number.isInteger(data.code)  && data.code !== 200) {
      console.log('Looks like there was a problem. Status Code: ');
      console.log(data)
          postMessage( "Status Code");
          return
      }

      // Examine the text in the response
      console.log(data)
      var job_id = data["job_id"];
      var input_data = data["data"];
      do_post(job_id, input_data, project_id);
      console.log("new job_id = " + job_id);
      postMessage( "succes");
      });
  }();
}