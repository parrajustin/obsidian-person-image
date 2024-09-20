import { addIcon, MarkdownPostProcessorContext, Plugin, TFile } from "obsidian"

/** Plugin to add an image for user profiles. */
export default class PersonImagePlugin extends Plugin {

    public async onload(): Promise<void> {
        this.registerMarkdownPostProcessor((el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
            const isFrontmatter = el.querySelector('.frontmatter') !== null;
            if (!isFrontmatter) {
                return;
            }
            const hasProfileImage = ctx.frontmatter["Profile Picture"] !== undefined;
            if (!hasProfileImage) {
                return;
            }
            const container = el.createDiv("Person-Image");
            container.style.height = "150px";
            container.style.width = "150px";
            container.style.backgroundColor = "pink";

            const image = container.createEl("img");
            image.style.height = "150px";
            image.style.width = "150px";
            image.src = ctx.frontmatter["Profile Picture"];
            console.log("Person-Image", isFrontmatter, el, ctx, ctx.getSectionInfo(el));
        });
    }
}
