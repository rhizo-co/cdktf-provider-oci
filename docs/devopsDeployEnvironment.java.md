# `devopsDeployEnvironment` Submodule <a name="`devopsDeployEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployEnvironment <a name="DevopsDeployEnvironment" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment oci_devops_deploy_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironment;

DevopsDeployEnvironment.Builder.create(Construct scope, java.lang.String id)
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
    .deployEnvironmentType(java.lang.String)
    .projectId(java.lang.String)
//  .clusterId(java.lang.String)
//  .computeInstanceGroupSelectors(DevopsDeployEnvironmentComputeInstanceGroupSelectors)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .functionId(java.lang.String)
//  .id(java.lang.String)
//  .networkChannel(DevopsDeployEnvironmentNetworkChannel)
//  .timeouts(DevopsDeployEnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.deployEnvironmentType">deployEnvironmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#deploy_environment_type DevopsDeployEnvironment#deploy_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#project_id DevopsDeployEnvironment#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#cluster_id DevopsDeployEnvironment#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.computeInstanceGroupSelectors">computeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | compute_instance_group_selectors block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#defined_tags DevopsDeployEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#description DevopsDeployEnvironment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#display_name DevopsDeployEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#freeform_tags DevopsDeployEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#function_id DevopsDeployEnvironment#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#id DevopsDeployEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployEnvironmentType`<sup>Required</sup> <a name="deployEnvironmentType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.deployEnvironmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#deploy_environment_type DevopsDeployEnvironment#deploy_environment_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#project_id DevopsDeployEnvironment#project_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#cluster_id DevopsDeployEnvironment#cluster_id}.

---

##### `computeInstanceGroupSelectors`<sup>Optional</sup> <a name="computeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.computeInstanceGroupSelectors"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

compute_instance_group_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#compute_instance_group_selectors DevopsDeployEnvironment#compute_instance_group_selectors}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#defined_tags DevopsDeployEnvironment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#description DevopsDeployEnvironment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#display_name DevopsDeployEnvironment#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#freeform_tags DevopsDeployEnvironment#freeform_tags}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.functionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#function_id DevopsDeployEnvironment#function_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#id DevopsDeployEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkChannel`<sup>Optional</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.networkChannel"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#network_channel DevopsDeployEnvironment#network_channel}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#timeouts DevopsDeployEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putComputeInstanceGroupSelectors">putComputeInstanceGroupSelectors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putNetworkChannel">putNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetComputeInstanceGroupSelectors">resetComputeInstanceGroupSelectors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetNetworkChannel">resetNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeInstanceGroupSelectors` <a name="putComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putComputeInstanceGroupSelectors"></a>

```java
public void putComputeInstanceGroupSelectors(DevopsDeployEnvironmentComputeInstanceGroupSelectors value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putComputeInstanceGroupSelectors.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

---

##### `putNetworkChannel` <a name="putNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putNetworkChannel"></a>

```java
public void putNetworkChannel(DevopsDeployEnvironmentNetworkChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putNetworkChannel.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putTimeouts"></a>

```java
public void putTimeouts(DevopsDeployEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a>

---

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetComputeInstanceGroupSelectors` <a name="resetComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetComputeInstanceGroupSelectors"></a>

```java
public void resetComputeInstanceGroupSelectors()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetFunctionId` <a name="resetFunctionId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFunctionId"></a>

```java
public void resetFunctionId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkChannel` <a name="resetNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetNetworkChannel"></a>

```java
public void resetNetworkChannel()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironment;

DevopsDeployEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironment;

DevopsDeployEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironment;

DevopsDeployEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironment;

DevopsDeployEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsDeployEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevopsDeployEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsDeployEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsDeployEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectors">computeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference">DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference">DevopsDeployEnvironmentNetworkChannelOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference">DevopsDeployEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectorsInput">computeInstanceGroupSelectorsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentTypeInput">deployEnvironmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannelInput">networkChannelInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentType">deployEnvironmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupSelectors`<sup>Required</sup> <a name="computeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectors"></a>

```java
public DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference getComputeInstanceGroupSelectors();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference">DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `networkChannel`<sup>Required</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannel"></a>

```java
public DevopsDeployEnvironmentNetworkChannelOutputReference getNetworkChannel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference">DevopsDeployEnvironmentNetworkChannelOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeouts"></a>

```java
public DevopsDeployEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference">DevopsDeployEnvironmentTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupSelectorsInput`<sup>Optional</sup> <a name="computeInstanceGroupSelectorsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectorsInput"></a>

```java
public DevopsDeployEnvironmentComputeInstanceGroupSelectors getComputeInstanceGroupSelectorsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployEnvironmentTypeInput`<sup>Optional</sup> <a name="deployEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentTypeInput"></a>

```java
public java.lang.String getDeployEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkChannelInput`<sup>Optional</sup> <a name="networkChannelInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannelInput"></a>

```java
public DevopsDeployEnvironmentNetworkChannel getNetworkChannelInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployEnvironmentType`<sup>Required</sup> <a name="deployEnvironmentType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentType"></a>

```java
public java.lang.String getDeployEnvironmentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployEnvironmentComputeInstanceGroupSelectors <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentComputeInstanceGroupSelectors;

DevopsDeployEnvironmentComputeInstanceGroupSelectors.builder()
//  .items(IResolvable)
//  .items(java.util.List<DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>></code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#items DevopsDeployEnvironment#items}

---

### DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems;

DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.builder()
    .selectorType(java.lang.String)
//  .computeInstanceIds(java.util.List<java.lang.String>)
//  .query(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.selectorType">selectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#selector_type DevopsDeployEnvironment#selector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.computeInstanceIds">computeInstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#compute_instance_ids DevopsDeployEnvironment#compute_instance_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#query DevopsDeployEnvironment#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#region DevopsDeployEnvironment#region}. |

---

##### `selectorType`<sup>Required</sup> <a name="selectorType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.selectorType"></a>

```java
public java.lang.String getSelectorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#selector_type DevopsDeployEnvironment#selector_type}.

---

##### `computeInstanceIds`<sup>Optional</sup> <a name="computeInstanceIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.computeInstanceIds"></a>

```java
public java.util.List<java.lang.String> getComputeInstanceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#compute_instance_ids DevopsDeployEnvironment#compute_instance_ids}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#query DevopsDeployEnvironment#query}.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#region DevopsDeployEnvironment#region}.

---

### DevopsDeployEnvironmentConfig <a name="DevopsDeployEnvironmentConfig" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentConfig;

DevopsDeployEnvironmentConfig.builder()
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
    .deployEnvironmentType(java.lang.String)
    .projectId(java.lang.String)
//  .clusterId(java.lang.String)
//  .computeInstanceGroupSelectors(DevopsDeployEnvironmentComputeInstanceGroupSelectors)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .functionId(java.lang.String)
//  .id(java.lang.String)
//  .networkChannel(DevopsDeployEnvironmentNetworkChannel)
//  .timeouts(DevopsDeployEnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.deployEnvironmentType">deployEnvironmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#deploy_environment_type DevopsDeployEnvironment#deploy_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#project_id DevopsDeployEnvironment#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#cluster_id DevopsDeployEnvironment#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.computeInstanceGroupSelectors">computeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | compute_instance_group_selectors block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#defined_tags DevopsDeployEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#description DevopsDeployEnvironment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#display_name DevopsDeployEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#freeform_tags DevopsDeployEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#function_id DevopsDeployEnvironment#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#id DevopsDeployEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployEnvironmentType`<sup>Required</sup> <a name="deployEnvironmentType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.deployEnvironmentType"></a>

```java
public java.lang.String getDeployEnvironmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#deploy_environment_type DevopsDeployEnvironment#deploy_environment_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#project_id DevopsDeployEnvironment#project_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#cluster_id DevopsDeployEnvironment#cluster_id}.

---

##### `computeInstanceGroupSelectors`<sup>Optional</sup> <a name="computeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.computeInstanceGroupSelectors"></a>

```java
public DevopsDeployEnvironmentComputeInstanceGroupSelectors getComputeInstanceGroupSelectors();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

compute_instance_group_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#compute_instance_group_selectors DevopsDeployEnvironment#compute_instance_group_selectors}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#defined_tags DevopsDeployEnvironment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#description DevopsDeployEnvironment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#display_name DevopsDeployEnvironment#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#freeform_tags DevopsDeployEnvironment#freeform_tags}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#function_id DevopsDeployEnvironment#function_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#id DevopsDeployEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkChannel`<sup>Optional</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.networkChannel"></a>

```java
public DevopsDeployEnvironmentNetworkChannel getNetworkChannel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#network_channel DevopsDeployEnvironment#network_channel}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.timeouts"></a>

```java
public DevopsDeployEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#timeouts DevopsDeployEnvironment#timeouts}

---

### DevopsDeployEnvironmentNetworkChannel <a name="DevopsDeployEnvironmentNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentNetworkChannel;

DevopsDeployEnvironmentNetworkChannel.builder()
    .networkChannelType(java.lang.String)
    .subnetId(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.networkChannelType">networkChannelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#network_channel_type DevopsDeployEnvironment#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#subnet_id DevopsDeployEnvironment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#nsg_ids DevopsDeployEnvironment#nsg_ids}. |

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.networkChannelType"></a>

```java
public java.lang.String getNetworkChannelType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#network_channel_type DevopsDeployEnvironment#network_channel_type}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#subnet_id DevopsDeployEnvironment#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#nsg_ids DevopsDeployEnvironment#nsg_ids}.

---

### DevopsDeployEnvironmentTimeouts <a name="DevopsDeployEnvironmentTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentTimeouts;

DevopsDeployEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#create DevopsDeployEnvironment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#delete DevopsDeployEnvironment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#update DevopsDeployEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#create DevopsDeployEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#delete DevopsDeployEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#update DevopsDeployEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList;

new DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get"></a>

```java
public DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>>

---


### DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference;

new DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetComputeInstanceIds">resetComputeInstanceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeInstanceIds` <a name="resetComputeInstanceIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetComputeInstanceIds"></a>

```java
public void resetComputeInstanceIds()
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIdsInput">computeInstanceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorTypeInput">selectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds">computeInstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType">selectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeInstanceIdsInput`<sup>Optional</sup> <a name="computeInstanceIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIdsInput"></a>

```java
public java.util.List<java.lang.String> getComputeInstanceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `selectorTypeInput`<sup>Optional</sup> <a name="selectorTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorTypeInput"></a>

```java
public java.lang.String getSelectorTypeInput();
```

- *Type:* java.lang.String

---

##### `computeInstanceIds`<sup>Required</sup> <a name="computeInstanceIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds"></a>

```java
public java.util.List<java.lang.String> getComputeInstanceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `selectorType`<sup>Required</sup> <a name="selectorType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType"></a>

```java
public java.lang.String getSelectorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>

---


### DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference;

new DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>>

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.items"></a>

```java
public DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.internalValue"></a>

```java
public DevopsDeployEnvironmentComputeInstanceGroupSelectors getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

---


### DevopsDeployEnvironmentNetworkChannelOutputReference <a name="DevopsDeployEnvironmentNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentNetworkChannelOutputReference;

new DevopsDeployEnvironmentNetworkChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelTypeInput">networkChannelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkChannelTypeInput`<sup>Optional</sup> <a name="networkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelTypeInput"></a>

```java
public java.lang.String getNetworkChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelType"></a>

```java
public java.lang.String getNetworkChannelType();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.internalValue"></a>

```java
public DevopsDeployEnvironmentNetworkChannel getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

---


### DevopsDeployEnvironmentTimeoutsOutputReference <a name="DevopsDeployEnvironmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_environment.DevopsDeployEnvironmentTimeoutsOutputReference;

new DevopsDeployEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a>

---



