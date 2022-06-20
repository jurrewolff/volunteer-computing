import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export default function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

// export const AlertDismissibleExample = () => {

//     const [show, setShow] = useState(true);
//     const [pressed, setPressed] = useState(false)
//     const [data, setData] = useState([{}])

    // useEffect(() => {
    // if (show) {
        // return (
            // <h1> TEST</h1>
            // <>
            //     {alert("wtf")}
            // </>
            // <alert variant="danger" onClose={() => setShow(false)} dismissible>
            //     {/* <alert.Heading>Oh snap! You got an error!</alert.Heading> */}
            //     <p>
            //         Change this and that and try again. Duis mollis, est non commodo
            //         luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            //         Cras mattis consectetur purus sit amet fermentum.
            //     </p>
            // </alert>
        // )
    // }
    //     if (pressed) {
    //         fetch("/login")
    //             .then(res => res.json())
    //             .then(data => {
    //                 setData(data)
    //                 console.log(data)
    //             })
    //     }
    // }, [pressed]);


    // return (<button onClick={() => setShow(true)}>Show Alert</button>);
    // return (
    //     <div className="App">
    //         <button onClick={() => setPressed(true)}> login </button>
    //         <p>{data.code}</p>
    //         <p>Druk de knop voor GET request</p>
    //     </div>
    // );
// }



// {/* <>
//   {[
//     'primary',
//     'secondary',
//     'success',
//     'danger',
//     'warning',
//     'info',
//     'light',
//     'dark',
//   ].map((variant) => (
//     <Alert key={variant} variant={variant}>
//       This is a {variant} alert—check it out!
//     </Alert>
//   ))}
// </> */}