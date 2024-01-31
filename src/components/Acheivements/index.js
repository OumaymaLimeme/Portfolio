import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { acheivements } from '../../data/constants'


const Acheivements = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="acheivements">
      <Wrapper>
        <Title>Acheivements</Title>
        <CardContainer>
          {toggle === 'all' && acheivements
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {acheivements
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Acheivements