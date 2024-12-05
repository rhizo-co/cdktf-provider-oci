# `corePublicIpPoolCapacity` Submodule <a name="`corePublicIpPoolCapacity` Submodule" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CorePublicIpPoolCapacity <a name="CorePublicIpPoolCapacity" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity oci_core_public_ip_pool_capacity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacity;

CorePublicIpPoolCapacity.Builder.create(Construct scope, java.lang.String id)
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
    .byoipId(java.lang.String)
    .cidrBlock(java.lang.String)
    .publicIpPoolId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CorePublicIpPoolCapacityTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.byoipId">byoipId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#byoip_id CorePublicIpPoolCapacity#byoip_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#cidr_block CorePublicIpPoolCapacity#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.publicIpPoolId">publicIpPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#public_ip_pool_id CorePublicIpPoolCapacity#public_ip_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#id CorePublicIpPoolCapacity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `byoipId`<sup>Required</sup> <a name="byoipId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.byoipId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#byoip_id CorePublicIpPoolCapacity#byoip_id}.

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.cidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#cidr_block CorePublicIpPoolCapacity#cidr_block}.

---

##### `publicIpPoolId`<sup>Required</sup> <a name="publicIpPoolId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.publicIpPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#public_ip_pool_id CorePublicIpPoolCapacity#public_ip_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#id CorePublicIpPoolCapacity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#timeouts CorePublicIpPoolCapacity#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.putTimeouts"></a>

```java
public void putTimeouts(CorePublicIpPoolCapacityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CorePublicIpPoolCapacity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacity;

CorePublicIpPoolCapacity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacity;

CorePublicIpPoolCapacity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacity;

CorePublicIpPoolCapacity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacity;

CorePublicIpPoolCapacity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CorePublicIpPoolCapacity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CorePublicIpPoolCapacity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CorePublicIpPoolCapacity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CorePublicIpPoolCapacity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CorePublicIpPoolCapacity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference">CorePublicIpPoolCapacityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipIdInput">byoipIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolIdInput">publicIpPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipId">byoipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolId">publicIpPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeouts"></a>

```java
public CorePublicIpPoolCapacityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference">CorePublicIpPoolCapacityTimeoutsOutputReference</a>

---

##### `byoipIdInput`<sup>Optional</sup> <a name="byoipIdInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipIdInput"></a>

```java
public java.lang.String getByoipIdInput();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `publicIpPoolIdInput`<sup>Optional</sup> <a name="publicIpPoolIdInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolIdInput"></a>

```java
public java.lang.String getPublicIpPoolIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

---

##### `byoipId`<sup>Required</sup> <a name="byoipId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.byoipId"></a>

```java
public java.lang.String getByoipId();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publicIpPoolId`<sup>Required</sup> <a name="publicIpPoolId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.publicIpPoolId"></a>

```java
public java.lang.String getPublicIpPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CorePublicIpPoolCapacityConfig <a name="CorePublicIpPoolCapacityConfig" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacityConfig;

CorePublicIpPoolCapacityConfig.builder()
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
    .byoipId(java.lang.String)
    .cidrBlock(java.lang.String)
    .publicIpPoolId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CorePublicIpPoolCapacityTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.byoipId">byoipId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#byoip_id CorePublicIpPoolCapacity#byoip_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#cidr_block CorePublicIpPoolCapacity#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.publicIpPoolId">publicIpPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#public_ip_pool_id CorePublicIpPoolCapacity#public_ip_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#id CorePublicIpPoolCapacity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `byoipId`<sup>Required</sup> <a name="byoipId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.byoipId"></a>

```java
public java.lang.String getByoipId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#byoip_id CorePublicIpPoolCapacity#byoip_id}.

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#cidr_block CorePublicIpPoolCapacity#cidr_block}.

---

##### `publicIpPoolId`<sup>Required</sup> <a name="publicIpPoolId" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.publicIpPoolId"></a>

```java
public java.lang.String getPublicIpPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#public_ip_pool_id CorePublicIpPoolCapacity#public_ip_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#id CorePublicIpPoolCapacity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityConfig.property.timeouts"></a>

```java
public CorePublicIpPoolCapacityTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#timeouts CorePublicIpPoolCapacity#timeouts}

---

### CorePublicIpPoolCapacityTimeouts <a name="CorePublicIpPoolCapacityTimeouts" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacityTimeouts;

CorePublicIpPoolCapacityTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#create CorePublicIpPoolCapacity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#delete CorePublicIpPoolCapacity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#update CorePublicIpPoolCapacity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#create CorePublicIpPoolCapacity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#delete CorePublicIpPoolCapacity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_public_ip_pool_capacity#update CorePublicIpPoolCapacity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CorePublicIpPoolCapacityTimeoutsOutputReference <a name="CorePublicIpPoolCapacityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_public_ip_pool_capacity.CorePublicIpPoolCapacityTimeoutsOutputReference;

new CorePublicIpPoolCapacityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.corePublicIpPoolCapacity.CorePublicIpPoolCapacityTimeouts">CorePublicIpPoolCapacityTimeouts</a>

---



