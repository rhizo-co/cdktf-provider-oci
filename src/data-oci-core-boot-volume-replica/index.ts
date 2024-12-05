// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreBootVolumeReplicaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#boot_volume_replica_id DataOciCoreBootVolumeReplica#boot_volume_replica_id}
  */
  readonly bootVolumeReplicaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica#id DataOciCoreBootVolumeReplica#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica oci_core_boot_volume_replica}
*/
export class DataOciCoreBootVolumeReplica extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_boot_volume_replica";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replica oci_core_boot_volume_replica} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreBootVolumeReplicaConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreBootVolumeReplicaConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_boot_volume_replica',
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
    this._bootVolumeReplicaId = config.bootVolumeReplicaId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // boot_volume_replica_id - computed: false, optional: false, required: true
  private _bootVolumeReplicaId?: string; 
  public get bootVolumeReplicaId() {
    return this.getStringAttribute('boot_volume_replica_id');
  }
  public set bootVolumeReplicaId(value: string) {
    this._bootVolumeReplicaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeReplicaIdInput() {
    return this._bootVolumeReplicaId;
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // size_in_gbs - computed: true, optional: false, required: false
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_synced - computed: true, optional: false, required: false
  public get timeLastSynced() {
    return this.getStringAttribute('time_last_synced');
  }

  // volume_group_replica_id - computed: true, optional: false, required: false
  public get volumeGroupReplicaId() {
    return this.getStringAttribute('volume_group_replica_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_volume_replica_id: cdktf.stringToTerraform(this._bootVolumeReplicaId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
