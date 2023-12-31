//components
import SocialIconList from "../components/SocialIconList"
//layout
import TwoColumn from "../layouts/TwoColumn"
import SingleColumn from "../layouts/SingleColumn"

//icons
import ArrowDown from "../assets/basicIcons/arrow-down-solid.svg"
import ArrowRight from "../assets/basicIcons/arrow-right-solid.svg"

//hooks
import { CSSProperties, ChangeEvent, FormEvent, useState } from "react"
import useWindowSize from "../hooks/useWindowSize"
import Icon from "../components/basicComponents/Icon"
import { BasicFormBody } from "../components/basicFormComponents"
import { functions } from "../firebase/config"
import { httpsCallable } from "firebase/functions"

import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha"

export default function Contact() {
  const { width } = useWindowSize()
  //if Screen is 880px or larger display 2 columns
  if (width >= 840) {
    return (
      <main className="contact-page">
        <TwoColumn
          containerClassName="page-wrapper"
          leftSideJSX={
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Heading />

                <p
                  style={{
                    width: "5rem",
                    paddingLeft: "3em",
                    marginTop: "4rem",
                  }}
                >
                  <Icon src={ArrowRight} />
                </p>
              </div>

              <p>
                <Icon src={ArrowDown} />
              </p>

              <SocialSection />

              {/* <p style={{ fontWeight: "bold", fontSize: "2em", margin: "0" }}>
                OR
              </p> */}

              {/* <EmailSection styles={{ textAlign: "left" }} /> */}
            </>
          }
          rightSideJSX={<ContactForm />}
          containerStyles={{ gap: "1rem" }}
          leftStyles={{ width: "60%" }}
        />
      </main>
    )
  }

  //if it is a small screen (less than 880 px) - display single column
  return (
    <main className="contact-page">
      <SingleColumn className="page-wrapper">
        <Heading />

        {/* <EmailSection styles={{ textAlign: "center" }} /> */}

        <p style={{ fontWeight: "bold", fontSize: "2em", margin: "0" }}>OR</p>

        <ContactForm />

        <p
          style={{
            fontWeight: "bold",
            fontSize: "2em",
            margin: "1em 0 1em 0",
          }}
        >
          OR
        </p>
        <SocialSection />
      </SingleColumn>
    </main>
  )
}

//Components for sections in the layout

const Heading = () => {
  return (
    <h1 className="page-title" style={{ marginBottom: "0" }}>
      Contact Me
    </h1>
  )
}

type EmailSectionProps = {
  styles?: CSSProperties
}
// const EmailSection = ({ styles }: EmailSectionProps) => {
//   return (
//     <section style={styles}>
//       <p>
//         You can eMail me at{" "}
//         <a href="mailto:nickyj.517@gmail.com">nickyj.517@gmail.com</a>
//         <CopyToClipboard text="nickyj.517@gmail.com">
//           <Icon
//             src={CopyIcon}
//             size="xs"
//             shape="square"
//             clickable
//             styles={{ marginLeft: "0.25rem" }}
//           />
//         </CopyToClipboard>
//       </p>
//     </section>
//   )
// }

const SocialSection = () => {
  return (
    <section>
      <h2 style={{ textAlign: "left", margin: "0" }}>On Social</h2>
      <SocialIconList showTitle={false} styles={{ border: "none" }} />
    </section>
  )
}

interface IContactFormData {
  name: string
  email: string
  company: string
  message: string
}

const INITIAL_FORM_DATA: IContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
}

const ContactForm = () => {
  const [formData, setFormData] = useState<IContactFormData>(INITIAL_FORM_DATA)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [captchaIsDone, setCaptchaIsDone] = useState<boolean>(false)

  const reCAPTCHAKey = "6LdTdx0pAAAAADqMb1UADQV1Up66jdzZcmY17gEO"
  const sentMailToMe = httpsCallable(functions, "sendMailToMe")

  const updateFields: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const clearForm = () => {
    setFormData(INITIAL_FORM_DATA)
    setCaptchaIsDone(false)
  }

  const handleSubmit: (e: FormEvent) => void = async (e) => {
    e.preventDefault()
    if (!captchaIsDone) return console.log("no captcha")
    setIsPending(true)

    //firebase functions
    try {
      await sentMailToMe(formData)
      setIsPending(false)
    } catch (err) {
      console.error("Error when trying via firebase:", err)
      // Add any error handling code here
      setIsPending(false)
      alert(`Message not sent: ${err}`)
    }
    clearForm()
  }

  const onCAPTCHAChange = (value: string | null) => {
    console.log("reCAPTCHA value: ", value)
    if (value) setCaptchaIsDone(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit this form</h2>
      <BasicFormBody
        formData={[
          {
            type: "text",
            label: "name",
            name: "name",
            value: formData.name,
            onChange: updateFields,
            required: true,
            placeholder: "name",
          },
          {
            type: "email",
            label: "email",
            name: "email",
            value: formData.email,
            onChange: updateFields,
            required: true,
            placeholder: "email@email.com",
          },
          {
            type: "text",
            label: "company",
            name: "company",
            value: formData.company,
            onChange: updateFields,
            required: true,
            placeholder: "",
          },
        ]}
      >
        <label htmlFor="contact-form-message" style={{ textAlign: "left" }}>
          message*:{" "}
        </label>
        <textarea
          id="contact-form-message"
          placeholder="say hello!"
          name="message"
          value={formData.message}
          onChange={updateFields}
          cols={50}
          rows={4}
        />
      </BasicFormBody>
      <ReCAPTCHA
        sitekey={reCAPTCHAKey}
        onChange={(value) => onCAPTCHAChange(value)}
      />
      <button disabled={isPending}>{!isPending ? "Send" : "Sending..."}</button>
    </form>
  )
}
