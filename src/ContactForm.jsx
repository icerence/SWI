import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("보내는 중...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus("메일을 보냈습니다.");
          form.current.reset();
        },
        (error) => {
          setStatus("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
          console.log(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>이름</label>
      <input type="text" name="user_name" required />

      <label>이메일 주소</label>
      <input type="email" name="user_email" required />

      <label>제목</label>
      <input type="text" name="subject" required />

      <label>내용</label>
      <textarea name="message" rows="5" required />

      <button type="submit">전송하기</button>
      <p>{status}</p>
    </form>
  );
}