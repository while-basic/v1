const { exec } = require('child_process');
const { promisify } = require('util');
const { readdir } = require('fs/promises');
const { join } = require('path');

const execAsync = promisify(exec);

async function convertWavToMp3() {
  // Go up three levels from scripts to the web directory's public/music folder
  const musicDir = join(__dirname, '..', 'public', 'music');
  
  try {
    // Get all WAV files in the music directory
    const files = await readdir(musicDir);
    const wavFiles = files.filter((file: string) => file.endsWith('.wav'));
    
    console.log(`Found ${wavFiles.length} WAV files to convert`);
    
    for (const wavFile of wavFiles) {
      const mp3File = wavFile.replace('.wav', '.mp3');
      const wavPath = join(musicDir, wavFile);
      const mp3Path = join(musicDir, mp3File);
      
      console.log(`Converting ${wavFile} to MP3...`);
      
      try {
        // Convert WAV to MP3 using FFmpeg with good quality settings
        await execAsync(`ffmpeg -i "${wavPath}" -codec:a libmp3lame -qscale:a 2 "${mp3Path}"`);
        console.log(`Successfully converted ${wavFile} to MP3`);
      } catch (error) {
        console.error(`Error converting ${wavFile}:`, error);
      }
    }
    
    console.log('Conversion complete!');
  } catch (error) {
    console.error('Error reading music directory:', error);
  }
}

// Run the conversion
convertWavToMp3(); 