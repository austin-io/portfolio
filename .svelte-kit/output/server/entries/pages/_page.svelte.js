import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "../../chunks/ssr.js";
const Button_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "button.svelte-1qd44va{border:none;padding:0.4em 1em;border-radius:100vmax;font-weight:bold;cursor:pointer;color:black;background-color:transparent;transition:all 100ms ease-in-out}button.svelte-1qd44va:hover{background-color:rgba(0,0,0,0.1);scale:1.1}button.svelte-1qd44va:active{background-color:rgba(0,0,0,0.2);scale:0.95}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css$b);
  return `<button class="svelte-1qd44va">${slots.default ? slots.default({}) : ``}</button>`;
});
const MenuIcon = "/portfolio/_app/immutable/assets/hamburger_menu_icon.fd35012e.svg";
const Resume = "/portfolio/_app/immutable/assets/AustinPoberezhnik_Resume.cf5eb96f.pdf";
const Nav_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".nav.svelte-i2vr8m.svelte-i2vr8m{position:fixed;width:100%;z-index:10}.nav.svelte-i2vr8m>section.svelte-i2vr8m{background-color:white;border-radius:1rem;box-shadow:rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;display:flex;justify-content:space-between}img.svelte-i2vr8m.svelte-i2vr8m{width:1.2rem}.menuRoot.svelte-i2vr8m.svelte-i2vr8m{position:relative}.menu.svelte-i2vr8m.svelte-i2vr8m{position:absolute;right:0;top:4rem;width:12rem;background-color:white;padding:1rem;border-radius:1rem;box-shadow:rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px}.menu.svelte-i2vr8m li.svelte-i2vr8m{list-style:none;display:block}.menuButton.svelte-i2vr8m.svelte-i2vr8m{padding:0.4rem 1.4rem;border-radius:100vmax;display:block;text-decoration:none;color:#333}.menuButton.svelte-i2vr8m.svelte-i2vr8m:hover{background-color:#eee}.logo.svelte-i2vr8m.svelte-i2vr8m{font-weight:bold}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showMenu = false;
  $$result.css.add(css$a);
  return `<nav class="p1 nav svelte-i2vr8m"><section class="center p1 svelte-i2vr8m"><a class="menuButton logo svelte-i2vr8m" href="#id_home" data-svelte-h="svelte-16er6um">Austin IO</a> <div class="menuRoot svelte-i2vr8m">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
        showMenu = !showMenu;
      }
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", MenuIcon, 0)} alt="Menu" class="svelte-i2vr8m">`;
      }
    }
  )} ${showMenu ? `<div class="menu svelte-i2vr8m"><ul><li class="svelte-i2vr8m"><a class="menuButton svelte-i2vr8m" href="#id_home" data-svelte-h="svelte-1kmokq6">Home</a></li> <li class="svelte-i2vr8m"><a class="menuButton svelte-i2vr8m" href="#id_about" data-svelte-h="svelte-otxgha">About Me</a></li> <li class="svelte-i2vr8m"><a class="menuButton svelte-i2vr8m" href="#id_projects" data-svelte-h="svelte-1acuex0">Projects</a></li> <li class="svelte-i2vr8m"><a class="menuButton svelte-i2vr8m" href="#id_contact" data-svelte-h="svelte-xxlxi6">Contact</a></li> <li class="svelte-i2vr8m"><a class="menuButton svelte-i2vr8m"${add_attribute("href", Resume, 0)} download>Resume</a></li></ul></div>` : ``}</div></section></nav>`;
});
const VrImage = "/portfolio/_app/immutable/assets/vr_headset.964e83b4.gif";
const ColorButton_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "button.svelte-qi3tyh{border:none;padding:0.4em 1em;border-radius:100vmax;font-weight:bold;cursor:pointer;background-color:var(--bgColor);color:white;font-size:var(--fs);transition:all 100ms ease-in-out}button.svelte-qi3tyh:hover{color:var(--bgColor);background-color:transparent;outline:2px solid var(--bgColor);scale:1.1}button.svelte-qi3tyh:active{color:var(--bgColor);scale:0.95}",
  map: null
};
const ColorButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  let { bgColor = "#4400ff" } = $$props;
  let { size = 1 } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$9);
  return `<button style="${"--bgColor: " + escape(bgColor, true) + "; --fs: " + escape(size, true) + "em;"}" class="svelte-qi3tyh">${slots.default ? slots.default({}) : ``}</button>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "section.svelte-1vmz4j3{margin-bottom:4rem}.visual.svelte-1vmz4j3{width:100%;aspect-ratio:16/9;border-radius:1rem}img.visual.svelte-1vmz4j3{object-fit:cover;cursor:pointer}p.svelte-1vmz4j3{text-align:center;padding-top:2rem}h1.svelte-1vmz4j3{font-size:calc(min(5rem, 10vw));text-align:center;padding:0;padding-bottom:1rem;padding-top:0rem;margin-top:0}.btnHolder.svelte-1vmz4j3{text-align:center;margin-bottom:3rem}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showVideo = false;
  $$result.css.add(css$8);
  return `<section id="id_home" class="svelte-1vmz4j3"><p class="svelte-1vmz4j3" data-svelte-h="svelte-1ik2dq7">Hi there, I&#39;m Austin. Let&#39;s,</p> <h1 class="py2 svelte-1vmz4j3" data-svelte-h="svelte-15v1cew">Explore a new <span class="grad">Reality.</span></h1> <div class="mb1 btnHolder svelte-1vmz4j3">${validate_component(ColorButton, "ColorButton").$$render(
    $$result,
    {
      size: 1.2,
      bgColor: "#8800ff",
      onClick: () => {
        showVideo = !showVideo;
      }
    },
    {},
    {
      default: () => {
        return `${escape(showVideo ? "Hide Video" : "Play Video")}`;
      }
    }
  )}</div> ${showVideo ? `<iframe class="mb1 visual svelte-1vmz4j3" src="https://www.youtube.com/embed/ePG48UuP-EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` : `<img class="mb1 visual svelte-1vmz4j3"${add_attribute("src", VrImage, 0)} alt="vr placeholder">`}</section>`;
});
const alconLogo = "/portfolio/_app/immutable/assets/alcon_logo.d86d00f8.png";
const abbottLogo = "/portfolio/_app/immutable/assets/abbott_logo.43430082.png";
const elaraLogo = "data:image/png;base64,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";
const smithnephewLogo = "/portfolio/_app/immutable/assets/smith_nephew_logo.b518d159.png";
const Companies_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "section.svelte-1vavy3p.svelte-1vavy3p{display:flex;justify-content:space-between;align-content:center;align-items:center;flex-wrap:wrap;flex-basis:1;background-color:white;gap:1rem;padding:1rem;border-top:1px solid #eee;border-bottom:1px solid #eee;margin-bottom:4rem}section.svelte-1vavy3p>div.svelte-1vavy3p{min-width:200px;margin-inline:auto;height:4rem}section.svelte-1vavy3p img.svelte-1vavy3p{object-fit:contain;max-width:100%;max-height:100%;filter:grayscale(1)}",
  map: null
};
const Companies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const logos = [
    {
      name: "Alcon",
      link: "https://www.alcon.com/",
      img: alconLogo
    },
    {
      name: "Abbott",
      link: "https://www.abbott.com/",
      img: abbottLogo
    },
    {
      name: "Elara Systems",
      link: "https://elarasystems.com/",
      img: elaraLogo
    },
    {
      name: "Smith and Nephew",
      link: "https://www.smith-nephew.com/en-us",
      img: smithnephewLogo
    }
  ];
  $$result.css.add(css$7);
  return `<section class="svelte-1vavy3p">${each(logos, (logo) => {
    return `<div class="svelte-1vavy3p"><a${add_attribute("href", logo.link, 0)}><img${add_attribute("src", logo.img, 0)}${add_attribute("alt", logo.name, 0)} class="svelte-1vavy3p"></a> </div>`;
  })}</section>`;
});
const Portrait = "/portfolio/_app/immutable/assets/portrait.02bdbe74.png";
const About_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "h3.svelte-f4bpf4.svelte-f4bpf4{font-size:2rem}.split.svelte-f4bpf4.svelte-f4bpf4{display:grid;grid-template-columns:1fr 2fr;gap:3rem}.right.svelte-f4bpf4.svelte-f4bpf4{display:grid;place-items:center}.right.svelte-f4bpf4>div.svelte-f4bpf4{padding-bottom:2rem}img.svelte-f4bpf4.svelte-f4bpf4{border-radius:1rem;object-fit:cover;height:100%}p.svelte-f4bpf4.svelte-f4bpf4{line-height:2rem;word-spacing:4px}@media screen and (max-width: 700px){.split.svelte-f4bpf4.svelte-f4bpf4{grid-template-columns:1fr;grid-template-rows:auto auto}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section id="id_about" class="mb4"><h2 class="mb3 title" data-svelte-h="svelte-1xp5wtb"><span class="grad">Who</span> am I?</h2> <div class="split svelte-f4bpf4"><div class="left"><img${add_attribute("src", Portrait, 0)} alt="Portrait picture" class="svelte-f4bpf4"></div> <div class="right svelte-f4bpf4" data-svelte-h="svelte-1w890bv"><div class="svelte-f4bpf4"><h3 class="mb2 svelte-f4bpf4">I&#39;m Austin</h3> <p class="svelte-f4bpf4">A Software Engineer in Portland with over 5 years of experience. I&#39;ve had the pleasure of working with several Fortune 500 companies, creating innovative projects in Virtual Reality and amazing games. I&#39;ve been a huge fan of video games all my life, and want to make them until I become an old grey wizard.</p></div></div></div></section>`;
});
const snapPreview = "/portfolio/_app/immutable/assets/snapPreview.868ec69f.png";
const fidelisPreview = "/portfolio/_app/immutable/assets/optimized_fidelis_preview.494784fe.png";
const forkliftPreview = "/portfolio/_app/immutable/assets/optimized_forklift_preview.0ed2242a.png";
const celltypesPreview = "/portfolio/_app/immutable/assets/optimized_celltypes_preview.e6e65610.png";
const assassinPreview = "/portfolio/_app/immutable/assets/optimized_assassin_preview.d5845913.png";
const labPreview = "/portfolio/_app/immutable/assets/optimized_lab_preview.e179a876.png";
const snapGif = "/portfolio/_app/immutable/assets/snap.feaf192f.gif";
const fidelisGif = "/portfolio/_app/immutable/assets/fidelis.f95fcdab.gif";
const forkliftGif = "/portfolio/_app/immutable/assets/forklift.273c51be.gif";
const bloodstreamGif = "/portfolio/_app/immutable/assets/bloodstream.b864c233.gif";
const assassinGif = "/portfolio/_app/immutable/assets/assassin.5adeef85.gif";
const labGif = "/portfolio/_app/immutable/assets/lab.707b6dd9.gif";
const snapImg2 = "/portfolio/_app/immutable/assets/snap_img2.5a28daf0.png";
const snapImg3 = "/portfolio/_app/immutable/assets/snap_img3.0e488db4.png";
const snapImg4 = "/portfolio/_app/immutable/assets/snap_img4.f65c43f3.png";
const snapImg5 = "/portfolio/_app/immutable/assets/snap_img5.4f0baf3b.png";
const fidelisImg1 = "/portfolio/_app/immutable/assets/fidelis_img1.583bba78.png";
const fidelisImg2 = "/portfolio/_app/immutable/assets/fidelis_img2.1c7a7bf7.png";
const fidelisImg3 = "/portfolio/_app/immutable/assets/fidelis_img3.a8fa7bfd.png";
const fidelisImg4 = "/portfolio/_app/immutable/assets/fidelis_img4.0c9efa6e.png";
const fidelisImg5 = "/portfolio/_app/immutable/assets/fidelis_img5.d01facc6.png";
const fidelisImg6 = "/portfolio/_app/immutable/assets/fidelis_img6.c3fcecdb.png";
const fidelisImg7 = "/portfolio/_app/immutable/assets/fidelis_img7.2b672bce.png";
const assassinImg1 = "/portfolio/_app/immutable/assets/assassin_img1.2d9f5c02.png";
const assassinImg2 = "/portfolio/_app/immutable/assets/assassin_img2.bd4771c2.png";
const assassinImg3 = "/portfolio/_app/immutable/assets/assassin_img3.cb0bf85e.png";
const assassinImg4 = "/portfolio/_app/immutable/assets/assassin_img4.0efeb0a3.png";
const assassinImg5 = "/portfolio/_app/immutable/assets/assassin_img5.c6f1564e.png";
const assassinImg6 = "/portfolio/_app/immutable/assets/assassin_img6.04eeaba0.png";
const bloodstreamImg1 = "/portfolio/_app/immutable/assets/bloodstream_img1.a0c821c7.png";
const bloodstreamImg2 = "/portfolio/_app/immutable/assets/bloodstream_img2.a48d5d77.png";
const bloodstreamImg3 = "/portfolio/_app/immutable/assets/bloodstream_img3.d3c5bb65.png";
const bloodstreamImg4 = "/portfolio/_app/immutable/assets/bloodstream_img4.6ac201b9.png";
const bloodstreamImg5 = "/portfolio/_app/immutable/assets/bloodstream_img5.8518aad5.png";
const bloodstreamImg6 = "/portfolio/_app/immutable/assets/bloodstream_img6.7f8cdc6c.png";
const forkliftImg1 = "/portfolio/_app/immutable/assets/forklift_img1.62efbcd7.png";
const forkliftImg2 = "/portfolio/_app/immutable/assets/forklift_img2.db19151c.png";
const forkliftImg3 = "/portfolio/_app/immutable/assets/forklift_img3.6634e229.png";
const forkliftImg4 = "/portfolio/_app/immutable/assets/forklift_img4.575b25e7.png";
const forkliftImg5 = "/portfolio/_app/immutable/assets/forklift_img5.b780d504.png";
const forkliftImg6 = "/portfolio/_app/immutable/assets/forklift_img6.5da1e9ab.png";
const labImg1 = "/portfolio/_app/immutable/assets/lab_img1.5d1c6b56.png";
const labImg2 = "/portfolio/_app/immutable/assets/lab_img2.4df8e40e.png";
const labImg3 = "/portfolio/_app/immutable/assets/lab_img3.8bc2031b.png";
const labImg4 = "/portfolio/_app/immutable/assets/lab_img4.19425443.png";
const labImg5 = "/portfolio/_app/immutable/assets/lab_img5.657b351c.png";
const labImg6 = "/portfolio/_app/immutable/assets/lab_img6.17db18cc.png";
const Modal_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'dialog.svelte-aj7sa7.svelte-aj7sa7{width:100%;max-width:800px;border:none;margin:auto;padding:1rem;background-color:transparent}dialog.svelte-aj7sa7.svelte-aj7sa7::backdrop{background-color:#000a}.modal.svelte-aj7sa7.svelte-aj7sa7{width:100%;border-radius:1rem;padding:1rem;background-color:white;box-shadow:rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px}h1.svelte-aj7sa7.svelte-aj7sa7{font-size:1.2rem}.closeRow.svelte-aj7sa7.svelte-aj7sa7{display:flex;justify-content:end}.links.svelte-aj7sa7.svelte-aj7sa7{display:flex;justify-content:start;flex-wrap:wrap;align-items:center;gap:1rem}.scroller.svelte-aj7sa7.svelte-aj7sa7{width:100%;aspect-ratio:16/9;display:flex;overflow-x:scroll;gap:1rem;border-radius:1rem}.scroller.svelte-aj7sa7>img.svelte-aj7sa7{flex:0 0 auto;width:auto;max-width:100%;object-fit:cover;object-position:center;aspect-ratio:16/9;margin-bottom:1rem;border-radius:1rem;background-image:url("https://fastly.picsum.photos/id/167/5/5.jpg?hmac=UlFZmyGkCC12ueTPyrYlsT9PFaCqyvXyCQ-AHJiVNKI");background-position:center;background-size:cover}',
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let dialog = null;
  let modal = null;
  let { heading = "Heading" } = $$props;
  let { content = "Content" } = $$props;
  let { gif = "http://127.0.0.1:5173/portfolio/src/lib/images/vr_headset.gif" } = $$props;
  let { links = [] } = $$props;
  let { slides = [
    "https://picsum.photos/400",
    "https://picsum.photos/400",
    "https://picsum.photos/400"
  ] } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.gif === void 0 && $$bindings.gif && gif !== void 0)
    $$bindings.gif(gif);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  $$result.css.add(css$5);
  return `<dialog class="svelte-aj7sa7"${add_attribute("this", dialog, 0)}><div class="modal svelte-aj7sa7"${add_attribute("this", modal, 0)}><div class="closeRow mb1 svelte-aj7sa7">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
        dialog.close();
      }
    },
    {},
    {
      default: () => {
        return `Close`;
      }
    }
  )}</div> <div class="scroller mb1 svelte-aj7sa7" style="${"--bgGif: url(" + escape(gif, true) + ")"}">${each(slides, (image) => {
    return `<img${add_attribute("src", image, 0)} alt="Preview image" class="svelte-aj7sa7">`;
  })}</div> <div class="details mb2"><h1 class="svelte-aj7sa7">${escape(heading)}</h1> <p>${escape(content)}</p></div> <div class="links svelte-aj7sa7"><p data-svelte-h="svelte-hwhy0a"><strong>Links:</strong></p> ${each(links, (link) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        onClick: () => {
          window.open(link.url);
        }
      },
      {},
      {
        default: () => {
          return `${escape(link.name)}`;
        }
      }
    )}`;
  })}</div></div></dialog>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".grid.svelte-17pxlao.svelte-17pxlao{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(300px, 100%), 1fr));gap:1rem;padding:1rem;border-radius:1rem;background-color:#fafafa}.card.svelte-17pxlao.svelte-17pxlao{padding:1rem;border-radius:1rem;background-color:white;box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px;display:grid;grid-template-rows:auto 1fr auto;transition:all 100ms ease-in-out}.card.svelte-17pxlao.svelte-17pxlao:hover{box-shadow:rgba(149, 157, 165, 0.5) 0px 36px 24px;transform:translateY(-0.5rem)}.cardImage.svelte-17pxlao.svelte-17pxlao{position:relative;background-size:cover;background-position:center;border-radius:1rem;aspect-ratio:16/10;background-image:var(--bgImage)}.card.svelte-17pxlao:hover .cardImage.svelte-17pxlao{background-image:var(--bgGif)}.cardImage.svelte-17pxlao>div.svelte-17pxlao{position:absolute;right:0.5rem;bottom:0.5rem;background-color:#000a;color:white;font-weight:bold;border-radius:1rem;padding:0.1rem 0.5rem}.cardBody.svelte-17pxlao.svelte-17pxlao{padding:0rem 1rem}.cardBtn.svelte-17pxlao.svelte-17pxlao{padding-top:1rem;display:flex;justify-content:end}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  let modalHeader = "";
  let modalContent = "";
  let modalLinks = [];
  let modalSlides = [];
  let modalData = [
    {
      name: "Marvel SNAP",
      text: "A live service card game featuring a collection of different characters from the Marvel Universe. Developed with Demiurge Studios and Second Dinner",
      links: [
        {
          name: "Demiurge",
          url: "https://demiurgestudios.com/"
        },
        {
          name: "Marvel SNAP",
          url: "https://www.marvelsnap.com/home"
        },
        {
          name: "Second Dinner",
          url: "https://seconddinner.com/"
        }
      ],
      slides: [snapPreview, snapImg2, snapImg3, snapImg4, snapImg5],
      image: snapPreview,
      gif: snapGif
    },
    {
      name: "Fidelis",
      text: "A high fidelity Cataract Surgical Simulator in VR designed to train new Ophthamologists around the world. Developed with Alcon and Elara Systems Inc.",
      links: [
        {
          name: "Alcon",
          url: "https://www.alcon.com/media-release/alcon-introduces-state-art-virtual-reality-surgical-training-technology"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/posts/myalcon_training-education-apao-activity-7048564541424640000-xFmz/?utm_source=share&utm_medium=member_desktop"
        },
        {
          name: "Elara",
          url: "https://elarasystems.com/"
        }
      ],
      slides: [
        fidelisImg1,
        fidelisImg2,
        fidelisImg3,
        fidelisImg4,
        fidelisImg5,
        fidelisImg6,
        fidelisImg7
      ],
      image: fidelisPreview,
      gif: fidelisGif
    },
    {
      name: "Forklift Trainer VR",
      text: "A forklift simulation program designed to train new drivers the basics of forklift mobility and operations. Developed at Elara Systems Inc.",
      links: [
        {
          name: "Elara",
          url: "https://elarasystems.com/"
        },
        {
          name: "Youtube",
          url: "https://www.youtube.com/watch?v=WCSfHTEESCE"
        }
      ],
      slides: [
        forkliftImg5,
        forkliftImg2,
        forkliftImg3,
        forkliftImg4,
        forkliftImg1,
        forkliftImg6
      ],
      image: forkliftPreview,
      gif: forkliftGif
    },
    {
      name: "Cell Types XR",
      text: "An educational experience that allows the user to explore various cells and bacteria in the human bloodstream. Developed at Elara Systems Inc.",
      links: [
        {
          name: "Elara",
          url: "https://elarasystems.com/"
        },
        {
          name: "Youtube",
          url: "https://www.youtube.com/watch?v=gzaeIta2FaY"
        }
      ],
      slides: [
        bloodstreamImg6,
        bloodstreamImg1,
        bloodstreamImg2,
        bloodstreamImg3,
        bloodstreamImg4,
        bloodstreamImg5
      ],
      image: celltypesPreview,
      gif: bloodstreamGif
    },
    {
      name: "Veggie Assassin XR",
      text: "An exciting game of reflexes inspired by the hit mobile game Fruit Ninja. Independently developed.",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/austin-io/VeggieAssassinXR"
        }
      ],
      slides: [
        assassinImg5,
        assassinImg6,
        assassinImg4,
        assassinImg2,
        assassinImg3,
        assassinImg1
      ],
      image: assassinPreview,
      gif: assassinGif
    },
    {
      name: "Lab XR",
      text: "A collection of rooms full of interactive VR experiences, demonstrating a variety of complex algorithms. Independently developed.",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/austin-io/LabXR"
        }
      ],
      slides: [labImg1, labImg2, labImg3, labImg4, labImg5, labImg6],
      image: labPreview,
      gif: labGif
    }
  ];
  const updateModal = (_h, _c, _l, _s) => {
    modalHeader = _h;
    modalContent = _c;
    modalLinks = _l;
    modalSlides = [];
    modalSlides = _s;
    showModal = true;
  };
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section id="id_projects" class="mb4"><h2 class="mb3 title" data-svelte-h="svelte-7kafd3">My <span class="grad">Projects</span></h2> <div class="grid svelte-17pxlao">${each(modalData, (project) => {
      return `<div class="card svelte-17pxlao"><div class="cardImage mb1 svelte-17pxlao" style="${"--bgImage: url(" + escape(project.image, true) + "); --bgGif: url(" + escape(project.gif, true) + ");"}"><div class="svelte-17pxlao" data-svelte-h="svelte-sfmp8c">GIF</div></div> <div class="cardBody svelte-17pxlao"><h3>${escape(project.name)}</h3> <p>${escape(project.text)}</p></div> <div class="cardBtn svelte-17pxlao">${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: () => {
            updateModal(project.name, project.text, project.links, project.slides);
          }
        },
        {},
        {
          default: () => {
            return `More info`;
          }
        }
      )}</div> </div>`;
    })}</div></section> ${showModal ? `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        heading: modalHeader,
        content: modalContent,
        links: modalLinks,
        slides: modalSlides,
        show: showModal
      },
      {
        show: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const TomPic = "/portfolio/_app/immutable/assets/TomCap.bec67f0f.jpeg";
const KylePic = "/portfolio/_app/immutable/assets/KyleLum.eb2018b8.jpeg";
const JustinPic = "/portfolio/_app/immutable/assets/JustinPatterson.d53cd256.png";
const Testimonials_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".grid.svelte-cyw2y2.svelte-cyw2y2{display:flex;gap:1rem;flex-wrap:wrap}.gridItem.svelte-cyw2y2.svelte-cyw2y2{flex:1 1 300px;padding:1rem;border-radius:1rem;text-align:center;min-width:min(300px, 100%)}.gridItem.svelte-cyw2y2>img.svelte-cyw2y2{width:100px;border-radius:100vmax;margin-inline:auto;box-shadow:rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px}.quote.svelte-cyw2y2.svelte-cyw2y2{max-width:400px;margin-inline:auto}.bar.svelte-cyw2y2.svelte-cyw2y2{padding:1rem;border-radius:1rem;height:4rem;background:#fafafa}",
  map: null
};
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="mb4"><div class="bar mb4 svelte-cyw2y2"></div> <h2 class="mb3 title" data-svelte-h="svelte-1drqgiz"><span class="grad">Testimonials</span></h2> <div class="grid mb4 svelte-cyw2y2"><div class="gridItem svelte-cyw2y2"><img class="mb2 svelte-cyw2y2"${add_attribute("src", TomPic, 0)}> <h3 class="" data-svelte-h="svelte-1ckjp0q">Tom Cappelletti</h3> <p data-svelte-h="svelte-fgisj0"><i>Professor at SCC</i></p> <p class="quote svelte-cyw2y2" data-svelte-h="svelte-149cqcn">Eager and capable to work on some of the toughest problems, Austin is a tremendous asset to any team.</p></div> <div class="gridItem svelte-cyw2y2"><img class="mb2 svelte-cyw2y2"${add_attribute("src", JustinPic, 0)}> <h3 class="" data-svelte-h="svelte-no1n5e">Justin Patterson</h3> <p data-svelte-h="svelte-1c1834b"><i>Lead XR Developer</i></p> <p class="quote svelte-cyw2y2" data-svelte-h="svelte-1e0nooz">Beyond being an excellent, inventive colleague in engineering, he&#39;s also personable and kind.</p></div> <div class="gridItem svelte-cyw2y2"><img class="mb2 svelte-cyw2y2"${add_attribute("src", KylePic, 0)}> <h3 class="" data-svelte-h="svelte-1drp1ni">Kyle Lum</h3> <p data-svelte-h="svelte-13wks2n"><i>XR Production Manager</i></p> <p class="quote svelte-cyw2y2" data-svelte-h="svelte-pjxsz4">Whatever the problem is, you can be confident that Austin will be able to figure out the solution.</p></div></div> <div class="bar mb4 svelte-cyw2y2"></div></section>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.pretext.svelte-w0t65j.svelte-w0t65j{text-align:center}form.svelte-w0t65j.svelte-w0t65j{max-width:600px;margin-inline:auto}form.svelte-w0t65j>.svelte-w0t65j{margin-bottom:1rem}input.svelte-w0t65j.svelte-w0t65j,textarea.svelte-w0t65j.svelte-w0t65j{padding:1rem;border-radius:1rem;border:1px solid #aaa;width:100%;display:block;font-family:"Poppins", sans-serif;font-size:1rem}textarea.svelte-w0t65j.svelte-w0t65j{resize:vertical;min-height:10rem}',
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formName = "";
  let formMessage = "";
  $$result.css.add(css$2);
  return `<section id="id_contact" class="mb4"><h2 class="mb3 title" data-svelte-h="svelte-wuzzyn"><span class="grad">Contact</span> Me</h2> <p class="pretext mb2 svelte-w0t65j">Send me a message!<br>You can also follow me on <a href="https://www.linkedin.com/in/austin-poberezhnik-4570b3167/" target="_blank" rel="noopener noreferrer" data-svelte-h="svelte-f4hhy0">LinkedIn</a>, or download my <a${add_attribute("href", Resume, 0)} download>resume here!</a></p> <form class="svelte-w0t65j"><h3 class="svelte-w0t65j" data-svelte-h="svelte-rgk2h7">Name</h3> <input type="text" class="svelte-w0t65j"${add_attribute("value", formName, 0)}> <h3 class="svelte-w0t65j" data-svelte-h="svelte-gh371n">Message</h3> <textarea class="svelte-w0t65j">${escape("")}</textarea> ${validate_component(ColorButton, "ColorButton").$$render(
    $$result,
    {
      bgColor: "#80f",
      onClick: () => {
        window.open(`mailto:austinypwork+website@gmail.com?subject=${formName} wants to talk&body=${formMessage}`);
      }
    },
    {},
    {
      default: () => {
        return `Send Email`;
      }
    }
  )}</form></section>`;
});
const Main_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".main.svelte-1p96qa3{margin-top:6rem}",
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="center px2 main svelte-1p96qa3"> ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Companies, "Companies").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</main>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".footer.svelte-zvjea9{background-color:#fafafa}p.svelte-zvjea9,a.svelte-zvjea9{color:#888}a.svelte-zvjea9{text-decoration:none}a.svelte-zvjea9:hover{text-decoration:underline}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="px2 py1 center footer svelte-zvjea9"><p class="svelte-zvjea9" data-svelte-h="svelte-1hjw8gr"><a href="https://www.linkedin.com/in/austin-poberezhnik-4570b3167/" target="_blank" rel="noopener noreferrer" class="svelte-zvjea9">LinkedIn</a></p> <p class="svelte-zvjea9" data-svelte-h="svelte-97a3lk"><a href="https://github.com/austin-io" target="_blank" rel="noopener noreferrer" class="svelte-zvjea9">GitHub</a></p> <p class="svelte-zvjea9" data-svelte-h="svelte-1baiowd"><a href="mailto:austinypwork@gmail.com" target="_blank" rel="noopener noreferrer" class="svelte-zvjea9">Email</a></p> <p class="mb1 svelte-zvjea9"><a${add_attribute("href", Resume, 0)} download class="svelte-zvjea9">Resume</a></p> <p class="svelte-zvjea9">Copyright © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p></footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-94wd6h_START --><style data-svelte-h="svelte-1oxtj0z">@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        html {
            scroll-padding: 5rem;
        }

        img, picture, video, svg {
            width: 100%;
            display: block;
        }
        
        body {
            width: 100%;
            min-height: 100svh;
            display: grid;
            grid-template-rows: 1fr auto;
            font-family: 'Poppins', sans-serif;
            background-color: white;
        }

        .center {
            width: 100%;
            max-width: 1280px;
            margin-inline: auto;
        }

        .p1 {
            padding: 1rem;
        }

        .px1 {
            padding-right: 1rem;
            padding-left: 1rem;
        }

        .py1 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .px2 {
            padding-right: 2rem;
            padding-left: 2rem;
        }

        .py2 {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        .mb1 { margin-bottom: 1rem;}
        .mb2 { margin-bottom: 2rem;}
        .mb3 { margin-bottom: 3rem;}
        .mb4 { margin-bottom: 4rem;}

        .title {
            font-size: calc(min(4rem, 10vw));
            text-align: center;
        }

        .grad {
            background: -webkit-linear-gradient(#eeeeee, #4400ff);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

    </style>${$$result.title = `<title>Austin IO</title>`, ""}<!-- HEAD_svelte-94wd6h_END -->`, ""} ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(Main, "Main").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
