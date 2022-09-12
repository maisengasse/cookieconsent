// obtain cookieconsent plugin
var cc = initCookieConsent();
var cfg = getCookieConsentBaseConfig();
cfg.setLogo("/static/mondschein/img/logo.svg");
cc.run(cfg.getConfig());
