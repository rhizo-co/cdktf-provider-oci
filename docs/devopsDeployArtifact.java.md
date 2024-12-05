# `devopsDeployArtifact` Submodule <a name="`devopsDeployArtifact` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployArtifact <a name="DevopsDeployArtifact" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact oci_devops_deploy_artifact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifact;

DevopsDeployArtifact.Builder.create(Construct scope, java.lang.String id)
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
    .argumentSubstitutionMode(java.lang.String)
    .deployArtifactSource(DevopsDeployArtifactDeployArtifactSource)
    .deployArtifactType(java.lang.String)
    .projectId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DevopsDeployArtifactTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.argumentSubstitutionMode">argumentSubstitutionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactSource">deployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | deploy_artifact_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactType">deployArtifactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `argumentSubstitutionMode`<sup>Required</sup> <a name="argumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.argumentSubstitutionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}.

---

##### `deployArtifactSource`<sup>Required</sup> <a name="deployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactSource"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

deploy_artifact_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source DevopsDeployArtifact#deploy_artifact_source}

---

##### `deployArtifactType`<sup>Required</sup> <a name="deployArtifactType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#timeouts DevopsDeployArtifact#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource">putDeployArtifactSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeployArtifactSource` <a name="putDeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource"></a>

```java
public void putDeployArtifactSource(DevopsDeployArtifactDeployArtifactSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts"></a>

```java
public void putTimeouts(DevopsDeployArtifactTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifact;

DevopsDeployArtifact.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifact;

DevopsDeployArtifact.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifact;

DevopsDeployArtifact.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifact;

DevopsDeployArtifact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsDeployArtifact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsDeployArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsDeployArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource">deployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput">argumentSubstitutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput">deployArtifactSourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput">deployArtifactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode">argumentSubstitutionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType">deployArtifactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `deployArtifactSource`<sup>Required</sup> <a name="deployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource"></a>

```java
public DevopsDeployArtifactDeployArtifactSourceOutputReference getDeployArtifactSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts"></a>

```java
public DevopsDeployArtifactTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `argumentSubstitutionModeInput`<sup>Optional</sup> <a name="argumentSubstitutionModeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput"></a>

```java
public java.lang.String getArgumentSubstitutionModeInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployArtifactSourceInput`<sup>Optional</sup> <a name="deployArtifactSourceInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput"></a>

```java
public DevopsDeployArtifactDeployArtifactSource getDeployArtifactSourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---

##### `deployArtifactTypeInput`<sup>Optional</sup> <a name="deployArtifactTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput"></a>

```java
public java.lang.String getDeployArtifactTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

---

##### `argumentSubstitutionMode`<sup>Required</sup> <a name="argumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode"></a>

```java
public java.lang.String getArgumentSubstitutionMode();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployArtifactType`<sup>Required</sup> <a name="deployArtifactType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType"></a>

```java
public java.lang.String getDeployArtifactType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployArtifactConfig <a name="DevopsDeployArtifactConfig" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifactConfig;

DevopsDeployArtifactConfig.builder()
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
    .argumentSubstitutionMode(java.lang.String)
    .deployArtifactSource(DevopsDeployArtifactDeployArtifactSource)
    .deployArtifactType(java.lang.String)
    .projectId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DevopsDeployArtifactTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode">argumentSubstitutionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource">deployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | deploy_artifact_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType">deployArtifactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `argumentSubstitutionMode`<sup>Required</sup> <a name="argumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode"></a>

```java
public java.lang.String getArgumentSubstitutionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}.

---

##### `deployArtifactSource`<sup>Required</sup> <a name="deployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource"></a>

```java
public DevopsDeployArtifactDeployArtifactSource getDeployArtifactSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

deploy_artifact_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source DevopsDeployArtifact#deploy_artifact_source}

---

##### `deployArtifactType`<sup>Required</sup> <a name="deployArtifactType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType"></a>

```java
public java.lang.String getDeployArtifactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts"></a>

```java
public DevopsDeployArtifactTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#timeouts DevopsDeployArtifact#timeouts}

---

### DevopsDeployArtifactDeployArtifactSource <a name="DevopsDeployArtifactDeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifactDeployArtifactSource;

DevopsDeployArtifactDeployArtifactSource.builder()
    .deployArtifactSourceType(java.lang.String)
//  .base64EncodedContent(java.lang.String)
//  .chartUrl(java.lang.String)
//  .deployArtifactPath(java.lang.String)
//  .deployArtifactVersion(java.lang.String)
//  .helmArtifactSourceType(java.lang.String)
//  .helmVerificationKeySource(DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource)
//  .imageDigest(java.lang.String)
//  .imageUri(java.lang.String)
//  .repositoryId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType">deployArtifactSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent">base64EncodedContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl">chartUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath">deployArtifactPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion">deployArtifactVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType">helmArtifactSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource">helmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | helm_verification_key_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}. |

---

##### `deployArtifactSourceType`<sup>Required</sup> <a name="deployArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType"></a>

```java
public java.lang.String getDeployArtifactSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}.

---

##### `base64EncodedContent`<sup>Optional</sup> <a name="base64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent"></a>

```java
public java.lang.String getBase64EncodedContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}.

---

##### `chartUrl`<sup>Optional</sup> <a name="chartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl"></a>

```java
public java.lang.String getChartUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}.

---

##### `deployArtifactPath`<sup>Optional</sup> <a name="deployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath"></a>

```java
public java.lang.String getDeployArtifactPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}.

---

##### `deployArtifactVersion`<sup>Optional</sup> <a name="deployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion"></a>

```java
public java.lang.String getDeployArtifactVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}.

---

##### `helmArtifactSourceType`<sup>Optional</sup> <a name="helmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType"></a>

```java
public java.lang.String getHelmArtifactSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}.

---

##### `helmVerificationKeySource`<sup>Optional</sup> <a name="helmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource"></a>

```java
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource getHelmVerificationKeySource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

helm_verification_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_verification_key_source DevopsDeployArtifact#helm_verification_key_source}

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}.

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}.

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}.

---

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource;

DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.builder()
    .verificationKeySourceType(java.lang.String)
//  .currentPublicKey(java.lang.String)
//  .previousPublicKey(java.lang.String)
//  .vaultSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType">verificationKeySourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey">currentPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey">previousPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId">vaultSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}. |

---

##### `verificationKeySourceType`<sup>Required</sup> <a name="verificationKeySourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType"></a>

```java
public java.lang.String getVerificationKeySourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}.

---

##### `currentPublicKey`<sup>Optional</sup> <a name="currentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey"></a>

```java
public java.lang.String getCurrentPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}.

---

##### `previousPublicKey`<sup>Optional</sup> <a name="previousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey"></a>

```java
public java.lang.String getPreviousPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}.

---

##### `vaultSecretId`<sup>Optional</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId"></a>

```java
public java.lang.String getVaultSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}.

---

### DevopsDeployArtifactTimeouts <a name="DevopsDeployArtifactTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifactTimeouts;

DevopsDeployArtifactTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference;

new DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey">resetCurrentPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey">resetPreviousPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId">resetVaultSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrentPublicKey` <a name="resetCurrentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey"></a>

```java
public void resetCurrentPublicKey()
```

##### `resetPreviousPublicKey` <a name="resetPreviousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey"></a>

```java
public void resetPreviousPublicKey()
```

##### `resetVaultSecretId` <a name="resetVaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId"></a>

```java
public void resetVaultSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput">currentPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput">previousPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput">vaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput">verificationKeySourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey">currentPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey">previousPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType">verificationKeySourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentPublicKeyInput`<sup>Optional</sup> <a name="currentPublicKeyInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput"></a>

```java
public java.lang.String getCurrentPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `previousPublicKeyInput`<sup>Optional</sup> <a name="previousPublicKeyInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput"></a>

```java
public java.lang.String getPreviousPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `vaultSecretIdInput`<sup>Optional</sup> <a name="vaultSecretIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput"></a>

```java
public java.lang.String getVaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `verificationKeySourceTypeInput`<sup>Optional</sup> <a name="verificationKeySourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput"></a>

```java
public java.lang.String getVerificationKeySourceTypeInput();
```

- *Type:* java.lang.String

---

##### `currentPublicKey`<sup>Required</sup> <a name="currentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey"></a>

```java
public java.lang.String getCurrentPublicKey();
```

- *Type:* java.lang.String

---

##### `previousPublicKey`<sup>Required</sup> <a name="previousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey"></a>

```java
public java.lang.String getPreviousPublicKey();
```

- *Type:* java.lang.String

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId"></a>

```java
public java.lang.String getVaultSecretId();
```

- *Type:* java.lang.String

---

##### `verificationKeySourceType`<sup>Required</sup> <a name="verificationKeySourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType"></a>

```java
public java.lang.String getVerificationKeySourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue"></a>

```java
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---


### DevopsDeployArtifactDeployArtifactSourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifactDeployArtifactSourceOutputReference;

new DevopsDeployArtifactDeployArtifactSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource">putHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent">resetBase64EncodedContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl">resetChartUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath">resetDeployArtifactPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion">resetDeployArtifactVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType">resetHelmArtifactSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource">resetHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHelmVerificationKeySource` <a name="putHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource"></a>

```java
public void putHelmVerificationKeySource(DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---

##### `resetBase64EncodedContent` <a name="resetBase64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent"></a>

```java
public void resetBase64EncodedContent()
```

##### `resetChartUrl` <a name="resetChartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl"></a>

```java
public void resetChartUrl()
```

##### `resetDeployArtifactPath` <a name="resetDeployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath"></a>

```java
public void resetDeployArtifactPath()
```

##### `resetDeployArtifactVersion` <a name="resetDeployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion"></a>

```java
public void resetDeployArtifactVersion()
```

##### `resetHelmArtifactSourceType` <a name="resetHelmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType"></a>

```java
public void resetHelmArtifactSourceType()
```

##### `resetHelmVerificationKeySource` <a name="resetHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource"></a>

```java
public void resetHelmVerificationKeySource()
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest"></a>

```java
public void resetImageDigest()
```

##### `resetImageUri` <a name="resetImageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId"></a>

```java
public void resetRepositoryId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource">helmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput">base64EncodedContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput">chartUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput">deployArtifactPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput">deployArtifactSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput">deployArtifactVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput">helmArtifactSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput">helmVerificationKeySourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent">base64EncodedContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl">chartUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath">deployArtifactPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType">deployArtifactSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion">deployArtifactVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType">helmArtifactSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `helmVerificationKeySource`<sup>Required</sup> <a name="helmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource"></a>

```java
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference getHelmVerificationKeySource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a>

---

##### `base64EncodedContentInput`<sup>Optional</sup> <a name="base64EncodedContentInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput"></a>

```java
public java.lang.String getBase64EncodedContentInput();
```

- *Type:* java.lang.String

---

##### `chartUrlInput`<sup>Optional</sup> <a name="chartUrlInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput"></a>

```java
public java.lang.String getChartUrlInput();
```

- *Type:* java.lang.String

---

##### `deployArtifactPathInput`<sup>Optional</sup> <a name="deployArtifactPathInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput"></a>

```java
public java.lang.String getDeployArtifactPathInput();
```

- *Type:* java.lang.String

---

##### `deployArtifactSourceTypeInput`<sup>Optional</sup> <a name="deployArtifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput"></a>

```java
public java.lang.String getDeployArtifactSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `deployArtifactVersionInput`<sup>Optional</sup> <a name="deployArtifactVersionInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput"></a>

```java
public java.lang.String getDeployArtifactVersionInput();
```

- *Type:* java.lang.String

---

##### `helmArtifactSourceTypeInput`<sup>Optional</sup> <a name="helmArtifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput"></a>

```java
public java.lang.String getHelmArtifactSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `helmVerificationKeySourceInput`<sup>Optional</sup> <a name="helmVerificationKeySourceInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput"></a>

```java
public DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource getHelmVerificationKeySourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput"></a>

```java
public java.lang.String getImageDigestInput();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `base64EncodedContent`<sup>Required</sup> <a name="base64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent"></a>

```java
public java.lang.String getBase64EncodedContent();
```

- *Type:* java.lang.String

---

##### `chartUrl`<sup>Required</sup> <a name="chartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl"></a>

```java
public java.lang.String getChartUrl();
```

- *Type:* java.lang.String

---

##### `deployArtifactPath`<sup>Required</sup> <a name="deployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath"></a>

```java
public java.lang.String getDeployArtifactPath();
```

- *Type:* java.lang.String

---

##### `deployArtifactSourceType`<sup>Required</sup> <a name="deployArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType"></a>

```java
public java.lang.String getDeployArtifactSourceType();
```

- *Type:* java.lang.String

---

##### `deployArtifactVersion`<sup>Required</sup> <a name="deployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion"></a>

```java
public java.lang.String getDeployArtifactVersion();
```

- *Type:* java.lang.String

---

##### `helmArtifactSourceType`<sup>Required</sup> <a name="helmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType"></a>

```java
public java.lang.String getHelmArtifactSourceType();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue"></a>

```java
public DevopsDeployArtifactDeployArtifactSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---


### DevopsDeployArtifactTimeoutsOutputReference <a name="DevopsDeployArtifactTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_artifact.DevopsDeployArtifactTimeoutsOutputReference;

new DevopsDeployArtifactTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

---



