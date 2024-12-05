// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_replication_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFileStorageReplicationTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_replication_target#id DataOciFileStorageReplicationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_replication_target#replication_target_id DataOciFileStorageReplicationTarget#replication_target_id}
  */
  readonly replicationTargetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_replication_target oci_file_storage_replication_target}
*/
export class DataOciFileStorageReplicationTarget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_file_storage_replication_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_replication_target oci_file_storage_replication_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFileStorageReplicationTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFileStorageReplicationTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_replication_target',
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
    this._id = config.id;
    this._replicationTargetId = config.replicationTargetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // delta_progress - computed: true, optional: false, required: false
  public get deltaProgress() {
    return this.getStringAttribute('delta_progress');
  }

  // delta_status - computed: true, optional: false, required: false
  public get deltaStatus() {
    return this.getStringAttribute('delta_status');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_snapshot_id - computed: true, optional: false, required: false
  public get lastSnapshotId() {
    return this.getStringAttribute('last_snapshot_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // recovery_point_time - computed: true, optional: false, required: false
  public get recoveryPointTime() {
    return this.getStringAttribute('recovery_point_time');
  }

  // replication_id - computed: true, optional: false, required: false
  public get replicationId() {
    return this.getStringAttribute('replication_id');
  }

  // replication_target_id - computed: false, optional: false, required: true
  private _replicationTargetId?: string; 
  public get replicationTargetId() {
    return this.getStringAttribute('replication_target_id');
  }
  public set replicationTargetId(value: string) {
    this._replicationTargetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTargetIdInput() {
    return this._replicationTargetId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
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
      id: cdktf.stringToTerraform(this._id),
      replication_target_id: cdktf.stringToTerraform(this._replicationTargetId),
    };
  }
}
