/* eslint-disable */
function fakeLogin(opts) {
  let { username } = opts.body;
  return {
    id: 1,
    username
  };
}

function fakeBalance() {
  return 500;
}

function fakeTransactions() {
  return [
    {
      id: 1,
      number: 1,
      userTo: {
        id: 1,
        name: "User 1"
      },
      type: "Debit",
      date: new Date(),
      amount: 150,
      resource: 350
    },
    {
      id: 2,
      number: 2,
      userTo: {
        id: 2,
        name: "User 2"
      },
      type: "Debit",
      date: new Date(),
      amount: 100,
      resource: 250
    }
  ];
}

function fakeUsers() {
  return [
    {
      id: 1,
      name: "Darth Vader"
    },
    {
      id: 2,
      name: "Clark Kent"
    },
    {
      id: 3,
      name: "Bruce Wayne"
    }
  ];
}

function fakeTransfer() {
  return {
    complete: true
  };
}

function fakeTemplates() {
  return [
    {
      id: 1,
      toUserId: 1,
      amount: 150
    },
    {
      id: 2,
      toUserId: 2,
      amount: 100
    }
  ];
}

function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("fake fetch executing", `url: ${url}`);
        if (url.endsWith("/login") && opts.method === "POST") {
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(fakeLogin(opts))
          });
          return;
        }

        if (url.endsWith("/balance") && opts.method === "GET") {
          console.log("executing fake balance");
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(fakeBalance())
          });
          return;
        }

        if (url.endsWith("/transactions") && opts.method === "POST") {
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(fakeTransactions())
          });
          return;
        }

        if (url.endsWith("/users") && opts.method === "GET") {
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(fakeUsers())
          });
          return;
        }

        if (url.endsWith("/transfer") && opts.method === "POST") {
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(fakeTransfer())
          });
          return;
        }

        if (url.endsWith("/template") && opts.method === "GET") {
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(fakeTemplates())
          });
          return;
        }

        if (url.endsWith("/template") && opts.method === "POST") {
          resolve({
            ok: true,
            status: 200,
            json: () =>
              Promise.resolve({
                id: 5,
                toUserId: 1,
                amount: 20
              })
          });
          return;
        }

        resolve({
          ok: false,
          status: 500
        });
      }, 500);
    });
  };
}

export default configureFakeBackend;
