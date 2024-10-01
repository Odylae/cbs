import axios from "axios";
import React, {useState} from "react";
import Swal from "sweetalert2";
import DropzoneInput from "../global/input/dropzone";
import Input from "../global/input/input";

export default function Form() {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [email, setEmail] = useState();
    const [tel, setTel] = useState();
    const [cv, setCv] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Créer un objet FormData pour envoyer des données avec un fichier
        const formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("tel", tel);
        formData.append("birthDate", birthdate);

        for (const file of cv) {
            formData.append("attachment", file);
        }

        try {
            const response = await axios.post("/api/recrutement", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Gérer la réponse du serveur
            Swal.fire({
                icon: "success",
                title: "Message envoyé avec succès",
                text: response.data.message,
            });
        } catch (error) {
            console.error("Erreur lors de l'envoi de la requête :", error);
            Swal.fire({
                icon: "error",
                title: "Échec de l'envoi du message",
                text: "Veuillez vérifier les informations saisies et réessayer.",
            });
        }
    };

    return (
        <div className="relative bg-white mt-6">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative lg:px-24 lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:pl-0 lg:pr-24 xl:pr-32">
                    <div className="">
                        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-900 my-10">
                            Prêt pour une nouvelle aventure salariale ?
                        </h1>
                        <p className="mt-3 text-lg leading-6 text-gray-500 mb-10">
                            Une expérience humaine unique, dans un cadre
                            bienveillant et formateur.
                        </p>
                        <p className="mt-3 text-lg leading-6 text-gray-500 mb-10">
                            Renseignez vos informations et déposez vos
                            curriculum vitae.
                        </p>
                    </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            className="grid grid-cols-2 gap-6"
                        >
                            <Input
                                name={"firstname"}
                                input={firstname}
                                setInput={setFirstname}
                                autoComplete="given-name"
                                type="text"
                                label="Nom"
                                required="true"
                                className="col-span-2 lg:col-span-1"
                            />
                            <Input
                                name={"lastname"}
                                input={lastname}
                                setInput={setLastname}
                                autoComplete="family-name"
                                type="text"
                                label="Prénom"
                                required="true"
                                className="col-span-2 lg:col-span-1"
                            />
                            <Input
                                name={"birthdate"}
                                input={birthdate}
                                setInput={setBirthdate}
                                type="date"
                                autoComplete="bday"
                                label="Date de naissance"
                                required="true"
                                className="col-span-2"
                            />
                            <Input
                                name={"email"}
                                input={email}
                                setInput={setEmail}
                                type="email"
                                autoComplete="email"
                                label="Email"
                                required="true"
                                className="col-span-2 lg:col-span-1"
                            />
                            <Input
                                name={"tel"}
                                input={tel}
                                setInput={setTel}
                                type="tel"
                                autoComplete="tel"
                                label="Téléphone"
                                required="true"
                                className="col-span-2 lg:col-span-1"
                            />
                            <DropzoneInput
                                file={cv}
                                setFile={setCv}
                                name="cv"
                                label="Curriculum Vitae"
                                className="col-span-2"
                            />
                            <div className="col-span-2 text-right">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
