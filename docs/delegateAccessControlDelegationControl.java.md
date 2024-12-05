# `delegateAccessControlDelegationControl` Submodule <a name="`delegateAccessControlDelegationControl` Submodule" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DelegateAccessControlDelegationControl <a name="DelegateAccessControlDelegationControl" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControl;

DelegateAccessControlDelegationControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .delegationSubscriptionIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .notificationMessageFormat(java.lang.String)
    .notificationTopicId(java.lang.String)
    .resourceIds(java.util.List<java.lang.String>)
    .resourceType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAutoApproveDuringMaintenance(java.lang.Boolean)
//  .isAutoApproveDuringMaintenance(IResolvable)
//  .numApprovalsRequired(java.lang.Number)
//  .preApprovedServiceProviderActionNames(java.util.List<java.lang.String>)
//  .timeouts(DelegateAccessControlDelegationControlTimeouts)
//  .vaultId(java.lang.String)
//  .vaultKeyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.delegationSubscriptionIds">delegationSubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.notificationMessageFormat">notificationMessageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.numApprovalsRequired">numApprovalsRequired</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.preApprovedServiceProviderActionNames">preApprovedServiceProviderActionNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.vaultKeyId">vaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}.

---

##### `delegationSubscriptionIds`<sup>Required</sup> <a name="delegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.delegationSubscriptionIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}.

---

##### `notificationMessageFormat`<sup>Required</sup> <a name="notificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.notificationMessageFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}.

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.notificationTopicId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}.

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.resourceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.isAutoApproveDuringMaintenance"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}.

---

##### `numApprovalsRequired`<sup>Optional</sup> <a name="numApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.numApprovalsRequired"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}.

---

##### `preApprovedServiceProviderActionNames`<sup>Optional</sup> <a name="preApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.preApprovedServiceProviderActionNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#timeouts DelegateAccessControlDelegationControl#timeouts}

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}.

---

##### `vaultKeyId`<sup>Optional</sup> <a name="vaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.vaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance">resetIsAutoApproveDuringMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired">resetNumApprovalsRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames">resetPreApprovedServiceProviderActionNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId">resetVaultKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts"></a>

```java
public void putTimeouts(DelegateAccessControlDelegationControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId"></a>

```java
public void resetId()
```

##### `resetIsAutoApproveDuringMaintenance` <a name="resetIsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance"></a>

```java
public void resetIsAutoApproveDuringMaintenance()
```

##### `resetNumApprovalsRequired` <a name="resetNumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired"></a>

```java
public void resetNumApprovalsRequired()
```

##### `resetPreApprovedServiceProviderActionNames` <a name="resetPreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames"></a>

```java
public void resetPreApprovedServiceProviderActionNames()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId"></a>

```java
public void resetVaultId()
```

##### `resetVaultKeyId` <a name="resetVaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId"></a>

```java
public void resetVaultKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControl;

DelegateAccessControlDelegationControl.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControl;

DelegateAccessControlDelegationControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControl;

DelegateAccessControlDelegationControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControl;

DelegateAccessControlDelegationControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DelegateAccessControlDelegationControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DelegateAccessControlDelegationControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DelegateAccessControlDelegationControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DelegateAccessControlDelegationControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted">timeDeleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput">delegationSubscriptionIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput">isAutoApproveDuringMaintenanceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput">notificationMessageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput">notificationTopicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput">numApprovalsRequiredInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput">preApprovedServiceProviderActionNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput">resourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput">vaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds">delegationSubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat">notificationMessageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired">numApprovalsRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames">preApprovedServiceProviderActionNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId">vaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails"></a>

```java
public java.lang.String getLifecycleStateDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted"></a>

```java
public java.lang.String getTimeDeleted();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts"></a>

```java
public DelegateAccessControlDelegationControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `delegationSubscriptionIdsInput`<sup>Optional</sup> <a name="delegationSubscriptionIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput"></a>

```java
public java.util.List<java.lang.String> getDelegationSubscriptionIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAutoApproveDuringMaintenanceInput`<sup>Optional</sup> <a name="isAutoApproveDuringMaintenanceInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput"></a>

```java
public java.lang.Object getIsAutoApproveDuringMaintenanceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notificationMessageFormatInput`<sup>Optional</sup> <a name="notificationMessageFormatInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput"></a>

```java
public java.lang.String getNotificationMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `notificationTopicIdInput`<sup>Optional</sup> <a name="notificationTopicIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput"></a>

```java
public java.lang.String getNotificationTopicIdInput();
```

- *Type:* java.lang.String

---

##### `numApprovalsRequiredInput`<sup>Optional</sup> <a name="numApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput"></a>

```java
public java.lang.Number getNumApprovalsRequiredInput();
```

- *Type:* java.lang.Number

---

##### `preApprovedServiceProviderActionNamesInput`<sup>Optional</sup> <a name="preApprovedServiceProviderActionNamesInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput"></a>

```java
public java.util.List<java.lang.String> getPreApprovedServiceProviderActionNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getResourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `vaultKeyIdInput`<sup>Optional</sup> <a name="vaultKeyIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput"></a>

```java
public java.lang.String getVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `delegationSubscriptionIds`<sup>Required</sup> <a name="delegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds"></a>

```java
public java.util.List<java.lang.String> getDelegationSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAutoApproveDuringMaintenance`<sup>Required</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance"></a>

```java
public java.lang.Object getIsAutoApproveDuringMaintenance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notificationMessageFormat`<sup>Required</sup> <a name="notificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat"></a>

```java
public java.lang.String getNotificationMessageFormat();
```

- *Type:* java.lang.String

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId"></a>

```java
public java.lang.String getNotificationTopicId();
```

- *Type:* java.lang.String

---

##### `numApprovalsRequired`<sup>Required</sup> <a name="numApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired"></a>

```java
public java.lang.Number getNumApprovalsRequired();
```

- *Type:* java.lang.Number

---

##### `preApprovedServiceProviderActionNames`<sup>Required</sup> <a name="preApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames"></a>

```java
public java.util.List<java.lang.String> getPreApprovedServiceProviderActionNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `vaultKeyId`<sup>Required</sup> <a name="vaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId"></a>

```java
public java.lang.String getVaultKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DelegateAccessControlDelegationControlConfig <a name="DelegateAccessControlDelegationControlConfig" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControlConfig;

DelegateAccessControlDelegationControlConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .delegationSubscriptionIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .notificationMessageFormat(java.lang.String)
    .notificationTopicId(java.lang.String)
    .resourceIds(java.util.List<java.lang.String>)
    .resourceType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAutoApproveDuringMaintenance(java.lang.Boolean)
//  .isAutoApproveDuringMaintenance(IResolvable)
//  .numApprovalsRequired(java.lang.Number)
//  .preApprovedServiceProviderActionNames(java.util.List<java.lang.String>)
//  .timeouts(DelegateAccessControlDelegationControlTimeouts)
//  .vaultId(java.lang.String)
//  .vaultKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds">delegationSubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat">notificationMessageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired">numApprovalsRequired</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames">preApprovedServiceProviderActionNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId">vaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}.

---

##### `delegationSubscriptionIds`<sup>Required</sup> <a name="delegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds"></a>

```java
public java.util.List<java.lang.String> getDelegationSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}.

---

##### `notificationMessageFormat`<sup>Required</sup> <a name="notificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat"></a>

```java
public java.lang.String getNotificationMessageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}.

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId"></a>

```java
public java.lang.String getNotificationTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}.

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance"></a>

```java
public java.lang.Object getIsAutoApproveDuringMaintenance();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}.

---

##### `numApprovalsRequired`<sup>Optional</sup> <a name="numApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired"></a>

```java
public java.lang.Number getNumApprovalsRequired();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}.

---

##### `preApprovedServiceProviderActionNames`<sup>Optional</sup> <a name="preApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames"></a>

```java
public java.util.List<java.lang.String> getPreApprovedServiceProviderActionNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts"></a>

```java
public DelegateAccessControlDelegationControlTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#timeouts DelegateAccessControlDelegationControl#timeouts}

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}.

---

##### `vaultKeyId`<sup>Optional</sup> <a name="vaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId"></a>

```java
public java.lang.String getVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}.

---

### DelegateAccessControlDelegationControlTimeouts <a name="DelegateAccessControlDelegationControlTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControlTimeouts;

DelegateAccessControlDelegationControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DelegateAccessControlDelegationControlTimeoutsOutputReference <a name="DelegateAccessControlDelegationControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.delegate_access_control_delegation_control.DelegateAccessControlDelegationControlTimeoutsOutputReference;

new DelegateAccessControlDelegationControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---



