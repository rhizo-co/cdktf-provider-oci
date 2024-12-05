// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciKmsDecryptedDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#associated_data DataOciKmsDecryptedData#associated_data}
  */
  readonly associatedData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#ciphertext DataOciKmsDecryptedData#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#crypto_endpoint DataOciKmsDecryptedData#crypto_endpoint}
  */
  readonly cryptoEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#id DataOciKmsDecryptedData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data#key_id DataOciKmsDecryptedData#key_id}
  */
  readonly keyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data oci_kms_decrypted_data}
*/
export class DataOciKmsDecryptedData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_decrypted_data";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_decrypted_data oci_kms_decrypted_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciKmsDecryptedDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciKmsDecryptedDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_decrypted_data',
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
    this._associatedData = config.associatedData;
    this._ciphertext = config.ciphertext;
    this._cryptoEndpoint = config.cryptoEndpoint;
    this._id = config.id;
    this._keyId = config.keyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_data - computed: false, optional: true, required: false
  private _associatedData?: { [key: string]: string }; 
  public get associatedData() {
    return this.getStringMapAttribute('associated_data');
  }
  public set associatedData(value: { [key: string]: string }) {
    this._associatedData = value;
  }
  public resetAssociatedData() {
    this._associatedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDataInput() {
    return this._associatedData;
  }

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
  }

  // crypto_endpoint - computed: false, optional: false, required: true
  private _cryptoEndpoint?: string; 
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
  }
  public set cryptoEndpoint(value: string) {
    this._cryptoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoEndpointInput() {
    return this._cryptoEndpoint;
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // plaintext_checksum - computed: true, optional: false, required: false
  public get plaintextChecksum() {
    return this.getStringAttribute('plaintext_checksum');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._associatedData),
      ciphertext: cdktf.stringToTerraform(this._ciphertext),
      crypto_endpoint: cdktf.stringToTerraform(this._cryptoEndpoint),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
    };
  }
}
