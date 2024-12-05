# `dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins oci_computeinstanceagent_instance_available_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePlugins;

DataOciComputeinstanceagentInstanceAvailablePlugins.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .osName(java.lang.String)
    .osVersion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciComputeinstanceagentInstanceAvailablePluginsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osName">osName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osVersion">osVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}.

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}.

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#filter DataOciComputeinstanceagentInstanceAvailablePlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciComputeinstanceagentInstanceAvailablePluginsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePlugins;

DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePlugins;

DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePlugins;

DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePlugins;

DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAvailablePlugins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciComputeinstanceagentInstanceAvailablePlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAvailablePlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins">availablePlugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput">osNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput">osVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName">osName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availablePlugins`<sup>Required</sup> <a name="availablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins"></a>

```java
public DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList getAvailablePlugins();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter"></a>

```java
public DataOciComputeinstanceagentInstanceAvailablePluginsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osNameInput`<sup>Optional</sup> <a name="osNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput"></a>

```java
public java.lang.String getOsNameInput();
```

- *Type:* java.lang.String

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput"></a>

```java
public java.lang.String getOsVersionInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName"></a>

```java
public java.lang.String getOsName();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins;

DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins.builder()
    .build();
```


### DataOciComputeinstanceagentInstanceAvailablePluginsConfig <a name="DataOciComputeinstanceagentInstanceAvailablePluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig;

DataOciComputeinstanceagentInstanceAvailablePluginsConfig.builder()
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
    .compartmentId(java.lang.String)
    .osName(java.lang.String)
    .osVersion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciComputeinstanceagentInstanceAvailablePluginsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName">osName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}.

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName"></a>

```java
public java.lang.String getOsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}.

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#filter DataOciComputeinstanceagentInstanceAvailablePlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

### DataOciComputeinstanceagentInstanceAvailablePluginsFilter <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter;

DataOciComputeinstanceagentInstanceAvailablePluginsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList;

new DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get"></a>

```java
public DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference;

new DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault">isEnabledByDefault</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported">isSupported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledByDefault`<sup>Required</sup> <a name="isEnabledByDefault" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault"></a>

```java
public IResolvable getIsEnabledByDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSupported`<sup>Required</sup> <a name="isSupported" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported"></a>

```java
public IResolvable getIsSupported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue"></a>

```java
public DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a>

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList;

new DataOciComputeinstanceagentInstanceAvailablePluginsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get"></a>

```java
public DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>>

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_available_plugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference;

new DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>

---



