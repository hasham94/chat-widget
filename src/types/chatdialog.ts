export interface ChatDialogProps {
    onClose: () => void;
    isUnderMaintenance: boolean;
    isOnline: boolean;
    isDrawer?: boolean;
    apiKey: string;
};

export interface MessageI {
    sender: string;
    text: string;
}