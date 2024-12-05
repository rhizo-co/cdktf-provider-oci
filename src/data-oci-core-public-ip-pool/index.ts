// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_public_ip_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCorePublicIpPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_public_ip_pool#public_ip_pool_id DataOciCorePublicIpPool#public_ip_pool_id}
  */
  readonly publicIpPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_public_ip_pool oci_core_public_ip_pool}
*/
export class DataOciCorePublicIpPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_public_ip_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_public_ip_pool oci_core_public_ip_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCorePublicIpPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCorePublicIpPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_public_ip_pool',
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
    this._publicIpPoolId = config.publicIpPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // public_ip_pool_id - computed: false, optional: false, required: true
  private _publicIpPoolId?: string; 
  public get publicIpPoolId() {
    return this.getStringAttribute('public_ip_pool_id');
  }
  public set publicIpPoolId(value: string) {
    this._publicIpPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPoolIdInput() {
    return this._publicIpPoolId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      public_ip_pool_id: cdktf.stringToTerraform(this._publicIpPoolId),
    };
  }
}
