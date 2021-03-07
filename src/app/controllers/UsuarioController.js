import Usuario from '../models/Usuario';

class UsuarioController {
  async create(req, res) {

    const userExists  = await Usuario.findOne({ where: { email: req.body.email } });

    if(userExists) {
      return res.status(400).json({ error: 'User already exists'});
    }

    const cpfExists = await Usuario.findOne({ where: { cpf: req.body.cpf }});

    if(cpfExists) {
      return res.status(400).json({ error: 'CPF já cadastrado'})
    }

    let r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    if(r.test(req.body.senha_virtual) == false ) {
      return res.status(401).json({ error: 'O campo senha tem que ter ao menos um dígito, uma letra minúscula, uma letra maiúscula, um caractere especial, 8 dos caracteres mencionados'});
    }

    const {id, nome_completo, email }= await Usuario.create(req.body);


    return res.json({
      id,
      nome_completo,
      email,
    });
  }
}

export default new UsuarioController();