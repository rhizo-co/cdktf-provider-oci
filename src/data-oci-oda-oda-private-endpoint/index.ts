// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOdaOdaPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint#oda_private_endpoint_id DataOciOdaOdaPrivateEndpoint#oda_private_endpoint_id}
  */
  readonly odaPrivateEndpointId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint oci_oda_oda_private_endpoint}
*/
export class DataOciOdaOdaPrivateEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oda_oda_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint oci_oda_oda_private_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOdaOdaPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOdaOdaPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oda_oda_private_endpoint',
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
    this._odaPrivateEndpointId = config.odaPrivateEndpointId;
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

  // oda_private_endpoint_id - computed: false, optional: false, required: true
  private _odaPrivateEndpointId?: string; 
  public get odaPrivateEndpointId() {
    return this.getStringAttribute('oda_private_endpoint_id');
  }
  public set odaPrivateEndpointId(value: string) {
    this._odaPrivateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odaPrivateEndpointIdInput() {
    return this._odaPrivateEndpointId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      oda_private_endpoint_id: cdktf.stringToTerraform(this._odaPrivateEndpointId),
    };
  }
}
