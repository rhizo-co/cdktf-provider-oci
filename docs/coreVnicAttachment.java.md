# `coreVnicAttachment` Submodule <a name="`coreVnicAttachment` Submodule" id="rhizo-co-terraform-provider-oci.coreVnicAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVnicAttachment <a name="CoreVnicAttachment" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment oci_core_vnic_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachment;

CoreVnicAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .createVnicDetails(CoreVnicAttachmentCreateVnicDetails)
    .instanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .nicIndex(java.lang.Number)
//  .timeouts(CoreVnicAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.nicIndex">nicIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createVnicDetails`<sup>Required</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.createVnicDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create_vnic_details CoreVnicAttachment#create_vnic_details}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nicIndex`<sup>Optional</sup> <a name="nicIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.nicIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#timeouts CoreVnicAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails">putCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetNicIndex">resetNicIndex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCreateVnicDetails` <a name="putCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails"></a>

```java
public void putCreateVnicDetails(CoreVnicAttachmentCreateVnicDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts"></a>

```java
public void putTimeouts(CoreVnicAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetNicIndex` <a name="resetNicIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetNicIndex"></a>

```java
public void resetNicIndex()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVnicAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachment;

CoreVnicAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachment;

CoreVnicAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachment;

CoreVnicAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachment;

CoreVnicAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreVnicAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreVnicAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreVnicAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreVnicAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreVnicAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference">CoreVnicAttachmentCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference">CoreVnicAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vnicId">vnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetailsInput">createVnicDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndexInput">nicIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndex">nicIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createVnicDetails`<sup>Required</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetails"></a>

```java
public CoreVnicAttachmentCreateVnicDetailsOutputReference getCreateVnicDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference">CoreVnicAttachmentCreateVnicDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeouts"></a>

```java
public CoreVnicAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference">CoreVnicAttachmentTimeoutsOutputReference</a>

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vnicId"></a>

```java
public java.lang.String getVnicId();
```

- *Type:* java.lang.String

---

##### `createVnicDetailsInput`<sup>Optional</sup> <a name="createVnicDetailsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetailsInput"></a>

```java
public CoreVnicAttachmentCreateVnicDetails getCreateVnicDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nicIndexInput`<sup>Optional</sup> <a name="nicIndexInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndexInput"></a>

```java
public java.lang.Number getNicIndexInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `nicIndex`<sup>Required</sup> <a name="nicIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndex"></a>

```java
public java.lang.Number getNicIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVnicAttachmentConfig <a name="CoreVnicAttachmentConfig" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentConfig;

CoreVnicAttachmentConfig.builder()
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
    .createVnicDetails(CoreVnicAttachmentCreateVnicDetails)
    .instanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .nicIndex(java.lang.Number)
//  .timeouts(CoreVnicAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.nicIndex">nicIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createVnicDetails`<sup>Required</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.createVnicDetails"></a>

```java
public CoreVnicAttachmentCreateVnicDetails getCreateVnicDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create_vnic_details CoreVnicAttachment#create_vnic_details}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nicIndex`<sup>Optional</sup> <a name="nicIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.nicIndex"></a>

```java
public java.lang.Number getNicIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.timeouts"></a>

```java
public CoreVnicAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#timeouts CoreVnicAttachment#timeouts}

---

### CoreVnicAttachmentCreateVnicDetails <a name="CoreVnicAttachmentCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentCreateVnicDetails;

CoreVnicAttachmentCreateVnicDetails.builder()
//  .assignIpv6Ip(java.lang.Boolean)
//  .assignIpv6Ip(IResolvable)
//  .assignPrivateDnsRecord(java.lang.Boolean)
//  .assignPrivateDnsRecord(IResolvable)
//  .assignPublicIp(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .ipv6AddressIpv6SubnetCidrPairDetails(IResolvable)
//  .ipv6AddressIpv6SubnetCidrPairDetails(java.util.List<CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .skipSourceDestCheck(java.lang.Boolean)
//  .skipSourceDestCheck(IResolvable)
//  .subnetId(java.lang.String)
//  .vlanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignIpv6Ip">assignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_ipv6ip CoreVnicAttachment#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPrivateDnsRecord">assignPrivateDnsRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_private_dns_record CoreVnicAttachment#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_public_ip CoreVnicAttachment#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#defined_tags CoreVnicAttachment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#freeform_tags CoreVnicAttachment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#hostname_label CoreVnicAttachment#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nsg_ids CoreVnicAttachment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#private_ip CoreVnicAttachment#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#security_attributes CoreVnicAttachment#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#skip_source_dest_check CoreVnicAttachment#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#subnet_id CoreVnicAttachment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#vlan_id CoreVnicAttachment#vlan_id}. |

---

##### `assignIpv6Ip`<sup>Optional</sup> <a name="assignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignIpv6Ip"></a>

```java
public java.lang.Object getAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_ipv6ip CoreVnicAttachment#assign_ipv6ip}.

---

##### `assignPrivateDnsRecord`<sup>Optional</sup> <a name="assignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```java
public java.lang.Object getAssignPrivateDnsRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_private_dns_record CoreVnicAttachment#assign_private_dns_record}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_public_ip CoreVnicAttachment#assign_public_ip}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#defined_tags CoreVnicAttachment#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#freeform_tags CoreVnicAttachment#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#hostname_label CoreVnicAttachment#hostname_label}.

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6address_ipv6subnet_cidr_pair_details CoreVnicAttachment#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nsg_ids CoreVnicAttachment#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#private_ip CoreVnicAttachment#private_ip}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#security_attributes CoreVnicAttachment#security_attributes}.

---

##### `skipSourceDestCheck`<sup>Optional</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.skipSourceDestCheck"></a>

```java
public java.lang.Object getSkipSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#skip_source_dest_check CoreVnicAttachment#skip_source_dest_check}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#subnet_id CoreVnicAttachment#subnet_id}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#vlan_id CoreVnicAttachment#vlan_id}.

---

### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails;

CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.builder()
//  .ipv6Address(java.lang.String)
//  .ipv6SubnetCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_address CoreVnicAttachment#ipv6_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_subnet_cidr CoreVnicAttachment#ipv6_subnet_cidr}. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_address CoreVnicAttachment#ipv6_address}.

---

##### `ipv6SubnetCidr`<sup>Optional</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_subnet_cidr CoreVnicAttachment#ipv6_subnet_cidr}.

---

### CoreVnicAttachmentTimeouts <a name="CoreVnicAttachmentTimeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentTimeouts;

CoreVnicAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create CoreVnicAttachment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#delete CoreVnicAttachment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#update CoreVnicAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create CoreVnicAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#delete CoreVnicAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#update CoreVnicAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList;

new CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---


### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">resetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetIpv6SubnetCidr` <a name="resetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```java
public void resetIpv6SubnetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">ipv6SubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidrInput`<sup>Optional</sup> <a name="ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```java
public java.lang.String getIpv6SubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### CoreVnicAttachmentCreateVnicDetailsOutputReference <a name="CoreVnicAttachmentCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentCreateVnicDetailsOutputReference;

new CoreVnicAttachmentCreateVnicDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">putIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignIpv6Ip">resetAssignIpv6Ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">resetAssignPrivateDnsRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">resetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">resetSkipSourceDestCheck</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv6AddressIpv6SubnetCidrPairDetails` <a name="putIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void putIpv6AddressIpv6SubnetCidrPairDetails(IResolvable OR java.util.List<CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `resetAssignIpv6Ip` <a name="resetAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```java
public void resetAssignIpv6Ip()
```

##### `resetAssignPrivateDnsRecord` <a name="resetAssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```java
public void resetAssignPrivateDnsRecord()
```

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```java
public void resetHostnameLabel()
```

##### `resetIpv6AddressIpv6SubnetCidrPairDetails` <a name="resetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void resetIpv6AddressIpv6SubnetCidrPairDetails()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetSkipSourceDestCheck` <a name="resetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```java
public void resetSkipSourceDestCheck()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVlanId` <a name="resetVlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetVlanId"></a>

```java
public void resetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6IpInput">assignIpv6IpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">assignPrivateDnsRecordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">skipSourceDestCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6Ip">assignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">assignPrivateDnsRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `assignIpv6IpInput`<sup>Optional</sup> <a name="assignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```java
public java.lang.Object getAssignIpv6IpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPrivateDnsRecordInput`<sup>Optional</sup> <a name="assignPrivateDnsRecordInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```java
public java.lang.Object getAssignPrivateDnsRecordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.String getAssignPublicIpInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```java
public java.lang.String getHostnameLabelInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `skipSourceDestCheckInput`<sup>Optional</sup> <a name="skipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```java
public java.lang.Object getSkipSourceDestCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```java
public java.lang.String getVlanIdInput();
```

- *Type:* java.lang.String

---

##### `assignIpv6Ip`<sup>Required</sup> <a name="assignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```java
public java.lang.Object getAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPrivateDnsRecord`<sup>Required</sup> <a name="assignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```java
public java.lang.Object getAssignPrivateDnsRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `skipSourceDestCheck`<sup>Required</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```java
public java.lang.Object getSkipSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.internalValue"></a>

```java
public CoreVnicAttachmentCreateVnicDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---


### CoreVnicAttachmentTimeoutsOutputReference <a name="CoreVnicAttachmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_vnic_attachment.CoreVnicAttachmentTimeoutsOutputReference;

new CoreVnicAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

---



