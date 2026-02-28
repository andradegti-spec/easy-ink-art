
-- Tabela para rastrear eventos do site
CREATE TABLE public.site_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL, -- 'page_view', 'click_basic', 'click_upsell', 'click_premium'
  page_url TEXT,
  user_agent TEXT,
  ip_hash TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- RLS habilitado mas com política pública para INSERT (tracking anônimo)
ALTER TABLE public.site_events ENABLE ROW LEVEL SECURITY;

-- Permitir inserção anônima (tracking)
CREATE POLICY "Anyone can insert events"
ON public.site_events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Apenas leitura com senha do dashboard (vamos controlar no app)
CREATE POLICY "Anyone can read events"
ON public.site_events
FOR SELECT
TO anon, authenticated
USING (true);

-- Permitir delete para zerar dados
CREATE POLICY "Anyone can delete events"
ON public.site_events
FOR DELETE
TO anon, authenticated
USING (true);
