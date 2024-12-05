// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLoggingLogSavedSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_search#log_saved_search_id DataOciLoggingLogSavedSearch#log_saved_search_id}
  */
  readonly logSavedSearchId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_search oci_logging_log_saved_search}
*/
export class DataOciLoggingLogSavedSearch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_logging_log_saved_search";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_log_saved_search oci_logging_log_saved_search} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLoggingLogSavedSearchConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLoggingLogSavedSearchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_logging_log_saved_search',
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
    this._logSavedSearchId = config.logSavedSearchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_saved_search_id - computed: false, optional: false, required: true
  private _logSavedSearchId?: string; 
  public get logSavedSearchId() {
    return this.getStringAttribute('log_saved_search_id');
  }
  public set logSavedSearchId(value: string) {
    this._logSavedSearchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSavedSearchIdInput() {
    return this._logSavedSearchId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_saved_search_id: cdktf.stringToTerraform(this._logSavedSearchId),
    };
  }
}
