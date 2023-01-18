const L10ns = ({ prop, lang, l10ns }) => {
    let defaultLang = 'en';
    let localValue = l10ns && l10ns[lang] && l10ns[lang][prop] ? l10ns[lang][prop] : null;
    if (localValue === null) {
        localValue = l10ns && l10ns[defaultLang] && l10ns[defaultLang][prop] ? l10ns[defaultLang][prop] : null;
    }
    return localValue;
}

export default L10ns
