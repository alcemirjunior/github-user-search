import ButtonIcon from 'core/components/ButtonIcon'
import React, { useEffect } from 'react'
import './styles.scss'

const SearchCard = () => {

    



    return (
        <div className="search-card-container">
            <div className="search-card-content">
                <h1 className="search-title">
                    Encontre um perfil no Github
                </h1>

                <form>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="   Usuário Github"
                    />
                </form>

                <ButtonIcon text="Encontrar" />
            </div>
        </div>
    );
}

export default SearchCard;