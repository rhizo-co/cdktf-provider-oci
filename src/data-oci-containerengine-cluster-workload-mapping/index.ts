// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciContainerengineClusterWorkloadMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping#cluster_id DataOciContainerengineClusterWorkloadMapping#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping#workload_mapping_id DataOciContainerengineClusterWorkloadMapping#workload_mapping_id}
  */
  readonly workloadMappingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping oci_containerengine_cluster_workload_mapping}
*/
export class DataOciContainerengineClusterWorkloadMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_cluster_workload_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping oci_containerengine_cluster_workload_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciContainerengineClusterWorkloadMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciContainerengineClusterWorkloadMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster_workload_mapping',
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
    this._clusterId = config.clusterId;
    this._workloadMappingId = config.workloadMappingId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // mapped_compartment_id - computed: true, optional: false, required: false
  public get mappedCompartmentId() {
    return this.getStringAttribute('mapped_compartment_id');
  }

  // mapped_tenancy_id - computed: true, optional: false, required: false
  public get mappedTenancyId() {
    return this.getStringAttribute('mapped_tenancy_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // workload_mapping_id - computed: false, optional: false, required: true
  private _workloadMappingId?: string; 
  public get workloadMappingId() {
    return this.getStringAttribute('workload_mapping_id');
  }
  public set workloadMappingId(value: string) {
    this._workloadMappingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMappingIdInput() {
    return this._workloadMappingId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      workload_mapping_id: cdktf.stringToTerraform(this._workloadMappingId),
    };
  }
}
