import { ContactTrack } from '../components/index.js';

const tracks = [
  ['NAME', '\uC1A1\uC6D0\uC77C'],
  ['EMAIL', 'icerence@gmail.com'],
  ['PHONE', '010.6332.1694'],
  ['PROJECT TYPE', '\uC601\uC0C1 \uD3B8\uC9D1 \u00B7 \uBAA8\uC158 \uADF8\uB798\uD53D \u00B7 \uCF58\uD150\uCE20 \uC81C\uC791'],
];

const previewTicks = Array.from({ length: 12 }, (_, index) => index);

export default function ContactSection() {
  return (
    <section id="contact" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-light outline-none" aria-labelledby="contact-title">
      <img className="section-reveal section-reveal--delay-3 absolute right-0 top-0 h-[407px] w-[425px]" src="/assets/images/contact-corner-blob.png" alt="" aria-hidden="true" />
      <div className="section-reveal section-reveal-group absolute left-[160px] top-[154px] h-[650px] w-[1600px]">
        <div className="absolute left-0 top-[46px] h-[3px] w-[52px] rounded-xs bg-accent-teal" />
        <p className="absolute left-[68px] top-[29px] text-action">00:00:00:00</p>
        <h2 id="contact-title" className="absolute left-0 top-[116px] text-contact-title font-medium">LET{String.fromCharCode(0x2019)}S MAKE<br />THE NEXT CUT.</h2>
        <div className="absolute left-0 top-[340px] h-[3px] w-[52px] rounded-xs bg-accent-teal" />
        <p className="absolute left-0 top-[382px] text-[19px] leading-[31px]">{'\uC601\uC0C1 \uD3B8\uC9D1\uACFC \uBAA8\uC158 \uB514\uC790\uC778\uC73C\uB85C'}<br />{'\uBE0C\uB79C\uB4DC\uC758 \uB2E4\uC74C \uC7A5\uBA74\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.'}<br />{'\uC544\uC774\uB514\uC5B4\uAC00 \uC788\uB2E4\uBA74, \uD568\uAED8 \uCD5C\uACE0\uC758 \uCEF7\uC744 \uC644\uC131\uD574\uC694.'}</p>
        <div className="absolute left-[750px] top-0 h-[248px] w-[850px] rounded-monitor bg-text-primary">
          <div className="absolute left-[125px] top-[70px] h-[34px] w-[520px] rounded-monitor bg-accent-teal opacity-15" />
          <div className="absolute left-[215px] top-[112px] h-[18px] w-[430px] rounded-xl bg-accent-teal opacity-40" />
        <div className="absolute left-[70px] top-[151px] h-[12px] w-[350px] rounded-md bg-accent-teal opacity-15" />
        </div>
        <div className="absolute left-[720px] top-[290px] w-[880px]">
          <div className="contact-preview__ticks" aria-hidden="true">
            {previewTicks.map((tick) => <span key={tick} className={`contact-preview__tick ${tick === 7 ? 'contact-preview__tick--active' : ''}`} style={{ left: `${70 + tick * 54}px` }} />)}
          </div>
          <div className="contact-timeline__playhead" aria-hidden="true"><span /></div>
          <div className="space-y-4">
            {tracks.map(([label, value], index) => <ContactTrack key={label} label={label} value={value} expandable={index === 3} />)}
          </div>
          <div className="relative mt-[40px] h-[52px] border-t border-border-default"><span className="absolute left-[8px] top-[19px] size-space-16 rounded-max bg-accent-red" /><span className="absolute left-[32px] top-[14px] text-label font-medium">REC</span><span className="absolute right-[40px] top-[14px] text-body">00:00:00:00  /  00:02:30:00</span></div>
          <button className="mt-[8px] h-[58px] w-full rounded-max border-[1.5px] border-accent-teal text-action font-medium" type="button">START THE PROJECT&nbsp;&nbsp;{String.fromCharCode(0x2192)}</button>
        </div>
      </div>
      <footer className="section-reveal section-reveal--delay-4 absolute left-0 top-[887px] h-[71px] w-full border-t border-surface-grey text-body">
        <p className="absolute left-[312px] top-[23px]">{String.fromCharCode(0xA9)} 2026 | Alrights reserved by songwonil</p>
        <nav className="absolute right-[312px] top-[38px] flex gap-[80px]" aria-label="Footer navigation"><span>ABOUT US</span><span>CONTACT</span><span>CAREER</span><span>FAQS</span></nav>
      </footer>
      <img className="section-reveal section-reveal--delay-4 absolute bottom-0 left-[50px] h-[64px] w-[75px]" src="/assets/images/contact-sparkles.png" alt="" aria-hidden="true" />
      <img className="section-reveal section-reveal--delay-4 absolute bottom-0 left-[882px] size-[156px]" src="/assets/images/contact-asterisk.png" alt="" aria-hidden="true" />
    </section>
  );
}
