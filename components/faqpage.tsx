import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { useTranslations } from '../hooks/useTranslations';
import { ChevronDownIcon } from './icons/Icons';

const FaqItemComponent: React.FC<{ item: { question: string, answer: string } }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <ChevronDownIcon className={`icon ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && <div className="faq-answer">{item.answer}</div>}
    </div>
  );
};

const FaqPage: React.FC = () => {
  const t = useTranslations();

  return (
    <div className="faq-page">
      <h1>{t('faq.title')}</h1>
      <div className="faq-list">
        {FAQ_DATA.map((item, index) => (
          <FaqItemComponent key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
