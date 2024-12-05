# `devopsProjectRepositorySetting` Submodule <a name="`devopsProjectRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsProjectRepositorySetting <a name="DevopsProjectRepositorySetting" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting oci_devops_project_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySetting;

DevopsProjectRepositorySetting.Builder.create(Construct scope, java.lang.String id)
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
    .projectId(java.lang.String)
//  .approvalRules(DevopsProjectRepositorySettingApprovalRules)
//  .id(java.lang.String)
//  .mergeSettings(DevopsProjectRepositorySettingMergeSettings)
//  .timeouts(DevopsProjectRepositorySettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.approvalRules">approvalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.mergeSettings">mergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}.

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.approvalRules"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mergeSettings`<sup>Optional</sup> <a name="mergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.mergeSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings">putMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings">resetMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalRules` <a name="putApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules"></a>

```java
public void putApprovalRules(DevopsProjectRepositorySettingApprovalRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `putMergeSettings` <a name="putMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings"></a>

```java
public void putMergeSettings(DevopsProjectRepositorySettingMergeSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts"></a>

```java
public void putTimeouts(DevopsProjectRepositorySettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules"></a>

```java
public void resetApprovalRules()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId"></a>

```java
public void resetId()
```

##### `resetMergeSettings` <a name="resetMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings"></a>

```java
public void resetMergeSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySetting;

DevopsProjectRepositorySetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySetting;

DevopsProjectRepositorySetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySetting;

DevopsProjectRepositorySetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySetting;

DevopsProjectRepositorySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsProjectRepositorySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsProjectRepositorySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsProjectRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevopsProjectRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules">approvalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings">mergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput">approvalRulesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput">mergeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules"></a>

```java
public DevopsProjectRepositorySettingApprovalRulesOutputReference getApprovalRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a>

---

##### `mergeSettings`<sup>Required</sup> <a name="mergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings"></a>

```java
public DevopsProjectRepositorySettingMergeSettingsOutputReference getMergeSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts"></a>

```java
public DevopsProjectRepositorySettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a>

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput"></a>

```java
public DevopsProjectRepositorySettingApprovalRules getApprovalRulesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mergeSettingsInput`<sup>Optional</sup> <a name="mergeSettingsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput"></a>

```java
public DevopsProjectRepositorySettingMergeSettings getMergeSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsProjectRepositorySettingApprovalRules <a name="DevopsProjectRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRules;

DevopsProjectRepositorySettingApprovalRules.builder()
    .items(IResolvable)
    .items(java.util.List<DevopsProjectRepositorySettingApprovalRulesItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>></code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#items DevopsProjectRepositorySetting#items}

---

### DevopsProjectRepositorySettingApprovalRulesItems <a name="DevopsProjectRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRulesItems;

DevopsProjectRepositorySettingApprovalRulesItems.builder()
    .minApprovalsCount(java.lang.Number)
    .name(java.lang.String)
//  .destinationBranch(java.lang.String)
//  .reviewers(IResolvable)
//  .reviewers(java.util.List<DevopsProjectRepositorySettingApprovalRulesItemsReviewers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount">minApprovalsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch">destinationBranch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers">reviewers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>></code> | reviewers block. |

---

##### `minApprovalsCount`<sup>Required</sup> <a name="minApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount"></a>

```java
public java.lang.Number getMinApprovalsCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}.

---

##### `destinationBranch`<sup>Optional</sup> <a name="destinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch"></a>

```java
public java.lang.String getDestinationBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}.

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers"></a>

```java
public java.lang.Object getReviewers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>>

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#reviewers DevopsProjectRepositorySetting#reviewers}

---

### DevopsProjectRepositorySettingApprovalRulesItemsReviewers <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers;

DevopsProjectRepositorySettingApprovalRulesItemsReviewers.builder()
    .principalId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}.

---

### DevopsProjectRepositorySettingConfig <a name="DevopsProjectRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingConfig;

DevopsProjectRepositorySettingConfig.builder()
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
    .projectId(java.lang.String)
//  .approvalRules(DevopsProjectRepositorySettingApprovalRules)
//  .id(java.lang.String)
//  .mergeSettings(DevopsProjectRepositorySettingMergeSettings)
//  .timeouts(DevopsProjectRepositorySettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules">approvalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings">mergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}.

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules"></a>

```java
public DevopsProjectRepositorySettingApprovalRules getApprovalRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mergeSettings`<sup>Optional</sup> <a name="mergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings"></a>

```java
public DevopsProjectRepositorySettingMergeSettings getMergeSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts"></a>

```java
public DevopsProjectRepositorySettingTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}

---

### DevopsProjectRepositorySettingMergeSettings <a name="DevopsProjectRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingMergeSettings;

DevopsProjectRepositorySettingMergeSettings.builder()
    .allowedMergeStrategies(java.util.List<java.lang.String>)
    .defaultMergeStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies">allowedMergeStrategies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy">defaultMergeStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}. |

---

##### `allowedMergeStrategies`<sup>Required</sup> <a name="allowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies"></a>

```java
public java.util.List<java.lang.String> getAllowedMergeStrategies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}.

---

##### `defaultMergeStrategy`<sup>Required</sup> <a name="defaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy"></a>

```java
public java.lang.String getDefaultMergeStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}.

---

### DevopsProjectRepositorySettingTimeouts <a name="DevopsProjectRepositorySettingTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingTimeouts;

DevopsProjectRepositorySettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsProjectRepositorySettingApprovalRulesItemsList <a name="DevopsProjectRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRulesItemsList;

new DevopsProjectRepositorySettingApprovalRulesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get"></a>

```java
public DevopsProjectRepositorySettingApprovalRulesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>>

---


### DevopsProjectRepositorySettingApprovalRulesItemsOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference;

new DevopsProjectRepositorySettingApprovalRulesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers">putReviewers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch">resetDestinationBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers">resetReviewers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReviewers` <a name="putReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers"></a>

```java
public void putReviewers(IResolvable OR java.util.List<DevopsProjectRepositorySettingApprovalRulesItemsReviewers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>>

---

##### `resetDestinationBranch` <a name="resetDestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch"></a>

```java
public void resetDestinationBranch()
```

##### `resetReviewers` <a name="resetReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers"></a>

```java
public void resetReviewers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput">destinationBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput">minApprovalsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput">reviewersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">destinationBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">minApprovalsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```java
public DevopsProjectRepositorySettingApprovalRulesItemsReviewersList getReviewers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `destinationBranchInput`<sup>Optional</sup> <a name="destinationBranchInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput"></a>

```java
public java.lang.String getDestinationBranchInput();
```

- *Type:* java.lang.String

---

##### `minApprovalsCountInput`<sup>Optional</sup> <a name="minApprovalsCountInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput"></a>

```java
public java.lang.Number getMinApprovalsCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `reviewersInput`<sup>Optional</sup> <a name="reviewersInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput"></a>

```java
public java.lang.Object getReviewersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>>

---

##### `destinationBranch`<sup>Required</sup> <a name="destinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```java
public java.lang.String getDestinationBranch();
```

- *Type:* java.lang.String

---

##### `minApprovalsCount`<sup>Required</sup> <a name="minApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```java
public java.lang.Number getMinApprovalsCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersList <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList;

new DevopsProjectRepositorySettingApprovalRulesItemsReviewersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```java
public DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>>

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference;

new DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">principalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">principalState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```java
public java.lang.String getPrincipalName();
```

- *Type:* java.lang.String

---

##### `principalState`<sup>Required</sup> <a name="principalState" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```java
public java.lang.String getPrincipalState();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>

---


### DevopsProjectRepositorySettingApprovalRulesOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingApprovalRulesOutputReference;

new DevopsProjectRepositorySettingApprovalRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsProjectRepositorySettingApprovalRulesItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items"></a>

```java
public DevopsProjectRepositorySettingApprovalRulesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```java
public DevopsProjectRepositorySettingApprovalRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---


### DevopsProjectRepositorySettingMergeSettingsOutputReference <a name="DevopsProjectRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingMergeSettingsOutputReference;

new DevopsProjectRepositorySettingMergeSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput">allowedMergeStrategiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput">defaultMergeStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">allowedMergeStrategies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">defaultMergeStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedMergeStrategiesInput`<sup>Optional</sup> <a name="allowedMergeStrategiesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMergeStrategiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultMergeStrategyInput`<sup>Optional</sup> <a name="defaultMergeStrategyInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput"></a>

```java
public java.lang.String getDefaultMergeStrategyInput();
```

- *Type:* java.lang.String

---

##### `allowedMergeStrategies`<sup>Required</sup> <a name="allowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```java
public java.util.List<java.lang.String> getAllowedMergeStrategies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultMergeStrategy`<sup>Required</sup> <a name="defaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```java
public java.lang.String getDefaultMergeStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```java
public DevopsProjectRepositorySettingMergeSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---


### DevopsProjectRepositorySettingTimeoutsOutputReference <a name="DevopsProjectRepositorySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_project_repository_setting.DevopsProjectRepositorySettingTimeoutsOutputReference;

new DevopsProjectRepositorySettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---



