const CTAELEMENT = document.querySelector(".cta a");

// console.log(CTAELEMENT.attributes)

if(CTAELEMENT.hasAttribute("target")) { 
    console.log(CTAELEMENT.getAttribute("target"));
} else { 
    CTAELEMENT.setAttribute("target","blank");
}
console.log(CTAELEMENT.attributes)
