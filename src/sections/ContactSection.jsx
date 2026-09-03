import { ContactTrack } from '../components/index.js';

const tracks = [
  ['NAME', '송원일'],
  ['EMAIL', 'icerence@gmail.com'],
  ['PHONE', '010.6332.1694'],
  ['PROJECT TYPE', '영상 편집 · 모션 그래픽 · 콘텐츠 제작'],
];

export default function ContactSection({ onMenuClick, onNavigate }) {
  return (
    <section id="contact" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-light outline-none" aria-labelledby="contact-title">
      <img className="section-reveal section-reveal--delay-3 absolute right-0 top-0 h-[407px] w-[425px]" src="/assets/images/contact-corner-blob.png" alt="" aria-hidden="true" />
      <div className="section-reveal section-reveal-group absolute left-[160px] top-[154px] h-[650px] w-[1600px]">
        <div className="absolute left-0 top-[46px] h-[3px] w-[52px] rounded-xs bg-accent-teal" />
        <p className="absolute left-[68px] top-[29px] text-action">00:00:00:00</p>
        <h2 id="contact-title" className="absolute left-0 top-[116px] text-contact-title font-medium">LET’S MAKE<br />THE NEXT CUT.</h2>
        <div className="absolute left-0 top-[340px] h-[3px] w-[52px] rounded-xs bg-accent-teal" />
        <p className="absolute left-0 top-[382px] text-[19px] leading-[31px]">영상 편집과 모션 디자인으로<br />브랜드의 다음 장면을 만듭니다.<br />아이디어가 있다면, 함께 최고의 컷을 완성해요.</p>
        <div className="absolute left-[750px] top-0 h-[248px] w-[850px] rounded-monitor bg-text-primary">
          <div className="absolute left-[125px] top-[70px] h-[34px] w-[520px] rounded-monitor bg-accent-teal opacity-15" />
          <div className="absolute left-[215px] top-[112px] h-[18px] w-[430px] rounded-xl bg-accent-teal opacity-40" />
          <div className="absolute left-[70px] top-[151px] h-[12px] w-[350px] rounded-md bg-accent-teal opacity-15" />
        </div>
        <div className="absolute left-[720px] top-[290px] w-[880px]">
          {tracks.map(([label, value], index) => <ContactTrack key={label} label={label} value={value} expandable={index === 2} />)}
          <div className="relative mt-[20px] h-[52px] border-t border-border-default"><span className="absolute left-[8px] top-[19px] size-space-16 rounded-max bg-accent-red" /><span className="absolute left-[32px] top-[14px] text-label font-medium">REC</span><span className="absolute right-[40px] top-[14px] text-body">00:00:00:00 / 00:02:30:00</span></div>
          <button className="mt-[8px] h-[58px] w-full rounded-max border-[1.5px] border-accent-teal text-action font-medium" type="button">START THE PROJECT →</button>
        </div>
      </div>
      <footer className="section-reveal section-reveal--delay-4 absolute left-0 top-[887px] h-[71px] w-full border-t border-surface-grey text-body">
        <p className="absolute left-[312px] top-[23px]">© 2026 | Alrights reserved by songwonil</p>
        <nav className="absolute right-[312px] top-[38px] flex gap-[80px]" aria-label="푸터"><span>ABOUT US</span><span>CONTACT</span><span>CAREER</span><span>FAQS</span></nav>
      </footer>
      <img className="section-reveal section-reveal--delay-4 absolute bottom-0 left-[50px] h-[64px] w-[75px]" src="/assets/images/contact-sparkles.png" alt="" aria-hidden="true" />
      <img className="section-reveal section-reveal--delay-4 absolute bottom-0 left-[882px] size-[156px]" src="/assets/images/contact-asterisk.png" alt="" aria-hidden="true" />
    </section>
  );
}
