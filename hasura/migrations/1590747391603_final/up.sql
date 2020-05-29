CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.audio_datas (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "fileUrl" text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "workId" uuid NOT NULL
);
CREATE TABLE public.comments (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "userId" text NOT NULL,
    "workId" uuid NOT NULL
);
CREATE TABLE public.favourites (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "userId" text NOT NULL,
    "workId" uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.followings (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "followerId" text NOT NULL,
    "followingId" text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.image_datas (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "fileUrl" text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "workId" uuid NOT NULL
);
CREATE TABLE public.likes (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "userId" text NOT NULL,
    "workId" uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.notifications (
    "userId" text NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL
);
CREATE TABLE public.progresses (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "userId" text NOT NULL,
    "workId" uuid NOT NULL,
    progress text DEFAULT 'Awaiting server response...'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "drivingVideoUrl" text NOT NULL,
    "resultUrl" text,
    "isProcessing" boolean DEFAULT false NOT NULL
);
CREATE TABLE public.reports (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    reason text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "userId" text NOT NULL,
    "workId" uuid NOT NULL
);
CREATE TABLE public.users (
    id text DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    "imageUrl" text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.works (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    visibility boolean NOT NULL,
    views integer DEFAULT 0 NOT NULL,
    usage integer DEFAULT 0 NOT NULL,
    "imageUrl" text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    "userId" text NOT NULL
);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT "User_id_key" UNIQUE (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.works
    ADD CONSTRAINT "Work_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.followings
    ADD CONSTRAINT followings_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.image_datas
    ADD CONSTRAINT image_datas_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_userId_workId_key" UNIQUE ("userId", "workId");
ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.progresses
    ADD CONSTRAINT progress_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.audio_datas
    ADD CONSTRAINT voice_datas_pkey PRIMARY KEY (id);
CREATE TRIGGER "set_public_User_updated_at" BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_User_updated_at" ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER "set_public_Work_updated_at" BEFORE UPDATE ON public.works FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_Work_updated_at" ON public.works IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_comments_updated_at BEFORE UPDATE ON public.comments FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comments_updated_at ON public.comments IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_followings_updated_at BEFORE UPDATE ON public.followings FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_followings_updated_at ON public.followings IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_image_datas_updated_at BEFORE UPDATE ON public.image_datas FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_image_datas_updated_at ON public.image_datas IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_notifications_updated_at BEFORE UPDATE ON public.notifications FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_notifications_updated_at ON public.notifications IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_progress_updated_at BEFORE UPDATE ON public.progresses FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_progress_updated_at ON public.progresses IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_reports_updated_at BEFORE UPDATE ON public.reports FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_reports_updated_at ON public.reports IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_voice_datas_updated_at BEFORE UPDATE ON public.audio_datas FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_voice_datas_updated_at ON public.audio_datas IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_user_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_work_fkey FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT "favourites_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT "favourites_workId_fkey" FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.followings
    ADD CONSTRAINT "followings_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.followings
    ADD CONSTRAINT "followings_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.image_datas
    ADD CONSTRAINT image_datas_work_fkey FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_workId_fkey" FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.progresses
    ADD CONSTRAINT "progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.progresses
    ADD CONSTRAINT "progress_workId_fkey" FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_user_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_work_fkey FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.audio_datas
    ADD CONSTRAINT voice_datas_work_fkey FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_user_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE SET NULL;
