import { useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Mail from "@mui/icons-material/Mail";
import Inbox from "@mui/icons-material/Inbox";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function Form() {
  const [selectedAttachment, setSelectedAttachment] = useState<File | null>(
    null,
  );

  const initialState = {
    name: "",
    email: "",
    message: "",
    attachment: "" as string | ArrayBuffer | null,
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAttachmentChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files && event.target.files[0];
    setSelectedAttachment(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          attachment: e.target?.result ?? null,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mx-3 xs:mx-5 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-40 pb-7 xs:pb-9 sm:pb-14 md:pb-20 justify-center">
      <div className="lg:w-4/5 xl:w-3/4 mx-auto">
        <h2 className="mt-2 xs:mt-3 md:mt-5 text-xl md:text-3xl xl:text-4xl font-bold">
          Let's work together<span className="text-yellow-500">.</span>
        </h2>
        <p className="mt-2 xs:mt-3 md:mt-5 text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7 text-slate-500">
          or reach us via :
          <a
            className="text-yellow-500 font-semibold hover:text-slate-500"
            href="mailto:contact.kodevana@gmail.com"
          >
            {"\u00a0"}contact.kodevana@gmail.com
          </a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mt-3 xs:mt-5 md:mt-7 h-10 xs:h-12 sm:h-14 md:h-16 w-full relative rounded-xl">
              <input
                className="pl-5 xs:pl-7 pr-12 xs:pr-14 sm:pr-16 py-4 sm:py-5 w-full h-full text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7 tracking-wide font-semibold border-0 text-slate-500 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded-xl transition duration-150 outline-none"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                required
                onChange={handleInputChange}
              />
              <ContactMailIcon className="h-5 xs:h-6 md:h-7 absolute right-5 top-1/4 text-slate-400 group-focus:text-yellow-400" />
            </div>

            <div className="mt-3 xs:mt-5 md:mt-7 h-10 xs:h-12 sm:h-14 md:h-16 w-full relative rounded-xl">
              <input
                className="pl-5 xs:pl-7 pr-12 xs:pr-14 sm:pr-16 py-4 sm:py-5 w-full h-full text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7 tracking-wide font-semibold border-0 text-slate-500 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded-xl transition duration-150 outline-none"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Mail className="h-5 xs:h-6 md:h-7 absolute right-5 top-1/4 text-slate-400 group-focus:text-yellow-400" />
            </div>

            <div className="mt-7 h-44 w-full relative rounded-xl">
              <textarea
                className="pl-5 xs:pl-7 pr-12 xs:pr-14 sm:pr-16 py-4 sm:py-5 text-base md:text-lg xl:text-xl font-medium leading-5 xs:leading-6 md:leading-7 tracking-wide font-semibold border-0 text-slate-500 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded-xl resize-none scrollable-textarea transition duration-150 outline-none"
                placeholder="Message"
                name="message"
                value={formData.message}
                required
                onChange={handleTextareaChange}
              />
              <Inbox className="h-7 absolute right-5 top-5 text-slate-400" />
            </div>
          </div>

          <div className="mt-3 xs:mt-5 md:mt-7 flex gap-5 w-full">
            <div className="relative h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 w-1/2 rounded-full">
              <label className="relative inline-flex items-center px-3 xs:px-5 sm:px-7 text-lg md:text-xl xl:text-2xl font-semibold leading-4 w-full h-full text-slate-400 font-semibold bg-slate-200 hover:text-slate-50 hover:bg-slate-500 rounded-full text-center justify-center transition duration-150 overflow-hidden">
                <AttachFileIcon className="mr-2" />
                {selectedAttachment
                  ? selectedAttachment.name
                  : "Add attachment"}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleAttachmentChange}
                />
              </label>
            </div>
            <div className="relative h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 w-1/2 rounded-full">
              <button
                type="submit"
                className="px-3 xs:px-5 sm:px-7 text-lg md:text-xl xl:text-2xl font-semibold leading-4 w-full h-full text-slate-50 hover:text-slate-100 font-semibold bg-yellow-400 hover:bg-slate-500 rounded-full transition duration-200"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
