import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    console.log(siteConfig)
    return (
        <Layout
            title="guychienll.dev"
            description="Description will go into a meta tag in <head />"
        ></Layout>
    )
}
