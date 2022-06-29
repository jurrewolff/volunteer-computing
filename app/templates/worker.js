importScripts('/api/get_template/template.js');
// importScripts('1.js');

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

  // async function get_and_run_job(project_id) {
  //   let result = await fetch('/api/get_job/' + project_id)
  //   .then(
  //   function(response) {
  //       if (response.status == 418) {
  //         // No more jobs
  //         console.log("no more jobs")
  //         return "No jobs";
  //       }
  //       if (response.status !== 200) {
  //       console.log('Looks like there was a problem. Status Code: ' +
  //           response.status);
  //       return "Status Code";
  //       }
  
  //       // Examine the text in the response
  //       response.json().then(function(data) {
  //       console.log(data)
  //       var job_id = data["job_id"];
  //       var input_data = data["data"];
  //       do_post(job_id, input_data, project_id);
  //       console.log("new job_id = " + job_id);
  //       return "succes";
  //       });
  //   }
  //   )
  //   .catch(function(err) {
  //   console.log('Fetch Error :-S', err);
  //   return "Network error";
  //   });
  //   console.log("result:" + result)
  //   return result
  // }
  // async function test(project_id){
  //   let data = await fetch('/api/get_job/' + project_id)
  //       .then(data => {
  //           return data;
  //       })
  //       .catch(error => {
  //           console.error(error);
  //       });
        
  //   console.log("data: " + data);
  //   return data;
  //   };

// onmessage = function(e) {
//     const port = e.ports[0];
  
//     port.onmessage = function(e) {
//         console.log('message received in worker.')
//         var project_id = e.data;
//         // Does the browser cache this??
//         importScripts('/api/' + project_id + '.js');
//         result = get_and_run_job()
//     //   const workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//         port.postMessage(result);
//     }
//   }

onmessage = function(e) {
console.log('Message received from main script: ' + e.data);
var project_id = e.data;
!async function(){
  let data =  await fetch('/api/get_job/' + project_id)
      .then((response) => response)
      .then(data => {
          return data;
      })
      .catch(error => {
          console.error(error);
      });
      
      if (data.status == 418) {
        // No more jobs
        console.log("no more jobs")
        postMessage("No jobs");
        return
      }
      if (data.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          postMessage( "Status Code");
      }

      // Examine the text in the response
      data.json().then(function(data) {
        console.log(data)
        var job_id = data["job_id"];
        var input_data = data["data"];
        do_post(job_id, input_data, project_id);
        console.log("new job_id = " + job_id);
        postMessage( "succes");
      });
  }();
// console.log('/api/' + project_id + '.js')
// Does the browser cache this??
// importScripts('/api/get_template/template.js');
// tt = await test(project_id);
// console.log(tt);
// const result = get_and_run_job(project_id).then(return_val => {
//   console.log(return_val)
//   postMessage(return_val);
// })
// console.log(result)
//   const workerResult = 'Result: ' + (e.data[0] * e.data[1]);
}
// onmessage = function(e) {
//     console.log('Worker: Message received from main script');
//     const result = e.data[0] * e.data[1];
//     if (isNaN(result)) {
//       postMessage('Please write two numbers');
//     } else {
//       const workerResult = 'Result: ' + result;
//       console.log('Worker: Posting message back to main script');
//       postMessage(workerResult);
//     }
//   }
// 