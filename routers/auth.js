exports.auth = (router) => {
  // login endpoint
  router.get("/login", (req, res) => {
    res.send("Ini halaman login");
  });

  // register endpoint
  router.get("/register", (req, res) => {
    res.status(200).send({ nama: "Ahmad Sidik Rudini", umur: 24 });
  });
};
