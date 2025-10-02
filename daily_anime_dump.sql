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
-- Name: characters; Type: TABLE; Schema: public; Owner: rich
--

CREATE TABLE public.characters (
    name character varying(255) NOT NULL,
    img_links text[],
    anime character varying(255),
    info text[],
    id integer NOT NULL
);


ALTER TABLE public.characters OWNER TO rich;

--
-- Name: characters_id_seq; Type: SEQUENCE; Schema: public; Owner: rich
--

CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.characters_id_seq OWNER TO rich;

--
-- Name: characters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rich
--

ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;


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
    id integer NOT NULL,
    quote character varying(255) NOT NULL,
    charid integer
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
-- Name: characters id; Type: DEFAULT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);


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
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: rich
--

COPY public.characters (name, img_links, anime, info, id) FROM stdin;
Itachi	{https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg,https://static.wikia.nocookie.net/naruto/images/5/53/Itachi_Using_Genjutsu.png/revision/latest/scale-to-width-down/985?cb=20150917075124,"https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/64202805dcfea1001d0b7a1a.jpg"}	Naruto	\N	1
Pain	\N	Naruto	\N	2
Ichigo	\N	Bleach	\N	3
Jiraiya	\N	\N	\N	11
Naruto	\N	\N	\N	12
Urahara	\N	\N	\N	13
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

COPY public.quotes ("character", id, quote, charid) FROM stdin;
Itachi	6	People live inside their own truths, their own illusions. What they call reality may just be another layer of deception.	1
Itachi	7	Hatred breeds more hatred. The chain of revenge never ends.	1
Itachi	8	Those who forgive and accept pain grow stronger than those who cling to anger.	1
Itachi	9	No matter what happens, you will always be my little brother. That will never change.	1
Itachi	10	Sometimes, to protect what you love, you must become a villain in others' eyes.	1
Itachi	18	We are humans, not fish. We don’t know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are. That’s what death is, don’t you think?	1
Itachi	19	People live their lives bound by what they accept as correct and true... Their 'reality' may all be a mirage.	1
Itachi	20	Knowledge and awareness are vague, and perhaps better called illusions.	1
Itachi	21	Even the strongest of opponents always has a weakness.	1
Itachi	22	It is not wise to judge others based on your own preconceptions and by their appearances.	1
Itachi	23	So tell me where should I go: to the left where nothing is right, or to the right where nothing is left?	1
Itachi	24	No matter how powerful you become, do not try to shoulder everything alone.	1
Itachi	25	You are weak because you don’t have enough hatred.	1
Naruto	72	I’ll never forget the people who were important to me. And I’ll never forget the pain of losing them.	12
Naruto	73	You’re my friend… and I’ll never let my friend be in pain.	12
Naruto	74	The moment you give up, you’ve already lost.	12
Naruto	75	It’s not the face that makes someone a monster; it’s the choices they make with their life	12
Naruto	76	I may be an idiot, but I’m not a coward!	12
Naruto	77	You think you’re the only one who knows pain? You think you’re the only one who suffered? If you take revenge, it’ll only breed more hatred.	12
Naruto	78	The pain of being alone… is nothing compared to the pain of losing someone you love	12
Naruto	79	A hero is not one who never falls, but one who always gets back up.	12
Pain	80	We are just ordinary people driven to revenge in the name of justice. But if revenge is called justice, then that justice only breeds more revenge and becomes a chain of hatred	2
Pain	81	Justice comes from vengeance, but justice only breeds more vengeance.	2
Pain	82	Love breeds sacrifice, which in turn breeds hatred. Then you can know pain	2
Pain	83	Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain.	2
Pain	84	How can you say that you’ll never change? That’s only arrogance. Humans are not meant to remain stagnant	2
Pain	85	Those who do not understand true pain can never understand true peace.	2
Pain	86	Justice is only found in pain. Pain is the truest form of equality	2
Pain	87	Feel pain. Think about pain. Accept pain. Those who do not understand pain can never know peace	2
Pain	88	Wars are never stopped. They only take pauses	2
Pain	89	Peace is nonexistent in this cursed world. Peace is only a fleeting illusion	2
Pain	90	So long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love	2
Pain	91	The world will never stop fighting. That is why I will force it into peace through pain.	2
Pain	92	I wanted to bring peace to the world, but I only brought more pain.	2
Urahara	114	Never underestimate an enemy. Overestimating them can also kill you, but underestimating them will kill you faster.	13
Urahara	115	Sometimes, the right choices feel like mistakes at the time. But they shape who we become.	13
Urahara	116	Power without control will destroy you. Power with control will destroy your enemies.	13
Urahara	117	It is not whether you can or cannot. The issue is whether you will or will not.	13
Urahara	118	Some things can’t be fixed by regret. You can only move forward with them.	13
Urahara	119	We’re all pawns in someone else’s game, until we learn how to play the board ourselves.	13
Urahara	120	When you’re backed into a corner, that’s when you show your true strength.	13
Urahara	121	There is no shame in falling down. The shame is in refusing to get back up.	13
Urahara	122	The world isn’t kind. That’s why I chose to smile anyway	13
Ichigo	93	If you give me wings, I’ll soar for you. If you give me a sword, I’ll fight for you. If you give me a shield, I’ll protect you. But if you take away my friends, you’ll see what I truly am.	3
Ichigo	94	If I don’t wield the sword, I can’t protect you. But if I keep wielding the sword, I can’t embrace you.	3
Ichigo	95	If fate is a millstone, then we are the grist. There is nothing we can do. So I’ll fight fate.	3
Ichigo	96	I don’t care if it’s called destiny. I’ll fight it. That’s my way of life.	3
Itachi	26	I always lied to you...no matter what you decide to do from here on out, you never have to forgive me – I will always love you.	1
Itachi	27	Forgive me, Sasuke. I hope you can live your life in peace, away from the curse of the Uchiha.	1
Itachi	28	The ones who forgive themselves, and are able to accept their true nature… They are the strong ones.	1
Itachi	29	In life, there is no such thing as a perfect choice. You can only choose the path that seems right to you.	1
Pain	30	I want to help create peace, and bring about justice.	2
Jiraiya	40	A place where someone still thinks of you is a place you can call home.	11
Jiraiya	41	Knowing what it feels to be in pain, is exactly why we try to be kind to others.	11
Jiraiya	42	When people get hurt, they learn to hate. When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind.	11
Jiraiya	43	Failing doesn’t give you a reason to give up, as long as you believe.”	11
Jiraiya	44	A teacher has to be strong because they have to protect their students.	11
Jiraiya	45	The true measure of a shinobi is not how he lives, but how he dies.	11
Jiraiya	46	When you feel pain, you learn to hate. But if you can bear that pain and continue on, you will find that there is a bright future ahead.	11
Jiraiya	47	I believe that the day will come when people can truly understand each other.	11
Jiraiya	48	Rejection is a part of any man’s life. If you can’t accept and move past rejection, you’re not a real man.	11
Jiraiya	49	If you want to be strong, stop caring about what others think of you.	11
Jiraiya	50	The most important thing for a shinobi is the guts to never give up.	11
Jiraiya	51	You’re still just a brat… but one day, you’ll be a splendid shinobi.	11
Jiraiya	52	The true measure of a shinobi is not how he lives, but how he dies.	11
Jiraiya	53	A person becomes strong when they have someone they want to protect	11
Jiraiya	54	Power comes in response to a need, not a desire. You have to create that need.	11
Jiraiya	55	You can’t defeat me with words alone. Show me the strength of your convictions through action	11
Jiraiya	56	Someday, you’ll have your own student who will inherit your will.	11
Jiraiya	57	Life is not about living forever, it’s about creating something that will.	11
Jiraiya	58	I believe that the day will come when people can truly understand each other.	11
Jiraiya	59	Sometimes the mistakes of youth can be the most fun memories later.	11
Jiraiya	60	Even after I’m gone, I’ll continue to watch over you.”	11
Jiraiya	61	It’s up to the next generation to accomplish what we couldn’t.	11
Jiraiya	62	Rejection, failure, even death… they are all part of being human.	11
Jiraiya	63	The true lesson of a shinobi is to endure — to endure and protect those who cannot protect themselves.	11
Jiraiya	64	I couldn’t bring myself to confess my feelings for you… but I suppose that is part of being Jiraiya the Gallant. My failures make the man.	11
Naruto	65	I’m not gonna run away, I never go back on my word! That’s my nindō: my ninja way!	12
Naruto	66	When you give up, your dreams and everything else, they’re gone	12
Naruto	67	If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be!	12
Naruto	68	I’m not a failure. I’m not useless anymore.	12
Naruto	69	If you don’t like the hand you’re dealt with, fight for a new one.	12
Naruto	70	I understand now. Even if I try to erase the mistakes of the past, they’re still part of who I am today.	12
Naruto	71	Because they saved me from myself, they accepted me for who I am. That’s why they’re my friends.	12
Ichigo	97	I’m not fighting because I want to win. I’m fighting because I have to protect everyone	3
Ichigo	98	I’m not good at following orders, especially from people I don’t respect.	3
Ichigo	99	The only thing I’m afraid of is failing to protect the people I care about	3
Ichigo	100	Your arrogance blinds you. Power without purpose is meaningless.	3
Ichigo	101	Even if it costs me my life, I’ll stop you here!	3
Ichigo	102	The only one who gets to decide my fate… is me!	3
Ichigo	103	I fight because I must. Not for revenge, not for glory… but because I can’t stand by and do nothing.	3
Urahara	104	There is no such thing as a perfect human. The true essence of a human is to continue to struggle and to fight against their limits.	13
Urahara	105	Prepare yourself for anything. That’s the only way to stay alive in this world.	13
Urahara	106	Fear is necessary for evolution. The fear that you might not win, the fear that you might die, the fear that you might lose your friends… that fear will push you to become stronger.	13
Urahara	107	There is no such thing as luck. It is merely the hand you play in the face of impossible odds.	13
Urahara	108	If you only choose the path you know, you’ll never grow. True progress comes from stepping into the unknown	13
Urahara	109	The right way is not always the easy way. That’s why so many people stray	13
Urahara	110	Battle is not about brute strength. It’s about strategy, timing, and keeping your opponent guessing.	13
Urahara	111	If you let your guard down because your opponent is weak, you might not live to see your mistake	13
Urahara	112	There’s no need for overconfidence. Even the smallest rock can shatter the strongest glass	13
Urahara	113	The one who can think two steps ahead wins. That’s the essence of combat	13
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
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rich
--

SELECT pg_catalog.setval('public.characters_id_seq', 13, true);


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

SELECT pg_catalog.setval('public.quotes_id_seq', 122, true);


--
-- Name: admins admins_username_key; Type: CONSTRAINT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_username_key UNIQUE (username);


--
-- Name: characters characters_name_key; Type: CONSTRAINT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_name_key UNIQUE (name);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: rich
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


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

