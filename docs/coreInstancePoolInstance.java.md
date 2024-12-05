# `coreInstancePoolInstance` Submodule <a name="`coreInstancePoolInstance` Submodule" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstancePoolInstance <a name="CoreInstancePoolInstance" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance oci_core_instance_pool_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstance;

CoreInstancePoolInstance.Builder.create(Construct scope, java.lang.String id)
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
    .instanceId(java.lang.String)
    .instancePoolId(java.lang.String)
//  .autoTerminateInstanceOnDelete(java.lang.Boolean)
//  .autoTerminateInstanceOnDelete(IResolvable)
//  .decrementSizeOnDelete(java.lang.Boolean)
//  .decrementSizeOnDelete(IResolvable)
//  .id(java.lang.String)
//  .timeouts(CoreInstancePoolInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_id CoreInstancePoolInstance#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_pool_id CoreInstancePoolInstance#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.autoTerminateInstanceOnDelete">autoTerminateInstanceOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#auto_terminate_instance_on_delete CoreInstancePoolInstance#auto_terminate_instance_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.decrementSizeOnDelete">decrementSizeOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#decrement_size_on_delete CoreInstancePoolInstance#decrement_size_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#id CoreInstancePoolInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_id CoreInstancePoolInstance#instance_id}.

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.instancePoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_pool_id CoreInstancePoolInstance#instance_pool_id}.

---

##### `autoTerminateInstanceOnDelete`<sup>Optional</sup> <a name="autoTerminateInstanceOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.autoTerminateInstanceOnDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#auto_terminate_instance_on_delete CoreInstancePoolInstance#auto_terminate_instance_on_delete}.

---

##### `decrementSizeOnDelete`<sup>Optional</sup> <a name="decrementSizeOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.decrementSizeOnDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#decrement_size_on_delete CoreInstancePoolInstance#decrement_size_on_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#id CoreInstancePoolInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#timeouts CoreInstancePoolInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetAutoTerminateInstanceOnDelete">resetAutoTerminateInstanceOnDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetDecrementSizeOnDelete">resetDecrementSizeOnDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.putTimeouts"></a>

```java
public void putTimeouts(CoreInstancePoolInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a>

---

##### `resetAutoTerminateInstanceOnDelete` <a name="resetAutoTerminateInstanceOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetAutoTerminateInstanceOnDelete"></a>

```java
public void resetAutoTerminateInstanceOnDelete()
```

##### `resetDecrementSizeOnDelete` <a name="resetDecrementSizeOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetDecrementSizeOnDelete"></a>

```java
public void resetDecrementSizeOnDelete()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstancePoolInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstance;

CoreInstancePoolInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstance;

CoreInstancePoolInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstance;

CoreInstancePoolInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstance;

CoreInstancePoolInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreInstancePoolInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreInstancePoolInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreInstancePoolInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreInstancePoolInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstancePoolInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.loadBalancerBackends">loadBalancerBackends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList">CoreInstancePoolInstanceLoadBalancerBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference">CoreInstancePoolInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDeleteInput">autoTerminateInstanceOnDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDeleteInput">decrementSizeOnDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDelete">autoTerminateInstanceOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDelete">decrementSizeOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceConfigurationId"></a>

```java
public java.lang.String getInstanceConfigurationId();
```

- *Type:* java.lang.String

---

##### `loadBalancerBackends`<sup>Required</sup> <a name="loadBalancerBackends" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.loadBalancerBackends"></a>

```java
public CoreInstancePoolInstanceLoadBalancerBackendsList getLoadBalancerBackends();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList">CoreInstancePoolInstanceLoadBalancerBackendsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeouts"></a>

```java
public CoreInstancePoolInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference">CoreInstancePoolInstanceTimeoutsOutputReference</a>

---

##### `autoTerminateInstanceOnDeleteInput`<sup>Optional</sup> <a name="autoTerminateInstanceOnDeleteInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDeleteInput"></a>

```java
public java.lang.Object getAutoTerminateInstanceOnDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decrementSizeOnDeleteInput`<sup>Optional</sup> <a name="decrementSizeOnDeleteInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDeleteInput"></a>

```java
public java.lang.Object getDecrementSizeOnDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolIdInput"></a>

```java
public java.lang.String getInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a>

---

##### `autoTerminateInstanceOnDelete`<sup>Required</sup> <a name="autoTerminateInstanceOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.autoTerminateInstanceOnDelete"></a>

```java
public java.lang.Object getAutoTerminateInstanceOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decrementSizeOnDelete`<sup>Required</sup> <a name="decrementSizeOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.decrementSizeOnDelete"></a>

```java
public java.lang.Object getDecrementSizeOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstancePoolInstanceConfig <a name="CoreInstancePoolInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstanceConfig;

CoreInstancePoolInstanceConfig.builder()
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
    .instanceId(java.lang.String)
    .instancePoolId(java.lang.String)
//  .autoTerminateInstanceOnDelete(java.lang.Boolean)
//  .autoTerminateInstanceOnDelete(IResolvable)
//  .decrementSizeOnDelete(java.lang.Boolean)
//  .decrementSizeOnDelete(IResolvable)
//  .id(java.lang.String)
//  .timeouts(CoreInstancePoolInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_id CoreInstancePoolInstance#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_pool_id CoreInstancePoolInstance#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.autoTerminateInstanceOnDelete">autoTerminateInstanceOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#auto_terminate_instance_on_delete CoreInstancePoolInstance#auto_terminate_instance_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.decrementSizeOnDelete">decrementSizeOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#decrement_size_on_delete CoreInstancePoolInstance#decrement_size_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#id CoreInstancePoolInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_id CoreInstancePoolInstance#instance_id}.

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#instance_pool_id CoreInstancePoolInstance#instance_pool_id}.

---

##### `autoTerminateInstanceOnDelete`<sup>Optional</sup> <a name="autoTerminateInstanceOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.autoTerminateInstanceOnDelete"></a>

```java
public java.lang.Object getAutoTerminateInstanceOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#auto_terminate_instance_on_delete CoreInstancePoolInstance#auto_terminate_instance_on_delete}.

---

##### `decrementSizeOnDelete`<sup>Optional</sup> <a name="decrementSizeOnDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.decrementSizeOnDelete"></a>

```java
public java.lang.Object getDecrementSizeOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#decrement_size_on_delete CoreInstancePoolInstance#decrement_size_on_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#id CoreInstancePoolInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceConfig.property.timeouts"></a>

```java
public CoreInstancePoolInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#timeouts CoreInstancePoolInstance#timeouts}

---

### CoreInstancePoolInstanceLoadBalancerBackends <a name="CoreInstancePoolInstanceLoadBalancerBackends" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstanceLoadBalancerBackends;

CoreInstancePoolInstanceLoadBalancerBackends.builder()
    .build();
```


### CoreInstancePoolInstanceTimeouts <a name="CoreInstancePoolInstanceTimeouts" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstanceTimeouts;

CoreInstancePoolInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#create CoreInstancePoolInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#delete CoreInstancePoolInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#update CoreInstancePoolInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#create CoreInstancePoolInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#delete CoreInstancePoolInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_pool_instance#update CoreInstancePoolInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstancePoolInstanceLoadBalancerBackendsList <a name="CoreInstancePoolInstanceLoadBalancerBackendsList" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstanceLoadBalancerBackendsList;

new CoreInstancePoolInstanceLoadBalancerBackendsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.get"></a>

```java
public CoreInstancePoolInstanceLoadBalancerBackendsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CoreInstancePoolInstanceLoadBalancerBackendsOutputReference <a name="CoreInstancePoolInstanceLoadBalancerBackendsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference;

new CoreInstancePoolInstanceLoadBalancerBackendsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendHealthStatus">backendHealthStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendName">backendName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends">CoreInstancePoolInstanceLoadBalancerBackends</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendHealthStatus`<sup>Required</sup> <a name="backendHealthStatus" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendHealthStatus"></a>

```java
public java.lang.String getBackendHealthStatus();
```

- *Type:* java.lang.String

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendName"></a>

```java
public java.lang.String getBackendName();
```

- *Type:* java.lang.String

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackendsOutputReference.property.internalValue"></a>

```java
public CoreInstancePoolInstanceLoadBalancerBackends getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceLoadBalancerBackends">CoreInstancePoolInstanceLoadBalancerBackends</a>

---


### CoreInstancePoolInstanceTimeoutsOutputReference <a name="CoreInstancePoolInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance_pool_instance.CoreInstancePoolInstanceTimeoutsOutputReference;

new CoreInstancePoolInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstancePoolInstance.CoreInstancePoolInstanceTimeouts">CoreInstancePoolInstanceTimeouts</a>

---



