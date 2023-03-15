import React from "react";
import Titulos from "../Titulos/titulos";
import styles from './disclaimer.module.css'

const Disclaimer = ({category}) => {
    return <div className={styles.menuGeneral}> 

                {category == 'Cookies' ? 
                <>
                <h1>Política de {category}</h1>

                <p>Blue Team Adopciones informa acerca del uso de las cookies en su página web: https://www.blueteamadopciones.com/</p>
                <h2>¿Qué son las cookies?</h2>
                <div className={styles.hardtext}>
                    <p>Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.</p>
                </div>
                <h2>Tipos de cookies</h2>
                    <p className={styles.hardtext}>Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan se pueden distinguir dos tipos:</p>
                <div className={styles.hardtext}>
                    <h3>• Cookies propias:</h3>
                    <p>Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</p>
                    <h3>• Cookies de terceros:</h3>
                    <p>Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies. En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio editor pero la información que se recoja mediante éstas sea gestionada por un tercero, no pueden ser consideradas como cookies propias.</p>
                    <p>Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de:</p>
                    <h3>• Cookies de sesión:</h3>
                    <p>Diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión (p.e. una lista de productos adquiridos).</p>
                    <h3>• Cookies persistentes:</h3>
                    <p>Los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</p>
                    <p>Por último, existe otra clasificación con seis tipos de cookies según la finalidad para la que se traten los datos obtenidos:</p>
                    <h3>• Cookies técnicas:</h3>
                    <p>Aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales.</p>
                    <h3>• Cookies de personalización:</h3>
                    <p>Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</p>
                    <h3>• Cookies de análisis:</h3>
                    <p>Permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</p>
                    <h3>• Cookies publicitarias:</h3>
                    <p>Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.</p>
                    <h3>• Cookies de publicidad comportamental:</h3>
                    <p>Almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</p>
                    <h3>• Cookies de redes sociales externas:</h3>
                    <p>Se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales (facebook, youtube, twitter, linkedIn, etc..) y que se generen únicamente para los usuarios de dichas redes sociales. Las condiciones de utilización de estas cookies y la información recopilada se regula por la política de privacidad de la plataforma social correspondiente.</p>
                </div>
                <h2>Desactivación y eliminación de cookies</h2>
                <div className={styles.hardtext}>
                    <p>Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en su equipo. Al desactivar cookies, algunos de los servicios disponibles podrían dejar de estar operativos. La forma de deshabilitar las cookies es diferente para cada navegador, pero normalmente puede hacerse desde el menú Herramientas u Opciones. También puede consultarse el menú de Ayuda del navegador dónde puedes encontrar instrucciones. El usuario podrá en cualquier momento elegir qué cookies quiere que funcionen en este sitio web.</p>
                    <br></br>
                    <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
                    <h3>• Microsoft Internet Explorer o Microsoft Edge:</h3>
                    <a href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies">http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies</a>
                    <h3>• Mozilla Firefox:</h3>
                    <a href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia">http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia</a>
                    <h3>• Chrome:</h3>
                    <a href="https://support.google.com/accounts/answer/61416?hl=es">https://support.google.com/accounts/answer/61416?hl=es</a>
                    <h3>• Safari:</h3>
                    <a href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/">http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/</a>
                    <h3>• Opera:</h3>
                    <a href="http://help.opera.com/Linux/10.60/es-ES/cookies.html">http://help.opera.com/Linux/10.60/es-ES/cookies.html</a>
                    <br></br>
                    <br></br>
                    <p>Además, también puede gestionar el almacén de cookies en su navegador a través de herramientas como las siguientes</p>
                    <h3>• Ghostery:</h3>
                    <a href="www.ghostery.com/">www.ghostery.com/</a>
                    <h3>• Your Online Choices:</h3>
                    <a href="www.youronlinechoices.com/es/">www.youronlinechoices.com/es/</a>
                    <p>Cookies utilizadas en <a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/</a></p>
                </div>
                <h2>A continuación se identifican las cookies que están siendo utilizadas en este portal así como su tipología y función:</h2>
                <div className={styles.hardtext}>
                    <h3>• _utma</h3>
                    <p>Duración: 2 años a partir de su instalación o actualización.</p>
                    <p>Descripción: Recopila información anónima sobre la navegación de los usuarios por el sitio web con el fin de conocer el origen de las visitas y otros datos estadísticos. Esta cookie normalmente se almacena en el navegador en la primera visita a nuestro sitio web. Si la cookie ha sido borrada a través del navegador y posteriormente vuelve a visitar nuestro sitioweb, una nueva cookie del tipo _utma se escribe con un ID único diferente. Esta cookie se utiliza para determinar visitantes únicos a nuestro sitio web y se actualiza con cada vista de página. Adicionalmente, esta cookie proporciona un identificador único que Google Analytics utiliza para asegurar la validez y la accesibilidad de la cookie, así como una medida de seguridad extra.</p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Analítica</p>
                    <h3>• _utmb</h3>
                    <p>Duración: 30 minutos</p>
                    <p>Descripción: Almacena información sobre la actividad de la visita a nuestro sitio web y principalmente la duración de ésta.</p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Analítica</p>
                    <h3>• _utmc</h3>
                    <p>Duración: Sesión</p>
                    <p>Descripción: Almacena información sobre la actividad de la visita a nuestro sitio web y principalmente la duración de ésta.</p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Analítica</p>
                    <p>Protección de Datos - Política de cookies 5/11</p>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam</p>
                    <h3>• _utmz</h3>
                    <p>Duración: 6 meses a partir de su instalación o actualización.</p>
                    <p>Descripción: Esta cookie normalmente se almacena en el navegador en la primera visita a nuestro sitio web. Esta cookie almacena cómo ha llegado el visitante a nuestro sitio web, ya sea directamente introduciendo la dirección del dominio, un enlace, una búsqueda web o un anuncio. La cookie se actualiza cada vez que visita nuestra web.</p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Analítica</p>
                    <h3>• _ga</h3>
                    <p>Duración: 2 años</p>
                    <p>Descripción: Sirve para distinguir a los usuarios. Generada por Google Analytics. Google almacena la informacion recogida por las cookies en servidores ubicados en Estados Unidos, cumpliendo con la legislación Europea en cuanto a protección de datos personales y se compromete a no compartirla con terceros, excepto cuando la ley le obligue a ello o sea necesario para el funcionamiento del sistema. Google no asocia su direccion IP con ninguna otra informacion que tenga. Si desea obtener mas informacion acerca de las cookies usadas por Google Analytics, por favor acceda a esta direccion: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1</a></p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Analítica</p>
                    <h3>• _gat</h3>
                    <p>Duración: 1 minuto</p>
                    <p>Descripción: Utilizada para mostrar nuestra publicidad en otras páginas de la red de Google. Generada por Google Analytics. Google almacena la informacion recogida por las cookies en servidores ubicados en Estados Unidos, cumpliendo con la legislación Europea en cuanto a protección de datos personales y se compromete a no compartirla con terceros, excepto cuando la ley le obligue a ello o sea necesario para el funcionamiento del sistema. Google no asocia su direccion IP con ninguna otra informacion que tenga. Si desea obtener mas informacion acerca de las cookies usadas por Google Analytics, por favor acceda a esta direccion:</p>
                    <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1</a>
                    <p>Protección de Datos - Política de cookies 6/11</p>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam</p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Publicidad comportamental</p>
                    <h3>• _gid</h3>
                    <p>Duración:24 horas</p>
                    <p>Descripción: Generada por Google Analytics. Google almacena la informacion recogida por las cookies en servidores ubicados en Estados Unidos, cumpliendo con la legislación Europea en cuanto a protección de datos personales y se compromete a no compartirla con terceros, excepto cuando la ley le obligue a ello o sea necesario para el funcionamiento del sistema. Google no asocia su direccion IP con ninguna otra informacion que tenga. Si desea obtener mas informacion acerca de las cookies usadas por Google Analytics, por favor acceda a esta direccion: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw</a></p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Publicidad comportamental</p>
                    <h3>• LOGIN_INFO</h3>
                    <p>Duración: 2 años</p>
                    <p>Descripción: En algunas páginas de nuestro Sitio Web tenemos vídeos incrustados de Youtube, es un servicio de Google. Su uso implica la remisión de esta cookie además de las cookies que Google requiere si mantiene la sesión activa con su cuenta, con el propósito de visualizar los vídeos incrustados, estimar el ancho de banda y mostrar cuantas veces se ha reproducido.</p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Analítica</p>
                    <h3>• AMP_TOKEN</h3>
                    <p>Duración: 30 segundos a 1 año</p>
                    <p>Descripción: Incluye un token que se puede utilizar para recuperar un ID de cliente del servicio de ID de cliente de AMP. Otros posibles valores indican inhabilitaciones, solicitudes en curso o errores obtenidos al recuperar un ID del servicio de ID de cliente de AMP.</p>
                    <p>Tipo: Tercero</p>
                    <p>Finalidad: Analítica</p>
                </div>
                <h2>Aceptación de la Política de cookies</h2>
                <div className={styles.hardtext}>
                    <p><a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/</a>, asume que usted acepta el uso de cookies. No obstante, muestra información sobre su Política de cookies en la parte inferior o superior de cualquier página del portal con cada inicio de sesión con el objeto de que usted sea consciente. Ante esta información es posible llevar a cabo las siguientes acciones:</p>
                    <h3>• Aceptar cookies:</h3>
                    <p>No se volverá a visualizar este aviso al acceder a cualquier página del portal durante la presente sesión.</p>
                    <h3>• Cerrar:</h3>
                    <p>Se oculta el aviso en la presente página.</p>
                    <h3>• Modificar su configuración:</h3>
                    <p>Podrá obtener más información sobre qué son las cookies, conocer la Política de cookies de:</p>
                    <p><a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/ </a>y modificar la configuración de su navegador.</p>
                </div>
                </> : null}
            

                {category == 'Privacidad' ? 
                <>
                <h1>Política de {category}</h1>

                <h2>Protección de datos de carácter personal según el RGPD</h2>

                <div className={styles.hardtext}>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam, en aplicación de la normativa vigente en materia de protección de datos de carácter personal, informa que los datos personales que se recogen a través de los formularios del Sitio web: <a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/</a>, se incluyen en los ficheros automatizados específicos de usuarios de los servicios de Sociedad Protectora de Animales y Plantas de BlueTeam</p>
                    <br></br>
                    <p>La recogida y tratamiento automatizado de los datos de carácter personal tiene como finalidad el mantenimiento de la relación comercial y el desempeño de tareas de información, formación, asesoramiento y  otras actividades propias de Sociedad Protectora de Animales y Plantas de BlueTeam</p>
                    <br></br>
                    <p>Estos datos únicamente serán cedidos a aquellas entidades que sean necesarias con el único objetivo de dar cumplimiento a la finalidad anteriormente expuesta.</p>
                    <br></br>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los  mismos.</p>
                    <br></br>
                    <p>El usuario podrá en cualquier momento ejercitar los derechos de acceso, oposición, rectificación, cancelación, limitación y portabilidad reconocidos en el citado Reglamento (UE). El ejercicio de estos derechos puede realizarlo el propio usuario a través de email a: lopd@adopcionesblueteam.com o en la dirección: Camino Del Nuclio, 4, C.P. FOOBAR - BlueTeam.</p>
                    <br></br>
                    <p>El usuario manifiesta que todos los datos facilitados por él son ciertos y correctos, y se compromete a mantenerlos actualizados, comunicando los cambios a Sociedad Protectora de Animales y Plantas de BlueTeam Finalidad del tratamiento de los datos personales:</p>
                    <br></br>
                    <h3>¿Con qué finalidad trataremos tus datos personales?</h3>
                    <p>En Sociedad Protectora de Animales y Plantas de BlueTeam, trataremos tus datos personales recabados a través del Sitio Web: <a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/</a>, con las siguientes finalidades:</p>
                    <br></br>
                    <p>1. Prestar sus servicios de acuerdo con las necesidades particulares de los clientes, con el fin de cumplir los contratos suscritos por la misma. Te recordamos que puedes oponerte al envío de comunicaciones comerciales por cualquier vía y en cualquier momento, remitiendo un correo electrónico a la dirección anteriormente indicada. Los campos de dichos registros son de cumplimentación obligatoria, siendo imposible realizar las finalidades expresadas si no se aportan esos datos.</p>
                    <br></br>
                    <h3>¿Por cuánto tiempo se conservan los datos personales recabados?</h3>
                    <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o no solicites su supresión y durante el plazo por el cuál pudieran derivarse responsabilidades legales por los servicios prestados.</p>
                    <br></br>
                    <h3>Legitimación:</h3>
                    <p>El tratamiento de tus datos se realiza con las siguientes bases jurídicas que legitiman el mismo:</p>
                    <p>1. La solicitud de información y/o la contratación de los servicios de Sociedad Protectora de Animales y Plantas de BlueTeam, cuyos términos y condiciones se pondrán a tu disposición en todo caso, de forma previa a una eventual contratación.</p>
                    <p>2. El consentimiento libre, específico, informado e inequívoco, en tanto que te informamos poniendo a tu disposición la presente política de privacidad, que tras la lectura de la misma, en caso de estar conforme, puedes aceptar mediante una declaración o una clara acción afirmativa, como el marcado de una casilla dispuesta al efecto.</p>
                    <br></br>
                    <p>En caso de que no nos facilites tus datos o lo hagas de forma errónea o incompleta, no podremos atender tu solicitud, resultando del todo imposible proporcionarte la información solicitada o llevar a cabo la contratación de los servicios.</p>
                    <br></br>
                    <h3>Destinatarios:</h3>
                    <p>Los datos no se comunicarán a ningún tercero ajeno a Sociedad Protectora de Animales y Plantas de BlueTeam, salvo obligación legal.</p>
                    <br></br>
                    <p>Datos recopilados por usuarios de los servicios</p>
                    <br></br>
                    <p>En los casos en que el usuario incluya ficheros con datos de carácter personal en los servidores de alojamiento compartido, Sociedad Protectora de Animales y Plantas de BlueTeam no se hace responsable del incumplimiento por parte del usuario del RGPD.</p>
                    <br></br>
                    <h3>Retención de datos en conformidad a la LSSI</h3>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam informa de que, como prestador de servicio de alojamiento de datos y en virtud de lo establecido en la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), retiene por un periodo máximo de 12 meses la información imprescindible para identificar el origen de los datos alojados y el momento en que se inició la prestación del servicio. La retención de estos datos no afecta al secreto de las comunicaciones y sólo podrán ser utilizados en el marco de una investigación criminal o para la salvaguardia de la seguridad pública, poniéndose a disposición de los jueces y/o tribunales o del Ministerio que así los requiera.</p>
                    <br></br>
                    <p>La comunicación de datos a las Fuerzas y Cuerpos del Estado se hará en virtud a lo dispuesto en la normativa sobre protección de datos personales.</p>
                    <br></br>
                    <h3>Derechos propiedad intelectual <a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/</a></h3>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam es titular de todos los derechos de autor, propiedad intelectual, industrial, know how y cuantos otros derechos guardan relación con los contenidos del sitio web <a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/</a> y los servicios ofertados en el mismo, así como de los programas necesarios para su implementación y la información relacionada.</p>
                    <br></br>
                    <p>No se permite la reproducción, publicación y/o uso no estrictamente privado de los contenidos, totales o parciales, del sitio web <a href="https://www.adopcionesblueteam.com/">https://www.adopcionesblueteam.com/</a> sin el consentimiento previo y por escrito.</p>
                    <br></br>
                    <h3>Propiedad intelectual del software</h3>
                    <p>El usuario debe respetar los programas de terceros puestos a su disposición por Sociedad Protectora de Animales y Plantas de BlueTeam, aún siendo gratuitos y/o de disposición pública.</p>
                    <br></br>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam dispone de los derechos de explotación y propiedad intelectual necesarios del software.</p>
                    <br></br>
                    <p>El usuario no adquiere derecho alguno o licencia por el servicio contratado, sobre el software necesario para la prestación del servicio, ni tampoco sobre la información técnica de seguimiento del servicio, excepción hecha de los derechos y licencias necesarios para el cumplimiento de los servicios contratados y únicamente durante la duración de los mismos.</p>
                    <br></br>
                    <p>Para toda actuación que exceda del cumplimiento del contrato, el usuario necesitará autorización por escrito por parte de Sociedad Protectora de Animales y Plantas de BlueTeam, quedando prohibido al usuario acceder, modificar, visualizar la configuración, estructura y ficheros de los servidores propiedad de Sociedad Protectora de Animales y Plantas de BlueTeam, asumiendo la responsabilidad civil y penal derivada de cualquier incidencia que se pudiera producir en los servidores y sistemas de seguridad como consecuencia directa de una actuación negligente o maliciosa por su parte.</p>
                    <br></br>
                    <h3>Propiedad intelectual de los contenidos alojados</h3>
                    <p>Se prohíbe el uso contrario a la legislación sobre propiedad intelectual de los servicios prestados por Sociedad Protectora de Animales y Plantas de BlueTeam y, en particular de:</p>
                    <p>• La utilización que resulte contraria a las leyes españolas o que infrinja los derechos de terceros.</p>
                    <p>• La publicación o la transmisión de cualquier contenido que, a juicio de Sociedad Protectora de Animales y Plantas de BlueTeam, resulte violento, obsceno, abusivo, ilegal, racial, xenófobo o difamatorio.</p>
                    <p>• Los cracks, números de serie de programas o cualquier otro contenido que vulnere derechos de la propiedad intelectual de terceros.</p>
                    <p>• La recogida y/o utilización de datos personales de otros usuarios sin su consentimiento expreso o contraviniendo lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos.</p>
                    <p>• La utilización del servidor de correo del dominio y de las direcciones de correo electrónico para el envío de correo masivo no deseado.</p>
                    <br></br>
                    <p>El usuario tiene toda la responsabilidad sobre el contenido de su web, la información transmitida y almacenada, los enlaces de hipertexto, las reivindicaciones de terceros y las acciones legales en referencia a propiedad intelectual, derechos de terceros y protección de menores.</p>
                    <br></br>
                    <p>El usuario es responsable respecto a las leyes y reglamentos en vigor y las reglas que tienen que ver con el funcionamiento del servicio online, comercio electrónico, derechos de autor, mantenimiento del orden público, así como principios universales de uso de Internet.</p>
                    <br></br>
                    <p>El usuario indemnizará a Sociedad Protectora de Animales y Plantas de BlueTeam por los gastos que generara la imputación de Sociedad Protectora de Animales y Plantas de BlueTeam en alguna causa cuya responsabilidad fuera atribuible al usuario, incluidos honorarios y gastos de defensa jurídica, incluso en el caso de una decisión judicial no definitiva.</p>
                    <h3>Protección de la información alojada</h3>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam realiza copias de seguridad de los contenidos alojados en sus servidores, sin embargo no se responsabiliza de la pérdida o el borrado accidental de los datos por parte de los usuarios. De igual manera, no garantiza la reposición total de los datos borrados por los usuarios, ya que los citados datos podrían haber sido suprimidos y/o modificados durante el periodo del tiempo transcurrido desde la última copia de seguridad.</p>
                    <br></br>
                    <p>Los servicios ofertados, excepto los servicios específicos de backup, no incluyen la reposición de los contenidos conservados en las copias de seguridad realizadas por Sociedad Protectora de Animales y Plantas de BlueTeam, cuando esta pérdida sea imputable al usuario; en este caso, se determinará una tarifa acorde a la complejidad y volumen de la recuperación, siempre previa aceptación del usuario.</p>
                    <br></br>
                    <p>La reposición de datos borrados sólo está incluida en el precio del servicio cuando la pérdida del contenido sea debida a causas atribuibles a Sociedad Protectora de Animales y Plantas de BlueTeam.</p>
                    <br></br>
                    <h3>Comunicaciones comerciales</h3>
                    <p>En aplicación de la LSSI. Sociedad Protectora de Animales y Plantas de BlueTeam no enviará comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.</p>
                    <br></br>
                    <p>En el caso de usuarios con los que exista una relación contractual previa, Sociedad Protectora de Animales y Plantas de BlueTeam sí está autorizado al envío de comunicaciones comerciales referentes a productos o servicios de Sociedad Protectora de Animales y Plantas de BlueTeam que sean similares a los que inicialmente fueron objeto de contratación con el cliente.</p>
                    <br></br>
                    <p>En todo caso, el usuario, tras acreditar su identidad, podrá solicitar que no se le haga llegar más información comercial a través de los canales de Atención al Cliente.</p>
                </div> 
                </> : null}

                {/* {category == 'Legal' ? 
                <>
                <h1>Aviso Legal</h1>
                    <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web https://www.protectoramalaga.com/, le informa de lo siguiente:</p>
                    <p>• Denominación social: Sociedad Protectora de Animales y Plantas de Malaga</p>
                    <p>• NIF: G29029436</p>
                    <p>• Domicilio: c/ Nyan Cat, 10 29640 Malaga España</p>
                    <br></br>
                    <p>Con los límites establecidos en la ley, <a>https://www.adopcionesblueteam.com/</a> no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que se contienen en sus páginas de Internet.</p>
                    <br></br>
                    <p>Los contenidos e información no vinculan a https://www.adopcionesbluteam.com/ ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.</p>
                    <br></br>
                    <p>El usuario tiene toda la responsabilidad sobre el contenido de su web, la información transmitida y almacenada, los enlaces de hipertexto, las reivindicaciones de terceros y las acciones legales en referencia a propiedad intelectual, derechos de terceros y protección de menores.</p>
                    <br></br>
                    <p>El usuario es responsable respecto a las leyes y reglamentos en vigor y las reglas que tienen que ver con el funcionamiento del servicio online, comercio electrónico, derechos de autor, mantenimiento del orden público, así como principios universales de uso de Internet.</p>
                    <br></br>
                    <p>El usuario indemnizará a Sociedad Protectora de Animales y Plantas de BlueTeam por los gastos que generara la imputación de Sociedad Protectora de Animales y Plantas de BlueTeam en alguna causa cuya responsabilidad fuera atribuible al usuario, incluidos honorarios y gastos de defensa jurídica, incluso en el caso de una decisión judicial no definitiva.</p>
                    <h3>Protección de la información alojada</h3>
                    <p>Sociedad Protectora de Animales y Plantas de BlueTeam realiza copias de seguridad de los contenidos alojados en sus servidores, sin embargo no se responsabiliza de la pérdida o el borrado accidental de los datos por parte de los usuarios. De igual manera, no garantiza la reposición total de los datos borrados por los usuarios, ya que los citados datos podrían haber sido suprimidos y/o modificados durante el periodo del tiempo transcurrido desde la última copia de seguridad.</p>
                    <br></br>
                    <p>Los servicios ofertados, excepto los servicios específicos de backup, no incluyen la reposición de los contenidos conservados en las copias de seguridad realizadas por Sociedad Protectora de Animales y Plantas de BlueTeam, cuando esta pérdida sea imputable al usuario; en este caso, se determinará una tarifa acorde a la complejidad y volumen de la recuperación, siempre previa aceptación del usuario.</p>
                    <br></br>
                    <p>La reposición de datos borrados sólo está incluida en el precio del servicio cuando la pérdida del contenido sea debida a causas atribuibles a Sociedad Protectora de Animales y Plantas de BlueTeam.</p>
                    <br></br>
                    <h3>Comunicaciones comerciales</h3>
                    <p>En aplicación de la LSSI. Sociedad Protectora de Animales y Plantas de BlueTeam no enviará comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.</p>
                    <br></br>
                    <p>En el caso de usuarios con los que exista una relación contractual previa, Sociedad Protectora de Animales y Plantas de BlueTeam sí está autorizado al envío de comunicaciones comerciales referentes a productos o servicios de Sociedad Protectora de Animales y Plantas de BlueTeam que sean similares a los que inicialmente fueron objeto de contratación con el cliente.</p>
                    <br></br>
                    <p>En todo caso, el usuario, tras acreditar su identidad, podrá solicitar que no se le haga llegar más información comercial a través de los canales de Atención al Cliente.</p>
                </div> 
                </> : null} */}


            </div>
}

export default Disclaimer