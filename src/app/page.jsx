import React from 'react';




export const metadata = {
  title: 'Next.js Home Page',
  description: 'This is the home page of the Next.js app',
}



function HomePage() {
    return (
        <>
            <p style={{backgroundColor: 'white', color: 'black', padding: '10px', textAlign: 'center'}}>

                HI Hello, World!

            </p>
            <p style={{backgroundColor: 'white', color: 'black', padding: '10px', textAlign: 'center'}}>

                I am Home Page
                
            </p>
        </>
        
    );
}

export default HomePage;