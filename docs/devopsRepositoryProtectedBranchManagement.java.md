# `devopsRepositoryProtectedBranchManagement` Submodule <a name="`devopsRepositoryProtectedBranchManagement` Submodule" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsRepositoryProtectedBranchManagement <a name="DevopsRepositoryProtectedBranchManagement" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management oci_devops_repository_protected_branch_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagement;

DevopsRepositoryProtectedBranchManagement.Builder.create(Construct scope, java.lang.String id)
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
    .branchName(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .protectionLevels(java.util.List<java.lang.String>)
//  .timeouts(DevopsRepositoryProtectedBranchManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.protectionLevels">protectionLevels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.branchName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectionLevels`<sup>Optional</sup> <a name="protectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.protectionLevels"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#timeouts DevopsRepositoryProtectedBranchManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetProtectionLevels">resetProtectionLevels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts"></a>

```java
public void putTimeouts(DevopsRepositoryProtectedBranchManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetId"></a>

```java
public void resetId()
```

##### `resetProtectionLevels` <a name="resetProtectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetProtectionLevels"></a>

```java
public void resetProtectionLevels()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsRepositoryProtectedBranchManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagement;

DevopsRepositoryProtectedBranchManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagement;

DevopsRepositoryProtectedBranchManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagement;

DevopsRepositoryProtectedBranchManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagement;

DevopsRepositoryProtectedBranchManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsRepositoryProtectedBranchManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevopsRepositoryProtectedBranchManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsRepositoryProtectedBranchManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsRepositoryProtectedBranchManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevopsRepositoryProtectedBranchManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference">DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevelsInput">protectionLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevels">protectionLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeouts"></a>

```java
public DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference">DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference</a>

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `protectionLevelsInput`<sup>Optional</sup> <a name="protectionLevelsInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevelsInput"></a>

```java
public java.util.List<java.lang.String> getProtectionLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `protectionLevels`<sup>Required</sup> <a name="protectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevels"></a>

```java
public java.util.List<java.lang.String> getProtectionLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsRepositoryProtectedBranchManagementConfig <a name="DevopsRepositoryProtectedBranchManagementConfig" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagementConfig;

DevopsRepositoryProtectedBranchManagementConfig.builder()
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
    .branchName(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .protectionLevels(java.util.List<java.lang.String>)
//  .timeouts(DevopsRepositoryProtectedBranchManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.protectionLevels">protectionLevels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectionLevels`<sup>Optional</sup> <a name="protectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.protectionLevels"></a>

```java
public java.util.List<java.lang.String> getProtectionLevels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.timeouts"></a>

```java
public DevopsRepositoryProtectedBranchManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#timeouts DevopsRepositoryProtectedBranchManagement#timeouts}

---

### DevopsRepositoryProtectedBranchManagementTimeouts <a name="DevopsRepositoryProtectedBranchManagementTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagementTimeouts;

DevopsRepositoryProtectedBranchManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#create DevopsRepositoryProtectedBranchManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#delete DevopsRepositoryProtectedBranchManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#update DevopsRepositoryProtectedBranchManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#create DevopsRepositoryProtectedBranchManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#delete DevopsRepositoryProtectedBranchManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#update DevopsRepositoryProtectedBranchManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference <a name="DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_repository_protected_branch_management.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference;

new DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

---



