import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionLevels = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
        <Accordion sx={{width: '100%', marginBottom: '50px', borderRadius: '20px'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
            width: '100%',
            padding: '0 80px',
            }}
        >
            <div className="container">
            <img className='img-acordeon' src="assets\T2L\1nivel_png 1.png" alt="nivel 1" />
            <p className="text big-size color">Fundamentos de programación</p>
            </div>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            width: '75%',
            padding: '0 80px',
            }}
        >
            <p className='text big-size'>
            En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
            </p>
        </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%', marginBottom: '70px', borderRadius: '20px'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{
            width: '100%',
            padding: '0 80px',
            }}
        >
            <div className="container">
            <img className='img-acordeon' src="assets\T2L\nivel2_png 1.png" alt="nivel 1" />
            <p className="text big-size color">Fundamentos del Diseño de productos digitales</p>
            </div>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            width: '75%',
            padding: '0 80px',
            }}
        >
            <p className='text big-size'>
            En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
            </p>
        </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%', marginBottom: '70px', borderRadius: '20px'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{
            width: '100%',
            padding: '0 80px',
            }}
        >
            <div className="container">
            <img className='img-acordeon' src="assets\T2L\nivel3_png 1.png" alt="nivel 1" />
            <p className="text big-size color">UI | Diseño de interfaces & usabilidad</p>
            </div>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            width: '75%',
            padding: '0 80px',
            }}
        >
            <p className='text big-size'>
            En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
            </p>
        </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%', marginBottom: '70px', borderRadius: '20px'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
            width: '100%',
            padding: '0 80px',
            }}
        >
            <div className="container">
            <img className='img-acordeon' src="assets\T2L\nivel4_png 1.png" alt="nivel 1" />
            <p className="text big-size color">UX | Metodologías de research</p>
            </div>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            width: '75%',
            padding: '0 80px',
            }}
        >
            <p className='text big-size'>
            En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
            </p>
        </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%', marginBottom: '70px', borderRadius: '20px'}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{
            width: '100%',
            padding: '0 80px',
            }}
        >
            <div className="container">
            <img className='img-acordeon' src="assets\T2L\nivel5_png 1.png" alt="nivel 1" />
            <p className="text big-size color">Design System - prototipado y testing</p>
            </div>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            width: '75%',
            padding: '0 80px',
            }}
        >
            <p className='text big-size'>
            En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
            </p>
        </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%', marginBottom: '70px', borderRadius: '20px'}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
            sx={{
            width: '100%',
            padding: '0 80px',
            }}
        >
            <div className="container">
            <img className='img-acordeon' src="assets\T2L\nivel6_png 1.png" alt="nivel 1" />
            <p className="text big-size color">UX Writing & Stroytelling</p>
            </div>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            width: '75%',
            padding: '0 80px',
            }}
        >
            <p className='text big-size'>
            En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
            </p>
        </AccordionDetails>
        </Accordion>
    </>
  )
}

export default AccordionLevels