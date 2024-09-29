const fs = require('fs');
const UnlinkFiles = async (filesToDelete) => {
    if (filesToDelete.length <= 0) {
        return false
    }
    filesToDelete.map(item => {
        fs.unlink(item, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return;
            }
            console.log('File deleted successfully');
        });
    })
}
module.exports = UnlinkFiles