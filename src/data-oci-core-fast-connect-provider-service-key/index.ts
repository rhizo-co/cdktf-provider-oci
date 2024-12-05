// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreFastConnectProviderServiceKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#id DataOciCoreFastConnectProviderServiceKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#provider_service_id DataOciCoreFastConnectProviderServiceKey#provider_service_id}
  */
  readonly providerServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#provider_service_key_name DataOciCoreFastConnectProviderServiceKey#provider_service_key_name}
  */
  readonly providerServiceKeyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key oci_core_fast_connect_provider_service_key}
*/
export class DataOciCoreFastConnectProviderServiceKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_fast_connect_provider_service_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key oci_core_fast_connect_provider_service_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreFastConnectProviderServiceKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServiceKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_fast_connect_provider_service_key',
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
    this._providerServiceId = config.providerServiceId;
    this._providerServiceKeyName = config.providerServiceKeyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_shape_name - computed: true, optional: false, required: false
  public get bandwidthShapeName() {
    return this.getStringAttribute('bandwidth_shape_name');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peering_location - computed: true, optional: false, required: false
  public get peeringLocation() {
    return this.getStringAttribute('peering_location');
  }

  // provider_service_id - computed: false, optional: false, required: true
  private _providerServiceId?: string; 
  public get providerServiceId() {
    return this.getStringAttribute('provider_service_id');
  }
  public set providerServiceId(value: string) {
    this._providerServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerServiceIdInput() {
    return this._providerServiceId;
  }

  // provider_service_key_name - computed: false, optional: false, required: true
  private _providerServiceKeyName?: string; 
  public get providerServiceKeyName() {
    return this.getStringAttribute('provider_service_key_name');
  }
  public set providerServiceKeyName(value: string) {
    this._providerServiceKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerServiceKeyNameInput() {
    return this._providerServiceKeyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      provider_service_id: cdktf.stringToTerraform(this._providerServiceId),
      provider_service_key_name: cdktf.stringToTerraform(this._providerServiceKeyName),
    };
  }
}
