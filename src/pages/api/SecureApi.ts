// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  [x: string]: any
}
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('accept', 'application/json');
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | null | undefined>
) {
  let finalRequest: any = {
    "auth": {
      "username": "devsafio",
      "token": "tokentokentokenABC"
    }
  }
  let errorState: boolean = false;
  let finalResponse: any = {};
  const url = "http://f11.cl:8090/";
  if (req.body.method == "getCarnesRealProyeccion") {
    finalRequest["query"] = req.body.query;
    finalResponse = await fetch(url + req.body.method, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(finalRequest),
    })
      .then((response) => response.json())
      .then((data: Data) => data)
      .catch((error) => {
        console.error("problema al consultar la api: " + error)
        errorState = true;
        return null;
      })
  } else if (req.body.method == "obtenerVariaciones" || req.body.method == "editorSemanal") {
    finalResponse = await fetch(url + req.body.method, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(finalRequest),
    })
      .then((response) => response.json())
      .then((data: Data) => data)
      .catch((error) => {
        console.error("problema al consultar la api: " + error)
        errorState = true;
        return null;
      })
  } else if (req.body.method == "editorVariables") {
    finalRequest["value_test"] = req.body.value_test;
  } else if (req.body.method != "probarVariable") {
    errorState = true;
  }

  if (req.body.method == "editorVariables" || req.body.method == "probarVariable") {
    finalRequest["var_name"] = req.body.var_name
    finalResponse = await fetch(url + req.body.method, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(finalRequest),
    })
      .then((response) => response.json())
      .then((data: Data) => data)
      .catch((error) => {
        console.error("problema al consultar la api: " + error)
        errorState = true;
        return null;
      })
  }

  if (errorState == true) {
    return res.status(500);
  } else {
    return res.status(200).json(finalResponse)
  }

}
