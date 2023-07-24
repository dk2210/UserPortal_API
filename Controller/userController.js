const User = require("../Model/useModel");

const getData = async (req, res, next) => {
  try {
    const data = await User.find();
    res.status(200).json({ sucess: true, data: data });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: "Show all datas" });
  }
};


const createData = async (req, res) => {
  console.log(req.body, "create");
  try {
    const data = await User.create(req.body);
    console.log(data, "create");
    res.status(200).json({ sucess: true, data: data });
  } catch (err){
    console.log(err, "error")
    res.status(400).json({ sucess: false });
  }
};

const deleteData = async (req, res) => {
  const data = await User.findByIdAndDelete(req.params.id);
  if (!data) {
    res.status(400).json({ sucess: false, data: {} });
  }
  res.status(200).json({ sucess: true, data: data });
};

const updateData = async (req, res) => {
  const data = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    res.status(400).json({ sucess: false, data: {} });
  }
  res.status(200).json({ sucess: true, data: data });
};

const getDataById = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        console.log("Getting the data:", data)
        res.status(200).json({ sucess: true, data: data });
      } catch (err) {
        res.status(400).json({ sucess: false, msg: "Show all datas" });
      }
}

module.exports = {
  getData,
  createData,
  deleteData,
  updateData,
  getDataById
};