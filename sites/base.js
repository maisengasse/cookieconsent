class CCConfig {
  constructor(cfg) {
    this._config = cfg;
  }
  getConfig() {
    return this._config;
  }
  setLogo(logo) {
    for (const lang in this._config.languages) {
      this._config.languages[lang].settings_modal.title = `<img src="${logo}" alt="Cookie Consent" />`;
    }
  }
  disableCategory(category) {
    for (const lang in this._config.languages) {
      this._config.languages[lang].settings_modal.blocks.forEach(
        (block, index) => {
          if (block.toggle && block.toggle.value == category) {
            this._config.languages[lang].settings_modal.blocks.splice(index, 1)
          }
        })
    }
  }
  setCookieTable(category, table) {
    for (const lang in this._config.languages) {
      this._config.languages[lang].settings_modal.blocks.forEach(
        (block, index) => {
          if (block.toggle && block.toggle.value == category) {
            this._config.languages[lang].settings_modal.blocks[
              index
            ].cookie_table = table;
          }
        }
      );
    }
  }
}

function getCookieConsentBaseConfig() {
  var cookie = "🍪";
  var cfg = new CCConfig({
    current_lang: "de",
    autoclear_cookies: true, // default: false
    cookie_name: "cc_cookie", // default: 'cc_cookie'
    cookie_expiration: 365, // default: 182
    page_scripts: true, // default: false

    auto_language: "document", // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
      consent_modal: {
        layout: "box", // box,cloud,bar
        position: "middle center", // bottom,middle,top + left,right,center
        transition: "slide", // zoom,slide
      },
      settings_modal: {
        layout: "box", // box,bar
        // position: 'left',                // right,left (available only if bar layout selected)
        transition: "slide", // zoom,slide
      },
    },

    // onFirstAction: function () {
    //   console.log("onFirstAction fired");
    // },

    // onAccept: function (cookie) {
    //   console.log("onAccept fired ...");
    // },

    // onChange: function (cookie, changed_preferences) {
    //   console.log("onChange fired ...");
    // },

    languages: {
      de: {
        consent_modal: {
          title: cookie + " Wir verwenden Cookies.",
          description:
            "Unsere Website verwendet Cookies, um die grundlegende Funktionalität zu gewährleisten sowie die Zugriffe auf unserer Website zu analysieren. Hierzu ist es nötig Informationen an die jeweiligen Dienstanbieter weiterzugeben." +
            "<br /><br /> Einige Services verarbeiten personenbezogene Daten in den USA. Mit Ihrer Einwilligung zur Nutzung dieser Services stimmen Sie auch der Verarbeitung Ihrer Daten in den USA gemäß Art. 49 (1) lit. a DSGVO zu. Der EuGH stuft die USA als Land mit unzureichendem Datenschutz nach EU-Standards ein. So besteht etwa das Risiko, dass US-Behörden personenbezogene Daten in Überwachungsprogrammen verarbeiten, ohne bestehende Klagemöglichkeit für Europäer." +
            '<br /><br /> <button type="button" data-cc="c-settings" class="cc-link">Weitere Infos und Individuelle Einstellungen</button>',
          primary_btn: {
            text: "Alle akzeptieren",
            role: "accept_all", // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: "Nur notwendige akzeptieren",
            role: "accept_necessary", // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: "Cookie Einstellungen",
          save_settings_btn: "Einstellungen speichern",
          accept_all_btn: "Alle akzeptieren",
          reject_all_btn: "Alle ablehnen",
          close_btn_label: "Schliessen",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Gültigkeit" },
            { col4: "Beschreibung" },
          ],
          blocks: [
            {
              title: "Ihre Privatsphäre ist uns wichtig.",
              description:
                'Wir verwenden Cookies, um die Grundfunktionen der Website sicherzustellen und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie zulassen möchten. Weitere Einzelheiten zu Cookies und anderen sensiblen Daten finden Sie in der vollständigen <a href="/datenschutz" class="cc-link">Datenschutzerklärung</a>.',
            },
            {
              title: "Technisch notwendige Cookies",
              description:
                "Diese Cookies sind für die Bereitstellung von Diensten, die über unsere Website verfügbar sind, und für die Verwendung bestimmter Funktionen unserer Website von wesentlicher Bedeutung. " +
                "Ohne diese Cookies können wir Ihnen bestimmte Dienste auf unserer Website nicht zur Verfügung stellen.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: "Performance and Analyse-Cookies",
              description:
                "Diese Cookies werden zum Sammeln von Informationen verwendet, um den Verkehr auf unserer Website und die Nutzung unserer Website durch Besucher zu analysieren." +
                " Diese Cookies können beispielsweise nachverfolgen, wie lange Sie auf der Website verweilen oder welche Seiten Sie besuchen. So können wir verstehen, wie wir unsere Website für Sie verbessern können." +
                " Die durch diese Tracking- und Performance-Cookies gesammelten Informationen identifizieren keinen einzelnen Besucher.",
              toggle: {
                value: "analytics", // there are no default categories => you specify them
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Werbe- und Targeting-Cookies",
              description:
                "Diese Cookies werden verwendet, um Ihnen basierend auf Ihren Surfgewohnheiten Werbung anzuzeigen, die für Sie wahrscheinlich von Interesse ist." +
                " Diese Cookies, die von unseren Inhalts- und/oder Werbeanbietern bereitgestellt werden, können Informationen, die sie von unserer Website gesammelt haben, mit anderen Informationen kombinieren, die sie unabhängig von den Aktivitäten Ihres Webbrowsers in ihrem Netzwerk von Websites gesammelt haben." +
                " Wenn Sie diese Targeting- oder Werbe-Cookies entfernen oder deaktivieren, sehen Sie immer noch Werbung, aber sie ist möglicherweise nicht relevant für Sie.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Weiter Informationen",
              description:
                'Bei Fragen zu unserer Cookie-Richtlinie und Ihren Auswahlmöglichkeiten <br /><a class="cc-link" href="/kontakt/">kontaktieren Sie uns bitte</a>',
            },
          ],
        },
      },

      en: {
        consent_modal: {
          title: cookie + " We use cookies! ",
          description:
            "Our website uses cookies to ensure basic functionality and to analyze access to our website. For this it is necessary to pass on information to the respective service provider." +
            "<br /><br />Some services process personal data in the USA. With your consent to the use of these services, you also agree to the processing of your data in the USA in accordance with Article 49 (1) lit. a GDPR. The ECJ classifies the USA as a country with insufficient data protection according to EU standards. For example, there is a risk that US authorities will process personal data in surveillance programs without Europeans being able to take legal action." +
            '<br /><br /><button type="button" data-cc="c-settings" class="cc-link">More information and individual settings</button>.',
          primary_btn: {
            text: "Accept all",
            role: "accept_all", // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: "Accept Necessary",
            role: "accept_necessary", // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: "Settings",
          save_settings_btn: "Save settings",
          accept_all_btn: "Accept all",
          reject_all_btn: "Reject all",
          close_btn_label: "Close",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Expiration" },
            { col4: "Description" },
          ],
          blocks: [
            {
              title: "Cookie usage 📢",
              description:
                'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/datenschutz" class="cc-link">privacy policy</a>.',
            },
            {
              title: "Strictly necessary cookies",
              description:
                "These cookies are essential for delivering services, available through our website and for using certain features of our website." +
                "Without these cookies, we cannot provide you with certain services on our website.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: "Performance and Analytics cookies",
              description:
                "These cookies are used to collect information to analyze traffic on our website and how visitors use our website." +
                " These cookies can, for example, track how long you stay on the website or which pages you visit. This allows us to understand how we can improve our website for you." +
                " The information collected through these tracking and performance cookies does not identify an individual visitor.",
              toggle: {
                value: "analytics", // there are no default categories => you specify them
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Advertisement and Targeting cookies",
              description:
                 "These cookies are used to show you advertisements that are likely to be of interest to you, based on your browsing habits." +
                 " These cookies, provided by our content and/or advertising providers, may combine information they have collected from our website with other information they have collected independently of your web browser's activity on their network of websites." +
                 " If you remove or disable these targeting or advertising cookies, you will still see advertisements, but they may not be relevant to you.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "More information",
              description:
                'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/kontakt/">contact us</a>.',
            },
          ],
        },
      },
    },
  });
  cfg.setCookieTable("necessary", [
    {
      col1: "sessionid",
      col2: top.location.host,
      col3: "Ablauf der Sitzung",
      col4: "Speichert die Session-ID",
      is_regex: false,
    },
    {
      col1: "django_language",
      col2: top.location.host,
      col3: "1 Jahr",
      col4: "Speichert die Spracheinstellungen",
      is_regex: false,
    },
    {
      col1: "csrftoken",
      col2: top.location.host,
      col3: "1 Jahr",
      col4: "Sicherheitstoken für gültige HTTP-Anfragen",
      is_regex: false,
    },
  ]);
  return cfg;
}
