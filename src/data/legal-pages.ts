export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageData {
  title: string;
  slug: "terms-conditions" | "privacy-policy";
  description: string;
  heroHeight: number;
  sections: LegalSection[];
}

const informationCollection: LegalSection = {
  heading: "Information Collection",
  paragraphs: [
    "Details about the types of personal information collected, such as names, addresses, contact information, and possibly sensitive information related to interior services or projects.",
  ],
};

const purposeOfCollection: LegalSection = {
  heading: "Purpose of Collection",
  paragraphs: [
    "Explanation of how personal information is used to maintain the security of interior agency systems, prevent unauthorized access or fraud, and protect against other unlawful activities. Assurance that personal information will only be collected and used for purposes consistent with individuals' consent or preferences, where applicable, and in accordance with applicable privacy laws and regulations.",
  ],
};

const useOfInformation: LegalSection = {
  heading: "Use of Information",
  paragraphs: [
    "Details about the types of personal information collected, such as names, addresses, contact information, and possibly sensitive information related to interior services or projects.",
  ],
};

const disclosureToThirdParties: LegalSection = {
  heading: "Disclosure to Third Parties",
  paragraphs: [
    "Identification of the types of external entities with whom the agency may share personal information. This could include contractors, consultants, vendors, partner organizations, or other government agencies. Explanation of why the agency shares personal information with third parties. This might include facilitating services, conducting research or analysis, collaborating on projects, or complying with legal requirements.",
    "Clarity on the specific categories of personal information shared with third parties and limitations on the purposes for which it may be used by those parties.",
  ],
};

const dataRetention: LegalSection = {
  heading: "Data Retention",
  paragraphs: [
    "Measures taken to protect personal information from unauthorized access, disclosure, alteration, or destruction, which might include encryption, access controls, and regular security assessments.",
    "Information about the methods used to securely dispose of or anonymize personal information once it is no longer needed for its original purpose. This might include shredding physical documents, deleting electronic records, or anonymizing data to remove identifying information.",
  ],
};

const rightsOfIndividuals: LegalSection = {
  heading: "Rights of Individuals",
  paragraphs: [
    "Details about the types of personal information collected, such as names, addresses, contact information, and possibly sensitive information related to interior services or projects.",
  ],
};

const legalBasisForProcessing: LegalSection = {
  heading: "Legal Basis for Processing",
  paragraphs: [
    "Details about the types of personal information collected, such as names, addresses, contact information, and possibly sensitive information related to interior services or projects.",
  ],
};

const internationalDataTransfers: LegalSection = {
  heading: "International Data Transfers",
  paragraphs: [
    "Details about the types of personal information collected, such as names, addresses, contact information, and possibly sensitive information related to interior services or projects.",
    "Disclosure of how personal information may be used for marketing or outreach purposes, such as promoting interior-related events, initiatives, or public awareness campaigns. This section may include information about individuals' rights to opt-out of receiving marketing communications.",
  ],
};

const updatesToPrivacyPolicy: LegalSection = {
  heading: "Updates to the Privacy Policy",
  paragraphs: [
    "Details about the types of personal information collected, such as names, addresses, contact information, and possibly sensitive information related to interior services or projects.",
  ],
};

export const termsConditions: LegalPageData = {
  title: "Terms & Conditions",
  slug: "terms-conditions",
  description:
    "Review the terms and conditions governing HomeQuest services, information handling, and your rights when using our website.",
  heroHeight: 453,
  sections: [
    purposeOfCollection,
    informationCollection,
    disclosureToThirdParties,
    useOfInformation,
    rightsOfIndividuals,
    dataRetention,
    internationalDataTransfers,
    legalBasisForProcessing,
    updatesToPrivacyPolicy,
  ],
};

export const privacyPolicy: LegalPageData = {
  title: "Privacy Policy",
  slug: "privacy-policy",
  description:
    "Read how HomeQuest collects, uses, protects, retains, and shares personal information while respecting your privacy rights.",
  heroHeight: 473,
  sections: [
    informationCollection,
    purposeOfCollection,
    useOfInformation,
    disclosureToThirdParties,
    dataRetention,
    rightsOfIndividuals,
    legalBasisForProcessing,
    internationalDataTransfers,
    updatesToPrivacyPolicy,
  ],
};
