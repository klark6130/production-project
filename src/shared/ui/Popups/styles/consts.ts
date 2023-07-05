import { DropdownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionsClass: Record<DropdownDirection, string> = {
  'top left': cls.optionsTopLeft,
  'bottom left': cls.optionsBottomLeft,
  'top right': cls.optionsTopRight,
  'bottom right': cls.optionsBottomRight
}