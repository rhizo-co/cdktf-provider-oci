# `bdsBdsInstanceOsPatchAction` Submodule <a name="`bdsBdsInstanceOsPatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceOsPatchAction <a name="BdsBdsInstanceOsPatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action oci_bds_bds_instance_os_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchAction;

BdsBdsInstanceOsPatchAction.Builder.create(Construct scope, java.lang.String id)
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
    .osPatchVersion(java.lang.String)
//  .id(java.lang.String)
//  .patchingConfigs(BdsBdsInstanceOsPatchActionPatchingConfigs)
//  .timeouts(BdsBdsInstanceOsPatchActionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.osPatchVersion">osPatchVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.patchingConfigs">patchingConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | patching_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.bdsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}.

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.osPatchVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchingConfigs`<sup>Optional</sup> <a name="patchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.patchingConfigs"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

patching_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_configs BdsBdsInstanceOsPatchAction#patching_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#timeouts BdsBdsInstanceOsPatchAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs">putPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs">resetPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPatchingConfigs` <a name="putPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs"></a>

```java
public void putPatchingConfigs(BdsBdsInstanceOsPatchActionPatchingConfigs value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts"></a>

```java
public void putTimeouts(BdsBdsInstanceOsPatchActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId"></a>

```java
public void resetId()
```

##### `resetPatchingConfigs` <a name="resetPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs"></a>

```java
public void resetPatchingConfigs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchAction;

BdsBdsInstanceOsPatchAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchAction;

BdsBdsInstanceOsPatchAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchAction;

BdsBdsInstanceOsPatchAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchAction;

BdsBdsInstanceOsPatchAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BdsBdsInstanceOsPatchAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BdsBdsInstanceOsPatchAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BdsBdsInstanceOsPatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceOsPatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs">patchingConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput">clusterAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput">osPatchVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput">patchingConfigsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion">osPatchVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `patchingConfigs`<sup>Required</sup> <a name="patchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs"></a>

```java
public BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference getPatchingConfigs();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts"></a>

```java
public BdsBdsInstanceOsPatchActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput"></a>

```java
public java.lang.String getBdsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `clusterAdminPasswordInput`<sup>Optional</sup> <a name="clusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput"></a>

```java
public java.lang.String getClusterAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `osPatchVersionInput`<sup>Optional</sup> <a name="osPatchVersionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput"></a>

```java
public java.lang.String getOsPatchVersionInput();
```

- *Type:* java.lang.String

---

##### `patchingConfigsInput`<sup>Optional</sup> <a name="patchingConfigsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput"></a>

```java
public BdsBdsInstanceOsPatchActionPatchingConfigs getPatchingConfigsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion"></a>

```java
public java.lang.String getOsPatchVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceOsPatchActionConfig <a name="BdsBdsInstanceOsPatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchActionConfig;

BdsBdsInstanceOsPatchActionConfig.builder()
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
    .osPatchVersion(java.lang.String)
//  .id(java.lang.String)
//  .patchingConfigs(BdsBdsInstanceOsPatchActionPatchingConfigs)
//  .timeouts(BdsBdsInstanceOsPatchActionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion">osPatchVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs">patchingConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | patching_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}.

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}.

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion"></a>

```java
public java.lang.String getOsPatchVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchingConfigs`<sup>Optional</sup> <a name="patchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs"></a>

```java
public BdsBdsInstanceOsPatchActionPatchingConfigs getPatchingConfigs();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

patching_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_configs BdsBdsInstanceOsPatchAction#patching_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts"></a>

```java
public BdsBdsInstanceOsPatchActionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#timeouts BdsBdsInstanceOsPatchAction#timeouts}

---

### BdsBdsInstanceOsPatchActionPatchingConfigs <a name="BdsBdsInstanceOsPatchActionPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchActionPatchingConfigs;

BdsBdsInstanceOsPatchActionPatchingConfigs.builder()
    .patchingConfigStrategy(java.lang.String)
//  .batchSize(java.lang.Number)
//  .toleranceThresholdPerBatch(java.lang.Number)
//  .toleranceThresholdPerDomain(java.lang.Number)
//  .waitTimeBetweenBatchInSeconds(java.lang.Number)
//  .waitTimeBetweenDomainInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy">patchingConfigStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch">toleranceThresholdPerBatch</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain">toleranceThresholdPerDomain</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds">waitTimeBetweenBatchInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds">waitTimeBetweenDomainInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}. |

---

##### `patchingConfigStrategy`<sup>Required</sup> <a name="patchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy"></a>

```java
public java.lang.String getPatchingConfigStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}.

---

##### `toleranceThresholdPerBatch`<sup>Optional</sup> <a name="toleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch"></a>

```java
public java.lang.Number getToleranceThresholdPerBatch();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}.

---

##### `toleranceThresholdPerDomain`<sup>Optional</sup> <a name="toleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain"></a>

```java
public java.lang.Number getToleranceThresholdPerDomain();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}.

---

##### `waitTimeBetweenBatchInSeconds`<sup>Optional</sup> <a name="waitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenBatchInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}.

---

##### `waitTimeBetweenDomainInSeconds`<sup>Optional</sup> <a name="waitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenDomainInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstanceOsPatchActionTimeouts <a name="BdsBdsInstanceOsPatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchActionTimeouts;

BdsBdsInstanceOsPatchActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference <a name="BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference;

new BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch">resetToleranceThresholdPerBatch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain">resetToleranceThresholdPerDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds">resetWaitTimeBetweenBatchInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds">resetWaitTimeBetweenDomainInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSize` <a name="resetBatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetToleranceThresholdPerBatch` <a name="resetToleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch"></a>

```java
public void resetToleranceThresholdPerBatch()
```

##### `resetToleranceThresholdPerDomain` <a name="resetToleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain"></a>

```java
public void resetToleranceThresholdPerDomain()
```

##### `resetWaitTimeBetweenBatchInSeconds` <a name="resetWaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```java
public void resetWaitTimeBetweenBatchInSeconds()
```

##### `resetWaitTimeBetweenDomainInSeconds` <a name="resetWaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```java
public void resetWaitTimeBetweenDomainInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput">patchingConfigStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput">toleranceThresholdPerBatchInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput">toleranceThresholdPerDomainInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput">waitTimeBetweenBatchInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput">waitTimeBetweenDomainInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy">patchingConfigStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch">toleranceThresholdPerBatch</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain">toleranceThresholdPerDomain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds">waitTimeBetweenBatchInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds">waitTimeBetweenDomainInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `patchingConfigStrategyInput`<sup>Optional</sup> <a name="patchingConfigStrategyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput"></a>

```java
public java.lang.String getPatchingConfigStrategyInput();
```

- *Type:* java.lang.String

---

##### `toleranceThresholdPerBatchInput`<sup>Optional</sup> <a name="toleranceThresholdPerBatchInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput"></a>

```java
public java.lang.Number getToleranceThresholdPerBatchInput();
```

- *Type:* java.lang.Number

---

##### `toleranceThresholdPerDomainInput`<sup>Optional</sup> <a name="toleranceThresholdPerDomainInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput"></a>

```java
public java.lang.Number getToleranceThresholdPerDomainInput();
```

- *Type:* java.lang.Number

---

##### `waitTimeBetweenBatchInSecondsInput`<sup>Optional</sup> <a name="waitTimeBetweenBatchInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```java
public java.lang.Number getWaitTimeBetweenBatchInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `waitTimeBetweenDomainInSecondsInput`<sup>Optional</sup> <a name="waitTimeBetweenDomainInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```java
public java.lang.Number getWaitTimeBetweenDomainInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `patchingConfigStrategy`<sup>Required</sup> <a name="patchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy"></a>

```java
public java.lang.String getPatchingConfigStrategy();
```

- *Type:* java.lang.String

---

##### `toleranceThresholdPerBatch`<sup>Required</sup> <a name="toleranceThresholdPerBatch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch"></a>

```java
public java.lang.Number getToleranceThresholdPerBatch();
```

- *Type:* java.lang.Number

---

##### `toleranceThresholdPerDomain`<sup>Required</sup> <a name="toleranceThresholdPerDomain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain"></a>

```java
public java.lang.Number getToleranceThresholdPerDomain();
```

- *Type:* java.lang.Number

---

##### `waitTimeBetweenBatchInSeconds`<sup>Required</sup> <a name="waitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenBatchInSeconds();
```

- *Type:* java.lang.Number

---

##### `waitTimeBetweenDomainInSeconds`<sup>Required</sup> <a name="waitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```java
public java.lang.Number getWaitTimeBetweenDomainInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue"></a>

```java
public BdsBdsInstanceOsPatchActionPatchingConfigs getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---


### BdsBdsInstanceOsPatchActionTimeoutsOutputReference <a name="BdsBdsInstanceOsPatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.bds_bds_instance_os_patch_action.BdsBdsInstanceOsPatchActionTimeoutsOutputReference;

new BdsBdsInstanceOsPatchActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

---



