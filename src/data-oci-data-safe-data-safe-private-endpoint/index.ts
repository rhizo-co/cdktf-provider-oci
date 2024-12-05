// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeDataSafePrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoint#data_safe_private_endpoint_id DataOciDataSafeDataSafePrivateEndpoint#data_safe_private_endpoint_id}
  */
  readonly dataSafePrivateEndpointId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoint oci_data_safe_data_safe_private_endpoint}
*/
export class DataOciDataSafeDataSafePrivateEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_data_safe_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_data_safe_private_endpoint oci_data_safe_data_safe_private_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeDataSafePrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeDataSafePrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_data_safe_private_endpoint',
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
    this._dataSafePrivateEndpointId = config.dataSafePrivateEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_safe_private_endpoint_id - computed: false, optional: false, required: true
  private _dataSafePrivateEndpointId?: string; 
  public get dataSafePrivateEndpointId() {
    return this.getStringAttribute('data_safe_private_endpoint_id');
  }
  public set dataSafePrivateEndpointId(value: string) {
    this._dataSafePrivateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSafePrivateEndpointIdInput() {
    return this._dataSafePrivateEndpointId;
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

  // endpoint_fqdn - computed: true, optional: false, required: false
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
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

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_safe_private_endpoint_id: cdktf.stringToTerraform(this._dataSafePrivateEndpointId),
    };
  }
}
