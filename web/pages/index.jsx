import Head from "next/head";
import Footer from "../components/footer/footer";
import Actions from "../components/home/actions";
import Details from "../components/home/details";
import Presentation from "../components/home/presentation";

export default function Home() {
    return (
        <div>
            <Head>
                <title>CBS - Expert comptable</title>
                <link rel="icon" href="/logoFondNoir.png" />
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
