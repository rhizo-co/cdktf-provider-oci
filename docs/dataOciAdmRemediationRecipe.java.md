# `dataOciAdmRemediationRecipe` Submodule <a name="`dataOciAdmRemediationRecipe` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAdmRemediationRecipe <a name="DataOciAdmRemediationRecipe" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipe oci_adm_remediation_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipe;

DataOciAdmRemediationRecipe.Builder.create(Construct scope, java.lang.String id)
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
    .remediationRecipeId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.remediationRecipeId">remediationRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipe#remediation_recipe_id DataOciAdmRemediationRecipe#remediation_recipe_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `remediationRecipeId`<sup>Required</sup> <a name="remediationRecipeId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.Initializer.parameter.remediationRecipeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipe#remediation_recipe_id DataOciAdmRemediationRecipe#remediation_recipe_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAdmRemediationRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipe;

DataOciAdmRemediationRecipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipe;

DataOciAdmRemediationRecipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipe;

DataOciAdmRemediationRecipe.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipe;

DataOciAdmRemediationRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciAdmRemediationRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciAdmRemediationRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciAdmRemediationRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciAdmRemediationRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAdmRemediationRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.detectConfiguration">detectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList">DataOciAdmRemediationRecipeDetectConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.isRunTriggeredOnKbChange">isRunTriggeredOnKbChange</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList">DataOciAdmRemediationRecipeNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.scmConfiguration">scmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList">DataOciAdmRemediationRecipeScmConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.verifyConfiguration">verifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList">DataOciAdmRemediationRecipeVerifyConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.remediationRecipeIdInput">remediationRecipeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.remediationRecipeId">remediationRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `detectConfiguration`<sup>Required</sup> <a name="detectConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.detectConfiguration"></a>

```java
public DataOciAdmRemediationRecipeDetectConfigurationList getDetectConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList">DataOciAdmRemediationRecipeDetectConfigurationList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRunTriggeredOnKbChange`<sup>Required</sup> <a name="isRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.isRunTriggeredOnKbChange"></a>

```java
public IResolvable getIsRunTriggeredOnKbChange();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.networkConfiguration"></a>

```java
public DataOciAdmRemediationRecipeNetworkConfigurationList getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList">DataOciAdmRemediationRecipeNetworkConfigurationList</a>

---

##### `scmConfiguration`<sup>Required</sup> <a name="scmConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.scmConfiguration"></a>

```java
public DataOciAdmRemediationRecipeScmConfigurationList getScmConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList">DataOciAdmRemediationRecipeScmConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `verifyConfiguration`<sup>Required</sup> <a name="verifyConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.verifyConfiguration"></a>

```java
public DataOciAdmRemediationRecipeVerifyConfigurationList getVerifyConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList">DataOciAdmRemediationRecipeVerifyConfigurationList</a>

---

##### `remediationRecipeIdInput`<sup>Optional</sup> <a name="remediationRecipeIdInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.remediationRecipeIdInput"></a>

```java
public java.lang.String getRemediationRecipeIdInput();
```

- *Type:* java.lang.String

---

##### `remediationRecipeId`<sup>Required</sup> <a name="remediationRecipeId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.remediationRecipeId"></a>

```java
public java.lang.String getRemediationRecipeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAdmRemediationRecipeConfig <a name="DataOciAdmRemediationRecipeConfig" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeConfig;

DataOciAdmRemediationRecipeConfig.builder()
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
    .remediationRecipeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.remediationRecipeId">remediationRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipe#remediation_recipe_id DataOciAdmRemediationRecipe#remediation_recipe_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `remediationRecipeId`<sup>Required</sup> <a name="remediationRecipeId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeConfig.property.remediationRecipeId"></a>

```java
public java.lang.String getRemediationRecipeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_recipe#remediation_recipe_id DataOciAdmRemediationRecipe#remediation_recipe_id}.

---

### DataOciAdmRemediationRecipeDetectConfiguration <a name="DataOciAdmRemediationRecipeDetectConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeDetectConfiguration;

DataOciAdmRemediationRecipeDetectConfiguration.builder()
    .build();
```


### DataOciAdmRemediationRecipeNetworkConfiguration <a name="DataOciAdmRemediationRecipeNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeNetworkConfiguration;

DataOciAdmRemediationRecipeNetworkConfiguration.builder()
    .build();
```


### DataOciAdmRemediationRecipeScmConfiguration <a name="DataOciAdmRemediationRecipeScmConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeScmConfiguration;

DataOciAdmRemediationRecipeScmConfiguration.builder()
    .build();
```


### DataOciAdmRemediationRecipeVerifyConfiguration <a name="DataOciAdmRemediationRecipeVerifyConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeVerifyConfiguration;

DataOciAdmRemediationRecipeVerifyConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAdmRemediationRecipeDetectConfigurationList <a name="DataOciAdmRemediationRecipeDetectConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeDetectConfigurationList;

new DataOciAdmRemediationRecipeDetectConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.get"></a>

```java
public DataOciAdmRemediationRecipeDetectConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAdmRemediationRecipeDetectConfigurationOutputReference <a name="DataOciAdmRemediationRecipeDetectConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference;

new DataOciAdmRemediationRecipeDetectConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score">maxPermissibleCvssV2Score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score">maxPermissibleCvssV3Score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity">maxPermissibleSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy">upgradePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfiguration">DataOciAdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPermissibleCvssV2Score`<sup>Required</sup> <a name="maxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score"></a>

```java
public java.lang.Number getMaxPermissibleCvssV2Score();
```

- *Type:* java.lang.Number

---

##### `maxPermissibleCvssV3Score`<sup>Required</sup> <a name="maxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score"></a>

```java
public java.lang.Number getMaxPermissibleCvssV3Score();
```

- *Type:* java.lang.Number

---

##### `maxPermissibleSeverity`<sup>Required</sup> <a name="maxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity"></a>

```java
public java.lang.String getMaxPermissibleSeverity();
```

- *Type:* java.lang.String

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy"></a>

```java
public java.lang.String getUpgradePolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciAdmRemediationRecipeDetectConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeDetectConfiguration">DataOciAdmRemediationRecipeDetectConfiguration</a>

---


### DataOciAdmRemediationRecipeNetworkConfigurationList <a name="DataOciAdmRemediationRecipeNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeNetworkConfigurationList;

new DataOciAdmRemediationRecipeNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.get"></a>

```java
public DataOciAdmRemediationRecipeNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAdmRemediationRecipeNetworkConfigurationOutputReference <a name="DataOciAdmRemediationRecipeNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference;

new DataOciAdmRemediationRecipeNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfiguration">DataOciAdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciAdmRemediationRecipeNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeNetworkConfiguration">DataOciAdmRemediationRecipeNetworkConfiguration</a>

---


### DataOciAdmRemediationRecipeScmConfigurationList <a name="DataOciAdmRemediationRecipeScmConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeScmConfigurationList;

new DataOciAdmRemediationRecipeScmConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.get"></a>

```java
public DataOciAdmRemediationRecipeScmConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAdmRemediationRecipeScmConfigurationOutputReference <a name="DataOciAdmRemediationRecipeScmConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference;

new DataOciAdmRemediationRecipeScmConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation">buildFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType">externalScmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled">isAutomergeEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId">ociCodeRepositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId">patSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfiguration">DataOciAdmRemediationRecipeScmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `buildFileLocation`<sup>Required</sup> <a name="buildFileLocation" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation"></a>

```java
public java.lang.String getBuildFileLocation();
```

- *Type:* java.lang.String

---

##### `externalScmType`<sup>Required</sup> <a name="externalScmType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType"></a>

```java
public java.lang.String getExternalScmType();
```

- *Type:* java.lang.String

---

##### `isAutomergeEnabled`<sup>Required</sup> <a name="isAutomergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled"></a>

```java
public IResolvable getIsAutomergeEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ociCodeRepositoryId`<sup>Required</sup> <a name="ociCodeRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId"></a>

```java
public java.lang.String getOciCodeRepositoryId();
```

- *Type:* java.lang.String

---

##### `patSecretId`<sup>Required</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId"></a>

```java
public java.lang.String getPatSecretId();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciAdmRemediationRecipeScmConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeScmConfiguration">DataOciAdmRemediationRecipeScmConfiguration</a>

---


### DataOciAdmRemediationRecipeVerifyConfigurationList <a name="DataOciAdmRemediationRecipeVerifyConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeVerifyConfigurationList;

new DataOciAdmRemediationRecipeVerifyConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.get"></a>

```java
public DataOciAdmRemediationRecipeVerifyConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAdmRemediationRecipeVerifyConfigurationOutputReference <a name="DataOciAdmRemediationRecipeVerifyConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_adm_remediation_recipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference;

new DataOciAdmRemediationRecipeVerifyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters">additionalParameters</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType">buildServiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl">jenkinsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName">jobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId">patSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId">triggerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfiguration">DataOciAdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalParameters`<sup>Required</sup> <a name="additionalParameters" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters"></a>

```java
public StringMap getAdditionalParameters();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `buildServiceType`<sup>Required</sup> <a name="buildServiceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType"></a>

```java
public java.lang.String getBuildServiceType();
```

- *Type:* java.lang.String

---

##### `jenkinsUrl`<sup>Required</sup> <a name="jenkinsUrl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl"></a>

```java
public java.lang.String getJenkinsUrl();
```

- *Type:* java.lang.String

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

---

##### `patSecretId`<sup>Required</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId"></a>

```java
public java.lang.String getPatSecretId();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `triggerSecretId`<sup>Required</sup> <a name="triggerSecretId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId"></a>

```java
public java.lang.String getTriggerSecretId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciAdmRemediationRecipeVerifyConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRecipe.DataOciAdmRemediationRecipeVerifyConfiguration">DataOciAdmRemediationRecipeVerifyConfiguration</a>

---



