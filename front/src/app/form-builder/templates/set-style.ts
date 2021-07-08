import {ItemData, Styles} from "../form-builder.component";

export abstract class SetStyle {
  abstract data : ItemData;

  public setStyles(): Styles {
    const { styles } = this.data;
    return {
      ...styles,
      width : styles.width + styles.widthUnit,
      height : styles.height + styles.heightUnit
    }
  }
}
