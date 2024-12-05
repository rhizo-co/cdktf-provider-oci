# `dataOciCoreComputeImageCapabilitySchema` Submodule <a name="`dataOciCoreComputeImageCapabilitySchema` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeImageCapabilitySchema <a name="DataOciCoreComputeImageCapabilitySchema" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema oci_core_compute_image_capability_schema}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_image_capability_schema.DataOciCoreComputeImageCapabilitySchema;

DataOciCoreComputeImageCapabilitySchema.Builder.create(Construct scope, java.lang.String id)
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
    .computeImageCapabilitySchemaId(java.lang.String)
//  .isMergeEnabled(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.computeImageCapabilitySchemaId">computeImageCapabilitySchemaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.isMergeEnabled">isMergeEnabled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeImageCapabilitySchemaId`<sup>Required</sup> <a name="computeImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.computeImageCapabilitySchemaId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}.

---

##### `isMergeEnabled`<sup>Optional</sup> <a name="isMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.isMergeEnabled"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetIsMergeEnabled">resetIsMergeEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetIsMergeEnabled` <a name="resetIsMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetIsMergeEnabled"></a>

```java
public void resetIsMergeEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_image_capability_schema.DataOciCoreComputeImageCapabilitySchema;

DataOciCoreComputeImageCapabilitySchema.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_image_capability_schema.DataOciCoreComputeImageCapabilitySchema;

DataOciCoreComputeImageCapabilitySchema.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_image_capability_schema.DataOciCoreComputeImageCapabilitySchema;

DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_image_capability_schema.DataOciCoreComputeImageCapabilitySchema;

DataOciCoreComputeImageCapabilitySchema.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreComputeImageCapabilitySchema.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreComputeImageCapabilitySchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreComputeImageCapabilitySchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeImageCapabilitySchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaId">computeGlobalImageCapabilitySchemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaVersionName">computeGlobalImageCapabilitySchemaVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.schemaData">schemaData</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaIdInput">computeImageCapabilitySchemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabledInput">isMergeEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaId">computeImageCapabilitySchemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabled">isMergeEnabled</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaId"></a>

```java
public java.lang.String getComputeGlobalImageCapabilitySchemaId();
```

- *Type:* java.lang.String

---

##### `computeGlobalImageCapabilitySchemaVersionName`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaVersionName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaVersionName"></a>

```java
public java.lang.String getComputeGlobalImageCapabilitySchemaVersionName();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `schemaData`<sup>Required</sup> <a name="schemaData" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.schemaData"></a>

```java
public StringMap getSchemaData();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `computeImageCapabilitySchemaIdInput`<sup>Optional</sup> <a name="computeImageCapabilitySchemaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaIdInput"></a>

```java
public java.lang.String getComputeImageCapabilitySchemaIdInput();
```

- *Type:* java.lang.String

---

##### `isMergeEnabledInput`<sup>Optional</sup> <a name="isMergeEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabledInput"></a>

```java
public java.lang.String getIsMergeEnabledInput();
```

- *Type:* java.lang.String

---

##### `computeImageCapabilitySchemaId`<sup>Required</sup> <a name="computeImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaId"></a>

```java
public java.lang.String getComputeImageCapabilitySchemaId();
```

- *Type:* java.lang.String

---

##### `isMergeEnabled`<sup>Required</sup> <a name="isMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabled"></a>

```java
public java.lang.String getIsMergeEnabled();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeImageCapabilitySchemaConfig <a name="DataOciCoreComputeImageCapabilitySchemaConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_compute_image_capability_schema.DataOciCoreComputeImageCapabilitySchemaConfig;

DataOciCoreComputeImageCapabilitySchemaConfig.builder()
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
    .computeImageCapabilitySchemaId(java.lang.String)
//  .isMergeEnabled(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.computeImageCapabilitySchemaId">computeImageCapabilitySchemaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.isMergeEnabled">isMergeEnabled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeImageCapabilitySchemaId`<sup>Required</sup> <a name="computeImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.computeImageCapabilitySchemaId"></a>

```java
public java.lang.String getComputeImageCapabilitySchemaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}.

---

##### `isMergeEnabled`<sup>Optional</sup> <a name="isMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.isMergeEnabled"></a>

```java
public java.lang.String getIsMergeEnabled();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}.

---



