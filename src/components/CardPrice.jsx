import { Button } from '@mui/material'
import React from 'react'

const CardPrice = ({title, cost, message, contain= [], focus = false}) => {
  return (
    <div className={`container direction prices b-s ${focus ? 'focus' : ''}`}>
        <div className="container direction">
            <h3 className="big-title">{title}</h3>
            <h4 className="big-title sin-margin">{cost}</h4>
            <p className="text aling">{message}</p>
        </div>
        <div className="container direction">
            <div className="container direction prices-info">
                {
                    contain.map((text) => (
                        <div key={text} className="container">
                            <img className='chulito' src="assets\image 17.png" alt="chuleado verde" />
                            <p className="text sin-margin">{text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <Button
            variant="contained"
            sx={{
                textTransform: 'none',
                fontFamily: 'Quicksand, sans-serif',
                marginTop: '25px',
                fontWeight: '600',
                fontSize: '24px',
                borderRadius: '10px',
                backgroundColor: '#00BDD6',
                width: '300px'
            }}
        >Aplica ahora</Button>
    </div>
  )
}

export default CardPrice