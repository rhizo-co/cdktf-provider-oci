// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardCloudGuardConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration#compartment_id DataOciCloudGuardCloudGuardConfiguration#compartment_id}
  */
  readonly compartmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration oci_cloud_guard_cloud_guard_configuration}
*/
export class DataOciCloudGuardCloudGuardConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_cloud_guard_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_cloud_guard_configuration oci_cloud_guard_cloud_guard_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardCloudGuardConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardCloudGuardConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_cloud_guard_configuration',
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
    this._compartmentId = config.compartmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // reporting_region - computed: true, optional: false, required: false
  public get reportingRegion() {
    return this.getStringAttribute('reporting_region');
  }

  // self_manage_resources - computed: true, optional: false, required: false
  public get selfManageResources() {
    return this.getBooleanAttribute('self_manage_resources');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
    };
  }
}
