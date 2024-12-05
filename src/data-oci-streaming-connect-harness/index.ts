// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harness
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStreamingConnectHarnessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harness#connect_harness_id DataOciStreamingConnectHarness#connect_harness_id}
  */
  readonly connectHarnessId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harness oci_streaming_connect_harness}
*/
export class DataOciStreamingConnectHarness extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_streaming_connect_harness";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harness oci_streaming_connect_harness} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStreamingConnectHarnessConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStreamingConnectHarnessConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_streaming_connect_harness',
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
    this._connectHarnessId = config.connectHarnessId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connect_harness_id - computed: false, optional: false, required: true
  private _connectHarnessId?: string; 
  public get connectHarnessId() {
    return this.getStringAttribute('connect_harness_id');
  }
  public set connectHarnessId(value: string) {
    this._connectHarnessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectHarnessIdInput() {
    return this._connectHarnessId;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_harness_id: cdktf.stringToTerraform(this._connectHarnessId),
    };
  }
}
