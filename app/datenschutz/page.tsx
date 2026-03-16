"use client";

import { motion } from "framer-motion";

export default function DatenschutzPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl lg:text-5xl font-light text-text mb-12"
        >
          Datenschutzerkl&auml;rung
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="prose prose-gray max-w-none font-sans text-text-muted text-sm leading-relaxed space-y-8"
        >
          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              <strong>Deep Life Evolution Hub Ltd</strong>
              <br />
              Office 620, Initial Business Centre
              <br />
              Wilson Business Park
              <br />
              Manchester, M40 8WN
              <br />
              United Kingdom
            </p>
            <p>
              Vertreten durch: Marcel Christian Pickelmann (Director)
              <br />
              E-Mail:{" "}
              <a
                href="mailto:marcel@deeplifeevolutionhub.com"
                className="text-primary hover:text-accent transition-colors"
              >
                marcel@deeplifeevolutionhub.com
              </a>
            </p>
          </div>

          {/* 2. Allgemeines */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Wir nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerkl&auml;rung.
            </p>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne Angabe
              personenbezogener Daten m&ouml;glich. Soweit auf unseren Seiten
              personenbezogene Daten erhoben werden, erfolgt dies stets auf
              freiwilliger Basis.
            </p>
          </div>

          {/* 3. Hosting */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Hostinger gehostet. Der Hoster erhebt in
              sogenannten Logfiles folgende Daten, die Ihr Browser &uuml;bermittelt:
              IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur
              Greenwich Mean Time (GMT), Inhalt der Anforderung, HTTP-Statuscode,
              &uuml;bertragene Datenmenge, Website, von der die Anforderung kommt,
              Browser, Betriebssystem und dessen Oberfl&auml;che.
            </p>
            <p>
              Dies ist erforderlich, um unsere Website korrekt darzustellen, und
              dient der Sicherstellung der Stabilit&auml;t und Sicherheit. Die
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse).
            </p>
          </div>

          {/* 4. Cookies */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              4. Cookies
            </h2>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien,
              die auf Ihrem Endger&auml;t gespeichert werden und die Ihr Browser speichert.
            </p>
            <p>
              <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind
              f&uuml;r den Betrieb der Website erforderlich und k&ouml;nnen nicht deaktiviert
              werden. Sie werden in der Regel nur als Reaktion auf von Ihnen
              vorgenommene Aktionen gesetzt (z.&nbsp;B. Festlegen Ihrer
              Datenschutzeinstellungen).
            </p>
            <p>
              Sie k&ouml;nnen Ihren Browser so einstellen, dass er Sie &uuml;ber das Setzen
              von Cookies informiert. So wird der Einsatz von Cookies f&uuml;r Sie
              transparent. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </div>

          {/* 5. Kontaktformular */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              5. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den
              Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags
              zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen
              erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf
              unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          {/* 6. Ihre Rechte */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              6. Ihre Rechte
            </h2>
            <p>Sie haben gegen&uuml;ber uns folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf L&ouml;schung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschr&auml;nkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Daten&uuml;bertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Aus&uuml;bung Ihrer Rechte k&ouml;nnen Sie uns jederzeit unter{" "}
              <a
                href="mailto:marcel@deeplifeevolutionhub.com"
                className="text-primary hover:text-accent transition-colors"
              >
                marcel@deeplifeevolutionhub.com
              </a>{" "}
              kontaktieren.
            </p>
          </div>

          {/* 7. Beschwerderecht */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              7. Beschwerderecht bei einer Aufsichtsbeh&ouml;rde
            </h2>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
              einer Aufsichtsbeh&ouml;rde zu, wenn Sie der Ansicht sind, dass die
              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die
              DSGVO verst&ouml;&szlig;t.
            </p>
            <p>
              Da die Deep Life Evolution Hub Ltd in England registriert ist, ist die
              zust&auml;ndige Aufsichtsbeh&ouml;rde das Information Commissioner&apos;s Office
              (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF,
              United Kingdom.
            </p>
          </div>

          {/* 8. SSL-Verschlüsselung */}
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              8. SSL-/TLS-Verschl&uuml;sselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
              &Uuml;bertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
              &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </div>

          {/* Stand */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-text-muted/60">
              Stand: M&auml;rz 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
