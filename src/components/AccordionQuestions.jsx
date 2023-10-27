import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { questions } from '../data/questions';

const AccordionQuestions = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
        
        {
            questions.map((question, id) => (
                <Accordion sx={{width: '100%'}} expanded={expanded === `panel${id+1}`} onChange={handleChange(`panel${id+1}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${id+1}bh-content`}
                        id={`panel${id+1}bh-header`}
                    >
                        <div className="container">
                            <p className="text big-size color">{question.title}</p>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{width: '100%'}}
                    >
                        <p className='text big-size'>
                        {question.contain}
                        </p>
                    </AccordionDetails>
                </Accordion>
            ))
        }
        
        {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <div className="container">
                    <p className="text big-size color">1. ¿Qué lenguaje de programacion enseñan?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <div className="container">
                    <p className="text big-size color">2. ¿Cuanto tiempo dura la capacitación?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <div className="container">
                    <p className="text big-size color">3. ¿Por qué Tech2Life?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
            >
                <div className="container">
                    <p className="text big-size color">4. ¿Es 100% online?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
            >
                <div className="container">
                    <p className="text big-size color">5. ¿Cúal es el costo?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
            >
                <div className="container">
                    <p className="text big-size color">6. ¿Puedo darme de baja cuando quiera?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
            >
                <div className="container">
                    <p className="text big-size color">7. ¿Cómo es el proceso?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel8bh-content"
                id="panel8bh-header"
            >
                <div className="container">
                    <p className="text big-size color">8. ¿A qué rutas o información tendré acceso?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel9bh-content"
                id="panel9bh-header"
            >
                <div className="container">
                    <p className="text big-size color">9. ¿Cómo inicio el proceso?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel10bh-content"
                id="panel10bh-header"
            >
                <div className="container">
                    <p className="text big-size color">10. ¿Si tengo experiencia desarrollando me sirve igual iniciar en Tech2Life?</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text big-size'>
                En este nivel te sumergirás en los fundamentos del diseño de productos digitales, aprendiendo cómo ser un Product Designer y explorando los fundamentos de UX/UI. Además, adquirirás conocimientos sobre metodologías de diseño y modelos de comportamiento humano.
                </p>
            </AccordionDetails>
        </Accordion> */}
    </>
  )
}

export default AccordionQuestions