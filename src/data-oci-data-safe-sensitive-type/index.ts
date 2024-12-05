// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSensitiveTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_type#sensitive_type_id DataOciDataSafeSensitiveType#sensitive_type_id}
  */
  readonly sensitiveTypeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_type oci_data_safe_sensitive_type}
*/
export class DataOciDataSafeSensitiveType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_type oci_data_safe_sensitive_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSensitiveTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSensitiveTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_type',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sensitiveTypeId = config.sensitiveTypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment_pattern - computed: true, optional: false, required: false
  public get commentPattern() {
    return this.getStringAttribute('comment_pattern');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_pattern - computed: true, optional: false, required: false
  public get dataPattern() {
    return this.getStringAttribute('data_pattern');
  }

  // default_masking_format_id - computed: true, optional: false, required: false
  public get defaultMaskingFormatId() {
    return this.getStringAttribute('default_masking_format_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_common - computed: true, optional: false, required: false
  public get isCommon() {
    return this.getBooleanAttribute('is_common');
  }

  // name_pattern - computed: true, optional: false, required: false
  public get namePattern() {
    return this.getStringAttribute('name_pattern');
  }

  // parent_category_id - computed: true, optional: false, required: false
  public get parentCategoryId() {
    return this.getStringAttribute('parent_category_id');
  }

  // search_type - computed: true, optional: false, required: false
  public get searchType() {
    return this.getStringAttribute('search_type');
  }

  // sensitive_type_id - computed: false, optional: false, required: true
  private _sensitiveTypeId?: string; 
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
  public set sensitiveTypeId(value: string) {
    this._sensitiveTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdInput() {
    return this._sensitiveTypeId;
  }

  // short_name - computed: true, optional: false, required: false
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sensitive_type_id: cdktf.stringToTerraform(this._sensitiveTypeId),
    };
  }
}
