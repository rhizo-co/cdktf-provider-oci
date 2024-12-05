# `dataOciDevopsRepositoryCommits` Submodule <a name="`dataOciDevopsRepositoryCommits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryCommits <a name="DataOciDevopsRepositoryCommits" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits oci_devops_repository_commits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommits;

DataOciDevopsRepositoryCommits.Builder.create(Construct scope, java.lang.String id)
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
    .repositoryId(java.lang.String)
//  .authorName(java.lang.String)
//  .commitMessage(java.lang.String)
//  .excludeRefName(java.lang.String)
//  .filePath(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsRepositoryCommitsFilter>)
//  .id(java.lang.String)
//  .refName(java.lang.String)
//  .timestampGreaterThanOrEqualTo(java.lang.String)
//  .timestampLessThanOrEqualTo(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.authorName">authorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.excludeRefName">excludeRefName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.filePath">filePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.refName">refName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.timestampGreaterThanOrEqualTo">timestampGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.timestampLessThanOrEqualTo">timestampLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.authorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}.

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.commitMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}.

---

##### `excludeRefName`<sup>Optional</sup> <a name="excludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.excludeRefName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}.

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.filePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#filter DataOciDevopsRepositoryCommits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refName`<sup>Optional</sup> <a name="refName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.refName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}.

---

##### `timestampGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.timestampGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}.

---

##### `timestampLessThanOrEqualTo`<sup>Optional</sup> <a name="timestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.timestampLessThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetAuthorName">resetAuthorName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetCommitMessage">resetCommitMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetExcludeRefName">resetExcludeRefName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetRefName">resetRefName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampGreaterThanOrEqualTo">resetTimestampGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampLessThanOrEqualTo">resetTimestampLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDevopsRepositoryCommitsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>>

---

##### `resetAuthorName` <a name="resetAuthorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetAuthorName"></a>

```java
public void resetAuthorName()
```

##### `resetCommitMessage` <a name="resetCommitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetCommitMessage"></a>

```java
public void resetCommitMessage()
```

##### `resetExcludeRefName` <a name="resetExcludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetExcludeRefName"></a>

```java
public void resetExcludeRefName()
```

##### `resetFilePath` <a name="resetFilePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilePath"></a>

```java
public void resetFilePath()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetId"></a>

```java
public void resetId()
```

##### `resetRefName` <a name="resetRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetRefName"></a>

```java
public void resetRefName()
```

##### `resetTimestampGreaterThanOrEqualTo` <a name="resetTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampGreaterThanOrEqualTo"></a>

```java
public void resetTimestampGreaterThanOrEqualTo()
```

##### `resetTimestampLessThanOrEqualTo` <a name="resetTimestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampLessThanOrEqualTo"></a>

```java
public void resetTimestampLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryCommits resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommits;

DataOciDevopsRepositoryCommits.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommits;

DataOciDevopsRepositoryCommits.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommits;

DataOciDevopsRepositoryCommits.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommits;

DataOciDevopsRepositoryCommits.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsRepositoryCommits.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryCommits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsRepositoryCommits to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsRepositoryCommits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryCommits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList">DataOciDevopsRepositoryCommitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryCommitCollection">repositoryCommitCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorNameInput">authorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessageInput">commitMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefNameInput">excludeRefNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refNameInput">refNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualToInput">timestampGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualToInput">timestampLessThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorName">authorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefName">excludeRefName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refName">refName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualTo">timestampGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualTo">timestampLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filter"></a>

```java
public DataOciDevopsRepositoryCommitsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList">DataOciDevopsRepositoryCommitsFilterList</a>

---

##### `repositoryCommitCollection`<sup>Required</sup> <a name="repositoryCommitCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryCommitCollection"></a>

```java
public DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList getRepositoryCommitCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList</a>

---

##### `authorNameInput`<sup>Optional</sup> <a name="authorNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorNameInput"></a>

```java
public java.lang.String getAuthorNameInput();
```

- *Type:* java.lang.String

---

##### `commitMessageInput`<sup>Optional</sup> <a name="commitMessageInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessageInput"></a>

```java
public java.lang.String getCommitMessageInput();
```

- *Type:* java.lang.String

---

##### `excludeRefNameInput`<sup>Optional</sup> <a name="excludeRefNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefNameInput"></a>

```java
public java.lang.String getExcludeRefNameInput();
```

- *Type:* java.lang.String

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `refNameInput`<sup>Optional</sup> <a name="refNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refNameInput"></a>

```java
public java.lang.String getRefNameInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `timestampGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timestampGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimestampGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timestampLessThanOrEqualToInput`<sup>Optional</sup> <a name="timestampLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualToInput"></a>

```java
public java.lang.String getTimestampLessThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorName"></a>

```java
public java.lang.String getAuthorName();
```

- *Type:* java.lang.String

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

---

##### `excludeRefName`<sup>Required</sup> <a name="excludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefName"></a>

```java
public java.lang.String getExcludeRefName();
```

- *Type:* java.lang.String

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `refName`<sup>Required</sup> <a name="refName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refName"></a>

```java
public java.lang.String getRefName();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `timestampGreaterThanOrEqualTo`<sup>Required</sup> <a name="timestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimestampGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timestampLessThanOrEqualTo`<sup>Required</sup> <a name="timestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualTo"></a>

```java
public java.lang.String getTimestampLessThanOrEqualTo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryCommitsConfig <a name="DataOciDevopsRepositoryCommitsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsConfig;

DataOciDevopsRepositoryCommitsConfig.builder()
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
    .repositoryId(java.lang.String)
//  .authorName(java.lang.String)
//  .commitMessage(java.lang.String)
//  .excludeRefName(java.lang.String)
//  .filePath(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsRepositoryCommitsFilter>)
//  .id(java.lang.String)
//  .refName(java.lang.String)
//  .timestampGreaterThanOrEqualTo(java.lang.String)
//  .timestampLessThanOrEqualTo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.authorName">authorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.excludeRefName">excludeRefName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filePath">filePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.refName">refName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampGreaterThanOrEqualTo">timestampGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampLessThanOrEqualTo">timestampLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.authorName"></a>

```java
public java.lang.String getAuthorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}.

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}.

---

##### `excludeRefName`<sup>Optional</sup> <a name="excludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.excludeRefName"></a>

```java
public java.lang.String getExcludeRefName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}.

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#filter DataOciDevopsRepositoryCommits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refName`<sup>Optional</sup> <a name="refName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.refName"></a>

```java
public java.lang.String getRefName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}.

---

##### `timestampGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimestampGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}.

---

##### `timestampLessThanOrEqualTo`<sup>Optional</sup> <a name="timestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampLessThanOrEqualTo"></a>

```java
public java.lang.String getTimestampLessThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}.

---

### DataOciDevopsRepositoryCommitsFilter <a name="DataOciDevopsRepositoryCommitsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsFilter;

DataOciDevopsRepositoryCommitsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#name DataOciDevopsRepositoryCommits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#values DataOciDevopsRepositoryCommits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#regex DataOciDevopsRepositoryCommits#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#name DataOciDevopsRepositoryCommits#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#values DataOciDevopsRepositoryCommits#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#regex DataOciDevopsRepositoryCommits#regex}.

---

### DataOciDevopsRepositoryCommitsRepositoryCommitCollection <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection;

DataOciDevopsRepositoryCommitsRepositoryCommitCollection.builder()
    .build();
```


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems;

DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryCommitsFilterList <a name="DataOciDevopsRepositoryCommitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsFilterList;

new DataOciDevopsRepositoryCommitsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get"></a>

```java
public DataOciDevopsRepositoryCommitsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>>

---


### DataOciDevopsRepositoryCommitsFilterOutputReference <a name="DataOciDevopsRepositoryCommitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsFilterOutputReference;

new DataOciDevopsRepositoryCommitsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList;

new DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get"></a>

```java
public DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference;

new DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorEmail">authorEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorName">authorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitId">commitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerEmail">committerEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerName">committerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.parentCommitIds">parentCommitIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.treeId">treeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorEmail"></a>

```java
public java.lang.String getAuthorEmail();
```

- *Type:* java.lang.String

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorName"></a>

```java
public java.lang.String getAuthorName();
```

- *Type:* java.lang.String

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitId"></a>

```java
public java.lang.String getCommitId();
```

- *Type:* java.lang.String

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

---

##### `committerEmail`<sup>Required</sup> <a name="committerEmail" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerEmail"></a>

```java
public java.lang.String getCommitterEmail();
```

- *Type:* java.lang.String

---

##### `committerName`<sup>Required</sup> <a name="committerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerName"></a>

```java
public java.lang.String getCommitterName();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `parentCommitIds`<sup>Required</sup> <a name="parentCommitIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.parentCommitIds"></a>

```java
public java.util.List<java.lang.String> getParentCommitIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `treeId`<sup>Required</sup> <a name="treeId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.treeId"></a>

```java
public java.lang.String getTreeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems</a>

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList;

new DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get"></a>

```java
public DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_repository_commits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference;

new DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection">DataOciDevopsRepositoryCommitsRepositoryCommitCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsRepositoryCommitsRepositoryCommitCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection">DataOciDevopsRepositoryCommitsRepositoryCommitCollection</a>

---



