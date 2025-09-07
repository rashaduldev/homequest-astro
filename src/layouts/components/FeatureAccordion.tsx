import React, { useState, useRef, useEffect } from "react";
import { markdownify } from "@/lib/utils/textConverter";

interface Feature {
  title: string;
  description: string;
}

interface FeatureAccordionProps {
  features: Feature[];
}

export default function FeatureAccordion({ features }: FeatureAccordionProps) {
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
    <div className="mt-10 space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="border-b border-border pb-2">
          <button
            className="flex items-start gap-4 w-full text-left font-semibold text-lg text-text-dark cursor-pointer py-2"
            onClick={() => toggle(index)}
          >
            <span className="flex-shrink-0 text-text-dark/30">{String(index + 1).padStart(2, "0")}</span>
            <span dangerouslySetInnerHTML={{ __html: markdownify(feature.title) }} />
          </button>
          <div
            ref={(el) => { contentRefs.current[index] = el; }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: index === 0 ? "auto" : "0px" }}
          >
            <p
              className="mt-2 ml-[2.25rem] text-text-dark/50"
              dangerouslySetInnerHTML={{ __html: markdownify(feature.description) }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
