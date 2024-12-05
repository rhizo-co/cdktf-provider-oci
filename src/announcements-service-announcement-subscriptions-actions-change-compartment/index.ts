// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#announcement_subscription_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#announcement_subscription_id}
  */
  readonly announcementSubscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#compartment_id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#id AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#timeouts AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#timeouts}
  */
  readonly timeouts?: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts;
}
export interface AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#create AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#delete AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment#update AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment#update}
  */
  readonly update?: string;
}

export function announcementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsToTerraform(struct?: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts | cdktf.IResolvable): any {
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

export class AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment oci_announcements_service_announcement_subscriptions_actions_change_compartment}
*/
export class AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_announcements_service_announcement_subscriptions_actions_change_compartment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_actions_change_compartment oci_announcements_service_announcement_subscriptions_actions_change_compartment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig
  */
  public constructor(scope: Construct, id: string, config: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_announcements_service_announcement_subscriptions_actions_change_compartment',
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
    this._announcementSubscriptionId = config.announcementSubscriptionId;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // announcement_subscription_id - computed: false, optional: false, required: true
  private _announcementSubscriptionId?: string; 
  public get announcementSubscriptionId() {
    return this.getStringAttribute('announcement_subscription_id');
  }
  public set announcementSubscriptionId(value: string) {
    this._announcementSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementSubscriptionIdInput() {
    return this._announcementSubscriptionId;
  }

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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AnnouncementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeouts) {
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
      announcement_subscription_id: cdktf.stringToTerraform(this._announcementSubscriptionId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: announcementsServiceAnnouncementSubscriptionsActionsChangeCompartmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
