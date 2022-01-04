import Head from "next/head";
import Footer from "../components/footer/footer";
import Actions from "../components/home/actions";
import Details from "../components/home/details";
import Presentation from "../components/home/presentation";

export default function Home() {
    return (
        <div>
            <Head>
                <meta name="robots" content="all" />
                <title>CBS - Le cabinet d'expert comptable qui est là pour vous accompagner dans votre (futur) projet</title>
                <meta name="description" content="CBS Expert-comptable à Poitiers. Cabinet d'expert comptable indépendant et à taille humaine. Orienté dans le conseil et l'accompagnement." />
                <link rel="icon" href="/logoFavicon.png" />
            </Head>

            <main>
                <Presentation />
                <Details />
                <Actions />
                <Footer />
            </main>
        </div>
    );
}
