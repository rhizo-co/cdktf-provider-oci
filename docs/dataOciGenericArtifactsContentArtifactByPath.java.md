# `dataOciGenericArtifactsContentArtifactByPath` Submodule <a name="`dataOciGenericArtifactsContentArtifactByPath` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenericArtifactsContentArtifactByPath <a name="DataOciGenericArtifactsContentArtifactByPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_generic_artifacts_content_artifact_by_path.DataOciGenericArtifactsContentArtifactByPath;

DataOciGenericArtifactsContentArtifactByPath.Builder.create(Construct scope, java.lang.String id)
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
    .artifactPath(java.lang.String)
    .repositoryId(java.lang.String)
    .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.artifactPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_generic_artifacts_content_artifact_by_path.DataOciGenericArtifactsContentArtifactByPath;

DataOciGenericArtifactsContentArtifactByPath.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_generic_artifacts_content_artifact_by_path.DataOciGenericArtifactsContentArtifactByPath;

DataOciGenericArtifactsContentArtifactByPath.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_generic_artifacts_content_artifact_by_path.DataOciGenericArtifactsContentArtifactByPath;

DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_generic_artifacts_content_artifact_by_path.DataOciGenericArtifactsContentArtifactByPath;

DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciGenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciGenericArtifactsContentArtifactByPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciGenericArtifactsContentArtifactByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenericArtifactsContentArtifactByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPathInput">artifactPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sizeInBytes"></a>

```java
public java.lang.String getSizeInBytes();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPathInput"></a>

```java
public java.lang.String getArtifactPathInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenericArtifactsContentArtifactByPathConfig <a name="DataOciGenericArtifactsContentArtifactByPathConfig" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_generic_artifacts_content_artifact_by_path.DataOciGenericArtifactsContentArtifactByPathConfig;

DataOciGenericArtifactsContentArtifactByPathConfig.builder()
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
    .artifactPath(java.lang.String)
    .repositoryId(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}.

---



