import nodemailer from 'nodemailer';

export const POST = async ({ request, redirect }) => {
  // 1. Get the data from the form
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const scope = data.get('scope');
  const message = data.get('message');

  // 2. Set up the email server using your Vercel Environment Variables
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu', // Zoho global server
    port: 465,
    secure: true,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  try {
    // 3. Send the email to yourself
    await transporter.sendMail({
      from: import.meta.env.EMAIL_USER, // Must match the authenticated user verbatim
      to: import.meta.env.EMAIL_USER, 
      replyTo: email, // This keeps the client's email safe for you to hit "Reply"
      subject: `Portfolio Brief: ${scope} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nScope: ${scope}\n\nMessage:\n${message}`,
    });
    
    // 4. Redirect back to the contact page after sending
    return redirect('/contact?status=success');
  } catch (error) {
    console.error("Mail error:", error);
    return redirect('/contact?status=error');
  }
};