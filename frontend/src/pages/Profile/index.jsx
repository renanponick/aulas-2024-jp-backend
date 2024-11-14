import { useEffect, useState } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import { getSession } from '../../api/person';

export default function Profile() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [updNome, setUpdNome] = useState('');
  const [updEmail, setUpdEmail] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  async function carregarPerfil() {
    const response = await getSession()

    setNome(response.msg.name)
    setEmail(response.msg.email)
    setId(response.msg.id)

    return
  }

  const handleSaveUpdate = async () => {
    console.log(updNome, updEmail)
  }

  const handleClickUpdate = () => {
    setIsUpdate(true)
    setUpdNome(nome)
    setUpdEmail(email)
  }

  const handleClickDelete = async () => {
    const response = prompt("Para confirmar exclusão digite seu email:")

    if(response === email) {
      console.log('Excluindo...')
    } else {
      alert("Nome Inválido, processo cancelado.")
    }
  }

  useEffect(() => {
    async function getConteudo() {
        carregarPerfil()
    }
    getConteudo()
  }, [])

  return (
    <div className='profile'>
      <div className='info'>
        <h1>Dados do seu perfil</h1>
        <p>Nome: {
          !isUpdate
            ? nome
            : <input type='text' id="nome" value={updNome} onChange={(e) => setUpdNome(e.target.value)}/>
          }
        </p>
        <p>Email: {
          !isUpdate
            ? email 
            : <input type='email' id="email" value={updEmail} onChange={(e) => setUpdEmail(e.target.value)}/>
          }
        </p>
        {
        !isUpdate ? 
          <div className='actions'>
            <button
              onClick={handleClickDelete}
            >Excluir Conta</button>
            <button
              className='primary'
              onClick={handleClickUpdate}
            >Alterar Dados</button>
          </div>
        : <div className='actions'>
            <button
              onClick={() => setIsUpdate(false)}
            >Cancelar</button>
            <button
              className='primary'
              onClick={handleSaveUpdate}
            >Salvar</button>
          </div>
        }
      </div>
    </div>
  )
}
