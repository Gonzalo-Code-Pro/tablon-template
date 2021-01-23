-- SQLINES DEMO *** le SQL Developer Data Modeler 20.3.0.283.0710
-- SQLINES DEMO *** -01-13 13:37:02 PET
-- SQLINES DEMO *** cle Database 11g
-- SQLINES DEMO *** le Database 11g



-- SQLINES DEMO *** no DDL - MDSYS.SDO_GEOMETRY

-- SQLINES DEMO *** no DDL - XMLTYPE

CREATE TABLE categoria (
    id                     VARCHAR(100) NOT NULL,
    nombrecompleto         VARCHAR(25),
    descripccioncategoria  VARCHAR(100),
    tipodecategoria        VARCHAR(50)
);

ALTER TABLE categoria ADD CONSTRAINT categoria_pk PRIMARY KEY ( id );

CREATE TABLE empleado (
    id                VARCHAR(100) NOT NULL,
    nombre            VARCHAR(50),
    apellido          VARCHAR(50),
    perfil            VARCHAR(50),
    direccion         VARCHAR(100),
    celular           VARCHAR(15),
    puesto            VARCHAR(20),
    numasignacion     DECIMAL(5, 5),
    fechacontrato     TIMESTAMP WITH TIME ZONE,
    codigodecargo     DECIMAL(5, 5),
    horasdisponibles  DECIMAL(5, 5)
);

ALTER TABLE empleado ADD CONSTRAINT empleado_pk PRIMARY KEY ( id );

CREATE TABLE entregapedido (
    id2                VARCHAR(100) NOT NULL,
    fechaentrega       TIMESTAMP WITH TIME ZONE,
    direccionentrega   VARCHAR(50),
    direccionentrega2  VARCHAR(100),
    telefonocontacto   VARCHAR(15),
    tipodeentrega      VARCHAR(100),
    costocobro         DECIMAL(10, 10),
    tipomovilidad      VARCHAR(100),
    pedidos_id         VARCHAR(100) NOT NULL,
    empleado_id        VARCHAR(100) NOT NULL
);

ALTER TABLE entregapedido ADD CONSTRAINT entregapedido_pk PRIMARY KEY ( id2 );

CREATE TABLE pedidos (
    id                   VARCHAR(100) NOT NULL,
    estado               VARCHAR(50),
    tipodepago           VARCHAR(20),
    telefono             VARCHAR(10),
    fechacreado          TIMESTAMP WITH TIME ZONE,
    fechactualizacion    TIMESTAMP WITH TIME ZONE,
    fechavencimiento     TIMESTAMP WITH TIME ZONE,
    numcupon             DECIMAL(5, 5),
    descuentounitario    DECIMAL(10, 10),
    descuentototal       DECIMAL(10, 10),
    preciototal          DECIMAL(10, 10),
    codpostal            DECIMAL(5, 5),
    subpreciototal       DECIMAL(10, 10),
    catidadunitaria      DECIMAL(10, 10),
    provinciaentrega     VARCHAR(50),
    ciudadentrega        VARCHAR(50) NOT NULL,
    direcciondefinitiva  VARCHAR(50),
    comentarios          TEXT,
    costoenvio           DECIMAL(10, 10),
    tipoenvio            VARCHAR(20),
    prioridad            VARCHAR(20),
    tipodepedido         VARCHAR(50),
    users_id             VARCHAR(100) NOT NULL,
    producto_id1         VARCHAR(100) NOT NULL
);

ALTER TABLE pedidos ADD CONSTRAINT pedidos_pk PRIMARY KEY ( id );

CREATE TABLE producto (
    id1                 VARCHAR(100) NOT NULL,
    nombreoficial       VARCHAR(25),
    nombrecomercial     VARCHAR(25),
    preciounitario      DECIMAL(10, 10),
    preciodocena        DECIMAL(10, 10),
    tamaño              VARCHAR(10),
    tipoproducto        VARCHAR(25),
    categoria           VARCHAR(25),
    review              TEXT,
    cantidadlikes       DECIMAL(10, 10),
    numeropedidos       DECIMAL(10, 10),
    fechaestreno        TIMESTAMP WITH TIME ZONE,
    cantidaddisponible  DECIMAL(10, 10),
    estado              VARCHAR(50),
    img                 TEXT,
    portadaimg          TEXT,
    numcalificacion     DECIMAL(10, 10),
    categoria_id        VARCHAR(100) NOT NULL
);

ALTER TABLE producto ADD CONSTRAINT producto_pk PRIMARY KEY ( id1 );

CREATE TABLE users (
    nombre             VARCHAR(50),
    apellido           VARCHAR(50),
    direccion1         VARCHAR(50),
    direccion2         VARCHAR(50),
    telefono           VARCHAR(15),
    email              VARCHAR(50),
    celular            VARCHAR(15),
    estado             VARCHAR(15),
    perfil             VARCHAR(15),
    password           TEXT,
    id                 VARCHAR(100) NOT NULL,
    compañia           VARCHAR(15),
    codigopostal       DECIMAL(5, 5),
    fax                VARCHAR(20),
    provincia          VARCHAR(50),
    fechainscripccion  TIMESTAMP WITH TIME ZONE,
    ciudad             VARCHAR(20)
);

ALTER TABLE users ADD CONSTRAINT users_pk PRIMARY KEY ( id );

CREATE TABLE ventas (
    id1               VARCHAR(100) NOT NULL,
    ventastotales     DECIMAL(10, 10),
    preciototal       DECIMAL(10, 10),
    descuentototal    DECIMAL(10, 10),
    numfactura        VARCHAR(100),
    fechapagoventa    TIMESTAMP WITH TIME ZONE,
    fechaentrega      TIMESTAMP WITH TIME ZONE,
    direccionentrega  VARCHAR(100),
    pedidos_id        VARCHAR(100) NOT NULL
);

COMMENT ON COLUMN ventas.ventastotales IS
    'a';

ALTER TABLE ventas ADD CONSTRAINT ventas_pk PRIMARY KEY ( id1 );

ALTER TABLE entregapedido
    ADD CONSTRAINT entregapedido_empleado_fk FOREIGN KEY ( empleado_id )
        REFERENCES empleado ( id );

ALTER TABLE entregapedido
    ADD CONSTRAINT entregapedido_pedidos_fk FOREIGN KEY ( pedidos_id )
        REFERENCES pedidos ( id );

ALTER TABLE pedidos
    ADD CONSTRAINT pedidos_producto_fk FOREIGN KEY ( producto_id1 )
        REFERENCES producto ( id1 );

ALTER TABLE pedidos
    ADD CONSTRAINT pedidos_users_fk FOREIGN KEY ( users_id )
        REFERENCES users ( id );

ALTER TABLE producto
    ADD CONSTRAINT producto_categoria_fk FOREIGN KEY ( categoria_id )
        REFERENCES categoria ( id );

ALTER TABLE ventas
    ADD CONSTRAINT ventas_pedidos_fk FOREIGN KEY ( pedidos_id )
        REFERENCES pedidos ( id );



-- SQLINES DEMO *** n de Oracle SQL Developer Data Modeler: 
-- 
-- SQLINES DEMO ***                         7
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                        13
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO *** DY                      0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***  TYPE                   0
-- SQLINES DEMO ***  TYPE                   0
-- SQLINES DEMO ***  TYPE BODY              0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO *** EGMENT                  0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO *** ED VIEW                 0
-- SQLINES DEMO *** ED VIEW LOG             0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- 
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0
-- 
-- SQLINES DEMO ***                         0
-- 
-- SQLINES DEMO ***                         0
-- SQLINES DEMO *** A                       0
-- SQLINES DEMO *** T                       0
-- 
-- SQLINES DEMO ***                         0
-- SQLINES DEMO ***                         0

