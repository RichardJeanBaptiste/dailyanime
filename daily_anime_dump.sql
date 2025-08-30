--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admins; Type: TABLE; Schema: public; Owner: rich
--

CREATE TABLE public.admins (
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.admins OWNER TO rich;

--
-- Name: admins_id_seq; Type: SEQUENCE; Schema: public; Owner: rich
--

CREATE SEQUENCE public.admins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admins_id_seq OWNER TO rich;

--
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rich
--

ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: rich
--

CREATE TABLE public.games (
    anime character varying(255),
    game character varying(255),
    platforms text[],
    links text[],
    id integer NOT NULL
);


ALTER TABLE public.games OWNER TO rich;

--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: rich
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_id_seq OWNER TO rich;

--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rich
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: news; Type: TABLE; Schema: public; Owner: rich
--

CREATE TABLE public.news (
    article character varying(255),
    link character varying(255),
    anime character varying(255),
    id integer NOT NULL
);


ALTER TABLE public.news OWNER TO rich;

--
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: rich
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_id_seq OWNER TO rich;

--
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rich
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- Name: quotes; Type: TABLE; Schema: public; Owner: rich
--

CREATE TABLE public.quotes (
    "character" character varying(255),
    anime character varying(255),
    id integer NOT NULL,
    img_links text[],
    quote character varying(255) NOT NULL
);


ALTER TABLE public.quotes OWNER TO rich;

--
-- Name: quotes_id_seq; Type: SEQUENCE; Schema: public; Owner: rich
--

CREATE SEQUENCE public.quotes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.quotes_id_seq OWNER TO rich;

--
-- Name: quotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rich
--

ALTER SEQUENCE public.quotes_id_seq OWNED BY public.quotes.id;


--
-- Name: test; Type: TABLE; Schema: public; Owner: rich
--

CREATE TABLE public.test (
    color character varying(255)
);


ALTER TABLE public.test OWNER TO rich;

--
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: news id; Type: DEFAULT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- Name: quotes id; Type: DEFAULT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.quotes ALTER COLUMN id SET DEFAULT nextval('public.quotes_id_seq'::regclass);


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: rich
--

COPY public.admins (username, password, id) FROM stdin;
\.


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: rich
--

COPY public.games (anime, game, platforms, links, id) FROM stdin;
\.


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: rich
--

COPY public.news (article, link, anime, id) FROM stdin;
\.


--
-- Data for Name: quotes; Type: TABLE DATA; Schema: public; Owner: rich
--

COPY public.quotes ("character", anime, id, img_links, quote) FROM stdin;
itachi	naruto	6	{https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg,https://static.wikia.nocookie.net/fourworldseries/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20170606095251,https://static.wikia.nocookie.net/inconsistently-heinous/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20221021154521}	People live inside their own truths, their own illusions. What they call reality may just be another layer of deception.
itachi	naruto	7	{https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg,https://static.wikia.nocookie.net/fourworldseries/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20170606095251,https://static.wikia.nocookie.net/inconsistently-heinous/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20221021154521}	Hatred breeds more hatred. The chain of revenge never ends.
itachi	naruto	8	{https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg,https://static.wikia.nocookie.net/fourworldseries/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20170606095251,https://static.wikia.nocookie.net/inconsistently-heinous/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20221021154521}	Those who forgive and accept pain grow stronger than those who cling to anger.
itachi	naruto	9	{https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg,https://static.wikia.nocookie.net/fourworldseries/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20170606095251,https://static.wikia.nocookie.net/inconsistently-heinous/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20221021154521}	No matter what happens, you will always be my little brother. That will never change.
itachi	naruto	10	{https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg,https://static.wikia.nocookie.net/fourworldseries/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20170606095251,https://static.wikia.nocookie.net/inconsistently-heinous/images/a/a1/Itachi_Uchiha.png/revision/latest?cb=20221021154521}	Sometimes, to protect what you love, you must become a villain in others' eyes.
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: rich
--

COPY public.test (color) FROM stdin;
Red
Blue
Green
Yellow
\.


--
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rich
--

SELECT pg_catalog.setval('public.admins_id_seq', 1, false);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rich
--

SELECT pg_catalog.setval('public.games_id_seq', 1, false);


--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rich
--

SELECT pg_catalog.setval('public.news_id_seq', 1, false);


--
-- Name: quotes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rich
--

SELECT pg_catalog.setval('public.quotes_id_seq', 10, true);


--
-- Name: admins admins_username_key; Type: CONSTRAINT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_username_key UNIQUE (username);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- Name: quotes quotes_pkey; Type: CONSTRAINT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.quotes
    ADD CONSTRAINT quotes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

