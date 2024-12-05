# `dataOciDevopsDeployStages` Submodule <a name="`dataOciDevopsDeployStages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployStages <a name="DataOciDevopsDeployStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages oci_devops_deploy_stages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStages;

DataOciDevopsDeployStages.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDevopsDeployStagesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}.

---

##### `deployPipelineId`<sup>Optional</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.deployPipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#filter DataOciDevopsDeployStages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId">resetDeployPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDevopsDeployStagesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDeployPipelineId` <a name="resetDeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId"></a>

```java
public void resetDeployPipelineId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStages;

DataOciDevopsDeployStages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStages;

DataOciDevopsDeployStages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStages;

DataOciDevopsDeployStages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStages;

DataOciDevopsDeployStages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDevopsDeployStages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDevopsDeployStages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDevopsDeployStages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployStages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection">deployStageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput">deployPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `deployStageCollection`<sup>Required</sup> <a name="deployStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionList getDeployStageCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter"></a>

```java
public DataOciDevopsDeployStagesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `deployPipelineIdInput`<sup>Optional</sup> <a name="deployPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput"></a>

```java
public java.lang.String getDeployPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployStagesConfig <a name="DataOciDevopsDeployStagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesConfig;

DataOciDevopsDeployStagesConfig.builder()
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
//  .filter(java.util.List<DataOciDevopsDeployStagesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}.

---

##### `deployPipelineId`<sup>Optional</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#filter DataOciDevopsDeployStages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}.

---

### DataOciDevopsDeployStagesDeployStageCollection <a name="DataOciDevopsDeployStagesDeployStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollection;

DataOciDevopsDeployStagesDeployStageCollection.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItems;

DataOciDevopsDeployStagesDeployStageCollectionItems.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy;

DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps;

DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy;

DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy;

DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig;

DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel;

DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig;

DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection;

DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems;

DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy;

DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps;

DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig;

DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig;

DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy;

DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy;

DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetString <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString;

DataOciDevopsDeployStagesDeployStageCollectionItemsSetString.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems;

DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues;

DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems;

DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig;

DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig.builder()
    .build();
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria;

DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria.builder()
    .build();
```


### DataOciDevopsDeployStagesFilter <a name="DataOciDevopsDeployStagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesFilter;

DataOciDevopsDeployStagesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType">approvalPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired">numberOfApprovalsRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalPolicyType`<sup>Required</sup> <a name="approvalPolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```java
public java.lang.String getApprovalPolicyType();
```

- *Type:* java.lang.String

---

##### `numberOfApprovalsRequired`<sup>Required</sup> <a name="numberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```java
public java.lang.Number getNumberOfApprovalsRequired();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName">ingressName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA">namespaceA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB">namespaceB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName"></a>

```java
public java.lang.String getIngressName();
```

- *Type:* java.lang.String

---

##### `namespaceA`<sup>Required</sup> <a name="namespaceA" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA"></a>

```java
public java.lang.String getNamespaceA();
```

- *Type:* java.lang.String

---

##### `namespaceB`<sup>Required</sup> <a name="namespaceB" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB"></a>

```java
public java.lang.String getNamespaceB();
```

- *Type:* java.lang.String

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName">ingressName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName"></a>

```java
public java.lang.String getIngressName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```java
public java.lang.String getNetworkChannelType();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType">containerConfigType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `containerConfigType`<sup>Required</sup> <a name="containerConfigType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType"></a>

```java
public java.lang.String getContainerConfigType();
```

- *Type:* java.lang.String

---

##### `networkChannel`<sup>Required</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList getNetworkChannel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a>

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount">failureCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage">failurePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureCount`<sup>Required</sup> <a name="failureCount" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount"></a>

```java
public java.lang.Number getFailureCount();
```

- *Type:* java.lang.Number

---

##### `failurePercentage`<sup>Required</sup> <a name="failurePercentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage"></a>

```java
public java.lang.Number getFailurePercentage();
```

- *Type:* java.lang.Number

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy">approvalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled">areHooksEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps">blueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy">blueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy">canaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId">commandSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">computeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId">computeInstanceGroupCanaryDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">computeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId">computeInstanceGroupDeployEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config">config</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig">containerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds">deployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA">deployEnvironmentIdA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB">deployEnvironmentIdB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId">deploymentSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection">deployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType">deployStageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId">dockerImageDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy">failurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId">functionDeployEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds">functionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps">greenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId">helmChartDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds">helmCommandArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync">isAsync</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled">isDebugEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled">isForceEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete">isUninstallOnStageDelete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled">isValidationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds">kubernetesManifestDeployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig">loadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs">maxMemoryInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId">okeBlueGreenDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId">okeCanaryDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId">okeCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId">okeClusterDeployEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig">productionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName">releaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy">rollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString">setString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues">setValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail">shouldCleanupOnFail</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait">shouldNotWait</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues">shouldResetValues</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues">shouldReuseValues</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds">shouldSkipCrds</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes">shouldSkipRenderSubchartNotes</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig">testLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget">trafficShiftTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds">valuesArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalPolicy`<sup>Required</sup> <a name="approvalPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList getApprovalPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a>

---

##### `areHooksEnabled`<sup>Required</sup> <a name="areHooksEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled"></a>

```java
public IResolvable getAreHooksEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `blueBackendIps`<sup>Required</sup> <a name="blueBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList getBlueBackendIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a>

---

##### `blueGreenStrategy`<sup>Required</sup> <a name="blueGreenStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList getBlueGreenStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a>

---

##### `canaryStrategy`<sup>Required</sup> <a name="canaryStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList getCanaryStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a>

---

##### `commandSpecDeployArtifactId`<sup>Required</sup> <a name="commandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId"></a>

```java
public java.lang.String getCommandSpecDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupBlueGreenDeploymentDeployStageId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupCanaryDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryDeployStageId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryTrafficShiftDeployStageId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupDeployEnvironmentId`<sup>Required</sup> <a name="computeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId"></a>

```java
public java.lang.String getComputeInstanceGroupDeployEnvironmentId();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config"></a>

```java
public StringMap getConfig();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList getContainerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId"></a>

```java
public java.lang.String getDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `deployArtifactIds`<sup>Required</sup> <a name="deployArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds"></a>

```java
public java.util.List<java.lang.String> getDeployArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deployEnvironmentIdA`<sup>Required</sup> <a name="deployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA"></a>

```java
public java.lang.String getDeployEnvironmentIdA();
```

- *Type:* java.lang.String

---

##### `deployEnvironmentIdB`<sup>Required</sup> <a name="deployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB"></a>

```java
public java.lang.String getDeployEnvironmentIdB();
```

- *Type:* java.lang.String

---

##### `deploymentSpecDeployArtifactId`<sup>Required</sup> <a name="deploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId"></a>

```java
public java.lang.String getDeploymentSpecDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

---

##### `deployStagePredecessorCollection`<sup>Required</sup> <a name="deployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList getDeployStagePredecessorCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a>

---

##### `deployStageType`<sup>Required</sup> <a name="deployStageType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType"></a>

```java
public java.lang.String getDeployStageType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dockerImageDeployArtifactId`<sup>Required</sup> <a name="dockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId"></a>

```java
public java.lang.String getDockerImageDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList getFailurePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `functionDeployEnvironmentId`<sup>Required</sup> <a name="functionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId"></a>

```java
public java.lang.String getFunctionDeployEnvironmentId();
```

- *Type:* java.lang.String

---

##### `functionTimeoutInSeconds`<sup>Required</sup> <a name="functionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds"></a>

```java
public java.lang.Number getFunctionTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `greenBackendIps`<sup>Required</sup> <a name="greenBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList getGreenBackendIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a>

---

##### `helmChartDeployArtifactId`<sup>Required</sup> <a name="helmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId"></a>

```java
public java.lang.String getHelmChartDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `helmCommandArtifactIds`<sup>Required</sup> <a name="helmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds"></a>

```java
public java.util.List<java.lang.String> getHelmCommandArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAsync`<sup>Required</sup> <a name="isAsync" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync"></a>

```java
public IResolvable getIsAsync();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDebugEnabled`<sup>Required</sup> <a name="isDebugEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled"></a>

```java
public IResolvable getIsDebugEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isForceEnabled`<sup>Required</sup> <a name="isForceEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled"></a>

```java
public IResolvable getIsForceEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isUninstallOnStageDelete`<sup>Required</sup> <a name="isUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete"></a>

```java
public IResolvable getIsUninstallOnStageDelete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isValidationEnabled`<sup>Required</sup> <a name="isValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled"></a>

```java
public IResolvable getIsValidationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kubernetesManifestDeployArtifactIds`<sup>Required</sup> <a name="kubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds"></a>

```java
public java.util.List<java.lang.String> getKubernetesManifestDeployArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `loadBalancerConfig`<sup>Required</sup> <a name="loadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList getLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a>

---

##### `maxHistory`<sup>Required</sup> <a name="maxHistory" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory"></a>

```java
public java.lang.Number getMaxHistory();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInMbs`<sup>Required</sup> <a name="maxMemoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs"></a>

```java
public java.lang.String getMaxMemoryInMbs();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `okeBlueGreenDeployStageId`<sup>Required</sup> <a name="okeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId"></a>

```java
public java.lang.String getOkeBlueGreenDeployStageId();
```

- *Type:* java.lang.String

---

##### `okeCanaryDeployStageId`<sup>Required</sup> <a name="okeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId"></a>

```java
public java.lang.String getOkeCanaryDeployStageId();
```

- *Type:* java.lang.String

---

##### `okeCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="okeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId"></a>

```java
public java.lang.String getOkeCanaryTrafficShiftDeployStageId();
```

- *Type:* java.lang.String

---

##### `okeClusterDeployEnvironmentId`<sup>Required</sup> <a name="okeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId"></a>

```java
public java.lang.String getOkeClusterDeployEnvironmentId();
```

- *Type:* java.lang.String

---

##### `productionLoadBalancerConfig`<sup>Required</sup> <a name="productionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList getProductionLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `releaseName`<sup>Required</sup> <a name="releaseName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName"></a>

```java
public java.lang.String getReleaseName();
```

- *Type:* java.lang.String

---

##### `rollbackPolicy`<sup>Required</sup> <a name="rollbackPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList getRollbackPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a>

---

##### `rolloutPolicy`<sup>Required</sup> <a name="rolloutPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList getRolloutPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a>

---

##### `setString`<sup>Required</sup> <a name="setString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList getSetString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a>

---

##### `setValues`<sup>Required</sup> <a name="setValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList getSetValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a>

---

##### `shouldCleanupOnFail`<sup>Required</sup> <a name="shouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail"></a>

```java
public IResolvable getShouldCleanupOnFail();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shouldNotWait`<sup>Required</sup> <a name="shouldNotWait" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait"></a>

```java
public IResolvable getShouldNotWait();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shouldResetValues`<sup>Required</sup> <a name="shouldResetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues"></a>

```java
public IResolvable getShouldResetValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shouldReuseValues`<sup>Required</sup> <a name="shouldReuseValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues"></a>

```java
public IResolvable getShouldReuseValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shouldSkipCrds`<sup>Required</sup> <a name="shouldSkipCrds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds"></a>

```java
public IResolvable getShouldSkipCrds();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shouldSkipRenderSubchartNotes`<sup>Required</sup> <a name="shouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes"></a>

```java
public IResolvable getShouldSkipRenderSubchartNotes();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `testLoadBalancerConfig`<sup>Required</sup> <a name="testLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList getTestLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `trafficShiftTarget`<sup>Required</sup> <a name="trafficShiftTarget" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget"></a>

```java
public java.lang.String getTrafficShiftTarget();
```

- *Type:* java.lang.String

---

##### `valuesArtifactIds`<sup>Required</sup> <a name="valuesArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds"></a>

```java
public java.util.List<java.lang.String> getValuesArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitCriteria`<sup>Required</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList getWaitCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds">batchDelayInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage">batchPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent">rampLimitPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

---

##### `batchDelayInSeconds`<sup>Required</sup> <a name="batchDelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```java
public java.lang.Number getBatchDelayInSeconds();
```

- *Type:* java.lang.Number

---

##### `batchPercentage`<sup>Required</sup> <a name="batchPercentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage"></a>

```java
public java.lang.Number getBatchPercentage();
```

- *Type:* java.lang.Number

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `rampLimitPercent`<sup>Required</sup> <a name="rampLimitPercent" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```java
public java.lang.Number getRampLimitPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetString getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList;

new DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration">waitDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType">waitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration"></a>

```java
public java.lang.String getWaitDuration();
```

- *Type:* java.lang.String

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType"></a>

```java
public java.lang.String getWaitType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionList;

new DataOciDevopsDeployStagesDeployStageCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDevopsDeployStagesDeployStageCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference;

new DataOciDevopsDeployStagesDeployStageCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDevopsDeployStagesDeployStageCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a>

---


### DataOciDevopsDeployStagesFilterList <a name="DataOciDevopsDeployStagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesFilterList;

new DataOciDevopsDeployStagesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get"></a>

```java
public DataOciDevopsDeployStagesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>>

---


### DataOciDevopsDeployStagesFilterOutputReference <a name="DataOciDevopsDeployStagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_devops_deploy_stages.DataOciDevopsDeployStagesFilterOutputReference;

new DataOciDevopsDeployStagesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>

---



