import Head from 'next/head'
import React from 'react'
//@ts-ignore
export default function Body(props) {
    return (
        <main>
            <Head>
                <title className="notranslate">{props.title + ' - Araxyso'}</title>
            </Head>
            {props.children}
        </main>
    )
} 