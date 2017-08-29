import React, { Component } from 'react';

const glossary = {
    'lang': {
        en: 'language',
        ru: 'язык',
        ua: 'мова'
    },
    'create': {
        en: 'create',
        ru: 'Создать',
        ua: 'Створити'
    },
    'apps': {
        en: 'Change apps',
        ru: 'Сменить',
        ua: 'Змінити'
    }
};

const localization = 'ua';

class Base extends Component {
    tr(key) {
        return glossary[key] && glossary[key][localization] || key;
    }

    addField(field) {
        if (field.val) {
            return(
                <div className={field.class || 'text'}
                     key={field.key || ''} title={field.title || ''}
                >
                    {`${field.title || ''}${field.val}`}
                </div>
            );
        }
    }

    setDateFormat(val) {
        const date = new Date(val);

        return `${this.twin(date.getDate())}.${this.twin(date.getMonth())}.
                ${date.getFullYear()} ${this.twin(date.getHours())}:
                ${this.twin(date.getMinutes())}`;
    }

    twin(str) {
        str = str.toString();
        return str.length > 1 ? str : '0' + str;
    }
}

export default Base;