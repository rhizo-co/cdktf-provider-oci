# `meteringComputationUsageStatementEmailRecipientsGroup` Submodule <a name="`meteringComputationUsageStatementEmailRecipientsGroup` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageStatementEmailRecipientsGroup <a name="MeteringComputationUsageStatementEmailRecipientsGroup" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group oci_metering_computation_usage_statement_email_recipients_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroup;

MeteringComputationUsageStatementEmailRecipientsGroup.Builder.create(Construct scope, java.lang.String id)
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
    .recipientsList(IResolvable)
    .recipientsList(java.util.List<MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct>)
    .subscriptionId(java.lang.String)
//  .emailRecipientsGroupId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MeteringComputationUsageStatementEmailRecipientsGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#compartment_id MeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.recipientsList">recipientsList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>></code> | recipients_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#subscription_id MeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.emailRecipientsGroupId">emailRecipientsGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id MeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#id MeteringComputationUsageStatementEmailRecipientsGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#compartment_id MeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}.

---

##### `recipientsList`<sup>Required</sup> <a name="recipientsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.recipientsList"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>>

recipients_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#recipients_list MeteringComputationUsageStatementEmailRecipientsGroup#recipients_list}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#subscription_id MeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}.

---

##### `emailRecipientsGroupId`<sup>Optional</sup> <a name="emailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.emailRecipientsGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id MeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#id MeteringComputationUsageStatementEmailRecipientsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#timeouts MeteringComputationUsageStatementEmailRecipientsGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putRecipientsList">putRecipientsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetEmailRecipientsGroupId">resetEmailRecipientsGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecipientsList` <a name="putRecipientsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putRecipientsList"></a>

```java
public void putRecipientsList(IResolvable OR java.util.List<MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putRecipientsList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putTimeouts"></a>

```java
public void putTimeouts(MeteringComputationUsageStatementEmailRecipientsGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a>

---

##### `resetEmailRecipientsGroupId` <a name="resetEmailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetEmailRecipientsGroupId"></a>

```java
public void resetEmailRecipientsGroupId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationUsageStatementEmailRecipientsGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroup;

MeteringComputationUsageStatementEmailRecipientsGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroup;

MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroup;

MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroup;

MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MeteringComputationUsageStatementEmailRecipientsGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MeteringComputationUsageStatementEmailRecipientsGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MeteringComputationUsageStatementEmailRecipientsGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageStatementEmailRecipientsGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsList">recipientsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference">MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupIdInput">emailRecipientsGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsListInput">recipientsListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupId">emailRecipientsGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `recipientsList`<sup>Required</sup> <a name="recipientsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsList"></a>

```java
public MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList getRecipientsList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeouts"></a>

```java
public MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference">MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `emailRecipientsGroupIdInput`<sup>Optional</sup> <a name="emailRecipientsGroupIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupIdInput"></a>

```java
public java.lang.String getEmailRecipientsGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `recipientsListInput`<sup>Optional</sup> <a name="recipientsListInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsListInput"></a>

```java
public java.lang.Object getRecipientsListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>>

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `emailRecipientsGroupId`<sup>Required</sup> <a name="emailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupId"></a>

```java
public java.lang.String getEmailRecipientsGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageStatementEmailRecipientsGroupConfig <a name="MeteringComputationUsageStatementEmailRecipientsGroupConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroupConfig;

MeteringComputationUsageStatementEmailRecipientsGroupConfig.builder()
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
    .recipientsList(IResolvable)
    .recipientsList(java.util.List<MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct>)
    .subscriptionId(java.lang.String)
//  .emailRecipientsGroupId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(MeteringComputationUsageStatementEmailRecipientsGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#compartment_id MeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.recipientsList">recipientsList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>></code> | recipients_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#subscription_id MeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.emailRecipientsGroupId">emailRecipientsGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id MeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#id MeteringComputationUsageStatementEmailRecipientsGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#compartment_id MeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}.

---

##### `recipientsList`<sup>Required</sup> <a name="recipientsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.recipientsList"></a>

```java
public java.lang.Object getRecipientsList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>>

recipients_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#recipients_list MeteringComputationUsageStatementEmailRecipientsGroup#recipients_list}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#subscription_id MeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}.

---

##### `emailRecipientsGroupId`<sup>Optional</sup> <a name="emailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.emailRecipientsGroupId"></a>

```java
public java.lang.String getEmailRecipientsGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id MeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#id MeteringComputationUsageStatementEmailRecipientsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.timeouts"></a>

```java
public MeteringComputationUsageStatementEmailRecipientsGroupTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#timeouts MeteringComputationUsageStatementEmailRecipientsGroup#timeouts}

---

### MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct <a name="MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct;

MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.builder()
    .emailId(java.lang.String)
    .state(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.emailId">emailId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_id MeteringComputationUsageStatementEmailRecipientsGroup#email_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#state MeteringComputationUsageStatementEmailRecipientsGroup#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#first_name MeteringComputationUsageStatementEmailRecipientsGroup#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#last_name MeteringComputationUsageStatementEmailRecipientsGroup#last_name}. |

---

##### `emailId`<sup>Required</sup> <a name="emailId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.emailId"></a>

```java
public java.lang.String getEmailId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_id MeteringComputationUsageStatementEmailRecipientsGroup#email_id}.

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#state MeteringComputationUsageStatementEmailRecipientsGroup#state}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#first_name MeteringComputationUsageStatementEmailRecipientsGroup#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#last_name MeteringComputationUsageStatementEmailRecipientsGroup#last_name}.

---

### MeteringComputationUsageStatementEmailRecipientsGroupTimeouts <a name="MeteringComputationUsageStatementEmailRecipientsGroupTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts;

MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#create MeteringComputationUsageStatementEmailRecipientsGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#delete MeteringComputationUsageStatementEmailRecipientsGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#update MeteringComputationUsageStatementEmailRecipientsGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#create MeteringComputationUsageStatementEmailRecipientsGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#delete MeteringComputationUsageStatementEmailRecipientsGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#update MeteringComputationUsageStatementEmailRecipientsGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList <a name="MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList;

new MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get"></a>

```java
public MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>>

---


### MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference <a name="MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference;

new MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetLastName">resetLastName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetLastName"></a>

```java
public void resetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailIdInput">emailIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailId">emailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailIdInput`<sup>Optional</sup> <a name="emailIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailIdInput"></a>

```java
public java.lang.String getEmailIdInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `emailId`<sup>Required</sup> <a name="emailId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailId"></a>

```java
public java.lang.String getEmailId();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct</a>

---


### MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference <a name="MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_statement_email_recipients_group.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference;

new MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a>

---



