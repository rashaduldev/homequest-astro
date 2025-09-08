import React, { useState, useRef, useEffect, type FC } from "react";
import { markdownify } from "@/lib/utils/textConverter";
import DynamicIcon from "@/helpers/DynamicIcon";

interface FAQ {
  title: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  icon?: string;
}

const FAQAccordion: FC<FAQAccordionProps> = ({ faqs, icon }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (el) {
        el.style.maxHeight = i === openIndex ? el.scrollHeight + "px" : "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="space-y-1 container">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={index}
            className="overflow-hidden transition-all"
          >
            <button
              className="flex justify-between items-center w-full text-left px-4 py-5 text-text-dark cursor-pointer bg-light rounded-2xl"
              onClick={() => toggle(index)}
            >
              <span className="text-lg leading-8" dangerouslySetInnerHTML={{ __html: markdownify(faq.title) }} />
              <DynamicIcon
                icon={icon ?? "MdKeyboardArrowRight"}
                className={`w-7 h-7 transition-transform duration-500 ease-in-out text-text-dark/50 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>

            <div
              ref={el => {
                contentRefs.current[index] = el;
              }}
              className="px-4 overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: index === 0 ? "auto" : "0px" }}
            >
              <div
                className="pt-2 text-text-dark/70 mr-7 mb-5 tracking-[-0.4px]"
                dangerouslySetInnerHTML={{ __html: markdownify(faq.answer) }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
