export const VERBS = {
  PUT: "PUT",
  POST: "POST",
  GET: "GET"
};

function constructGetParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

export default function apiRequestHelper(url, verb, data) {
  console.log("apirequest start", url);
  switch (verb) {
    case VERBS.POST: {
      const fetchOptions = {
        method: verb,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };

      //eslint-disable-next-line no-undef
      return fetch(url, fetchOptions).then(response => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
    }
    case VERBS.GET: {
      //url = url + `?${constructGetParams(data)}`;
      //eslint-disable-next-line no-undef
      return fetch(url, { body: `?${constructGetParams(data)}` }).then(
        response => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          return response.json();
        }
      );
    }
  }
}
