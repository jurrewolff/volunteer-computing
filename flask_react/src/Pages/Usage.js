import React from 'react'; // niet per se nodig nu, toekomst wss wel

const Usage = () => {
  return (
    <div>
      <h1>Specifications for researcher usage</h1>
      <ul>
        <li> You must provide a file of C source code with a main(). </li>
        <li> Your program must receive its input through argv[]. </li>
        <li> Your program must give its output through stdout. </li>
        <li> Your program can receive multiple arguments per run but can only provide a single line of output, terminated by a a newline. </li>
        <li> You must provide input through a text file, each line contains all the arguments given to a single run of the program. </li>
        <li> If you provide multiple arguments, seperate them by spaces. </li>
      </ul>
    </div>
  );
};
  
export default Usage;

// Dit gaat meer over dat de informatie ergens bestaat dan dat het een goede pagina is TODO: verbeter de pagina
