import ButtonIcon from 'core/components/ButtonIcon'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Home = () => (
    <div className="content">
       
        <h1 className="div-tittle">
            Desafio do Capítulo 3,<br/> Bootcamp DevSuperior
        </h1>
        
        <p className="description">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/><br/>
            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/><br/>
            Este design foi adaptado a partir de Ant Design System for Figma, de<br/>Mateusz Wierzbicki:<a href="antforfigma@gmail.com">antforfigma@gmail.com</a>
        </p>
       
       <Link to="/search" className="btn">
           <ButtonIcon text="Começar"/>
       </Link>
        
    </div>
    
);

export default Home;