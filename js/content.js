/* =========================================================================
   EGRAN · Herramienta Comercial — Contenido
   Cada "seccion" contiene bloques tipados (p, bullets, table, callout, quote).
   Estos mismos bloques se reusan en Modo Aprendizaje y en Modo Campo,
   así el contenido vive en un solo lugar.
   ========================================================================= */

const PARTES = [

  // ---------------------------------------------------------------- PRÓLOGO
  {
    id: "prologo", numero: null, titulo: "Prólogo",
    secciones: [
      { id: "prologo-1", titulo: "Por qué existe este manual y cómo usarlo", contenido: [
        { t: "p", x: "Este manual representa la experiencia de más de 80 años de Egran en la calle y lo que hoy cuentan los propios vendedores de la empresa sobre lo que funciona y lo que no." },
        { t: "p", x: "La intención es que dentro del manual encuentres respuestas a cómo manejar situaciones cotidianas que hacen al proceso comercial: qué decir en una reunión, qué mirar en la oficina de un cliente, cómo responder cuando alguien te dice que somos caros, cuánto podés negociar sin tener que llamar a nadie, y cómo seguir una cuenta en el tiempo sin perderla de vista. También vas a encontrar, en la última parte, la experiencia real de los propios compañeros." },
        { t: "quote", x: "Vendemos con la confianza de 80 años de historia, pero la ganamos de nuevo en cada reunión, escuchando primero y proponiendo después.", by: "Filosofía comercial de Egran" },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 1
  {
    id: "parte1", numero: 1, titulo: "Egran: lo que tenés que saber antes de salir a vender",
    secciones: [
      { id: "1.1", titulo: "La historia que vale la pena contar", contenido: [
        { t: "p", x: "Los 80 años de Egran son un argumento de venta en sí mismo. En un mercado donde muchas empresas aparecen y desaparecen en pocos años, que una pyme familiar cordobesa siga en pie, creciendo, desde 1938, dice algo muy fuerte sobre seriedad, sobre cumplir lo que se promete y sobre saber adaptarse. Eso es exactamente lo que un cliente necesita sentir antes de decidir trabajar con un proveedor nuevo." },
        { t: "p", x: "Hacer referencia a la historia del Molino es la forma más simple de explicarle a un cliente que detrás de la marca hay personas, hay una familia que puso el nombre propio en cada bolsa que sale de la planta, y que eso se nota en cómo se trabaja." },
        { t: "bullets", items: [
          "88 años de trayectoria familiar.",
          "Certificaciones de calidad de primer nivel (FSSC 22000, IRAM, Kosher, Sin TACC, entre otras).",
          "Presencia en las principales cadenas del país.",
          "Capacidad de producir tanto marca propia como marca blanca para grandes supermercados.",
        ]},
        { t: "p", x: "Si los supermercados más exigentes del país confían en Egran para fabricar sus propias marcas, es la prueba más objetiva de calidad que existe. No hace falta decir 'somos buenos'; alcanza con decir 'nos eligen para fabricar sus propias marcas los supermercados más grandes del país', y dejar que el cliente saque su propia conclusión." },
      ]},
      { id: "1.2", titulo: "El portfolio en profundidad", contenido: [
        { t: "p", x: "Cada producto de Egran tiene que poder explicarse desde lo que le sirve al cliente, no desde la ficha técnica." },
        { t: "p", x: "Para cada línea de producto (cereales, legumbres, harinas, productos sin gluten, barras de cereal, comidas listas, marca blanca) conviene tener claro: qué es en una frase simple, qué problema le resuelve al cliente que lo compra, qué preguntas suele hacer un cliente sobre ese producto puntual, y en qué se diferencia de lo que ofrece la competencia en ese mismo rubro." },
        { t: "p", x: "Un ejemplo de cómo pensarlo: las barras de cereal son un producto derivado de la misma calidad de legumbres y cereales que distingue a Egran. Cuando un cliente dice 'pensé que Egran era legumbres, no golosinas' (una objeción real), la respuesta es reencuadrarla: 'exacto, por eso nuestras barras están hechas con la misma calidad de materia prima que nuestras legumbres, no son una golosina común'." },
        { t: "p", x: "Este trabajo de conocer el portafolio en profundidad no se hace una sola vez. Conviene repasarlo cada tanto, sobre todo cuando se suma un producto nuevo o cuando se detecta que una objeción se repite mucho sobre un producto puntual." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 2
  {
    id: "parte2", numero: 2, titulo: "Antes de la reunión: el trabajo que nadie ve y que define todo",
    secciones: [
      { id: "2.1", titulo: "Por qué la venta se gana o se pierde antes de entrar", contenido: [
        { t: "p", x: "Hay una diferencia enorme entre el vendedor que llega a una reunión a ver qué necesita el cliente, y el vendedor que llega con una propuesta ya pensada para ese cliente puntual. El segundo genera confianza desde el primer minuto, porque el cliente siente que alguien se tomó el trabajo de pensarlo antes de aparecer." },
        { t: "p", x: "Visitar a un cliente sin preparación puede salir bien si el cliente ya quiere comprar, pero apenas la conversación se complica un poco, ahí se nota la diferencia entre visitar y tener una estrategia." },
      ]},
      { id: "2.2", titulo: "Investigación del cliente", contenido: [
        { t: "p", x: "Antes de cualquier reunión, conviene buscar información simple y accesible: qué dice la web del cliente, qué muestra en sus redes sociales, si aparece en alguna noticia reciente del sector. Diez minutos de búsqueda pueden darte un tema de conversación genuino." },
        { t: "p", x: "Es clave entender el negocio del cliente antes de hablar del nuestro: qué vende, a quién le vende, cómo le viene yendo. Un cliente que vende al consumidor final necesita cosas distintas de uno que vende a otros comercios." },
        { t: "p", x: "Si ya tuvo relación con Egran antes, revisá el historial: ¿compró en algún momento? ¿Por qué dejó de comprar? ¿Qué compra hoy, y a quién? Esta información evita el error más incómodo de todos: preguntarle a un cliente algo que ya debería saberse." },
        { t: "p", x: "Por último, conviene tener un mapa simple de quién decide realmente en esa empresa. Muchas veces la persona que te recibe no es la que toma la decisión final." },
      ]},
      { id: "2.3", titulo: "Análisis del mix actual", contenido: [
        { t: "p", x: "Antes de una visita, conviene revisar qué tiene hoy en góndola o en su operación: qué productos nuestros ya tiene, cuáles de la competencia, dónde hay un espacio vacío que Egran podría ocupar." },
        { t: "p", x: "Esto también aplica a visitas periódicas a cuentas que ya son nuestras. Lo que importa no es solo qué hay hoy, sino qué cambió desde la última visita: ¿ganamos espacio o lo perdimos? ¿Rotan bien nuestros productos o quedan estancados? ¿Desapareció algo que antes estaba? Estas señales, miradas en el tiempo, anticipan problemas antes de que el cliente los mencione." },
        { t: "p", x: "Leer una cuenta antes de visitarla significa juntar estas piezas: historial de compra, mix actual, y cualquier cambio reciente, para llegar con una idea clara de qué se le puede ofrecer." },
      ]},
      { id: "2.4", titulo: "Preparar la propuesta antes de ir", contenido: [
        { t: "p", x: "En vez de ir a preguntarle al cliente qué necesita, conviene ir con una hipótesis de lo que probablemente necesita, basada en la información que ya juntaste. Esto no significa imponer la propuesta ni ignorar lo que el cliente diga en la reunión; significa llegar con un punto de partida en vez de una hoja en blanco." },
        { t: "p", x: "Armar una propuesta inicial adaptada implica elegir dos o tres productos que tengan sentido para ese cliente puntual, y no llevar el catálogo completo." },
        { t: "p", x: "Sobre los materiales: llevá solo lo que suma (muestras si es posible, información de certificaciones, algún dato de mercado relevante)." },
      ]},
      { id: "2.5", titulo: "La persona que vas a ver", contenido: [
        { t: "p", x: "Vendemos a personas, no a empresas. Por eso vale la pena investigar también a la persona con la que te vas a reunir, además de investigar la empresa. Un perfil de LinkedIn o Instagram, una publicación reciente, pueden decir mucho sobre alguien." },
        { t: "p", x: "Preguntas simples que ayudan a entender a la persona: ¿cuánto tiempo lleva en el puesto? ¿Está en un momento de crecimiento dentro de la empresa o ya lleva muchos años consolidado en el rol? ¿Qué parece motivarlo profesionalmente: quedar bien con su jefe, innovar, simplificar su trabajo, tener seguridad?" },
        { t: "p", x: "Esta información es una guía para adaptar la conversación. A alguien que busca reconocimiento profesional le sirve un argumento distinto que a alguien que busca simplemente que su trabajo diario tenga menos problemas." },
      ]},
      { id: "2.6", titulo: "El registro: tu memoria no es suficiente", contenido: [
        { t: "p", x: "Confiar solamente en la memoria es, probablemente, el error más caro que puede cometer un vendedor. Con decenas de clientes activos, es prácticamente imposible recordar con precisión qué se habló con cada uno, y ahí es donde se pierden oportunidades." },
        { t: "p", x: "Después de cada contacto con un cliente, conviene registrar cinco datos simples: la fecha, quién estuvo en la reunión, qué se habló, qué se prometió, y cuál es el próximo paso acordado." },
        { t: "p", x: "La ficha de cliente tiene que ser una herramienta viva que se consulta antes de cada visita." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 3
  {
    id: "parte3", numero: 3, titulo: "La venta consultiva: vender es entender primero",
    secciones: [
      { id: "3.1", titulo: "Qué es la venta consultiva y por qué Egran la necesita", contenido: [
        { t: "p", x: "Vender de forma consultiva quiere decir: primero entender a la persona que tenés adelante, y recién después ofrecerle algo." },
        { t: "p", x: "El objetivo de este enfoque es posicionar a Egran como un socio del negocio del cliente, no como un proveedor más entre muchos. Un socio ayuda a que al cliente le vaya mejor; esa diferencia se construye reunión tras reunión." },
      ]},
      { id: "3.2", titulo: "Cómo decide realmente la cabeza del cliente", contenido: [
        { t: "p", x: "Las personas deciden primero con la parte emocional y recién después buscan razones lógicas para justificar esa decisión. Los datos y los argumentos técnicos sirven como confirmación de algo que el cliente ya empezó a sentir antes, no como el disparador principal." },
        { t: "p", x: "Muchas veces cuesta procesar demasiada información junta, y en cambio se recuerda muy bien lo concreto, lo simple y lo que se cuenta como una historia. Por eso una anécdota real convence mucho más que una lista de diez características del producto." },
        { t: "p", x: "También pesa mucho lo primero que se dice y lo último que se dice en una conversación; lo del medio se recuerda menos. Por eso hay que cuidar mucho la apertura de la reunión y el cierre." },
        { t: "p", x: "Por último, a las personas les pesa más la idea de perder algo que la de ganar algo equivalente. Un cliente le teme más a quedarse sin un proveedor confiable en un mal momento, que lo que le entusiasma un descuento adicional." },
      ]},
      { id: "3.3", titulo: "Leer a la persona antes de hablar de productos", contenido: [
        { t: "p", x: "Los primeros cinco minutos de cualquier reunión son de observación. Antes de sacar un producto o hablar de precios, conviene mirar el entorno: cómo está decorada la oficina, qué hay en el escritorio, si hay fotos familiares, diplomas, cuadros, algún objeto que llame la atención." },
        { t: "p", x: "El espacio dice mucho sobre lo que le importa a esa persona: una foto de familia grande habla de alguien para quien la familia es un valor central. Un diploma a la vista puede hablar de alguien a quien le importa que se reconozca su trabajo." },
        { t: "p", x: "Un comentario breve y honesto sobre algo que viste (sin exagerar ni forzarlo) abre una conversación real antes de hablar de negocios." },
        { t: "p", x: "Preguntas simples como '¿hace cuánto estás en esto?' o '¿cómo era el negocio cuando arrancaste?' abren mucho más que preguntar directamente qué productos le interesan." },
      ]},
      { id: "3.4", titulo: "Entender qué mueve a cada cliente", contenido: [
        { t: "p", x: "No todos los clientes se mueven por lo mismo, y adaptar el discurso a lo que le importa a cada uno mejora mucho los resultados de una reunión." },
        { t: "bullets", items: [
          "El cliente que busca seguridad necesita certezas: hablar de estabilidad, de trayectoria de 88 años, de que Egran siempre cumple con lo pactado.",
          "El cliente que busca reconocimiento quiere quedar bien frente a su jefe o sus propios clientes: mostrarle cómo la propuesta lo va a hacer ver bien.",
          "El cliente que busca innovar quiere ser el primero en algo: hablarle de productos nuevos, tendencias, ser pionero en su zona.",
          "El cliente que busca simplificar su vida quiere menos problemas, no más opciones: propuesta clara y acotada.",
        ]},
        { t: "p", x: "Identificar el perfil no requiere ningún test complicado. Alcanza con escuchar las primeras frases de la reunión." },
      ]},
      { id: "3.5", titulo: "El vínculo como herramienta comercial", contenido: [
        { t: "p", x: "Los vínculos genuinos facilitan la venta de hoy y garantizan que esa venta se sostenga en el tiempo. Un cliente que siente un vínculo real tolera mejor una suba de precio, espera con más paciencia una demora puntual, y avisa antes si está por dejar de comprar en lugar de simplemente desaparecer." },
        { t: "p", x: "La memoria relacional (recordar lo que el cliente contó en la última visita, aunque no tenga nada que ver con el negocio) es una de las formas más simples y efectivas de mostrar que la relación importa de verdad." },
        { t: "p", x: "Hay momentos en los que el vínculo construido durante años salva una venta que el precio, solo, hubiera perdido." },
      ]},
      { id: "3.6", titulo: "Seguridad sin egocentrismo: escuchamos, pero no compramos cualquier excusa", contenido: [
        { t: "p", x: "Escuchar al cliente y sostener una posición firme son dos partes de la misma venta. Se escucha para entender la situación real del cliente, no para aceptar automáticamente cualquier condición, excusa o comparación que ponga sobre la mesa." },
        { t: "p", x: "Escuchar es entender por qué el cliente dice lo que dice. Ceder es hacer lo que el cliente pide solo porque lo pidió." },
        { t: "p", x: "Representar a una empresa con 88 años de trayectoria da un lugar de partida distinto al de cualquier proveedor nuevo. Ese respaldo se usa para sostener con tranquilidad lo que se está ofreciendo, incluso cuando el cliente insiste, compara con la competencia o pone una condición fuera de lo razonable." },
        { t: "table", headers: ["Situación", "Postura que conviene evitar", "Postura que sostiene la marca"], rows: [
          ["El cliente dice \u201Casí no te compro más\u201D", "Ceder de inmediato para no perder la venta", "\u201CEntiendo tu punto. Veamos juntos qué margen real tenemos para acomodarlo.\u201D"],
          ["Compara con un precio de la competencia sin mostrar factura ni volumen real", "Igualar el precio a ciegas", "\u201C¿Con qué volumen te ofrecieron ese precio?\u201D"],
          ["Impone una condición de pago o logística fuera de lo normal", "Aceptar para cerrar rápido", "Explicar con calma las condiciones habituales, y qué se puede conversar dentro de ellas"],
        ]},
        { t: "p", x: "El tono correcto es tranquilo. La seguridad no se transmite hablando más fuerte ni discutiendo; se transmite no apurándose, no disculpándose por el precio o las condiciones de Egran, y volviendo siempre a los hechos concretos." },
        { t: "p", x: "Guía simple: si lo que pide el cliente tiene un dato real detrás (un volumen concreto, un historial de pago, una necesidad genuina), es materia de negociación. Si lo que pide es solo una excusa sin nada que la respalde, sostener la posición es cuidar el valor de lo que se vende." },
        { t: "callout", kind: "tip", title: "Por qué funciona (neuroventas): consistencia y autoridad", x: "el cerebro del cliente confía más en quien se muestra seguro y consistente que en quien cambia de postura ante cada objeción. Ceder demasiado rápido resta valor a todo lo demás que se dijo en la reunión." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 4
  {
    id: "parte4", numero: 4, titulo: "Los momentos de la venta: cada visita tiene un propósito",
    secciones: [
      { id: "4.0", titulo: "Las dos misiones en paralelo", contenido: [
        { t: "p", x: "Cada momento del vínculo comercial tiene su propia lógica, objetivo y forma de encararse. La rutina de cualquier vendedor se divide entre dos grandes misiones que conviene sostener siempre en paralelo: conseguir clientes nuevos, y hacer crecer y cuidar los que ya tenemos. Las dos son igual de importantes." },
      ]},
      { id: "4.1", titulo: "El cliente que no nos conoce: la primera visita", contenido: [
        { t: "p", x: "El objetivo de esta visita no es vender; es generar confianza y abrir una puerta. Un cliente que nunca compró Egran todavía no tiene motivos para confiar en nosotros, y pretender cerrar una venta en el primer encuentro suele generar más resistencia que resultado." },
        { t: "p", x: "La meta concreta al salir de esta reunión es que el cliente nos recuerde bien, y que quede un próximo paso claro agendado." },
        { t: "p", x: "Para conseguir la reunión, el primer contacto (por teléfono, WhatsApp o mail) tiene que ser breve y concreto: quién sos, qué empresa representás, y una razón simple por la que valdría la pena diez minutos de su tiempo." },
        { t: "p", x: "En los primeros dos minutos de la reunión, contar la historia corta de Egran (80 años, familia cordobesa, marca elegida por los supermercados más grandes) genera curiosidad natural, sin necesidad de exagerar nada." },
        { t: "p", x: "Antes de mostrar productos, conviene hacer preguntas simples para entender el negocio del cliente: a quién le vende, qué le está funcionando bien, qué le gustaría mejorar." },
        { t: "bullets", items: [
          "Evitar mostrar el catálogo completo de una sola vez.",
          "Evitar hablar de precios antes de tiempo.",
          "Evitar presionar por una decisión rápida.",
        ]},
        { t: "p", x: "Para cerrar, siempre conviene dejar un próximo paso concreto y con fecha." },
        { t: "callout", kind: "tip", title: "Lo que tiene que pasar al cerrar", x: "el cliente sabe quiénes somos, entiende qué nos hace distintos, y tiene una razón concreta para seguir en contacto con nosotros." },
      ]},
      { id: "4.2", titulo: "La primera repetición: qué pasó con esa primera compra", contenido: [
        { t: "p", x: "Esta visita merece su propio espacio porque ahí se define algo clave: si ese cliente nuevo se convierte en un cliente recurrente, o si esa primera compra queda como un hecho aislado." },
        { t: "p", x: "El objetivo es entender cómo le fue con el primer pedido, resolver cualquier detalle que haya salido distinto a lo esperado, y proponer con naturalidad una segunda compra." },
        { t: "p", x: "Preguntas simples y directas ayudan mucho en esta visita: ¿cómo llegó el pedido?, ¿el producto cumplió lo que esperaban?, ¿hubo algún inconveniente en la entrega o en la facturación?" },
        { t: "p", x: "Si todo salió bien, este es el momento ideal para proponer, con naturalidad, un segundo pedido. Si algo salió distinto a lo esperado, resolverlo bien acá vale más que cualquier argumento de venta." },
      ]},
      { id: "4.3", titulo: "La negociación de temporada: la visita que define el año", contenido: [
        { t: "p", x: "El objetivo de esta reunión es acordar volumen, mix de productos y condiciones para un período completo. Es la que requiere más preparación de todas." },
        { t: "p", x: "Antes de esta reunión conviene revisar el historial de compras, cómo vino la temporada anterior, y qué tendencias se ven en el mercado. Presentar los números de la temporada pasada como punto de partida da una base objetiva a la conversación." },
        { t: "p", x: "Conviene llegar con una propuesta concreta en lugar de llegar a preguntar qué quiere el cliente." },
        { t: "p", x: "Antes de negociar precio, volumen o condiciones, conviene tener muy claro qué margen de maniobra existe según el tipo de cliente que se tiene enfrente (ver Matriz de Situación, 4.7), para no tener que improvisar un número en el momento." },
        { t: "bullets", items: [
          "Error frecuente: ceder demasiado rápido ante la primera objeción.",
          "Error frecuente: hablar más de lo que se escucha.",
          "Error frecuente: no dejar registrado por escrito lo que finalmente se acordó.",
        ]},
        { t: "callout", kind: "tip", title: "Lo que tiene que pasar al cerrar", x: "un acuerdo claro y por escrito, con compromisos concretos de ambas partes y con fechas de seguimiento durante toda la temporada." },
      ]},
      { id: "4.4", titulo: "La visita de ampliación de mix: crecer dentro del cliente que ya tenemos", contenido: [
        { t: "p", x: "El objetivo es que un cliente que ya nos compra, nos compre más y sume productos distintos a los habituales. Ya existe confianza y relación, y muchas veces esa confianza no se aprovecha del todo." },
        { t: "p", x: "Señales de que un cliente está listo para ampliar su mix: pregunta espontáneamente por otros productos, comenta que le está yendo bien con lo que ya compra, o menciona una necesidad que hoy no le estamos cubriendo." },
        { t: "p", x: "La propuesta más efectiva no es la más grande, es la más pensada para ese cliente en ese momento puntual." },
        { t: "p", x: "Si el cliente responde 'por ahora estoy bien con lo que tengo', no conviene forzar la propuesta. Es mejor dejarla planteada, marcar una fecha para retomarla." },
        { t: "callout", kind: "tip", title: "Lo que tiene que pasar al cerrar", x: "un acuerdo de prueba con el producto nuevo, o al menos una fecha concreta para retomar la conversación." },
      ]},
      { id: "4.5", titulo: "La visita de seguimiento: estar presente sin ser pesado", contenido: [
        { t: "p", x: "El objetivo de esta visita no es vender de inmediato. Es monitorear cómo viene la cuenta, fortalecer el vínculo, y anticiparse a cualquier problema antes de que el cliente tenga que mencionarlo." },
        { t: "p", x: "Es la visita que más fideliza y, a la vez, la que más se termina dejando de lado cuando el día a día se llena de urgencias. Vale la pena priorizarla igual." },
        { t: "p", x: "Antes de ir, conviene repasar cómo viene rotando el producto, si hubo algún inconveniente reciente, y qué fue lo último que dijo el cliente." },
        { t: "p", x: "Preguntas que más sirven: ¿cómo viene funcionando el producto?, ¿qué comentarios te llegan de tus propios clientes?, ¿hay algo que podríamos mejorar de nuestro lado?" },
        { t: "p", x: "Señales de alerta a las que estar atento: pide menos volumen, tarda más en responder, menciona a la competencia con más frecuencia." },
        { t: "p", x: "Nunca ir a esta visita con las manos vacías. Llevar siempre algo para sumarle al cliente: una muestra de producto (ver 4.8), una novedad de la empresa, un dato del sector, o una idea concreta para su negocio." },
        { t: "p", x: "Es un buen momento para mirar la góndola comparando con la última vez: ¿ganamos o perdimos espacio? ¿Rotan bien o se ven acumulados? ¿Desapareció algo?" },
        { t: "callout", kind: "tip", title: "Lo que tiene que pasar al cerrar", x: "el cliente siente que Egran lo acompaña más allá del pedido, y el vendedor sale con información valiosa sobre el estado real de la cuenta." },
      ]},
      { id: "4.6", titulo: "La rutina de un vendedor de Egran: día, semana, mes y año", contenido: [
        { t: "p", x: "Un vendedor de Egran no espera a que el calendario se ordene solo. La cartera y la búsqueda de nuevos clientes son dos tareas que conviven todas las semanas, nunca una a costa de la otra." },
        { t: "label", x: "Frecuencia de visita según el tipo de cliente" },
        { t: "bullets", items: [
          "Clientes ESTRELLA y VACA (mayor volumen): visita cada dos semanas.",
          "Clientes DEFENDER (volumen medio, cuentas estables): visita mensual.",
          "Clientes OPORTUNIDAD y NICHO (potencial de crecimiento): visita cada seis a ocho semanas, con contacto telefónico entre medio.",
        ]},
        { t: "label", x: "La búsqueda de clientes nuevos" },
        { t: "bullets", items: [
          "Cinco contactos nuevos por semana (llamada, WhatsApp o mail).",
          "Dos primeras visitas concretadas por semana con clientes que nunca compraron Egran.",
          "Objetivo mensual: alrededor de veinte contactos nuevos y ocho primeras visitas.",
        ]},
        { t: "label", x: "El semáforo de inactividad" },
        { t: "bullets", items: [
          "30 días sin comprar: contacto simple, tono de chequeo, no de reclamo.",
          "60 días sin comprar: visita presencial puntual, para entender qué pasó.",
          "90 días sin comprar: se activa el protocolo de cuenta en riesgo.",
          "Más de un año sin comprar: pasa a la categoría de excliente a recuperar (Matriz de Situación).",
        ]},
        { t: "label", x: "El ritmo completo" },
        { t: "p", x: "Día a día: un número de visitas objetivo, reservando siempre un bloque fijo para búsqueda de nuevos clientes. El día se cierra registrando cada visita en la ficha de cliente." },
        { t: "p", x: "Semana a semana: tres días para visitas de cartera, un día con foco fuerte en búsqueda de nuevos clientes, un día flexible para clientes en riesgo y registro." },
        { t: "p", x: "Mes a mes: revisión completa de la cartera asignada, repasando el semáforo de inactividad." },
        { t: "p", x: "Año a año: las negociaciones de temporada marcan los grandes hitos, con revisión periódica del mix de cada cuenta importante." },
        { t: "callout", kind: "warning", title: "Nota", x: "los números de frecuencia y búsqueda de nuevos clientes de esta sección son una primera hipótesis. La definición final se ajusta a la carga real de cada zona." },
      ]},
      { id: "4.7", titulo: "Matriz de Situación: qué se puede negociar según el cliente", contenido: [
        { t: "p", x: "Tener límites claros sobre qué se puede negociar y qué no, para no tener que improvisar un número en plena reunión, definidos por Fernando y Agustín." },
        { t: "label", x: "Criterio general de logística" },
        { t: "p", x: "La logística a incluir depende del surtido y los volúmenes operados, no pudiendo superar en ningún caso el 5% del valor de lo solicitado. Para la región patagónica y mesopotámica, se busca concentrar la entrega en Buenos Aires." },
        { t: "table", headers: ["Situación", "% desc. máximo", "Logística", "Forma de pago", "Volumen mínimo"], rows: [
          ["Cliente nuevo", "19%", "Según criterio general", "Contado o 15 días, según carpeta de referencias comerciales", "1 pallet de lentejas (2.340 paquetes)"],
          ["Excliente a recuperar", "Ver proceso especial", "Según criterio general", "30 días, con referencias", "Según el surtido acordado"],
          ["Cliente recurrente", "Descuento acordado + 2 productos de alta rotación con descuento extra", "Según criterio general", "30 días", "1 pallet de lentejas (2.340 paquetes)"],
        ]},
        { t: "label", x: "El caso del excliente a recuperar: no es un número, es un proceso" },
        { t: "p", x: "Acá el primer paso nunca es el descuento. Antes de ofrecer nada, hay que entender por qué el cliente dejó de comprar (ver 8.3). Recién con ese diagnóstico hecho, la oferta de recuperación tiene dos partes: otorgar el mismo descuento que el cliente tenía al dejar de comprar, y sumarle algún producto de alta rotación con un descuento extra puntual." },
        { t: "callout", kind: "tip", title: "Ante cualquier duda que no esté clara en la Matriz", x: "la respuesta correcta nunca es inventar un número. Alcanza con decir: 'dejame confirmarlo con la empresa y te vuelvo a contactar en el día'. Esto no muestra debilidad: muestra seriedad." },
      ]},
      { id: "4.8", titulo: "Muestras y regalos: dos herramientas, dos criterios", contenido: [
        { t: "p", x: "Egran tiene dos formas de agasajar a un cliente, y confundirlas genera el problema de fondo: si cada visita se convierte en una ocasión de regalo institucional, la vara queda tan alta que sostenerla es imposible." },
        { t: "table", headers: ["", "Muestras de producto", "Regalo institucional"], rows: [
          ["Qué es", "Producto real de Egran (barra, paquete chico, algo nuevo para probar)", "Objeto de marca (agenda, mate, llavero)"],
          ["Objetivo", "Generar experiencia de marca", "Reconocimiento puntual, hacer sentir especial"],
          ["Frecuencia", "Rutina, cualquier visita", "Excepcional, nunca rutina"],
          ["A quién", "Comprador, dueño, secretaria, cualquier persona relevante", "La persona puntual con vínculo a reconocer"],
        ]},
        { t: "label", x: "Momentos que ameritan un regalo institucional" },
        { t: "bullets", items: [
          "Cierre de una temporada donde el cliente aumentó significativamente su volumen de compra.",
          "Cumpleaños del comprador, en cuentas con vínculo ya consolidado.",
          "Un aniversario relevante de la relación comercial (5 o 10 años trabajando juntos).",
          "La recuperación exitosa de un excliente, como gesto de bienvenida.",
        ]},
        { t: "callout", kind: "tip", title: "Por qué funciona (neuroventas): reciprocidad calibrada", x: "un regalo genera una inclinación natural a devolver el gesto, pero solo funciona cuando se percibe como algo especial. Repetido sin criterio, deja de leerse como reconocimiento." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 5
  {
    id: "parte5", numero: 5, titulo: "La reunión: estructura, criterios y diálogos reales",
    secciones: [
      { id: "5.1", titulo: "La apertura", contenido: [
        { t: "p", x: "Los primeros 60 segundos de una reunión pesan más de lo que parece: es el momento en que el cliente decide, casi sin darse cuenta, si va a prestar atención genuina." },
        { t: "p", x: "Romper el hielo puede ser un comentario breve y honesto sobre algo del lugar, o retomar algo que se investigó antes de la reunión." },
        { t: "p", x: "Si se investigó algo antes de la visita, este es el momento de usarlo con naturalidad, como parte genuina de la conversación." },
      ]},
      { id: "5.2", titulo: "La presentación de Egran", contenido: [
        { t: "p", x: "Conviene tener pensado un pitch de dos minutos que cuente quién es Egran, de dónde viene, y por qué eso importa para ese cliente puntual." },
        { t: "p", x: "Qué destacar cambia según el cliente: a un supermercado grande, la capacidad de fabricar marca blanca; a un distribuidor chico, la variedad y el acompañamiento; a un cliente sin gluten, las certificaciones específicas." },
        { t: "p", x: "Se puede hablar de los 80 años sin sonar a museo: en vez de enumerar hechos históricos, conectarlos con el presente." },
        { t: "p", x: "La economía circular se puede explicar simple: en Egran se aprovecha cada materia prima al máximo, minimizando el desperdicio, y eso se traduce en un producto de mejor calidad." },
        { t: "p", x: "En esta parte conviene evitar hablar de precios todavía, y evitar una presentación demasiado larga." },
      ]},
      { id: "5.3", titulo: "La detección de necesidades", contenido: [
        { t: "callout", kind: "tip", title: "La regla más importante de este manual", x: "preguntar antes de proponer, siempre." },
        { t: "p", x: "Hay preguntas que abren la conversación (¿cómo es tu negocio hoy?) y preguntas que la cierran sin querer (¿te interesaría comprar esto?). Las primeras generan información valiosa." },
        { t: "p", x: "Escuchar activamente significa prestar atención a lo que el cliente dice, no pensar mientras tanto en qué se va a responder. En medio de la respuesta puede aparecer una oportunidad que no tiene que ver con lo que se iba a ofrecer originalmente." },
        { t: "p", x: "El silencio es una herramienta, no un vacío incómodo que hay que llenar rápido. Después de una pregunta importante o de plantear un precio, conviene dejar que el silencio haga su trabajo." },
      ]},
      { id: "5.4", titulo: "La propuesta", contenido: [
        { t: "p", x: "La propuesta se arma con lo que el cliente dijo en la reunión, no con un guión fijo que se repite igual para todos." },
        { t: "p", x: "Conviene mostrar beneficios, no solo características. Decir 'certificación FSSC 22000' es una característica; decir 'esto te garantiza ofrecerle a tus clientes la garantía de los controles más exigentes' es un beneficio." },
        { t: "p", x: "Hablar de precio con confianza significa decirlo de forma clara, sin apurarse ni disculparse, seguido del argumento de valor correspondiente." },
      ]},
      { id: "5.5", titulo: "El cierre", contenido: [
        { t: "p", x: "Señales de que un cliente está listo para cerrar: pregunta detalles operativos, o repite en sus propias palabras los beneficios mencionados." },
        { t: "p", x: "Si el cliente pide tiempo para pensarlo, es una respuesta válida. Lo importante es no dejar la conversación abierta sin fecha." },
        { t: "p", x: "Incluso cuando no se cierra la venta, siempre tiene que quedar un próximo paso concreto y con fecha. 'Te llamo la semana que viene' es mucho más débil que 'te llamo el jueves a las diez'." },
      ]},
      { id: "5.6", titulo: "Código de vestimenta y presencia", contenido: [
        { t: "p", x: "La imagen transmite información antes de que se diga una sola palabra. Representar a una marca con casi 90 años implica cuidar la presencia personal como parte del mensaje." },
        { t: "p", x: "Criterio general: vestimenta prolija, cómoda para el trabajo del día, acorde al tipo de cliente que se va a visitar." },
        { t: "p", x: "Evitar siempre: ropa desprolija, desgastada o que transmita apuro y desorden." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 6
  {
    id: "parte6", numero: 6, titulo: "Objeciones: las más comunes y cómo responderlas",
    secciones: [
      { id: "6.1", titulo: "Una objeción no es un no", contenido: [
        { t: "p", x: "Una objeción es, en la mayoría de los casos, una señal de interés disfrazada de resistencia. Un cliente sin ningún interés simplemente no dedica tiempo a objetar: corta la conversación." },
        { t: "callout", kind: "tip", title: "La mentalidad correcta", x: "tomar la objeción como una pregunta implícita, no como un rechazo. 'Es caro' casi siempre significa 'todavía no entiendo por qué vale lo que cuesta'." },
      ]},
      { id: "6.2", titulo: "Las objeciones más frecuentes en Egran", contenido: [
        { t: "objecion", nombre: "Es caro / la competencia me lo da más barato",
          detras: "casi siempre hay una comparación incompleta: el cliente compara el precio, pero no toda la propuesta de valor.",
          responder: "en vez de discutir el precio, preguntar primero con qué lo está comparando, y después explicar con calma qué incluye el precio de Egran que otros no ofrecen.",
          dialogo: "Cliente: \u201CSytari me lo da más barato.\u201D Vendedor: \u201CEntiendo, y tiene sentido que lo compares. Contame, ¿tuviste algún problema de calidad o de entrega con ellos hasta ahora? Porque lo que nosotros garantizamos, además del producto, es que si algo falla, hay 88 años de historia familiar respondiendo por eso.\u201D",
          testimonio: { texto: "Me paré en la góndola en Tucumán, vi que la gente compraba productos caros igual, y usé eso para mostrarle al comprador que su clientela ya estaba dispuesta a pagar por calidad.", autor: "Eduardo Blanco" } },
        { t: "objecion", nombre: "Ya tengo proveedor",
          detras: "el cliente no necesariamente está cerrado a cambiar, simplemente no ve todavía un motivo suficiente.",
          responder: "preguntar cómo le está yendo con ese proveedor actual, en vez de intentar reemplazarlo de entrada.",
          dialogo: "Cliente: \u201CYa tengo quien me provee esto.\u201D Vendedor: \u201C¡Buenísimo que ya tengas resuelto eso! Contame cómo te viene funcionando, así veo si hay algo puntual en lo que Egran te puede sumar, aunque sea a futuro.\u201D" },
        { t: "objecion", nombre: "No tenemos espacio en góndola",
          detras: "puede ser una limitación real, o una forma amable de decir que no ve todavía suficiente valor.",
          responder: "preguntar qué productos rotan menos hoy, para identificar si hay una oportunidad de reemplazo.",
          dialogo: "Vendedor: \u201CEntiendo, el espacio siempre es limitado. ¿Hay algún producto que hoy rote más lento de lo que te gustaría? Ahí podríamos pensar juntos si tiene sentido un reemplazo.\u201D" },
        { t: "objecion", nombre: "Dame tiempo para pensarlo",
          detras: "es una respuesta legítima casi siempre, y conviene tratarla como tal, sin presionar.",
          responder: "respetar el pedido, y proponer una fecha concreta para retomar el contacto.",
          dialogo: "Vendedor: \u201CPor supuesto, tiene sentido pensarlo bien. ¿Te parece si te llamo el jueves a esta hora para ver qué decidiste?\u201D" },
        { t: "objecion", nombre: "No sé si mi jefe va a aprobar esto",
          detras: "el interlocutor puede necesitar herramientas para defender la propuesta frente a otra persona.",
          responder: "ofrecer un resumen simple y concreto que el cliente pueda compartir fácilmente.",
          dialogo: "Vendedor: \u201CTiene sentido. Te dejo un resumen de una página con lo que hablamos, así te resulta más fácil compartirlo con tu jefe.\u201D" },
        { t: "objecion", nombre: "Tuvimos un problema antes con Egran",
          detras: "significa que hay una experiencia negativa concreta que hay que reconocer, no minimizar.",
          responder: "preguntar qué pasó exactamente, reconocerlo con honestidad, y explicar qué cambió desde entonces.",
          dialogo: "Vendedor: \u201CQuiero entender bien qué pasó, porque me importa que no se repita. Contame los detalles.\u201D (Después de escuchar): \u201CTiene sentido que te haya generado esa desconfianza. Esto es lo que cambió desde entonces...\u201D" },
        { t: "objecion", nombre: "No conozco la marca",
          detras: "es una oportunidad, no un obstáculo: el cliente todavía no tiene ninguna idea preconcebida.",
          responder: "contar la historia corta de Egran con entusiasmo genuino, y ofrecer una muestra concreta.",
          dialogo: "Vendedor: \u201CEs una empresa familiar cordobesa con casi 90 años en el rubro. Fabricamos marca propia para las cadenas más grandes del país, así que seguramente ya probaste algo hecho por nosotros sin saberlo.\u201D" },
      ]},
      { id: "6.3", titulo: "Cuándo insistir y cuándo dar espacio", contenido: [
        { t: "p", x: "Perseverar es mantener el contacto de forma respetuosa a lo largo del tiempo, incluso cuando la primera respuesta fue negativa. Presionar es insistir en el momento equivocado." },
        { t: "p", x: "Cuando se nota que un cliente no tiene ningún interés en construir una relación comercial a largo plazo, conviene retirarse con elegancia en vez de forzar la conversación." },
        { t: "p", x: "Retirarse bien significa despedirse con la misma calidez con la que se llegó, dejando en claro que Egran queda disponible." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 7
  {
    id: "parte7", numero: 7, titulo: "El registro: tu herramienta más importante",
    secciones: [
      { id: "7.1", titulo: "Por qué el registro es fundamental", contenido: [
        { t: "p", x: "Un vendedor con buen sistema de registro es mucho más valioso todavía que uno con buena memoria, porque su información no depende de un buen o mal día." },
        { t: "p", x: "Cuando un vendedor cambia de zona o deja la empresa sin haber dejado un buen registro, el cliente se va con esa persona: todo el historial de la relación desaparece para Egran." },
      ]},
      { id: "7.2", titulo: "Qué registrar y cuándo", contenido: [
        { t: "p", x: "Lo ideal es registrar inmediatamente después de cada contacto, no al final del día." },
        { t: "bullets", items: [
          "Los cinco datos mínimos: fecha, quién estuvo presente, qué se habló, qué se prometió, cuál es el próximo paso.",
          "Información relacional: algo personal que el cliente haya mencionado, cambios en su empresa.",
          "Señales de alerta: una queja, mención a la competencia, cambio en el volumen de compra.",
        ]},
      ]},
      { id: "7.3", titulo: "La ficha de cliente como herramienta viva", contenido: [
        { t: "p", x: "Una ficha completa incluye: datos de contacto, historial de compras, próximos pasos acordados, información relacional relevante, y cualquier señal de alerta detectada." },
        { t: "p", x: "La ficha útil se consulta antes de cada visita, no solo se llena después." },
      ]},
      { id: "7.4", titulo: "El próximo paso siempre tiene que ser concreto", contenido: [
        { t: "p", x: "'Vuelvo a llamar' no es un próximo paso, es una intención vaga. 'Te llamo el jueves a las diez para confirmar el pedido' sí es un próximo paso: tiene fecha, hora y objetivo claro." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 8
  {
    id: "parte8", numero: 8, titulo: "Análisis y gestión de la cartera",
    secciones: [
      { id: "8.1", titulo: "Conocer tu cartera como si fuera tu propio negocio", contenido: [
        { t: "p", x: "Conviene pensar la cartera en tres grandes situaciones: clientes nuevos, clientes recurrentes, y exclientes a recuperar." },
        { t: "p", x: "Un cliente recurrente grande necesita atención constante para no perderlo; un excliente a recuperar necesita un acercamiento distinto; un cliente nuevo necesita el cuidado especial de la primera etapa." },
        { t: "p", x: "Vale la pena prestar atención especial al cliente que hoy parece chico en volumen, pero tiene un potencial de crecimiento mucho mayor del que se le está dedicando." },
      ]},
      { id: "8.2", titulo: "Señales de que un cliente está en riesgo", contenido: [
        { t: "p", x: "Señales combinadas que anticipan que un cliente podría estar por irse: compra menos sin explicación clara, tarda más en responder, menciona a la competencia con más frecuencia, o cambia el interlocutor habitual (ver 8.4)." },
        { t: "p", x: "Ante cualquiera de estas señales, conviene actuar pronto: una visita de seguimiento genuina suele traer más información que esperar a ver qué pasa." },
      ]},
      { id: "8.3", titulo: "Recuperar un cliente perdido", contenido: [
        { t: "p", x: "Siempre hay una razón detrás de un cliente que se fue, y encontrarla es el primer paso para poder recuperarlo. A veces es el precio, pero muchas otras veces es un problema de entrega, de comunicación, o que dejó de sentir que la relación era prioritaria." },
        { t: "p", x: "Volver a contactar a un excliente no tiene que sentirse incómodo. Alcanza con un acercamiento honesto, mostrando interés genuino." },
        { t: "p", x: "Al intentar recuperar una cuenta, conviene evitar cualquier comentario que suene a reproche o urgencia por vender." },
      ]},
      { id: "8.4", titulo: "El cambio de interlocutor: la cuenta sigue, la persona no", contenido: [
        { t: "p", x: "Un vendedor construye durante años una relación excelente con un comprador, y cuando esa persona asciende, cambia de área o se va, el vendedor sigue tratando la cuenta con la misma confianza acumulada, como si el vínculo se hubiera transferido solo. No se transfiere solo." },
        { t: "p", x: "El nuevo interlocutor, aunque herede la misma cuenta, es en términos de vínculo un cliente nuevo. Tratarlo como si ya tuviera esa confianza genera justamente lo contrario: distancia." },
        { t: "table", headers: ["Se hereda (de la cuenta)", "No se hereda (de la persona)"], rows: [
          ["Historial de compras y volumen", "La confianza personal construida"],
          ["Condiciones comerciales acordadas", "Los acuerdos informales o \u201Cde palabra\u201D"],
          ["Certificaciones y valor ya validado por la empresa", "El tono de trato que le gustaba a esa persona"],
        ]},
        { t: "label", x: "Señales de que un cambio puede estar por venir" },
        { t: "bullets", items: [
          "El comprador menciona una reestructuración interna o un ascenso.",
          "Empiezan a aparecer nuevas personas copiadas en mails o en reuniones.",
          "El comprador habitual se muestra distinto: menos disponible, hablando de \u201Cuna nueva etapa\u201D.",
        ]},
        { t: "label", x: "El protocolo cuando el cambio ya ocurrió" },
        { t: "bullets", items: [
          "No asumir continuidad: tratar el primer contacto como una versión de la primera visita (4.1).",
          "Agendar una reunión de presentación formal cuanto antes.",
          "Reportarlo (9.1, dentro de \u201Cnovedades del cliente\u201D).",
        ]},
        { t: "callout", kind: "tip", title: "Por qué funciona (neuroventas): sesgo de familiaridad", x: "la confianza que sentía el vendedor con el comprador anterior no existe todavía en la cabeza del nuevo interlocutor. El vínculo arranca en cero, aunque la cuenta tenga años de historia." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 9
  {
    id: "parte9", numero: 9, titulo: "Reportabilidad y comunicación interna",
    secciones: [
      { id: "9.1", titulo: "Qué reportamos, cuándo y por qué canal", contenido: [
        { t: "p", x: "Un vendedor, además de generar ventas, genera información valiosa que el resto de la empresa no tiene manera de conseguir por otro lado. Reportarla es parte real del trabajo comercial." },
        { t: "table", headers: ["Qué reportamos", "Cuándo", "Canal"], rows: [
          ["Movimientos de competencia", "Apenas se detecta", "WhatsApp al grupo comercial"],
          ["Objeciones nuevas o que se repiten mucho", "Mensual (salvo urgencia)", "Mail o reunión de equipo"],
          ["Cuenta en riesgo real", "Inmediato", "Llamado o WhatsApp directo"],
          ["Oportunidad grande detectada", "Inmediato", "Llamado"],
          ["Novedades del cliente o del mercado", "Cuando aparece", "Mail"],
        ]},
        { t: "callout", kind: "tip", title: "La regla simple para decidir la urgencia", x: "si la información puede cambiar una decisión de la empresa esta semana, se reporta ya. Si es contexto que no cambia nada hoy, entra en el resumen semanal o mensual." },
      ]},
      { id: "9.2", titulo: "Los canales: cuándo usar cada uno", contenido: [
        { t: "table", headers: ["Canal", "Cuándo usarlo", "Criterio de formalidad"], rows: [
          ["Llamada", "Urgente, decisión rápida, tema sensible", "El más directo"],
          ["WhatsApp", "Ágil, avisos cortos, coordinación diaria", "Informal en el tono, nunca en el contenido"],
          ["Mail", "Todo lo que necesita quedar registrado por escrito", "El canal formal por defecto"],
        ]},
        { t: "callout", kind: "tip", title: "La pregunta que ordena todo", x: "¿esto necesita una respuesta ya, o necesita quedar guardado? Lo primero es llamada o WhatsApp. Lo segundo es mail." },
      ]},
    ],
  },

  // ------------------------------------------------------------------ PARTE 10
  {
    id: "parte10", numero: 10, titulo: "La voz de los vendedores de Egran",
    secciones: [
      { id: "10.1", titulo: "Cómo presentan la empresa los que más venden", contenido: [
        { t: "quote", x: "Contar la historia y la trayectoria, y después la insistencia y la perseverancia con el cliente, para que se anime a crecer con la marca.", by: "Diego G. Sosa" },
        { t: "quote", x: "La presento como una empresa cordobesa con más de 85 años, en constante crecimiento a nivel nacional, que apunta a un segmento que busca comer sano y rico.", by: "Manuel Yáñez" },
      ]},
      { id: "10.2", titulo: "La mejor venta: qué hicieron antes, durante y después", contenido: [
        { t: "quote", x: "La primera venta a Usina 360 fue un cliente trabajado desde cero, con mucha comunicación de las dos partes desde el primer contacto hasta la apertura de la cuenta corriente.", by: "Gino Larrovere" },
        { t: "quote", x: "Me paré en la góndola en Tucumán, vi que la gente compraba productos caros igual, y usé eso para mostrarle al comprador que su clientela ya estaba dispuesta a pagar por calidad.", by: "Eduardo Blanco" },
      ]},
      { id: "10.3", titulo: "Los errores que todos cometimos, y de los que todos aprendemos", contenido: [
        { t: "quote", x: "Le di un número de descuento sin estar seguro, y después no supe cómo sostenerlo frente al cliente. Me gustaría tener límites claros de negociación.", by: "Gino Larrovere" },
        { t: "quote", x: "No rompí el hielo antes de empezar a presentar los productos. Ahora trato de manejar la conversación y dejar que el cliente se vaya soltando primero.", by: "Martín Velázquez" },
      ]},
    ],
  },
];

// Índice rápido por id de sección, usado por Modo Campo y el buscador
const SECCIONES_POR_ID = {};
PARTES.forEach(parte => {
  parte.secciones.forEach(sec => {
    SECCIONES_POR_ID[sec.id] = { ...sec, parteId: parte.id, parteNumero: parte.numero, parteTitulo: parte.titulo };
  });
});

if (typeof module !== "undefined") module.exports = { PARTES, SECCIONES_POR_ID };
