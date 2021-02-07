import ButtonIcon from 'core/components/ButtonIcon'
import React, { useState } from 'react'
import axios from 'axios';
import './styles.scss'
import { Usuario } from 'core/types/Usuario';
import UserCard from '../UserCard';

type FormState = {
    name: string;
}

const SearchCard = () => {

    const [formData, setFormData] = useState<FormState>({
        name: ''
    });

    console.log(formData.name);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const [userResponse, setUserResponse] = useState<Usuario>();

    console.log(userResponse);

    const handleSubimit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const BASE_URL = 'http://localhost:3000/'

        axios(`${BASE_URL}${formData.name}`)
            .then(response => setUserResponse(response.data));

    }

    return (
        <div>
            <div className="search-container">
                <div className="search-card-content">
                    <h1 className="search-title">
                        Encontre um perfil no Github
                </h1>

                    <form onSubmit={handleSubimit}>
                        <input
                            value={formData.name}
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={handleOnChange}
                            placeholder="Usuário Github"
                        />
                        <ButtonIcon text="Encontrar" />
                    </form>

                </div>
            </div>
            <div>
                <UserCard />
            </div>

        </div>
    );
}

export default SearchCard;