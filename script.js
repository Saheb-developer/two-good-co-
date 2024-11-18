
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true
});

// Detect scroll position
locoScroll.on("scroll", (args) => {
    const logo = document.querySelector('nav ul a #logo')
    const scrollY = args.scroll.y;
    if (scrollY > 120) {
        gsap.to('#firstlogo', {
            y: -100,
        })
        gsap.to('#secondlogo', {
            y: -83,
        })
        gsap.to('nav ul #nav-items h5', {
            y: -50,
            opacity: 0,
        })

    } else {
        gsap.to('#secondlogo', {
            y: 0,
        })

        gsap.to('#firstlogo', {
            y: 0,
        })
        gsap.to('nav ul #nav-items h5', {
            y: 0,
            opacity: 1
        })
    }
});
const dropDown = document.querySelectorAll('.dropdown');
const cursor = document.querySelector('#cursor');
const video = document.querySelector('#page-1 video');
const productcard = document.querySelectorAll('.product-card')
function mainAnim() {
    const btn = document.querySelectorAll('button')
    const input = document.querySelector('#page-3 #input-email-area input')
    const marker = document.querySelector('#page-3 #good-marker img')

        gsap.to('nav', {
            y: 5,
            opacity: 1,
        })
        gsap.to('#page-1 #text h1', {
            y: 0,
            opacity: 1,
            stagger: 0.3,
        })
        btn.forEach(function (elem) {
            console.log(elem)
            elem.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    borderBottom: 'none'
                })
            })
            elem.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    delay: .5,
                    borderBottom: '1px solid #000'
                })
            })
        })
        input.addEventListener('click',()=>{
            marker.style.display = 'none'
        })
    }
function cursoranim() {
        window.addEventListener('mousemove', (dets) => {
            const xCenter = cursor.getBoundingClientRect().width / 2;
            const yCenter = cursor.getBoundingClientRect().height / 2;
            gsap.to(cursor, {
                x: (dets.x - xCenter) + 'px',
                y: (dets.y - yCenter) + 'px',

            })

            video.addEventListener('mouseenter', () => {
                var gsapcon = gsap.to(cursor, {
                    opacity: 1,
                    scale: 1,
                })

            })
            video.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    scale: 0,
                    opacity: 0,
                })
            })
        })

        productcard.forEach((elem) => {
            elem.addEventListener('mouseenter', () => {
                cursor.style.zIndex = 0
                cursor.style.backgroundColor = '#FFFF'
                var gsapcon = gsap.to(cursor, {
                    opacity: 1,
                    scale: 2,
                })
            })

            cursor.style.zIndex = 99
            cursor.style.backgroundColor = '#000'
            elem.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    scale: 0,
                    opacity: 0,
                })
            })
        })
    }
function dropDownFnc() {
        dropDown.forEach(function (elem) {
            elem.addEventListener('mouseenter', function (dets) {
                if (window.screen.height >= '768') {
                    gsap.to(elem, {
                        height: '55%',
                        borderRadius: '25px'
                    })

                } else {
                    gsap.to(elem, {
                        height: '35%',
                        borderRadius: '25px'
                    })
                }
            })
            elem.addEventListener('mouseleave', function (dets) {
                gsap.to(elem, {
                    height: '7%'
                })
            })
        })
    }
function footerresponsive() {
        let footer = document.querySelector('footer')

        let iffooter = `<div id="footer-part-1">
                 <div id="footer-center">
                     <div id="logo">
                         <svg width="216" height="215" viewBox="0 0 216 215" xmlns="http:www.w3.org/2000/svg"
                             style="overflow:visible">
                             <path
                                 d="M51.7757 0C38.0521 0 24.8906 5.43423 15.1866 15.1072C5.48261 24.7802 0.0309982 37.8997 0.0309982 51.5794C0.0309982 65.2591 5.48261 78.3785 15.1866 88.0515C24.8906 97.7245 38.0521 103.159 51.7757 103.159C65.4992 103.159 78.6607 97.7245 88.3647 88.0515C98.0687 78.3785 103.52 65.2591 103.52 51.5794C103.52 37.8997 98.0687 24.7802 88.3647 15.1072C78.6607 5.43423 65.4992 0 51.7757 0Z"
                                 fill="var(--foreground)" data-svg-origin="51.775497406721115 51.579498291015625"
                                 transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                             <path
                                 d="M163.911 0C150.187 0 137.026 5.43423 127.322 15.1072C117.618 24.7802 112.166 37.8997 112.166 51.5794C112.166 65.2591 117.618 78.3785 127.322 88.0515C137.026 97.7245 150.187 103.159 163.911 103.159C177.634 103.159 190.796 97.7245 200.5 88.0515C210.204 78.3785 215.655 65.2591 215.655 51.5794C215.655 37.8997 210.204 24.7802 200.5 15.1072C190.796 5.43423 177.634 0 163.911 0Z"
                                 fill="var(--foreground)" data-svg-origin="163.9104995727539 51.579498291015625"
                                 transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                             <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M0 129.002L17.3035 111.753L51.795 146.135L86.2649 111.775L103.568 129.023L69.0982 163.383L103.562 197.737L86.2586 214.985L51.7947 180.631L17.3099 215.006L0.00634766 197.758L34.4914 163.383L0 129.002Z"
                                 fill="var(--foreground)" data-svg-origin="51.784000396728516 163.37949752807617"
                                 transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                             <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M112.128 128.988L129.431 111.739L163.923 146.121L198.393 111.761L215.696 129.009L181.226 163.369L215.69 197.722L198.386 214.971L163.923 180.617L129.438 214.992L112.134 197.744L146.619 163.369L112.128 128.988Z"
                                 fill="var(--foreground)" data-svg-origin="163.9119987487793 163.3655014038086"
                                 transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                         </svg>
                     </div>
                     <div>
                         <h4>&copy; Two Good Co. 2024</h4>
                         <a href="">
                             <h4>Terms of Use</h4>
                         </a>
                         <a href="">
                             <h4>Privacy Policy</h4>
                         </a>
                     </div>
                 </div>
                 <div id="footer-left-side" class="footer-side">
                     <h5>CONNECT WITH US</h5>
                     <a href="">
                         <h6>Facebook</h6>
                     </a> <a href="">
                         <h6>Instagram</h6>
                     </a> <a href="">
                         <h6>Twitter</h6>
                     </a> <a href="">
                         <h6>LinkedIn</h6>
                     </a> <a href="">
                         <h6>YouTube</h6>
                     </a>
                 </div>
                 <div id="footer-right-side" class="footer-side">
                     <h5>THE NITTY GRITTIES</h5>
                     <a href="">
                         <h6>Good Things FAQs</h6>
                     </a><a href="">
                         <h6>Good Food FAQs</h6>
                     </a><a href="">
                         <h6> Good Places</h6>
                     </a><a href="">
                         <h6>Pathways</h6>
                     </a><a href="">
                         <h6>Careers</h6>
                     </a><a href="">
                         <h6>Wholesale</h6>
                     </a>
                 </div>
             </div>
             <div id="footer-part-2">
                 <p>We are proud and privileged to have our home on this land, and to be able to continue the long
                     tradition of community coming together around food, begun thousands of years ago by First Nations
                     peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the
                     original custodians of this land, and we recognise their deep connection to land, water, sky and
                     community which continues today. We pay our deep respects to community elders, past, present and
                     emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres
                     Strait Islander peoples. Always was, always will be Aboriginal land.</p>
                     </div>`;
        let elsefooter = `<div id="footer-part-1">
                    <div id="logo">
                        <svg width="80" height="80" viewBox="0 0 216 215" xmlns="http://www.w3.org/2000/svg"
                            style="overflow:visible">
                            <path
                                d="M51.7757 0C38.0521 0 24.8906 5.43423 15.1866 15.1072C5.48261 24.7802 0.0309982 37.8997 0.0309982 51.5794C0.0309982 65.2591 5.48261 78.3785 15.1866 88.0515C24.8906 97.7245 38.0521 103.159 51.7757 103.159C65.4992 103.159 78.6607 97.7245 88.3647 88.0515C98.0687 78.3785 103.52 65.2591 103.52 51.5794C103.52 37.8997 98.0687 24.7802 88.3647 15.1072C78.6607 5.43423 65.4992 0 51.7757 0Z"
                                fill="var(--foreground)" data-svg-origin="51.775497406721115 51.579498291015625"
                                transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                            <path
                                d="M163.911 0C150.187 0 137.026 5.43423 127.322 15.1072C117.618 24.7802 112.166 37.8997 112.166 51.5794C112.166 65.2591 117.618 78.3785 127.322 88.0515C137.026 97.7245 150.187 103.159 163.911 103.159C177.634 103.159 190.796 97.7245 200.5 88.0515C210.204 78.3785 215.655 65.2591 215.655 51.5794C215.655 37.8997 210.204 24.7802 200.5 15.1072C190.796 5.43423 177.634 0 163.911 0Z"
                                fill="var(--foreground)" data-svg-origin="163.9104995727539 51.579498291015625"
                                transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 129.002L17.3035 111.753L51.795 146.135L86.2649 111.775L103.568 129.023L69.0982 163.383L103.562 197.737L86.2586 214.985L51.7947 180.631L17.3099 215.006L0.00634766 197.758L34.4914 163.383L0 129.002Z"
                                fill="var(--foreground)" data-svg-origin="51.784000396728516 163.37949752807617"
                                transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M112.128 128.988L129.431 111.739L163.923 146.121L198.393 111.761L215.696 129.009L181.226 163.369L215.69 197.722L198.386 214.971L163.923 180.617L129.438 214.992L112.134 197.744L146.619 163.369L112.128 128.988Z"
                                fill="var(--foreground)" data-svg-origin="163.9119987487793 163.3655014038086"
                                transform="matrix(1,0,0,1,0,0)" style="transform-origin: 0px 0px; opacity: 1;"></path>
                        </svg>
                    </div>
                    <div id="respn">
                        <div class="respn-footer">
                            <h5>CONNECT WITH US</h5>
                            <div id="respn-footer-left-side" class="footer-side">
                                <a href="">
                                    <h6>Facebook</h6>
                                </a> <a href="">
                                    <h6>Instagram</h6>
                                </a> <a href="">
                                    <h6>Twitter</h6>
                                </a> <a href="">
                                    <h6>LinkedIn</h6>
                                </a> <a href="">
                                    <h6>YouTube</h6>
                                </a>
                            </div>
                        </div>
                        <div class="respn-footer">
                            <h5>THE NITTY GRITTIES</h5>
                            <div id="footer-right-side" class="footer-side">
                                <a href="">
                                    <h6>Good Things FAQs</h6>
                                </a><a href="">
                                    <h6>Good Food FAQs</h6>
                                </a><a href="">
                                    <h6> Good Places</h6>
                                </a><a href="">
                                    <h6>Pathways</h6>
                                </a><a href="">
                                    <h6>Careers</h6>
                                </a><a href="">
                                    <h6>Wholesale</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer-part-2">
                    <h5>acknowledgement of country</h5>
                    <p>We are proud and privileged to have our home on this land, and to be able to continue the long
                        tradition of community coming together around food, begun thousands of years ago by First Nations
                        peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the
                        original custodians of this land, and we recognise their deep connection to land, water, sky and
                        community which continues today. We pay our deep respects to community elders, past, present and
                        emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres
                        Strait Islander peoples. Always was, always will be Aboriginal land.</p>
                </div>
                <div id="footer-part-3">
                    <h4>&copy; Two Good Co. 2024</h4>
                    <a href="">
                        <h4>Terms of Use</h4>
                    </a>
                    <a href="">
                        <h4>Privacy Policy</h4>
                    </a>
                </div>`
        if (window.innerHeight > '768') {
            footer.innerHTML = iffooter
        } else {
            footer.innerHTML = elsefooter
        }
    }
footerresponsive()




mainAnim()
cursoranim();
dropDownFnc();

