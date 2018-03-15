--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Donors; Type: TABLE; Schema: public; Owner: nycda
--

CREATE TABLE "Donors" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    age character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    zip text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    blood_group text DEFAULT ''::text NOT NULL
);


ALTER TABLE "Donors" OWNER TO nycda;

--
-- Name: Donors_id_seq; Type: SEQUENCE; Schema: public; Owner: nycda
--

CREATE SEQUENCE "Donors_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Donors_id_seq" OWNER TO nycda;

--
-- Name: Donors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nycda
--

ALTER SEQUENCE "Donors_id_seq" OWNED BY "Donors".id;


--
-- Name: Sessions; Type: TABLE; Schema: public; Owner: nycda
--

CREATE TABLE "Sessions" (
    sid character varying(32) NOT NULL,
    expires timestamp with time zone,
    data text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Sessions" OWNER TO nycda;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: nycda
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(255),
    salt character varying(255),
    password_hash character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Users" OWNER TO nycda;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: nycda
--

CREATE SEQUENCE "Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Users_id_seq" OWNER TO nycda;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nycda
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- Name: Donors id; Type: DEFAULT; Schema: public; Owner: nycda
--

ALTER TABLE ONLY "Donors" ALTER COLUMN id SET DEFAULT nextval('"Donors_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: nycda
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- Data for Name: Donors; Type: TABLE DATA; Schema: public; Owner: nycda
--

COPY "Donors" (id, name, email, age, phone, zip, "createdAt", "updatedAt", blood_group) FROM stdin;
96	SARA	sara@yahoo.com	63	2123456789	12345	2018-03-14 15:37:46.896-04	2018-03-14 15:37:46.896-04	B+
98	randa	randaazizi@gmail.com	27	9293287713	11214	2018-03-15 15:23:06.928-04	2018-03-15 15:23:06.928-04	A-
\.


--
-- Name: Donors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nycda
--

SELECT pg_catalog.setval('"Donors_id_seq"', 98, true);


--
-- Data for Name: Sessions; Type: TABLE DATA; Schema: public; Owner: nycda
--

COPY "Sessions" (sid, expires, data, "createdAt", "updatedAt") FROM stdin;
A-Xs-mk1yrCQk-F2ntaq9bQ1tHRsn6ZU	2018-03-16 16:27:34.072-04	{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"passport":{"user":{"id":4,"name":"randa","username":"marzak","salt":"$2a$10$Olc8D60MsE.Zo9YRtTEtN.","password_hash":"$2a$10$Olc8D60MsE.Zo9YRtTEtN.LtyTwni/6Lva0ZbWihiFzWuJvHm7JdK","createdAt":"2018-03-11T04:40:56.547Z","updatedAt":"2018-03-11T04:40:56.547Z"}}}	2018-03-15 16:24:17.625-04	2018-03-15 16:27:34.077-04
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: nycda
--

COPY "Users" (id, name, username, salt, password_hash, "createdAt", "updatedAt") FROM stdin;
1	k	j	$2a$10$n4S3VGDoyQL7rjrZlfDMzO	$2a$10$n4S3VGDoyQL7rjrZlfDMzOX4VU2vknvm6q.ByXZ0uLQZbInjUx3mC	2018-03-06 19:38:34.753-05	2018-03-06 19:38:34.753-05
2	k	k	$2a$10$6NAW1YHXBFOSLhI7zAkcVe	$2a$10$6NAW1YHXBFOSLhI7zAkcVeaULwkEkmv6ia460mqkzPq1P75qQ3uhS	2018-03-06 19:54:07.871-05	2018-03-06 19:54:07.871-05
3	h	h	$2a$10$.bN3REw1ZuaVnj.s9UD3eO	$2a$10$.bN3REw1ZuaVnj.s9UD3eOCLh71ileVWz7f0eq3t4tQ7YtXXvTyQO	2018-03-06 20:19:53.063-05	2018-03-06 20:19:53.063-05
4	randa	marzak	$2a$10$Olc8D60MsE.Zo9YRtTEtN.	$2a$10$Olc8D60MsE.Zo9YRtTEtN.LtyTwni/6Lva0ZbWihiFzWuJvHm7JdK	2018-03-10 23:40:56.547-05	2018-03-10 23:40:56.547-05
5	kamal	azizi	$2a$10$uA74fM2lmlhud6D7PtB84u	$2a$10$uA74fM2lmlhud6D7PtB84uylGuZeZtBxhX621mcCogQetr2ioIYqS	2018-03-13 20:22:58.055-04	2018-03-13 20:22:58.055-04
6	kaml	hindi	$2a$10$WhxRJol7AK5GF7ci56xmPO	$2a$10$WhxRJol7AK5GF7ci56xmPOK/oSNhzrOA/FtJzBxh.cdib6Ut7S8Hy	2018-03-13 21:16:21.04-04	2018-03-13 21:16:21.04-04
7	KAMAL	KIMO	$2a$10$nRKJ8b9AUhtLvp3IS.M9q.	$2a$10$nRKJ8b9AUhtLvp3IS.M9q.gP1LQ2d/bSUS5IOOUx8GZJ85nDq7hYO	2018-03-14 19:33:46.956-04	2018-03-14 19:33:46.956-04
\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nycda
--

SELECT pg_catalog.setval('"Users_id_seq"', 7, true);


--
-- Name: Donors Donors_pkey; Type: CONSTRAINT; Schema: public; Owner: nycda
--

ALTER TABLE ONLY "Donors"
    ADD CONSTRAINT "Donors_pkey" PRIMARY KEY (id);


--
-- Name: Sessions Sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: nycda
--

ALTER TABLE ONLY "Sessions"
    ADD CONSTRAINT "Sessions_pkey" PRIMARY KEY (sid);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: nycda
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_username_key; Type: CONSTRAINT; Schema: public; Owner: nycda
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


--
-- PostgreSQL database dump complete
--

