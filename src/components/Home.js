import React from 'react';
import '../styles/components/_home.css';

const Home = () => {
    return (
        <div className="bubble-generator">
            <div className="main-content">
                <div className="home-container container">
                <div className="cell">
                    <h1>
                    Hi, I am
                    <p>  Prahlad Kumar</p>
                    </h1>
                </div>
                <div className="cell">
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                </div>
                <div className="cell">
                    <ul>
                    <li className="fb"><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100009269886303"><i class="fab fa-facebook"></i></a></li>
                    <li className="insta"><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/prahlad_3086"><i class="fab fa-instagram"></i></a></li>
                    <li className="git"><a rel="noopener noreferrer" target="_blank" href="https://github.com/Prahlad3086"><i class="fab fa-github"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;