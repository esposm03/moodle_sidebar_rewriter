// ==UserScript==
// @name         Rewrite Moodle course names
// @match        https://stem.elearning.unipd.it/*
// @homepageUrl  https://github.com/esposm03/moodle_sidebar_rewriter
// @supportUrl   https://github.com/esposm03/moodle_sidebar_rewriter/issues
// @downloadUrl  https://raw.githubusercontent.com/esposm03/moodle_sidebar_rewriter/main/script.js
// ==/UserScript==

const courses = {
    "DM-2022-Forum": "Info dal Dipartimento",
    "2022-SC1167-000ZZ-2022-SCP4063958-N0-SC1167": "Algebra",
    "2022-SC1167-000ZZ-2022-SCP4063959-N0": "Analisi Matematica",
    "2022-SC1167-000ZZ-2022-SC01122464-N0": "AdE",
    "2022-SC1167-000ZZ-2022-SC02105452-N0": "Logica",
    "PRO-23": "Programmazione",
    "2022-SC1167-000ZZ-2022-SCP4063963-N0-SC1167": "Sistemi Operativi",
};

document.querySelectorAll("span").forEach(elem => {
    for ([orig, repl] of Object.entries(courses)) {
        let replaced = elem.innerHTML.replaceAll(orig, repl);
        if (elem.innerHTML !== replaced) console.log(`[Moodle course name rewriter] Replacing '${orig}' with '${repl}'`)
        elem.innerHTML = replaced;
    }
})
