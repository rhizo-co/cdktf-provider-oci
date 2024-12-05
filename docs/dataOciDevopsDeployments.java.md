# `dataOciDevopsDeployments` Submodule <a name="`dataOciDevopsDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployments <a name="DataOciDevopsDeployments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments oci_devops_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeployments;

DataOciDevopsDeployments.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .deployPipelineId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsDeploymentsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#compartment_id DataOciDevopsDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#deploy_pipeline_id DataOciDevopsDeployments#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#display_name DataOciDevopsDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#id DataOciDevopsDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#project_id DataOciDevopsDeployments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#state DataOciDevopsDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_greater_than_or_equal_to DataOciDevopsDeployments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_less_than DataOciDevopsDeployments#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#compartment_id DataOciDevopsDeployments#compartment_id}.

---

##### `deployPipelineId`<sup>Optional</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.deployPipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#deploy_pipeline_id DataOciDevopsDeployments#deploy_pipeline_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#display_name DataOciDevopsDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#filter DataOciDevopsDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#id DataOciDevopsDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#project_id DataOciDevopsDeployments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#state DataOciDevopsDeployments#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_greater_than_or_equal_to DataOciDevopsDeployments#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_less_than DataOciDevopsDeployments#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetDeployPipelineId">resetDeployPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDevopsDeploymentsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDeployPipelineId` <a name="resetDeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetDeployPipelineId"></a>

```java
public void resetDeployPipelineId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetState"></a>

```java
public void resetState()
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeCreatedGreaterThanOrEqualTo()
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.resetTimeCreatedLessThan"></a>

```java
public void resetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeployments;

DataOciDevopsDeployments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeployments;

DataOciDevopsDeployments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeployments;

DataOciDevopsDeployments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeployments;

DataOciDevopsDeployments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsDeployments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsDeployments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.deploymentCollection">deploymentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList">DataOciDevopsDeploymentsDeploymentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList">DataOciDevopsDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.deployPipelineIdInput">deployPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `deploymentCollection`<sup>Required</sup> <a name="deploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.deploymentCollection"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionList getDeploymentCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList">DataOciDevopsDeploymentsDeploymentCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.filter"></a>

```java
public DataOciDevopsDeploymentsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList">DataOciDevopsDeploymentsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `deployPipelineIdInput`<sup>Optional</sup> <a name="deployPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.deployPipelineIdInput"></a>

```java
public java.lang.String getDeployPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedLessThanInput"></a>

```java
public java.lang.String getTimeCreatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeployments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeploymentsConfig <a name="DataOciDevopsDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsConfig;

DataOciDevopsDeploymentsConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .deployPipelineId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDevopsDeploymentsFilter>)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
//  .state(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#compartment_id DataOciDevopsDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#deploy_pipeline_id DataOciDevopsDeployments#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#display_name DataOciDevopsDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#id DataOciDevopsDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#project_id DataOciDevopsDeployments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#state DataOciDevopsDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_greater_than_or_equal_to DataOciDevopsDeployments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_less_than DataOciDevopsDeployments#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#compartment_id DataOciDevopsDeployments#compartment_id}.

---

##### `deployPipelineId`<sup>Optional</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#deploy_pipeline_id DataOciDevopsDeployments#deploy_pipeline_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#display_name DataOciDevopsDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#filter DataOciDevopsDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#id DataOciDevopsDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#project_id DataOciDevopsDeployments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#state DataOciDevopsDeployments#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_greater_than_or_equal_to DataOciDevopsDeployments#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsConfig.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#time_created_less_than DataOciDevopsDeployments#time_created_less_than}.

---

### DataOciDevopsDeploymentsDeploymentCollection <a name="DataOciDevopsDeploymentsDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollection;

DataOciDevopsDeploymentsDeploymentCollection.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItems;

DataOciDevopsDeploymentsDeploymentCollectionItems.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments.builder()
    .build();
```


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems;

DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems.builder()
    .build();
```


### DataOciDevopsDeploymentsFilter <a name="DataOciDevopsDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsFilter;

DataOciDevopsDeploymentsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#name DataOciDevopsDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#values DataOciDevopsDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#regex DataOciDevopsDeployments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#name DataOciDevopsDeployments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#values DataOciDevopsDeployments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deployments#regex DataOciDevopsDeployments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.deployArtifactId"></a>

```java
public java.lang.String getDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArguments</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArguments</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.deployStageExecutionProgress">deployStageExecutionProgress</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployStageExecutionProgress`<sup>Required</sup> <a name="deployStageExecutionProgress" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.deployStageExecutionProgress"></a>

```java
public StringMap getDeployStageExecutionProgress();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgress</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">deployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployStageId`<sup>Required</sup> <a name="deployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```java
public java.lang.String getDeployStageId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages">deployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId"></a>

```java
public java.lang.String getDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `deployPipelineStages`<sup>Required</sup> <a name="deployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList getDeployPipelineStages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifacts</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">deployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployStageId`<sup>Required</sup> <a name="deployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```java
public java.lang.String getDeployStageId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId">deployEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages">deployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployEnvironmentId`<sup>Required</sup> <a name="deployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId"></a>

```java
public java.lang.String getDeployEnvironmentId();
```

- *Type:* java.lang.String

---

##### `deployPipelineStages`<sup>Required</sup> <a name="deployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList getDeployPipelineStages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironments</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.deployStageId">deployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployStageId`<sup>Required</sup> <a name="deployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.deployStageId"></a>

```java
public java.lang.String getDeployStageId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArguments</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsList <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList;

new DataOciDevopsDeploymentsDeploymentCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployArtifactOverrideArguments">deployArtifactOverrideArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentArguments">deploymentArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentExecutionProgress">deploymentExecutionProgress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployPipelineArtifacts">deployPipelineArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployPipelineEnvironments">deployPipelineEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployStageId">deployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployStageOverrideArguments">deployStageOverrideArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.previousDeploymentId">previousDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.triggerNewDevopsDeployment">triggerNewDevopsDeployment</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItems">DataOciDevopsDeploymentsDeploymentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deployArtifactOverrideArguments`<sup>Required</sup> <a name="deployArtifactOverrideArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployArtifactOverrideArguments"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList getDeployArtifactOverrideArguments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployArtifactOverrideArgumentsList</a>

---

##### `deploymentArguments`<sup>Required</sup> <a name="deploymentArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentArguments"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList getDeploymentArguments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentArgumentsList</a>

---

##### `deploymentExecutionProgress`<sup>Required</sup> <a name="deploymentExecutionProgress" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentExecutionProgress"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList getDeploymentExecutionProgress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeploymentExecutionProgressList</a>

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `deployPipelineArtifacts`<sup>Required</sup> <a name="deployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployPipelineArtifacts"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList getDeployPipelineArtifacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineArtifactsList</a>

---

##### `deployPipelineEnvironments`<sup>Required</sup> <a name="deployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployPipelineEnvironments"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList getDeployPipelineEnvironments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployPipelineEnvironmentsList</a>

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

---

##### `deployStageId`<sup>Required</sup> <a name="deployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployStageId"></a>

```java
public java.lang.String getDeployStageId();
```

- *Type:* java.lang.String

---

##### `deployStageOverrideArguments`<sup>Required</sup> <a name="deployStageOverrideArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.deployStageOverrideArguments"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList getDeployStageOverrideArguments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList">DataOciDevopsDeploymentsDeploymentCollectionItemsDeployStageOverrideArgumentsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `previousDeploymentId`<sup>Required</sup> <a name="previousDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.previousDeploymentId"></a>

```java
public java.lang.String getPreviousDeploymentId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `triggerNewDevopsDeployment`<sup>Required</sup> <a name="triggerNewDevopsDeployment" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.triggerNewDevopsDeployment"></a>

```java
public IResolvable getTriggerNewDevopsDeployment();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItems">DataOciDevopsDeploymentsDeploymentCollectionItems</a>

---


### DataOciDevopsDeploymentsDeploymentCollectionList <a name="DataOciDevopsDeploymentsDeploymentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionList;

new DataOciDevopsDeploymentsDeploymentCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.get"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeploymentsDeploymentCollectionOutputReference <a name="DataOciDevopsDeploymentsDeploymentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference;

new DataOciDevopsDeploymentsDeploymentCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollection">DataOciDevopsDeploymentsDeploymentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionItemsList">DataOciDevopsDeploymentsDeploymentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeploymentsDeploymentCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsDeploymentCollection">DataOciDevopsDeploymentsDeploymentCollection</a>

---


### DataOciDevopsDeploymentsFilterList <a name="DataOciDevopsDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsFilterList;

new DataOciDevopsDeploymentsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.get"></a>

```java
public DataOciDevopsDeploymentsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>>

---


### DataOciDevopsDeploymentsFilterOutputReference <a name="DataOciDevopsDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deployments.DataOciDevopsDeploymentsFilterOutputReference;

new DataOciDevopsDeploymentsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployments.DataOciDevopsDeploymentsFilter">DataOciDevopsDeploymentsFilter</a>

---



