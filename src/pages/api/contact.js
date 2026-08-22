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
    service: 'gmail', // Change this if you aren't using a Gmail address
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  try {
    // 3. Send the email to yourself
    await transporter.sendMail({
      from: import.meta.env.EMAIL_USER,
      to: import.meta.env.EMAIL_USER, // Sends it to your inbox
      replyTo: email, // So you can just click "Reply" to the sender
      subject: `Portfolio Brief: ${scope} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nScope: ${scope}\n\nMessage:\n${message}`,
    });
    
    // 4. Redirect back to the contact page after sending
    return redirect('/contact?status=success');
  } catch (error) {
    console.error(error);
    return redirect('/contact?status=error');
  }
}