import Head from "next/head";
import Header from "../../components/header/header"
import Content from "../../components/mentionsLegales/content";

export default function MentionsLegales() {
    return (
        <div>
            <Head>
                <meta name="robots" content="none" />
                <title>CBS - Mentions légales</title>
                <meta name="description" content="CBS Expert-comptable à Poitiers. Cabinet d'expert comptable indépendant et à taille humaine. Orienté dans le conseil et l'accompagnement." />
                <link rel="icon" href="/logoFondNoir.png" />
            </Head>

            <main>
                <Header />
                <Content />
            </main>
        </div>
    )
}
