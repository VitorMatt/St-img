import { useState } from 'react';
import './CSS/App.css';
import icon_a from './assets/01.svg';
import icon_b from './assets/02.svg';
import icon_c from './assets/03.svg';
import icon_d from './assets/04.svg';
import icon_e from './assets/05.svg';
import icon_f from './assets/06.svg';
import icon_g from './assets/07.svg';
import random from './assets/random.svg';

function App() {

    const [nome, setNome] = useState('');
    const [inpt, setInpt] = useState('');
    const [image, setImage] = useState('');
    const images = [
        {
            img: icon_a, 
            description: 'Um momento em que você foi pego no flagra...'
        },
        {
            img: icon_b,
            description: 'Uma história que você precisou de ajuda ou socorreu alguém'
        },
        {
            img: icon_c,
            description: 'Um dia caótico com o tempo ruim.'
        },
        {
            img: icon_d,
            description: 'Um romance sob a brisa da lua...'
        },
        {
            img: icon_e,
            description: 'Uma situação em que você foi silenciado.'
        },
        {
            img: icon_f,
            description: 'Uma viagem maluca!'
        },
        {
            img: icon_g,
            description: 'Melhor dia de brincadeiras na rua!'
        }
    ];

    function submit(e, i) {

        e.preventDefault();
        randomImages();
        setNome(i);
        setInpt('');
    };

    function randomImages() {

        const imageChoice = Math.floor(Math.random() * images.length);

        setImage(images[imageChoice]);
    };

  return (
    <div className="container">
        <div className="box">
            <form onSubmit={(e) => submit(e, inpt)} className="form">
                <div className="title">
                    <h1>Random Images</h1>
                    <img src={random} className='random-initial' />
                </div>
                {
                    nome
                    ?
                    <>
                    <h3>{nome}, conte uma história com essa imagem.</h3>
                    <div className="random-image">
                        <img src={image.img} />
                    </div>
                    <h4>{image.description}</h4>
                    </>
                    :
                    <>
                    <div className="random-image">
                        <img src={random} />
                    </div>
                    <h4>Random Images</h4>
                    </>
                }
                <div className="inpt-button-container">
                    <input placeholder='Insira seu nome' value={inpt} onChange={(e) => setInpt(e.target.value)} type="text" className="inpt" />
                    <button type='submit' className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default App;