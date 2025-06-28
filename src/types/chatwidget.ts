export interface ChatWidgetProps {
    primaryColor?: string;
    isUnderMaintenance?: boolean;
    isOnline?: boolean;
    variant?: "bubble" | "drawer";
    icon?: string | null;
    apiKey: string;
};