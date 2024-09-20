declare module "obsidian" {
    interface WorkspaceLeaf {
        personImageCreated?: boolean;
    }


    interface View {
        file?: TAbstractFile;
        contentEl: HTMLElement;
    }
}

export {};
