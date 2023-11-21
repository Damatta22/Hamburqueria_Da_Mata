import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import Product from '../app/models/Product'
import User from '../app/models/User'

import configDatabase from '../config/database'

const models = [User, Product]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }
  init() {
    this.connection = new Sequelize(configDatabase)
    models.map((model) => model.init(this.connection))
  }
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/mongoburguer',
      //{ useNewUrlParser: true, useUnifiedTopology: true },
    )
  }
}

export default new Database()
