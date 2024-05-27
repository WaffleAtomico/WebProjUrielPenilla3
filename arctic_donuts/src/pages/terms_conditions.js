import { Foot, Head } from "../components/headfoot";
import Term_condition from "../components/term_condition";

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Terms_conditions( )
{

    // title, description
    return(
        <>
        <Head />
        <Link to="/">
            <Button variant="outline-info">
                Volver
            </Button>
        </Link>
        <div style={{ padding: '20px' }}>
            <h1>1.-GENERAL</h1>
            <Term_condition 
                title= '1.1 Ámbito de aplicación'
                description= 'Bienvenido a arcticdonuts.com. Estos Términos y condiciones (el “Acuerdo” o los “Sitio”,
                    que incluye versiones locales del Sitio, tales como acticdonuts.com.mx,
                    m.acticdonuts.com/mx, o cualquier reemplazo de dicho sitio web), cualquier aplicación móvil
                    (las “Aplicaciones” ), y cualquier otra comunicación escrita, electrónica u oral con
                    ARCTICDONUTS y sus entidades afiliadas, o cualquier sitio web, páginas, funciones o
                    contenidos propiedad de o que sean operadas por nosotros y que estén vinculadas a este
                    Acuerdo (colectivamente, incluyendo el Sitio y las Aplicaciones, los “Servicios” ).'
            />
            <Term_condition
                title='1.2 Actualización de los Términos y Condiciones'
                description='Nos reservamos el derecho de modificar los Términos y Condiciones, incluida la Política de
                cookies y de privacidad, en cualquier momento y a nuestra entera consideración. Al
                continuar haciendo uso de los Servicios, tras haber realizado dichos cambios
                (independientemente de si enviamos una notificación dando aviso de dichas
                modificaciones), usted acepta estar obligado en virtud de cualquier modificación realizada a
                dicha política y/o a las políticas/acuerdos vinculados, incluyendo, pero no limitado a la
                Política de cookies y de privacidad. Es su responsabilidad revisar esta política y/o las
                políticas/acuerdos vinculados de vez en cuando, para verificar tales modificaciones.'
            />
            <Term_condition
                title='1.3 Aceptación de los Términos y Condiciones'
                description='Para realizar compras con nosotros, usted debe tener al menos 18 años de edad. Cualquier
                acceso, navegación o uso de los Servicios indica su aceptación de todos los Términos y
                Condiciones de este Acuerdo. Si usted no está de acuerdo con cualquier sección de los
                Términos y Condiciones, deberá interrumpir el acceso o uso de los Servicios de manera
                inmediata. Por favor lea este Acuerdo detenidamente antes de continuar.
                Si tiene alguna pregunta sobre estos Términos y Condiciones o nuestra Política de cookies
                y de privacidad, puede ponerse en contacto con nosotros en cualquier momento a través de
                nuestra Plataforma de Servicio al Cliente, tal como se establece en la sección de Contacto
                que aparece a continuación.'
            />
            <h1>2.-USO DE NUESTROS SERVICIOS</h1>
            <Term_condition
                title='2.1 Declaraciones'
                description='Al utilizar nuestros Servicios, usted acepta que se procese su información y datos y declara
                que toda la información y los datos proporcionados por usted son verdaderos y
                corresponden a la realidad. Igualmente, declara y garantiza que tiene al menos 18 años de
                edad o que visita los Servicios bajo la supervisión de un padre o tutor. Sujeto a los Términos
                y Condiciones de este Contrato, la Compañía le otorga una licencia limitada, revocable, no
                transferible y no exclusiva para acceder y utilizar los Servicios que aparecen en su
                navegador de Internet, para nuestro Sitio; o en sus dispositivos móviles, para nuestras
                Aplicaciones, exclusivamente con el fin de adquirir aquellos artículos personales que se
                venden en el Sitio o en las Aplicaciones. Dicha licencia no aplica para uso comercial o en
                nombre de terceros, excepto en los casos, expresa y previamente permitidos por la
                
                Compañía. Cualquier incumplimiento a este Acuerdo resultará en la revocación inmediata y
                sin previo aviso de la licencia otorgada en este párrafo.'
            />
            <Term_condition
                title='2.2 Limitaciones de uso'
                description='A excepción de lo autorizado en el párrafo anterior, no está permitido reproducir, distribuir,
                mostrar, vender, arrendar, transmitir, crear trabajos derivados, traducir, modificar, realizar
                ingeniería inversa, desmontar, descompilar o explotar los Servicios o cualquier parte de
                ellos, a menos de que la Compañía lo permita expresamente por escrito. Queda
                expresamente prohibido hacer uso comercial de la información proporcionada en los
                Servicios, ni hacer uso de los Servicios en beneficio de ningún otro negocio, a menos de
                que la Compañía otorgue su autorización previa y de manera expresa. La Compañía se
                reserva el derecho de rechazar el servicio, cancelar cuentas y/o cancelar órdenes de
                compra a su consideración, incluyendo, sin limitación, si la Compañía considera que la
                conducta del cliente viola la ley aplicable o es perjudicial para sus intereses.'
            />
            <Term_condition
                title='2.3 Creación y cancelación de cuentas'
                description='Para acceder a cualquiera de las funciones disponibles en los Servicios, se deberá crear
                una cuenta. Queda prohibido utilizar la cuenta de otra persona. Cada vez que usted utilice
                una contraseña o identificación, se considerará que está dando su autorización para
                acceder y utilizar el Sitio o las Aplicaciones de forma coherente con los términos y
                condiciones de este Acuerdo, y la Compañía no está obligada a investigar la autorización o
                fuente de dicho acceso o uso de los Servicios.'
            />
            <h1>3.-POLÍTICA DE COOKIES Y DE PRIVACIDAD</h1>
            <Term_condition
                title=''
                description='Al utilizar nuestros Servicios y realizar pedidos a través de ellos, usted acepta
                proporcionarnos su dirección de correo electrónico, dirección postal y/u otros datos de
                contacto con veracidad y exactitud. También acepta que en caso de ser necesario,
                podemos utilizar esta información para ponernos en contacto con usted, dentro del ámbito
                de su pedido.
                Respetamos su derecho a la privacidad; al utilizar nuestros Servicios o de cualquier otra
                manera, usted acepta y, cuando sea necesario, da su consentimiento para la recopilación,
                uso y transferencia de su información, tal como se establece en la Política de cookies y de
                privacidad.'
            />
            <h1>4. ERRORES</h1>
            <Term_condition
                title=''
                description='En caso de que detecte que ha cometido algún error al introducir sus datos personales
                durante su registro como usuario de nuestros Servicios, puede corregirlos en nuestro Sitio
                en la sección “Mi cuenta”. En cualquier caso, podrá corregir errores relacionados con los
                datos personales proporcionados durante el proceso de compra poniéndose en contacto
                con nosotros, así como ejercer su derecho de rectificación contemplado en nuestra Política
                de cookies y de privacidad a través de nuestro Sitio y Aplicaciones. Los Servicios muestran
                cuadros de confirmación en varias secciones del proceso de compra que no permiten que el
                pedido continúe si la información de estas secciones no ha sido proporciona correctamente.
                Adicionalmente, los Servicios ofrecen detalles de todos los artículos que ha añadido a su
                
                carrito de compra durante el proceso de compra, de modo que antes de realizar el pago,
                usted puede modificar los detalles del pedido.'
            />
            <h1>5. REGLAS COMERCIALES</h1>
            <Term_condition
                title='5.1 Precio y pago'
                description='Todos los precios son correctos en el momento de introducir la información en el sistema. Si
                por algún motivo no podemos enviar los artículos adquiridos, el valor de los artículos que no
                se hayan enviado se reembolsará en el método de pago original, de acuerdo con lo que
                usted determine.'
            />
            <Term_condition
                title='5.2 Colores.'
                description='Hemos hecho todo lo posible por mostrar los colores de los productos que aparecen en los
                Servicios con la mayor precisión posible. Sin embargo, dado que los colores que vea
                dependerán de su monitor, no podemos garantizar que los colores que muestre la pantalla
                sean precisos.'
            />
            <Term_condition
                title='5.3 Embalaje'
                description='A menos que se indique lo contrario, cumpliremos únicamente con las normas mínimas de
                embalaje para el método de transporte seleccionado.'
            />
            <Term_condition
                title='5.4 Envío y entrega'
                description='La Compañía realiza envíos desde diversos almacenes ubicados en diferentes países. Para
                pedidos que incluyan más de un artículo, podemos dividir su pedido en varios paquetes,
                según los niveles de existencias. Nuestro objetivo es entregar los pedidos lo más rápido
                posible, sin embargo, a veces, durante los periodos más intensos de ventas, las entregas
                pueden tardar más tiempo en llegar.'
            />
            <Term_condition
                title='5.5 Titularidad y envío'
                description='A menos de que se acuerde lo contrario, el envío se realizará a la dirección de entrega que
                usted indique. La titularidad de cualquier artículo comprado se transfiere de la entidad de
                venta respectiva (es decir, Fashion Choice Pte Ltd. si se encuentra en una región que no
                sea la México) a usted, en su calidad de cliente, una vez que los artículos se entreguen al
                transportista internacional fuera de su país. Cualquier reclamación contra la Compañía por
                desabasto o daño que ocurra antes de la entrega del artículo se debe realizar al área de
                servicio de atención al cliente dentro de cinco (2) días después de haber recibido la
                mercancía.'
            />
            <Term_condition
                title='5.6 Devolución del producto'
                description='Las mercancías pueden devolverse dentro de un período determinado. El período exacto y
                política de devolución varían de un país a otro. Para mayor información le pedimos ponerse
                en contacto con nuestro servicio de atención al cliente. Salvo que la Compañía acuerde lo
                contrario, los clientes que devuelvan productos serán responsables de los gastos de envío.'
            />
            <Term_condition
                title='5.7 Contenido generado por el usuario'
                description='Al publicar, dicho contenido se considerará contenido generado por el usuario ( “CGU” ) en
                la medida en que dicho contenido sea visible o accesible para cualquier otro visitante o
                
                usuario del Sitio o de la Aplicación. Al aceptar estos Términos y Condiciones, acepta no
                contribuir con ningún CGU que dentro de razón pudiera considerarse que implique,
                contenga, proporcione o promueva cualquiera de los siguientes:
                (1) contenido sexualmente explícito o pornográfico;
                (2) profanidad;
                (3) comentarios o incitaciones despectivas, discriminatorias u odiosas contra
                individuos o grupos específicos basados en su raza u origen étnico, religión, género,
                discapacidad, edad, nacionalidad, etc.;
                (4) incitación a la violencia u otras actividades peligrosas;
                (5) terrorismo u otras actividades delictivas;
                (6) comentarios insensibles u ofensivos relacionados con desastres naturales,
                atrocidades, crisis de salud, muertes, conflictos u otros acontecimientos trágicos;
                (7) acoso, intimidación o amenazas;
                (8) productos peligrosos, drogas ilícitas, o uso o venta inapropiada de tabaco y/o
                alcohol;
                (9) transacciones en criptomonedas;
                (10) afirmaciones o contenidos médicos falsos;
                (11) contenido que infrinja derechos de propiedad intelectual;
                (12) contenido para el que no esté autorizado, o que no tenga el derecho legal a
                compartir, publicar o mostrar; o
                (13) cualquier otro contenido que pueda considerarse ilegal, ofensivo o restringido
                de acuerdo con las leyes o normativas aplicables.'
            />
            <h1>6. PROPIEDAD INTELECTUAL Y TITULARIDAD</h1>
            <Term_condition
                title='6.1 Contenido'
                description='Los Servicios, incluyendo toda su información y contenido, tal como cualquier texto,
                software, guiones, gráficos, fotos, sonidos, música, vídeos y funciones interactivas
                (colectivamente, el “Contenido” ) que se proporcionan como parte de los Servicios,
                pertenecen en todo momento a la Compañía o a aquellas personas que conceden la
                licencia para su uso y están protegidos por las leyes de derechos de autor de su propio país
                e internacionales. El Contenido se puede utilizar únicamente en la medida en que nosotros
                o los licenciantes de uso lo autoricen expresamente.'
            />
            <Term_condition
                title='6.2 Marcas de “ARCTICDONUTS”'
                description='Adicionalmente, las marcas comerciales “ARCTICDONUTS”, marcas de servicio, iconos,
                gráficos, marcas, diseños y logotipos que contienen, son propiedad de ARCTICDONUTS.
                “ARCTICDONUTS” y las marcas de ARCTICDONUTS son marcas registradas tanto en los
                países en los que están pendientes las solicitudes de registro como en los que se han
                emitido dichos registros. Usted no tiene, ni tendrá, ningún derecho, titularidad o interés
                sobre ninguna de las Marcas. Las Marcas de ARCTICDONUTS no pueden utilizarse en
                relación con ningún producto o servicio que no sea de la Compañía, de cualquier manera
                que pudiera generar confusión entre los clientes o que desaliente o desacredite a la
                Compañía.'
            />
            <Term_condition
                title='6.3 Derechos reservados'
                description='El contenido de los Servicios se le proporciona tal como está, exclusivamente para su
                información y no se puede descargar, copiar, reproducir, distribuir, transmitir, emitir, mostrar,
                vender, licenciar o explotar de cualquier otra manera, para ningún otro propósito, sin el
                consentimiento previo por escrito de la Compañía, o el de sus respectivos titulares o
                licenciantes. Nos reservamos todos los derechos que no se otorguen expresamente en y
                respecto al Contenido. Usted reconoce y acepta que cualquier pregunta, comentario,
                sugerencia, idea o cualquier otra información sobre los Servicios que nos proporcione no es
                confidencial y pasará a ser propiedad exclusiva de la Compañía.
                Usted se compromete a no participar en el uso, copia, distribución o creación de trabajos
                derivados de cualquier Contenido que no esté expresamente permitido en este documento.
                Usted se compromete a no eludir, deshabilitar o interferir de ninguna manera con las
                funciones relacionadas con la seguridad del Sitio o las funciones que impidan o restrinjan el
                uso o copia de cualquier Contenido o impongan limitaciones en el uso del Sitio o del
                Contenido del mismo.'
            />
            <h1>7. ENLACES Y RECURSOS DE TERCEROS</h1>
            <Term_condition
                title=''
                description='Nuestro sitio puede contener enlaces a sitios externos, los cuales no son supervisados por
                nosotros, por lo que no nos hacemos responsables por el contenido que estos puedan
                incluir. Cualquier referencia directa o indirecta a nuestro sitio web dentro de estos enlaces
                no es patrocinado, ni auspiciado y tampoco tiene relación directa con nosotros.
                Al no tener control ni supervisión de estos enlaces, cualquier contenido, publicidad u otros
                enlaces contenidos en estas páginas no tiene relación con nosotros y no nos hacemos
                responsables de lo que se pueda mostrar, ni de los pagos o transacciones que se soliciten
                en las mismas. Arctic Donuts no es responsable por los actos u omisiones de ningún
                operador de tal sitio o plataforma. El uso de cualquier sitio o plataforma de terceros es bajo
                su propio riesgo y se regirá por las políticas y los Términos y Condiciones de dichos
                terceros. No ofrecemos ninguna garantía ni declaración sobre la precisión, integridad o
                vigencia de ningún contenido de estos sitios y recomendamos leer sus Términos y
                Condiciones.'
            />
            <h1>8. PROGRAMA DE MENSAJES DE TEXTO</h1>
            <Term_condition
                title='8.1 Inscripción'
                description='Como cualquier usuario de la página, nosotros les damos la opción de
                recibir mensajes directos (SMS) con publicidad de la compañía o de nuestro vendedor, al
                aceptar esta opción, usted está consintiendo recibir publicidad recurrente a su número móvil
                registrado
                El programa de mensajes de texto está sujeto a estos Términos y Condiciones, que
                contienen las disposiciones que rigen la manera en que se resuelven las disputas que
                pudieran surgir entre nosotros.'
            />
            <Term_condition
                title='8.2 Exclusión'
                description='Usted puede optar por no recibir mensajes de texto SMS si en el chat de
                mensajes responde con un ALTO o cualquier otra indicación, a cualquier mensaje que
                reciba en nuestro programa de mensajes de texto. Tras esto recibirá un mensaje adicional
                confirmando que su solicitud ha sido procesada.'
            />
            <Term_condition
                title='8.3 Su plan inalámbrico.'
                description='Los mensajes recibidos pueden aplicar tarifas de mensajes y datos
                a cualquier mensaje enviado a usted y por usted. Cualquier duda sobre su plan de datos, es
                necesario ponerse en contacto con su proveedor de servicios inalámbricos.'
            />
            <Term_condition
                title='8.4 Obligaciones respecto a su número de teléfono.'
                description='Al inscribirse a este programa, usted
                declara que es titular de la cuenta o usuario habitual del número de teléfono móvil. Si
                cambia o desactiva ese número, usted es responsable de notificarnos inmediatamente a
                través de la Plataforma de servicio al cliente o el Centro de privacidad. Ni nosotros, ni
                nuestros proveedores, ni ningún operador de telefonía móvil es responsable de los
                mensajes demorados o no entregados. Usted acepta indemnizarlos por todas las
                reclamaciones, gastos y daños relacionados o causados, en su totalidad o en parte, por su
                falta de notificación en caso de cambiar su número de teléfono, incluyendo, pero no
                limitado, a todas las reclamaciones, gastos y daños relacionados o derivados de cualquiera
                y todas las leyes aplicables.'
            />
            <Term_condition
                title='8.5 Participación sujeta a cancelación o cambio'
                description='La compañía tiene el derecho de
                suspender o cancelar la recepción de mensajes de mercadotecnia automatizados en caso
                de que considere que infringe estos Términos y Condiciones o de que su servicio de
                telefonía móvil se cancele o falle. Nos reservamos el derecho de modificar o interrumpir,
                temporal o permanentemente, todos o cualquier parte de estos mensajes, con o sin previo
                aviso.'
            />
            <h1>9. EVENTOS FUERA DE NUESTRO CONTROL</h1>
            <Term_condition
                title=''
                description='La compañía no se hace responsable de ningún incumplimiento o retraso en el
                cumplimiento de cualquiera de las obligaciones que asumimos en virtud de estos Términos
                y Condiciones u otros contratos cuando se deban a eventos que estén fuera de nuestro
                control razonable ( “Eventos de Fuerza Mayor” ). Los Eventos de Fuerza Mayor incluyen
                cualquier acto, evento, no ejercicio, omisión o accidente que esté fuera de nuestro control
                razonable, incluyendo, entre otros:
                ● Huelga, cierre patronal u otras formas de protesta, ausencia de, accidente en un
                transporte marítimo o fluvial, transporte postal o cualquier otro tipo de transporte.
                ● Disturbio civil, revuelta, invasión, ataque o amenaza terrorista, guerra (declarada o
                no), amenaza o preparación para la guerra.
                
                ● Incendio, explosión, tormenta, inundación, terremoto, colapsó, epidemia, pandemia o
                cualquier otro desastre natural.
                ● Incapacidad para utilizar trenes, buques, aeronaves, transporte motorizado u otros
                medios de transporte, públicos o privados.
                ● Incapacidad para utilizar sistemas de telecomunicaciones públicos o privados.
                ● Leyes, decretos, legislaciones, reglamentos o restricciones de cualquier gobierno o
                autoridad pública.
                ● Cierres fronterizos o gubernamentales, bloqueos comerciales, embargos,
                disrupciones del comercio mundial y congestiones portuarias.
                Se acuerda que nuestras obligaciones derivadas de los Términos y Condiciones u otros
                contratos se suspenderán durante el período en el que el evento de Fuerza Mayor
                permanezca vigente y se nos concederá una ampliación al período requerido para cumplir
                con dichas obligaciones por un período de tiempo igual al periodo de tiempo durante el cual
                duró el Evento de Fuerza Mayor.'
            />
            <Term_condition
                title='10. RESPONSABILIDAD POR PRODUCTOS COMPRADOS, RENUNCIA Y DERECHOS
                LEGALES DEL CONSUMIDOR'
                description=''
            />
            <Term_condition
                title='10.1 Responsabilidad de la Compañía.'
                description='A menos de que se indique expresamente lo
                contrario en estos Términos y Condiciones. Sin perjuicio de lo anterior, nuestra
                responsabilidad no estará ni excluida ni limitada en los siguientes casos:
                ● en caso de muerte o daño personal causado por nuestra negligencia;
                ● en caso de fraude o engaño fraudulento;
                ● en cualquier caso en que fuera ilegal o ilícito excluir, limitar o intentar excluir o limitar
                nuestra responsabilidad.'
            />
            <Term_condition
                title='10.2 Renuncia de responsabilidad.'
                description='No obstante lo dispuesto en el párrafo anterior, en la
                medida en que lo permita la legislación vigente y a menos de que estos Términos y
                Condiciones indiquen lo contrario, no aceptaremos ninguna responsabilidad por las
                siguientes pérdidas, independientemente de su origen:
                ● pérdida de ingresos o ventas;
                ● pérdida de funcionamiento;
                ● pérdida de utilidades o contratos;
                ● pérdida de ahorros previstos;
                ● pérdida de datos;'
            />
            <Term_condition
                title='10.3 Garantías'
                description='Debido a la naturaleza abierta de los Servicios y la posibilidad de errores en el
                almacenamiento y transmisión de la información digital, no garantizamos la exactitud y
                seguridad de la información transmitida u obtenida por medio de los Servicios, a menos de
                que se indique expresamente lo contrario en los Servicios. Todas las descripciones de
                productos, información y materiales mostrados en los Servicios se proporcionan “tal cual”,
                sin garantías ni condiciones expresas o implícitas de los mismos, excepto por las
                
                establecidas en virtud de la ley. En este sentido, dado que usted está contratando en
                calidad de consumidor o usuario, estamos obligados a entregar los bienes de conformidad
                con la transacción mutuamente acordada, de acuerdo con expectativas comerciales
                razonables, siendo responsables de cualquier inconformidad que exista en el momento de
                la entrega.'
            />
            <h1>11. LIMITACIÓN DE RESPONSABILIDAD</h1>
            <Term_condition
                title=''
                description='1. Al utilizar los servicios, usted reconoce y acepta que los servicios, incluyendo
                el sitio y las aplicaciones, se ofrecen tal cual, y por defecto, sin ninguna
                garantía, ni expresa ni implícita. Sin limitar lo antedicho, y en la medida en
                que lo permita la ley, la compañía renuncia expresamente a cualquier
                garantía y condición de cualquier tipo, incluyendo cualquier garantía o
                condición de comerciabilidad, titularidad, exactitud, integridad, servicio
                ininterrumpido o libre de errores, idoneidad para un fin determinado, disfrute,
                no infracción y cualquier garantía que surja del curso de la operación o uso
                comercial.
                2. No hacemos promesas con respecto a, y renunciamos expresamente a toda
                responsabilidad por: productos, servicios, información, programación y/o
                cualquier otra cosa proporcionada por un tercero al que pueda acceder a
                través de los servicios; o la calidad o conducta de cualquier tercero con el
                que interactúe en virtud de su uso de los servicios.
                3. Usted acepta que en la medida máxima permitida por la ley, no seremos
                responsables ante usted bajo ninguna teoría de responsabilidad. Sin limitar lo
                anterior, usted acepta que, la compañía y sus entidades afiliadas no serán
                responsables por ningún daño indirecto, inherente, derivado, especial o
                ejemplar, pérdida de utilidades, interrupción de actividad empresarial, que
                surja de, o esté relacionada con el uso o incapacidad de utilizar los servicios
                de cualquier manera.
                4. Su único recurso disponible respecto a cualquier insatisfacción con los
                servicios es dejar de hacer uso de los mismos.
                
                Algunas jurisdicciones no permiten limitaciones de garantías implícitas o exclusiones de
                responsabilidad por determinados tipos de daños. Derivado de lo cual, es posible que las
                limitaciones y exclusiones anteriores no se apliquen en su totalidad o en parte.'
            />
            <h1>12. DISPUTAS LEGALES Y ARBITRAJE</h1>
            <Term_condition
                title=''
                description='Este acuerdo y cualquier disputa o reclamación (incluidas las disputas o reclamaciones no
                    contractuales) que surja de, o que estén relacionados con el presente acuerdo o con su
                    objeto, o el uso de los Servicios, se regirá e interpretará de acuerdo con las leyes de
                    Singapur, sin tener en cuenta sus disposiciones sobre conflictos de leyes.'
            />
            <Term_condition
                title='12.1 Resolución inicial de controversias'
                description='Estamos disponibles en la sección de servicio al
                cliente de la página para abordar cualquier preocupación que pueda tener con respecto a su
                uso de los Servicios. La mayor parte de las preocupaciones pueden resolverse rápidamente
                de esta manera.'
            />
            <Term_condition
                title='12.2 Renuncia a acciones colectivas o consolidadas'
                description='Todas las reclamaciones y disputas deben ser arbitradas o litigadas sobre una base individual y no sobre una base colectiva. Las reclamaciones de más de un cliente o usuario no podrán ser arbitradas o litigadas conjuntamente o consolidados con los de cualquier otro cliente o usuario.
                '
            />
            <h1>13. TÉRMINOS Y CONDICIONES LEGALES</h1>
            <Term_condition
                title='13.1 Cesión'
                description='Usted no puede ceder o transferir este Acuerdo (o cualquiera de sus derechos u obligaciones bajo este Acuerdo) sin el consentimiento previo por escrito de la Compañía. Cualquier intento de cesión o transferencia que no cumpla con lo antedicho será nula.                '
            />
            <Term_condition
                title='13.2 Integridad del Acuerdo; sin renuncia'
                description='Estos Términos y Condiciones, junto con nuestra Política de cookies y de privacidad, así como cualquier otro aviso legal publicado en el Sitio o las Aplicaciones, constituirán el acuerdo completo entre las partes en relación con los Servicios y sustituye a todos los términos y condiciones, acuerdos, discusiones y documentos anteriores, relacionados con los Servicios. Si alguna disposición de estos Términos y Condiciones resulta inaplicable, dicha disposición no afectará la validez del resto de las disposiciones de estos Términos y Condiciones, que permanecerán en pleno vigor y efecto.
                '
            />
            <Term_condition
                title='13.3 Indemnización'
                description='Usted acepta liberar, indemnizar y defender a la Compañía y a cualquier subsidiaria, filial, o compañía relacionada, así como a los proveedores, licenciatarios y socios, funcionarios, directores, empleados, agentes y representantes de cada uno de ellos, de todas las reclamaciones y costes de terceros (incluidos los honorarios razonables de abogados) derivados de o relacionados con: su uso de los Servicios; su conducta o interacciones con otros usuarios de los Servicios; su incumplimiento de estos Términos y Condiciones. Le notificaremos de inmediato de cualquier reclamación y le proporcionaremos (a su cargo) una ayuda razonable para defender la reclamación. Usted nos permitirá participar en la defensa y no resolverá tal reclamación sin nuestro consentimiento previo por escrito.

                '
            />
            <Term_condition
                title='13.4 Interpretación'
                description='Al momento de interpretar estos Términos y Condiciones, los encabezados se incluyen exclusivamente para su conveniencia y no afectan el contenido del mismo.
                '
            />
            <h1>14. INFRACCIÓN DE DERECHOS DE AUTOR</h1>
            <Term_condition
                title=''
                description='Así como pedimos a los demás que respeten nuestros derechos de propiedad intelectual, nosotros respetamos los derechos de propiedad intelectual de los demás. Si usted cree que el material ubicado en o vinculado con la Compañía viola sus derechos de autor, le solicitamos que nos envíe una solicitud de eliminación del derecho de autor en la parte de servicio al cliente de la página.La notificación de la infracción deberá:
                Identificar del trabajo protegido por derechos de autor que afirma que se ha infringido junto con cualquier registro de derechos de autor;
                Identificar del material o enlace en nuestros Servicios que usted alega que infringe el trabajo protegido por derechos de autor;
                Proporcionar su denominación legal completa, afiliación a la Compañía, dirección postal, número de teléfono y dirección de correo electrónico;
                                '
            />
            <h1>15. TRANSFERENCIAS DE NEGOCIOS</h1>
            <Term_condition
                title=''
                description='Si la Compañía fuera adquirida, o declarada en bancarrota, la información del usuario sería uno de los activos transferidos o adquiridos por un tercero. Usted reconoce que dichas transferencias pueden ocurrir y que cualquier adquirente de la Compañía puede continuar utilizando su Información Personal para los mismos fines para los que hemos obtenido previamente su consentimiento.
                '
            />
            <h1>16. CONTACTO</h1>
            <Term_condition
                title=''
                description='Cualquier duda o comentario sobre nuestras prácticas de privacidad o estos Términos y Condiciones pueden ponerse en contacto con nosotros en cualquier momento por medio de la página de servicio al cliente.
                '
            />
             <Link to="/">
            <Button variant="outline-info">
                Volver
            </Button>
                </Link>
        </div>
    </>
    );
}