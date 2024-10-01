import { Resend } from "resend";
import { EmailTemplate } from "../../emails/EmailTemplate";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { message, email, tel, firstname, company, lastname } = req.body;

        if (!message || !email || !tel || !firstname || !company || !lastname) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        try {
            const { data, error } = await resend.emails.send({
                from: `Cbs Contact <noreply@email.decow.fr>`,
                to: process.env.RESEND_EMAIL,
                subject: "Demande de contact sur le site CBS",
                react: EmailTemplate({ email, message, tel, lastname, company, firstname }),
            });

            if (error) {
                return res.status(400).json({ message: "Email sending failed", error });
            }

            return res.status(200).json({ message: "Email sent successfully", data });
        } catch (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: "Failed to send email", error });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}