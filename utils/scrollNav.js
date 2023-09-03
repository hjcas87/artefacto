

export const scrollNav = (e, setOpen) => {
    e.preventDefault()
    const seccion = document.querySelector(e.target.attributes.href.value);
    seccion.scrollIntoView({
        behavior: 'smooth'
    })
    setOpen && setOpen(false)
    // console.log(e.target.attributes.id.value === '#ver_mas')
}