# `dataOciCloudGuardDetectorRecipe` Submodule <a name="`dataOciCloudGuardDetectorRecipe` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDetectorRecipe <a name="DataOciCloudGuardDetectorRecipe" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipe;

DataOciCloudGuardDetectorRecipe.Builder.create(Construct scope, java.lang.String id)
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
    .detectorRecipeId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#detector_recipe_id DataOciCloudGuardDetectorRecipe#detector_recipe_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.detectorRecipeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#detector_recipe_id DataOciCloudGuardDetectorRecipe#detector_recipe_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipe;

DataOciCloudGuardDetectorRecipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipe;

DataOciCloudGuardDetectorRecipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipe;

DataOciCloudGuardDetectorRecipe.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipe;

DataOciCloudGuardDetectorRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCloudGuardDetectorRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCloudGuardDetectorRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCloudGuardDetectorRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDetectorRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeType">detectorRecipeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRules">detectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.effectiveDetectorRules">effectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.sourceDetectorRecipeId">sourceDetectorRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.targetIds">targetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeIdInput">detectorRecipeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRecipeType`<sup>Required</sup> <a name="detectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeType"></a>

```java
public java.lang.String getDetectorRecipeType();
```

- *Type:* java.lang.String

---

##### `detectorRules`<sup>Required</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRules"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesList getDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveDetectorRules`<sup>Required</sup> <a name="effectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.effectiveDetectorRules"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList getEffectiveDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `sourceDetectorRecipeId`<sup>Required</sup> <a name="sourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.sourceDetectorRecipeId"></a>

```java
public java.lang.String getSourceDetectorRecipeId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.targetIds"></a>

```java
public java.util.List<java.lang.String> getTargetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `detectorRecipeIdInput`<sup>Optional</sup> <a name="detectorRecipeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeIdInput"></a>

```java
public java.lang.String getDetectorRecipeIdInput();
```

- *Type:* java.lang.String

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeId"></a>

```java
public java.lang.String getDetectorRecipeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDetectorRecipeConfig <a name="DataOciCloudGuardDetectorRecipeConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeConfig;

DataOciCloudGuardDetectorRecipeConfig.builder()
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
    .detectorRecipeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#detector_recipe_id DataOciCloudGuardDetectorRecipe#detector_recipe_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.detectorRecipeId"></a>

```java
public java.lang.String getDetectorRecipeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#detector_recipe_id DataOciCloudGuardDetectorRecipe#detector_recipe_id}.

---

### DataOciCloudGuardDetectorRecipeDetectorRules <a name="DataOciCloudGuardDetectorRecipeDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRules;

DataOciCloudGuardDetectorRecipeDetectorRules.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules;

DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails;

DataOciCloudGuardDetectorRecipeDetectorRulesDetails.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations;

DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues;

DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings;

DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings;

DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRules <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules;

DataOciCloudGuardDetectorRecipeEffectiveDetectorRules.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules;

DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails;

DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations;

DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues;

DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings;

DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings.builder()
    .build();
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings;

DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList;

new DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference;

new DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">isPreferred</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPreferred`<sup>Required</sup> <a name="isPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```java
public IResolvable getIsPreferred();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference;

new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails">DataOciCloudGuardDetectorRecipeDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails">DataOciCloudGuardDetectorRecipeDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList;

new DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference;

new DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesList;

new DataOciCloudGuardDetectorRecipeDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference;

new DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules">candidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules">DataOciCloudGuardDetectorRecipeDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `candidateResponderRules`<sup>Required</sup> <a name="candidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList getCandidateResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.details"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeDetectorRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules">DataOciCloudGuardDetectorRecipeDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">isPreferred</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPreferred`<sup>Required</sup> <a name="isPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```java
public IResolvable getIsPreferred();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.get"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_detector_recipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference;

new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules">candidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `candidateResponderRules`<sup>Required</sup> <a name="candidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList getCandidateResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDetectorRecipeEffectiveDetectorRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRules</a>

---



