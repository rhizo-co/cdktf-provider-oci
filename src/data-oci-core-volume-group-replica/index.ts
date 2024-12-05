// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replica
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreVolumeGroupReplicaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replica#id DataOciCoreVolumeGroupReplica#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replica#volume_group_replica_id DataOciCoreVolumeGroupReplica#volume_group_replica_id}
  */
  readonly volumeGroupReplicaId: string;
}
export interface DataOciCoreVolumeGroupReplicaMemberReplicas {
}

export function dataOciCoreVolumeGroupReplicaMemberReplicasToTerraform(struct?: DataOciCoreVolumeGroupReplicaMemberReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCoreVolumeGroupReplicaMemberReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciCoreVolumeGroupReplicaMemberReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVolumeGroupReplicaMemberReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // membership_state - computed: true, optional: false, required: false
  public get membershipState() {
    return this.getStringAttribute('membership_state');
  }

  // volume_replica_id - computed: true, optional: false, required: false
  public get volumeReplicaId() {
    return this.getStringAttribute('volume_replica_id');
  }
}

export class DataOciCoreVolumeGroupReplicaMemberReplicasList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciCoreVolumeGroupReplicaMemberReplicasOutputReference {
    return new DataOciCoreVolumeGroupReplicaMemberReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replica oci_core_volume_group_replica}
*/
export class DataOciCoreVolumeGroupReplica extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_volume_group_replica";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_group_replica oci_core_volume_group_replica} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreVolumeGroupReplicaConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreVolumeGroupReplicaConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_group_replica',
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
    this._volumeGroupReplicaId = config.volumeGroupReplicaId;
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

  // member_replicas - computed: true, optional: false, required: false
  private _memberReplicas = new DataOciCoreVolumeGroupReplicaMemberReplicasList(this, "member_replicas", false);
  public get memberReplicas() {
    return this._memberReplicas;
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

  // volume_group_id - computed: true, optional: false, required: false
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }

  // volume_group_replica_id - computed: false, optional: false, required: true
  private _volumeGroupReplicaId?: string; 
  public get volumeGroupReplicaId() {
    return this.getStringAttribute('volume_group_replica_id');
  }
  public set volumeGroupReplicaId(value: string) {
    this._volumeGroupReplicaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupReplicaIdInput() {
    return this._volumeGroupReplicaId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      volume_group_replica_id: cdktf.stringToTerraform(this._volumeGroupReplicaId),
    };
  }
}
