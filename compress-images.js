/**
 * compress-images.js
 * ---------------------------------------------------------
 * Compresse et redimensionne toutes les images du dossier /public
 * SANS changer leur nom ni leur extension (aucune modification du
 * code React n'est donc nécessaire après exécution).
 *
 * UTILISATION :
 *   1. npm install sharp --save-dev
 *   2. node compress-images.js
 *
 * Le script :
 *   - redimensionne toute image de plus de 1920px de large (max
 *     raisonnable pour un affichage plein écran) à 1920px de large,
 *     en conservant les proportions
 *   - recompresse en qualité 80 (jpg/jpeg) ou niveau 9 (png), un
 *     excellent compromis qualité/poids, imperceptible à l'œil nu
 *   - écrase le fichier original avec la version optimisée
 *
 * ⚠️ Fais une copie de sauvegarde du dossier /public avant de lancer
 * le script si tu veux pouvoir revenir en arrière facilement.
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const MAX_WIDTH = 1920;
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

async function compressImage(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const ext = path.extname(filePath).toLowerCase();

  const image = sharp(filePath);
  const metadata = await image.metadata();

  let pipeline = sharp(filePath);

  // Redimensionner seulement si l'image est plus large que MAX_WIDTH
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH });
  }

  // Compression adaptée au format, en conservant l'extension d'origine
  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, quality: 80 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: 80 });
  }

  const buffer = await pipeline.toBuffer();
  fs.writeFileSync(filePath, buffer);

  const newSize = fs.statSync(filePath).size;
  const savedPercent = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

  console.log(
    `✔ ${path.basename(filePath)} : ${(originalSize / 1024 / 1024).toFixed(2)} Mo → ${(
      newSize /
      1024 /
      1024
    ).toFixed(2)} Mo (-${savedPercent}%)`
  );
}

async function run() {
  const files = fs
    .readdirSync(PUBLIC_DIR)
    .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()));

  console.log(`${files.length} image(s) trouvée(s) dans /public. Compression en cours...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(PUBLIC_DIR, file);
    totalBefore += fs.statSync(filePath).size;
    try {
      await compressImage(filePath);
    } catch (err) {
      console.error(`✘ Erreur sur ${file} :`, err.message);
    }
    totalAfter += fs.statSync(filePath).size;
  }

  console.log(
    `\nTerminé ! Poids total : ${(totalBefore / 1024 / 1024).toFixed(2)} Mo → ${(
      totalAfter /
      1024 /
      1024
    ).toFixed(2)} Mo`
  );
}

run();
