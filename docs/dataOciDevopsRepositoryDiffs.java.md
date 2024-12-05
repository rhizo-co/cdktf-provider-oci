# `dataOciDevopsRepositoryDiffs` Submodule <a name="`dataOciDevopsRepositoryDiffs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryDiffs <a name="DataOciDevopsRepositoryDiffs" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs oci_devops_repository_diffs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffs;

DataOciDevopsRepositoryDiffs.Builder.create(Construct scope, java.lang.String id)
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
    .baseVersion(java.lang.String)
    .repositoryId(java.lang.String)
    .targetVersion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsRepositoryDiffsFilter>)
//  .id(java.lang.String)
//  .isComparisonFromMergeBase(java.lang.Boolean)
//  .isComparisonFromMergeBase(IResolvable)
//  .targetRepositoryId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.baseVersion">baseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetRepositoryId">targetRepositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.baseVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}.

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#filter DataOciDevopsRepositoryDiffs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isComparisonFromMergeBase`<sup>Optional</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.isComparisonFromMergeBase"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}.

---

##### `targetRepositoryId`<sup>Optional</sup> <a name="targetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.targetRepositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetIsComparisonFromMergeBase">resetIsComparisonFromMergeBase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetTargetRepositoryId">resetTargetRepositoryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDevopsRepositoryDiffsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetId"></a>

```java
public void resetId()
```

##### `resetIsComparisonFromMergeBase` <a name="resetIsComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetIsComparisonFromMergeBase"></a>

```java
public void resetIsComparisonFromMergeBase()
```

##### `resetTargetRepositoryId` <a name="resetTargetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetTargetRepositoryId"></a>

```java
public void resetTargetRepositoryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryDiffs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffs;

DataOciDevopsRepositoryDiffs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffs;

DataOciDevopsRepositoryDiffs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffs;

DataOciDevopsRepositoryDiffs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffs;

DataOciDevopsRepositoryDiffs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsRepositoryDiffs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryDiffs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsRepositoryDiffs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsRepositoryDiffs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryDiffs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.diffCollection">diffCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList">DataOciDevopsRepositoryDiffsDiffCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList">DataOciDevopsRepositoryDiffsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersionInput">baseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBaseInput">isComparisonFromMergeBaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryIdInput">targetRepositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersionInput">targetVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersion">baseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryId">targetRepositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `diffCollection`<sup>Required</sup> <a name="diffCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.diffCollection"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionList getDiffCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList">DataOciDevopsRepositoryDiffsDiffCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filter"></a>

```java
public DataOciDevopsRepositoryDiffsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList">DataOciDevopsRepositoryDiffsFilterList</a>

---

##### `baseVersionInput`<sup>Optional</sup> <a name="baseVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersionInput"></a>

```java
public java.lang.String getBaseVersionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isComparisonFromMergeBaseInput`<sup>Optional</sup> <a name="isComparisonFromMergeBaseInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBaseInput"></a>

```java
public java.lang.Object getIsComparisonFromMergeBaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `targetRepositoryIdInput`<sup>Optional</sup> <a name="targetRepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryIdInput"></a>

```java
public java.lang.String getTargetRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersionInput"></a>

```java
public java.lang.String getTargetVersionInput();
```

- *Type:* java.lang.String

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersion"></a>

```java
public java.lang.String getBaseVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isComparisonFromMergeBase`<sup>Required</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBase"></a>

```java
public java.lang.Object getIsComparisonFromMergeBase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `targetRepositoryId`<sup>Required</sup> <a name="targetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryId"></a>

```java
public java.lang.String getTargetRepositoryId();
```

- *Type:* java.lang.String

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryDiffsConfig <a name="DataOciDevopsRepositoryDiffsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsConfig;

DataOciDevopsRepositoryDiffsConfig.builder()
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
    .baseVersion(java.lang.String)
    .repositoryId(java.lang.String)
    .targetVersion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsRepositoryDiffsFilter>)
//  .id(java.lang.String)
//  .isComparisonFromMergeBase(java.lang.Boolean)
//  .isComparisonFromMergeBase(IResolvable)
//  .targetRepositoryId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.baseVersion">baseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetRepositoryId">targetRepositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.baseVersion"></a>

```java
public java.lang.String getBaseVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}.

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#filter DataOciDevopsRepositoryDiffs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isComparisonFromMergeBase`<sup>Optional</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.isComparisonFromMergeBase"></a>

```java
public java.lang.Object getIsComparisonFromMergeBase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}.

---

##### `targetRepositoryId`<sup>Optional</sup> <a name="targetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetRepositoryId"></a>

```java
public java.lang.String getTargetRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}.

---

### DataOciDevopsRepositoryDiffsDiffCollection <a name="DataOciDevopsRepositoryDiffsDiffCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollection;

DataOciDevopsRepositoryDiffsDiffCollection.builder()
    .build();
```


### DataOciDevopsRepositoryDiffsDiffCollectionItems <a name="DataOciDevopsRepositoryDiffsDiffCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItems;

DataOciDevopsRepositoryDiffsDiffCollectionItems.builder()
    .build();
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges;

DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges.builder()
    .build();
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections;

DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections.builder()
    .build();
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines;

DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines.builder()
    .build();
```


### DataOciDevopsRepositoryDiffsFilter <a name="DataOciDevopsRepositoryDiffsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsFilter;

DataOciDevopsRepositoryDiffsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#name DataOciDevopsRepositoryDiffs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#values DataOciDevopsRepositoryDiffs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#regex DataOciDevopsRepositoryDiffs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#name DataOciDevopsRepositoryDiffs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#values DataOciDevopsRepositoryDiffs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#regex DataOciDevopsRepositoryDiffs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.baseLine">baseLine</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.conflictMarker">conflictMarker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.lineContent">lineContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.targetLine">targetLine</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.baseLine"></a>

```java
public java.lang.Number getBaseLine();
```

- *Type:* java.lang.Number

---

##### `conflictMarker`<sup>Required</sup> <a name="conflictMarker" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.conflictMarker"></a>

```java
public java.lang.String getConflictMarker();
```

- *Type:* java.lang.String

---

##### `lineContent`<sup>Required</sup> <a name="lineContent" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.lineContent"></a>

```java
public java.lang.String getLineContent();
```

- *Type:* java.lang.String

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.targetLine"></a>

```java
public java.lang.Number getTargetLine();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.lines"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList getLines();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseLine">baseLine</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseSpan">baseSpan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.diffSections">diffSections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetLine">targetLine</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetSpan">targetSpan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges">DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseLine"></a>

```java
public java.lang.Number getBaseLine();
```

- *Type:* java.lang.Number

---

##### `baseSpan`<sup>Required</sup> <a name="baseSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseSpan"></a>

```java
public java.lang.Number getBaseSpan();
```

- *Type:* java.lang.Number

---

##### `diffSections`<sup>Required</sup> <a name="diffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.diffSections"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList getDiffSections();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList</a>

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetLine"></a>

```java
public java.lang.Number getTargetLine();
```

- *Type:* java.lang.Number

---

##### `targetSpan`<sup>Required</sup> <a name="targetSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetSpan"></a>

```java
public java.lang.Number getTargetSpan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges">DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference;

new DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.areConflictsInFile">areConflictsInFile</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.changes">changes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isBinary">isBinary</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isLarge">isLarge</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newId">newId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newPath">newPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldId">oldId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldPath">oldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems">DataOciDevopsRepositoryDiffsDiffCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areConflictsInFile`<sup>Required</sup> <a name="areConflictsInFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.areConflictsInFile"></a>

```java
public IResolvable getAreConflictsInFile();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `changes`<sup>Required</sup> <a name="changes" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.changes"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList getChanges();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isBinary`<sup>Required</sup> <a name="isBinary" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isBinary"></a>

```java
public IResolvable getIsBinary();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isLarge`<sup>Required</sup> <a name="isLarge" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isLarge"></a>

```java
public IResolvable getIsLarge();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `newId`<sup>Required</sup> <a name="newId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newId"></a>

```java
public java.lang.String getNewId();
```

- *Type:* java.lang.String

---

##### `newPath`<sup>Required</sup> <a name="newPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newPath"></a>

```java
public java.lang.String getNewPath();
```

- *Type:* java.lang.String

---

##### `oldId`<sup>Required</sup> <a name="oldId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldId"></a>

```java
public java.lang.String getOldId();
```

- *Type:* java.lang.String

---

##### `oldPath`<sup>Required</sup> <a name="oldPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldPath"></a>

```java
public java.lang.String getOldPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems">DataOciDevopsRepositoryDiffsDiffCollectionItems</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionList <a name="DataOciDevopsRepositoryDiffsDiffCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionList;

new DataOciDevopsRepositoryDiffsDiffCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryDiffsDiffCollectionOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference;

new DataOciDevopsRepositoryDiffsDiffCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection">DataOciDevopsRepositoryDiffsDiffCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryDiffsDiffCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection">DataOciDevopsRepositoryDiffsDiffCollection</a>

---


### DataOciDevopsRepositoryDiffsFilterList <a name="DataOciDevopsRepositoryDiffsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsFilterList;

new DataOciDevopsRepositoryDiffsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get"></a>

```java
public DataOciDevopsRepositoryDiffsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>>

---


### DataOciDevopsRepositoryDiffsFilterOutputReference <a name="DataOciDevopsRepositoryDiffsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_diffs.DataOciDevopsRepositoryDiffsFilterOutputReference;

new DataOciDevopsRepositoryDiffsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>

---



