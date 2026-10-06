interface Props {
  id: string;
  question: string;
  answer: string;
}

const data: Props[] = [
  {
    id: "faq_001",
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3 to 5 business days, while express shipping delivers within 1 to 2 business days.",
  },
  {
    id: "faq_002",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee on all unused items in their original packaging.",
  },
  {
    id: "faq_003",
    question: "Can I change my order after it has been placed?",
    answer:
      "Orders can be modified or canceled within 1 hour of placement by contacting our support team directly.",
  },
  {
    id: "faq_004",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping fees and delivery times vary by destination.",
  },
  {
    id: "faq_005",
    question: "How can I track my package?",
    answer:
      "Once your order ships, we will email you a tracking link and a carrier tracking number to monitor your delivery status.",
  },
];
export default data;
