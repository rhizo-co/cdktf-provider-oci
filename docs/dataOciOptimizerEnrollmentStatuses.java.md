# `dataOciOptimizerEnrollmentStatuses` Submodule <a name="`dataOciOptimizerEnrollmentStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerEnrollmentStatuses <a name="DataOciOptimizerEnrollmentStatuses" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses oci_optimizer_enrollment_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatuses;

DataOciOptimizerEnrollmentStatuses.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOptimizerEnrollmentStatusesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#filter DataOciOptimizerEnrollmentStatuses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOptimizerEnrollmentStatusesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState"></a>

```java
public void resetState()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatuses;

DataOciOptimizerEnrollmentStatuses.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatuses;

DataOciOptimizerEnrollmentStatuses.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatuses;

DataOciOptimizerEnrollmentStatuses.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatuses;

DataOciOptimizerEnrollmentStatuses.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOptimizerEnrollmentStatuses.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOptimizerEnrollmentStatuses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOptimizerEnrollmentStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerEnrollmentStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection">enrollmentStatusCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `enrollmentStatusCollection`<sup>Required</sup> <a name="enrollmentStatusCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection"></a>

```java
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList getEnrollmentStatusCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter"></a>

```java
public DataOciOptimizerEnrollmentStatusesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerEnrollmentStatusesConfig <a name="DataOciOptimizerEnrollmentStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesConfig;

DataOciOptimizerEnrollmentStatusesConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOptimizerEnrollmentStatusesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#filter DataOciOptimizerEnrollmentStatuses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}.

---

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection;

DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection.builder()
    .build();
```


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems;

DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems.builder()
    .build();
```


### DataOciOptimizerEnrollmentStatusesFilter <a name="DataOciOptimizerEnrollmentStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesFilter;

DataOciOptimizerEnrollmentStatusesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get"></a>

```java
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId">enrollmentStatusId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `enrollmentStatusId`<sup>Required</sup> <a name="enrollmentStatusId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId"></a>

```java
public java.lang.String getEnrollmentStatusId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a>

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get"></a>

```java
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items"></a>

```java
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a>

---


### DataOciOptimizerEnrollmentStatusesFilterList <a name="DataOciOptimizerEnrollmentStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesFilterList;

new DataOciOptimizerEnrollmentStatusesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get"></a>

```java
public DataOciOptimizerEnrollmentStatusesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>>

---


### DataOciOptimizerEnrollmentStatusesFilterOutputReference <a name="DataOciOptimizerEnrollmentStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_enrollment_statuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference;

new DataOciOptimizerEnrollmentStatusesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>

---



