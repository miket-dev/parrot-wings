/* eslint-disable no-undef */
const post = function(url, data) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, fetchOptions).then(processResponse);
};

const get = function(url, data) {
  return fetch(
    url +
      `?${Object.keys(data).reduce(
        (acc, item) => (acc += "&" + item + data[item]),
        ""
      )}`
  ).then(processResponse);
};

const processResponse = response => {
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const realRequest = {
  get,
  post
};

export default realRequest;
