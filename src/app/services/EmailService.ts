import { Recipient, MailerSend, Sender, EmailParams } from "mailersend";

class EmailService {
    private readonly _service: MailerSend;

    constructor() {
        this._service = new MailerSend({ apiKey: process.env.MAILER_APIKEY ?? "" });
    }

    async sendEmailAsync(payload: any) {
        const emailParams = new EmailParams()
            .setFrom(new Sender('pr9084z5d8m4w63d@trial-3yxj6lj3nr74do2r.mlsender.net', 'Portolio'))
            .setTo([new Recipient('paulosm.dev@gmail.com', 'Paulo Martins')])
            .setSubject('Portfolio | Nova mensagem')
            .setHtml(`
                <h1>Nova mensagem</h1>   
                <p>Você tem uma nova mensagem, segue abaixo dados do remetente:</p>
                <br />
                <ul>
                    <li><strong>Nome:</strong> ${payload.name}</li>
                    <li><strong>E-mail:</strong> ${payload.email}</li>
                    <li><strong>Whatsapp:</strong> ${payload.phoneNumber}</li>
                    <li><strong>Mensagem:</strong> ${payload.message}</li>
                </ul>
            `);

        await this._service.email.send(emailParams)
    }
}

export default new EmailService;