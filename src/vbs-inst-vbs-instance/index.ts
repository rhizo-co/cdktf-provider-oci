// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VbsInstVbsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#compartment_id VbsInstVbsInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#defined_tags VbsInstVbsInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#display_name VbsInstVbsInstance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#freeform_tags VbsInstVbsInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#id VbsInstVbsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#idcs_access_token VbsInstVbsInstance#idcs_access_token}
  */
  readonly idcsAccessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#is_resource_usage_agreement_granted VbsInstVbsInstance#is_resource_usage_agreement_granted}
  */
  readonly isResourceUsageAgreementGranted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#name VbsInstVbsInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#resource_compartment_id VbsInstVbsInstance#resource_compartment_id}
  */
  readonly resourceCompartmentId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#timeouts VbsInstVbsInstance#timeouts}
  */
  readonly timeouts?: VbsInstVbsInstanceTimeouts;
}
export interface VbsInstVbsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#create VbsInstVbsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#delete VbsInstVbsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance#update VbsInstVbsInstance#update}
  */
  readonly update?: string;
}

export function vbsInstVbsInstanceTimeoutsToTerraform(struct?: VbsInstVbsInstanceTimeouts | cdktf.IResolvable): any {
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

export class VbsInstVbsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VbsInstVbsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VbsInstVbsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance oci_vbs_inst_vbs_instance}
*/
export class VbsInstVbsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_vbs_inst_vbs_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vbs_inst_vbs_instance oci_vbs_inst_vbs_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VbsInstVbsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: VbsInstVbsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_vbs_inst_vbs_instance',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idcsAccessToken = config.idcsAccessToken;
    this._isResourceUsageAgreementGranted = config.isResourceUsageAgreementGranted;
    this._name = config.name;
    this._resourceCompartmentId = config.resourceCompartmentId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // idcs_access_token - computed: true, optional: true, required: false
  private _idcsAccessToken?: string; 
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }
  public set idcsAccessToken(value: string) {
    this._idcsAccessToken = value;
  }
  public resetIdcsAccessToken() {
    this._idcsAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAccessTokenInput() {
    return this._idcsAccessToken;
  }

  // is_resource_usage_agreement_granted - computed: true, optional: true, required: false
  private _isResourceUsageAgreementGranted?: boolean | cdktf.IResolvable; 
  public get isResourceUsageAgreementGranted() {
    return this.getBooleanAttribute('is_resource_usage_agreement_granted');
  }
  public set isResourceUsageAgreementGranted(value: boolean | cdktf.IResolvable) {
    this._isResourceUsageAgreementGranted = value;
  }
  public resetIsResourceUsageAgreementGranted() {
    this._isResourceUsageAgreementGranted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResourceUsageAgreementGrantedInput() {
    return this._isResourceUsageAgreementGranted;
  }

  // lifecyle_details - computed: true, optional: false, required: false
  public get lifecyleDetails() {
    return this.getStringAttribute('lifecyle_details');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_compartment_id - computed: true, optional: true, required: false
  private _resourceCompartmentId?: string; 
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }
  public set resourceCompartmentId(value: string) {
    this._resourceCompartmentId = value;
  }
  public resetResourceCompartmentId() {
    this._resourceCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCompartmentIdInput() {
    return this._resourceCompartmentId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // vbs_access_url - computed: true, optional: false, required: false
  public get vbsAccessUrl() {
    return this.getStringAttribute('vbs_access_url');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VbsInstVbsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VbsInstVbsInstanceTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idcs_access_token: cdktf.stringToTerraform(this._idcsAccessToken),
      is_resource_usage_agreement_granted: cdktf.booleanToTerraform(this._isResourceUsageAgreementGranted),
      name: cdktf.stringToTerraform(this._name),
      resource_compartment_id: cdktf.stringToTerraform(this._resourceCompartmentId),
      timeouts: vbsInstVbsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
