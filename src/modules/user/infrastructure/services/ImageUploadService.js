const fs = require("fs");
const path = require("path");

class ImageUploadService {
  /**
   * Valide le fichier uploadé.
   * @param {Object} file - Le fichier uploadé.
   */
  static validateImage(file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
      throw new Error(
        "Invalid file type. Only JPEG, PNG, and GIF are allowed."
      );
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5MB max
      throw new Error("File size exceeds the maximum limit of 5MB.");
    }
  }

  /**
   * Supprime un fichier existant.
   * @param {string} filename - Nom du fichier à supprimer.
   */
  static deleteImage(filename) {
    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, "../../../uploads", filename);
      fs.unlink(filePath, (err) => {
        if (err) {
          return reject(new Error("Failed to delete the image."));
        }
        resolve();
      });
    });
  }
}

module.exports = ImageUploadService;
