const KasSearch = (req, model) => {
    const { search } = req.query;
  
    if (search) {
      return model.find({
        $or: [
          { "nomor": { $regex: ".*" + search + ".*", $options: 'i' } },
        //   { "tanggal": { $regex: ".*" + search + ".*", $options: 'i' } },
        ]
      })
    }
  
    return model;
  }