import React from 'react';
import Moment from '../assets/images/moment.jpg';

class IntroComponent extends React.Component {
    render() {
        return (
            <section class="section hero" aria-label="home">
                <div class="container">

                    <h1 class="headline-lg hero-title">
                        Discover rate
                        collection <span class="span">Cards & NFTs</span>
                    </h1>

                    <p class="section-text body-lg">
                        We are a huge marketplace dedicated to connecting great artists of all Metalink with their fans
                        and unique
                        token collectors!
                    </p>
                    <br></br>
                    <img src={Moment} width={1000} height={800} style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}  ></img>

                </div>
            </section >
        )
    }
}

export default IntroComponent;