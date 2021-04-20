import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Name from './components/name';
import Image from './components/image';
import Select from './components/select';
import Logo from './components/logo';
import Lazyload from './components/lazyload';

const API = 'https://hp-api.herokuapp.com/api/characters'

let houses = {
    gryffindor: 'https://i.pinimg.com/originals/57/1c/05/571c05cafaaeb23da51886f4365ea7ad.jpg',
    slytherin: 'https://i.pinimg.com/originals/de/d8/7e/ded87e4b3dad3327988511af87724206.jpg',
    hufflepuff: 'https://i.pinimg.com/originals/8f/0c/8d/8f0c8d13613ae7533fbabec3ad4046f2.jpg',
    ravenclaw: 'https://i.pinimg.com/564x/25/ee/9d/25ee9d03b070a1bb34d4015e6b61a55c.jpg'
}

const App = () => {

    let [hogwarts, setHog] = useState([])
    let [name, setName] = useState('')
    let [img, setImg] = useState('')
    let [logo, setLog] = useState('')
    let [isFetching, setFetch] = useState(true)

    useEffect( () => {
        fetch(API)
            .then( r => r.json() )
            .then( r => {
                setHog(r)
                setName(r[0].name)
                setImg(r[0].image)
                setLog(houses[r[0].house.toLowerCase()])
            })
            .finally( setFetch(false) )
            //.finally( () => {
            //    //setTimeout(() => setFetch(false), 5000 )
            //})
    }, [])

    function handleChange(event) {
        let {value} = event.target
        let dados = hogwarts.filter( item => item.name === value )
        setName(dados[0].name)
        setImg(dados[0].image)
        setLog(houses[dados[0].house.toLowerCase()])
    }

    return (
        <div>
            <Header />
            <div className="main">

                <Lazyload width={'300px'} height={'300px'} fetch={isFetching}>
                    <Logo image={logo} />
                </Lazyload>

                <div className="wrapper">
                    <Lazyload width={'150px'} height={'30px'} fetch={isFetching}>
                        <Name name={name} />
                    </Lazyload>
                    <Lazyload width={'160px'} height={'220px'} fetch={isFetching}>
                        <Image image={img} />
                    </Lazyload>
                </div>
                
                <Lazyload width={'150px'} height={'30px'} fetch={isFetching}>
                    <Select 
                        onChangeSelect={handleChange} 
                        hogwarts={hogwarts.map( ({name}) => (
                            <option key={name} value={name}>{name}</option>))}
                    />
                </Lazyload>
            </div>
        </div>
    )
}

export default App