import formidable from "formidable";
import fs from "fs";
import {Resend} from "resend";
import RecrutementTemplate, {EmailTemplateProps} from "../../emails/RecrutementTemplate";

export const config = {
    api: {
        bodyParser: false, // Désactiver le bodyParser intégré pour gérer les fichiers
    },
};

export default async function handler(req, res) {
    if (req.method === "POST") {
        // Utilisation de formidable pour traiter les données du formulaire
        const form = formidable({ multiples: true });

        await form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({error: "Failed to parse form data"});
            }

            const {email, tel, firstname, lastname,birthDate} = fields as EmailTemplateProps;

            if (!email || !tel || !firstname || !lastname || !birthDate) {
                return res.status(400).json({error: "Missing required fields"});
            }

            const resend = new Resend(process.env.RESEND_API_KEY);

            try {
                const attachments = [];


                    // Vérifier si des fichiers ont été téléchargés
                    if (files.attachment) {
                        // Si un seul fichier est envoyé, le format est un objet
                        if (!Array.isArray(files.attachment)) {
                            // On convertit en tableau pour la gestion
                            attachments.push({
                                filename: files.attachment.originalFilename,
                                content: fs.readFileSync(files.attachment.filepath),
                                contentType: files.attachment.mimetype,
                            });
                        } else {
                            // Si plusieurs fichiers sont envoyés
                            files.attachment.forEach(file => {
                                attachments.push({
                                    filename: file.originalFilename,
                                    content: fs.readFileSync(file.filepath),
                                    contentType: file.mimetype,
                                });
                            });
                        }
                    }


                    const {data, error} = await resend.emails.send({
                    from: `Cbs Recrutement <noreply@email.decow.fr>`,
                    to: process.env.RESEND_EMAIL,
                    subject: "Cbs Recrutement",
                    react: RecrutementTemplate({email, tel, lastname, birthDate, firstname}),
                    attachments,
                });

                if (error) {
                    return res.status(400).json({message: "Email sending failed", error});
                }

                return res.status(200).json({message: "Email sent successfully", data});
            } catch (error) {
                console.error("Error sending email:", error);
                return res.status(500).json({message: "Failed to send email", error});
            }
        });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}