import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


function DefaultComponent() {
    return (
    <div className="flex flex-col items-center mt-10">
 <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/private_files/lf30_zdkoi7jh.json"
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
            <h1 className="text-2xl font-bold mt-4">Welcome to the Settings page!</h1>
    <p className="text-lg mt-2">Please select a option from the left menu to view its corresponding page.</p>
  </div >
  );
}

export default DefaultComponent;
