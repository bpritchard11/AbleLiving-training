/* @ds-bundle: {"format":4,"namespace":"AbleLivingDesignSystem_39ee0d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Pullquote","sourcePath":"components/feedback/Callout.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"ValueCard","sourcePath":"components/layout/Card.jsx"},{"name":"NumberedStep","sourcePath":"components/layout/NumberedStep.jsx"},{"name":"StatStamp","sourcePath":"components/layout/NumberedStep.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"PageHeaderBar","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8fa01542935e","components/core/Button.jsx":"fe3278018687","components/feedback/Callout.jsx":"bef6dae8a1f0","components/layout/Card.jsx":"ba06a268ae63","components/layout/NumberedStep.jsx":"f446a053c750","components/layout/SectionHeader.jsx":"c2f88e5eb093","components/navigation/Footer.jsx":"0627ae05124d","components/navigation/NavBar.jsx":"d759f7f2ef0f","deliverables/doc-page.js":"371bab66f42d","ui_kits/website/Homepage.jsx":"6f23c0c8dd18","ui_kits/website/Services.jsx":"52e5a6b2435c","ui_kits/website/WhoWeServe.jsx":"4fac25739f00"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AbleLivingDesignSystem_39ee0d = window.AbleLivingDesignSystem_39ee0d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--mist)',
      color: 'var(--sage)'
    },
    success: {
      background: '#E7ECE0',
      color: 'var(--leaf)'
    },
    accent: {
      background: 'var(--blue-soft)',
      color: 'var(--navy)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...t
    }
  }, children);
}
function Eyebrow({
  children,
  icon = true,
  iconSrc = '/assets/icons/bloom.svg'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      fontSize: 12,
      color: 'var(--leaf)'
    }
  }, icon && /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line)'
    }
  }));
}
Object.assign(__ds_scope, { Badge, Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  md: {
    padding: '13px 28px',
    fontSize: 15
  },
  sm: {
    padding: '9px 20px',
    fontSize: 13
  }
};
const variants = {
  primary: {
    background: 'var(--navy)',
    color: '#fff',
    border: '1px solid var(--navy)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--navy)',
    border: '1px solid var(--navy)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--leaf)',
    border: '1px solid transparent'
  },
  onDark: {
    background: '#fff',
    color: 'var(--navy)',
    border: '1px solid #fff'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: s.fontSize,
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'opacity var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = '0.85';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = disabled ? '0.45' : '1';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function Callout({
  children,
  tone = 'gold'
}) {
  const borderColor = tone === 'gold' ? 'var(--gold)' : 'var(--blue)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mist)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      borderLeft: `3px solid ${borderColor}`,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--sage)',
      lineHeight: 1.6
    }
  }, children);
}
function Pullquote({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lede)',
      lineHeight: 1.4,
      color: 'var(--navy)',
      borderLeft: '3px solid var(--gold)',
      paddingLeft: 24,
      margin: '34px 0 0',
      fontWeight: 400,
      fontStyle: 'italic'
    }
  }, children);
}
Object.assign(__ds_scope, { Callout, Pullquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function Card({
  children,
  tone = 'light',
  dashed = false,
  style
}) {
  const tones = {
    light: {
      background: '#fff',
      border: '1px solid var(--line)',
      color: 'var(--ink)'
    },
    sunken: {
      background: 'var(--mist)',
      border: dashed ? '1px dashed var(--line)' : '1px solid var(--line)',
      color: 'var(--ink)'
    },
    dark: {
      background: 'var(--surface-dark-gradient)',
      border: 'none',
      color: '#fff'
    }
  };
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      ...t,
      ...style
    }
  }, children);
}
function ValueCard({
  title,
  children,
  tone = 'light'
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: tone
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      marginBottom: 8,
      color: tone === 'dark' ? '#fff' : 'var(--navy)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: tone === 'dark' ? 'var(--blue-soft)' : 'var(--sage)',
      lineHeight: 1.55
    }
  }, children));
}
Object.assign(__ds_scope, { Card, ValueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/NumberedStep.jsx
try { (() => {
function NumberedStep({
  number,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--navy)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      margin: '0 auto 14px'
    }
  }, number), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--navy)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--sage)',
      lineHeight: 1.55
    }
  }, children));
}
function StatStamp({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      padding: '22px 18px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 32,
      color: 'var(--navy)',
      fontWeight: 600
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--sage)',
      marginTop: 4
    }
  }, label));
}
Object.assign(__ds_scope, { NumberedStep, StatStamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NumberedStep.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  iconSrc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      marginBottom: 30
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    iconSrc: iconSrc
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--navy)',
      fontSize: 'var(--text-h1)',
      lineHeight: 1.15,
      marginBottom: description ? 16 : 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lede)',
      color: 'var(--navy)',
      maxWidth: 760,
      lineHeight: 1.4,
      margin: align === 'center' ? '0 auto' : 0
    }
  }, description));
}
function PageHeaderBar({
  kicker,
  title,
  crumbs
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy)',
      color: '#fff',
      padding: '36px 40px',
      fontFamily: 'var(--font-sans)'
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--blue-soft)',
      fontWeight: 700
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      marginTop: 4
    }
  }, title), crumbs && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--blue-soft)',
      marginTop: 8
    }
  }, crumbs));
}
Object.assign(__ds_scope, { SectionHeader, PageHeaderBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc = '/assets/logo/ableliving-logo-full-color.png'
}) {
  const cols = [{
    h: 'Company',
    items: ['Services', 'Who We Serve', 'About', 'Contact']
  }, {
    h: 'Service Areas',
    items: ['Florida', 'Ohio']
  }, {
    h: 'Get Started',
    items: ['Check Eligibility', 'Partner With Us']
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy)',
      color: '#fff',
      padding: '40px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 8,
      padding: '6px 10px',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    style: {
      height: 24,
      width: 'auto'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 10
    }
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 13,
      color: 'var(--blue-soft)',
      marginBottom: 6
    }
  }, i))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  active = 'Home',
  logoSrc = '/assets/logo/ableliving-logo-full-color.png'
}) {
  const links = [['Home', 'home'], ['Services', 'services'], ['Who We Serve', 'who-we-serve'], ['Service Areas', 'service-areas'], ['About', 'about']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      background: '#fff',
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    style: {
      height: 32,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, links.map(([l, slug]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    "data-nav": slug,
    style: {
      fontSize: 14,
      fontWeight: active === l ? 700 : 500,
      color: 'var(--navy)',
      cursor: 'pointer'
    }
  }, l)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm"
  }, "Check Eligibility")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// deliverables/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deliverables/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
function Homepage({
  navigate
}) {
  const {
    NavBar,
    Footer,
    Button,
    Badge,
    SectionHeader,
    StatStamp,
    Card,
    Pullquote
  } = window.AbleLivingDesignSystem_39ee0d;
  const wrap = {
    maxWidth: 980,
    margin: '0 auto',
    padding: '0 32px'
  };
  const section = {
    padding: '64px 0',
    borderTop: '1px solid var(--line)'
  };
  const placeholder = {
    border: '1px dashed var(--blue-soft)',
    borderRadius: 12,
    background: 'var(--mist)',
    color: 'var(--sage)',
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 24
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Home",
    logoSrc: "../../assets/logo/ableliving-logo-full-color.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg,#fff,var(--mist))',
      textAlign: 'center',
      padding: '64px 0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Hero Section"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px,5vw,52px)',
      margin: '18px 0 20px'
    }
  }, "Physician-Led Dementia Care, Delivered at Home."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      color: 'var(--sage)',
      maxWidth: 640,
      margin: '0 auto 28px'
    }
  }, "Able Living brings Medicare's GUIDE Model to life through in-home physician visits, a dedicated care navigator, and real relief for family caregivers \u2014 currently serving Florida and Ohio, with more states on the way."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Check Your Eligibility"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    "data-nav": "who-we-serve"
  }, "Partner With Us")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...placeholder,
      height: 260
    }
  }, "[HERO PHOTO \u2014 physician visiting a patient with dementia at home, warm and candid]"))), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    iconSrc: "../../assets/icons/bloom.svg",
    eyebrow: "Who We Serve \u2014 Preview",
    title: "Support for everyone around a dementia diagnosis",
    description: "Whether you're the patient, the caregiver, or the practice trying to get them the right support \u2014 there's a path for you."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, [{
    t: 'Patients & Families',
    d: "I have — or a loved one has — a dementia diagnosis and want to know if GUIDE can help."
  }, {
    t: 'Caregivers',
    d: "I'm caring for someone with dementia and I'm exhausted, stretched thin, or not sure where to turn."
  }, {
    t: 'Medical & House Call Practices',
    d: 'My practice has patients with dementia and I want to offer GUIDE without building it myself.'
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...placeholder,
      height: 80,
      marginBottom: 16
    }
  }, "[icon]"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      marginBottom: 8
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--sage)',
      marginBottom: 12
    }
  }, c.d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "data-nav": "who-we-serve",
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "See Who We Serve \u2192")))))), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    iconSrc: "../../assets/icons/bloom.svg",
    eyebrow: "Service Area & Overview",
    title: "Where we practice today \u2014 and where we're headed"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--sage)',
      marginBottom: 16
    }
  }, "Able Living currently provides in-home dementia care across Florida and Ohio. As a physician-led house call practice, we're built to grow \u2014 and we're actively expanding our footprint and our network of partner practices nationwide."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      color: 'var(--sage)',
      fontSize: 14,
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("li", null, "In-home physician visits for comprehensive dementia assessment and ongoing care"), /*#__PURE__*/React.createElement("li", null, "A dedicated care navigator and 24/7 access to a care team member"), /*#__PURE__*/React.createElement("li", null, "Caregiver education, training, and GUIDE respite services"), /*#__PURE__*/React.createElement("li", null, "Coordination with your existing doctors, specialists, and community resources"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...placeholder,
      flex: 1,
      height: 220
    }
  }, "[MAP \u2014 Florida & Ohio highlighted, \"Expanding Nationwide\"]"))), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    iconSrc: "../../assets/icons/bloom.svg",
    eyebrow: "Why Choose Able Living",
    title: "A different kind of dementia care"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatStamp, {
    value: "MD",
    label: "Physician-Led, Not Just Nursing"
  }), /*#__PURE__*/React.createElement(StatStamp, {
    value: "$0",
    label: "No Cost If You're Eligible for GUIDE"
  }), /*#__PURE__*/React.createElement(StatStamp, {
    value: "24/7",
    label: "Care Navigator Access"
  }), /*#__PURE__*/React.createElement(StatStamp, {
    value: "1:1",
    label: "In-Home, Not Virtual"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--sage)'
    }
  }, "Unlike nurse-led or virtual-only dementia programs, Able Living is a physician-led house call practice. That means a doctor with dementia expertise is part of your care team \u2014 assessing, diagnosing, and adjusting care in person, in the home, not over a screen."))), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Proof / Testimonial"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Pullquote, null, "\"[Placeholder testimonial \u2014 pull a real quote once available. Framing: relief, being truly seen, keeping a loved one at home longer.]\"")))), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo/ableliving-logo-full-color.png"
  }));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function Services({
  navigate
}) {
  const {
    NavBar,
    Footer,
    PageHeaderBar,
    SectionHeader,
    Callout
  } = window.AbleLivingDesignSystem_39ee0d;
  const wrap = {
    maxWidth: 980,
    margin: '0 auto',
    padding: '0 32px'
  };
  const placeholder = {
    border: '1px dashed var(--blue-soft)',
    borderRadius: 12,
    background: 'var(--mist)',
    color: 'var(--sage)',
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 24,
    flex: 1,
    height: 200
  };
  const services = [{
    n: 1,
    title: 'Comprehensive In-Home Assessment & Care Plan',
    img: 'physician conducting an in-home assessment',
    body: "A physician-led visit to your home to fully understand health needs, cognitive and functional status, and daily life — resulting in a personalized care plan built around your goals, not a generic checklist.",
    bullets: ['In-person physician assessment (not a phone or video call)', 'Diagnosis confirmation and staging of dementia severity', 'A written, person-centered care plan shared with your existing doctors']
  }, {
    n: 2,
    title: 'Care Navigation & 24/7 Access',
    img: 'care navigator on phone / at kitchen table with caregiver',
    body: 'A dedicated care navigator becomes your single point of contact — coordinating appointments, answering questions, and connecting you to community resources like transportation and meals. You also get round-the-clock access to a care team member or helpline.',
    bullets: ['One named care navigator, not a rotating call center', '24/7 phone access for urgent questions or concerns', 'Coordination between your primary care doctor, specialists, and Able Living'],
    reverse: true
  }, {
    n: 3,
    title: 'Caregiver Education, Training & Support',
    img: 'adult child/caregiver in a supportive moment',
    body: 'Family caregivers are part of the care team, not an afterthought. We provide direct education on managing dementia symptoms day to day, plus ongoing emotional and practical support — including direct communication with your care navigator whenever you need it.',
    bullets: ['Skills training on dementia-specific behaviors and communication', 'Ongoing monitoring of caregiver stress and wellbeing', "A direct line to your care team — you're never guessing alone"]
  }, {
    n: 4,
    title: 'GUIDE Respite Services',
    img: 'caregiver getting a moment of rest / self-care',
    body: 'Qualifying caregivers get access to respite care — temporary relief so you can rest, travel, or simply take a break — up to an annual amount set by Medicare. Support is available through in-home respite providers, adult day centers, or 24-hour care facilities.',
    bullets: ['Available to qualifying caregivers of moderate-to-high complexity patients', 'Choose the setting that fits: at home, adult day center, or facility-based', "Not a Medicare-covered benefit outside of GUIDE — one of the program's most valuable pieces"],
    reverse: true
  }, {
    n: 5,
    title: 'Coordination With Community-Based Services',
    img: 'community resources — meals, transportation icon collage',
    body: 'Your care navigator connects you to non-clinical support like meal delivery and transportation, and works behind the scenes with every provider involved in your care to keep everyone on the same page.',
    bullets: []
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Services",
    logoSrc: "../../assets/logo/ableliving-logo-full-color.png"
  }), /*#__PURE__*/React.createElement(PageHeaderBar, {
    kicker: "Page 2 of 3",
    title: "Services",
    crumbs: "What GUIDE-based care actually includes, explained in full"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mist)',
      textAlign: 'center',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px,4vw,40px)',
      marginBottom: 14
    }
  }, "Comprehensive Dementia Care, Built Around Your Family"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--sage)',
      maxWidth: 700,
      margin: '0 auto'
    }
  }, "Every Able Living patient is supported by an interdisciplinary, physician-led care team delivering the full standard of care under Medicare's GUIDE Model \u2014 at no cost if you're eligible."))), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: '48px 0',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      gap: 32,
      flexDirection: s.reverse ? 'row-reverse' : 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: placeholder
  }, "[IMAGE: ", s.img, "]"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--leaf)',
      marginBottom: 8
    }
  }, "Service ", s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBottom: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--sage)',
      marginBottom: s.bullets.length ? 12 : 0
    }
  }, s.body), s.bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 13,
      color: 'var(--sage)',
      lineHeight: 1.8
    }
  }, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, b))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '20px 32px 60px'
    }
  }, /*#__PURE__*/React.createElement(Callout, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--navy)'
    }
  }, "Your Medicare benefits don't change."), " GUIDE is completely voluntary, adds services on top of what you already have, and you can still see any doctor or hospital that accepts Medicare. You can stop participating at any time.")), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo/ableliving-logo-full-color.png"
  }));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhoWeServe.jsx
try { (() => {
function WhoWeServe({
  navigate
}) {
  const {
    NavBar,
    Footer,
    PageHeaderBar,
    Button,
    NumberedStep,
    Callout
  } = window.AbleLivingDesignSystem_39ee0d;
  const wrap = {
    maxWidth: 980,
    margin: '0 auto',
    padding: '0 32px'
  };
  const placeholder = {
    border: '1px dashed var(--blue-soft)',
    borderRadius: 12,
    background: '#fff',
    color: 'var(--sage)',
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 24,
    flex: 1,
    height: 220
  };
  const sectionBand = (color, label, title) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: color,
      color: '#fff',
      padding: '28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--blue-soft)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      marginTop: 4
    }
  }, title)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: "Who We Serve",
    logoSrc: "../../assets/logo/ableliving-logo-full-color.png"
  }), /*#__PURE__*/React.createElement(PageHeaderBar, {
    kicker: "Page 3 of 3",
    title: "Who We Serve",
    crumbs: "Section A: Patients & Caregivers \xB7 Section B: Partner Practices"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mist)',
      textAlign: 'center',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px,4vw,38px)',
      marginBottom: 12
    }
  }, "Whoever You Are In This Journey, You Belong Here"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--sage)',
      marginBottom: 24
    }
  }, "Dementia touches the whole family \u2014 and sometimes, the whole practice. Find your path below."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "I'm a Patient or Caregiver \u2193"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "I'm a Practice Looking to Partner \u2193")))), sectionBand('var(--sage)', 'Section A', 'For Patients & Caregivers'), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '48px 32px',
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: placeholder
  }, "[IMAGE: patient and family caregiver together at home]"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBottom: 10
    }
  }, "You don't have to figure this out alone"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--sage)'
    }
  }, "If you or someone you love has been diagnosed with dementia or Alzheimer's, Able Living can bring physician-led care, a dedicated navigator, and real caregiver support right to your home \u2014 as a Medicare benefit, at no added cost if you qualify."))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '0 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--leaf)',
      marginBottom: 10
    }
  }, "Eligibility Checklist"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 10
    }
  }, "Do you qualify for GUIDE?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--sage)',
      marginBottom: 8
    }
  }, "You may be eligible if:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      fontSize: 14,
      color: 'var(--sage)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("li", null, "You have a dementia diagnosis, confirmed by a GUIDE-participating clinician"), /*#__PURE__*/React.createElement("li", null, "Medicare is your primary insurance, including enrollment in Medicare Parts A and B (not Medicare Advantage)"), /*#__PURE__*/React.createElement("li", null, "You're not enrolled in the Medicare hospice benefit or PACE"), /*#__PURE__*/React.createElement("li", null, "You're not currently living in a long-term nursing home"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '0 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--leaf)',
      marginBottom: 14
    }
  }, "How It Works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(NumberedStep, {
    number: 1,
    title: "Check Eligibility"
  }, "Answer a few quick questions or get a referral from your doctor."), /*#__PURE__*/React.createElement(NumberedStep, {
    number: 2,
    title: "Comprehensive Assessment"
  }, "An Able Living physician visits your home to assess needs and build your care plan."), /*#__PURE__*/React.createElement(NumberedStep, {
    number: 3,
    title: "Start Receiving Support"
  }, "Begin 24/7 navigator access, caregiver training, and respite services, if eligible."))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '0 32px 40px'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "blue"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--navy)'
    }
  }, "Are you the caregiver?"), " You're part of this care team too. Whether you're a spouse, adult child, or unpaid family member helping with daily activities, Able Living is built to support you directly \u2014 with training, a person to call, and time to rest through GUIDE respite services.")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '0 0 56px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Check Your Eligibility")), sectionBand('var(--sage)', 'Section B', 'For Practices & Referral Partners'), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '48px 32px',
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginBottom: 10
    }
  }, "Bring GUIDE dementia care to your patients \u2014 without building it yourself"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--sage)'
    }
  }, "If your practice \u2014 primary care, house call, geriatrics, neurology, or specialty \u2014 has patients living with dementia, Able Living can deliver the full GUIDE Model care experience on your behalf, in partnership with you. This is also how we're expanding: through relationships with practices anywhere in the country.")), /*#__PURE__*/React.createElement("div", {
    style: placeholder
  }, "[IMAGE: two clinicians reviewing a chart together / handshake]")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '0 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--leaf)',
      marginBottom: 10
    }
  }, "Who This Is For"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      fontSize: 14,
      color: 'var(--sage)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("li", null, "Primary care and internal medicine practices with dementia patients"), /*#__PURE__*/React.createElement("li", null, "House call and mobile physician practices (anywhere in the U.S.)"), /*#__PURE__*/React.createElement("li", null, "Neurology, geriatrics, and geriatric psychiatry practices"), /*#__PURE__*/React.createElement("li", null, "Hospitals, health systems, and ACOs looking for a dementia care pathway"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '0 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--leaf)',
      marginBottom: 14
    }
  }, "Why Partner With Able Living"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, [['No Build Required', 'Skip the cost and complexity of standing up your own GUIDE infrastructure and care navigator training.'], ['New Revenue Stream', "GUIDE's monthly per-beneficiary payment model supports a new, Medicare-funded revenue line for participating practices."], ['Physician-Led Credibility', 'Your patients are cared for by an in-home physician-led team — an easy referral to stand behind.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: 1,
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 16,
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--sage)',
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '0 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--leaf)',
      marginBottom: 14
    }
  }, "How Partnership Works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(NumberedStep, {
    number: 1,
    title: "Reach Out"
  }, "Tell us about your practice and patient population."), /*#__PURE__*/React.createElement(NumberedStep, {
    number: 2,
    title: "Align on Fit"
  }, "We confirm eligibility criteria and how referrals or co-management will work."), /*#__PURE__*/React.createElement(NumberedStep, {
    number: 3,
    title: "Onboard"
  }, "We handle GUIDE enrollment, assessments, and ongoing care delivery."), /*#__PURE__*/React.createElement(NumberedStep, {
    number: 4,
    title: "Stay Informed"
  }, "You stay looped in on your patient's care and outcomes throughout."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mist)',
      textAlign: 'center',
      padding: '56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--leaf)',
      marginBottom: 10
    }
  }, "Final CTA"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      marginBottom: 10
    }
  }, "Let's talk about your patients."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--sage)',
      marginBottom: 22
    }
  }, "Tell us about your practice and we'll follow up within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Partner With Able Living")), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo/ableliving-logo-full-color.png"
  }));
}
window.WhoWeServe = WhoWeServe;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhoWeServe.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Pullquote = __ds_scope.Pullquote;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ValueCard = __ds_scope.ValueCard;

__ds_ns.NumberedStep = __ds_scope.NumberedStep;

__ds_ns.StatStamp = __ds_scope.StatStamp;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.PageHeaderBar = __ds_scope.PageHeaderBar;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
