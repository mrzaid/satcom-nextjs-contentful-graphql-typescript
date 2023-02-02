import React, { useRef, useState } from 'react'

// Components
import Select from '../Select'

// Icons
import { CrossIcon, Loading } from '../Icons'

type ModalProps = {
  closeModal?: () => void
}

const Form: React.FC<ModalProps> = ({ closeModal }) => {
  const dropDownOptions = ['Accounting', 'Management', 'Financial']
  const formRef = useRef(null)
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState<string>('')
  const [form, setForm] = useState({
    'form-name': 'contactForm',
    name: '',
    email: '',
    company: '',
    phone: '',
    job: '',
    topic: '',
    message: '',
  })

  const createFormDataObj = (data: any): any => {
    const formData = new FormData()
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k])
    })
    return formData
  }

  const formSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(createFormDataObj(form)).toString(),
    })
      .then(() => {
        setStatus('success')
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form
      method="POST"
      action="/success"
      data-netlify="true"
      onSubmit={formSubmit}
      name="contactForm"
      ref={formRef}
      data-netlify-honeypot="bot-field"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact v1" />
      <p hidden>
        <label>
          Dont fill this out: <input name="bot-field" />
        </label>
      </p>
      {loading && <h1>loading</h1>}
      <div className="form-container md:border-[2px] md:rounded-[30px] md:rounded-tr-[0px] md:rounded-bl-[0px] border-[#303030] bg-white flex flex-col md:flex-row justify-start items-start w-[100%] md:w-[656px] xl:w-[1088px] 2xl:w-[1364px]">
        <div className="form-info relative w-full md:w-[50%] px-5 py-[30px] md:p-[30px] xl:p-[50px] flex flex-col justify-start items-start gap-5 xl:gap-[30px] ">
          <i
            className="fixed top-4 right-4 bg-white p-2 rounded-[50%] shadow-md"
            onClick={closeModal}
          >
            <CrossIcon color="#000" width={18} height={18} />
          </i>
          <div className="flex flex-col w-full justify-start items-start  gap-[10px] xl:gap-[6px]">
            <label htmlFor="name">
              <h3>Your Name *</h3>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="rounded-xl w-full outline-none border-black border-[1px] border-solid px-5 py-[11px] xl:px-[30px] xl:py-[9px]"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value })
              }}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-[10px] xl:gap-[6px]">
            <label htmlFor="email">
              <h3>Your Email *</h3>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="rounded-xl w-full outline-none border-black border-[1px] border-solid px-5 py-[11px] xl:px-[30px] xl:py-[9px]"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value })
              }}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-[10px] xl:gap-[6px]">
            <label htmlFor="company">
              <h3>Company Name *</h3>
            </label>
            <input
              id="company"
              type="text"
              name="company"
              required
              className="rounded-xl outline-none w-full border-black border-[1px] border-solid px-5 py-[11px] xl:px-[30px] xl:py-[9px]"
              value={form.company}
              onChange={(e) => {
                setForm({ ...form, company: e.target.value })
              }}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-[10px] xl:gap-[6px]">
            <label htmlFor="phone">
              <h3>Your Phone</h3>
            </label>
            <input
              id="phone"
              type="text"
              required
              name="phone"
              className="rounded-xl outline-none w-full border-black border-[1px] border-solid px-5 py-[11px] xl:px-[30px] xl:py-[9px]"
              value={form.phone}
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value })
              }}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-[10px] xl:gap-[6px]">
            <label htmlFor="job">
              <h3>Job Title</h3>
            </label>
            <input
              id="job"
              type="text"
              required
              name="job"
              className="rounded-xl outline-none w-full border-black border-[1px] border-solid px-5 py-[11px] xl:px-[30px] xl:py-[9px]"
              value={form.job}
              onChange={(e) => {
                setForm({ ...form, job: e.target.value })
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-[50%] px-5 pb-[30px] md:p-[30px] xl:p-[50px]  flex flex-col justify-start items-center md:items-end  gap-5 xl:gap-[30px]">
          <div className="flex flex-col justify-start items-start w-full gap-[10px] xl:gap-[6px]">
            <label htmlFor="topic">
              <h3>Choose Topic *</h3>
            </label>
            <div className="flex flex-row w-full">
              <Select
                options={dropDownOptions}
                onChange={(value: string) => setForm({ ...form, topic: value })}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-[10px] xl:gap-[6px]">
            <label htmlFor="message">
              <h3>Message</h3>
            </label>
            <textarea
              id="message"
              name="message"
              className="h-[220px] md:h-[307px] xl:h-[343px] resize-none rounded-xl outline-none w-full border-black border-[1px] border-solid px-5 py-[11px] xl:px-[30px] xl:py-[9px]"
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value })
              }}
            />
          </div>
          <button
            type="submit"
            className="mt-[30px] rounded-[30px] modal-btn rounded-tr-[0px] rounded-bl-[0px] w-full xl:mt-[50px] xl:max-w-[300px] h-[50px] xl:h-[56px] flex justify-center items-center"
          >
            {loading ? (
              <Loading />
            ) : (
              <>
                <p className="hidden xl:block">Send</p>
                <p className="block xl:hidden">Schedule Demo</p>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
