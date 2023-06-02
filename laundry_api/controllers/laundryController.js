const { Laundry } = require('../models');

const getLaundries = async (req, res) => {
  try {
    const laundries = await Laundry.findAll({ where: { userId: req.user.id } });
    res.status(200).json({ laundries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createLaundry = async (req, res) => {
  const { description } = req.body;

  try {
    const laundry = await Laundry.create({ userId: req.user.id, description });
    res.status(201).json({ message: 'Berhasil menambahkan laundry', laundry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateLaundry = async (req, res) => {
  const { description } = req.body;

  try {
    const laundry = await Laundry.findByPk(req.params.id);
    if (!laundry) {
      return res.status(404).json({ message: 'Laundry not found' });
    }

    laundry.description = description;
    await laundry.save();

    res.status(200).json({ message: 'Berhasil mengupdate laundry', laundry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteLaundry = async (req, res) => {
  try {
    const laundry = await Laundry.findByPk(req.params.id);
    if (!laundry) {
      return res.status(404).json({ message: 'Laundry not found' });
    }

    await laundry.destroy();

    res.status(204).json({ message: 'Berhasil menghapus laundry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getLaundries, createLaundry, updateLaundry, deleteLaundry };
