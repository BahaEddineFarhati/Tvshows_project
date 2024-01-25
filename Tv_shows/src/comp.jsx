import React from 'react';
import './comp.css';
import gotImg from './assets/got.jpg';
import ProgressBar from './progressbar.jsx';

function comp(props){


    const [progressPercentage, setProgressPercentage] = React.useState(props.props.prog);





    const handleIncreaseProgress = () => {
        setProgressPercentage((prevPercentage) => Math.min(prevPercentage + 10, 100));
      };
    
      const handleDecreaseProgress = () => {
        setProgressPercentage((prevPercentage) => Math.max(prevPercentage - 10, 0));
      };


    console.log(props)
    return(
        <div className='main'>
            <h1 className='title'>{props.props.title}</h1>
            <div className='image_container' onClick={handleIncreaseProgress}>
                <img src={props.props.img} alt="film_image" />
                <h3 className='play'>▶ Next Episode</h3>
                <ProgressBar percentage={progressPercentage} />
                <div className='progress'>
                    <h2><span class="bold-text">Saison</span> 1 <span class="bold-text">Ep</span> 7</h2>
                </div>  
            </div>  
        </div>
    )
}

export default comp