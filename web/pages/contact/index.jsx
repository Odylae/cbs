import Head from "next/head";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Form from "../../components/contact/form";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>CBS - Contact</title>
                <link rel="icon" href="/logoFondNoir.png" />
            </Head>

            <main>
                <Header />
                <Form />
                <Footer />
            </main>
        </div>
    );
}
