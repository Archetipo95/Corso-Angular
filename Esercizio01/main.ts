import { LikeComponent } from './like.components';

let component = new LikeComponent(10, true);

component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);

// compile with: tsc main.ts --target ES5