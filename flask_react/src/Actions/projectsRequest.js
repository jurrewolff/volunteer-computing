/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden de variabelen meegegeven voor de username en ww, is voor nu
 * nog gehardcoded voor testen.
 *
 */

import { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export const ProjectsRequest = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
            fetch("/projects")
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
    }, []);

    // Function for the responsive button.
    function clickButton() {
        var url = 'http://localhost:8001/runproject/';
        window.open(url, '_tab');
    }

    // Returns a card with the given project
    const getCard = ((project) => {
        return (
            <Card style={{width:"100%", height:"90%", marginTop:"5%", marginLeft:"100px"}} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography style={{margin:"5%"}} variant="h2"  gutterBottom>
                        {project.name}
                    </Typography >
                    <Typography style={{margin:"5%"}} sx={{ mb: 1.5 }} color="text.secondary" variant="h5" component="div">
                        {project.description}
                    </Typography>
                </CardContent>

                <CardActions >
                    <Link style={{margin:"10%"}} to={"/moreInfo/" + project.project_id + "/Run"}>
                        <Button
                            variant="contained" color="success">
                            Start computing
                        </Button>
                    </Link>

                    <Link style={{margin:"10%"}} to={"/moreInfo/" + project.project_id + "/NoRun"}>More info</Link>
                </CardActions>




            </Card>
          );
    });

    // Returns two column with all projects displayed in a card per project.
    const readProjects = ({data}) => {

        // If no projects exists. Nothing is displayed.
        if(data.length === 0) {
            return <h1>There are no projects to contribute to.</h1>
        }

        const getRightIndex = ((index) => {
            return index + Math.ceil(data.length / 2)
        });

        return data.map((project, index) =>
            <div>

                {index < Math.ceil(data.length / 2)?
                    <Row key={project.project_id}>

                        <Col>
                            {getCard(project)}
                        </Col>

                        {/* The last row should only have 1 card if there is an uneven number of projects */}
                        {index < Math.floor(data.length / 2) ?
                            <Col>
                                {getCard(data[getRightIndex(index)])}
                            </Col>
                        : <Col></Col>}
                    </Row>

                : ""}
            </div>
        );
    }

    return (
        <div>
            {readProjects({data})}
        </div>
    );
}
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/core": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/core/-/core-27.5.1.tgz",
      "integrity": "sha512-AK6/UTrvQD0Cd24NSqmIA6rKsu0tKIxfiCducZvqxYdmMisOYAsdItspT+fQDQYARPf8XgjAFZi0ogW2agH5nQ==",
      "requires": {
        "@jest/console": "^27.5.1",
        "@jest/reporters": "^27.5.1",
        "@jest/test-result": "^27.5.1",
        "@jest/transform": "^27.5.1",
        "@jest/types": "^27.5.1",
        "@types/node": "*",
        "ansi-escapes": "^4.2.1",
        "chalk": "^4.0.0",
        "emittery": "^0.8.1",
        "exit": "^0.1.2",
        "graceful-fs": "^4.2.9",
        "jest-changed-files": "^27.5.1",
        "jest-config": "^27.5.1",
        "jest-haste-map": "^27.5.1",
        "jest-message-util": "^27.5.1",
        "jest-regex-util": "^27.5.1",
        "jest-resolve": "^27.5.1",
        "jest-resolve-dependencies": "^27.5.1",
        "jest-runner": "^27.5.1",
        "jest-runtime": "^27.5.1",
        "jest-snapshot": "^27.5.1",
        "jest-util": "^27.5.1",
        "jest-validate": "^27.5.1",
        "jest-watcher": "^27.5.1",
        "micromatch": "^4.0.4",
        "rimraf": "^3.0.0",
        "slash": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/environment": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-27.5.1.tgz",
      "integrity": "sha512-/WQjhPJe3/ghaol/4Bq480JKXV/Rfw8nQdN7f41fM8VDHLcxKXou6QyXAh3EFr9/bVG3x74z1NWDkP87EiY8gA==",
      "requires": {
        "@jest/fake-timers": "^27.5.1",
        "@jest/types": "^27.5.1",
        "@types/node": "*",
        "jest-mock": "^27.5.1"
      }
    },
    "@jest/fake-timers": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-27.5.1.tgz",
      "integrity": "sha512-/aPowoolwa07k7/oM3aASneNeBGCmGQsc3ugN4u6s4C/+s5M64MFo/+djTdiwcbQlRfFElGuDXWzaWj6QgKObQ==",
      "requires": {
        "@jest/types": "^27.5.1",
        "@sinonjs/fake-timers": "^8.0.1",
        "@types/node": "*",
        "jest-message-util": "^27.5.1",
        "jest-mock": "^27.5.1",
        "jest-util": "^27.5.1"
      }
    },
    "@jest/globals": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/globals/-/globals-27.5.1.tgz",
      "integrity": "sha512-ZEJNB41OBQQgGzgyInAv0UUfDDj3upmHydjieSxFvTRuZElrx7tXg/uVQ5hYVEwiXs3+aMsAeEc9X7xiSKCm4Q==",
      "requires": {
        "@jest/environment": "^27.5.1",
        "@jest/types": "^27.5.1",
        "expect": "^27.5.1"
      }
    },
    "@jest/reporters": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-27.5.1.tgz",
      "integrity": "sha512-cPXh9hWIlVJMQkVk84aIvXuBB4uQQmFqZiacloFuGiP3ah1sbCxCosidXFDfqG8+6fO1oR2dTJTlsOy4VFmUfw==",
      "requires": {
        "@bcoe/v8-coverage": "^0.2.3",
        "@jest/console": "^27.5.1",
        "@jest/test-result": "^27.5.1",
        "@jest/transform": "^27.5.1",
        "@jest/types": "^27.5.1",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "collect-v8-coverage": "^1.0.0",
        "exit": "^0.1.2",
        "glob": "^7.1.2",
        "graceful-fs": "^4.2.9",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-instrument": "^5.1.0",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^4.0.0",
        "istanbul-reports": "^3.1.3",
        "jest-haste-map": "^27.5.1",
        "jest-resolve": "^27.5.1",
        "jest-util": "^27.5.1",
        "jest-worker": "^27.5.1",
        "slash": "^3.0.0",
        "source-map": "^0.6.0",
        "string-length": "^4.0.1",
        "terminal-link": "^2.0.0",
        "v8-to-istanbul": "^8.1.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/schemas": {
      "version": "28.0.2",
      "resolved": "https://registry.npmjs.org/@jest/schemas/-/schemas-28.0.2.tgz",
      "integrity": "sha512-YVDJZjd4izeTDkij00vHHAymNXQ6WWsdChFRK86qck6Jpr3DCL5W3Is3vslviRlP+bLuMYRLbdp98amMvqudhA==",
      "requires": {
        "@sinclair/typebox": "^0.23.3"
      }
    },
    "@jest/source-map": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-27.5.1.tgz",
      "integrity": "sha512-y9NIHUYF3PJRlHk98NdC/N1gl88BL08aQQgu4k4ZopQkCw9t9cV8mtl3TV8b/YCB8XaVTFrmUTAJvjsntDireg==",
      "requires": {
        "callsites": "^3.0.0",
        "graceful-fs": "^4.2.9",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "@jest/test-result": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-27.5.1.tgz",
      "integrity": "sha512-EW35l2RYFUcUQxFJz5Cv5MTOxlJIQs4I7gxzi2zVU7PJhOwfYq1MdC5nhSmYjX1gmMmLPvB3sIaC+BkcHRBfag==",
      "requires": {
        "@jest/console": "^27.5.1",
        "@jest/types": "^27.5.1",
        "@types/istanbul-lib-coverage": "^2.0.0",
        "collect-v8-coverage": "^1.0.0"
      }
    },
    "@jest/test-sequencer": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-27.5.1.tgz",
      "integrity": "sha512-LCheJF7WB2+9JuCS7VB/EmGIdQuhtqjRNI9A43idHv3E4KltCTsPsLxvdaubFHSYwY/fNjMWjl6vNRhDiN7vpQ==",
      "requires": {
        "@jest/test-result": "^27.5.1",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^27.5.1",
        "jest-runtime": "^27.5.1"
      }
    },
    "@jest/transform": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-27.5.1.tgz",
      "integrity": "sha512-ipON6WtYgl/1329g5AIJVbUuEh0wZVbdpGwC99Jw4LwuoBNS95MVphU6zOeD9pDkon+LLbFL7lOQRapbB8SCHw==",
      "requires": {
        "@babel/core": "^7.1.0",
        "@jest/types": "^27.5.1",
        "babel-plugin-istanbul": "^6.1.1",
        "chalk": "^4.0.0",
        "convert-source-map": "^1.4.0",
        "fast-json-stable-stringify": "^2.0.0",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^27.5.1",
        "jest-regex-util": "^27.5.1",
        "jest-util": "^27.5.1",
        "micromatch": "^4.0.4",
        "pirates": "^4.0.4",
        "slash": "^3.0.0",
        "source-map": "^0.6.1",
        "write-file-atomic": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/types": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-27.5.1.tgz",
      "integrity": "sha512-Cx46iJ9QpwQTjIdq5VJu2QTMMs3QlEjI0x1QbBP5W1+nMzyc2XmimiRR/CbX9TO0cPTeUlxWMOu8mslYsJ8DEw==",
      "requires": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^3.0.0",
        "@types/node": "*",
        "@types/yargs": "^16.0.0",
        "chalk": "^4.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jridgewell/gen-mapping": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.1.1.tgz",
      "integrity": "sha512-sQXCasFk+U8lWYEe66WxRDOE9PjVz4vSM51fTu3Hw+ClTpUSQb718772vH3pyS5pShp6lvQM7SxgIDXXXmOX7w==",
      "requires": {
        "@jridgewell/set-array": "^1.0.0",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "@jridgewell/resolve-uri": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.0.7.tgz",
      "integrity": "sha512-8cXDaBBHOr2pQ7j77Y6Vp5VDT2sIqWyWQ56TjEq4ih/a4iST3dItRe8Q9fp0rrIl9DoKhWQtUQz/YpOxLkXbNA=="
    },
    "@jridgewell/set-array": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.1.1.tgz",
      "integrity": "sha512-Ct5MqZkLGEXTVmQYbGtx9SVqD2fqwvdubdps5D3djjAkgkKwT918VNOz65pEHFaYTeWcukmJmH5SwsA9Tn2ObQ=="
    },
    "@jridgewell/source-map": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.2.tgz",
      "integrity": "sha512-m7O9o2uR8k2ObDysZYzdfhb08VuEml5oWGiosa1VdaPZ/A6QyPkAJuwN0Q1lhULOf6B7MtQmHENS743hWtCrgw==",
      "requires": {
        "@jridgewell/gen-mapping": "^0.3.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "dependencies": {
        "@jridgewell/gen-mapping": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.1.tgz",
          "integrity": "sha512-GcHwniMlA2z+WFPWuY8lp3fsza0I8xPFMWL5+n8LYyP6PSvPrXf4+n8stDHZY2DM0zy9sVkRDy1jDI4XGzYVqg==",
          "requires": {
            "@jridgewell/set-array": "^1.0.0",
            "@jridgewell/sourcemap-codec": "^1.4.10",
            "@jridgewell/trace-mapping": "^0.3.9"
          }
        }
      }
    },
    "@jridgewell/sourcemap-codec": {
      "version": "1.4.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.13.tgz",
      "integrity": "sha512-GryiOJmNcWbovBxTfZSF71V/mXbgcV3MewDe3kIMCLyIh5e7SKAeUZs+rMnJ8jkMolZ/4/VsdBmMrw3l+VdZ3w=="
    },
    "@jridgewell/trace-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.13.tgz",
      "integrity": "sha512-o1xbKhp9qnIAoHJSWd6KlCZfqslL4valSF81H8ImioOAxluWYWOpWkpyktY2vnt4tbrX9XYaxovq6cgowaJp2w==",
      "requires": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "@leichtgewicht/ip-codec": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@leichtgewicht/ip-codec/-/ip-codec-2.0.4.tgz",
      "integrity": "sha512-Hcv+nVC0kZnQ3tD9GVu5xSMR4VVYOteQIr/hwFPVEvPdlXqgGEuRjiheChHgdM+JyqdgNcmzZOX/tnl0JOiI7A=="
    },
    "@mui/base": {
      "version": "5.0.0-alpha.86",
      "resolved": "https://registry.npmjs.org/@mui/base/-/base-5.0.0-alpha.86.tgz",
      "integrity": "sha512-0vi/Nni1mizrgrzKeyksEjw5JVSrgT8Vr2NhxzFtYxqpMgtdSrBvcmcuzBf9kE/ECMPbgpSIcqv0nLbLZUYkOQ==",
      "requires": {
        "@babel/runtime": "^7.17.2",
        "@emotion/is-prop-valid": "^1.1.2",
        "@mui/types": "^7.1.4",
        "@mui/utils": "^5.8.4",
        "@popperjs/core": "^2.11.5",
        "clsx": "^1.1.1",
        "prop-types": "^15.8.1",
        "react-is": "^17.0.2"
      },
      "dependencies": {
        "react-is": {
          "version": "17.0.2",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
          "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
        }
      }
    },
    "@mui/icons-material": {
      "version": "5.8.4",
      "resolved": "https://registry.npmjs.org/@mui/icons-material/-/icons-material-5.8.4.tgz",
      "integrity": "sha512-9Z/vyj2szvEhGWDvb+gG875bOGm8b8rlHBKOD1+nA3PcgC3fV6W1AU6pfOorPeBfH2X4mb9Boe97vHvaSndQvA==",
      "requires": {
        "@babel/runtime": "^7.17.2"
      }
    },
    "@mui/material": {
      "version": "5.8.5",
      "resolved": "https://registry.npmjs.org/@mui/material/-/material-5.8.5.tgz",
      "integrity": "sha512-wngPXlOI9BurLSGlObQM/2L0QFFaIcvJnDK5A+ALxuUyuQnPviVWfC1l/r8rPlxQ4PCbSYpq3gzLlgnLoWcO/g==",
      "requires": {
        "@babel/runtime": "^7.17.2",
        "@mui/base": "5.0.0-alpha.86",
        "@mui/system": "^5.8.5",
        "@mui/types": "^7.1.4",
        "@mui/utils": "^5.8.4",
        "@types/react-transition-group": "^4.4.4",
        "clsx": "^1.1.1",
        "csstype": "^3.1.0",
        "prop-types": "^15.8.1",
        "react-is": "^17.0.2",
        "react-transition-group": "^4.4.2"
      },
      "dependencies": {
        "react-is": {
          "version": "17.0.2",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
          "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
        }
      }
    },
    "@mui/private-theming": {
      "version": "5.8.4",
      "resolved": "https://registry.npmjs.org/@mui/private-theming/-/private-theming-5.8.4.tgz",
      "integrity": "sha512-3Lp0VAEjtQygJ70MWEyHkKvg327O6YoBH6ZNEy6fIsrK6gmRIj+YrlvJ7LQCbowY+qDGnbdMrTBd1hfThlI8lg==",
      "requires": {
        "@babel/runtime": "^7.17.2",
        "@mui/utils": "^5.8.4",
        "prop-types": "^15.8.1"
      }
    },
    "@mui/styled-engine": {
      "version": "5.8.0",
      "resolved": "https://registry.npmjs.org/@mui/styled-engine/-/styled-engine-5.8.0.tgz",
      "integrity": "sha512-Q3spibB8/EgeMYHc+/o3RRTnAYkSl7ROCLhXJ830W8HZ2/iDiyYp16UcxKPurkXvLhUaILyofPVrP3Su2uKsAw==",
      "requires": {
        "@babel/runtime": "^7.17.2",
        "@emotion/cache": "^11.7.1",
        "prop-types": "^15.8.1"
      }
    },
    "@mui/styled-engine-sc": {
      "version": "5.8.0",
      "resolved": "https://registry.npmjs.org/@mui/styled-engine-sc/-/styled-engine-sc-5.8.0.tgz",
      "integrity": "sha512-46eRLWxjTF0d50Q1Q9tj96cgF41r7lesbXAy6kKocCdUfJ8rbIo36C4Ws8Pd7nfVsvaitTb7tmCbVQzDT3niJQ==",
      "requires": {
        "prop-types": "^15.8.1"
      }
    },
    "@mui/system": {
      "version": "5.8.5",
      "resolved": "https://registry.npmjs.org/@mui/system/-/system-5.8.5.tgz",
      "integrity": "sha512-1bhITHp5sX/CVEf1QwtBWvW+kNnH+GU7lKz0CeAL1RyH9dWvoL9Yt/+i/L8hJ6jVZB/7Au2F6MsyDPt8V1jfdA==",
      "requires": {
        "@babel/runtime": "^7.17.2",
        "@mui/private-theming": "^5.8.4",
        "@mui/styled-engine": "^5.8.0",
        "@mui/types": "^7.1.4",
        "@mui/utils": "^5.8.4",
        "clsx": "^1.1.1",
        "csstype": "^3.1.0",
        "prop-types": "^15.8.1"
      }
    },
    "@mui/types": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/@mui/types/-/types-7.1.4.tgz",
      "integrity": "sha512-uveM3byMbthO+6tXZ1n2zm0W3uJCQYtwt/v5zV5I77v2v18u0ITkb8xwhsDD2i3V2Kye7SaNR6FFJ6lMuY/WqQ==",
      "requires": {}
    },
    "@mui/utils": {
      "version": "5.8.4",
      "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-5.8.4.tgz",
      "integrity": "sha512-BHYErfrjqqh76KaDAm8wZlhEip1Uj7Cmco65NcsF3BWrAl3FWngACpaPZeEbTgmaEwyWAQEE6LZhsmy43hfyqQ==",
      "requires": {
        "@babel/runtime": "^7.17.2",
        "@types/prop-types": "^15.7.5",
        "@types/react-is": "^16.7.1 || ^17.0.0",
        "prop-types": "^15.8.1",
        "react-is": "^17.0.2"
      },
      "dependencies": {
        "react-is": {
          "version": "17.0.2",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
          "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
        }
      }
    },
    "@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "requires": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      }
    },
    "@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A=="
    },
    "@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "requires": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      }
    },
    "@pmmmwh/react-refresh-webpack-plugin": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/@pmmmwh/react-refresh-webpack-plugin/-/react-refresh-webpack-plugin-0.5.7.tgz",
      "integrity": "sha512-bcKCAzF0DV2IIROp9ZHkRJa6O4jy7NlnHdWL3GmcUxYWNjLXkK5kfELELwEfSP5hXPfVL/qOGMAROuMQb9GG8Q==",
      "requires": {
        "ansi-html-community": "^0.0.8",
        "common-path-prefix": "^3.0.0",
        "core-js-pure": "^3.8.1",
        "error-stack-parser": "^2.0.6",
        "find-up": "^5.0.0",
        "html-entities": "^2.1.0",
        "loader-utils": "^2.0.0",
        "schema-utils": "^3.0.0",
        "source-map": "^0.7.3"
      },
      "dependencies": {
        "source-map": {
          "version": "0.7.4",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.4.tgz",
          "integrity": "sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA=="
        }
      }
    },
    "@popperjs/core": {
      "version": "2.11.5",
      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.5.tgz",
      "integrity": "sha512-9X2obfABZuDVLCgPK9aX0a/x4jaOEweTTWE2+9sr0Qqqevj2Uv5XorvusThmc9XGYpS9yI+fhh8RTafBtGposw=="
    },
    "@react-aria/ssr": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/@react-aria/ssr/-/ssr-3.2.0.tgz",
      "integrity": "sha512-wwJFdkl+Q8NU5yJ4NvdAOqx5LM3QtUVoSjuK7Ey8jZ4WS4bB0EqT3Kr3IInBs257HzZ5nXCiKXKE4NGXXuIRWA==",
      "requires": {
        "@babel/runtime": "^7.6.2"
      }
    },
    "@restart/hooks": {
      "version": "0.4.7",
      "resolved": "https://registry.npmjs.org/@restart/hooks/-/hooks-0.4.7.tgz",
      "integrity": "sha512-ZbjlEHcG+FQtpDPHd7i4FzNNvJf2enAwZfJbpM8CW7BhmOAbsHpZe3tsHwfQUrBuyrxWqPYp2x5UMnilWcY22A==",
      "requires": {
        "dequal": "^2.0.2"
      }
    },
    "@restart/ui": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@restart/ui/-/ui-1.2.0.tgz",
      "integrity": "sha512-oIh2t3tG8drZtZ9SlaV5CY6wGsUViHk8ZajjhcI+74IQHyWy+AnxDv8rJR5wVgsgcgrPBUvGNkC1AEdcGNPaLQ==",
      "requires": {
        "@babel/runtime": "^7.13.16",
        "@popperjs/core": "^2.10.1",
        "@react-aria/ssr": "^3.0.1",
        "@restart/hooks": "^0.4.0",
        "@types/warning": "^3.0.0",
        "dequal": "^2.0.2",
        "dom-helpers": "^5.2.0",
        "uncontrollable": "^7.2.1",
        "warning": "^4.0.3"
      }
    },
    "@rollup/plugin-babel": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/@rollup/plugin-babel/-/plugin-babel-5.3.1.tgz",
      "integrity": "sha512-WFfdLWU/xVWKeRQnKmIAQULUI7Il0gZnBIH/ZFO069wYIfPu+8zrfp/KMW0atmELoRDq8FbiP3VCss9MhCut7Q==",
      "requires": {
        "@babel/helper-module-imports": "^7.10.4",
        "@rollup/pluginutils": "^3.1.0"
      }
    },
    "@rollup/plugin-node-resolve": {
      "version": "11.2.1",
      "resolved": "https://registry.npmjs.org/@rollup/plugin-node-resolve/-/plugin-node-resolve-11.2.1.tgz",
      "integrity": "sha512-yc2n43jcqVyGE2sqV5/YCmocy9ArjVAP/BeXyTtADTBBX6V0e5UMqwO8CdQ0kzjb6zu5P1qMzsScCMRvE9OlVg==",
      "requires": {
        "@rollup/pluginutils": "^3.1.0",
        "@types/resolve": "1.17.1",
        "builtin-modules": "^3.1.0",
        "deepmerge": "^4.2.2",
        "is-module": "^1.0.0",
        "resolve": "^1.19.0"
      }
    },
    "@rollup/plugin-replace": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/@rollup/plugin-replace/-/plugin-replace-2.4.2.tgz",
      "integrity": "sha512-IGcu+cydlUMZ5En85jxHH4qj2hta/11BHq95iHEyb2sbgiN0eCdzvUcHw5gt9pBL5lTi4JDYJ1acCoMGpTvEZg==",
      "requires": {
        "@rollup/pluginutils": "^3.1.0",
        "magic-string": "^0.25.7"
      }
    },
    "@rollup/pluginutils": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-3.1.0.tgz",
      "integrity": "sha512-GksZ6pr6TpIjHm8h9lSQ8pi8BE9VeubNT0OMJ3B5uZJ8pz73NPiqOtCog/x2/QzM1ENChPKxMDhiQuRHsqc+lg==",
      "requires": {
        "@types/estree": "0.0.39",
        "estree-walker": "^1.0.1",
        "picomatch": "^2.2.2"
      },
      "dependencies": {
        "@types/estree": {
          "version": "0.0.39",
          "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.39.tgz",
          "integrity": "sha512-EYNwp3bU+98cpU4lAWYYL7Zz+2gryWH1qbdDTidVd6hkiR6weksdbMadyXKXNPEkQFhXM+hVO9ZygomHXp+AIw=="
        }
      }
    },
    "@rushstack/eslint-patch": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.1.3.tgz",
      "integrity": "sha512-WiBSI6JBIhC6LRIsB2Kwh8DsGTlbBU+mLRxJmAe3LjHTdkDpwIbEOZgoXBbZilk/vlfjK8i6nKRAvIRn1XaIMw=="
    },
    "@sinclair/typebox": {
      "version": "0.23.5",
      "resolved": "https://registry.npmjs.org/@sinclair/typebox/-/typebox-0.23.5.tgz",
      "integrity": "sha512-AFBVi/iT4g20DHoujvMH1aEDn8fGJh4xsRGCP6d8RpLPMqsNPvW01Jcn0QysXTsg++/xj25NmJsGyH9xug/wKg=="
    },
    "@sinonjs/commons": {
      "version": "1.8.3",
      "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz",
      "integrity": "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==",
      "requires": {
        "type-detect": "4.0.8"
      }
    },
    "@sinonjs/fake-timers": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-8.1.0.tgz",
      "integrity": "sha512-OAPJUAtgeINhh/TAlUID4QTs53Njm7xzddaVlEs/SXwgtiD1tW22zAB/W1wdqfrpmikgaWQ9Fw6Ws+hsiRm5Vg==",
      "requires": {
        "@sinonjs/commons": "^1.7.0"
      }
    },
    "@surma/rollup-plugin-off-main-thread": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/@surma/rollup-plugin-off-main-thread/-/rollup-plugin-off-main-thread-2.2.3.tgz",
      "integrity": "sha512-lR8q/9W7hZpMWweNiAKU7NQerBnzQQLvi8qnTDU/fxItPhtZVMbPV3lbCwjhIlNBe9Bbr5V+KHshvWmVSG9cxQ==",
      "requires": {
        "ejs": "^3.1.6",
        "json5": "^2.2.0",
        "magic-string": "^0.25.0",
        "string.prototype.matchall": "^4.0.6"
      }
    },
    "@svgr/babel-plugin-add-jsx-attribute": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-add-jsx-attribute/-/babel-plugin-add-jsx-attribute-5.4.0.tgz",
      "integrity": "sha512-ZFf2gs/8/6B8PnSofI0inYXr2SDNTDScPXhN7k5EqD4aZ3gi6u+rbmZHVB8IM3wDyx8ntKACZbtXSm7oZGRqVg=="
    },
    "@svgr/babel-plugin-remove-jsx-attribute": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-attribute/-/babel-plugin-remove-jsx-attribute-5.4.0.tgz",
      "integrity": "sha512-yaS4o2PgUtwLFGTKbsiAy6D0o3ugcUhWK0Z45umJ66EPWunAz9fuFw2gJuje6wqQvQWOTJvIahUwndOXb7QCPg=="
    },
    "@svgr/babel-plugin-remove-jsx-empty-expression": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-empty-expression/-/babel-plugin-remove-jsx-empty-expression-5.0.1.tgz",
      "integrity": "sha512-LA72+88A11ND/yFIMzyuLRSMJ+tRKeYKeQ+mR3DcAZ5I4h5CPWN9AHyUzJbWSYp/u2u0xhmgOe0+E41+GjEueA=="
    },
    "@svgr/babel-plugin-replace-jsx-attribute-value": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-replace-jsx-attribute-value/-/babel-plugin-replace-jsx-attribute-value-5.0.1.tgz",
      "integrity": "sha512-PoiE6ZD2Eiy5mK+fjHqwGOS+IXX0wq/YDtNyIgOrc6ejFnxN4b13pRpiIPbtPwHEc+NT2KCjteAcq33/F1Y9KQ=="
    },
    "@svgr/babel-plugin-svg-dynamic-title": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-dynamic-title/-/babel-plugin-svg-dynamic-title-5.4.0.tgz",
      "integrity": "sha512-zSOZH8PdZOpuG1ZVx/cLVePB2ibo3WPpqo7gFIjLV9a0QsuQAzJiwwqmuEdTaW2pegyBE17Uu15mOgOcgabQZg=="
    },
    "@svgr/babel-plugin-svg-em-dimensions": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-em-dimensions/-/babel-plugin-svg-em-dimensions-5.4.0.tgz",
      "integrity": "sha512-cPzDbDA5oT/sPXDCUYoVXEmm3VIoAWAPT6mSPTJNbQaBNUuEKVKyGH93oDY4e42PYHRW67N5alJx/eEol20abw=="
    },
    "@svgr/babel-plugin-transform-react-native-svg": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-react-native-svg/-/babel-plugin-transform-react-native-svg-5.4.0.tgz",
      "integrity": "sha512-3eYP/SaopZ41GHwXma7Rmxcv9uRslRDTY1estspeB1w1ueZWd/tPlMfEOoccYpEMZU3jD4OU7YitnXcF5hLW2Q=="
    },
    "@svgr/babel-plugin-transform-svg-component": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-svg-component/-/babel-plugin-transform-svg-component-5.5.0.tgz",
      "integrity": "sha512-q4jSH1UUvbrsOtlo/tKcgSeiCHRSBdXoIoqX1pgcKK/aU3JD27wmMKwGtpB8qRYUYoyXvfGxUVKchLuR5pB3rQ=="
    },
    "@svgr/babel-preset": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-preset/-/babel-preset-5.5.0.tgz",
      "integrity": "sha512-4FiXBjvQ+z2j7yASeGPEi8VD/5rrGQk4Xrq3EdJmoZgz/tpqChpo5hgXDvmEauwtvOc52q8ghhZK4Oy7qph4ig==",
      "requires": {
        "@svgr/babel-plugin-add-jsx-attribute": "^5.4.0",
        "@svgr/babel-plugin-remove-jsx-attribute": "^5.4.0",
        "@svgr/babel-plugin-remove-jsx-empty-expression": "^5.0.1",
        "@svgr/babel-plugin-replace-jsx-attribute-value": "^5.0.1",
        "@svgr/babel-plugin-svg-dynamic-title": "^5.4.0",
        "@svgr/babel-plugin-svg-em-dimensions": "^5.4.0",
        "@svgr/babel-plugin-transform-react-native-svg": "^5.4.0",
        "@svgr/babel-plugin-transform-svg-component": "^5.5.0"
      }
    },
    "@svgr/core": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/core/-/core-5.5.0.tgz",
      "integrity": "sha512-q52VOcsJPvV3jO1wkPtzTuKlvX7Y3xIcWRpCMtBF3MrteZJtBfQw/+u0B1BHy5ColpQc1/YVTrPEtSYIMNZlrQ==",
      "requires": {
        "@svgr/plugin-jsx": "^5.5.0",
        "camelcase": "^6.2.0",
        "cosmiconfig": "^7.0.0"
      },
      "dependencies": {
        "cosmiconfig": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
          "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
          "requires": {
            "@types/parse-json": "^4.0.0",
            "import-fresh": "^3.2.1",
            "parse-json": "^5.0.0",
            "path-type": "^4.0.0",
            "yaml": "^1.10.0"
          }
        }
      }
    },
    "@svgr/hast-util-to-babel-ast": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/hast-util-to-babel-ast/-/hast-util-to-babel-ast-5.5.0.tgz",
      "integrity": "sha512-cAaR/CAiZRB8GP32N+1jocovUtvlj0+e65TB50/6Lcime+EA49m/8l+P2ko+XPJ4dw3xaPS3jOL4F2X4KWxoeQ==",
      "requires": {
        "@babel/types": "^7.12.6"
      }
    },
    "@svgr/plugin-jsx": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/plugin-jsx/-/plugin-jsx-5.5.0.tgz",
      "integrity": "sha512-V/wVh33j12hGh05IDg8GpIUXbjAPnTdPTKuP4VNLggnwaHMPNQNae2pRnyTAILWCQdz5GyMqtO488g7CKM8CBA==",
      "requires": {
        "@babel/core": "^7.12.3",
        "@svgr/babel-preset": "^5.5.0",
        "@svgr/hast-util-to-babel-ast": "^5.5.0",
        "svg-parser": "^2.0.2"
      }
    },
    "@svgr/plugin-svgo": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/plugin-svgo/-/plugin-svgo-5.5.0.tgz",
      "integrity": "sha512-r5swKk46GuQl4RrVejVwpeeJaydoxkdwkM1mBKOgJLBUJPGaLci6ylg/IjhrRsREKDkr4kbMWdgOtbXEh0fyLQ==",
      "requires": {
        "cosmiconfig": "^7.0.0",
        "deepmerge": "^4.2.2",
        "svgo": "^1.2.2"
      },
      "dependencies": {
        "cosmiconfig": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
          "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
          "requires": {
            "@types/parse-json": "^4.0.0",
            "import-fresh": "^3.2.1",
            "parse-json": "^5.0.0",
            "path-type": "^4.0.0",
            "yaml": "^1.10.0"
          }
        }
      }
    },
    "@svgr/webpack": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/webpack/-/webpack-5.5.0.tgz",
      "integrity": "sha512-DOBOK255wfQxguUta2INKkzPj6AIS6iafZYiYmHn6W3pHlycSRRlvWKCfLDG10fXfLWqE3DJHgRUOyJYmARa7g==",
      "requires": {
        "@babel/core": "^7.12.3",
        "@babel/plugin-transform-react-constant-elements": "^7.12.1",
        "@babel/preset-env": "^7.12.1",
        "@babel/preset-react": "^7.12.5",
        "@svgr/core": "^5.5.0",
        "@svgr/plugin-jsx": "^5.5.0",
        "@svgr/plugin-svgo": "^5.5.0",
        "loader-utils": "^2.0.0"
      }
    },
    "@testing-library/dom": {
      "version": "8.13.0",
      "resolved": "https://registry.npmjs.org/@testing-library/dom/-/dom-8.13.0.tgz",
      "integrity": "sha512-9VHgfIatKNXQNaZTtLnalIy0jNZzY35a4S3oi08YAt9Hv1VsfZ/DfA45lM8D/UhtHBGJ4/lGwp0PZkVndRkoOQ==",
      "requires": {
        "@babel/code-frame": "^7.10.4",
        "@babel/runtime": "^7.12.5",
        "@types/aria-query": "^4.2.0",
        "aria-query": "^5.0.0",
        "chalk": "^4.1.0",
        "dom-accessibility-api": "^0.5.9",
        "lz-string": "^1.4.4",
        "pretty-format": "^27.0.2"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@testing-library/jest-dom": {
      "version": "5.16.4",
      "resolved": "https://registry.npmjs.org/@testing-library/jest-dom/-/jest-dom-5.16.4.tgz",
      "integrity": "sha512-Gy+IoFutbMQcky0k+bqqumXZ1cTGswLsFqmNLzNdSKkU9KGV2u9oXhukCbbJ9/LRPKiqwxEE8VpV/+YZlfkPUA==",
      "requires": {
        "@babel/runtime": "^7.9.2",
        "@types/testing-library__jest-dom": "^5.9.1",
        "aria-query": "^5.0.0",
        "chalk": "^3.0.0",
        "css": "^3.0.0",
        "css.escape": "^1.5.1",
        "dom-accessibility-api": "^0.5.6",
        "lodash": "^4.17.15",
        "redent": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
    "jest-watch-typeahead": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/jest-watch-typeahead/-/jest-watch-typeahead-1.1.0.tgz",
      "integrity": "sha512-Va5nLSJTN7YFtC2jd+7wsoe1pNe5K4ShLux/E5iHEwlB9AxaxmggY7to9KUqKojhaJw3aXqt5WAb4jGPOolpEw==",
      "requires": {
        "ansi-escapes": "^4.3.1",
        "chalk": "^4.0.0",
        "jest-regex-util": "^28.0.0",
        "jest-watcher": "^28.0.0",
        "slash": "^4.0.0",
        "string-length": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "dependencies": {
        "@jest/console": {
          "version": "28.1.1",
          "resolved": "https://registry.npmjs.org/@jest/console/-/console-28.1.1.tgz",
          "integrity": "sha512-0RiUocPVFEm3WRMOStIHbRWllG6iW6E3/gUPnf4lkrVFyXIIDeCe+vlKeYyFOMhB2EPE6FLFCNADSOOQMaqvyA==",
          "requires": {
            "@jest/types": "^28.1.1",
            "@types/node": "*",
            "chalk": "^4.0.0",
            "jest-message-util": "^28.1.1",
            "jest-util": "^28.1.1",
            "slash": "^3.0.0"
          },
          "dependencies": {
            "slash": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
              "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
            }
          }
        },
        "@jest/test-result": {
          "version": "28.1.1",
          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-28.1.1.tgz",
          "integrity": "sha512-hPmkugBktqL6rRzwWAtp1JtYT4VHwv8OQ+9lE5Gymj6dHzubI/oJHMUpPOt8NrdVWSrz9S7bHjJUmv2ggFoUNQ==",
          "requires": {
            "@jest/console": "^28.1.1",
            "@jest/types": "^28.1.1",
            "@types/istanbul-lib-coverage": "^2.0.0",
            "collect-v8-coverage": "^1.0.0"
          }
        },
        "@jest/types": {
          "version": "28.1.1",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-28.1.1.tgz",
          "integrity": "sha512-vRXVqSg1VhDnB8bWcmvLzmg0Bt9CRKVgHPXqYwvWMX3TvAjeO+nRuK6+VdTKCtWOvYlmkF/HqNAL/z+N3B53Kw==",
          "requires": {
            "@jest/schemas": "^28.0.2",
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^3.0.0",
            "@types/node": "*",
            "@types/yargs": "^17.0.8",
            "chalk": "^4.0.0"
          }
        },
        "@types/yargs": {
          "version": "17.0.10",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-17.0.10.tgz",
          "integrity": "sha512-gmEaFwpj/7f/ROdtIlci1R1VYU1J4j95m8T+Tj3iBgiBFKg1foE/PSl93bBd5T9LDXNPo8UlNN6W0qwD8O5OaA==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        },
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "emittery": {
          "version": "0.10.2",
          "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.10.2.tgz",
          "integrity": "sha512-aITqOwnLanpHLNXZJENbOgjUBeHocD+xsSJmNrjovKBW5HbSpW3d1pEls7GFQPUWXiwG9+0P4GtHfEqC/4M0Iw=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "jest-message-util": {
          "version": "28.1.1",
          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-28.1.1.tgz",
          "integrity": "sha512-xoDOOT66fLfmTRiqkoLIU7v42mal/SqwDKvfmfiWAdJMSJiU+ozgluO7KbvoAgiwIrrGZsV7viETjc8GNrA/IQ==",
          "requires": {
            "@babel/code-frame": "^7.12.13",
            "@jest/types": "^28.1.1",
            "@types/stack-utils": "^2.0.0",
            "chalk": "^4.0.0",
            "graceful-fs": "^4.2.9",
            "micromatch": "^4.0.4",
            "pretty-format": "^28.1.1",
            "slash": "^3.0.0",
            "stack-utils": "^2.0.3"
          },
          "dependencies": {
            "slash": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
              "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
            }
          }
        },
        "jest-regex-util": {
          "version": "28.0.2",
          "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-28.0.2.tgz",
          "integrity": "sha512-4s0IgyNIy0y9FK+cjoVYoxamT7Zeo7MhzqRGx7YDYmaQn1wucY9rotiGkBzzcMXTtjrCAP/f7f+E0F7+fxPNdw=="
        },
        "jest-util": {
          "version": "28.1.1",
          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-28.1.1.tgz",
          "integrity": "sha512-FktOu7ca1DZSyhPAxgxB6hfh2+9zMoJ7aEQA759Z6p45NuO8mWcqujH+UdHlCm/V6JTWwDztM2ITCzU1ijJAfw==",
          "requires": {
            "@jest/types": "^28.1.1",
            "@types/node": "*",
            "chalk": "^4.0.0",
            "ci-info": "^3.2.0",
            "graceful-fs": "^4.2.9",
            "picomatch": "^2.2.3"
          }
        },
        "jest-watcher": {
          "version": "28.1.1",
          "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-28.1.1.tgz",
          "integrity": "sha512-RQIpeZ8EIJMxbQrXpJQYIIlubBnB9imEHsxxE41f54ZwcqWLysL/A0ZcdMirf+XsMn3xfphVQVV4EW0/p7i7Ug==",
          "requires": {
            "@jest/test-result": "^28.1.1",
            "@jest/types": "^28.1.1",
            "@types/node": "*",
            "ansi-escapes": "^4.2.1",
            "chalk": "^4.0.0",
            "emittery": "^0.10.2",
            "jest-util": "^28.1.1",
            "string-length": "^4.0.1"
          },
          "dependencies": {
            "string-length": {
              "version": "4.0.2",
              "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz",
              "integrity": "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==",
              "requires": {
                "char-regex": "^1.0.2",
                "strip-ansi": "^6.0.0"
              }
            },
            "strip-ansi": {
              "version": "6.0.1",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
              "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
              "requires": {
                "ansi-regex": "^5.0.1"
              }
            }
          }
        },
        "pretty-format": {
          "version": "28.1.1",
          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-28.1.1.tgz",
          "integrity": "sha512-wwJbVTGFHeucr5Jw2bQ9P+VYHyLdAqedFLEkdQUVaBF/eiidDwH5OpilINq4mEfhbCjLnirt6HTTDhv1HaTIQw==",
          "requires": {
            "@jest/schemas": "^28.0.2",
            "ansi-regex": "^5.0.1",
            "ansi-styles": "^5.0.0",
            "react-is": "^18.0.0"
          },
          "dependencies": {
            "ansi-styles": {
              "version": "5.2.0",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
              "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA=="
            }
          }
        },
        "slash": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-4.0.0.tgz",
          "integrity": "sha512-3dOsAHXXUkQTpOYcoAxLIorMTp4gIQr5IW3iVb7A7lFIp0VHhnynm9izx6TssdrIcVIESAlVjtnO2K8bg+Coew=="
        },
        "string-length": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/string-length/-/string-length-5.0.1.tgz",
          "integrity": "sha512-9Ep08KAMUn0OadnVaBuRdE2l615CQ508kr0XMadjClfYpdCyvrbFp6Taebo8yyxokQ4viUd/xPPUA4FGgUa0ow==",
          "requires": {
            "char-regex": "^2.0.0",
            "strip-ansi": "^7.0.1"
          },
          "dependencies": {
            "char-regex": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-2.0.1.tgz",
              "integrity": "sha512-oSvEeo6ZUD7NepqAat3RqoucZ5SeqLJgOvVIwkafu6IP3V0pO38s/ypdVUmDDK6qIIHNlYHJAKX9E7R7HoKElw=="
            }
          }
        },
        "strip-ansi": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.0.1.tgz",
          "integrity": "sha512-cXNxvT8dFNRVfhVME3JAe98mkXDYN2O1l7jmcwMnOslDeESg1rF/OZMtK0nRAhiari1unG5cD4jG3rapUAkLbw==",
          "requires": {
            "ansi-regex": "^6.0.1"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "6.0.1",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
              "integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA=="
            }
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-watcher": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-27.5.1.tgz",
      "integrity": "sha512-z676SuD6Z8o8qbmEGhoEUFOM1+jfEiL3DXHK/xgEiG2EyNYfFG60jluWcupY6dATjfEsKQuibReS1djInQnoVw==",
      "requires": {
        "@jest/test-result": "^27.5.1",
        "@jest/types": "^27.5.1",
        "@types/node": "*",
        "ansi-escapes": "^4.2.1",
        "chalk": "^4.0.0",
        "jest-util": "^27.5.1",
        "string-length": "^4.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-worker": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz",
      "integrity": "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==",
      "requires": {
        "@types/node": "*",
        "merge-stream": "^2.0.0",
        "supports-color": "^8.0.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "8.1.1",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
          "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "js-cookie": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/js-cookie/-/js-cookie-3.0.1.tgz",
      "integrity": "sha512-+0rgsUXZu4ncpPxRL+lNEptWMOWl9etvPHc/koSRp6MPwpRYAhmk0dUG00J4bxVV3r9uUzfo24wW0knS07SKSw=="
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
    },
    "js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsdom": {
      "version": "16.7.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-16.7.0.tgz",
      "integrity": "sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw==",
      "requires": {
        "abab": "^2.0.5",
        "acorn": "^8.2.4",
        "acorn-globals": "^6.0.0",
        "cssom": "^0.4.4",
        "cssstyle": "^2.3.0",
        "data-urls": "^2.0.0",
        "decimal.js": "^10.2.1",
        "domexception": "^2.0.1",
        "escodegen": "^2.0.0",
        "form-data": "^3.0.0",
        "html-encoding-sniffer": "^2.0.1",
        "http-proxy-agent": "^4.0.1",
        "https-proxy-agent": "^5.0.0",
        "is-potential-custom-element-name": "^1.0.1",
        "nwsapi": "^2.2.0",
        "parse5": "6.0.1",
        "saxes": "^5.0.1",
        "symbol-tree": "^3.2.4",
        "tough-cookie": "^4.0.0",
        "w3c-hr-time": "^1.0.2",
        "w3c-xmlserializer": "^2.0.0",
        "webidl-conversions": "^6.1.0",
        "whatwg-encoding": "^1.0.5",
        "whatwg-mimetype": "^2.3.0",
        "whatwg-url": "^8.5.0",
        "ws": "^7.4.6",
        "xml-name-validator": "^3.0.0"
      }
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
    },
    "json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w=="
    },
    "json-schema": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.4.0.tgz",
      "integrity": "sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA=="
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
    },
    "json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw=="
    },
    "json5": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.1.tgz",
      "integrity": "sha512-1hqLFMSrGHRHxav9q9gNjJ5EXznIxGVO09xQRrwplcS8qs28pZ8s8hupZAmqDwZUmVZ2Qb2jnyPOWcDH8m8dlA=="
    },
    "jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "requires": {
        "graceful-fs": "^4.1.6",
        "universalify": "^2.0.0"
      }
    },
    "jsonpointer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/jsonpointer/-/jsonpointer-5.0.0.tgz",
      "integrity": "sha512-PNYZIdMjVIvVgDSYKTT63Y+KZ6IZvGRNNWcxwD+GNnUz1MKPfv30J8ueCjdwcN0nDx2SlshgyB7Oy0epAzVRRg=="
    },
    "jsx-ast-utils": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.0.tgz",
      "integrity": "sha512-XzO9luP6L0xkxwhIJMTJQpZo/eeN60K08jHdexfD569AGxeNug6UketeHXEhROoM8aR7EcUoOQmIhcJQjcuq8Q==",
      "requires": {
        "array-includes": "^3.1.4",
        "object.assign": "^4.1.2"
      }
    },
    "kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
    },
    "kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="
    },
    "klona": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/klona/-/klona-2.0.5.tgz",
      "integrity": "sha512-pJiBpiXMbt7dkzXe8Ghj/u4FfXOOa98fPW+bihOJ4SjnoijweJrNThJfd3ifXpXhREjpoF2mZVH1GfS9LV3kHQ=="
    },
    "language-subtag-registry": {
      "version": "0.3.21",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.21.tgz",
      "integrity": "sha512-L0IqwlIXjilBVVYKFT37X9Ih11Um5NEl9cbJIuU/SwP/zEEAbBPOnEeeuxVMf45ydWQRDQN3Nqc96OgbH1K+Pg=="
    },
    "language-tags": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.5.tgz",
      "integrity": "sha512-qJhlO9cGXi6hBGKoxEG/sKZDAHD5Hnu9Hs4WbOY3pCWXDhw0N8x1NenNzm2EnNLkLkk7J2SdxAkDSbb6ftT+UQ==",
      "requires": {
        "language-subtag-registry": "~0.3.2"
      }
    },
    "leven": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
    },
    "levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "requires": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      }
    },
    "lilconfig": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.0.5.tgz",
      "integrity": "sha512-xaYmXZtTHPAw5m+xLN8ab9C+3a8YmV3asNSPOATITbtwrfbwaLJj8h66H1WMIpALCkqsIzK3h7oQ+PdX+LQ9Eg=="
    },
    "lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg=="
    },
    "loader-runner": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.3.0.tgz",
      "integrity": "sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg=="
    },
    "loader-utils": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.2.tgz",
      "integrity": "sha512-TM57VeHptv569d/GKh6TAYdzKblwDNiumOdkFnejjD0XwTH87K90w3O7AiJRqdQoXygvi1VQTJTLGhJl7WqA7A==",
      "requires": {
        "big.js": "^5.2.2",
        "emojis-list": "^3.0.0",
        "json5": "^2.1.2"
      }
    },
    "locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "requires": {
        "p-locate": "^5.0.0"
      }
    },
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "lodash.debounce": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
      "integrity": "sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow=="
    },
    "lodash.memoize": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
      "integrity": "sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag=="
    },
    "lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ=="
    },
    "lodash.sortby": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha512-HDWXG8isMntAyRF5vZ7xKuEvOhT4AhlRt/3czTSjvGUxjYCBVRQY48ViDHyfYz9VIoBkW4TMGQNapx+l3RUwdA=="
    },
    "lodash.uniq": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
      "integrity": "sha512-xfBaXQd9ryd9dlSDvnvI0lvxfLJlYAZzXomUYzLKtUeOQvOP5piqAWuGtrhWeqaXK9hhoM/iyJc5AV+XfsX3HQ=="
    },
    "loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "requires": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      }
    },
    "lower-case": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.2.tgz",
      "integrity": "sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==",
      "requires": {
        "tslib": "^2.0.3"
      }
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "lz-string": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/lz-string/-/lz-string-1.4.4.tgz",
      "integrity": "sha512-0ckx7ZHRPqb0oUm8zNr+90mtf9DQB60H1wMCjBtfi62Kl3a7JbHob6gA2bC+xRvZoOL+1hzUK8jeuEIQE8svEQ=="
    },
    "magic-string": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.25.9.tgz",
      "integrity": "sha512-RmF0AsMzgt25qzqqLc1+MbHmhdx0ojF2Fvs4XnOqz2ZOBXzzkEwc/dJQZCYHAn7v1jbVOjAZfK8msRn4BxO4VQ==",
      "requires": {
        "sourcemap-codec": "^1.4.8"
      }
    },
    "make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "requires": {
        "semver": "^6.0.0"
      }
    },
    "makeerror": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz",
      "integrity": "sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==",
      "requires": {
        "tmpl": "1.0.5"
      }
    },
    "mdn-data": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
      "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA=="
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ=="
    },
    "memfs": {
      "version": "3.4.6",
      "resolved": "https://registry.npmjs.org/memfs/-/memfs-3.4.6.tgz",
      "integrity": "sha512-rH9mjopto6Wkr7RFuH9l9dk3qb2XGOcYKr7xMhaYqfzuJqOqhRrcFvfD7JMuPj6SLmPreh5+6eAuv36NFAU+Mw==",
      "requires": {
        "fs-monkey": "^1.0.3"
      }
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="
    },
    "merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
    },
    "merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg=="
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w=="
    },
    "micromatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz",
      "integrity": "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==",
      "requires": {
        "braces": "^3.0.2",
        "picomatch": "^2.3.1"
      }
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="
    },
    "mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "requires": {
        "mime-db": "1.52.0"
      }
    },
    "mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
    },
    "min-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
      "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg=="
    },
    "mini-css-extract-plugin": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-2.6.1.tgz",
      "integrity": "sha512-wd+SD57/K6DiV7jIR34P+s3uckTRuQvx0tKPcvjFlrEylk6P4mQ2KSWk1hblj1Kxaqok7LogKOieygXqBczNlg==",
      "requires": {
        "schema-utils": "^4.0.0"
      },
      "dependencies": {
        "ajv": {
          "version": "8.11.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.11.0.tgz",
          "integrity": "sha512-wGgprdCvMalC0BztXvitD2hC04YffAvtsUn93JbGXYLAtCUO4xd17mCCZQxUOItiBwZvJScWo8NIvQMQ71rdpg==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ajv-keywords": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
          "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
          "requires": {
            "fast-deep-equal": "^3.1.3"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "schema-utils": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
          "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
          "requires": {
            "@types/json-schema": "^7.0.9",
            "ajv": "^8.8.0",
            "ajv-formats": "^2.1.1",
            "ajv-keywords": "^5.0.0"
          }
        }
      }
    },
    "minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A=="
    },
    "minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.6.tgz",
      "integrity": "sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q=="
    },
    "mkdirp": {
      "version": "0.5.6",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
      "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
      "requires": {
        "minimist": "^1.2.6"
      }
    },
    "ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "multicast-dns": {
      "version": "7.2.5",
      "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-7.2.5.tgz",
      "integrity": "sha512-2eznPJP8z2BFLX50tf0LuODrpINqP1RVIm/CObbTcBRITQgmC/TjcREF1NeTBzIcR5XO/ukWo+YHOjBbFwIupg==",
      "requires": {
        "dns-packet": "^5.2.2",
        "thunky": "^1.0.2"
      }
    },
    "nanoid": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.4.tgz",
      "integrity": "sha512-MqBkQh/OHTS2egovRtLk45wEyNXwF+cokD+1YPf9u5VfJiRdAiRwB2froX5Co9Rh20xs4siNPm8naNotSD6RBw=="
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw=="
    },
    "negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="
    },
    "neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw=="
    },
    "no-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.4.tgz",
      "integrity": "sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==",
      "requires": {
        "lower-case": "^2.0.2",
        "tslib": "^2.0.3"
      }
    },
    "node-forge": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-1.3.1.tgz",
      "integrity": "sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA=="
    },
    "node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw=="
    },
    "node-releases": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.5.tgz",
      "integrity": "sha512-U9h1NLROZTq9uE1SNffn6WuPDg8icmi3ns4rEl/oTfIle4iLjTliCzgTsbaIFMq/Xn078/lfY/BL0GWZ+psK4Q=="
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
    },
    "normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA=="
    },
    "normalize-url": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-6.1.0.tgz",
      "integrity": "sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A=="
    },
    "npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "requires": {
        "path-key": "^3.0.0"
      }
    },
    "nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "requires": {
        "boolbase": "^1.0.0"
      }
    },
    "nwsapi": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg=="
    },
    "object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw=="
    },
    "object-inspect": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
      "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ=="
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.entries": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.5.tgz",
      "integrity": "sha512-TyxmjUoZggd4OrrU1W66FMDG6CuqJxsFvymeyXI51+vQLN67zYfZseptRge703kKQdo4uccgAKebXFcRCzk4+g==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "object.fromentries": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.5.tgz",
      "integrity": "sha512-CAyG5mWQRRiBU57Re4FKoTBjXfDoNwdFVH2Y1tS9PqCsfUTymAohOkEMSG3aRNKmv4lV3O7p1et7c187q6bynw==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "object.getownpropertydescriptors": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.4.tgz",
      "integrity": "sha512-sccv3L/pMModT6dJAYF3fzGMVcb38ysQ0tEE6ixv2yXJDtEIPph268OlAdJj5/qZMZDq2g/jqvwppt36uS/uQQ==",
      "requires": {
        "array.prototype.reduce": "^1.0.4",
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.1"
      }
    },
    "object.hasown": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object.hasown/-/object.hasown-1.1.1.tgz",
      "integrity": "sha512-LYLe4tivNQzq4JdaWW6WO3HMZZJWzkkH8fnI6EebWl0VZth2wL2Lovm74ep2/gZzlaTdV62JZHEqHQ2yVn8Q/A==",
      "requires": {
        "define-properties": "^1.1.4",
        "es-abstract": "^1.19.5"
      }
    },
    "object.values": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.5.tgz",
      "integrity": "sha512-QUZRW0ilQ3PnPpbNtgdNV1PDbEqLIiSFB3l+EnGtBQ/8SUTLj1PZwtQHABZtLgwpJZTSZhuGLOGk57Drx2IvYg==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "obuf": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
      "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg=="
    },
    "on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "requires": {
        "mimic-fn": "^2.1.0"
      }
    },
    "open": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/open/-/open-8.4.0.tgz",
      "integrity": "sha512-XgFPPM+B28FtCCgSb9I+s9szOC1vZRSwgWsRUA5ylIxRTgKozqjOCrVOqGsYABPYK5qnfqClxZTFBa8PKt2v6Q==",
      "requires": {
        "define-lazy-prop": "^2.0.0",
        "is-docker": "^2.1.1",
        "is-wsl": "^2.2.0"
      }
    },
    "optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "requires": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      }
    },
    "p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "requires": {
        "yocto-queue": "^0.1.0"
      }
    },
    "p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "requires": {
        "p-limit": "^3.0.2"
      }
    },
    "p-retry": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-4.6.2.tgz",
      "integrity": "sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==",
      "requires": {
        "@types/retry": "0.12.0",
        "retry": "^0.13.1"
      }
    },
    "p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
    },
    "param-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/param-case/-/param-case-3.0.4.tgz",
      "integrity": "sha512-RXlj7zCYokReqWpOPH9oYivUzLYZ5vAPIfEmCTNViosC78F8F0H9y7T7gG2M39ymgutxF5gcFEsyZQSph9Bp3A==",
      "requires": {
        "dot-case": "^3.0.4",
        "tslib": "^2.0.3"
      }
    },
    "parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "requires": {
        "callsites": "^3.0.0"
      }
    },
    "parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      }
    },
    "parse5": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
      "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "pascal-case": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-3.1.2.tgz",
      "integrity": "sha512-uWlGT3YSnK9x3BQJaOdcZwrnV6hPpd8jFH1/ucpiLRPh/2zCVJKS19E4GvYHvaCcACn3foXZ0cLB9Wrx1KGe5g==",
      "requires": {
        "no-case": "^3.0.4",
        "tslib": "^2.0.3"
      }
    },
    "path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg=="
    },
    "path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="
    },
    "path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="
    },
    "path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw=="
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha512-7EAHlyLHI56VEIdK57uwHdHKIaAGbnXPiw0yWbarQZOKaKpvUIgW0jWRVLiatnM+XXlSwsanIBH/hzGMJulMow=="
    },
    "picocolors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="
    },
    "picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA=="
    },
    "pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog=="
    },
    "pirates": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.5.tgz",
      "integrity": "sha512-8V9+HQPupnaXMA23c5hvl69zXvTwTzyAYasnkb0Tts4XvO4CliqONMOnvlq26rkhLC3nWDFBJf73LU1e1VZLaQ=="
    },
    "pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "requires": {
        "find-up": "^4.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "requires": {
            "p-limit": "^2.2.0"
          }
        }
      }
    },
    "pkg-up": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/pkg-up/-/pkg-up-3.1.0.tgz",
      "integrity": "sha512-nDywThFk1i4BQK4twPQ6TA4RT8bDY96yeuCVBWL3ePARCiEKDRSrNGbFIgUJpLp+XeIR65v8ra7WuJOFUBtkMA==",
      "requires": {
        "find-up": "^3.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha512-bpC7GYwiDYQ4wYLe+FA8lhRjhQCMcQGuSgGGqDkg/QerRWw9CmGRT0iSOVRSZJ29NMLZgIzqaljJ63oaL4NIJQ=="
        }
      }
    },
    "postcss": {
      "version": "8.4.14",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.14.tgz",
      "integrity": "sha512-E398TUmfAYFPBSdzgeieK2Y1+1cpdxJx8yXbK/m57nRhKSmk1GB2tO4lbLBtlkfPQTDKfe4Xqv1ASWPpayPEig==",
      "requires": {
        "nanoid": "^3.3.4",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      }
    },
    "postcss-attribute-case-insensitive": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/postcss-attribute-case-insensitive/-/postcss-attribute-case-insensitive-5.0.1.tgz",
      "integrity": "sha512-wrt2VndqSLJpyBRNz9OmJcgnhI9MaongeWgapdBuUMu2a/KNJ8SENesG4SdiTnQwGO9b1VKbTWYAfCPeokLqZQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.10"
      }
    },
    "postcss-browser-comments": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-browser-comments/-/postcss-browser-comments-4.0.0.tgz",
      "integrity": "sha512-X9X9/WN3KIvY9+hNERUqX9gncsgBA25XaeR+jshHz2j8+sYyHktHw1JdKuMjeLpGktXidqDhA7b/qm1mrBDmgg==",
      "requires": {}
    },
    "postcss-calc": {
      "version": "8.2.4",
      "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-8.2.4.tgz",
      "integrity": "sha512-SmWMSJmB8MRnnULldx0lQIyhSNvuDl9HfrZkaqqE/WHAhToYsAvDq+yAsA/kIyINDszOp3Rh0GFoNuH5Ypsm3Q==",
      "requires": {
        "postcss-selector-parser": "^6.0.9",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-clamp": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/postcss-clamp/-/postcss-clamp-4.1.0.tgz",
      "integrity": "sha512-ry4b1Llo/9zz+PKC+030KUnPITTJAHeOwjfAyyB60eT0AorGLdzp52s31OsPRHRf8NchkgFoG2y6fCfn1IV1Ow==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-color-functional-notation": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/postcss-color-functional-notation/-/postcss-color-functional-notation-4.2.3.tgz",
      "integrity": "sha512-5fbr6FzFzjwHXKsVnkmEYrJYG8VNNzvD1tAXaPPWR97S6rhKI5uh2yOfV5TAzhDkZoq4h+chxEplFDc8GeyFtw==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-color-hex-alpha": {
      "version": "8.0.4",
      "resolved": "https://registry.npmjs.org/postcss-color-hex-alpha/-/postcss-color-hex-alpha-8.0.4.tgz",
      "integrity": "sha512-nLo2DCRC9eE4w2JmuKgVA3fGL3d01kGq752pVALF68qpGLmx2Qrk91QTKkdUqqp45T1K1XV8IhQpcu1hoAQflQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-color-rebeccapurple": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/postcss-color-rebeccapurple/-/postcss-color-rebeccapurple-7.1.0.tgz",
      "integrity": "sha512-1jtE5AKnZcKq4pjOrltFHcbEM2/IvtbD1OdhZ/wqds18//bh0UmQkffcCkzDJU+/vGodfIsVQeKn+45CJvX9Bw==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-colormin": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-5.3.0.tgz",
      "integrity": "sha512-WdDO4gOFG2Z8n4P8TWBpshnL3JpmNmJwdnfP2gbk2qBA8PWwOYcmjmI/t3CmMeL72a7Hkd+x/Mg9O2/0rD54Pg==",
      "requires": {
        "browserslist": "^4.16.6",
        "caniuse-api": "^3.0.0",
        "colord": "^2.9.1",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-convert-values": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-5.1.2.tgz",
      "integrity": "sha512-c6Hzc4GAv95B7suy4udszX9Zy4ETyMCgFPUDtWjdFTKH1SE9eFY/jEpHSwTH1QPuwxHpWslhckUQWbNRM4ho5g==",
      "requires": {
        "browserslist": "^4.20.3",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-custom-media": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/postcss-custom-media/-/postcss-custom-media-8.0.2.tgz",
      "integrity": "sha512-7yi25vDAoHAkbhAzX9dHx2yc6ntS4jQvejrNcC+csQJAXjj15e7VcWfMgLqBNAbOvqi5uIa9huOVwdHbf+sKqg==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-custom-properties": {
      "version": "12.1.8",
      "resolved": "https://registry.npmjs.org/postcss-custom-properties/-/postcss-custom-properties-12.1.8.tgz",
      "integrity": "sha512-8rbj8kVu00RQh2fQF81oBqtduiANu4MIxhyf0HbbStgPtnFlWn0yiaYTpLHrPnJbffVY1s9apWsIoVZcc68FxA==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-custom-selectors": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/postcss-custom-selectors/-/postcss-custom-selectors-6.0.3.tgz",
      "integrity": "sha512-fgVkmyiWDwmD3JbpCmB45SvvlCD6z9CG6Ie6Iere22W5aHea6oWa7EM2bpnv2Fj3I94L3VbtvX9KqwSi5aFzSg==",
      "requires": {
        "postcss-selector-parser": "^6.0.4"
      }
    },
    "postcss-dir-pseudo-class": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/postcss-dir-pseudo-class/-/postcss-dir-pseudo-class-6.0.4.tgz",
      "integrity": "sha512-I8epwGy5ftdzNWEYok9VjW9whC4xnelAtbajGv4adql4FIF09rnrxnA9Y8xSHN47y7gqFIv10C5+ImsLeJpKBw==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "postcss-discard-comments": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-5.1.2.tgz",
      "integrity": "sha512-+L8208OVbHVF2UQf1iDmRcbdjJkuBF6IS29yBDSiWUIzpYaAhtNl6JYnYm12FnkeCwQqF5LeklOu6rAqgfBZqQ==",
      "requires": {}
    },
    "postcss-discard-duplicates": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-5.1.0.tgz",
      "integrity": "sha512-zmX3IoSI2aoenxHV6C7plngHWWhUOV3sP1T8y2ifzxzbtnuhk1EdPwm0S1bIUNaJ2eNbWeGLEwzw8huPD67aQw==",
      "requires": {}
    },
    "postcss-discard-empty": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-5.1.1.tgz",
      "integrity": "sha512-zPz4WljiSuLWsI0ir4Mcnr4qQQ5e1Ukc3i7UfE2XcrwKK2LIPIqE5jxMRxO6GbI3cv//ztXDsXwEWT3BHOGh3A==",
      "requires": {}
    },
    "postcss-discard-overridden": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-5.1.0.tgz",
      "integrity": "sha512-21nOL7RqWR1kasIVdKs8HNqQJhFxLsyRfAnUDm4Fe4t4mCWL9OJiHvlHPjcd8zc5Myu89b/7wZDnOSjFgeWRtw==",
      "requires": {}
    },
    "postcss-double-position-gradients": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/postcss-double-position-gradients/-/postcss-double-position-gradients-3.1.1.tgz",
      "integrity": "sha512-jM+CGkTs4FcG53sMPjrrGE0rIvLDdCrqMzgDC5fLI7JHDO7o6QG8C5TQBtExb13hdBdoH9C2QVbG4jo2y9lErQ==",
      "requires": {
        "@csstools/postcss-progressive-custom-properties": "^1.1.0",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-env-function": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/postcss-env-function/-/postcss-env-function-4.0.6.tgz",
      "integrity": "sha512-kpA6FsLra+NqcFnL81TnsU+Z7orGtDTxcOhl6pwXeEq1yFPpRMkCDpHhrz8CFQDr/Wfm0jLiNQ1OsGGPjlqPwA==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-flexbugs-fixes": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/postcss-flexbugs-fixes/-/postcss-flexbugs-fixes-5.0.2.tgz",
      "integrity": "sha512-18f9voByak7bTktR2QgDveglpn9DTbBWPUzSOe9g0N4WR/2eSt6Vrcbf0hmspvMI6YWGywz6B9f7jzpFNJJgnQ==",
      "requires": {}
    },
    "postcss-focus-visible": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/postcss-focus-visible/-/postcss-focus-visible-6.0.4.tgz",
      "integrity": "sha512-QcKuUU/dgNsstIK6HELFRT5Y3lbrMLEOwG+A4s5cA+fx3A3y/JTq3X9LaOj3OC3ALH0XqyrgQIgey/MIZ8Wczw==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "postcss-focus-within": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-focus-within/-/postcss-focus-within-5.0.4.tgz",
      "integrity": "sha512-vvjDN++C0mu8jz4af5d52CB184ogg/sSxAFS+oUJQq2SuCe7T5U2iIsVJtsCp2d6R4j0jr5+q3rPkBVZkXD9fQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "postcss-font-variant": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/postcss-font-variant/-/postcss-font-variant-5.0.0.tgz",
      "integrity": "sha512-1fmkBaCALD72CK2a9i468mA/+tr9/1cBxRRMXOUaZqO43oWPR5imcyPjXwuv7PXbCid4ndlP5zWhidQVVa3hmA==",
      "requires": {}
    },
    "postcss-gap-properties": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/postcss-gap-properties/-/postcss-gap-properties-3.0.3.tgz",
      "integrity": "sha512-rPPZRLPmEKgLk/KlXMqRaNkYTUpE7YC+bOIQFN5xcu1Vp11Y4faIXv6/Jpft6FMnl6YRxZqDZG0qQOW80stzxQ==",
      "requires": {}
    },
    "postcss-image-set-function": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/postcss-image-set-function/-/postcss-image-set-function-4.0.6.tgz",
      "integrity": "sha512-KfdC6vg53GC+vPd2+HYzsZ6obmPqOk6HY09kttU19+Gj1nC3S3XBVEXDHxkhxTohgZqzbUb94bKXvKDnYWBm/A==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-import": {
      "version": "14.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-14.1.0.tgz",
      "integrity": "sha512-flwI+Vgm4SElObFVPpTIT7SU7R3qk2L7PyduMcokiaVKuWv9d/U+Gm/QAd8NDLuykTWTkcrjOeD2Pp1rMeBTGw==",
      "requires": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      }
    },
    "postcss-initial": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-initial/-/postcss-initial-4.0.1.tgz",
      "integrity": "sha512-0ueD7rPqX8Pn1xJIjay0AZeIuDoF+V+VvMt/uOnn+4ezUKhZM/NokDeP6DwMNyIoYByuN/94IQnt5FEkaN59xQ==",
      "requires": {}
    },
    "postcss-js": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.0.tgz",
      "integrity": "sha512-77QESFBwgX4irogGVPgQ5s07vLvFqWr228qZY+w6lW599cRlK/HmnlivnnVUxkjHnCu4J16PDMHcH+e+2HbvTQ==",
      "requires": {
        "camelcase-css": "^2.0.1"
      }
    },
    "postcss-lab-function": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-lab-function/-/postcss-lab-function-4.2.0.tgz",
      "integrity": "sha512-Zb1EO9DGYfa3CP8LhINHCcTTCTLI+R3t7AX2mKsDzdgVQ/GkCpHOTgOr6HBHslP7XDdVbqgHW5vvRPMdVANQ8w==",
      "requires": {
        "@csstools/postcss-progressive-custom-properties": "^1.1.0",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-load-config": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-3.1.4.tgz",
      "integrity": "sha512-6DiM4E7v4coTE4uzA8U//WhtPwyhiim3eyjEMFCnUpzbrkK9wJHgKDT2mR+HbtSrd/NubVaYTOpSpjUl8NQeRg==",
      "requires": {
        "lilconfig": "^2.0.5",
        "yaml": "^1.10.2"
      }
    },
    "postcss-loader": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-6.2.1.tgz",
      "integrity": "sha512-WbbYpmAaKcux/P66bZ40bpWsBucjx/TTgVVzRZ9yUO8yQfVBlameJ0ZGVaPfH64hNSBh63a+ICP5nqOpBA0w+Q==",
      "requires": {
        "cosmiconfig": "^7.0.0",
        "klona": "^2.0.5",
        "semver": "^7.3.5"
      },
      "dependencies": {
        "cosmiconfig": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
          "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
          "requires": {
            "@types/parse-json": "^4.0.0",
            "import-fresh": "^3.2.1",
            "parse-json": "^5.0.0",
            "path-type": "^4.0.0",
            "yaml": "^1.10.0"
          }
        },
        "semver": {
          "version": "7.3.7",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.7.tgz",
          "integrity": "sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==",
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "postcss-logical": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-logical/-/postcss-logical-5.0.4.tgz",
      "integrity": "sha512-RHXxplCeLh9VjinvMrZONq7im4wjWGlRJAqmAVLXyZaXwfDWP73/oq4NdIp+OZwhQUMj0zjqDfM5Fj7qby+B4g==",
      "requires": {}
    },
    "postcss-media-minmax": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/postcss-media-minmax/-/postcss-media-minmax-5.0.0.tgz",
      "integrity": "sha512-yDUvFf9QdFZTuCUg0g0uNSHVlJ5X1lSzDZjPSFaiCWvjgsvu8vEVxtahPrLMinIDEEGnx6cBe6iqdx5YWz08wQ==",
      "requires": {}
    },
    "postcss-merge-longhand": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-5.1.6.tgz",
      "integrity": "sha512-6C/UGF/3T5OE2CEbOuX7iNO63dnvqhGZeUnKkDeifebY0XqkkvrctYSZurpNE902LDf2yKwwPFgotnfSoPhQiw==",
      "requires": {
        "postcss-value-parser": "^4.2.0",
        "stylehacks": "^5.1.0"
      }
    },
    "postcss-merge-rules": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-5.1.2.tgz",
      "integrity": "sha512-zKMUlnw+zYCWoPN6yhPjtcEdlJaMUZ0WyVcxTAmw3lkkN/NDMRkOkiuctQEoWAOvH7twaxUUdvBWl0d4+hifRQ==",
      "requires": {
        "browserslist": "^4.16.6",
        "caniuse-api": "^3.0.0",
        "cssnano-utils": "^3.1.0",
        "postcss-selector-parser": "^6.0.5"
      }
    },
    "postcss-minify-font-values": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-5.1.0.tgz",
      "integrity": "sha512-el3mYTgx13ZAPPirSVsHqFzl+BBBDrXvbySvPGFnQcTI4iNslrPaFq4muTkLZmKlGk4gyFAYUBMH30+HurREyA==",
    "postcss-preset-env": {
      "version": "7.7.1",
      "resolved": "https://registry.npmjs.org/postcss-preset-env/-/postcss-preset-env-7.7.1.tgz",
      "integrity": "sha512-1sx6+Nl1wMVJzaYLVaz4OAR6JodIN/Z1upmVqLwSPCLT6XyxrEoePgNMHPH08kseLe3z06i9Vfkt/32BYEKDeA==",
      "requires": {
        "@csstools/postcss-cascade-layers": "^1.0.2",
        "@csstools/postcss-color-function": "^1.1.0",
        "@csstools/postcss-font-format-keywords": "^1.0.0",
        "@csstools/postcss-hwb-function": "^1.0.1",
        "@csstools/postcss-ic-unit": "^1.0.0",
        "@csstools/postcss-is-pseudo-class": "^2.0.4",
        "@csstools/postcss-normalize-display-values": "^1.0.0",
        "@csstools/postcss-oklab-function": "^1.1.0",
        "@csstools/postcss-progressive-custom-properties": "^1.3.0",
        "@csstools/postcss-stepped-value-functions": "^1.0.0",
        "@csstools/postcss-trigonometric-functions": "^1.0.1",
        "@csstools/postcss-unset-value": "^1.0.1",
        "autoprefixer": "^10.4.7",
        "browserslist": "^4.20.3",
        "css-blank-pseudo": "^3.0.3",
        "css-has-pseudo": "^3.0.4",
        "css-prefers-color-scheme": "^6.0.3",
        "cssdb": "^6.6.3",
        "postcss-attribute-case-insensitive": "^5.0.1",
        "postcss-clamp": "^4.1.0",
        "postcss-color-functional-notation": "^4.2.3",
        "postcss-color-hex-alpha": "^8.0.3",
        "postcss-color-rebeccapurple": "^7.0.2",
        "postcss-custom-media": "^8.0.1",
        "postcss-custom-properties": "^12.1.7",
        "postcss-custom-selectors": "^6.0.2",
        "postcss-dir-pseudo-class": "^6.0.4",
        "postcss-double-position-gradients": "^3.1.1",
        "postcss-env-function": "^4.0.6",
        "postcss-focus-visible": "^6.0.4",
        "postcss-focus-within": "^5.0.4",
        "postcss-font-variant": "^5.0.0",
        "postcss-gap-properties": "^3.0.3",
        "postcss-image-set-function": "^4.0.6",
        "postcss-initial": "^4.0.1",
        "postcss-lab-function": "^4.2.0",
        "postcss-logical": "^5.0.4",
        "postcss-media-minmax": "^5.0.0",
        "postcss-nesting": "^10.1.7",
        "postcss-opacity-percentage": "^1.1.2",
        "postcss-overflow-shorthand": "^3.0.3",
        "postcss-page-break": "^3.0.4",
        "postcss-place": "^7.0.4",
        "postcss-pseudo-class-any-link": "^7.1.4",
        "postcss-replace-overflow-wrap": "^4.0.0",
        "postcss-selector-not": "^6.0.0",
        "postcss-value-parser": "^4.2.0"
      },
      "dependencies": {
        "autoprefixer": {
          "version": "10.4.7",
          "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.7.tgz",
          "integrity": "sha512-ypHju4Y2Oav95SipEcCcI5J7CGPuvz8oat7sUtYj3ClK44bldfvtvcxK6IEK++7rqB7YchDGzweZIBG+SD0ZAA==",
          "requires": {
            "browserslist": "^4.20.3",
            "caniuse-lite": "^1.0.30001335",
            "fraction.js": "^4.2.0",
            "normalize-range": "^0.1.2",
            "picocolors": "^1.0.0",
            "postcss-value-parser": "^4.2.0"
          }
        }
      }
    },
    "postcss-pseudo-class-any-link": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/postcss-pseudo-class-any-link/-/postcss-pseudo-class-any-link-7.1.4.tgz",
      "integrity": "sha512-JxRcLXm96u14N3RzFavPIE9cRPuOqLDuzKeBsqi4oRk4vt8n0A7I0plFs/VXTg7U2n7g/XkQi0OwqTO3VWBfEg==",
      "requires": {
        "postcss-selector-parser": "^6.0.10"
      }
    },
    "postcss-reduce-initial": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/postcss-reduce-initial/-/postcss-reduce-initial-5.1.0.tgz",
      "integrity": "sha512-5OgTUviz0aeH6MtBjHfbr57tml13PuedK/Ecg8szzd4XRMbYxH4572JFG067z+FqBIf6Zp/d+0581glkvvWMFw==",
      "requires": {
        "browserslist": "^4.16.6",
        "caniuse-api": "^3.0.0"
      }
    },
    "postcss-reduce-transforms": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/postcss-reduce-transforms/-/postcss-reduce-transforms-5.1.0.tgz",
      "integrity": "sha512-2fbdbmgir5AvpW9RLtdONx1QoYG2/EtqpNQbFASDlixBbAYuTcJ0dECwlqNqH7VbaUnEnh8SrxOe2sRIn24XyQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-replace-overflow-wrap": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-replace-overflow-wrap/-/postcss-replace-overflow-wrap-4.0.0.tgz",
      "integrity": "sha512-KmF7SBPphT4gPPcKZc7aDkweHiKEEO8cla/GjcBK+ckKxiZslIu3C4GCRW3DNfL0o7yW7kMQu9xlZ1kXRXLXtw==",
      "requires": {}
    },
    "postcss-selector-not": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/postcss-selector-not/-/postcss-selector-not-6.0.0.tgz",
      "integrity": "sha512-i/HI/VNd3V9e1WOLCwJsf9nePBRXqcGtVibcJ9FsVo0agfDEfsLSlFt94aYjY35wUNcdG0KrvdyjEr7It50wLQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.10"
      }
    },
    "postcss-selector-parser": {
      "version": "6.0.10",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.10.tgz",
      "integrity": "sha512-IQ7TZdoaqbT+LCpShg46jnZVlhWD2w6iQYAcYXfHARZ7X1t/UGhhceQDs5X0cGqKvYlHNOuv7Oa1xmb0oQuA3w==",
      "requires": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      }
    },
    "postcss-svgo": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/postcss-svgo/-/postcss-svgo-5.1.0.tgz",
      "integrity": "sha512-D75KsH1zm5ZrHyxPakAxJWtkyXew5qwS70v56exwvw542d9CRtTo78K0WeFxZB4G7JXKKMbEZtZayTGdIky/eA==",
      "requires": {
        "postcss-value-parser": "^4.2.0",
        "svgo": "^2.7.0"
      },
      "dependencies": {
        "commander": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
          "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw=="
        },
        "css-tree": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.1.3.tgz",
          "integrity": "sha512-tRpdppF7TRazZrjJ6v3stzv93qxRcSsFmW6cX0Zm2NVKpxE1WV1HblnghVv9TreireHkqI/VDEsfolRF1p6y7Q==",
          "requires": {
            "mdn-data": "2.0.14",
            "source-map": "^0.6.1"
          }
        },
        "mdn-data": {
          "version": "2.0.14",
          "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.14.tgz",
          "integrity": "sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "svgo": {
          "version": "2.8.0",
          "resolved": "https://registry.npmjs.org/svgo/-/svgo-2.8.0.tgz",
          "integrity": "sha512-+N/Q9kV1+F+UeWYoSiULYo4xYSDQlTgb+ayMobAXPwMnLvop7oxKMo9OzIrX5x3eS4L4f2UHhc9axXwY8DpChg==",
          "requires": {
            "@trysound/sax": "0.2.0",
            "commander": "^7.2.0",
            "css-select": "^4.1.3",
            "css-tree": "^1.1.3",
            "csso": "^4.2.0",
            "picocolors": "^1.0.0",
            "stable": "^0.1.8"
          }
        }
      }
    },
    "postcss-unique-selectors": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/postcss-unique-selectors/-/postcss-unique-selectors-5.1.1.tgz",
      "integrity": "sha512-5JiODlELrz8L2HwxfPnhOWZYWDxVHWL83ufOv84NrcgipI7TaeRsatAhK4Tr2/ZiYldpK/wBvw5BD3qfaK96GA==",
      "requires": {
        "postcss-selector-parser": "^6.0.5"
      }
    },
    "postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ=="
    },
    "prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g=="
    },
    "pretty-bytes": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.6.0.tgz",
      "integrity": "sha512-FFw039TmrBqFK8ma/7OL3sDz/VytdtJr044/QUJtH0wK9lb9jLq9tJyIxUwtQJHwar2BqtiA4iCWSwo9JLkzFg=="
    },
    "pretty-error": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/pretty-error/-/pretty-error-4.0.0.tgz",
      "integrity": "sha512-AoJ5YMAcXKYxKhuJGdcvse+Voc6v1RgnsR3nWcYU7q4t6z0Q6T86sv5Zq8VIRbOWWFpvdGE83LtdSMNd+6Y0xw==",
      "requires": {
        "lodash": "^4.17.20",
        "renderkid": "^3.0.0"
      }
    },
    "pretty-format": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-27.5.1.tgz",
      "integrity": "sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ==",
      "requires": {
        "ansi-regex": "^5.0.1",
        "ansi-styles": "^5.0.0",
        "react-is": "^17.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
          "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA=="
        },
        "react-is": {
          "version": "17.0.2",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
          "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
        }
      }
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "promise": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/promise/-/promise-8.1.0.tgz",
      "integrity": "sha512-W04AqnILOL/sPRXziNicCjSNRruLAuIHEOVBazepu0545DDNGYHz7ar9ZgZ1fMU8/MA4mVxp5rkBWRi6OXIy3Q==",
      "requires": {
        "asap": "~2.0.6"
      }
    },
    "prompts": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
      "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
      "requires": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.5"
      }
    },
    "prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "requires": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      },
      "dependencies": {
        "react-is": {
          "version": "16.13.1",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
          "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
        }
      }
    },
    "prop-types-extra": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/prop-types-extra/-/prop-types-extra-1.1.1.tgz",
      "integrity": "sha512-59+AHNnHYCdiC+vMwY52WmvP5dM3QLeoumYuEyceQDi9aEhtwN9zIQ2ZNo25sMyXnbh32h+P1ezDsUpUH3JAew==",
      "requires": {
        "react-is": "^16.3.2",
        "warning": "^4.0.0"
      },
      "dependencies": {
        "react-is": {
          "version": "16.13.1",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
          "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
        }
      }
    },
    "proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "requires": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "dependencies": {
        "ipaddr.js": {
          "version": "1.9.1",
          "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
          "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
        }
      }
    },
    "psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
    },
    "q": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
      "integrity": "sha512-kV/CThkXo6xyFEZUugw/+pIOywXcDbFYgSct5cT3gqlbkBE1SJdwy6UQoZvodiWF/ckQLZyDE/Bu1M6gVu5lVw=="
    },
    "qs": {
      "version": "6.10.3",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.3.tgz",
      "integrity": "sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==",
      "requires": {
        "side-channel": "^1.0.4"
      }
    },
    "queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A=="
    },
    "quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA=="
    },
    "raf": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/raf/-/raf-3.4.1.tgz",
      "integrity": "sha512-Sq4CW4QhwOHE8ucn6J34MqtZCeWFP2aQSmrlroYgqAV1PjStIhJXxYuTgUIfkEk7zTLjmIjLmU5q+fbD1NnOJA==",
      "requires": {
        "performance-now": "^2.1.0"
      }
    },
    "randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "requires": {
        "safe-buffer": "^5.1.0"
      }
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "raw-body": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",
      "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",
      "requires": {
        "bytes": "3.1.2",
        "http-errors": "2.0.0",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      },
      "dependencies": {
        "bytes": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
          "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg=="
        },
        "iconv-lite": {
          "version": "0.4.24",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
          "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3"
          }
        }
      }
    },
    "react": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
      "integrity": "sha512-/3IjMdb2L9QbBdWiW5e3P2/npwMBaU9mHCSCUzNln0ZCYbcfTsGbTJrU/kGemdH2IWmB2ioZ+zkxtmq6g09fGQ==",
      "requires": {
        "loose-envify": "^1.1.0"
      }
    },
    "react-app-polyfill": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/react-app-polyfill/-/react-app-polyfill-3.0.0.tgz",
      "integrity": "sha512-sZ41cxiU5llIB003yxxQBYrARBqe0repqPTTYBTmMqTz9szeBbE37BehCE891NZsmdZqqP+xWKdT3eo3vOzN8w==",
      "requires": {
        "core-js": "^3.19.2",
        "object-assign": "^4.1.1",
        "promise": "^8.1.0",
        "raf": "^3.4.1",
        "regenerator-runtime": "^0.13.9",
        "whatwg-fetch": "^3.6.2"
      }
    },
    "react-bootstrap": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/react-bootstrap/-/react-bootstrap-2.4.0.tgz",
      "integrity": "sha512-dn599jNK1Fg5GGjJH+lQQDwELVzigh/MdusKpB/0el+sCjsO5MZDH5gRMmBjRhC+vb7VlCDr6OXffPIDSkNMLw==",
      "requires": {
        "@babel/runtime": "^7.17.2",
        "@restart/hooks": "^0.4.6",
        "@restart/ui": "^1.2.0",
        "@types/react-transition-group": "^4.4.4",
        "classnames": "^2.3.1",
        "dom-helpers": "^5.2.1",
        "invariant": "^2.2.4",
        "prop-types": "^15.8.1",
        "prop-types-extra": "^1.1.0",
        "react-transition-group": "^4.4.2",
        "uncontrollable": "^7.2.1",
        "warning": "^4.0.3"
      }
    },
    "react-dev-utils": {
      "version": "12.0.1",
      "resolved": "https://registry.npmjs.org/react-dev-utils/-/react-dev-utils-12.0.1.tgz",
      "integrity": "sha512-84Ivxmr17KjUupyqzFode6xKhjwuEJDROWKJy/BthkL7Wn6NJ8h4WE6k/exAv6ImS+0oZLRRW5j/aINMHyeGeQ==",
      "requires": {
        "@babel/code-frame": "^7.16.0",
        "address": "^1.1.2",
        "browserslist": "^4.18.1",
        "chalk": "^4.1.2",
        "cross-spawn": "^7.0.3",
        "detect-port-alt": "^1.1.6",
        "escape-string-regexp": "^4.0.0",
        "filesize": "^8.0.6",
        "find-up": "^5.0.0",
        "fork-ts-checker-webpack-plugin": "^6.5.0",
        "global-modules": "^2.0.0",
        "globby": "^11.0.4",
        "gzip-size": "^6.0.0",
        "immer": "^9.0.7",
        "is-root": "^2.1.0",
        "loader-utils": "^3.2.0",
        "open": "^8.4.0",
        "pkg-up": "^3.1.0",
        "prompts": "^2.4.2",
        "react-error-overlay": "^6.0.11",
        "recursive-readdir": "^2.2.2",
        "shell-quote": "^1.7.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "loader-utils": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-3.2.0.tgz",
          "integrity": "sha512-HVl9ZqccQihZ7JM85dco1MvO9G+ONvxoGa9rkhzFsneGLKSUg1gJf9bWzhRhcvm2qChhWpebQhP44qxjKIUCaQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "react-dom": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.2.0.tgz",
      "integrity": "sha512-6IMTriUmvsjHUjNtEDudZfuDQUoWXVxKHhlEGSk81n4YFS+r/Kl99wXiwlVXtPBtJenozv2P+hxDsw9eA7Xo6g==",
      "requires": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.0"
      }
    },
    "react-error-overlay": {
      "version": "6.0.11",
      "resolved": "https://registry.npmjs.org/react-error-overlay/-/react-error-overlay-6.0.11.tgz",
      "integrity": "sha512-/6UZ2qgEyH2aqzYZgQPxEnz33NJ2gNsnHA2o5+o4wW9bLM/JYQitNP9xPhsXwC08hMMovfGe/8retsdDsczPRg=="
    },
    "react-icons": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/react-icons/-/react-icons-4.4.0.tgz",
      "integrity": "sha512-fSbvHeVYo/B5/L4VhB7sBA1i2tS8MkT0Hb9t2H1AVPkwGfVHLJCqyr2Py9dKMxsyM63Eng1GkdZfbWj+Fmv8Rg==",
      "requires": {}
    },
    "react-is": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.2.0.tgz",
      "integrity": "sha512-xWGDIW6x921xtzPkhiULtthJHoJvBbF3q26fzloPCK0hsvxtPVelvftw3zjbHWSkR2km9Z+4uxbDDK/6Zw9B8w=="
    },
    "react-lifecycles-compat": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/react-lifecycles-compat/-/react-lifecycles-compat-3.0.4.tgz",
      "integrity": "sha512-fBASbA6LnOU9dOU2eW7aQ8xmYBSXUIWr+UmF9b1efZBazGNO+rcXT/icdKnYm2pTwcRylVUYwW7H1PHfLekVzA=="
    },
    "react-refresh": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.11.0.tgz",
      "integrity": "sha512-F27qZr8uUqwhWZboondsPx8tnC3Ct3SxZA3V5WyEvujRyyNv0VYPhoBg1gZ8/MV5tubQp76Trw8lTv9hzRBa+A=="
    },
    "react-router": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-6.3.0.tgz",
      "integrity": "sha512-7Wh1DzVQ+tlFjkeo+ujvjSqSJmkt1+8JO+T5xklPlgrh70y7ogx75ODRW0ThWhY7S+6yEDks8TYrtQe/aoboBQ==",
      "requires": {
        "history": "^5.2.0"
      }
    },
    "react-router-dom": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-6.3.0.tgz",
      "integrity": "sha512-uaJj7LKytRxZNQV8+RbzJWnJ8K2nPsOOEuX7aQstlMZKQT0164C+X2w6bnkqU3sjtLvpd5ojrezAyfZ1+0sStw==",
      "requires": {
        "history": "^5.2.0",
        "react-router": "6.3.0"
      }
    },
    "react-scripts": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/react-scripts/-/react-scripts-5.0.1.tgz",
      "integrity": "sha512-8VAmEm/ZAwQzJ+GOMLbBsTdDKOpuZh7RPs0UymvBR2vRk4iZWCskjbFnxqjrzoIvlNNRZ3QJFx6/qDSi6zSnaQ==",
      "requires": {
        "@babel/core": "^7.16.0",
        "@pmmmwh/react-refresh-webpack-plugin": "^0.5.3",
        "@svgr/webpack": "^5.5.0",
        "babel-jest": "^27.4.2",
        "babel-loader": "^8.2.3",
        "babel-plugin-named-asset-import": "^0.3.8",
        "babel-preset-react-app": "^10.0.1",
        "bfj": "^7.0.2",
        "browserslist": "^4.18.1",
        "camelcase": "^6.2.1",
        "case-sensitive-paths-webpack-plugin": "^2.4.0",
        "css-loader": "^6.5.1",
        "css-minimizer-webpack-plugin": "^3.2.0",
        "dotenv": "^10.0.0",
        "dotenv-expand": "^5.1.0",
        "eslint": "^8.3.0",
        "eslint-config-react-app": "^7.0.1",
        "eslint-webpack-plugin": "^3.1.1",
        "file-loader": "^6.2.0",
        "fs-extra": "^10.0.0",
        "fsevents": "^2.3.2",
        "html-webpack-plugin": "^5.5.0",
        "identity-obj-proxy": "^3.0.0",
        "jest": "^27.4.3",
        "jest-resolve": "^27.4.2",
        "jest-watch-typeahead": "^1.0.0",
        "mini-css-extract-plugin": "^2.4.5",
        "postcss": "^8.4.4",
        "postcss-flexbugs-fixes": "^5.0.2",
        "postcss-loader": "^6.2.1",
        "postcss-normalize": "^10.0.1",
        "postcss-preset-env": "^7.0.1",
        "prompts": "^2.4.2",
        "react-app-polyfill": "^3.0.0",
        "react-dev-utils": "^12.0.1",
        "react-refresh": "^0.11.0",
        "resolve": "^1.20.0",
        "resolve-url-loader": "^4.0.0",
        "sass-loader": "^12.3.0",
        "semver": "^7.3.5",
        "source-map-loader": "^3.0.0",
        "style-loader": "^3.3.1",
        "tailwindcss": "^3.0.2",
        "terser-webpack-plugin": "^5.2.5",
        "webpack": "^5.64.4",
        "webpack-dev-server": "^4.6.0",
        "webpack-manifest-plugin": "^4.0.2",
        "workbox-webpack-plugin": "^6.4.1"
      },
      "dependencies": {
        "semver": {
          "version": "7.3.7",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.7.tgz",
          "integrity": "sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==",
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "react-transition-group": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.2.tgz",
      "integrity": "sha512-/RNYfRAMlZwDSr6z4zNKV6xu53/e2BuaBbGhbyYIXTrmgu/bGHzmqOs7mJSJBHy9Ud+ApHx3QjrkKSp1pxvlFg==",
      "requires": {
        "@babel/runtime": "^7.5.5",
        "dom-helpers": "^5.0.1",
        "loose-envify": "^1.4.0",
        "prop-types": "^15.6.2"
      }
    },
    "read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "requires": {
        "pify": "^2.3.0"
      }
    },
    "readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "requires": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      }
    },
    "readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "requires": {
        "picomatch": "^2.2.1"
      }
    },
    "recursive-readdir": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/recursive-readdir/-/recursive-readdir-2.2.2.tgz",
      "integrity": "sha512-nRCcW9Sj7NuZwa2XvH9co8NPeXUBhZP7CRKJtU+cS6PW9FpCIFoI5ib0NT1ZrbNuPoRy0ylyCaUL8Gih4LSyFg==",
      "requires": {
        "minimatch": "3.0.4"
      },
      "dependencies": {
        "minimatch": {
          "version": "3.0.4",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
          "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
          "requires": {
            "brace-expansion": "^1.1.7"
          }
        }
      }
    },
    "redent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-3.0.0.tgz",
      "integrity": "sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==",
      "requires": {
        "indent-string": "^4.0.0",
        "strip-indent": "^3.0.0"
      }
    },
    "regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A=="
    },
    "regenerate-unicode-properties": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-10.0.1.tgz",
      "integrity": "sha512-vn5DU6yg6h8hP/2OkQo3K7uVILvY4iu0oI4t3HFa81UPkhGJwkRwM10JEc3upjdhHjs/k8GJY1sRBhk5sr69Bw==",
      "requires": {
        "regenerate": "^1.4.2"
      }
    },
    "regenerator-runtime": {
      "version": "0.13.9",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.9.tgz",
      "integrity": "sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA=="
    },
    "regenerator-transform": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.15.0.tgz",
      "integrity": "sha512-LsrGtPmbYg19bcPHwdtmXwbW+TqNvtY4riE3P83foeHRroMbH6/2ddFBfab3t7kbzc7v7p4wbkIecHImqt0QNg==",
      "requires": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "regex-parser": {
      "version": "2.2.11",
      "resolved": "https://registry.npmjs.org/regex-parser/-/regex-parser-2.2.11.tgz",
      "integrity": "sha512-jbD/FT0+9MBU2XAZluI7w2OBs1RBi6p9M83nkoZayQXXU9e8Robt69FcZc7wU4eJD/YFTjn1JdCk3rbMJajz8Q=="
    },
    "regexp.prototype.flags": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.4.3.tgz",
      "integrity": "sha512-fjggEOO3slI6Wvgjwflkc4NFRCTZAu5CnNfBd5qOMYhWdn67nJBBu34/TkD++eeFmd8C9r9jfXJ27+nSiRkSUA==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "functions-have-names": "^1.2.2"
      }
    },
    "regexpp": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.2.0.tgz",
      "integrity": "sha512-pq2bWo9mVD43nbts2wGv17XLiNLya+GklZ8kaDLV2Z08gDCsGpnKn9BFMepvWuHCbyVvY7J5o5+BVvoQbmlJLg=="
    },
    "regexpu-core": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-5.0.1.tgz",
      "integrity": "sha512-CriEZlrKK9VJw/xQGJpQM5rY88BtuL8DM+AEwvcThHilbxiTAy8vq4iJnd2tqq8wLmjbGZzP7ZcKFjbGkmEFrw==",
      "requires": {
        "regenerate": "^1.4.2",
        "regenerate-unicode-properties": "^10.0.1",
        "regjsgen": "^0.6.0",
        "regjsparser": "^0.8.2",
        "unicode-match-property-ecmascript": "^2.0.0",
        "unicode-match-property-value-ecmascript": "^2.0.0"
      }
    },
    "regjsgen": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.6.0.tgz",
      "integrity": "sha512-ozE883Uigtqj3bx7OhL1KNbCzGyW2NQZPl6Hs09WTvCuZD5sTI4JY58bkbQWa/Y9hxIsvJ3M8Nbf7j54IqeZbA=="
    },
    "regjsparser": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.8.4.tgz",
      "integrity": "sha512-J3LABycON/VNEu3abOviqGHuB/LOtOQj8SKmfP9anY5GfAVw/SPjwzSjxGjbZXIxbGfqTHtJw58C2Li/WkStmA==",
      "requires": {
        "jsesc": "~0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha512-uZz5UnB7u4T9LvwmFqXii7pZSouaRPorGs5who1Ip7VO0wxanFvBL7GkM6dTHlgX+jhBApRetaWpnDabOeTcnA=="
        }
      }
    },
    "relateurl": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz",
      "integrity": "sha512-G08Dxvm4iDN3MLM0EsP62EDV9IuhXPR6blNz6Utcp7zyV3tr4HVNINt6MpaRWbxoOHT3Q7YN2P+jaHX8vUbgog=="
    },
    "renderkid": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/renderkid/-/renderkid-3.0.0.tgz",
      "integrity": "sha512-q/7VIQA8lmM1hF+jn+sFSPWGlMkSAeNYcPLmDQx2zzuiDfaLrOmumR8iaUKlenFgh0XRPIUeSPlH3A+AW3Z5pg==",
      "requires": {
        "css-select": "^4.1.3",
        "dom-converter": "^0.2.0",
        "htmlparser2": "^6.1.0",
        "lodash": "^4.17.21",
        "strip-ansi": "^6.0.1"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q=="
    },
    "require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw=="
    },
    "requires-port": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
      "integrity": "sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ=="
    },
    "resolve": {
      "version": "1.22.1",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.1.tgz",
      "integrity": "sha512-nBpuuYuY5jFsli/JIs1oldw6fOQCBioohqWZg/2hiaOybXOft4lonv85uDOKXdf8rhyK159cxU5cDcK/NKk8zw==",
      "requires": {
        "is-core-module": "^2.9.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      }
    },
    "resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "requires": {
        "resolve-from": "^5.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
          "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="
        }
      }
    },
    "resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g=="
    },
    "resolve-url-loader": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-url-loader/-/resolve-url-loader-4.0.0.tgz",
      "integrity": "sha512-05VEMczVREcbtT7Bz+C+96eUO5HDNvdthIiMB34t7FcF8ehcu4wC0sSgPUubs3XW2Q3CNLJk/BJrCU9wVRymiA==",
      "requires": {
        "adjust-sourcemap-loader": "^4.0.0",
        "convert-source-map": "^1.7.0",
        "loader-utils": "^2.0.0",
        "postcss": "^7.0.35",
        "source-map": "0.6.1"
      },
      "dependencies": {
        "picocolors": {
          "version": "0.2.1",
          "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",
          "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA=="
        },
        "postcss": {
          "version": "7.0.39",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.39.tgz",
          "integrity": "sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==",
          "requires": {
            "picocolors": "^0.2.1",
            "source-map": "^0.6.1"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "resolve.exports": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/resolve.exports/-/resolve.exports-1.1.0.tgz",
      "integrity": "sha512-J1l+Zxxp4XK3LUDZ9m60LRJF/mAe4z6a4xyabPHk7pvK5t35dACV32iIjJDFeWZFfZlO29w6SZ67knR0tHzJtQ=="
    },
    "retry": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
      "integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg=="
    },
    "reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw=="
    },
    "rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "rollup": {
      "version": "2.75.6",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-2.75.6.tgz",
      "integrity": "sha512-OEf0TgpC9vU6WGROJIk1JA3LR5vk/yvqlzxqdrE2CzzXnqKXNzbAwlWUXis8RS3ZPe7LAq+YUxsRa0l3r27MLA==",
      "requires": {
        "fsevents": "~2.3.2"
      }
    },
    "rollup-plugin-terser": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/rollup-plugin-terser/-/rollup-plugin-terser-7.0.2.tgz",
      "integrity": "sha512-w3iIaU4OxcF52UUXiZNsNeuXIMDvFrr+ZXK6bFZ0Q60qyVfq4uLptoS4bbq3paG3x216eQllFZX7zt6TIImguQ==",
      "requires": {
        "@babel/code-frame": "^7.10.4",
        "jest-worker": "^26.2.1",
        "serialize-javascript": "^4.0.0",
        "terser": "^5.0.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "jest-worker": {
          "version": "26.6.2",
          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
          "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
          "requires": {
            "@types/node": "*",
            "merge-stream": "^2.0.0",
            "supports-color": "^7.0.0"
          }
        },
        "serialize-javascript": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-4.0.0.tgz",
          "integrity": "sha512-GaNA54380uFefWghODBWEGisLZFj00nS5ACs6yHa9nLqlLpVLO8ChDGeKRjZnV4Nh4n0Qi7nhYZD/9fCPzEqkw==",
          "requires": {
            "randombytes": "^2.1.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "requires": {
        "queue-microtask": "^1.2.2"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "sanitize.css": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/sanitize.css/-/sanitize.css-13.0.0.tgz",
      "integrity": "sha512-ZRwKbh/eQ6w9vmTjkuG0Ioi3HBwPFce0O+v//ve+aOq1oeCy7jMV2qzzAlpsNuqpqCBjjriM1lbtZbF/Q8jVyA=="
    },
    "sass-loader": {
      "version": "12.6.0",
      "resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-12.6.0.tgz",
      "integrity": "sha512-oLTaH0YCtX4cfnJZxKSLAyglED0naiYfNG1iXfU5w1LNZ+ukoA5DtyDIN5zmKVZwYNJP4KRc5Y3hkWga+7tYfA==",
      "requires": {
        "klona": "^2.0.4",
        "neo-async": "^2.6.2"
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "saxes": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz",
      "integrity": "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==",
      "requires": {
        "xmlchars": "^2.2.0"
      }
    },
    "scheduler": {
      "version": "0.23.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.0.tgz",
      "integrity": "sha512-CtuThmgHNg7zIZWAXi3AsyIzA3n4xx7aNyjwC2VJldO2LMVDhFK+63xGqq6CsJH4rTAt6/M+N4GhZiDYPx9eUw==",
      "requires": {
        "loose-envify": "^1.1.0"
      }
    },
    "schema-utils": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.1.1.tgz",
      "integrity": "sha512-Y5PQxS4ITlC+EahLuXaY86TXfR7Dc5lw294alXOq86JAHCihAIZfqv8nNCWvaEJvaC51uN9hbLGeV0cFBdH+Fw==",
      "requires": {
        "@types/json-schema": "^7.0.8",
        "ajv": "^6.12.5",
        "ajv-keywords": "^3.5.2"
      }
    },
    "select-hose": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
      "integrity": "sha512-mEugaLK+YfkijB4fx0e6kImuJdCIt2LxCRcbEYPqRGCs4F2ogyfZU5IAZRdjCP8JPq2AtdNoC/Dux63d9Kiryg=="
    },
    "selfsigned": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-2.0.1.tgz",
      "integrity": "sha512-LmME957M1zOsUhG+67rAjKfiWFox3SBxE/yymatMZsAx+oMrJ0YQ8AToOnyCm7xbeg2ep37IHLxdu0o2MavQOQ==",
      "requires": {
        "node-forge": "^1"
      }
    },
    "semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
    },
    "send": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
      "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
      "requires": {
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "2.0.0",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "2.4.1",
        "range-parser": "~1.2.1",
        "statuses": "2.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          },
          "dependencies": {
            "ms": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
              "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
            }
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "serialize-javascript": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.0.tgz",
      "integrity": "sha512-Qr3TosvguFt8ePWqsvRfrKyQXIiW+nGbYpy8XK24NQHE83caxWt+mIymTT19DGFbNWNLfEwsrkSmN64lVWB9ag==",
      "requires": {
        "randombytes": "^2.1.0"
      }
    },
    "serve-index": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
      "integrity": "sha512-pXHfKNP4qujrtteMrSBb0rc8HJ9Ms/GrXwcUtUtD5s4ewDJI8bT3Cz2zTVRMKtri49pLx2e0Ya8ziP5Ya2pZZw==",
      "requires": {
        "accepts": "~1.3.4",
        "batch": "0.6.1",
        "debug": "2.6.9",
        "escape-html": "~1.0.3",
        "http-errors": "~1.6.2",
        "mime-types": "~2.1.17",
        "parseurl": "~1.3.2"
          }
        },
        "depd": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
          "integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ=="
        },
        "http-errors": {
          "version": "1.6.3",
          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
          "integrity": "sha512-lks+lVC8dgGyh97jxvxeYTWQFvh4uw4yC12gVl63Cg30sjPX4wuGcdkICVXDAESr6OJGjqGA8Iz5mkeN6zlD7A==",
          "requires": {
            "depd": "~1.1.2",
            "inherits": "2.0.3",
            "setprototypeof": "1.1.0",
            "statuses": ">= 1.4.0 < 2"
          }
        },
        "inherits": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha512-x00IRNXNy63jwGkJmzPigoySHbaqpNuzKbBOmzK+g2OdZpQ9w+sxCN+VSB3ja7IAge2OP2qpfxTjeNcyjmW1uw=="
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
        },
        "setprototypeof": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
          "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ=="
        },
        "statuses": {
          "version": "1.5.0",
          "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
          "integrity": "sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA=="
        }
      }
    },
    "serve-static": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
      "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.18.0"
      }
    },
    "setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
    },
    "shallowequal": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/shallowequal/-/shallowequal-1.1.0.tgz",
      "integrity": "sha512-y0m1JoUZSlPAjXVtPPW70aZWfIL/dSP7AFkRnniLCrK/8MDKog3TySTBmckD+RObVxH0v4Tox67+F14PdED2oQ=="
    },
    "shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "requires": {
        "shebang-regex": "^3.0.0"
      }
    },
    "shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="
    },
    "shell-quote": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.3.tgz",
      "integrity": "sha512-Vpfqwm4EnqGdlsBFNmHhxhElJYrdfcxPThu+ryKS5J8L/fhAwLazFZtq+S+TWZ9ANj2piSQLGj6NQg+lKPmxrw=="
    },
    "side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "requires": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      }
    },
    "signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="
    },
    "sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="
    },
    "slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
    },
    "sockjs": {
      "version": "0.3.24",
      "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.24.tgz",
      "integrity": "sha512-GJgLTZ7vYb/JtPSSZ10hsOYIvEYsjbNU+zPdIHcUaWVNUEPivzxku31865sSSud0Da0W4lEeOPlmw93zLQchuQ==",
      "requires": {
        "faye-websocket": "^0.11.3",
        "uuid": "^8.3.2",
        "websocket-driver": "^0.7.4"
      }
    },
    "source-list-map": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.1.tgz",
      "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw=="
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ=="
    },
    "source-map-js": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw=="
    },
    "source-map-loader": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/source-map-loader/-/source-map-loader-3.0.1.tgz",
      "integrity": "sha512-Vp1UsfyPvgujKQzi4pyDiTOnE3E4H+yHvkVRN3c/9PJmQS4CQJExvcDvaX/D+RV+xQben9HJ56jMJS3CgUeWyA==",
      "requires": {
        "abab": "^2.0.5",
        "iconv-lite": "^0.6.3",
        "source-map-js": "^1.0.1"
      }
    },
    "source-map-resolve": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.6.0.tgz",
      "integrity": "sha512-KXBr9d/fO/bWo97NXsPIAW1bFSBOuCnjbNTBMO7N59hsv5i9yzRDfcYwwt0l04+VqnKC+EwzvJZIP/qkuMgR/w==",
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0"
      }
    },
    "source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "sourcemap-codec": {
      "version": "1.4.8",
      "resolved": "https://registry.npmjs.org/sourcemap-codec/-/sourcemap-codec-1.4.8.tgz",
      "integrity": "sha512-9NykojV5Uih4lgo5So5dtw+f0JgJX30KCNI8gwhz2J9A15wD0Ml6tjHKwf6fTSa6fAdVBdZeNOs9eJ71qCk8vA=="
    },
    "spdy": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
      "integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
      "requires": {
        "debug": "^4.1.0",
        "handle-thing": "^2.0.0",
        "http-deceiver": "^1.2.7",
        "select-hose": "^2.0.0",
        "spdy-transport": "^3.0.0"
      }
    },
    "spdy-transport": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
      "integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
      "requires": {
        "debug": "^4.1.0",
        "detect-node": "^2.0.4",
        "hpack.js": "^2.1.6",
        "obuf": "^1.1.2",
        "readable-stream": "^3.0.6",
        "wbuf": "^1.7.3"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g=="
    },
    "stable": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/stable/-/stable-0.1.8.tgz",
      "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w=="
    },
    "stack-utils": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.5.tgz",
      "integrity": "sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA==",
      "requires": {
        "escape-string-regexp": "^2.0.0"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
          "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="
        }
      }
    },
    "stackframe": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/stackframe/-/stackframe-1.3.4.tgz",
      "integrity": "sha512-oeVtt7eWQS+Na6F//S4kJ2K2VbRlS9D43mAlMyVpVWovy9o+jfgH8O9agzANzaiLjclA0oYzUXEM4PurhSUChw=="
    },
    "statuses": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ=="
    },
    "string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "requires": {
        "safe-buffer": "~5.2.0"
      },
      "dependencies": {
        "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
        }
      }
    },
    "string-length": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz",
      "integrity": "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==",
      "requires": {
        "char-regex": "^1.0.2",
        "strip-ansi": "^6.0.0"
      }
    },
    "string-natural-compare": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/string-natural-compare/-/string-natural-compare-3.0.1.tgz",
      "integrity": "sha512-n3sPwynL1nwKi3WJ6AIsClwBMa0zTi54fn2oLU6ndfTSIO05xaznjSf15PcBZU6FNWbmN5Q6cxT4V5hGvB4taw=="
    },
    "string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "requires": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "dependencies": {
        "emoji-regex": {
          "version": "8.0.0",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
        }
      }
    },
    "string.prototype.matchall": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.7.tgz",
      "integrity": "sha512-f48okCX7JiwVi1NXCVWcFnZgADDC/n2vePlQ/KUCNqCikLLilQvwjMO8+BHVKvgzH0JB0J9LEPgxOGT02RoETg==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1",
        "get-intrinsic": "^1.1.1",
        "has-symbols": "^1.0.3",
        "internal-slot": "^1.0.3",
        "regexp.prototype.flags": "^1.4.1",
        "side-channel": "^1.0.4"
      }
    },
    "string.prototype.trimend": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.5.tgz",
      "integrity": "sha512-I7RGvmjV4pJ7O3kdf+LXFpVfdNOxtCW/2C8f6jNiW4+PQchwxkCDzlk1/7p+Wl4bqFIZeF47qAHXLuHHWKAxog==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.19.5"
      }
    },
    "string.prototype.trimstart": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.5.tgz",
      "integrity": "sha512-THx16TJCGlsN0o6dl2o6ncWUsdgnLRSA23rRE5pyGBw/mLr3Ej/R2LaqCtgP8VNMGZsvMWnf9ooZPyY2bHvUFg==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.19.5"
      }
    },
    "stringify-object": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/stringify-object/-/stringify-object-3.3.0.tgz",
      "integrity": "sha512-rHqiFh1elqCQ9WPLIC8I0Q/g/wj5J1eMkyoiD6eoQApWHP0FtlK7rqnhmabL5VUY9JQCcqwwvlOaSuutekgyrw==",
      "requires": {
        "get-own-enumerable-property-symbols": "^3.0.0",
        "is-obj": "^1.0.1",
        "is-regexp": "^1.0.0"
      }
    },
    "strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "requires": {
        "ansi-regex": "^5.0.1"
      }
    },
    "strip-bom": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
      "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w=="
    },
    "strip-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-comments/-/strip-comments-2.0.1.tgz",
      "integrity": "sha512-ZprKx+bBLXv067WTCALv8SSz5l2+XhpYCsVtSqlMnkAXMWDq+/ekVbl1ghqP9rUHTzv6sm/DwCOiYutU/yp1fw=="
    },
    "strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA=="
    },
    "strip-indent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-3.0.0.tgz",
      "integrity": "sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==",
      "requires": {
        "min-indent": "^1.0.0"
      }
    },
    "strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig=="
    },
    "style-loader": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-3.3.1.tgz",
      "integrity": "sha512-GPcQ+LDJbrcxHORTRes6Jy2sfvK2kS6hpSfI/fXhPt+spVzxF6LJ1dHLN9zIGmVaaP044YKaIatFaufENRiDoQ==",
      "requires": {}
    },
    "styled-components": {
      "version": "5.3.5",
      "resolved": "https://registry.npmjs.org/styled-components/-/styled-components-5.3.5.tgz",
      "integrity": "sha512-ndETJ9RKaaL6q41B69WudeqLzOpY1A/ET/glXkNZ2T7dPjPqpPCXXQjDFYZWwNnE5co0wX+gTCqx9mfxTmSIPg==",
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/traverse": "^7.4.5",
        "@emotion/is-prop-valid": "^1.1.0",
        "@emotion/stylis": "^0.8.4",
        "@emotion/unitless": "^0.7.4",
        "babel-plugin-styled-components": ">= 1.12.0",
        "css-to-react-native": "^3.0.0",
        "hoist-non-react-statics": "^3.0.0",
        "shallowequal": "^1.1.0",
        "supports-color": "^5.5.0"
      }
    },
    "stylehacks": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/stylehacks/-/stylehacks-5.1.0.tgz",
      "integrity": "sha512-SzLmvHQTrIWfSgljkQCw2++C9+Ne91d/6Sp92I8c5uHTcy/PgeHamwITIbBW9wnFTY/3ZfSXR9HIL6Ikqmcu6Q==",
      "requires": {
        "browserslist": "^4.16.6",
        "postcss-selector-parser": "^6.0.4"
      }
    },
    "stylis": {
      "version": "4.0.13",
      "resolved": "https://registry.npmjs.org/stylis/-/stylis-4.0.13.tgz",
      "integrity": "sha512-xGPXiFVl4YED9Jh7Euv2V220mriG9u4B2TA6Ybjc1catrstKD2PpIdU3U0RKpkVBC2EhmL/F0sPCr9vrFTNRag=="
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "supports-hyperlinks": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.2.0.tgz",
      "integrity": "sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ==",
      "requires": {
        "has-flag": "^4.0.0",
        "supports-color": "^7.0.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w=="
    },
    "svg-parser": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/svg-parser/-/svg-parser-2.0.4.tgz",
      "integrity": "sha512-e4hG1hRwoOdRb37cIMSgzNsxyzKfayW6VOflrwvR+/bzrkyxY/31WkbgnQpgtrNp1SdpJvpUAGTa/ZoiPNDuRQ=="
    },
    "svgo": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/svgo/-/svgo-1.3.2.tgz",
      "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
      "requires": {
        "chalk": "^2.4.1",
        "coa": "^2.0.2",
        "css-select": "^2.0.0",
        "css-select-base-adapter": "^0.1.1",
        "css-tree": "1.0.0-alpha.37",
        "csso": "^4.0.2",
        "js-yaml": "^3.13.1",
        "mkdirp": "~0.5.1",
        "object.values": "^1.1.0",
        "sax": "~1.2.4",
        "stable": "^0.1.8",
        "unquote": "~1.1.1",
        "util.promisify": "~1.0.0"
      },
      "dependencies": {
        "css-select": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
          "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
          "requires": {
            "boolbase": "^1.0.0",
            "css-what": "^3.2.1",
            "domutils": "^1.7.0",
            "nth-check": "^1.0.2"
          }
        },
        "css-what": {
          "version": "3.4.2",
          "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.4.2.tgz",
          "integrity": "sha512-ACUm3L0/jiZTqfzRM3Hi9Q8eZqd6IK37mMWPLz9PJxkLWllYeRf+EHUSHYEtFop2Eqytaq1FizFVh7XfBnXCDQ=="
        },
        "dom-serializer": {
          "version": "0.2.2",
          "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
          "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
          "requires": {
            "domelementtype": "^2.0.1",
            "entities": "^2.0.0"
          }
        },
        "domutils": {
          "version": "1.7.0",
          "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
          "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
          "requires": {
            "dom-serializer": "0",
            "domelementtype": "1"
          },
          "dependencies": {
            "domelementtype": {
              "version": "1.3.1",
              "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
              "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w=="
            }
          }
        },
        "nth-check": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
          "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
          "requires": {
            "boolbase": "~1.0.0"
          }
        }
      }
    },
    "symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="
    },
    "tailwindcss": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.1.3.tgz",
      "integrity": "sha512-PRJNYdSIthrb8hjmAyymEyEN8Yo61TMXpzyFUpxULeeyRn3Y3gpvuw6FlRTKrJvK7thSGKRnhT36VovVx4WeMA==",
      "requires": {
        "arg": "^5.0.2",
        "chokidar": "^3.5.3",
        "color-name": "^1.1.4",
        "detective": "^5.2.1",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.2.11",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "lilconfig": "^2.0.5",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.0.0",
        "postcss": "^8.4.14",
        "postcss-import": "^14.1.0",
        "postcss-js": "^4.0.0",
        "postcss-load-config": "^3.1.4",
        "postcss-nested": "5.0.6",
        "postcss-selector-parser": "^6.0.10",
        "postcss-value-parser": "^4.2.0",
        "quick-lru": "^5.1.1",
        "resolve": "^1.22.0"
      },
      "dependencies": {
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        }
      }
    },
    "tapable": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
      "integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ=="
    },
    "temp-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-2.0.0.tgz",
      "integrity": "sha512-aoBAniQmmwtcKp/7BzsH8Cxzv8OL736p7v1ihGb5e9DJ9kTwGWHrQrVB5+lfVDzfGrdRzXch+ig7LHaY1JTOrg=="
    },
    "tempy": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tempy/-/tempy-0.6.0.tgz",
      "integrity": "sha512-G13vtMYPT/J8A4X2SjdtBTphZlrp1gKv6hZiOjw14RCWg6GbHuQBGtjlx75xLbYV/wEc0D7G5K4rxKP/cXk8Bw==",
      "requires": {
        "is-stream": "^2.0.0",
        "temp-dir": "^2.0.0",
        "type-fest": "^0.16.0",
        "unique-string": "^2.0.0"
      },
      "dependencies": {
        "type-fest": {
          "version": "0.16.0",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.16.0.tgz",
          "integrity": "sha512-eaBzG6MxNzEn9kiwvtre90cXaNLkmadMWa1zQMs3XORCXNbsH/OewwbxC5ia9dCxIxnTAsSxXJaa/p5y8DlvJg=="
        }
      }
    },
    "terminal-link": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz",
      "integrity": "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==",
      "requires": {
        "ansi-escapes": "^4.2.1",
        "supports-hyperlinks": "^2.0.0"
      }
    },
    "terser": {
      "version": "5.14.1",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.14.1.tgz",
      "integrity": "sha512-+ahUAE+iheqBTDxXhTisdA8hgvbEG1hHOQ9xmNjeUJSoi6DU/gMrKNcfZjHkyY6Alnuyc+ikYJaxxfHkT3+WuQ==",
      "requires": {
        "@jridgewell/source-map": "^0.3.2",
        "acorn": "^8.5.0",
        "commander": "^2.20.0",
        "source-map-support": "~0.5.20"
      },
      "dependencies": {
        "commander": {
          "version": "2.20.3",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
          "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
        }
      }
    },
    "terser-webpack-plugin": {
      "version": "5.3.3",
      "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.3.3.tgz",
      "integrity": "sha512-Fx60G5HNYknNTNQnzQ1VePRuu89ZVYWfjRAeT5rITuCY/1b08s49e5kSQwHDirKZWuoKOBRFS98EUUoZ9kLEwQ==",
      "requires": {
        "@jridgewell/trace-mapping": "^0.3.7",
        "jest-worker": "^27.4.5",
        "schema-utils": "^3.1.1",
        "serialize-javascript": "^6.0.0",
        "terser": "^5.7.2"
      }
    },
    "test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "requires": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      }
    },
    "text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw=="
    },
    "throat": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/throat/-/throat-6.0.1.tgz",
      "integrity": "sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w=="
    },
    "thunky": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
      "integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA=="
    },
    "tmpl": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
      "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw=="
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog=="
    },
    "to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "requires": {
        "is-number": "^7.0.0"
      }
    },
    "toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
    },
    "tough-cookie": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-4.0.0.tgz",
      "integrity": "sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg==",
      "requires": {
        "psl": "^1.1.33",
        "punycode": "^2.1.1",
        "universalify": "^0.1.2"
      },
      "dependencies": {
        "universalify": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
          "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
        }
      }
    },
    "tr46": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-2.1.0.tgz",
      "integrity": "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==",
      "requires": {
        "punycode": "^2.1.1"
      }
    },
    "tryer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tryer/-/tryer-1.0.1.tgz",
      "integrity": "sha512-c3zayb8/kWWpycWYg87P71E1S1ZL6b6IJxfb5fvsUgsf0S2MVGaDhDXXjDMpdCpfWXqptc+4mXwmiy1ypXqRAA=="
    },
    "tsconfig-paths": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.14.1.tgz",
      "integrity": "sha512-fxDhWnFSLt3VuTwtvJt5fpwxBHg5AdKWMsgcPOOIilyjymcYVZoCQF8fvFRezCNfblEXmi+PcM1eYHeOAgXCOQ==",
      "requires": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.1",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      },
      "dependencies": {
        "json5": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
          "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
          "requires": {
            "minimist": "^1.2.0"
          }
        },
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA=="
        }
      }
    },
    "tslib": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.4.0.tgz",
      "integrity": "sha512-d6xOpEDfsi2CZVlPQzGeux8XMwLT9hssAsaPYExaQMuYskwb+x1x7J371tWlbBdWHroy99KnVB6qIkUbs5X3UQ=="
    },
    "tsutils": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.21.0.tgz",
      "integrity": "sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==",
      "requires": {
        "tslib": "^1.8.1"
      },
      "dependencies": {
        "tslib": {
          "version": "1.14.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
          "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
        }
      }
    },
    "type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "requires": {
        "prelude-ls": "^1.2.1"
      }
    },
    "type-detect": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
      "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g=="
    },
    "type-fest": {
      "version": "0.21.3",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
      "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w=="
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "requires": {
        "is-typedarray": "^1.0.0"
      }
    },
    "typescript": {
      "version": "4.7.4",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.7.4.tgz",
      "integrity": "sha512-C0WQT0gezHuw6AdY1M2jxUO83Rjf0HP7Sk1DtXj6j1EwkQNZrHAg2XPWlq62oqEhYvONq5pkC2Y9oPljWToLmQ==",
      "peer": true
    },
    "unbox-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.2.tgz",
      "integrity": "sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==",
      "requires": {
        "call-bind": "^1.0.2",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.0.3",
        "which-boxed-primitive": "^1.0.2"
      }
    },
    "uncontrollable": {
      "version": "7.2.1",
      "resolved": "https://registry.npmjs.org/uncontrollable/-/uncontrollable-7.2.1.tgz",
      "integrity": "sha512-svtcfoTADIB0nT9nltgjujTi7BzVmwjZClOmskKu/E8FW9BXzg9os8OLr4f8Dlnk0rYWJIWr4wv9eKUXiQvQwQ==",
      "requires": {
        "@babel/runtime": "^7.6.3",
        "@types/react": ">=16.9.11",
        "invariant": "^2.2.4",
        "react-lifecycles-compat": "^3.0.4"
      }
    },
    "unicode-canonical-property-names-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz",
      "integrity": "sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ=="
    },
    "unicode-match-property-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
      "requires": {
        "unicode-canonical-property-names-ecmascript": "^2.0.0",
        "unicode-property-aliases-ecmascript": "^2.0.0"
      }
    },
    "unicode-match-property-value-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.0.0.tgz",
      "integrity": "sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw=="
    },
    "unicode-property-aliases-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5Zfuy9q/DFr4tfO7ZPeVXb1aPoeQSdeFMLpYuFebehDAhbuevLs5yxSZmIFN1tP5F9Wl4IpJrYojg85/zgyZHQ=="
    },
    "unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "requires": {
        "crypto-random-string": "^2.0.0"
      }
    },
    "universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ=="
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ=="
    },
    "unquote": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/unquote/-/unquote-1.1.1.tgz",
      "integrity": "sha512-vRCqFv6UhXpWxZPyGDh/F3ZpNv8/qo7w6iufLpQg9aKnQ71qM4B5KiI7Mia9COcjEhrO9LueHpMYjYzsWH3OIg=="
    },
    "upath": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg=="
    },
    "uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
    },
    "util.promisify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.1.tgz",
      "integrity": "sha512-g9JpC/3He3bm38zsLupWryXHoEcS22YHthuPQSJdMy6KNrzIRzWqcsHzD/WUnqe45whVou4VIsPew37DoXWNrA==",
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.2",
        "has-symbols": "^1.0.1",
        "object.getownpropertydescriptors": "^2.1.0"
      }
    },
    "utila": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/utila/-/utila-0.4.0.tgz",
      "integrity": "sha512-Z0DbgELS9/L/75wZbro8xAnT50pBVFQZ+hUEueGDU5FN51YSCYM+jdxsfCiHjwNP/4LCDD0i/graKpeBnOXKRA=="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="
    },
    "uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg=="
    },
    "v8-compile-cache": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.3.0.tgz",
      "integrity": "sha512-l8lCEmLcLYZh4nbunNZvQCJc5pv7+RCwa8q/LdUx8u7lsWvPDKmpodJAJNwkAhJC//dFY48KuIEmjtd4RViDrA=="
    },
    "v8-to-istanbul": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-8.1.1.tgz",
      "integrity": "sha512-FGtKtv3xIpR6BYhvgH8MI/y78oT7d8Au3ww4QIxymrCtZEh5b8gCw2siywE+puhEmuWKDtmfrvF5UlB298ut3w==",
      "requires": {
        "@types/istanbul-lib-coverage": "^2.0.1",
        "convert-source-map": "^1.6.0",
        "source-map": "^0.7.3"
      },
      "dependencies": {
        "source-map": {
          "version": "0.7.4",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.4.tgz",
          "integrity": "sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA=="
        }
      }
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="
    },
    "w3c-hr-time": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
      "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
      "requires": {
        "browser-process-hrtime": "^1.0.0"
      }
    },
    "w3c-xmlserializer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz",
      "integrity": "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==",
      "requires": {
        "xml-name-validator": "^3.0.0"
      }
    },
    "walker": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.8.tgz",
      "integrity": "sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==",
      "requires": {
        "makeerror": "1.0.12"
      }
    },
    "warning": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/warning/-/warning-4.0.3.tgz",
      "integrity": "sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==",
      "requires": {
        "loose-envify": "^1.0.0"
      }
    },
    "watchpack": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.4.0.tgz",
      "integrity": "sha512-Lcvm7MGST/4fup+ifyKi2hjyIAwcdI4HRgtvTpIUxBRhB+RFtUh8XtDOxUfctVCnhVi+QQj49i91OyvzkJl6cg==",
      "requires": {
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.1.2"
      }
    },
    "wbuf": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
      "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
      "requires": {
        "minimalistic-assert": "^1.0.0"
      }
    },
    "web-vitals": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/web-vitals/-/web-vitals-2.1.4.tgz",
      "integrity": "sha512-sVWcwhU5mX6crfI5Vd2dC4qchyTqxV8URinzt25XqVh+bHEPGH4C3NPrNionCP7Obx59wrYEbNlw4Z8sjALzZg=="
    },
    "webidl-conversions": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
      "integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w=="
    },
    "webpack": {
      "version": "5.73.0",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.73.0.tgz",
      "integrity": "sha512-svjudQRPPa0YiOYa2lM/Gacw0r6PvxptHj4FuEKQ2kX05ZLkjbVc5MnPs6its5j7IZljnIqSVo/OsY2X0IpHGA==",
      "requires": {
        "@types/eslint-scope": "^3.7.3",
        "@types/estree": "^0.0.51",
        "@webassemblyjs/ast": "1.11.1",
        "@webassemblyjs/wasm-edit": "1.11.1",
        "@webassemblyjs/wasm-parser": "1.11.1",
        "acorn": "^8.4.1",
        "acorn-import-assertions": "^1.7.6",
        "browserslist": "^4.14.5",
        "chrome-trace-event": "^1.0.2",
        "enhanced-resolve": "^5.9.3",
        "es-module-lexer": "^0.9.0",
        "eslint-scope": "5.1.1",
        "events": "^3.2.0",
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.2.9",
        "json-parse-even-better-errors": "^2.3.1",
        "loader-runner": "^4.2.0",
        "mime-types": "^2.1.27",
        "neo-async": "^2.6.2",
        "schema-utils": "^3.1.0",
        "tapable": "^2.1.1",
        "terser-webpack-plugin": "^5.1.3",
        "watchpack": "^2.3.1",
        "webpack-sources": "^3.2.3"
      },
      "dependencies": {
        "eslint-scope": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
          "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
          "requires": {
            "esrecurse": "^4.3.0",
            "estraverse": "^4.1.1"
          }
        },
        "estraverse": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
          "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
        }
      }
    },
    "webpack-dev-middleware": {
      "version": "5.3.3",
      "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-5.3.3.tgz",
      "integrity": "sha512-hj5CYrY0bZLB+eTO+x/j67Pkrquiy7kWepMHmUMoPsmcUaeEnQJqFzHJOyxgWlq746/wUuA64p9ta34Kyb01pA==",
      "requires": {
        "colorette": "^2.0.10",
        "memfs": "^3.4.3",
        "mime-types": "^2.1.31",
        "range-parser": "^1.2.1",
        "schema-utils": "^4.0.0"
      },
      "dependencies": {
        "ajv": {
          "version": "8.11.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.11.0.tgz",
          "integrity": "sha512-wGgprdCvMalC0BztXvitD2hC04YffAvtsUn93JbGXYLAtCUO4xd17mCCZQxUOItiBwZvJScWo8NIvQMQ71rdpg==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ajv-keywords": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
          "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
          "requires": {
            "fast-deep-equal": "^3.1.3"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "schema-utils": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
          "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
          "requires": {
            "@types/json-schema": "^7.0.9",
            "ajv": "^8.8.0",
            "ajv-formats": "^2.1.1",
            "ajv-keywords": "^5.0.0"
          }
        }
      }
    },
    "webpack-dev-server": {
      "version": "4.9.2",
      "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-4.9.2.tgz",
      "integrity": "sha512-H95Ns95dP24ZsEzO6G9iT+PNw4Q7ltll1GfJHV4fKphuHWgKFzGHWi4alTlTnpk1SPPk41X+l2RB7rLfIhnB9Q==",
      "requires": {
        "@types/bonjour": "^3.5.9",
        "@types/connect-history-api-fallback": "^1.3.5",
        "@types/express": "^4.17.13",
        "@types/serve-index": "^1.9.1",
        "@types/serve-static": "^1.13.10",
        "@types/sockjs": "^0.3.33",
        "@types/ws": "^8.5.1",
        "ansi-html-community": "^0.0.8",
        "bonjour-service": "^1.0.11",
        "chokidar": "^3.5.3",
        "colorette": "^2.0.10",
        "compression": "^1.7.4",
        "connect-history-api-fallback": "^1.6.0",
        "default-gateway": "^6.0.3",
        "express": "^4.17.3",
        "graceful-fs": "^4.2.6",
        "html-entities": "^2.3.2",
        "http-proxy-middleware": "^2.0.3",
        "ipaddr.js": "^2.0.1",
        "open": "^8.0.9",
        "p-retry": "^4.5.0",
        "rimraf": "^3.0.2",
        "schema-utils": "^4.0.0",
        "selfsigned": "^2.0.1",
        "serve-index": "^1.9.1",
        "sockjs": "^0.3.24",
        "spdy": "^4.0.2",
        "webpack-dev-middleware": "^5.3.1",
        "ws": "^8.4.2"
      },
      "dependencies": {
        "ajv": {
          "version": "8.11.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.11.0.tgz",
          "integrity": "sha512-wGgprdCvMalC0BztXvitD2hC04YffAvtsUn93JbGXYLAtCUO4xd17mCCZQxUOItiBwZvJScWo8NIvQMQ71rdpg==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ajv-keywords": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
          "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
          "requires": {
            "fast-deep-equal": "^3.1.3"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "schema-utils": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
          "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
          "requires": {
            "@types/json-schema": "^7.0.9",
            "ajv": "^8.8.0",
            "ajv-formats": "^2.1.1",
            "ajv-keywords": "^5.0.0"
          }
        },
        "ws": {
          "version": "8.8.0",
          "resolved": "https://registry.npmjs.org/ws/-/ws-8.8.0.tgz",
          "integrity": "sha512-JDAgSYQ1ksuwqfChJusw1LSJ8BizJ2e/vVu5Lxjq3YvNJNlROv1ui4i+c/kUUrPheBvQl4c5UbERhTwKa6QBJQ==",
          "requires": {}
        }
      }
    },
    "webpack-manifest-plugin": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/webpack-manifest-plugin/-/webpack-manifest-plugin-4.1.1.tgz",
      "integrity": "sha512-YXUAwxtfKIJIKkhg03MKuiFAD72PlrqCiwdwO4VEXdRO5V0ORCNwaOwAZawPZalCbmH9kBDmXnNeQOw+BIEiow==",
      "requires": {
        "tapable": "^2.0.0",
        "webpack-sources": "^2.2.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "webpack-sources": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-2.3.1.tgz",
          "integrity": "sha512-y9EI9AO42JjEcrTJFOYmVywVZdKVUfOvDUPsJea5GIr1JOEGFVqwlY2K098fFoIjOkDzHn2AjRvM8dsBZu+gCA==",
          "requires": {
            "source-list-map": "^2.0.1",
            "source-map": "^0.6.1"
          }
        }
      }
    },
    "webpack-sources": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.2.3.tgz",
      "integrity": "sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w=="
    },
    "websocket-driver": {
      "version": "0.7.4",
      "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.4.tgz",
      "integrity": "sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==",
      "requires": {
        "http-parser-js": ">=0.5.1",
        "safe-buffer": ">=5.1.0",
        "websocket-extensions": ">=0.1.1"
      }
    },
    "websocket-extensions": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
      "integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg=="
    },
    "whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "requires": {
        "iconv-lite": "0.4.24"
      },
      "dependencies": {
        "iconv-lite": {
          "version": "0.4.24",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
          "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3"
          }
        }
      }
    },
    "whatwg-fetch": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.6.2.tgz",
      "integrity": "sha512-bJlen0FcuU/0EMLrdbJ7zOnW6ITZLrZMIarMUVmdKtsGvZna8vxKYaexICWPfZ8qwf9fzNq+UEIZrnSaApt6RA=="
    },
    "whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="
    },
    "whatwg-url": {
      "version": "8.7.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.7.0.tgz",
      "integrity": "sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==",
      "requires": {
        "lodash": "^4.7.0",
        "tr46": "^2.1.0",
        "webidl-conversions": "^6.1.0"
      }
    },
    "which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "requires": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      }
    },
    "word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="
    },
    "workbox-background-sync": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-background-sync/-/workbox-background-sync-6.5.3.tgz",
      "integrity": "sha512-0DD/V05FAcek6tWv9XYj2w5T/plxhDSpclIcAGjA/b7t/6PdaRkQ7ZgtAX6Q/L7kV7wZ8uYRJUoH11VjNipMZw==",
      "requires": {
        "idb": "^6.1.4",
        "workbox-core": "6.5.3"
      }
    },
    "workbox-broadcast-update": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-broadcast-update/-/workbox-broadcast-update-6.5.3.tgz",
      "integrity": "sha512-4AwCIA5DiDrYhlN+Miv/fp5T3/whNmSL+KqhTwRBTZIL6pvTgE4lVuRzAt1JltmqyMcQ3SEfCdfxczuI4kwFQg==",
      "requires": {
        "workbox-core": "6.5.3"
      }
    },
    "workbox-build": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-build/-/workbox-build-6.5.3.tgz",
      "integrity": "sha512-8JNHHS7u13nhwIYCDea9MNXBNPHXCs5KDZPKI/ZNTr3f4sMGoD7hgFGecbyjX1gw4z6e9bMpMsOEJNyH5htA/w==",
      "requires": {
        "@apideck/better-ajv-errors": "^0.3.1",
        "@babel/core": "^7.11.1",
        "@babel/preset-env": "^7.11.0",
        "@babel/runtime": "^7.11.2",
        "@rollup/plugin-babel": "^5.2.0",
        "@rollup/plugin-node-resolve": "^11.2.1",
        "@rollup/plugin-replace": "^2.4.1",
        "@surma/rollup-plugin-off-main-thread": "^2.2.3",
        "ajv": "^8.6.0",
        "common-tags": "^1.8.0",
        "fast-json-stable-stringify": "^2.1.0",
        "fs-extra": "^9.0.1",
        "glob": "^7.1.6",
        "lodash": "^4.17.20",
        "pretty-bytes": "^5.3.0",
        "rollup": "^2.43.1",
        "rollup-plugin-terser": "^7.0.0",
        "source-map": "^0.8.0-beta.0",
        "stringify-object": "^3.3.0",
        "strip-comments": "^2.0.1",
        "tempy": "^0.6.0",
        "upath": "^1.2.0",
        "workbox-background-sync": "6.5.3",
        "workbox-broadcast-update": "6.5.3",
        "workbox-cacheable-response": "6.5.3",
        "workbox-core": "6.5.3",
        "workbox-expiration": "6.5.3",
        "workbox-google-analytics": "6.5.3",
        "workbox-navigation-preload": "6.5.3",
        "workbox-precaching": "6.5.3",
        "workbox-range-requests": "6.5.3",
        "workbox-recipes": "6.5.3",
        "workbox-routing": "6.5.3",
        "workbox-strategies": "6.5.3",
        "workbox-streams": "6.5.3",
        "workbox-sw": "6.5.3",
        "workbox-window": "6.5.3"
      },
      "dependencies": {
        "@apideck/better-ajv-errors": {
          "version": "0.3.4",
          "resolved": "https://registry.npmjs.org/@apideck/better-ajv-errors/-/better-ajv-errors-0.3.4.tgz",
          "integrity": "sha512-Ic2d8ZT6HJiSikGVQvSklaFyw1OUv4g8sDOxa0PXSlbmN/3gL5IO1WYY9DOwTDqOFmjWoqG1yaaKnPDqYCE9KA==",
          "requires": {
            "json-schema": "^0.4.0",
            "jsonpointer": "^5.0.0",
            "leven": "^3.1.0"
          }
        },
        "ajv": {
          "version": "8.11.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.11.0.tgz",
          "integrity": "sha512-wGgprdCvMalC0BztXvitD2hC04YffAvtsUn93JbGXYLAtCUO4xd17mCCZQxUOItiBwZvJScWo8NIvQMQ71rdpg==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "fs-extra": {
          "version": "9.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
          "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
          "requires": {
            "at-least-node": "^1.0.0",
            "graceful-fs": "^4.2.0",
            "jsonfile": "^6.0.1",
            "universalify": "^2.0.0"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "source-map": {
          "version": "0.8.0-beta.0",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.8.0-beta.0.tgz",
          "integrity": "sha512-2ymg6oRBpebeZi9UUNsgQ89bhx01TcTkmNTGnNO88imTmbSgy4nfujrgVEFKWpMTEGA11EDkTt7mqObTPdigIA==",
          "requires": {
            "whatwg-url": "^7.0.0"
          }
        },
        "tr46": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
          "integrity": "sha512-dTpowEjclQ7Kgx5SdBkqRzVhERQXov8/l9Ft9dVM9fmg0W0KQSVaXX9T4i6twCPNtYiZM53lpSSUAwJbFPOHxA==",
          "requires": {
            "punycode": "^2.1.0"
          }
        },
        "webidl-conversions": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
          "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg=="
        },
        "whatwg-url": {
          "version": "7.1.0",
          "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
          "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
          "requires": {
            "lodash.sortby": "^4.7.0",
            "tr46": "^1.0.1",
            "webidl-conversions": "^4.0.2"
          }
        }
      }
    },
    "workbox-cacheable-response": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-cacheable-response/-/workbox-cacheable-response-6.5.3.tgz",
      "integrity": "sha512-6JE/Zm05hNasHzzAGKDkqqgYtZZL2H06ic2GxuRLStA4S/rHUfm2mnLFFXuHAaGR1XuuYyVCEey1M6H3PdZ7SQ==",
      "requires": {
        "workbox-core": "6.5.3"
      }
    },
    "workbox-core": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-core/-/workbox-core-6.5.3.tgz",
      "integrity": "sha512-Bb9ey5n/M9x+l3fBTlLpHt9ASTzgSGj6vxni7pY72ilB/Pb3XtN+cZ9yueboVhD5+9cNQrC9n/E1fSrqWsUz7Q=="
    },
    "workbox-expiration": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-expiration/-/workbox-expiration-6.5.3.tgz",
      "integrity": "sha512-jzYopYR1zD04ZMdlbn/R2Ik6ixiXbi15c9iX5H8CTi6RPDz7uhvMLZPKEndZTpfgmUk8mdmT9Vx/AhbuCl5Sqw==",
      "requires": {
        "idb": "^6.1.4",
        "workbox-core": "6.5.3"
      }
    },
    "workbox-google-analytics": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-google-analytics/-/workbox-google-analytics-6.5.3.tgz",
      "integrity": "sha512-3GLCHotz5umoRSb4aNQeTbILETcrTVEozSfLhHSBaegHs1PnqCmN0zbIy2TjTpph2AGXiNwDrWGF0AN+UgDNTw==",
      "requires": {
        "workbox-background-sync": "6.5.3",
        "workbox-core": "6.5.3",
        "workbox-routing": "6.5.3",
        "workbox-strategies": "6.5.3"
      }
    },
    "workbox-navigation-preload": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-navigation-preload/-/workbox-navigation-preload-6.5.3.tgz",
      "integrity": "sha512-bK1gDFTc5iu6lH3UQ07QVo+0ovErhRNGvJJO/1ngknT0UQ702nmOUhoN9qE5mhuQSrnK+cqu7O7xeaJ+Rd9Tmg==",
      "requires": {
        "workbox-core": "6.5.3"
      }
    },
    "workbox-precaching": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-precaching/-/workbox-precaching-6.5.3.tgz",
      "integrity": "sha512-sjNfgNLSsRX5zcc63H/ar/hCf+T19fRtTqvWh795gdpghWb5xsfEkecXEvZ8biEi1QD7X/ljtHphdaPvXDygMQ==",
      "requires": {
        "workbox-core": "6.5.3",
        "workbox-routing": "6.5.3",
        "workbox-strategies": "6.5.3"
      }
    },
    "workbox-range-requests": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-range-requests/-/workbox-range-requests-6.5.3.tgz",
      "integrity": "sha512-pGCP80Bpn/0Q0MQsfETSfmtXsQcu3M2QCJwSFuJ6cDp8s2XmbUXkzbuQhCUzKR86ZH2Vex/VUjb2UaZBGamijA==",
      "requires": {
        "workbox-core": "6.5.3"
      }
    },
    "workbox-recipes": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-recipes/-/workbox-recipes-6.5.3.tgz",
      "integrity": "sha512-IcgiKYmbGiDvvf3PMSEtmwqxwfQ5zwI7OZPio3GWu4PfehA8jI8JHI3KZj+PCfRiUPZhjQHJ3v1HbNs+SiSkig==",
      "requires": {
        "workbox-cacheable-response": "6.5.3",
        "workbox-core": "6.5.3",
        "workbox-expiration": "6.5.3",
        "workbox-precaching": "6.5.3",
        "workbox-routing": "6.5.3",
        "workbox-strategies": "6.5.3"
      }
    },
    "workbox-routing": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-routing/-/workbox-routing-6.5.3.tgz",
      "integrity": "sha512-DFjxcuRAJjjt4T34RbMm3MCn+xnd36UT/2RfPRfa8VWJGItGJIn7tG+GwVTdHmvE54i/QmVTJepyAGWtoLPTmg==",
      "requires": {
        "workbox-core": "6.5.3"
      }
    },
    "workbox-strategies": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-strategies/-/workbox-strategies-6.5.3.tgz",
      "integrity": "sha512-MgmGRrDVXs7rtSCcetZgkSZyMpRGw8HqL2aguszOc3nUmzGZsT238z/NN9ZouCxSzDu3PQ3ZSKmovAacaIhu1w==",
      "requires": {
        "workbox-core": "6.5.3"
      }
    },
    "workbox-streams": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-streams/-/workbox-streams-6.5.3.tgz",
      "integrity": "sha512-vN4Qi8o+b7zj1FDVNZ+PlmAcy1sBoV7SC956uhqYvZ9Sg1fViSbOpydULOssVJ4tOyKRifH/eoi6h99d+sJ33w==",
      "requires": {
        "workbox-core": "6.5.3",
        "workbox-routing": "6.5.3"
      }
    },
    "workbox-sw": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-sw/-/workbox-sw-6.5.3.tgz",
      "integrity": "sha512-BQBzm092w+NqdIEF2yhl32dERt9j9MDGUTa2Eaa+o3YKL4Qqw55W9yQC6f44FdAHdAJrJvp0t+HVrfh8AiGj8A=="
    },
    "workbox-webpack-plugin": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/workbox-webpack-plugin/-/workbox-webpack-plugin-6.5.3.tgz",
      "integrity": "sha512-Es8Xr02Gi6Kc3zaUwR691ZLy61hz3vhhs5GztcklQ7kl5k2qAusPh0s6LF3wEtlpfs9ZDErnmy5SErwoll7jBA==",
      "requires": {
        "fast-json-stable-stringify": "^2.1.0",
        "pretty-bytes": "^5.4.1",
        "upath": "^1.2.0",
        "webpack-sources": "^1.4.3",
        "workbox-build": "6.5.3"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
