import ButtonIcon from 'core/components/ButtonIcon'
import React, { useState } from 'react'
import axios from 'axios';
import './styles.scss'
import { User } from 'core/types/Users';
import UserCard from '../UserCard';
import ImageLoader from '../Loaders/ImageLoader';
import ProductInfoLoader from '../Loaders/ProductInfoLoader';

type FormState = {
    name: string;
}

const SearchCard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [finishLoading, setFinishLoading] = useState(false);
    const [formData, setFormData] = useState<FormState>({
        name: '',
    });

    console.log(formData.name);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const [userResponse, setUserResponse] = useState<User>({
        avatar_url: '',
        bio: '',
        blog: '',
        company: '',
        created_at: '',
        email: '',
        events_url: '',
        followers: 0,
        followers_url: '',
        following: 0,
        following_url: '',
        gists_url: '',
        gravatar_id: '',
        hireable: false,
        html_url: '',
        id: 0,
        location: '',
        login: '',
        name: '',
        node_id: '',
        organizations_url: '',
        public_gists: 0,
        public_repos: 0,
        received_events_url: '',
        repos_url: '',
        site_admin: false,
        starred_url: '',
        subscriptions_url: '',
        twitter_username: '',
        type: '',
        updated_at: '',
        url: ''
    });

    console.log(userResponse);

    const handleSubimit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const BASE_URL = 'http://localhost:3000/'
        setFinishLoading(false);
        setIsLoading(true);
        axios(`${BASE_URL}${formData.name}`)
            .then(response => setUserResponse(response.data))
            
            .finally(()=>{
                setIsLoading(false);
                setFinishLoading(true);
            })
            
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
               {isLoading ? <div className="loaders"><ImageLoader/> <ProductInfoLoader/></div> : (null)}
               {finishLoading ? <UserCard user={userResponse}/> : (null)}
            </div>
        </div>
    );
}

export default SearchCard;