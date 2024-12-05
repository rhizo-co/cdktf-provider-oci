# `datascienceModelArtifactExport` Submodule <a name="`datascienceModelArtifactExport` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModelArtifactExport <a name="DatascienceModelArtifactExport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export oci_datascience_model_artifact_export}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExport;

DatascienceModelArtifactExport.Builder.create(Construct scope, java.lang.String id)
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
    .artifactSourceType(java.lang.String)
    .modelId(java.lang.String)
    .namespace(java.lang.String)
    .sourceBucket(java.lang.String)
    .sourceObjectName(java.lang.String)
    .sourceRegion(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatascienceModelArtifactExportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.artifactSourceType">artifactSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceBucket">sourceBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceObjectName">sourceObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.artifactSourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.modelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}.

---

##### `sourceBucket`<sup>Required</sup> <a name="sourceBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceBucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}.

---

##### `sourceObjectName`<sup>Required</sup> <a name="sourceObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceObjectName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}.

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#timeouts DatascienceModelArtifactExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts"></a>

```java
public void putTimeouts(DatascienceModelArtifactExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceModelArtifactExport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExport;

DatascienceModelArtifactExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExport;

DatascienceModelArtifactExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExport;

DatascienceModelArtifactExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExport;

DatascienceModelArtifactExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatascienceModelArtifactExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatascienceModelArtifactExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatascienceModelArtifactExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatascienceModelArtifactExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModelArtifactExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference">DatascienceModelArtifactExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceTypeInput">artifactSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucketInput">sourceBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectNameInput">sourceObjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegionInput">sourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceType">artifactSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucket">sourceBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectName">sourceObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeouts"></a>

```java
public DatascienceModelArtifactExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference">DatascienceModelArtifactExportTimeoutsOutputReference</a>

---

##### `artifactSourceTypeInput`<sup>Optional</sup> <a name="artifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceTypeInput"></a>

```java
public java.lang.String getArtifactSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `sourceBucketInput`<sup>Optional</sup> <a name="sourceBucketInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucketInput"></a>

```java
public java.lang.String getSourceBucketInput();
```

- *Type:* java.lang.String

---

##### `sourceObjectNameInput`<sup>Optional</sup> <a name="sourceObjectNameInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectNameInput"></a>

```java
public java.lang.String getSourceObjectNameInput();
```

- *Type:* java.lang.String

---

##### `sourceRegionInput`<sup>Optional</sup> <a name="sourceRegionInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegionInput"></a>

```java
public java.lang.String getSourceRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceType"></a>

```java
public java.lang.String getArtifactSourceType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `sourceBucket`<sup>Required</sup> <a name="sourceBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucket"></a>

```java
public java.lang.String getSourceBucket();
```

- *Type:* java.lang.String

---

##### `sourceObjectName`<sup>Required</sup> <a name="sourceObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectName"></a>

```java
public java.lang.String getSourceObjectName();
```

- *Type:* java.lang.String

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelArtifactExportConfig <a name="DatascienceModelArtifactExportConfig" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExportConfig;

DatascienceModelArtifactExportConfig.builder()
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
    .artifactSourceType(java.lang.String)
    .modelId(java.lang.String)
    .namespace(java.lang.String)
    .sourceBucket(java.lang.String)
    .sourceObjectName(java.lang.String)
    .sourceRegion(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatascienceModelArtifactExportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.artifactSourceType">artifactSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceBucket">sourceBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceObjectName">sourceObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.artifactSourceType"></a>

```java
public java.lang.String getArtifactSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}.

---

##### `sourceBucket`<sup>Required</sup> <a name="sourceBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceBucket"></a>

```java
public java.lang.String getSourceBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}.

---

##### `sourceObjectName`<sup>Required</sup> <a name="sourceObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceObjectName"></a>

```java
public java.lang.String getSourceObjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}.

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.timeouts"></a>

```java
public DatascienceModelArtifactExportTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#timeouts DatascienceModelArtifactExport#timeouts}

---

### DatascienceModelArtifactExportTimeouts <a name="DatascienceModelArtifactExportTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExportTimeouts;

DatascienceModelArtifactExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#create DatascienceModelArtifactExport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#delete DatascienceModelArtifactExport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#update DatascienceModelArtifactExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#create DatascienceModelArtifactExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#delete DatascienceModelArtifactExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#update DatascienceModelArtifactExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelArtifactExportTimeoutsOutputReference <a name="DatascienceModelArtifactExportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_export.DatascienceModelArtifactExportTimeoutsOutputReference;

new DatascienceModelArtifactExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

---



