import { Button, Grid } from '@mui/material'

const NavBar = () => {
  return (
    <Grid 
        container 
        direction="row" 
        justifyContent='center' 
        alignItems='center'
        sx={{width: '100%', backgroundColor: '#fff', height: '122px', boxShadow: '2px 2px 5px 3px rgba(0, 0, 0, 0.25)', position: 'fixed', top: '0', zIndex: '100'}}
    >
        <Grid container sx={{width: '80%'}}>
            <Grid item>
                <a href="/home">
                    <img style={{width: "300px"}} src="/assets/image2.png" alt="logo tech2life" />
                </a>
            </Grid>
            <Grid container alignItems='center' justifyContent='space-evenly' sx={{width: '50%', display: 'flex'}}>
                <a href='/home#rutas' className='link-navigation'>Rutas</a>
                <a href='/home#nosotros' className='link-navigation'>Nosotros</a>
                <a href='/home#precios' className='link-navigation'>Precios</a>
            </Grid>
        </Grid>
        <Grid container justifyContent='center' sx={{width: '15%'}}>
            <Button 
                variant="contained" 
                sx={{
                    textTransform: 'none', 
                    fontFamily: 'Quicksand, sans-serif', 
                    fontWeight: '600', 
                    fontSize: '24px', 
                    borderRadius: '10px', 
                    backgroundColor: '#00BDD6'
                }}
            >Aplica acá</Button>
        </Grid>
    </Grid>
  )
}

export default NavBar