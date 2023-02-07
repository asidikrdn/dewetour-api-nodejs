exports.trip = (router) => {
  router.get("/detail-trip/:id", (req, res) => {
    res.send("Heloo " + req.params.id);
  });
};
