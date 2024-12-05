// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_private_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCorePrivateIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_private_ip#private_ip_id DataOciCorePrivateIp#private_ip_id}
  */
  readonly privateIpId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_private_ip oci_core_private_ip}
*/
export class DataOciCorePrivateIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_private_ip";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_private_ip oci_core_private_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCorePrivateIpConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCorePrivateIpConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_private_ip',
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
    this._privateIpId = config.privateIpId;
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

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // is_reserved - computed: true, optional: false, required: false
  public get isReserved() {
    return this.getBooleanAttribute('is_reserved');
  }

  // private_ip_id - computed: false, optional: false, required: true
  private _privateIpId?: string; 
  public get privateIpId() {
    return this.getStringAttribute('private_ip_id');
  }
  public set privateIpId(value: string) {
    this._privateIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpIdInput() {
    return this._privateIpId;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vnic_id - computed: true, optional: false, required: false
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      private_ip_id: cdktf.stringToTerraform(this._privateIpId),
    };
  }
}
