# `dataOciArtifactsGenericArtifacts` Submodule <a name="`dataOciArtifactsGenericArtifacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsGenericArtifacts <a name="DataOciArtifactsGenericArtifacts" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts oci_artifacts_generic_artifacts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifacts;

DataOciArtifactsGenericArtifacts.Builder.create(Construct scope, java.lang.String id)
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
    .repositoryId(java.lang.String)
//  .artifactPath(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciArtifactsGenericArtifactsFilter>)
//  .id(java.lang.String)
//  .sha256(java.lang.String)
//  .state(java.lang.String)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.sha256">sha256</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}.

---

##### `artifactPath`<sup>Optional</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.artifactPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#filter DataOciArtifactsGenericArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.sha256"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetArtifactPath">resetArtifactPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetSha256">resetSha256</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciArtifactsGenericArtifactsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>>

---

##### `resetArtifactPath` <a name="resetArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetArtifactPath"></a>

```java
public void resetArtifactPath()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetId"></a>

```java
public void resetId()
```

##### `resetSha256` <a name="resetSha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetSha256"></a>

```java
public void resetSha256()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetState"></a>

```java
public void resetState()
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsGenericArtifacts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifacts;

DataOciArtifactsGenericArtifacts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifacts;

DataOciArtifactsGenericArtifacts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifacts;

DataOciArtifactsGenericArtifacts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifacts;

DataOciArtifactsGenericArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciArtifactsGenericArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciArtifactsGenericArtifacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciArtifactsGenericArtifacts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciArtifactsGenericArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsGenericArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList">DataOciArtifactsGenericArtifactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.genericArtifactCollection">genericArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPathInput">artifactPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256Input">sha256Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filter"></a>

```java
public DataOciArtifactsGenericArtifactsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList">DataOciArtifactsGenericArtifactsFilterList</a>

---

##### `genericArtifactCollection`<sup>Required</sup> <a name="genericArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.genericArtifactCollection"></a>

```java
public DataOciArtifactsGenericArtifactsGenericArtifactCollectionList getGenericArtifactCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionList</a>

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPathInput"></a>

```java
public java.lang.String getArtifactPathInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `sha256Input`<sup>Optional</sup> <a name="sha256Input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256Input"></a>

```java
public java.lang.String getSha256Input();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsGenericArtifactsConfig <a name="DataOciArtifactsGenericArtifactsConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsConfig;

DataOciArtifactsGenericArtifactsConfig.builder()
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
    .repositoryId(java.lang.String)
//  .artifactPath(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciArtifactsGenericArtifactsFilter>)
//  .id(java.lang.String)
//  .sha256(java.lang.String)
//  .state(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.sha256">sha256</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}.

---

##### `artifactPath`<sup>Optional</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#filter DataOciArtifactsGenericArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}.

---

### DataOciArtifactsGenericArtifactsFilter <a name="DataOciArtifactsGenericArtifactsFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsFilter;

DataOciArtifactsGenericArtifactsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#name DataOciArtifactsGenericArtifacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#values DataOciArtifactsGenericArtifacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#regex DataOciArtifactsGenericArtifacts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#name DataOciArtifactsGenericArtifacts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#values DataOciArtifactsGenericArtifacts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#regex DataOciArtifactsGenericArtifacts#regex}.

---

### DataOciArtifactsGenericArtifactsGenericArtifactCollection <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection;

DataOciArtifactsGenericArtifactsGenericArtifactCollection.builder()
    .build();
```


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems;

DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsGenericArtifactsFilterList <a name="DataOciArtifactsGenericArtifactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsFilterList;

new DataOciArtifactsGenericArtifactsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get"></a>

```java
public DataOciArtifactsGenericArtifactsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>>

---


### DataOciArtifactsGenericArtifactsFilterOutputReference <a name="DataOciArtifactsGenericArtifactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsFilterOutputReference;

new DataOciArtifactsGenericArtifactsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter">DataOciArtifactsGenericArtifactsFilter</a>

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList;

new DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get"></a>

```java
public DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference;

new DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sizeInBytes"></a>

```java
public java.lang.String getSizeInBytes();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems</a>

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionList <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList;

new DataOciArtifactsGenericArtifactsGenericArtifactCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get"></a>

```java
public DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_artifacts_generic_artifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference;

new DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection">DataOciArtifactsGenericArtifactsGenericArtifactCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.items"></a>

```java
public DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.internalValue"></a>

```java
public DataOciArtifactsGenericArtifactsGenericArtifactCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection">DataOciArtifactsGenericArtifactsGenericArtifactCollection</a>

---



