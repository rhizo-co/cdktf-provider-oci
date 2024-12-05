// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudMigrationsReplicationScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedule#replication_schedule_id DataOciCloudMigrationsReplicationSchedule#replication_schedule_id}
  */
  readonly replicationScheduleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedule oci_cloud_migrations_replication_schedule}
*/
export class DataOciCloudMigrationsReplicationSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_replication_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedule oci_cloud_migrations_replication_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudMigrationsReplicationScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudMigrationsReplicationScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_replication_schedule',
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
    this._replicationScheduleId = config.replicationScheduleId;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // execution_recurrences - computed: true, optional: false, required: false
  public get executionRecurrences() {
    return this.getStringAttribute('execution_recurrences');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // replication_schedule_id - computed: false, optional: false, required: true
  private _replicationScheduleId?: string; 
  public get replicationScheduleId() {
    return this.getStringAttribute('replication_schedule_id');
  }
  public set replicationScheduleId(value: string) {
    this._replicationScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationScheduleIdInput() {
    return this._replicationScheduleId;
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
      replication_schedule_id: cdktf.stringToTerraform(this._replicationScheduleId),
    };
  }
}
