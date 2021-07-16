import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fbd41392514c99",
    pass: "0448710c09d051"
  }
});

export const sendMail = async (email: string, name: string, url: string) => {
  try {
    await transport.sendMail({
      to: `${email}`,
      from: 'no-reply@miguel.com',
      subject: `Confirma tu cuenta ${name}`,
      text: `Porfavor Da click al siguiente enlace para confirmar tu cuenta ${url}`,
      html: `<p>Porfavor Da click al siguiente enlace para confirmar tu cuenta ${url}</p>`
    });

  } catch (error) {
    console.log('Hubo un error al mandar el mail')
  }
}