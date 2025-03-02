import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import { promises as fs } from 'fs';
import path from 'path';

const optimizeImages = async () => {
  try {
    // Create optimized directory if it doesn't exist
    const optimizedDir = path.join(process.cwd(), 'public', 'images-optimized');
    await fs.mkdir(optimizedDir, { recursive: true });

    // Optimize JPG images
    await imagemin(['public/images/*.jpg'], {
      destination: optimizedDir,
      plugins: [
        imageminJpegtran({
          quality: 80,
          progressive: true
        })
      ]
    });

    // Optimize PNG images (except logo)
    const pngFiles = (await fs.readdir('public/images'))
      .filter(file => file.endsWith('.png') && file !== 'logo.png')
      .map(file => `public/images/${file}`);

    if (pngFiles.length > 0) {
      await imagemin(pngFiles, {
        destination: optimizedDir,
        plugins: [
          imageminPngquant({
            quality: [0.6, 0.8]
          })
        ]
      });
    }

    // Copy logo.png as is
    await fs.copyFile(
      path.join(process.cwd(), 'public', 'images', 'logo.png'),
      path.join(optimizedDir, 'logo.png')
    );

    console.log('✨ Images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
};

optimizeImages();
