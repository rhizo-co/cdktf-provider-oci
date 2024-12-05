// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreVolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#attachment_type CoreVolumeAttachment#attachment_type}
  */
  readonly attachmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#compartment_id CoreVolumeAttachment#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#device CoreVolumeAttachment#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#display_name CoreVolumeAttachment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#encryption_in_transit_type CoreVolumeAttachment#encryption_in_transit_type}
  */
  readonly encryptionInTransitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#id CoreVolumeAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#instance_id CoreVolumeAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_agent_auto_iscsi_login_enabled CoreVolumeAttachment#is_agent_auto_iscsi_login_enabled}
  */
  readonly isAgentAutoIscsiLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_pv_encryption_in_transit_enabled CoreVolumeAttachment#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_read_only CoreVolumeAttachment#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#is_shareable CoreVolumeAttachment#is_shareable}
  */
  readonly isShareable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#use_chap CoreVolumeAttachment#use_chap}
  */
  readonly useChap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#volume_id CoreVolumeAttachment#volume_id}
  */
  readonly volumeId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#timeouts CoreVolumeAttachment#timeouts}
  */
  readonly timeouts?: CoreVolumeAttachmentTimeouts;
}
export interface CoreVolumeAttachmentMultipathDevices {
}

export function coreVolumeAttachmentMultipathDevicesToTerraform(struct?: CoreVolumeAttachmentMultipathDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CoreVolumeAttachmentMultipathDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CoreVolumeAttachmentMultipathDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVolumeAttachmentMultipathDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class CoreVolumeAttachmentMultipathDevicesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CoreVolumeAttachmentMultipathDevicesOutputReference {
    return new CoreVolumeAttachmentMultipathDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreVolumeAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#create CoreVolumeAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#delete CoreVolumeAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment#update CoreVolumeAttachment#update}
  */
  readonly update?: string;
}

export function coreVolumeAttachmentTimeoutsToTerraform(struct?: CoreVolumeAttachmentTimeouts | cdktf.IResolvable): any {
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

export class CoreVolumeAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreVolumeAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreVolumeAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment oci_core_volume_attachment}
*/
export class CoreVolumeAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_volume_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_attachment oci_core_volume_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreVolumeAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CoreVolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_attachment',
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
    this._attachmentType = config.attachmentType;
    this._compartmentId = config.compartmentId;
    this._device = config.device;
    this._displayName = config.displayName;
    this._encryptionInTransitType = config.encryptionInTransitType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isAgentAutoIscsiLoginEnabled = config.isAgentAutoIscsiLoginEnabled;
    this._isPvEncryptionInTransitEnabled = config.isPvEncryptionInTransitEnabled;
    this._isReadOnly = config.isReadOnly;
    this._isShareable = config.isShareable;
    this._useChap = config.useChap;
    this._volumeId = config.volumeId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_type - computed: false, optional: false, required: true
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // chap_secret - computed: true, optional: false, required: false
  public get chapSecret() {
    return this.getStringAttribute('chap_secret');
  }

  // chap_username - computed: true, optional: false, required: false
  public get chapUsername() {
    return this.getStringAttribute('chap_username');
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // encryption_in_transit_type - computed: true, optional: true, required: false
  private _encryptionInTransitType?: string; 
  public get encryptionInTransitType() {
    return this.getStringAttribute('encryption_in_transit_type');
  }
  public set encryptionInTransitType(value: string) {
    this._encryptionInTransitType = value;
  }
  public resetEncryptionInTransitType() {
    this._encryptionInTransitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitTypeInput() {
    return this._encryptionInTransitType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // is_agent_auto_iscsi_login_enabled - computed: true, optional: true, required: false
  private _isAgentAutoIscsiLoginEnabled?: boolean | cdktf.IResolvable; 
  public get isAgentAutoIscsiLoginEnabled() {
    return this.getBooleanAttribute('is_agent_auto_iscsi_login_enabled');
  }
  public set isAgentAutoIscsiLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._isAgentAutoIscsiLoginEnabled = value;
  }
  public resetIsAgentAutoIscsiLoginEnabled() {
    this._isAgentAutoIscsiLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAgentAutoIscsiLoginEnabledInput() {
    return this._isAgentAutoIscsiLoginEnabled;
  }

  // is_multipath - computed: true, optional: false, required: false
  public get isMultipath() {
    return this.getBooleanAttribute('is_multipath');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_shareable - computed: true, optional: true, required: false
  private _isShareable?: boolean | cdktf.IResolvable; 
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }
  public set isShareable(value: boolean | cdktf.IResolvable) {
    this._isShareable = value;
  }
  public resetIsShareable() {
    this._isShareable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShareableInput() {
    return this._isShareable;
  }

  // is_volume_created_during_launch - computed: true, optional: false, required: false
  public get isVolumeCreatedDuringLaunch() {
    return this.getBooleanAttribute('is_volume_created_during_launch');
  }

  // iscsi_login_state - computed: true, optional: false, required: false
  public get iscsiLoginState() {
    return this.getStringAttribute('iscsi_login_state');
  }

  // multipath_devices - computed: true, optional: false, required: false
  private _multipathDevices = new CoreVolumeAttachmentMultipathDevicesList(this, "multipath_devices", false);
  public get multipathDevices() {
    return this._multipathDevices;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // use_chap - computed: true, optional: true, required: false
  private _useChap?: boolean | cdktf.IResolvable; 
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }
  public set useChap(value: boolean | cdktf.IResolvable) {
    this._useChap = value;
  }
  public resetUseChap() {
    this._useChap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChapInput() {
    return this._useChap;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreVolumeAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreVolumeAttachmentTimeouts) {
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
      attachment_type: cdktf.stringToTerraform(this._attachmentType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      device: cdktf.stringToTerraform(this._device),
      display_name: cdktf.stringToTerraform(this._displayName),
      encryption_in_transit_type: cdktf.stringToTerraform(this._encryptionInTransitType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_agent_auto_iscsi_login_enabled: cdktf.booleanToTerraform(this._isAgentAutoIscsiLoginEnabled),
      is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(this._isPvEncryptionInTransitEnabled),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      is_shareable: cdktf.booleanToTerraform(this._isShareable),
      use_chap: cdktf.booleanToTerraform(this._useChap),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      timeouts: coreVolumeAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
