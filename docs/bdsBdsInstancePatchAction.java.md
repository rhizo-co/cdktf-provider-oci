# `bdsBdsInstancePatchAction` Submodule <a name="`bdsBdsInstancePatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstancePatchAction <a name="BdsBdsInstancePatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action oci_bds_bds_instance_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchAction;

BdsBdsInstancePatchAction.Builder.create(Construct scope, java.lang.String id)
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
    .bdsInstanceId(java.lang.String)
    .clusterAdminPassword(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .patchingConfig(BdsBdsInstancePatchActionPatchingConfig)
//  .timeouts(BdsBdsInstancePatchActionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.patchingConfig">patchingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | patching_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.bdsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchingConfig`<sup>Optional</sup> <a name="patchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.patchingConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

patching_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config BdsBdsInstancePatchAction#patching_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#timeouts BdsBdsInstancePatchAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig">putPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig">resetPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPatchingConfig` <a name="putPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig"></a>

```java
public void putPatchingConfig(BdsBdsInstancePatchActionPatchingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts"></a>

```java
public void putTimeouts(BdsBdsInstancePatchActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId"></a>

```java
public void resetId()
```

##### `resetPatchingConfig` <a name="resetPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig"></a>

```java
public void resetPatchingConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchAction;

BdsBdsInstancePatchAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchAction;

BdsBdsInstancePatchAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchAction;

BdsBdsInstancePatchAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchAction;

BdsBdsInstancePatchAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BdsBdsInstancePatchAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BdsBdsInstancePatchAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BdsBdsInstancePatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstancePatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig">patchingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput">clusterAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput">patchingConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `patchingConfig`<sup>Required</sup> <a name="patchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig"></a>

```java
public BdsBdsInstancePatchActionPatchingConfigOutputReference getPatchingConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts"></a>

```java
public BdsBdsInstancePatchActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput"></a>

```java
public java.lang.String getBdsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `clusterAdminPasswordInput`<sup>Optional</sup> <a name="clusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput"></a>

```java
public java.lang.String getClusterAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `patchingConfigInput`<sup>Optional</sup> <a name="patchingConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput"></a>

```java
public BdsBdsInstancePatchActionPatchingConfig getPatchingConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstancePatchActionConfig <a name="BdsBdsInstancePatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchActionConfig;

BdsBdsInstancePatchActionConfig.builder()
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
    .bdsInstanceId(java.lang.String)
    .clusterAdminPassword(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .patchingConfig(BdsBdsInstancePatchActionPatchingConfig)
//  .timeouts(BdsBdsInstancePatchActionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig">patchingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | patching_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchingConfig`<sup>Optional</sup> <a name="patchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig"></a>

```java
public BdsBdsInstancePatchActionPatchingConfig getPatchingConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

patching_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config BdsBdsInstancePatchAction#patching_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts"></a>

```java
public BdsBdsInstancePatchActionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#timeouts BdsBdsInstancePatchAction#timeouts}

---

### BdsBdsInstancePatchActionPatchingConfig <a name="BdsBdsInstancePatchActionPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchActionPatchingConfig;

BdsBdsInstancePatchActionPatchingConfig.builder()
    .patchingConfigStrategy(java.lang.String)
//  .batchSize(java.lang.Number)
//  .waitTimeBetweenBatchInSeconds(java.lang.Number)
//  .waitTimeBetweenDomainInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy">patchingConfigStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds">waitTimeBetweenBatchInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds">waitTimeBetweenDomainInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}. |

---

##### `patchingConfigStrategy`<sup>Required</sup> <a name="patchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy"></a>

```java
public java.lang.String getPatchingConfigStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}.

---

##### `waitTimeBetweenBatchInSeconds`<sup>Optional</sup> <a name="waitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenBatchInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}.

---

##### `waitTimeBetweenDomainInSeconds`<sup>Optional</sup> <a name="waitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenDomainInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstancePatchActionTimeouts <a name="BdsBdsInstancePatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchActionTimeouts;

BdsBdsInstancePatchActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstancePatchActionPatchingConfigOutputReference <a name="BdsBdsInstancePatchActionPatchingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchActionPatchingConfigOutputReference;

new BdsBdsInstancePatchActionPatchingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds">resetWaitTimeBetweenBatchInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds">resetWaitTimeBetweenDomainInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSize` <a name="resetBatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetWaitTimeBetweenBatchInSeconds` <a name="resetWaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```java
public void resetWaitTimeBetweenBatchInSeconds()
```

##### `resetWaitTimeBetweenDomainInSeconds` <a name="resetWaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```java
public void resetWaitTimeBetweenDomainInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput">patchingConfigStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput">waitTimeBetweenBatchInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput">waitTimeBetweenDomainInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy">patchingConfigStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds">waitTimeBetweenBatchInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds">waitTimeBetweenDomainInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `patchingConfigStrategyInput`<sup>Optional</sup> <a name="patchingConfigStrategyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput"></a>

```java
public java.lang.String getPatchingConfigStrategyInput();
```

- *Type:* java.lang.String

---

##### `waitTimeBetweenBatchInSecondsInput`<sup>Optional</sup> <a name="waitTimeBetweenBatchInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```java
public java.lang.Number getWaitTimeBetweenBatchInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `waitTimeBetweenDomainInSecondsInput`<sup>Optional</sup> <a name="waitTimeBetweenDomainInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```java
public java.lang.Number getWaitTimeBetweenDomainInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `patchingConfigStrategy`<sup>Required</sup> <a name="patchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy"></a>

```java
public java.lang.String getPatchingConfigStrategy();
```

- *Type:* java.lang.String

---

##### `waitTimeBetweenBatchInSeconds`<sup>Required</sup> <a name="waitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenBatchInSeconds();
```

- *Type:* java.lang.Number

---

##### `waitTimeBetweenDomainInSeconds`<sup>Required</sup> <a name="waitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenDomainInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue"></a>

```java
public BdsBdsInstancePatchActionPatchingConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---


### BdsBdsInstancePatchActionTimeoutsOutputReference <a name="BdsBdsInstancePatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_patch_action.BdsBdsInstancePatchActionTimeoutsOutputReference;

new BdsBdsInstancePatchActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

---



