import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString() || '';
    const org = data.get('org')?.toString() || 'Not specified';
    const email = data.get('email')?.toString() || '';
    const scope = data.get('scope')?.toString() || '';
    const message = data.get('message')?.toString() || '';

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const host = import.meta.env.SMTP_HOST;
    const user = import.meta.env.SMTP_USER;
    const pass = import.meta.env.SMTP_PASS;
    const dest = import.meta.env.CONTACT_DESTINATION_EMAIL;

    if (!host || !user || !pass || !dest) {
      return new Response(
        JSON.stringify({ error: 'Server SMTP configuration is incomplete in .env.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const smtpConfig: SMTPTransport.Options = {
      host: host,
      port: 587,
      secure: false, // STARTTLS for port 587
      requireTLS: true,
      auth: {
        user: user,
        pass: pass,
      },
      tls: {
        rejectUnauthorized: import.meta.env.PROD ? true : false,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: dest,
      subject: `[Consultancy Enquiry] ${scope} - ${name}`,
      text: `Client Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\nScope: ${scope}\n\nProject Scope / Message:\n${message}`,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Enquiry transmitted successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('[MAIL DISPATCH EXCEPTION]:', error?.message || error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Failed to dispatch email over SMTP.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};