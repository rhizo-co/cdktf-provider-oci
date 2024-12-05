// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key#api_key_id DataOciBdsBdsInstanceApiKey#api_key_id}
  */
  readonly apiKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key#bds_instance_id DataOciBdsBdsInstanceApiKey#bds_instance_id}
  */
  readonly bdsInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key oci_bds_bds_instance_api_key}
*/
export class DataOciBdsBdsInstanceApiKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_api_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key oci_bds_bds_instance_api_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_api_key',
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
    this._apiKeyId = config.apiKeyId;
    this._bdsInstanceId = config.bdsInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: false, optional: false, required: true
  private _apiKeyId?: string; 
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }
  public set apiKeyId(value: string) {
    this._apiKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdInput() {
    return this._apiKeyId;
  }

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

  // default_region - computed: true, optional: false, required: false
  public get defaultRegion() {
    return this.getStringAttribute('default_region');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_alias - computed: true, optional: false, required: false
  public get keyAlias() {
    return this.getStringAttribute('key_alias');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // pemfilepath - computed: true, optional: false, required: false
  public get pemfilepath() {
    return this.getStringAttribute('pemfilepath');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_id: cdktf.stringToTerraform(this._apiKeyId),
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
    };
  }
}
