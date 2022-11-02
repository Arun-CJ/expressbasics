module.exports = {
  addUser: async (req, res) => {
    try {
      //   console.log(req.body);
      const data = req.body;
      const userData = new userModel({
        name: data.name,
        email: data.email,
        country: data.country,
        age: data.age,
      });
      userData
        .save()
        .then((insertedData) => {
          console.log("insertedData", insertedData);
          return res.send({ message: "User added successfully" });
        })
        .catch((err) => {
          console.log("mongo insert error", err);
          return res.status(400).send({ message: "User data is not inserted" });
        });
    } catch (error) {
      console.log(error);
    }
  },
  editUser: async (req, res) => {
    try {
      const email = req.params.email;
    } catch (error) {
      console.log(error);
    }
  },
};
