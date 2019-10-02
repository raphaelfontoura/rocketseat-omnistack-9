const User = require('../models/User');
// métodos do SessionController
// index, show, store, update, destroy

module.exports = {
    //por ser uma requisicao que salvará os dados no MongoDB Atlas
    // é necessário colocar o 'await' na chamada da criação do usuário
    // e colocar a função como assíncrona com 'async'
    async store(req, res) {
        //return res.json({ message: 'Hello World' })
        const { email } = req.body; 
        // const email = req.body.email; pode ser rescrito com reestruturação do javascript colocado o email em evidencia dentro de chaves.
        
        let user = await User.findOne({email});

        if (!user) {
            user = await User.create({ email });
        }
        //const user = await User.create({ email });

        return res.json(user);
    }
};