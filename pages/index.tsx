import React from 'react'
import { NextPage } from 'next'

import AboutMe from '../components/AboutMe'

const IndexPage: NextPage<{}> = () => (
    <AboutMe speed={70} title="Mahen Seneviratne" />
)

export default IndexPage
