import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    // Pega a váriável, o modifica o valor
    // Permitindo novos cadsastros
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[whatsapp, setWhatsapp] = useState("");
    const[city, setCity] = useState("");
    const[uf, setUf] = useState("");

    // Importando useHistory permite que após o cadastro o usuário seja redirecionado para a página inicial
    const history = useHistory();

    // Função que pega os dados do formulário e salva no banco
    // Criando nova ONG    
    async function handleRegister(e){
        // Deixa a página de cadastro de ong estática 
        // Caso não exista alteração
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        
        // Trata sucesso e erro
        try {
        // usa a conexão axios e tenta o cadastro na rota especificada
        const response = await api.post('ongs', data);
        // Se der sucesso, retorna a ID do usuário
        alert(`Seu ID de acesso: ${response.data.id}`)
        // Aqui definide a página que o usuário será 
        history.push('/');
        }

        catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return(
        <div className="register-container">
            <div className="content">

                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                    
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />                        
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}