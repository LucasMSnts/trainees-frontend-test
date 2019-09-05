import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './userDetail.css';
import UserRepos from '../../Pages/UserRepos';
//import isNull from '../isNull';

const UserDetail = ({ user }) => {

    return user ? (
        <div className="container">
            <img className='user-img' src={user.avatar_url} alt={user.name}></img>
            <div className="item">                 
                <h3>{user.name}</h3>                             
                <p><b>Compania: </b>{user.company}</p>
                <p><b>Localização: </b>{user.location}</p>
                <p><b>Bio: </b>{user.bio}</p>
                <p><b>Compania: </b>{user.company}</p>
                <p><b>Login: </b>{user.login}</p>
                <p><b>Conta Criada: </b>{user.created_at}</p>
                <p><b>Seguidores: </b>{user.followers}</p>
                <p><b>Seguindo: </b>{user.following}</p>
                <p><b>Email: </b>{(user.email === null ? 'Não informado' : user.email)}</p>
                <div>
                    <Link to={`/${user.login}/repos`}>
                        <button onClick={() => <UserRepos userR={user} key={user.id}/>} 
                        >
                            Ver Repositorios
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    ) : <div>Usuario não encontrado</div>
}

export default withRouter(UserDetail)