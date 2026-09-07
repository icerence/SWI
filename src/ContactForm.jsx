import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const RECAPTCHA_SITE_KEY = '6LdQt60tAAAAAP2UGj0AuQkwMA2yvTwVA2oKd2ol';

export default function ContactForm({ onClose }) {
  const form = useRef();
  const captcha = useRef();
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    let retryTimer;
    const renderCaptcha = () => {
      if (window.grecaptcha && captcha.current && !captcha.current.hasChildNodes()) {
        window.grecaptcha.render(captcha.current, { sitekey: RECAPTCHA_SITE_KEY });
      } else if (!window.grecaptcha) {
        retryTimer = window.setTimeout(renderCaptcha, 100);
      }
    };

    renderCaptcha();
    return () => window.clearTimeout(retryTimer);
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus('보내는 중...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
    ).then(
      () => {
        setStatus('문의가 전송되었습니다. 곧 연락드리겠습니다.');
        form.current.reset();
      },
      (error) => {
        setStatus('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
        console.error(error);
      },
    ).finally(() => setIsSending(false));
  };

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-text-primary/70 px-6">
      <form ref={form} onSubmit={sendEmail} className="relative w-[620px] rounded-monitor bg-surface-light p-[42px] shadow-2xl" aria-label="프로젝트 문의 폼">
        <button className="absolute right-[28px] top-[22px] text-body" type="button" onClick={onClose} aria-label="문의 폼 닫기">×</button>
        <p className="mb-2 text-label text-accent-teal">START A PROJECT</p>
        <h3 className="mb-8 text-[2.25rem] font-medium">새로운 장면을<br />함께 만들어보세요.</h3>
        <input type="hidden" name="time" value={new Date().toLocaleString('ko-KR')} readOnly />
        <label className="flex flex-col gap-2 text-body">프로젝트 제목<input className="rounded-md border border-border-default bg-surface-white px-4 py-3" type="text" name="title" required /></label>
        <div className="mt-5 grid grid-cols-2 gap-5">
          <label className="flex flex-col gap-2 text-body">이름<input className="rounded-md border border-border-default bg-surface-white px-4 py-3" type="text" name="name" required /></label>
          <label className="flex flex-col gap-2 text-body">이메일<input className="rounded-md border border-border-default bg-surface-white px-4 py-3" type="email" name="email" required /></label>
        </div>
        <label className="mt-5 flex flex-col gap-2 text-body">문의 내용<textarea className="min-h-[120px] resize-y rounded-md border border-border-default bg-surface-white px-4 py-3" name="message" required /></label>
        <div className="mt-5" aria-label="스팸 방지 인증"><div ref={captcha} className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} /></div>
        <div className="mt-7 flex items-center justify-between gap-5"><p className="text-body" role="status" aria-live="polite">{status}</p><button className="rounded-max border-[1.5px] border-accent-teal px-8 py-4 text-action font-medium disabled:cursor-wait disabled:opacity-50" type="submit" disabled={isSending}>{isSending ? 'SENDING...' : 'SEND MESSAGE →'}</button></div>
      </form>
    </div>
  );
}
