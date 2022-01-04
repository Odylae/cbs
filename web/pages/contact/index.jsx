import Head from "next/head";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Form from "../../components/contact/form";

export default function Contact() {
    return (
        <div>
            <Head>
                <meta name="robots" content="all" />
                <title>CBS - Contactez-nous</title>
                <meta name="description" content="Contactez CBS Expert-comptable. Cabinet d'expert comptable à votre écoute pour vous accompagner. Vous et votre entreprise." />
                <link rel="icon" href="/logoFavicon.png" />
            </Head>

            <main>
                <Header />
                <Form />
                <Footer />
            </main>
        </div>
    );
}
