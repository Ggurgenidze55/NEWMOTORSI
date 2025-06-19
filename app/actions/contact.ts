"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // ვალიდაცია
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "ყველა ველი სავალდებულოა",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი",
    }
  }

  try {
    // Email გაგზავნა Resend-ით
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend-ის verified domain
      to: ["gurgenidze55@gmail.com"],
      subject: `კონტაქტის ფორმა: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            ახალი შეტყობინება კონტაქტის ფორმიდან
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>სახელი:</strong> ${name}</p>
            <p><strong>ელ-ფოსტა:</strong> ${email}</p>
            <p><strong>თემა:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">შეტყობინება:</h3>
            <p style="line-height: 1.6; color: #6c757d;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p><strong>გაგზავნის დრო:</strong> ${new Date().toLocaleString("ka-GE")}</p>
            <p><strong>IP მისამართი:</strong> მიღებული კონტაქტის ფორმიდან</p>
          </div>
        </div>
      `,
      // ასევე plain text ვერსია
      text: `
        ახალი შეტყობინება კონტაქტის ფორმიდან
        
        სახელი: ${name}
        ელ-ფოსტა: ${email}
        თემა: ${subject}
        
        შეტყობინება:
        ${message}
        
        გაგზავნის დრო: ${new Date().toLocaleString("ka-GE")}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: "შეცდომა მოხდა email გაგზავნისას. გთხოვთ სცადოთ მოგვიანებით.",
      }
    }

    console.log("Email წარმატებით გაიგზავნა:", data)

    return {
      success: true,
      message: "შეტყობინება წარმატებით გაიგზავნა! ჩვენ მალე დაგიკავშირდებით.",
    }
  } catch (error) {
    console.error("შეცდომა კონტაქტის ფორმის გაგზავნისას:", error)
    return {
      success: false,
      message: "შეცდომა მოხდა. გთხოვთ სცადოთ მოგვიანებით.",
    }
  }
}
