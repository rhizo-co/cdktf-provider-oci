# `datascienceModelArtifactImport` Submodule <a name="`datascienceModelArtifactImport` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModelArtifactImport <a name="DatascienceModelArtifactImport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import oci_datascience_model_artifact_import}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImport;

DatascienceModelArtifactImport.Builder.create(Construct scope, java.lang.String id)
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
    .destinationBucket(java.lang.String)
    .destinationObjectName(java.lang.String)
    .destinationRegion(java.lang.String)
    .modelId(java.lang.String)
    .namespace(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatascienceModelArtifactImportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.artifactSourceType">artifactSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#artifact_source_type DatascienceModelArtifactImport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.destinationBucket">destinationBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_bucket DatascienceModelArtifactImport#destination_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.destinationObjectName">destinationObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_object_name DatascienceModelArtifactImport#destination_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_region DatascienceModelArtifactImport#destination_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#model_id DatascienceModelArtifactImport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#namespace DatascienceModelArtifactImport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#id DatascienceModelArtifactImport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.artifactSourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#artifact_source_type DatascienceModelArtifactImport#artifact_source_type}.

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.destinationBucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_bucket DatascienceModelArtifactImport#destination_bucket}.

---

##### `destinationObjectName`<sup>Required</sup> <a name="destinationObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.destinationObjectName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_object_name DatascienceModelArtifactImport#destination_object_name}.

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.destinationRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_region DatascienceModelArtifactImport#destination_region}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.modelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#model_id DatascienceModelArtifactImport#model_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#namespace DatascienceModelArtifactImport#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#id DatascienceModelArtifactImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#timeouts DatascienceModelArtifactImport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.putTimeouts"></a>

```java
public void putTimeouts(DatascienceModelArtifactImportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceModelArtifactImport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImport;

DatascienceModelArtifactImport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImport;

DatascienceModelArtifactImport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImport;

DatascienceModelArtifactImport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImport;

DatascienceModelArtifactImport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatascienceModelArtifactImport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatascienceModelArtifactImport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatascienceModelArtifactImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatascienceModelArtifactImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModelArtifactImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference">DatascienceModelArtifactImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceTypeInput">artifactSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucketInput">destinationBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectNameInput">destinationObjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegionInput">destinationRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceType">artifactSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucket">destinationBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectName">destinationObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeouts"></a>

```java
public DatascienceModelArtifactImportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference">DatascienceModelArtifactImportTimeoutsOutputReference</a>

---

##### `artifactSourceTypeInput`<sup>Optional</sup> <a name="artifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceTypeInput"></a>

```java
public java.lang.String getArtifactSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `destinationBucketInput`<sup>Optional</sup> <a name="destinationBucketInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucketInput"></a>

```java
public java.lang.String getDestinationBucketInput();
```

- *Type:* java.lang.String

---

##### `destinationObjectNameInput`<sup>Optional</sup> <a name="destinationObjectNameInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectNameInput"></a>

```java
public java.lang.String getDestinationObjectNameInput();
```

- *Type:* java.lang.String

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegionInput"></a>

```java
public java.lang.String getDestinationRegionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.artifactSourceType"></a>

```java
public java.lang.String getArtifactSourceType();
```

- *Type:* java.lang.String

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationBucket"></a>

```java
public java.lang.String getDestinationBucket();
```

- *Type:* java.lang.String

---

##### `destinationObjectName`<sup>Required</sup> <a name="destinationObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationObjectName"></a>

```java
public java.lang.String getDestinationObjectName();
```

- *Type:* java.lang.String

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelArtifactImportConfig <a name="DatascienceModelArtifactImportConfig" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImportConfig;

DatascienceModelArtifactImportConfig.builder()
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
    .destinationBucket(java.lang.String)
    .destinationObjectName(java.lang.String)
    .destinationRegion(java.lang.String)
    .modelId(java.lang.String)
    .namespace(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatascienceModelArtifactImportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.artifactSourceType">artifactSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#artifact_source_type DatascienceModelArtifactImport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationBucket">destinationBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_bucket DatascienceModelArtifactImport#destination_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationObjectName">destinationObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_object_name DatascienceModelArtifactImport#destination_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_region DatascienceModelArtifactImport#destination_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#model_id DatascienceModelArtifactImport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#namespace DatascienceModelArtifactImport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#id DatascienceModelArtifactImport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactSourceType`<sup>Required</sup> <a name="artifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.artifactSourceType"></a>

```java
public java.lang.String getArtifactSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#artifact_source_type DatascienceModelArtifactImport#artifact_source_type}.

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationBucket"></a>

```java
public java.lang.String getDestinationBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_bucket DatascienceModelArtifactImport#destination_bucket}.

---

##### `destinationObjectName`<sup>Required</sup> <a name="destinationObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationObjectName"></a>

```java
public java.lang.String getDestinationObjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_object_name DatascienceModelArtifactImport#destination_object_name}.

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#destination_region DatascienceModelArtifactImport#destination_region}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#model_id DatascienceModelArtifactImport#model_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#namespace DatascienceModelArtifactImport#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#id DatascienceModelArtifactImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportConfig.property.timeouts"></a>

```java
public DatascienceModelArtifactImportTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#timeouts DatascienceModelArtifactImport#timeouts}

---

### DatascienceModelArtifactImportTimeouts <a name="DatascienceModelArtifactImportTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImportTimeouts;

DatascienceModelArtifactImportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#create DatascienceModelArtifactImport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#delete DatascienceModelArtifactImport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#update DatascienceModelArtifactImport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#create DatascienceModelArtifactImport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#delete DatascienceModelArtifactImport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_import#update DatascienceModelArtifactImport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelArtifactImportTimeoutsOutputReference <a name="DatascienceModelArtifactImportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_model_artifact_import.DatascienceModelArtifactImportTimeoutsOutputReference;

new DatascienceModelArtifactImportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactImport.DatascienceModelArtifactImportTimeouts">DatascienceModelArtifactImportTimeouts</a>

---



