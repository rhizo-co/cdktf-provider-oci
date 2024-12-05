// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataintegrationWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace#workspace_id DataOciDataintegrationWorkspace#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace oci_dataintegration_workspace}
*/
export class DataOciDataintegrationWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace oci_dataintegration_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataintegrationWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace',
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
    this._workspaceId = config.workspaceId;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_server_ip - computed: true, optional: false, required: false
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }

  // dns_server_zone - computed: true, optional: false, required: false
  public get dnsServerZone() {
    return this.getStringAttribute('dns_server_zone');
  }

  // endpoint_compartment_id - computed: true, optional: false, required: false
  public get endpointCompartmentId() {
    return this.getStringAttribute('endpoint_compartment_id');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
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

  // is_force_operation - computed: true, optional: false, required: false
  public get isForceOperation() {
    return this.getBooleanAttribute('is_force_operation');
  }

  // is_private_network_enabled - computed: true, optional: false, required: false
  public get isPrivateNetworkEnabled() {
    return this.getBooleanAttribute('is_private_network_enabled');
  }

  // quiesce_timeout - computed: true, optional: false, required: false
  public get quiesceTimeout() {
    return this.getNumberAttribute('quiesce_timeout');
  }

  // registry_compartment_id - computed: true, optional: false, required: false
  public get registryCompartmentId() {
    return this.getStringAttribute('registry_compartment_id');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // registry_name - computed: true, optional: false, required: false
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
