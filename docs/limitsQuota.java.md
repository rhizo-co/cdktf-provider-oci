# `limitsQuota` Submodule <a name="`limitsQuota` Submodule" id="rhizo-co-terraform-provider-oci.limitsQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LimitsQuota <a name="LimitsQuota" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota oci_limits_quota}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuota;

LimitsQuota.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .name(java.lang.String)
    .statements(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<LimitsQuotaLocks>)
//  .timeouts(LimitsQuotaTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#compartment_id LimitsQuota#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#description LimitsQuota#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#name LimitsQuota#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.statements">statements</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#statements LimitsQuota#statements}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#defined_tags LimitsQuota#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#freeform_tags LimitsQuota#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#id LimitsQuota#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#compartment_id LimitsQuota#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#description LimitsQuota#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#name LimitsQuota#name}.

---

##### `statements`<sup>Required</sup> <a name="statements" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.statements"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#statements LimitsQuota#statements}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#defined_tags LimitsQuota#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#freeform_tags LimitsQuota#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#id LimitsQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#locks LimitsQuota#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#timeouts LimitsQuota#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<LimitsQuotaLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.putTimeouts"></a>

```java
public void putTimeouts(LimitsQuotaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetId"></a>

```java
public void resetId()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LimitsQuota resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuota;

LimitsQuota.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuota;

LimitsQuota.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuota;

LimitsQuota.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuota;

LimitsQuota.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LimitsQuota.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LimitsQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LimitsQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LimitsQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LimitsQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.isLockOverride">isLockOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList">LimitsQuotaLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference">LimitsQuotaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.statementsInput">statementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.statements">statements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.isLockOverride"></a>

```java
public IResolvable getIsLockOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.locks"></a>

```java
public LimitsQuotaLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList">LimitsQuotaLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.timeouts"></a>

```java
public LimitsQuotaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference">LimitsQuotaTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statementsInput`<sup>Optional</sup> <a name="statementsInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.statementsInput"></a>

```java
public java.util.List<java.lang.String> getStatementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `statements`<sup>Required</sup> <a name="statements" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.statements"></a>

```java
public java.util.List<java.lang.String> getStatements();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuota.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LimitsQuotaConfig <a name="LimitsQuotaConfig" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuotaConfig;

LimitsQuotaConfig.builder()
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
    .description(java.lang.String)
    .name(java.lang.String)
    .statements(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<LimitsQuotaLocks>)
//  .timeouts(LimitsQuotaTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#compartment_id LimitsQuota#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#description LimitsQuota#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#name LimitsQuota#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.statements">statements</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#statements LimitsQuota#statements}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#defined_tags LimitsQuota#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#freeform_tags LimitsQuota#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#id LimitsQuota#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#compartment_id LimitsQuota#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#description LimitsQuota#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#name LimitsQuota#name}.

---

##### `statements`<sup>Required</sup> <a name="statements" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.statements"></a>

```java
public java.util.List<java.lang.String> getStatements();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#statements LimitsQuota#statements}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#defined_tags LimitsQuota#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#freeform_tags LimitsQuota#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#id LimitsQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#locks LimitsQuota#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaConfig.property.timeouts"></a>

```java
public LimitsQuotaTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#timeouts LimitsQuota#timeouts}

---

### LimitsQuotaLocks <a name="LimitsQuotaLocks" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuotaLocks;

LimitsQuotaLocks.builder()
    .type(java.lang.String)
//  .message(java.lang.String)
//  .relatedResourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#type LimitsQuota#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#message LimitsQuota#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#related_resource_id LimitsQuota#related_resource_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#type LimitsQuota#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#message LimitsQuota#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#related_resource_id LimitsQuota#related_resource_id}.

---

### LimitsQuotaTimeouts <a name="LimitsQuotaTimeouts" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuotaTimeouts;

LimitsQuotaTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#create LimitsQuota#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#delete LimitsQuota#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#update LimitsQuota#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#create LimitsQuota#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#delete LimitsQuota#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/limits_quota#update LimitsQuota#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LimitsQuotaLocksList <a name="LimitsQuotaLocksList" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuotaLocksList;

new LimitsQuotaLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.get"></a>

```java
public LimitsQuotaLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>>

---


### LimitsQuotaLocksOutputReference <a name="LimitsQuotaLocksOutputReference" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuotaLocksOutputReference;

new LimitsQuotaLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.resetRelatedResourceId"></a>

```java
public void resetRelatedResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.relatedResourceIdInput"></a>

```java
public java.lang.String getRelatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaLocks">LimitsQuotaLocks</a>

---


### LimitsQuotaTimeoutsOutputReference <a name="LimitsQuotaTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.limits_quota.LimitsQuotaTimeoutsOutputReference;

new LimitsQuotaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.limitsQuota.LimitsQuotaTimeouts">LimitsQuotaTimeouts</a>

---


