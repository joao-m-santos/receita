import fs from 'fs';
import { promisify } from 'util';
import { exec as nodeExec } from 'child_process';
import { createResolver, defineNuxtModule } from '@nuxt/kit';

const exec = promisify(nodeExec);
const GIT_CMD = 'git log -n 1 --format=%ad --date=format:%Y-%m-%dT%H:%M:%S -- ';

export default defineNuxtModule({
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const contentPath = resolve('../content/recipes');

    try {
      // Read the contents of the directory
      const files = fs.readdirSync(contentPath);

      // Print or process each filename
      files.forEach(async (filename) => {
        const filePath = contentPath + '/' + filename;

        console.log('GIT_CMD + filePath', GIT_CMD + filePath);
        const { stdout } = await exec(GIT_CMD + filePath);
        console.log('stdout:', stdout, stdout.length);
        // You can perform additional processing or store the filenames as needed
      });
    } catch (error) {
      console.error(`Error reading directory: ${error.message}`);
    }
  },
});
