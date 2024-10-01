import {format} from "date-fns";
import * as React from "react";
import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Text,
} from "@react-email/components";

export interface EmailTemplateProps {
    email: string;
    tel: string;
    firstname: string;
    lastname: string;
    birthDate?: Date;
}

export const EmailTemplate = ({ birthDate, email, tel, firstname, lastname }: EmailTemplateProps) => {
    const containerStyle = {
        margin: "0 auto",
        padding: "0 1.25rem",
        marginTop: "1.25rem",
        marginBottom: "3rem",
    };

    const hrStyle = {
        marginTop: "0.625rem",
        marginBottom: "1.875rem",
        border: "1px solid #ccc",
    };

    const textStyle = {
        base: {
            fontSize: "1rem",
            marginTop: "0",
            marginBottom: "0.625rem",
        },
    };

    return (
        <Html>
            <Head />
            <Preview>Demande de contact sur le site CBS</Preview>
            <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
                <Container style={containerStyle}>
                    <Hr style={hrStyle} />

                    <Text style={textStyle.base}>
                        Email: <i>{email}</i>,
                    </Text>
                    <Text style={textStyle.base}>
                        Téléphone: <i>{tel}</i>,
                    </Text>
                    <Text style={textStyle.base}>
                        Nom: <i>{firstname}</i>
                    </Text>
                    <Text style={textStyle.base}>
                        Prénom: <i>{lastname}</i>
                    </Text>
                    {!!birthDate && <Text style={textStyle.base}>
                        Société: <i>{format(birthDate, 'dd/MM/yyyy')}</i>
                    </Text>}
                </Container>
            </Body>
        </Html>
    );
};

export default EmailTemplate;