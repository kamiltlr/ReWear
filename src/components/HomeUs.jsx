import React from 'react';

function HomeUs() {
    return(
        <div id='us' className='us'>
            <div className="us-text">
                <h1>O nas</h1>
                <img src="../assets/Decoration.svg" alt="decoration"></img>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src="../assets/Signature.svg" alt="signature" className='us-signature' />
            </div>

            <div className="us-img">
                <img src="../assets/People.jpg" alt="people" />
            </div>
        </div>
    )
}

export default HomeUs;