# `dataSafeAuditProfileManagement` Submodule <a name="`dataSafeAuditProfileManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditProfileManagement <a name="DataSafeAuditProfileManagement" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management oci_data_safe_audit_profile_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagement;

DataSafeAuditProfileManagement.Builder.create(Construct scope, java.lang.String id)
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
//  .changeRetentionTrigger(java.lang.Boolean)
//  .changeRetentionTrigger(IResolvable)
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isOverrideGlobalRetentionSetting(java.lang.Boolean)
//  .isOverrideGlobalRetentionSetting(IResolvable)
//  .isPaidUsageEnabled(java.lang.Boolean)
//  .isPaidUsageEnabled(IResolvable)
//  .offlineMonths(java.lang.Number)
//  .onlineMonths(java.lang.Number)
//  .targetId(java.lang.String)
//  .timeouts(DataSafeAuditProfileManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.changeRetentionTrigger">changeRetentionTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#change_retention_trigger DataSafeAuditProfileManagement#change_retention_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#compartment_id DataSafeAuditProfileManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#defined_tags DataSafeAuditProfileManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#description DataSafeAuditProfileManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#display_name DataSafeAuditProfileManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#freeform_tags DataSafeAuditProfileManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#id DataSafeAuditProfileManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.isOverrideGlobalRetentionSetting">isOverrideGlobalRetentionSetting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_override_global_retention_setting DataSafeAuditProfileManagement#is_override_global_retention_setting}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.isPaidUsageEnabled">isPaidUsageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_paid_usage_enabled DataSafeAuditProfileManagement#is_paid_usage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.offlineMonths">offlineMonths</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#offline_months DataSafeAuditProfileManagement#offline_months}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.onlineMonths">onlineMonths</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#online_months DataSafeAuditProfileManagement#online_months}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#target_id DataSafeAuditProfileManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `changeRetentionTrigger`<sup>Optional</sup> <a name="changeRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.changeRetentionTrigger"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#change_retention_trigger DataSafeAuditProfileManagement#change_retention_trigger}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#compartment_id DataSafeAuditProfileManagement#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#defined_tags DataSafeAuditProfileManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#description DataSafeAuditProfileManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#display_name DataSafeAuditProfileManagement#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#freeform_tags DataSafeAuditProfileManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#id DataSafeAuditProfileManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOverrideGlobalRetentionSetting`<sup>Optional</sup> <a name="isOverrideGlobalRetentionSetting" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.isOverrideGlobalRetentionSetting"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_override_global_retention_setting DataSafeAuditProfileManagement#is_override_global_retention_setting}.

---

##### `isPaidUsageEnabled`<sup>Optional</sup> <a name="isPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.isPaidUsageEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_paid_usage_enabled DataSafeAuditProfileManagement#is_paid_usage_enabled}.

---

##### `offlineMonths`<sup>Optional</sup> <a name="offlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.offlineMonths"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#offline_months DataSafeAuditProfileManagement#offline_months}.

---

##### `onlineMonths`<sup>Optional</sup> <a name="onlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.onlineMonths"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#online_months DataSafeAuditProfileManagement#online_months}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#target_id DataSafeAuditProfileManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#timeouts DataSafeAuditProfileManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetChangeRetentionTrigger">resetChangeRetentionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsOverrideGlobalRetentionSetting">resetIsOverrideGlobalRetentionSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsPaidUsageEnabled">resetIsPaidUsageEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOfflineMonths">resetOfflineMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOnlineMonths">resetOnlineMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.putTimeouts"></a>

```java
public void putTimeouts(DataSafeAuditProfileManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a>

---

##### `resetChangeRetentionTrigger` <a name="resetChangeRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetChangeRetentionTrigger"></a>

```java
public void resetChangeRetentionTrigger()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetId"></a>

```java
public void resetId()
```

##### `resetIsOverrideGlobalRetentionSetting` <a name="resetIsOverrideGlobalRetentionSetting" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsOverrideGlobalRetentionSetting"></a>

```java
public void resetIsOverrideGlobalRetentionSetting()
```

##### `resetIsPaidUsageEnabled` <a name="resetIsPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetIsPaidUsageEnabled"></a>

```java
public void resetIsPaidUsageEnabled()
```

##### `resetOfflineMonths` <a name="resetOfflineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOfflineMonths"></a>

```java
public void resetOfflineMonths()
```

##### `resetOnlineMonths` <a name="resetOnlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetOnlineMonths"></a>

```java
public void resetOnlineMonths()
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTargetId"></a>

```java
public void resetTargetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeAuditProfileManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagement;

DataSafeAuditProfileManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagement;

DataSafeAuditProfileManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagement;

DataSafeAuditProfileManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagement;

DataSafeAuditProfileManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeAuditProfileManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeAuditProfileManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeAuditProfileManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeAuditProfileManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditProfileManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.auditCollectedVolume">auditCollectedVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference">DataSafeAuditProfileManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTriggerInput">changeRetentionTriggerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSettingInput">isOverrideGlobalRetentionSettingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabledInput">isPaidUsageEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonthsInput">offlineMonthsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonthsInput">onlineMonthsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTrigger">changeRetentionTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSetting">isOverrideGlobalRetentionSetting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabled">isPaidUsageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonths">offlineMonths</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonths">onlineMonths</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auditCollectedVolume`<sup>Required</sup> <a name="auditCollectedVolume" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.auditCollectedVolume"></a>

```java
public java.lang.String getAuditCollectedVolume();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeouts"></a>

```java
public DataSafeAuditProfileManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference">DataSafeAuditProfileManagementTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `changeRetentionTriggerInput`<sup>Optional</sup> <a name="changeRetentionTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTriggerInput"></a>

```java
public java.lang.Object getChangeRetentionTriggerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isOverrideGlobalRetentionSettingInput`<sup>Optional</sup> <a name="isOverrideGlobalRetentionSettingInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSettingInput"></a>

```java
public java.lang.Object getIsOverrideGlobalRetentionSettingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPaidUsageEnabledInput`<sup>Optional</sup> <a name="isPaidUsageEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabledInput"></a>

```java
public java.lang.Object getIsPaidUsageEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `offlineMonthsInput`<sup>Optional</sup> <a name="offlineMonthsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonthsInput"></a>

```java
public java.lang.Number getOfflineMonthsInput();
```

- *Type:* java.lang.Number

---

##### `onlineMonthsInput`<sup>Optional</sup> <a name="onlineMonthsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonthsInput"></a>

```java
public java.lang.Number getOnlineMonthsInput();
```

- *Type:* java.lang.Number

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a>

---

##### `changeRetentionTrigger`<sup>Required</sup> <a name="changeRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.changeRetentionTrigger"></a>

```java
public java.lang.Object getChangeRetentionTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isOverrideGlobalRetentionSetting`<sup>Required</sup> <a name="isOverrideGlobalRetentionSetting" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isOverrideGlobalRetentionSetting"></a>

```java
public java.lang.Object getIsOverrideGlobalRetentionSetting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPaidUsageEnabled`<sup>Required</sup> <a name="isPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.isPaidUsageEnabled"></a>

```java
public java.lang.Object getIsPaidUsageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `offlineMonths`<sup>Required</sup> <a name="offlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.offlineMonths"></a>

```java
public java.lang.Number getOfflineMonths();
```

- *Type:* java.lang.Number

---

##### `onlineMonths`<sup>Required</sup> <a name="onlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.onlineMonths"></a>

```java
public java.lang.Number getOnlineMonths();
```

- *Type:* java.lang.Number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditProfileManagementConfig <a name="DataSafeAuditProfileManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagementConfig;

DataSafeAuditProfileManagementConfig.builder()
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
//  .changeRetentionTrigger(java.lang.Boolean)
//  .changeRetentionTrigger(IResolvable)
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isOverrideGlobalRetentionSetting(java.lang.Boolean)
//  .isOverrideGlobalRetentionSetting(IResolvable)
//  .isPaidUsageEnabled(java.lang.Boolean)
//  .isPaidUsageEnabled(IResolvable)
//  .offlineMonths(java.lang.Number)
//  .onlineMonths(java.lang.Number)
//  .targetId(java.lang.String)
//  .timeouts(DataSafeAuditProfileManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.changeRetentionTrigger">changeRetentionTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#change_retention_trigger DataSafeAuditProfileManagement#change_retention_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#compartment_id DataSafeAuditProfileManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#defined_tags DataSafeAuditProfileManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#description DataSafeAuditProfileManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#display_name DataSafeAuditProfileManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#freeform_tags DataSafeAuditProfileManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#id DataSafeAuditProfileManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isOverrideGlobalRetentionSetting">isOverrideGlobalRetentionSetting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_override_global_retention_setting DataSafeAuditProfileManagement#is_override_global_retention_setting}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isPaidUsageEnabled">isPaidUsageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_paid_usage_enabled DataSafeAuditProfileManagement#is_paid_usage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.offlineMonths">offlineMonths</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#offline_months DataSafeAuditProfileManagement#offline_months}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.onlineMonths">onlineMonths</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#online_months DataSafeAuditProfileManagement#online_months}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#target_id DataSafeAuditProfileManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `changeRetentionTrigger`<sup>Optional</sup> <a name="changeRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.changeRetentionTrigger"></a>

```java
public java.lang.Object getChangeRetentionTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#change_retention_trigger DataSafeAuditProfileManagement#change_retention_trigger}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#compartment_id DataSafeAuditProfileManagement#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#defined_tags DataSafeAuditProfileManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#description DataSafeAuditProfileManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#display_name DataSafeAuditProfileManagement#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#freeform_tags DataSafeAuditProfileManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#id DataSafeAuditProfileManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOverrideGlobalRetentionSetting`<sup>Optional</sup> <a name="isOverrideGlobalRetentionSetting" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isOverrideGlobalRetentionSetting"></a>

```java
public java.lang.Object getIsOverrideGlobalRetentionSetting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_override_global_retention_setting DataSafeAuditProfileManagement#is_override_global_retention_setting}.

---

##### `isPaidUsageEnabled`<sup>Optional</sup> <a name="isPaidUsageEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.isPaidUsageEnabled"></a>

```java
public java.lang.Object getIsPaidUsageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#is_paid_usage_enabled DataSafeAuditProfileManagement#is_paid_usage_enabled}.

---

##### `offlineMonths`<sup>Optional</sup> <a name="offlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.offlineMonths"></a>

```java
public java.lang.Number getOfflineMonths();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#offline_months DataSafeAuditProfileManagement#offline_months}.

---

##### `onlineMonths`<sup>Optional</sup> <a name="onlineMonths" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.onlineMonths"></a>

```java
public java.lang.Number getOnlineMonths();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#online_months DataSafeAuditProfileManagement#online_months}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#target_id DataSafeAuditProfileManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementConfig.property.timeouts"></a>

```java
public DataSafeAuditProfileManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#timeouts DataSafeAuditProfileManagement#timeouts}

---

### DataSafeAuditProfileManagementTimeouts <a name="DataSafeAuditProfileManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagementTimeouts;

DataSafeAuditProfileManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#create DataSafeAuditProfileManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#delete DataSafeAuditProfileManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#update DataSafeAuditProfileManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#create DataSafeAuditProfileManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#delete DataSafeAuditProfileManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_profile_management#update DataSafeAuditProfileManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditProfileManagementTimeoutsOutputReference <a name="DataSafeAuditProfileManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_audit_profile_management.DataSafeAuditProfileManagementTimeoutsOutputReference;

new DataSafeAuditProfileManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditProfileManagement.DataSafeAuditProfileManagementTimeouts">DataSafeAuditProfileManagementTimeouts</a>

---



