import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome_completo: Sequelize.STRING,
      data_nascimento: Sequelize.DATE,
      sexo: {
        type: Sequelize.ENUM,
        values: ['M', 'F', 'O']
      },
      email: Sequelize.STRING,
      senha_virtual: Sequelize.VIRTUAL,
      senha: Sequelize.STRING,
      cpf: Sequelize.STRING,
      status_ativo: Sequelize.BOOLEAN,
    },{
      sequelize,
      tableName: 'usuario'
    });
  
    this.addHook('beforeSave', async(usuario) => {
      if(usuario.senha_virtual) {
        usuario.senha = await bcrypt.hash(usuario.senha_virtual, 8); 
      }
    });

    return this; 
  }
}

export default Usuario;