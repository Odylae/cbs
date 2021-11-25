import Head from "next/head";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Form from "../../components/recrutement/form";

export default function Recrutement() {
    return (
        <div>
            <Head>
                <title>CBS - Recrutement</title>
                <link rel="icon" href="/logoFondNoir.png" />
            </Head>

            <main >
                <Header />
                <Form />
                <Footer />
            </main>
        </div>
    );
}
