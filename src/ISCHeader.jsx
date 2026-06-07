/**
 * ISCHeader — React port of @isc-hei/design's Vue <ISCHeader>.
 *
 *   ┌─────────────────────────────────────────────────────────┐
 *   │██│  [logo] │ SURTITLE          (meta slot)              │
 *   │  │           Title                                      │
 *   └──┴──────────────────────────────────────────────────────┘
 *
 * The thick coloured bar on the left is the audience signature.
 * Markup/classes mirror the package so this wears the same look as the
 * Vue consumers (e.g. tbs.isc-vs.ch). Styles live in src/isc-design.css.
 *
 *   accentLight — left bar fill (logo petal, light variant)
 *   accentDark  — surtitle text colour (high-contrast dark variant)
 *   dark        — resolved dark boolean; picks the logo asset
 */
export default function ISCHeader({
  accentLight,
  accentDark,
  surtitle,
  title,
  hubHref = "/",
  tooltipBackToHub = "ISC Hub",
  logoLight,
  logoDark,
  dark = false,
  meta = null,
}) {
  return (
    <header className="isc-header">
      <div className="isc-header__main">
        <div className="isc-header__bar" style={{ background: accentLight }} />
        <div className="isc-header__inner">
          <a
            href={hubHref}
            className="isc-header__brand"
            data-tooltip={tooltipBackToHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={dark ? logoDark : logoLight}
              className="isc-header__full-logo"
              alt="ISC"
            />
          </a>
          <div className="isc-header__divider" />
          <div className="isc-header__titles">
            <div
              className="isc-header__surtitle isc-mono-label"
              style={{ color: accentDark }}
            >
              {surtitle}
            </div>
            <h1 className="isc-header__title">{title}</h1>
          </div>
          {meta && <div className="isc-header__meta">{meta}</div>}
        </div>
      </div>
    </header>
  );
}
