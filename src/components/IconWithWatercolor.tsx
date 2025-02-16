
import { LucideIcon } from "lucide-react";

interface IconWithWatercolorProps {
  Icon: LucideIcon;
  watercolorSrc: string;
  size?: number;
}

const IconWithWatercolor = ({ Icon, watercolorSrc, size = 48 }: IconWithWatercolorProps) => {
  return (
    <div className="relative w-12 h-12">
      <img 
        src={watercolorSrc} 
        alt="watercolor background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Icon 
        className="relative z-10" 
        size={size} 
        stroke="#000000" 
        strokeWidth={1.5}
      />
    </div>
  );
};

export default IconWithWatercolor;
