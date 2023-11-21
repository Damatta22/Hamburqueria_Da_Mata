import Sequelize, { Model } from 'sequelize'
import CategoryController from '../controllers/CategoryController'

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      },
    )
    return this
  }
}

export default Category
