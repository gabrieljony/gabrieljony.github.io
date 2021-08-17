import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Unicode = () => (
    <Layout>
        <SEO
            title="Unicode"
            description="Full Stack developer, developing apps and web pages"
            keywords="GitHub, Java, Javascript, React, Vuejs, Angular, Node, Full Stack, developer, API, Gabriel Jony"
        />
        <h1>Unicode</h1>
        <h2>Caracteres especiais representados em Unicode</h2>
        <p>Evitar problema ENCODING de caracteres especiais, utiliza-se nas classes Java código unicode ao invés de letras acentuadas.</p>
        <p>Abaixo uma tabela de alguns dos caracteres especiais mais usados no dia a dia com seu cógigo unicode:</p>
        <br/>
        <h3>Exemplo:</h3>
        <p>String s = "Sistema indispon\u00edvel."</p>

        <section>
            <div>
                <ul>
                    <li>á = \u00e1</li>
                    <li>à = \u00e0</li>
                    <li>â = \u00e2</li>
                    <li>ã = \u00e3</li>
                    <li>ä = \u00e4</li>
                    <li>Á = \u00c1</li>
                    <li>À = \u00c0</li>
                    <li>Â = \u00c2</li>
                    <li>Ã = \u00c3</li>
                    <li>Ä = \u00c4</li>
                    <li>é = \u00e9</li>
                    <li>è = \u00e8</li>
                    <li>ê = \u00ea</li>
                    <li>ê = \u00ea</li>
                    <li>É = \u00c9</li>
                    <li>È = \u00c8</li>
                    <li>Ê = \u00ca</li>
                    <li>Ë = \u00cb</li>
                    <li>í = \u00ed</li>
                    <li>ì = \u00ec</li>
                    <li>î = \u00ee</li>
                    <li>ï = \u00ef</li>
                    <li>Í = \u00cd</li>
                    <li>Ì = \u00cc</li>
                    <li>Î = \u00ce</li>
                    <li>Ï = \u00cf</li>
                    <li>ó = \u00f3</li>
                    <li>ò = \u00f2</li>
                    <li>ô = \u00f4</li>
                    <li>õ = \u00f5</li>
                    <li>ö = \u00f6</li>
                    <li>Ó = \u00d3</li>
                    <li>Ò = \u00d2</li>
                    <li>Ô = \u00d4</li>
                    <li>Õ = \u00d5</li>
                    <li>Ö = \u00d6</li>
                    <li>ú = \u00fa</li>
                    <li>ù = \u00f9</li>
                    <li>û = \u00fb</li>
                    <li>ü = \u00fc</li>
                    <li>Ú = \u00da</li>
                    <li>Ù = \u00d9</li>
                    <li>Û = \u00db</li>
                    <li>ç = \u00e7</li>
                    <li>Ç = \u00c7</li>
                    <li>ñ = \u00f1</li>
                    <li>Ñ = \u00d1</li>
                    <li>& = \u0026</li>
                    <li>' = \u0027</li>
                </ul>
            </div>
        </section>
        <code>
        {/* O código do método que usei para gerar essa tabela está abaixo:
        public static String geraCodigoUnicode(char letra) {
            String hexa = Integer.toHexString( (int)letra );

            String prefix;
            if( hexa.length() == 1 ) {
                prefix = "\\u000";
            } else if( hexa.length() == 2 ) {
                prefix = "\\u00";
            } else if( hexa.length() == 3 ) {
                prefix = "\\u0";
            } else {
                prefix = "\\u";
            }

            return prefix + hexa;
        } */}
        </code>
    </Layout>
)

export default Unicode
