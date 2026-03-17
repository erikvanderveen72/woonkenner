import { createClient } from '@supabase/supabase-js';
import {
  hypotheekAanbieders,
  woningmarktData,
  energielabels,
  verduurzamingsmaatregelen,
  huurprijsData,
  type HypotheekAanbieder,
  type WoningmarktData,
  type Energielabel,
  type VerduurzamingsMaatregel,
  type HuurprijsData,
} from './fallback-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export async function getHypotheekAanbieders(): Promise<HypotheekAanbieder[]> {
  if (!supabase) return hypotheekAanbieders;
  try {
    const { data, error } = await supabase.from('hypotheek_aanbieders').select('*').order('renteVast10', { ascending: true });
    if (error) { console.error('Error fetching hypotheek aanbieders:', error); return hypotheekAanbieders; }
    return data?.length > 0 ? data : hypotheekAanbieders;
  } catch { return hypotheekAanbieders; }
}

export async function getWoningmarktData(): Promise<WoningmarktData[]> {
  if (!supabase) return woningmarktData;
  try {
    const { data, error } = await supabase.from('woningmarkt').select('*').order('gemPrijs', { ascending: false });
    if (error) { console.error('Error fetching woningmarkt:', error); return woningmarktData; }
    return data?.length > 0 ? data : woningmarktData;
  } catch { return woningmarktData; }
}

export async function getEnergielabels(): Promise<Energielabel[]> {
  if (!supabase) return energielabels;
  try {
    const { data, error } = await supabase.from('energielabels').select('*');
    if (error) { console.error('Error fetching energielabels:', error); return energielabels; }
    return data?.length > 0 ? data : energielabels;
  } catch { return energielabels; }
}

export async function getVerduurzamingsmaatregelen(): Promise<VerduurzamingsMaatregel[]> {
  if (!supabase) return verduurzamingsmaatregelen;
  try {
    const { data, error } = await supabase.from('verduurzaming').select('*').order('terugverdientijd', { ascending: true });
    if (error) { console.error('Error fetching verduurzaming:', error); return verduurzamingsmaatregelen; }
    return data?.length > 0 ? data : verduurzamingsmaatregelen;
  } catch { return verduurzamingsmaatregelen; }
}

export async function getHuurprijsData(): Promise<HuurprijsData[]> {
  if (!supabase) return huurprijsData;
  try {
    const { data, error } = await supabase.from('huurprijzen').select('*').order('gemHuurAppartement', { ascending: false });
    if (error) { console.error('Error fetching huurprijzen:', error); return huurprijsData; }
    return data?.length > 0 ? data : huurprijsData;
  } catch { return huurprijsData; }
}
