import { google, } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.FRONTEND_URL
);

export class GMail {

    static generateAuthUrl(): string {
        return oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/gmail.modify'],
        });
    }

    static async setCredentials(code: string) {
        return await oauth2Client.getToken(code).then((res) => {
            oauth2Client.setCredentials(res.tokens);
        });
    }

    static getEmailsByLabel(LabelId: string) {
        try {

        } catch (error) {

        }
    }
}