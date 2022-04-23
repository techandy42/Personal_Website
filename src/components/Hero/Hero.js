import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome! <br />
        My name is Andy Lee
      </SectionTitle>
      <SectionText>
        Hello, my name is Andy Lee. I am a software engineer based in University
        of Waterloo, specializing in full-stack and smart contract development.
      </SectionText>
      <a href='https://github.com/gitHubAndyLee2020' target='_blank'>
        <Button>Learn More</Button>
      </a>
    </LeftSection>
  </Section>
)

export default Hero
