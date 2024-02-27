const List  = require('../models/List');

exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.findAll();
    res.status(200).json({ success: true, data: lists });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getListById = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByPk(id);
    if (!list) {
      return res.status(404).json({ success: false, message: 'List not found' });
    }
    res.status(200).json({ success: true, data: list });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.createList = async (req, res) => {
  const { title, desc, status } = req.body;
  const username = req.username;
  try {
    const newList = await List.create({ title, desc, status, username });
    res.status(201).json({ success: true, data: newList });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateList = async (req, res) => {
  const { id } = req.params;
  const { title, desc, status } = req.body;
  const username = req.username;
  try {
    const list = await List.findByPk(id);
    if (!list) {
      return res.status(404).json({ success: false, message: 'List not found' });
    }
    await list.update({ title, desc, status, username });
    res.status(200).json({ success: true, message: 'List updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteList = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByPk(id);
    if (!list) {
      return res.status(404).json({ success: false, message: 'List not found' });
    }
    await list.destroy();
    res.status(200).json({ success: true, message: 'List deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getListByUser = async (req, res) => {
  const { username } = req.params;
  try {
    const lists = await List.findAll({ where: { username } });
    res.status(200).json({ success: true, data: lists });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getListsByAuthenticatedUser = async (req, res) => {
  const username = req.username;
  try {
    const lists = await List.findAll({ where: { username } });
    res.status(200).json({ success: true, data: lists });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
