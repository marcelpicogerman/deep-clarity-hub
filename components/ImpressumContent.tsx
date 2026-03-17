"use client";

import { motion } from "framer-motion";

export default function ImpressumContent() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl lg:text-5xl font-light text-text mb-12"
        >
          Impressum
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="prose prose-gray max-w-none font-sans text-text-muted text-sm leading-relaxed space-y-8"
        >
          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              Angaben gem. Companies Act 2006
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
              Company Number: 17052482
              <br />
              Registered in England and Wales
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              Vertreten durch
            </h2>
            <p>
              Marcel Christian Pickelmann
              <br />
              Director
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:marcel@deeplifeevolutionhub.com"
                className="text-primary hover:text-accent transition-colors"
              >
                marcel@deeplifeevolutionhub.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://deeplifeevolutionhub.de"
                className="text-primary hover:text-accent transition-colors"
              >
                deeplifeevolutionhub.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-text mb-3">
              Haftungsausschluss
            </h2>
            <h3 className="font-sans text-sm font-semibold text-text mt-4 mb-2">
              Haftung f&uuml;r Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt.
              F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte
              k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen. Als Diensteanbieter sind wir
              f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Wir sind jedoch nicht verpflichtet, &uuml;bermittelte oder
              gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu
              forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
            </p>

            <h3 className="font-sans text-sm font-semibold text-text mt-4 mb-2">
              Haftung f&uuml;r Links
            </h3>
            <p>
              Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese
              fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>

            <h3 className="font-sans text-sm font-semibold text-text mt-4 mb-2">
              Urheberrecht
            </h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des
              Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
