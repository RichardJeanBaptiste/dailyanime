--
-- PostgreSQL database dump
--

\restrict I38QUjX9S8yoWCVBbiyBVwk8jIZitn8hFEoLuZEOnF1lVeHNnk4QOAyydDhaeFN

-- Dumped from database version 18.0
-- Dumped by pg_dump version 18.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: rich
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO rich;

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


ALTER SEQUENCE public.admins_id_seq OWNER TO rich;

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
    id integer NOT NULL,
    biography text
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


ALTER SEQUENCE public.characters_id_seq OWNER TO rich;

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


ALTER SEQUENCE public.games_id_seq OWNER TO rich;

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


ALTER SEQUENCE public.news_id_seq OWNER TO rich;

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


ALTER SEQUENCE public.quotes_id_seq OWNER TO rich;

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
Richinbk	$2b$10$btSlmMfVAQ42gLYojWEBQOEl2mGDamSM8bjjWe0JPeM5dlSxFwln6	1
\.


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: rich
--

COPY public.characters (name, img_links, anime, info, id, biography) FROM stdin;
Ichigo	\N	Bleach	\N	3	\N
Jiraiya	\N	\N	\N	11	\N
Naruto	\N	\N	\N	12	\N
Urahara	\N	\N	\N	13	\N
Nagato	{https://upload.wikimedia.org/wikipedia/en/a/a0/NagatoNaruto.png,https://cdn.shopify.com/s/files/1/0785/4004/6646/files/fa9918db3acac38b8c751e3851a7cb9a_480x480.jpg?v=1727098560,https://upload.wikimedia.org/wikipedia/en/f/f5/SixPathsofPain.png}	Naruto	{}	2	\N
Itachi Uchiha	{https://upload.wikimedia.org/wikipedia/en/e/e5/Itachi_Uchiha.jpg,https://static.wikia.nocookie.net/naruto/images/5/53/Itachi_Using_Genjutsu.png/revision/latest/scale-to-width-down/985?cb=20150917075124,"https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/64202805dcfea1001d0b7a1a.jpg"}	Naruto	{}	1	\N
Orochimaru	\N	\N	\N	35	\N
Edward Elrich	{https://static.wikia.nocookie.net/fma/images/b/b4/EdwardManga.png/revision/latest?cb=20250220063707,https://static.wikia.nocookie.net/fma/images/b/bc/Edward09.png/revision/latest?cb=20201016012253,https://static.wikitide.net/greatcharacterswiki/thumb/0/05/Ed_prof.png/800px-Ed_prof.png}	Full Metal Alchemist	\N	36	\N
Alphonse Elrich	{https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg,https://imgix.ranker.com/list_img_v2/8363/2728363/original/best-alphonse-elric-quotes,"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGBsYFxgXGBgXHRcXFhgXGBkdGBgbHSggGBolHRgYITEhJSkrLi4uFx81ODMtNygtLisBCgoKDg0OGxAQGi0lICYrLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABKEAACAQIEAwUEBQkGBAUFAAABAhEAAwQSITEFQVETImFxgQYykaEjQlJysTNigpKissHR8AcUJHPh8UNTZMIVNGOzwxZEg9LT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEAAgICAgIBAwUBAQAAAAAAAAECEQMhEjFBUTITYXEEIkKRwYEU/9oADAMBAAIRAxEAPwANfUoyuhhmXvDk0SDmA0PXTYzFOwmLKGbWg3eyTy5tbP8AXiOdR4smTICkPeEDULF1tAeYEx6VO2EVlUh0DKAxHu3ADkBdGnvkFtUj3QYM15iR67arYbwmMS4uZDPIjYqejDkabisMHEHb5qeo/iKzjXGV5J7O6DGcaK/hcG3rsfA0awPEw5yOMlz7JO+k908/xFAmqB3ElK2lUxo7beUj8RTeDbtHT/tb+dW/aC2Ozz9CNOXeIE+dVOBHVvI/ID+dA/AX4hq6gaZ0Gp/OcpJI1YbakA6ARpVYAgieoPoSCI6iIIPQiuWcaTctvlhgUJ7OELFXtyc22dvtGPHanXQVKrJOXKp7uUBlW0pH55GUjPs24JBqq8kLWibCnU/dP8Kt2T0Ov9GqOFYa6zp1+70/rUVeweHZ2yoCT4fjU2ktgz0z2SxYbCpOgX6MHkQIAjqR7p8VNFcVfRBLsqjxMfDrWP4Pg7lu0bbsMpftIABKkBYAJ0HeXNoNzvRCAssd+bMZMeLHWPWql+tUVSVs5XguQSPFk+rbdvGAo/aIPypr8WYahFj85yPwU0NzsfdEDqw/Bf5x5GkLImT3j1bWPIbD0Arnf63KyvowRZ/8ZY+7bDfdYx+sVA+dK7jbjrlKIs798tpOojKPxqKaVR/68r8j+nD0Ri8VcPcHdVSJWTqQACRHi+o2zdKs8JxKC0tk6XHFwREHQuwzA67EketQPPIgDyn/AEqNMOBl1YlfdOYgjSNMsctKvH+qlF72EsaaA2FMpeP/AKeAP7NW+BYrLwywvNs+nULcbT1JVfWlirYQOqg95bCiJIAt3WyjqBBPw8qocGzDD2Vb6iFzptmZ3XTr3if0RW6ypq16/wBK4X37/wAL9sQRbaDmRmbxOZc3oS5qi2HaEj3jdYkjXKhS+qkfosCPFvSpHxYUozkyFCGAdXvZSNB4ofKaksW0w9okmABLsfAAbemgHXSoo0JMZiVs25MnZVHNmiBr6ak7ATWaxuMFpTfvHMxOijmSe6FB1EDboJNcxuOHexN/uqBCIdSFOsATBdjEx4DYTWWxGJe8/aXN9lXki/zPM/yqkqBKxXbr3GN24ZY7Dki8gB8J61f9gr5GPwyqpY9o0wRCgo4J16an0oTcZnlU0A95+kch41uvY7gK2cWIYkW7sA6SzGyhk+B7RiB4CrirY8kkotfY0nGSM1+doeeWnZn5V5NhD3F8hXrPFh37wP5/wKGvIsI30afdFZvt/kMXX9FrP40qizeFKijUixR7zb+/d945jqynUzqdZ9auDWwTAJVWy/VKwlu5nme9AS4AI2ZutDS8kyCO8xgkk6xuT5VewhDJkYZ5y/R6Se7ft5gZGxKz+jtTRLRGy5rhBmC5B8iT1rmIsFNDJQRlZTmK/Za1cXS4nhoQRGmgPLFzvqZ3ZTPiSNfnVvFkD3QwVg/dLSFb/DvoZOYsrqxMzpr4NITe0DsTj7j28rkEFpV9syoWBkQNZirXBDqfI/8AZVfiR+htR1f96pOEtAuH81vwH8qCvBPZaZ+6fxWrNu5sCSdVG+wUiN+UE0sYFztl+zoQDzjYE6xPXl5Vo/ZjgGY9rdHcB7o3DRzJ00HluKmclBWybO8A4G11EuXO6htrIAgsYXflsBtHQyZNa/C4ZLYyooA/rfrTxTLjE90ep+z/ADP+/geKc3J7IHPd1ganp0+8eX4+dcW1rLGW5cgPujl57+NTW8NlSdhyHMk8yfnPOm27bMyqNJ7xP5q/zJA+PSlxfRPJHRSohdy2103Ok86oWbZYwP8AanKFa8kqV7OVJcslQCdCdhVqwFVgq95uZ5DrFK8oLy/LYdAObdPKqWPRLnsprbJE8hzqC5fVSATqxgDmf9PGncV4iFGxP2VG5jn4DxrP4bFTdDlgTykwJggDXYCZ8lO5qGvRrGLath1NWcnbRdeeWSfm5HpVRsAwMowAGykTpKmJnosDTSatWGWMoYEgT5ydT6malmhSa6DoDWbJ17X3wQ0dAs5SDz3OvjHKgPFuIrc+kc5cPahgSDFw8mjcgfVHM69I1vEsEl5CjjQ8+Y/rpzrzL2wsXFIt3dkSRAhWMkBgPLlJiTXViyctPsa2UcfjHvuHfuqPcSfdHVur/hUVtDc2MJzbr4D5a+NJLZffRefKf5CtR7P8IJhyIGmQDntl0jTUqI8DW9WW2ootez/s/mWcvdXZZifqk+erH4VoeE3gcU4kH6e2Rt9bD2W5etEktdnZUEESp06SUAkHoI086pcItg4m6Ygi9bIJMnWxh518R853rfhVHI58rZd4uFFy5vLBto+yRPnFeK4Bptp90fhXs3GvyrDrp8ZrxXhrfRJ90fhXP5f5OjF8S3NKmzSpUal3F8L0HZnbZW1+DbgeG1VLV82yEuIQAQdNGJBLd15giSefIUW/vQ+sCvnqPiJA9YqRsrrBhlPkRTFZnsMSCkiCCkj1X5aVfxa91W0k907g6WUiV2+pow3lumj7/C+dsxEEKxJGhmAdx86p4osqkPK77wVPvEZW5RmYRoYNAEHFG+is+b/vH+vSpuFe5d+6fnm/lVbip+jtfef941Lwo/R3fu/xufypgabgWBOKvgmSgUZyYBlQmgiPsiNPPx3qKGOUCLaaQNmYcvur+PkaE8AwBsWFQaXbneY/ZHM+gOniQKP2UCABeQgc48fE/wC9cGWfKRL0SuQiydXJyqDtMSSfIan+dOwdkAgbsTz+JZvHwqjhrhZi+4EonhBlm8y2n6AotgYRTcbnt/Xn+FEKbRjNNIsXLGZsz+6Nh+JNDsJie0ZmT/iEBT/6aSBHgTmb9Kh/HOJtcPZIYkgH1Ma+W58qLcOtrbTMdBGVR4DTT+uVac7dL+yeHGNyHvbzmZi2ugPlvFQ4jFACF7qDc7T5npUeKxRbeAo5cgB1oLcvds4Qe4NW8QOvmYEeJrOUvRcMd9hfBYo5SwEZtjzC8tOp3+FMxOICrJnf1ZuX9cvjTWYAEkwBqT0A3oebhc5o8FHQHnH2j8tB1pK3orirsfZtszdXb5DkB+aP5mtBhcKqAQAWjVo1/wBB4VFw/CZBJ947+HhVuuqEaRnOVlXE8PVsxACu31gDM9TBE0KwbHvKZOUxLE5ifFSSV8Na0E0DxFojEOTsVGWWYkDSco2yzy5HX62kZYqrCD8EpoP7UcFGKsNb2eDkboY/A0WJrjKCCDsdD5VzptO0aLR5zwHhYJJubIQCvV4BM9QARpzra8IuZWzEEkTG+85d+ks/yjbQTcwzW7rg6nNmB5uCBBMDckBT60TweGZJMhhpBBJmD5+B9WOtepidpMjLsucQxRbfrGkbwD16ioOBR/eHn7dsjXrasxyGgOnpVfE3dTPI+Fc4NIxJjm1iNCNMqqTB5khvgPXW9mVUgnxz8qx/rT/evEuGH6G390fhXufF0+lJ5gn1gT/GvCeGH6G390fhWHl/k6MXRcmlUc0qKNLNCR8KjayNwIPVSR+Gh9az2Fxl0KpzkSAYPeHzmrdviz81U+UqfnNABlSeZnzEH4jT5U/Npr8KHW+Kodwy+k/uz/Rq3bxCtqrA+ooAzvFzATpnu/vtRj2JRWYs+iLDN5BngeZMD1ql7UW1CI2UBi8SBv3WOvM7VJ7LYgpbkIScwKSrQzEwO9ENlPIdamafF0CZ6iuIfKzQO0aN9Rbn3E8W1BI/OJOgAM3EsQVUKvvt3R66T8T86hw576pPdtAlj1ciCT6lj5g1Dhbva3y3JBI9dF/7jXmFUFbNsKAo2UADyFM4pj8q76xCjko60644UEnYVncZcNwljsTHw1I8gB8TTRKjbtlrg65rmY8gW9W0HyzUea4TEnYQPChXAx3C/wBpj8F7o+eY+tN4rjYlF/S/l50DauQzH40ucq7T+sf5f71a4PYypmOpfX9Ee7/E+tD8Phtgfefu/dXdo9AdesUUxt8qAq6Mf2VG5/gPHyNU14B+kRYq9nOUe6p1/OYcvIfj5UU4Rg9nbf6o6ePnVHhWDznbuL8/D+dEsdxqxaJV7gzCJRA1xhO0ogLAeJEV0Y4UjHJL+KCFKgFv2vwre6zN5LJ+G/yqW17U4UmC7243N2zetL+u6BP2q24sy6DVCOKiLtslzrML0KjUxHukEA6jUL10JYfEI4zI6uOqsGHxFDPaPFC2LZiTn032jvbCDI5Ejkfq1nNaZUOxrgEQef8AQjxqGzie8Ub3xrpsw6qOvh1FR37wa2WTXqNtt/I+PhQu7i84BOlxNjtmH8DsfjXKkbpWRW+8zFWm2D3CJ0V0zAT+ac0KdvxI3Cq6TOp2HUhueu5+VCuC3rbC4V+tcB6RMAiOUMGq7dOszOs+kCvUwqoIwyfI5euCTHUfxH9edLg7H+9aCPyG/MZnk+o09OVUs/8AGncKv/4qOi4eRB0m9fjffQqZGn4VqiWtGq4o0XT5/wABXgvDfyVv7or3TjpPa6bzpJMTlBHpIrwnhx+iTyFY/wAn+TXF8S5FKpKVPiaWR8Mw6OiZi4i2kFFLHViDoBp5nnlHOuXEUFwCWAEg5dyLNxxmH1UzhQT05jervsu4AMiR/d7fj/xEbX9U/Cuvi2S9i2QsJFxe6Ds1qADGwzZRJ0p0K2DlCNIVwe4SCv3bWvvHZ3deXuTzq5xDhICK9tsxB7yj0ncfaDaCp8fxI3ixLM03Lz94MI7S5ZX6wEaodPDXegmPHecjfMRPMd+N6GhRbrZHxUOOzVpGpIBPQDUfGjXs1xJkRAwBS0c6jKAczrmEmJYZoidpbrQv2mPfteT/AI26s8Ftk28qjUmyB592k1ofk9Gwd8jDBj794/sj/WfjVvhz9nad9yWgeJA/mWoT/fka81pTItKEB65dGj1/GrTXu6gnRRPqxLE/MD0ry5RaZsXcbdJy2gZI94/ncz6T8TVPEY3D27qJfuKigaKTLOZ9wDeSQJ8zzIolwXhvaE5xIOr+XJfXn60YxuGS1YdLaqisQpCgKIuOqnQaQFO3QVtCCStmUp0+KB1y92VpZ98j9o6sfiaB4DGW3ulc4LgwBrq0SYOxbfu76Ex0sY292rmCAB1PL8ZOtFOF8JNxw+IsoVUK1p1YyGDTtlBSIUghiDU48d7ZUpKKJGtC2xLbompGur94gDmQAkfePWq1lGdtu+3LoBsPIaz6mp+0z57n1QxaerMYtfqplbzyUQ4Jhcq5zu23gv8ArVRjbsjlSI+K4O92aWcOQoYntLhYqVUDWMpzFmJG0aAjMuhoFhkwdo5OyF5xrDd8iZgiyqlbYPXKD1JrY327rdYP4GspxjAYjD4dUwHZribtyATbzd64S1xlE5VIUO5chtFiNRHRG3UUY2km2ajA3mYD6MoI0Gn4Db4VZzEda849r/ZS9awxutiMTdMjtHfFXQVzEKClpItjU+MdG3Ga9mrmJS4qWsfiEdjFvtmN+0zckuW22DbBlggkCCSDVuCT4t7JSbXJLR7OLaglgoBO5AEnzNR47Ci6hRtjsehGxHlQf2Y9oDiO0s37fY4qzHa2wZUq3u3LTfWtt8QdDyJPTUSi06YJ+jDK72bhBHeUww5H/QiCPOq7kZpXb+G4/lR72ssAdncG5OQ+Iylh8II9fCs67QCegJ+Fc0o06OuLtWVPZm8GVyNu2b5Ow18NKNnYHXp+P8qynsLdzWP02Pn338K1Lnby8eU16kVo5pdlNjTeCv8A4uZEgWdJHd/xGIMbesHXvdIrjH+vWucHb/FjNqAiddAt28evn/KhCfRteJKvasTyIg9O6tfP/DW+jTyFfQPEfylyN5+eUV8+cPns1neNfOsl2y8fQTmu0yaVVs1Fw93CqttM7ulpANAPddidSNgDzqfAYhs99iArBmkToCty0D5iflrVDAoGOZwSgyn3sgUgTlHfU6EgbyABrtVnhrrYdWUo4GSQ7H6jq50GYfVAB0MTRRFlnGYkuxk69reMcgLmKUgjwIWaD4xtWiPyh+PaVbt3oVQWTumd3/5ouR7m3KqjYaZytb1cvqzDd832B5U6BPQvag9+35XP3lohwi8EBPMFI89p9N/ShXtDczkFcpyC5MMrRmZSJA15dKsYO+c7rOgykfrXQfwHwocdCUthfgmJZb66aZSGMj65aNJk6pyHOttgbBcqByjTqeQ/j8OtZHhHDGvC0LcByw1ImC17sw3XuotwkAiVzc4j0/gPDDbuXA5nIVK+TosmOgYOB4AdK5c2O5WaLIkqDOCwwtoF57k9TzrDvxXEY+52lgxg0c27QGrYp5yG4T9W0DIXrqT4aT2zw9+5gcRbwv5ZkIXrBjOF275TMF1Gsaii3sng7SYa12MZMgCR9hRC/LXzNa4sakqOWU+Ls8x/tE4Cli5ZnsnLoZLWrTNKkc7isYJaANAIOhOtHP7Or30N0WxAtjW0CYDkSr2lJ+jV+8Cg7ua3ICyZxntZ7O3r128Ae8uJfc6gBy67nQZXkenWt57B2MhuLpPZJmI8LjkfAs9ZfUXLgn716o2lH9lvvW/yF7PD8tu1ZOsd64RzIAB9CTA8F8KLUqVJIluxVPggM3jBg+cT+HyqCnWngg1cHUkyZq4tGD/tQ4tis93DJAtLbS4QBq0k5cx6Z1mBHu6mvP8A2Xt3nss7ki7bBdSREOjZkkRpsfhNe2+1PBTei7aGZwuUrIGdJkQTpmBJiSB3m8IAcK9mrjsA9vs7UgvIVcwGpVVG+aMpJgQxgkxRmjkeSkrtqn6KxZIKFt/8F/aLgnsHDcRwyTetXEtlBp2tvEOqNaOsQWZSJ2Ota1qdxRFuFJMhGzxyLAELPWJkeIB5UytM8k3SMsadWwD7YH6O3ufpNhqT9G+gHM1FY4HZt2w2LIJOmUswUTsoVT9I3jrMGABpRDieHNy9hxHdVmdvDIBl/aIHxoPdxHb3A86Hu25+qjEa+baMf0R9WTh1s3VtUgbjeG2cO6/3cAWLqlkCyQrIYcAzoDnUgciH5QAhenL6iifF+Gm3hmJM5b63FA2Au5bTRptLs5nmTQayfd8z+FdmN2jMiuCI/rnTuHWyt5X+3bMaDTJdddD11O9ROdv661JhB37I+1bvg+l20BHTy6knnVoT6NvxNouOQJjkOcKOtfPmCMos6Hn4Gda+guI/lW8wf2RXz3g3lQepJ+LGsV8mXj6QRzUqjrtXRqO4YbB/8wXkaLlDEERqSVEgkz8qIrb4fIk3B4/4j8ANayoRWEsoJOuoB35ajpp6UuytmItqCNzCmTJiBygQPOfCqcTGzWcUfhvZsLIul4OU/wCIHegwTnhdTG+lZjEXSCoGsydOigtA8yAPWo3gagRqNtN2A5eddUw4aJy7SQJJOok7bD400gbD/GuCLZN63mLMlq00k/WvXGW5AH1Qo0BmJoTgl+lcnY9PzjmHyJqXiXHHvXrjwoNwKrKCWICMWGpyjmBImpeCYdboKq8sIlVDsTChZDARGm5iJ8iZlaQ4O2bX+zVrP95CD8pme82h1UWhaU5tt7jCN99K0/szZa1iWz+9esguJkC5bbPKz9rt7hO3uTEk1lPZaybGOtXn7O2rfQso3+k7qMQCQO+UG+1bHiL5MXbc8rqD0ur2Pwm58q55Pa+5TjtmmqXAutsFQsAktp1YlmMeJJPmTUVdqYycXaM5RUlTB3HeBJec3LVxbbtGfNbLq0CASAykNAAmdlAjQGpOE8MWwpAOe48Z3y5ZCzlVVkwozMdSTLHUzVylSbTk5UrfkaTqr0dpVBjsULVt7jbIpYgak5RMAcydo8aZwp2axaZzLm2hY9WKgn50VoPJZpV2uUhnQxHM10sTuTXK5TtipCpUqVIYy/bzKyzEgiekiJrIFGUm24AdIBiYMjRlndT8iCNwa2JNY7FYg3brPbXM1yFtLsSluYLH6q5nZi3JXAInQurRUXTDHG8SHwGJYEErYuE+Di1nH4qfUVmBE+Wb4UZ4064bDLhwcz3JznaQTmutGsAlsoHIMPs0CwmpBnkfWR/RrpwqkZlcjQeFS2B3rJG+TEkAmASHwxGs6D3em5Os1WvbD+vq1b4dcyvYfXutf8zH91aB3oC92I01rVCZteI63G57furXz5hj+837x+NfQfEvyp017vxyivnu3oWGvvvod9HbfxrKPyZcOkXKVNpVdF2CrFzOwS2CzHZVEkxroPL8KV+3dtgs9m6ozbsjKNdu8e74b0FwuLe24dHKsswRl0nQ+FWsZxy/dXJcu5l00yoNoI1UTyHwFXTObmK7jGPQa8iDtrVlcUFt6qrM2xYTA8NdNI21k+FBy/U+VWrt9XVvzV08yy7ddB8CadC5EuHuQjtzAgeYnX8KMewrsMVAn3GU+Wja+oHyrOYtXRRIgPqPQ/jt8a3vsHgFyNiSO85KrJ0CAKCRpzYH9XzmZ/ErHuSRprlqQQRoRB8jvqK0li+2NsOkxi7aESf+INkuDlIaJHJvBlJBwadbuOhD22yuuqtEwdtVnvKRIInUcwYI5qvR1yXldnpGExQu20ur7rqrjyYAieh1qagPsjxHtbdwZCht3WBUmYFz6UZTzSXZVMDRNgQQDtZyVMxXR00q5SqQB3H8Oz2oUZodXZRuyoc0L1OYKY55Y50vZu8Hwtkhg0IEJHNrf0bftK2lEaZbthZgRmOY+LGAT5mKd6A6LoLFeYgnQ6TtrtPhT65SpAdpVylQM7SmuUqBA3jOZ8thIm4CXJEhbawGkc5LABeevIEitjsThuHWDduMdYXM0G5ec+6o2BJM90AKuphRNRXeKdnjriZHebFqMmU5SHvaNmYe9nEH80zGleKe2HtJcxt83nlVXS1bmRbUEHyLmJJ8ANgK2hCyXYfw3HruJxGJe8wntFRVGyIueFXqBJ15kk860uBufRCBJK7xOklTXnfCLgN/EEGQXVgeubNW04XiwlorMSLgImM30WbU/VWGg+ddCHX7Tly9oNZ8vKrmBICW3IOlzECf/wAdg6dfd+XSguLhe6NgPltVoXwuGU/9TdU+uHQ+fL5Uwa0ek44k3AxGrKjfED+VfPwEM4Agdo4A6Q7aem1e9Ylx3SeaW5jWZVRI8Nq8Cy5XdRMC7cAmZ0uMNZkz61nH5MI9IuTSrlKrNDR2vZiyqhQzwBA1U/8AbTX9mLLAgs3Q+7/+tGV0ikDWJpxQA/8Ao3D5SozAEQYyz8SszVfD+weGUg57rRrBKQf2a1GauzTUpEvHF+CphuFWU1CAnq3ePpOgPkKuFqZNIRSLHZq7NMNckUAGvZTFZMSFO11Cn6aTct+Qy9t6stbmvLFuEEMphlIZT0ZSCsjmJAkc69F4PxNMRbFxNDs680cbqfiCDzBBGhFRNeTGSpl6lSqK9aRxldVZejAMPgayEQ3eJ2VOU3UzfZzAt+qNflTP/FE5LePlYvx+sUj51btIqiFAUdFAA+Ap01WhUyocceVi83hFtf37i0xMddP/ANrdX774cfuXXq9SFFr0FP2UhdxJJ+isqOU3nJ9VFmB+satWM0d/Lm55QQPDck1JSpNgkKuGu0J9oeJ9jbITW43dQdC2gJHQb+QJ5Uh9mZ4VjGuYzH3OWZAn3baso+LZj6g15V7OcDGLUg3ezMqoYpnUs6yAxDAoSZgwRXqHs2Ql3EhZ7nZKvMwLagT1Mj41577I4nLbvI4DI5UP190ieka+kV1LStfYEv3US3uFXsLiGF9VUOQEuKsJcA5DXumSYB15a7gi18osfaEH4ZSfHQxR9sUuUpdHb4RwsqZY25AEpzKczzGsdKF8U4W+Ei4rdthmiLhHaZFMEdqB79vTS4IKz41SlYNcSlcuTJG0GPKWjyq1cP8Ago/6w/PCuBIpjYPOpazLyCSglmUTIKGPpkOYww17u1SWhOBc/wDWCPD/AA1zXwGn4+loTfRvMficvZZNAUtnXeBbt6beO/hXiNz8pc/zbm0/8xtp1+NezcScFcOQDHYpoYkfR2tPhXjN0fS3ZgntrkwIBPaNsDsPCs49sS6RNmpUortWUbzNXC1crlZ0bDq52lNNM7Ef1rRQDy9JTzpiJG0fDYV116ifLTn/ACooB5amsDXVrqmigIlEtlnWJjw2o9wKxdD9rZYKRpDA5biiTleNQNTDDVSSYILKw7huFfMRoSx5Az4SSeQrS3h2VvKpOdu6IPMjU+gk0iZbVB3hnEUvKSuhVsjoSM1txurRpOoII0III0NWyK8/wdpsNdV7IIDWxBeYv9mxFwO2rH37cPGhzEZgWB2vDuIJeTOk7wynRkYRKsOR1HgQQQSCCcZRp6M0WqVKa7NQMUV2mk12aAO0q5moPxnjq2u6gz3TsoO3ix5Ac/5kAgUWeL8UWwsnVj7qjUknbSsgSzt2l0y5mByUH5FuRO3IaSWXeZjcuNmc8+QHRRyHU7mByAAVy5sIJJ91Rux8OniToOdH2RrGKjtlThFtkbEXHAKXnK2yCTBs3HBW4sDLJSAQSNgYJE+e+zrwlw/na/qivTsfhSmCuqzSQHukgxlbtDf7pABhW2bfSdDoMAMIltZQfRvqRJJUkDUEzpEb7HwmOrwZR+QX4ZauB3QAwEYkeMQIjXXoOlXvZTFXbOa0RKqCzW9CdwGyQYDTrB0M+IIYuNYqLqRmRe8PtZV3iOZX+opj8bBu9qFGlvXkxG5B6jQa8vWpNWrL/EuBW2U3cIoZe9mtoAGViTmazmjK+pm2YU+EyeK63eH3mvOtuL4YXxaJ7QhLi/SW1ClWXvIdJGRd9zRfivZXe0tEQ4MjqVJWdOfeOu/LWTJbHOuItN2PduOSWTszdW4xUopupbBaQNQ+x85Caxl7MJwDHGDAsGAItJpv/wAO3XjOITLdujpeujzi4wr2njlkr2CtuLaAyIkhFB0Oo22rxS7+UuAkk9tc1O5+kbU+JpLtiXSJs3jXKbNdqh2brOacDpTK6KmjcdNKaaGrhNFAPmuzURpZqKAlmpsPb5/Cq9lcxijfCsCbjdANz/CkxBPg2CCjtH9PCguM4hdutcazlVVlLbMubMw5KMwmW0JkQQBqQQCHGcSWJsIe4NLrCQf8tCOf2m5bDvElGcMshr1i2NB2iQBAAFn6WI5CLRX1pJGbemw/7YYZLeHsqpg2SgVeZtkrYb0Be2T0gTWYw2Ja2/aWz3oggmBcUa5X8pMNBKkncFlbfcc4YuJstaZipIIV13UkET4iDqDv8689x1lrVw2rkBxrp7rDeUPMaiRuOe4JWZO+SJ/TtU4s2HC+KJfTMkggwyN7yN0YfMESCIIJBmrmevPJ1DAsrDQFGZDG8SpBInWNqnGPvcr1z9afmQTXPSN+DN5nqHFY5LYl2A/H4VhrmLuHQ3rp8rrr+6RVX+7puRmMzLkuZ6guSRRSBQYcx/tI93u2O6n/ADDzH5n2vMaeJ92h1lAsxJJ1YnUsfE/IAQANAAIFQi7LFVBZuYHKftsdF666nkDVm1gJ1ukN+YJyfpTrd9YU/Zmq42FpHLBa5+T92dXPu/o6jtD5GBrJkRRLC4dbcxJY+8zas0dTsB+aAAJMCuZ6WerSroiVvsi42w/u1+duxuT+o1YkCBA2Aj0Glab2lxWWwVnW4yoPETmb9hHHrWWz1rHolLY2xc7NgCe7Oh/N+sp8hJHgPAmr1jh4F7s2/JupAIkTsYnkYn5VQfUR8xyPIjxG9WcTiibbECNVJAnuGR7nS20HyMjyGi0/A+zhCrvbYmBMMCOsajXkT/vEE8JhkuWFUEFrebKdJADGJ6aR8Kz7Yxs3ac4Abx1n51NhbrIQ9vUbEaxJWegnnrp0qSjZNdLWMOWJLBSrEtmJKMyTJ+7XkmKBF66DE9tcnKIH5Q7Dl5V67hCtzDYdjoIkCRrme5z57/KvIcbPb3pOY9tck9fpDr671cO2YSHz/Wldpuau1QjcBq7mqKDA1pxpGw+a7NQEmfSn9pQBJNRs8sEX3j8FHU/wHOm3L6jcwAJJ6AdaEHHMrfRs8udAVBZj4LEj12A2FAm6NYiBFkkADdjoPMmiI4uFU2bAaQO/eIywTuEB7xfxIAUEHXQHEWEuq47xOIuCAGOcWEJku2pBeBouw8mAOjsqqqFXYddSSdSSeZJJJPMkmlRN8i0kAQBAGwox7JqDiC32LZ+LsAp+CuPWgGetF7HHW8f8sfDtT/GhCn0a/tKzPtfhQxViJB0PgyyQQRqDBMEa6Ucz1U4nZ7S2y89x94bfy9aG7RnFUzBXbLr1deoHeH3lA181+AAmoheWM0iOsiPjVH2t9ov7sgVI7ZtgdcgGhZhz10AO5npFZC17YXw+dksu3Ismo9VIk+JkgEgbmcvp2dH1a0bpMUre4e0PRIb4kHKvmxAq3bwjH3zA+yhM+r6H0WII94ishwz2sxVy6HKjsdmX4aoYzFh01B2MGCNsl2QCCCDqCNiDqCPCjgkHNyJ7YCgKoCgbAAAD0FODVXz0s9OhFnPTc9QZ6ZexAVSzGFUEk9ABJPwFFABvafETcROSpJ83MfEBP2qhwvCWYBmbLPKJP+lM4R/iCcS4gOcyKegAVJ8lCz4zRvPWtUSuinb4PbG7MfgPw1qPj8Jbt5Aoh8oBGhVlfMp8CQJ8QDuBRHNQf2kufRp/mD9y4aAZzA8LzWle3cMuquAVGUhlBysILAQepg6wdqVu32SMpUqxbNqM3IKYI99dPhvBqN7Nx8JaFuCVAlCYDqAy5ZOnQidNKD3LiqMrq1rwYG3t0Ok+Yo4gpM3qN/h8OOiHTkO84MT4g/KvK+Jf+Yvaz9Nc16/SGtPhvaI21UNcV0QQASAQJJgPz1JPenfcDbN4/h9xHdzadbbOzqSAYVjmGYrIUwdiaIqmTJjKVM7QdR8aVMRskY8gflT0Y8/hVa0rH3V05FjAgdNMx2HKD1qzbwv2mJ6gdxfgDPxYig1s4bwnKDLc1HeInaQNh4mKkSy56IPHvN8Aco85bypJfEAW1kDaO6g9Y2+6DTipPvMfJe78/enxBHlQKytjsBaJXNcuZhJgEMzba9mFI0jQqo3PgRWv4rsF+hs5S2ma5JZjIjSc0a7sRH2aK2wFEKABM6aSep6nxoJfAxGJynW3b0bxjQj1Mr5C54UEtBHgdkhTdcy9zWSIOU/hmInyyDlRLNUJelmpFJUT5qK/2f4zM+NE6JdtqPS0J/aB+NBAak/soaUxN2fy17P83/mKH0TLtHo3aVW4lxJLFp7twwqCT1J2Cj84kgDxNcL157/aJj3utbtpJtq7LA3e8BA8wB2ijxDnaCIQMxXGmOJu3L9w/SXGzaahZ0VVHMDQDmfM1zC8AKEG+Ndwnh+d18vj0rUcJ4WLUM0Nc8NQk/Z01PLN5gQJm/ftBxDDT8D4VlPN4RcYLtmdBjblt4Ud9nsXKm0d11XxRuX6J08AyUKxOAddhmHUfxFUP/Fks3FYtqDqo1JU6MCBtpqPEClj70VOkrN1nrueqwucwZHXr40u0rahE5es37X4hrnZ4NDBukG4R9W3P4mC3lb8a0SKAj3bhK2rYLOw3IH1U6uTAHiRWQ4G5vYi7iGAGugGoUtyB37qALPMNVRIlvRp1gAACANAOg5V3PUGalmqhk5eg/tK/ct/5n/xXaIF6Fe0bdy3/mf/AB3P50Ax3BLD9kGW6RLPoRnWBccAQToNPqkUVF9gO8unVJYeqHUeQzUO4C30C/euf+69EM9MlLR2z2Z1VUkcwokHx0lT4Gpu0qrdRWgkajQEaEDoGGoHhNMlxsQw6Nof1lHyK+tAUW9Oi/AUqq/3hv8Alv8AG3//AEpUCK5xQJKr3iN42U/nNyPgJPhFIpOrd7oPqjyXmfEyRyiorahQFUQBsBpTs1I0osZ67nqvmrmagBvEsd2dstOp0XwO8nwABPpHOmcJw/Z2xPvN3mncdAfEDfxLHnQ4v218c0t/DQ/9zAeYSi2eglbdljPXc9Vs1dzUFncdiMtp2n3UY/AGr39lbxhEHVrw/UazH75+BoBx+7/h7viAv6zBf40Z/s8bLhUjYYl1PgHtLHxc26T6M32azjfETbSFMO8hSN1AjM3mJAB+0y7iazGKsMttXywqkEHkAND+wWoph7Pb3GvMZt6C2PtIswfIks0880bCit0KylWEgiCPCofopGUL1HiMSqLmcwB/UADUnwFVOJ4kYaVeWZSVA5sBBBPQFSpJ5ZuZgHL4vGtdaWI8APqjoB/Hc/ADCOJvspzCHE+OswIQlEGu8M3mR7o8B8eVDvY3AG5e7VvdtnNtvcOqx5e94d3rVLHEkBFEs7AAddf4mBW74FwzIiWU1I3PUnVm8v4RXSkorRl3IJcKwLOGVcsIYEmO62q6cgO8o/y6LYXgus3GBHRZ18z0qUW1tNbZBA/JsdpD+6T1btMoHQXGpcT4kLNtnJ2BI5wFEkkc46cyVXdhSKujHf2kcaBYYS3olqGuRtniVWOig5j4sOa0zhFjs7SqdCe833m1M+Wg9KzHDbRu3hmk943HkzPezGSd5YgHrJrWBqpAixnpZ6r5qWamVsnLUK9oG7qfeJ/ZI/jV7PQvj7e5+l/2j+NBLL3BW+hXzf8A9x6vZ6FcGf6Ieb/vtV7NTBdE+euZ6hzUiaQyXNXagz0qYbP/2Q=="}	Full Metal Alchemist	\N	37	\N
Scar	\N	\N	\N	38	\N
Roy Mustang	{https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F7otzt39j6dv71.jpg,"data:image/jpeg;base64,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",https://comicvine.gamespot.com/a/uploads/original/11158/111588243/8659454-picsart_09-21-12.31.31.png}	Full Metal Alchemist	\N	39	\N
Van Hohenheim	{https://static.wikia.nocookie.net/fma/images/a/ae/Hohenheim09.png/revision/latest/scale-to-width/360?cb=20180406215022,https://static.wikia.nocookie.net/fma/images/5/50/HohenheimManga.png/revision/latest?cb=20250220140417,https://cdn.staticneo.com/w/fullmetalalchemist/VanHohenheim.jpg}	Full Metal Alchemist	\N	40	\N
Shinji Ikari	{https://static.wikia.nocookie.net/lgbt-characters/images/9/97/Shinji_.png/revision/latest/scale-to-width-down/1000?cb=20210912184754,https://static.wikia.nocookie.net/evangelion/images/9/92/Shinji_Ikari.png/revision/latest?cb=20210731041210,https://cdn.anime-planet.com/characters/primary/shinji-ikari-1.jpg?t=1625775276}	Neon Genesis Evangelion	\N	41	\N
Iroh	{https://upload.wikimedia.org/wikipedia/en/b/bb/General_Iroh.jpg,https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png/revision/latest?cb=20130626131914,https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png/revision/latest?cb=20130626131914}	Avatar: The Last Airbender	\N	42	\N
Guru Pathik	{https://static.wikia.nocookie.net/avatar/images/9/91/Guru_Pathik.png/revision/latest?cb=20140510202641,https://static.wikia.nocookie.net/avatar/images/6/69/Pathik_singing.png/revision/latest?cb=20121120074213,https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/08/Guru-Pathik-in-the-Last-Airbender.jpg?q=50&fit=crop&w=825&dpr=1.5}	Avatar: The Last Airbender	\N	43	Guru Pathik was a nomadic supercentenarian who possessed great knowledge of the Spirit World and its effects on normal humans, as well as the nature of the Avatar and the Avatar State. He was spiritually enlightened and had assisted numerous people, as well as animals like Appa, attain their full potential and cleanse themselves of pain and suffering.[2] Pathik did not hold an allegiance to any one nation and was willing to teach anybody who wished to learn from him.
Lelouch vi Britannia	{https://static.wikia.nocookie.net/codegeass/images/6/6a/LelouchviBritannia.jpg/revision/latest/scale-to-width-down/1000?cb=20120107132514,https://static.wikia.nocookie.net/codegeass/images/0/03/Lelouch3.png/revision/latest/scale-to-width-down/1000?cb=20120510021142,https://static.wikia.nocookie.net/codegeass/images/4/47/Emperor_Lelouch.jpg/revision/latest/scale-to-width-down/1000?cb=20100215170232}	Code Geass	\N	44	
Sosuke Aizen	{https://upload.wikimedia.org/wikipedia/en/8/85/AizenAnimeEp60.jpg,https://static.wikia.nocookie.net/villains/images/7/77/Sosuke_Aizen.png/revision/latest?cb=20180614233415,https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/Sosuke-Aizen-from-Bleach.jpg?q=50&fit=crop&w=825&dpr=1.5}	Bleach	{}	14	\N
Kakashi Hatake	{https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/284?cb=20230803224121,https://static.wikia.nocookie.net/characterprofile/images/4/4b/Kakashi.png/revision/latest?cb=20160918182038,https://static.wikia.nocookie.net/world-war-fan-fiction-series/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/250?cb=20170819004747}	Naruto	{}	34	\N
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
Sosuke Aizen	123	Fear is necessary for evolution. The fear that you might be destroyed will cause you to reach greater heights.	14
Sosuke Aizen	124	Admiration is the furthest thing from understanding	14
Sosuke Aizen	125	Laws exist only for those who cannot live without clinging to them	14
Sosuke Aizen	126	To truly be free, you must abandon all notions of control and embrace your own will.	14
Sosuke Aizen	127	People trust their eyes above all else. But what they see is often an illusion	14
Sosuke Aizen	128	Do you believe that justice exists? Justice is nothing more than the consensus of the weak	14
Sosuke Aizen	129	You thought you had won because you were stronger? Power is not the only thing that governs battle.	14
Sosuke Aizen	130	I donΓÇÖt have to fight you. YouΓÇÖve already lost the moment you stepped into my world.	14
Sosuke Aizen	131	In order to exist at the pinnacle, one must discard everything ΓÇö even common sense	14
Sosuke Aizen	132	A person who doesnΓÇÖt know fear cannot hope to control power	14
Sosuke Aizen	133	Illusions are the most powerful weapon. They shape the mind, and the mind shapes reality	14
Sosuke Aizen	134	The moment you put faith in others, you place yourself under their control	14
Sosuke Aizen	135	My blade doesnΓÇÖt have to cut you. My words will do the work	14
Itachi	18	We are humans, not fish. We donΓÇÖt know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are. ThatΓÇÖs what death is, donΓÇÖt you think?	1
Itachi	19	People live their lives bound by what they accept as correct and true... Their 'reality' may all be a mirage.	1
Itachi	20	Knowledge and awareness are vague, and perhaps better called illusions.	1
Itachi	21	Even the strongest of opponents always has a weakness.	1
Itachi	22	It is not wise to judge others based on your own preconceptions and by their appearances.	1
Itachi	23	So tell me where should I go: to the left where nothing is right, or to the right where nothing is left?	1
Itachi	24	No matter how powerful you become, do not try to shoulder everything alone.	1
Itachi	25	You are weak because you donΓÇÖt have enough hatred.	1
Naruto	72	IΓÇÖll never forget the people who were important to me. And IΓÇÖll never forget the pain of losing them.	12
Naruto	73	YouΓÇÖre my friendΓÇª and IΓÇÖll never let my friend be in pain.	12
Naruto	74	The moment you give up, youΓÇÖve already lost.	12
Naruto	75	ItΓÇÖs not the face that makes someone a monster; itΓÇÖs the choices they make with their life	12
Naruto	76	I may be an idiot, but IΓÇÖm not a coward!	12
Naruto	77	You think youΓÇÖre the only one who knows pain? You think youΓÇÖre the only one who suffered? If you take revenge, itΓÇÖll only breed more hatred.	12
Naruto	78	The pain of being aloneΓÇª is nothing compared to the pain of losing someone you love	12
Naruto	79	A hero is not one who never falls, but one who always gets back up.	12
Pain	80	We are just ordinary people driven to revenge in the name of justice. But if revenge is called justice, then that justice only breeds more revenge and becomes a chain of hatred	2
Pain	81	Justice comes from vengeance, but justice only breeds more vengeance.	2
Pain	82	Love breeds sacrifice, which in turn breeds hatred. Then you can know pain	2
Pain	83	Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain.	2
Pain	84	How can you say that youΓÇÖll never change? ThatΓÇÖs only arrogance. Humans are not meant to remain stagnant	2
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
Urahara	118	Some things canΓÇÖt be fixed by regret. You can only move forward with them.	13
Urahara	119	WeΓÇÖre all pawns in someone elseΓÇÖs game, until we learn how to play the board ourselves.	13
Urahara	120	When youΓÇÖre backed into a corner, thatΓÇÖs when you show your true strength.	13
Urahara	121	There is no shame in falling down. The shame is in refusing to get back up.	13
Urahara	122	The world isnΓÇÖt kind. ThatΓÇÖs why I chose to smile anyway	13
Sosuke Aizen	136	You stand there because I allow you to. Nothing more	14
Sosuke Aizen	137	The betrayal you feel is not betrayal at all. It was simply ignorance of the truth	14
Sosuke Aizen	138	I do not fear death. What I fear is stagnation	14
Guru Pathik	257	Love is a form of energy, and it swirls all around us. The Air Nomads knew this well. They let go of their attachments and found freedom.	43
Ichigo	93	If you give me wings, IΓÇÖll soar for you. If you give me a sword, IΓÇÖll fight for you. If you give me a shield, IΓÇÖll protect you. But if you take away my friends, youΓÇÖll see what I truly am.	3
Ichigo	94	If I donΓÇÖt wield the sword, I canΓÇÖt protect you. But if I keep wielding the sword, I canΓÇÖt embrace you.	3
Ichigo	95	If fate is a millstone, then we are the grist. There is nothing we can do. So IΓÇÖll fight fate.	3
Ichigo	96	I donΓÇÖt care if itΓÇÖs called destiny. IΓÇÖll fight it. ThatΓÇÖs my way of life.	3
Itachi	26	I always lied to you...no matter what you decide to do from here on out, you never have to forgive me ΓÇô I will always love you.	1
Itachi	27	Forgive me, Sasuke. I hope you can live your life in peace, away from the curse of the Uchiha.	1
Itachi	28	The ones who forgive themselves, and are able to accept their true natureΓÇª They are the strong ones.	1
Itachi	29	In life, there is no such thing as a perfect choice. You can only choose the path that seems right to you.	1
Pain	30	I want to help create peace, and bring about justice.	2
Jiraiya	40	A place where someone still thinks of you is a place you can call home.	11
Jiraiya	41	Knowing what it feels to be in pain, is exactly why we try to be kind to others.	11
Jiraiya	42	When people get hurt, they learn to hate. When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind.	11
Jiraiya	43	Failing doesnΓÇÖt give you a reason to give up, as long as you believe.ΓÇ¥	11
Jiraiya	44	A teacher has to be strong because they have to protect their students.	11
Jiraiya	45	The true measure of a shinobi is not how he lives, but how he dies.	11
Jiraiya	46	When you feel pain, you learn to hate. But if you can bear that pain and continue on, you will find that there is a bright future ahead.	11
Jiraiya	47	I believe that the day will come when people can truly understand each other.	11
Jiraiya	48	Rejection is a part of any manΓÇÖs life. If you canΓÇÖt accept and move past rejection, youΓÇÖre not a real man.	11
Jiraiya	49	If you want to be strong, stop caring about what others think of you.	11
Jiraiya	50	The most important thing for a shinobi is the guts to never give up.	11
Jiraiya	51	YouΓÇÖre still just a bratΓÇª but one day, youΓÇÖll be a splendid shinobi.	11
Jiraiya	52	The true measure of a shinobi is not how he lives, but how he dies.	11
Jiraiya	53	A person becomes strong when they have someone they want to protect	11
Jiraiya	54	Power comes in response to a need, not a desire. You have to create that need.	11
Jiraiya	55	You canΓÇÖt defeat me with words alone. Show me the strength of your convictions through action	11
Jiraiya	56	Someday, youΓÇÖll have your own student who will inherit your will.	11
Jiraiya	57	Life is not about living forever, itΓÇÖs about creating something that will.	11
Jiraiya	58	I believe that the day will come when people can truly understand each other.	11
Jiraiya	59	Sometimes the mistakes of youth can be the most fun memories later.	11
Jiraiya	60	Even after IΓÇÖm gone, IΓÇÖll continue to watch over you.ΓÇ¥	11
Jiraiya	61	ItΓÇÖs up to the next generation to accomplish what we couldnΓÇÖt.	11
Jiraiya	62	Rejection, failure, even deathΓÇª they are all part of being human.	11
Jiraiya	63	The true lesson of a shinobi is to endure ΓÇö to endure and protect those who cannot protect themselves.	11
Jiraiya	64	I couldnΓÇÖt bring myself to confess my feelings for youΓÇª but I suppose that is part of being Jiraiya the Gallant. My failures make the man.	11
Naruto	65	IΓÇÖm not gonna run away, I never go back on my word! ThatΓÇÖs my nind┼ì: my ninja way!	12
Naruto	66	When you give up, your dreams and everything else, theyΓÇÖre gone	12
Naruto	67	If you donΓÇÖt like your destiny, donΓÇÖt accept it. Instead, have the courage to change it the way you want it to be!	12
Naruto	68	IΓÇÖm not a failure. IΓÇÖm not useless anymore.	12
Naruto	69	If you donΓÇÖt like the hand youΓÇÖre dealt with, fight for a new one.	12
Naruto	70	I understand now. Even if I try to erase the mistakes of the past, theyΓÇÖre still part of who I am today.	12
Naruto	71	Because they saved me from myself, they accepted me for who I am. ThatΓÇÖs why theyΓÇÖre my friends.	12
Ichigo	97	IΓÇÖm not fighting because I want to win. IΓÇÖm fighting because I have to protect everyone	3
Ichigo	98	IΓÇÖm not good at following orders, especially from people I donΓÇÖt respect.	3
Ichigo	99	The only thing IΓÇÖm afraid of is failing to protect the people I care about	3
Ichigo	100	Your arrogance blinds you. Power without purpose is meaningless.	3
Ichigo	101	Even if it costs me my life, IΓÇÖll stop you here!	3
Ichigo	102	The only one who gets to decide my fateΓÇª is me!	3
Ichigo	103	I fight because I must. Not for revenge, not for gloryΓÇª but because I canΓÇÖt stand by and do nothing.	3
Urahara	104	There is no such thing as a perfect human. The true essence of a human is to continue to struggle and to fight against their limits.	13
Urahara	105	Prepare yourself for anything. ThatΓÇÖs the only way to stay alive in this world.	13
Urahara	106	Fear is necessary for evolution. The fear that you might not win, the fear that you might die, the fear that you might lose your friendsΓÇª that fear will push you to become stronger.	13
Urahara	107	There is no such thing as luck. It is merely the hand you play in the face of impossible odds.	13
Urahara	108	If you only choose the path you know, youΓÇÖll never grow. True progress comes from stepping into the unknown	13
Urahara	109	The right way is not always the easy way. ThatΓÇÖs why so many people stray	13
Urahara	110	Battle is not about brute strength. ItΓÇÖs about strategy, timing, and keeping your opponent guessing.	13
Urahara	111	If you let your guard down because your opponent is weak, you might not live to see your mistake	13
Urahara	112	ThereΓÇÖs no need for overconfidence. Even the smallest rock can shatter the strongest glass	13
Urahara	113	The one who can think two steps ahead wins. ThatΓÇÖs the essence of combat	13
Kakashi Hatake	139	Those who break the rules are scumΓÇª but those who abandon their friends are worse than scum	34
Kakashi Hatake	140	In society, those who donΓÇÖt have many abilities tend to complain more.	34
Kakashi Hatake	141	Forget about revenge. The fate of those who seek revenge is grim	34
Kakashi Hatake	142	You canΓÇÖt open up the mind to the future if youΓÇÖre stuck thinking about the past.	34
Kakashi Hatake	143	Sometimes, you must adapt to the situation rather than force it to go your way.	34
Kakashi Hatake	144	To know what is right and choose to ignore it is the act of a coward	34
Kakashi Hatake	145	ItΓÇÖs not the face that makes someone a monster; itΓÇÖs the choices they make with their lives	34
Kakashi Hatake	146	When people get hurt, they learn to hate. When people hurt others, they become hated and are tormented by guilt. But knowing that pain allows people to be kind	34
Kakashi Hatake	147	The next generation will always surpass the previous one. ItΓÇÖs one of the never-ending cycles in life	34
Kakashi Hatake	148	As long as you donΓÇÖt give up, you can still be saved.	34
Kakashi Hatake	149	When youΓÇÖre protecting something truly precious, you truly can become as strong as you need to be.	34
Kakashi Hatake	150	Teamwork means trusting your comrades and letting them trust you.	34
Kakashi Hatake	151	The people I care about are always targeted first. ThatΓÇÖs why I fight with everything I have to protect them	34
Kakashi Hatake	152	Even if everyone I care about dies, as long as I protect their memory, theyΓÇÖll never truly be gone	34
Kakashi Hatake	153	ItΓÇÖs okay to cry sometimes. ItΓÇÖs proof that your heart still feels.	34
Kakashi Hatake	154	No matter how hard you try, you canΓÇÖt erase the past. But you can learn from it.	34
Kakashi Hatake	155	Living with guilt isnΓÇÖt easy, but itΓÇÖs better than running from it	34
Kakashi Hatake	156	IΓÇÖve seen enough war to know that peace is fragile. But itΓÇÖs worth protecting	34
Kakashi Hatake	157	Sometimes, the best way to help is to step aside and let the next generation lead	34
Kakashi Hatake	158	The world will always need heroes, but the kind who know when not to fight	34
Kakashi Hatake	159	When you get older, you realizeΓÇª strength alone doesnΓÇÖt make you wise	34
Orochimaru	160	ItΓÇÖs human nature not to realize the true value of something unless they lose it	35
Orochimaru	161	There probably isnΓÇÖt any meaning in life. Perhaps you can find something interesting to do while youΓÇÖre alive	35
Orochimaru	162	The desire to know everythingΓÇª that is the essence of being human	35
Orochimaru	163	True power is not willpower, but the ability to change	35
Orochimaru	164	Knowledge and understanding are the ultimate weapons.	35
Orochimaru	165	People change. But itΓÇÖs the craving for knowledge that never fades.	35
Orochimaru	166	Those who cannot change themselves cannot change anything.	35
Orochimaru	167	Every experiment teaches me something new ΓÇö even failure is a form of progress.	35
Orochimaru	168	You canΓÇÖt gain anything new without losing something first	35
Orochimaru	169	No matter how hard humans try to be righteous, theyΓÇÖll always crave power.	35
Orochimaru	170	IΓÇÖve seen what happens when emotions control a person ΓÇö chaos.	35
Orochimaru	171	The world rejects those who are different. I just stopped caring about their rejection.	35
Orochimaru	172	Power is not evil in itself. How you use it determines everything.	35
Orochimaru	173	A snake that cannot shed its skin will die.	35
Orochimaru	174	Even pain can be a teacher ΓÇö if you listen	35
Orochimaru	175	Perhaps immortality isnΓÇÖt about living forever, but being remembered through those who succeed you.	35
Orochimaru	176	Children are the vessels of the future. ItΓÇÖs our duty to guide them, not to control them.	35
Orochimaru	177	Even snakes can grow old and shed their hatred	35
Orochimaru	178	You canΓÇÖt rewrite the past, but you can change how the story continues.	35
Orochimaru	179	Those who seek perfection must embrace imperfection first.	35
Edward Elrich	180	A lesson without pain is meaningless. ThatΓÇÖs because you canΓÇÖt gain something without sacrificing something in return.	36
Edward Elrich	181	Humankind cannot gain anything without first giving something in return. To obtain, something of equal value must be lost.	36
Edward Elrich	182	Alchemy is the science of understanding, deconstructing, and reconstructing matter. But even it canΓÇÖt fix a broken heart.	36
Edward Elrich	183	ThereΓÇÖs no such thing as a painless lesson. They just donΓÇÖt exist	36
Edward Elrich	184	The world isnΓÇÖt perfect, but itΓÇÖs there for us trying the best it canΓÇª thatΓÇÖs what makes it so beautiful.	36
Edward Elrich	185	We canΓÇÖt ask for someone else to forgive us. We have to forgive ourselves	36
Edward Elrich	186	The laws of equivalent exchange arenΓÇÖt about gain and loss. TheyΓÇÖre about understanding what truly matters.	36
Edward Elrich	187	The more you know, the more you realize how much you donΓÇÖt.	36
Edward Elrich	188	Even when our eyes are closed, thereΓÇÖs a whole world out there that lives outside ourselves and our dreams.	36
Edward Elrich	189	No matter how hopeless things seem, theyΓÇÖre never truly hopeless.	36
Edward Elrich	190	Giving up is worse than failing	36
Edward Elrich	191	A king without his people is no king at all	36
Edward Elrich	192	Stand up and walk. Keep moving forward. YouΓÇÖve got two good legs, so get up and use them.	36
Edward Elrich	193	YouΓÇÖve got to figure out how much youΓÇÖre willing to risk for the thing you want most	36
Edward Elrich	194	No matter how cruel the world may be, weΓÇÖll fight to make it better	36
Edward Elrich	195	Family isnΓÇÖt blood ΓÇö itΓÇÖs the people who stand by you no matter what	36
Edward Elrich	196	When you care about someone, you protect them. ThatΓÇÖs all there is to it	36
Edward Elrich	197	Who even decides whatΓÇÖs right and wrong?	36
Edward Elrich	198	If you want to play god, you better be ready to face the consequences.	36
Edward Elrich	199	The world runs on cause and effect ΓÇö but people can still choose how they act.	36
Edward Elrich	200	No matter how much knowledge you have, itΓÇÖs meaningless if you donΓÇÖt use it to help others	36
Edward Elrich	201	To deny our limits is to deny our humanity.	36
Edward Elrich	202	The moment you stop questioning your actions is when you become a monster.	36
Edward Elrich	203	If you canΓÇÖt make the world better, then at least donΓÇÖt make it worse	36
Scar	204	The path of revenge only leads to more revenge. My brother wished for a world to flow in a positive direction, not a violent cycle	38
Alphonse Elrich	205	Even when our eyes are closed, thereΓÇÖs a whole world out there that lives outside ourselves and our dreams.	37
Alphonse Elrich	206	Just because youΓÇÖre born of flesh and blood doesnΓÇÖt mean youΓÇÖre human	37
Alphonse Elrich	207	No fair sky stays cloudless forever. But even so, that doesnΓÇÖt mean we should stop looking up at it	37
Alphonse Elrich	208	No matter how much we lose, we have to keep moving forward	37
Alphonse Elrich	209	We have to be the ones to make the future, not let others decide it for us	37
Alphonse Elrich	210	I think thatΓÇÖs what the Truth is ΓÇö the world itself. Even if we donΓÇÖt understand it, itΓÇÖs always there	37
Alphonse Elrich	211	The real lesson is that thereΓÇÖs no easy way out. The only way forward is to keep trying	37
Roy Mustang	212	However little strength I'm capable of, I'll do everything humanly possible to protect the people I love, and in turn, they will protect the ones they love. It seems like the least we tiny humans can do for each other.	39
Roy Mustang	213	If you believe the possibility exists, then you have a duty to see it through.	39
Roy Mustang	214	A lesson without pain is meaningless. ThatΓÇÖs why IΓÇÖm willing to burn for the things I believe in	39
Roy Mustang	215	If the ways of this world are crooked, IΓÇÖll straighten them out with my own hands.	39
Roy Mustang	216	I donΓÇÖt think IΓÇÖm a hero. I just refuse to let the people I care about get hurt.	39
Roy Mustang	217	A good soldier isnΓÇÖt loyal to his country. HeΓÇÖs loyal to the people who believe in him	39
Roy Mustang	218	When thereΓÇÖs gold to be found, men dig for it. When thereΓÇÖs power to be seized, men fight for it. Human nature is ugly ΓÇö but itΓÇÖs predictable.	39
Roy Mustang	219	In this world, evil men are the first to be caught by their own traps	39
Roy Mustang	220	There are times when we must stand firm, even if it means standing alone	39
Roy Mustang	221	DonΓÇÖt chase after glory, chase after purpose.	39
Roy Mustang	222	You see, I prefer to be the flame that lights the path forwardΓÇª not the fire that burns everything down.	39
Van Hohenheim	223	A life that is lived without regret is a life worth living	40
Van Hohenheim	224	We live, we learn, we struggle, we fail. ThatΓÇÖs what makes us human.	40
Van Hohenheim	225	Even after all these years, IΓÇÖm still learning what it means to be alive.	40
Van Hohenheim	226	IΓÇÖve met many people in my long life, and IΓÇÖve watched them all die. ThatΓÇÖs what makes me envy the living.	40
Van Hohenheim	227	No one is born into this world to be alone.	40
Van Hohenheim	228	To live is to choose. And every choice comes with its own price.	40
Van Hohenheim	229	For all my years and all my knowledge, I still feel like a fool before the vastness of the world.	40
Van Hohenheim	230	Even a body made of immortal stone will crumble when it loses its purpose.	40
Van Hohenheim	231	You canΓÇÖt reach perfection by avoiding mistakes. You reach it by understanding them.	40
Shinji Ikari	232	Maybe I can learn to love myself. Maybe itΓÇÖs okay to be me.	41
Shinji Ikari	233	ItΓÇÖs okay for me to be here. ItΓÇÖs okay for me to exist	41
Shinji Ikari	234	Even if IΓÇÖm not needed, even if IΓÇÖm hatedΓÇª I still want to be here.	41
Shinji Ikari	235	I mustnΓÇÖt run awayΓÇª I mustnΓÇÖt run away	41
Iroh	236	It is important to draw wisdom from many different places. If you take it from only one place, it becomes rigid and stale.	42
Iroh	237	Sometimes life is like this dark tunnel. You canΓÇÖt always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place	42
Iroh	238	In the darkest times, hope is something you give yourself. That is the meaning of inner strength	42
Iroh	239	Life happens wherever you are, whether you make it or not	42
Iroh	240	Destiny is a funny thing. You never know how things are going to work out	42
Iroh	241	Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.	42
Iroh	242	Failure is only the opportunity to begin again, only this time more wisely	42
Iroh	243	While it is always best to believe in oneself, a little help from others can be a great blessing	42
Iroh	244	You must never give in to despair. Allow yourself to slip down that road and you surrender to your lowest instincts.	42
Iroh	245	Sharing tea with a fascinating stranger is one of lifeΓÇÖs true delights	42
Iroh	246	Perfection and power are overrated. I think you are very wise to choose happiness and love	42
Iroh	247	Good times become good memories, but bad times make good lessons	42
Iroh	248	Many things that seem threatening in the dark become welcoming when we shine light on them	42
Iroh	249	Sometimes the best way to solve your own problems is to help someone else	42
Iroh	250	You have light and peace inside of you. If you let it out, you can change the world around you	42
Iroh	251	There is nothing wrong with a life of peace and prosperity. I suggest you think about what it is that you want from your life	42
Iroh	252	It is time for you to look inward and start asking yourself the big questions: Who are you? And what do you want?	42
Iroh	253	You are not the man you used to be. You are stronger, wiser, and freer than ever	42
Iroh	254	You will find, once you let go of your attachment to who you think you are, you can be free to become who you truly are	42
Iroh	255	Sometimes we must let go of what we think life should be and accept it for what it is	42
Guru Pathik	256	You must let go of your attachment to the things that hold you back	43
Guru Pathik	258	Allow your emotions to flow like water ΓÇö do not let them become a dam that blocks your energy.	43
Guru Pathik	259	Fear is the energy that blocks the root chakra ΓÇö the center of survival. You must accept your fears and let them go.	43
Guru Pathik	260	Do not let guilt or shame cloud your mind. Forgive yourself and allow the energy to flow freely again.	43
Guru Pathik	261	When we let go of our fear, we free ourselves from the chains that hold us back	43
Guru Pathik	262	Love is the source of all energy in the universe. But when you cling to it, you lose sight of what it truly is.	43
Guru Pathik	263	Let your love flow freely, without attachment. Only then can it become boundless	43
Lelouch vi Britannia	264	If the king doesnΓÇÖt move, then his subjects wonΓÇÖt follow	44
Lelouch vi Britannia	265	The only ones who should kill are those who are prepared to be killed	44
Lelouch vi Britannia	266	A life without change is death	44
Lelouch vi Britannia	267	You canΓÇÖt change the world without getting your hands dirty.	44
Lelouch vi Britannia	268	You canΓÇÖt win a war just by being right.	44
Lelouch vi Britannia	269	The world is not black and white ΓÇö itΓÇÖs a battlefield of conflicting truths	44
Lelouch vi Britannia	270	I have to keep on living, even if it means I canΓÇÖt be with the ones I love.	44
Lelouch vi Britannia	271	I was prepared to be hated, because thatΓÇÖs what it takes to change the world	44
Lelouch vi Britannia	272	You canΓÇÖt change the past. You can only accept it... and move on	44
Lelouch vi Britannia	273	I rebel not because I hate the world, but because I want to believe in it	44
Lelouch vi Britannia	274	You canΓÇÖt change the world without sacrifice	44
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

SELECT pg_catalog.setval('public.admins_id_seq', 1, true);


--
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rich
--

SELECT pg_catalog.setval('public.characters_id_seq', 44, true);


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

SELECT pg_catalog.setval('public.quotes_id_seq', 274, true);


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


