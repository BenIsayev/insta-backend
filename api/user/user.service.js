const {makeId} = require('../../services/util');
const dbService = require('../../services/db.service');
const {ObjectId} = require('mongodb');

const query = async () => {
  const collection = await dbService.getCollection('user');
  const users = await collection.find().toArray();
  return users;
};

const getUserById = async (id) => {
  try {
    const collection = await dbService.getCollection('user');
    return await collection.findOne({_id: ObjectId(id)});
  } catch (err) {
    throw new Error(err);
  }
};

const getUserByUsername = async (username) => {
  try {
    const collection = await dbService.getCollection('user');
    return await collection.findOne({username});
  } catch (err) {
    throw new Error(err);
  }
};

const add = async (user) => {
  try {
    const collection = await dbService.getCollection('user');
    await collection.insertOne(user);
    return user;
  } catch (err) {
    return new Error('Could not add user');
  }
};

module.exports = {
  getUserById,
  getUserByUsername,
  add,
  query,
};
