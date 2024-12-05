// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseManagerLicenseRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}
  */
  readonly isPerpetual: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}
  */
  readonly isUnlimited: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}
  */
  readonly licenseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}
  */
  readonly productLicenseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}
  */
  readonly supportEndDate?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#timeouts LicenseManagerLicenseRecord#timeouts}
  */
  readonly timeouts?: LicenseManagerLicenseRecordTimeouts;
}
export interface LicenseManagerLicenseRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}
  */
  readonly update?: string;
}

export function licenseManagerLicenseRecordTimeoutsToTerraform(struct?: LicenseManagerLicenseRecordTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LicenseManagerLicenseRecordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicenseManagerLicenseRecordTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerLicenseRecordTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record oci_license_manager_license_record}
*/
export class LicenseManagerLicenseRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_license_manager_license_record";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record oci_license_manager_license_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseManagerLicenseRecordConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseManagerLicenseRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_license_manager_license_record',
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._expirationDate = config.expirationDate;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isPerpetual = config.isPerpetual;
    this._isUnlimited = config.isUnlimited;
    this._licenseCount = config.licenseCount;
    this._productId = config.productId;
    this._productLicenseId = config.productLicenseId;
    this._supportEndDate = config.supportEndDate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // expiration_date - computed: true, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_perpetual - computed: false, optional: false, required: true
  private _isPerpetual?: boolean | cdktf.IResolvable; 
  public get isPerpetual() {
    return this.getBooleanAttribute('is_perpetual');
  }
  public set isPerpetual(value: boolean | cdktf.IResolvable) {
    this._isPerpetual = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPerpetualInput() {
    return this._isPerpetual;
  }

  // is_unlimited - computed: false, optional: false, required: true
  private _isUnlimited?: boolean | cdktf.IResolvable; 
  public get isUnlimited() {
    return this.getBooleanAttribute('is_unlimited');
  }
  public set isUnlimited(value: boolean | cdktf.IResolvable) {
    this._isUnlimited = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnlimitedInput() {
    return this._isUnlimited;
  }

  // license_count - computed: true, optional: true, required: false
  private _licenseCount?: number; 
  public get licenseCount() {
    return this.getNumberAttribute('license_count');
  }
  public set licenseCount(value: number) {
    this._licenseCount = value;
  }
  public resetLicenseCount() {
    this._licenseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCountInput() {
    return this._licenseCount;
  }

  // license_unit - computed: true, optional: false, required: false
  public get licenseUnit() {
    return this.getStringAttribute('license_unit');
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_license - computed: true, optional: false, required: false
  public get productLicense() {
    return this.getStringAttribute('product_license');
  }

  // product_license_id - computed: false, optional: false, required: true
  private _productLicenseId?: string; 
  public get productLicenseId() {
    return this.getStringAttribute('product_license_id');
  }
  public set productLicenseId(value: string) {
    this._productLicenseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productLicenseIdInput() {
    return this._productLicenseId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // support_end_date - computed: true, optional: true, required: false
  private _supportEndDate?: string; 
  public get supportEndDate() {
    return this.getStringAttribute('support_end_date');
  }
  public set supportEndDate(value: string) {
    this._supportEndDate = value;
  }
  public resetSupportEndDate() {
    this._supportEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEndDateInput() {
    return this._supportEndDate;
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LicenseManagerLicenseRecordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LicenseManagerLicenseRecordTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_perpetual: cdktf.booleanToTerraform(this._isPerpetual),
      is_unlimited: cdktf.booleanToTerraform(this._isUnlimited),
      license_count: cdktf.numberToTerraform(this._licenseCount),
      product_id: cdktf.stringToTerraform(this._productId),
      product_license_id: cdktf.stringToTerraform(this._productLicenseId),
      support_end_date: cdktf.stringToTerraform(this._supportEndDate),
      timeouts: licenseManagerLicenseRecordTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
