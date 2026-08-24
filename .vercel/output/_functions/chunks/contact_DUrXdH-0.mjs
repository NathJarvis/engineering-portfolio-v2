import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import nodemailer from "nodemailer";
//#region src/pages/api/contact.js
var contact_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	const data = await request.formData();
	const name = data.get("name");
	const email = data.get("email");
	const scope = data.get("scope");
	const message = data.get("message");
	const transporter = nodemailer.createTransport({
		host: "smtp.zoho.eu",
		port: 465,
		secure: true,
		auth: {
			user: void 0,
			pass: void 0
		}
	});
	try {
		await transporter.sendMail({
			from: `"Portfolio Contact" <undefined>`,
			to: void 0,
			replyTo: email,
			subject: `🚀 New Project Brief: ${scope} - ${name}`,
			text: `Name: ${name}
Email: ${email}
Scope: ${scope}

Message:
${message}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">New Project Brief Received</h2>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0 0 10px 0;"><strong style="color: #475569; width: 80px; display: inline-block;">Name:</strong> <span style="color: #0f172a; font-size: 16px;">${name}</span></p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #475569; width: 80px; display: inline-block;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
            <p style="margin: 0 0 20px 0;"><strong style="color: #475569; width: 80px; display: inline-block;">Scope:</strong> <span style="background-color: #eff6ff; color: #1d4ed8; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${scope}</span></p>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 15px;">
              <p style="color: #475569; margin: 0 0 8px 0; font-weight: bold;">Message:</p>
              <p style="color: #334155; line-height: 1.6; background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">
            This email was sent from your 3D engineering portfolio contact form.<br>
            You can hit <strong>Reply</strong> to respond directly to ${name}.
          </p>
        </div>
      `
		});
		return redirect("/contact?status=success");
	} catch (error) {
		console.error("Mail error:", error);
		return redirect("/contact?status=error");
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@js
var page = () => contact_exports;
//#endregion
export { page };
