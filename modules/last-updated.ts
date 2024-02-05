import { readdirSync, writeFileSync } from 'fs';
import { parse } from 'path';
import { promisify } from 'util';
import { exec as nodeExec } from 'child_process';

import { createResolver, defineNuxtModule } from '@nuxt/kit';

const exec = promisify(nodeExec);
const GIT_CMD = 'git log -n 1 --format=%ad --date=format:%Y-%m-%dT%H:%M:%S -- ';

export default defineNuxtModule({
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const contentPath = resolve('../content/recipes');
    const fileDates: Record<string, string> = {};

    try {
      const files = readdirSync(contentPath);

      await Promise.all(
        files.map(async (filename) => {
          const fileName = parse(filename).name;
          const filePath = contentPath + '/' + filename;

          const { stdout } = await exec(GIT_CMD + filePath);
          const lastUpdate = stdout.trim();

          console.log(fileName, lastUpdate);
          fileDates[fileName] = lastUpdate;
        })
      );
    } catch (error) {
      console.error('Error reading directory:', error);
    }

    console.log('\nfileDates', fileDates);

    const outputPath = `${nuxt.options.srcDir}/lastUpdated.json`;

    try {
      writeFileSync(outputPath, JSON.stringify(fileDates, null, 2));
      console.log('Last edit dates saved to lastUpdated.json');
    } catch (error) {
      console.error('Error saving last edit dates to file:', error);
    }
  },
});
