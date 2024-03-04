import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "../../node_modules/resend/dist/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: "System <onboarding@resend.dev>",
    to: ["facundogarcia.ar@gmail.com"],
    subject: "Hello world",
    react: EmailTemplate({ firstName: "John" }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
