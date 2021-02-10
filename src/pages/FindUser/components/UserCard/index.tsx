import ButtonIcon from 'core/components/ButtonIcon'
import { User } from 'core/types/Users';
import React from 'react'
import './styles.scss'

type Props = {
    user: User;
}

const UserCard = ({user}: Props) => {
    return(
    <div className="user-card-container">
        <div className="user-card-content">
            <div className="user-image">
                <img src={user.avatar_url} alt=""className="user-image"/>
            </div>
            <div className="user-information">
                <div className="up-information">
                    <div className="box">Repositórios públicos: {user.public_repos}</div>
                    <div className="box">seguidores: {user.followers}</div>
                    <div className="box">seguindo: {user.following}</div>
                </div>
                <div className="down-information">
                    <div className="down-information-content">
                        <h1 className="information-text">Informações</h1>
                        <div className="box-down-information"> <p className="text">Empresa: {user.company}</p></div>
                        <div className="box-down-information"><p className="text">Webite: {user.blog}</p></div>
                        <div className="box-down-information"><p className="text">Localidade: {user.location}</p></div>
                        <div className="box-down-information"><p className="text">Membro desde: {user.created_at}</p></div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="perfil-button">
        <a 
            href={`https://github.com/${user.login}`} 
            target="_blank" 
            rel="noreferrer">
                <ButtonIcon text="Ver Perfil"/>
        </a>
        
        </div>
    </div>
);
}
export default UserCard;