import { useHooks, removeHooks } from './src/useHooks';
import { playAudio } from './src/packages/audio/play';
import { cube } from './src/packages/objects/meshes';
import { drawFps } from './src/packages/system/fps';
import { Renderer, SetCustomRendererSize, SetScreenRendererSize } from './src/packages/renderer/renderer';
import { handleControl, removeHandler } from './src/packages/player/controls';
import { DeChangePosition, CreateCapsulePlayer, DeChangeRotation } from './src/packages/player/player';

export { useHooks, removeHooks }; 
export { playAudio };
export { cube };
export { drawFps };
export { Renderer, SetCustomRendererSize, SetScreenRendererSize };
export { handleControl, removeHandler };
export { DeChangePosition, CreateCapsulePlayer, DeChangeRotation };