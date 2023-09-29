import { Button } from "@mui/material"


const Footer = () => {
  return (
    <>
        <div className="container direction">
            <div className="container footer">
                <div className="container direction footer-images">
                    <img className="dots dot-1" src="assets\Group 25.png" alt="" />
                    <img className="dots semi-circle" src="assets\Subtract.png" alt="" />
                </div>
                <div className="container direction footer-text">
                    <h3 className="big-title">¿Listo para iniciar?</h3>
                    <p className="text testimonio sin-margin big-size">Entra a nuestra comunidad en discord y conoce nuestros servicios</p>
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
                        >Aplica aquí</Button>
                </div>
                <div className="container direction footer-images">
                    <img className="dots dot-2" src="assets\Group 25.png" alt="" />
                </div>
            </div>
        </div>
        <div className="container condiciones">
            <p className="terminos">2023 Tech2Life • Privacy • Terminos</p>
            <div className="container iconos">
                <img src="assets\image 29.png" alt="" />
                <img src="assets\image 28.png" alt="" />
                <img src="assets\image 14.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Footer