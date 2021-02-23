import DCREntry from '../model/dcr.js';

export const getDCRs = async (req, res) => {
  try {
    const DCRs = await DCREntry.find();

    res.status(200).json(DCRs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  
}

export const createDCR = async (req, res) => {
  const dcr = req.body;

  // if(!req.userId) return res.json({ message: 'Unauthenticated'});

  const newDCR = new DCREntry(dcr);
  try {
    await newDCR.save();

    res.status(201).json(newDCR);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}