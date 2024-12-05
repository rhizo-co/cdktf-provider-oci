// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}
  */
  readonly resourcePrincipalConfigurationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration}
*/
export class DataOciBdsBdsInstanceResourcePrincipalConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_resource_principal_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_resource_principal_configuration',
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
    this._bdsInstanceId = config.bdsInstanceId;
    this._resourcePrincipalConfigurationId = config.resourcePrincipalConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: true, optional: false, required: false
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // force_refresh_resource_principal_trigger - computed: true, optional: false, required: false
  public get forceRefreshResourcePrincipalTrigger() {
    return this.getNumberAttribute('force_refresh_resource_principal_trigger');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_principal_configuration_id - computed: false, optional: false, required: true
  private _resourcePrincipalConfigurationId?: string; 
  public get resourcePrincipalConfigurationId() {
    return this.getStringAttribute('resource_principal_configuration_id');
  }
  public set resourcePrincipalConfigurationId(value: string) {
    this._resourcePrincipalConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePrincipalConfigurationIdInput() {
    return this._resourcePrincipalConfigurationId;
  }

  // session_token_life_span_duration_in_hours - computed: true, optional: false, required: false
  public get sessionTokenLifeSpanDurationInHours() {
    return this.getNumberAttribute('session_token_life_span_duration_in_hours');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_token_expiry - computed: true, optional: false, required: false
  public get timeTokenExpiry() {
    return this.getStringAttribute('time_token_expiry');
  }

  // time_token_refreshed - computed: true, optional: false, required: false
  public get timeTokenRefreshed() {
    return this.getStringAttribute('time_token_refreshed');
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
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      resource_principal_configuration_id: cdktf.stringToTerraform(this._resourcePrincipalConfigurationId),
    };
  }
}
