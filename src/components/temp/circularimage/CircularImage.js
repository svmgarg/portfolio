import React from 'react';
import Image from 'react-bootstrap/Image'




function CircularImage(props) {
    const circularDiv = {
        width : 'inherit',
        height : 'inherit',
        borderRadius: '50%',
        backgroundColor: 'blue',
        textAlign: 'center',
        verticalAlign : 'middle'
    }

    const circularDiv2 = {
        width : '95%',
        height : '95%',
        borderRadius: '50%',
        backgroundColor: 'red',
        textAlign: 'center',
        verticalAlign : 'middle'
    }
    const imgStyle = {
        width : 'inherit',
        height : 'inherit',
        borderRadius: '50%',
        verticalAlign : 'middle'
    }

    return (
        <Image src="https://kelvinwilliams.dev/img/profile.png"  style={imgStyle} />
    )
}

export default CircularImage;