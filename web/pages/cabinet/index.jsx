import Head from 'next/head'
import Description from '../../components/cabinet/description'
import Details from '../../components/cabinet/details'
import Missions from '../../components/cabinet/missions'
import Presentation from '../../components/cabinet/presentation'
import Signature from '../../components/cabinet/signature'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

export default function Cabinet() {
    return (
        <div>
            <Head>
                <meta name="robots" content="all" />
                <title>CBS - Le cabinet</title>
                <meta name="description" content="Un cabinet indépendant : CBS Expert-comptable. CBS = Conseil Business Services. Son fondateur est M. Sacha David." />
                <link rel="icon" href="/logoFavicon.png" />
            </Head>

            <main>
                <Header />
                <Presentation />
                <Description />
                <Details />
                <Missions />
                <Signature />
                <Footer />
            </main>
        </div>
    )
}