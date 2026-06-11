// Script de dump ponctuel : exporte tout le contenu Supabase en JSON
// avant la migration vers les fichiers content/. À usage unique.
import { createClient } from '@supabase/supabase-js';
import { writeFileSync, readFileSync } from 'node:fs';

const env = Object.fromEntries(
  readFileSync('.env', 'utf8')
    .split('\n')
    .filter((l) => l.includes('='))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

const tables = [
  'site_config',
  'navigation',
  'hero_section',
  'methodologie',
  'methodologie_blocs',
  'section_titres',
  'contact_info',
  'ui_texts',
  'skills_tags',
  'experiences',
  'experience_content_blocks',
  'key_figures',
];

const dump = {};
for (const table of tables) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) {
    console.error(`✗ ${table}: ${error.message}`);
    dump[table] = { error: error.message };
  } else {
    console.log(`✓ ${table}: ${data.length} lignes`);
    dump[table] = data;
  }
}

writeFileSync('scripts/supabase-dump.json', JSON.stringify(dump, null, 2));
console.log('\nDump écrit dans scripts/supabase-dump.json');
