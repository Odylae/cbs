import Head from "next/head";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Form from "../../components/recrutement/form";

export default function Recrutement() {
    return (
        <div>
            <Head>
                <meta name="robots" content="none" />
                <title>CBS - Rejoignez-nous</title>
                <meta name="description" content="Une expérience salariale unique. Dans un cabinet d'expert comptable indépendant et à taille humaine. Rejoignez notre équipe !" />
                <link rel="icon" href="/logoFavicon.png" />
            </Head>

            <main >
                <Header />
                <Form />
                <Footer />
            </main>
        </div>
    );
}
