# `dataOciComputeinstanceagentInstanceAgentPlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAgentPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAgentPlugins <a name="DataOciComputeinstanceagentInstanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins oci_computeinstanceagent_instance_agent_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPlugins;

DataOciComputeinstanceagentInstanceAgentPlugins.Builder.create(Construct scope, java.lang.String id)
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
    .instanceagentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciComputeinstanceagentInstanceAgentPluginsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.instanceagentId">instanceagentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}.

---

##### `instanceagentId`<sup>Required</sup> <a name="instanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.instanceagentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#filter DataOciComputeinstanceagentInstanceAgentPlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciComputeinstanceagentInstanceAgentPluginsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetName"></a>

```java
public void resetName()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPlugins;

DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPlugins;

DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPlugins;

DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPlugins;

DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAgentPlugins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciComputeinstanceagentInstanceAgentPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAgentPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList">DataOciComputeinstanceagentInstanceAgentPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceAgentPlugins">instanceAgentPlugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentIdInput">instanceagentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentId">instanceagentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filter"></a>

```java
public DataOciComputeinstanceagentInstanceAgentPluginsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList">DataOciComputeinstanceagentInstanceAgentPluginsFilterList</a>

---

##### `instanceAgentPlugins`<sup>Required</sup> <a name="instanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceAgentPlugins"></a>

```java
public DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList getInstanceAgentPlugins();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceagentIdInput`<sup>Optional</sup> <a name="instanceagentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentIdInput"></a>

```java
public java.lang.String getInstanceagentIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceagentId`<sup>Required</sup> <a name="instanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentId"></a>

```java
public java.lang.String getInstanceagentId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAgentPluginsConfig <a name="DataOciComputeinstanceagentInstanceAgentPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig;

DataOciComputeinstanceagentInstanceAgentPluginsConfig.builder()
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
    .instanceagentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciComputeinstanceagentInstanceAgentPluginsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.instanceagentId">instanceagentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}.

---

##### `instanceagentId`<sup>Required</sup> <a name="instanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.instanceagentId"></a>

```java
public java.lang.String getInstanceagentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#filter DataOciComputeinstanceagentInstanceAgentPlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}.

---

### DataOciComputeinstanceagentInstanceAgentPluginsFilter <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter;

DataOciComputeinstanceagentInstanceAgentPluginsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#values DataOciComputeinstanceagentInstanceAgentPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#regex DataOciComputeinstanceagentInstanceAgentPlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#values DataOciComputeinstanceagentInstanceAgentPlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#regex DataOciComputeinstanceagentInstanceAgentPlugins#regex}.

---

### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins;

DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAgentPluginsFilterList <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList;

new DataOciComputeinstanceagentInstanceAgentPluginsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get"></a>

```java
public DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>>

---


### DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference;

new DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>

---


### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList;

new DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get"></a>

```java
public DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_computeinstanceagent_instance_agent_plugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference;

new DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.timeLastUpdatedUtc">timeLastUpdatedUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeLastUpdatedUtc`<sup>Required</sup> <a name="timeLastUpdatedUtc" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.timeLastUpdatedUtc"></a>

```java
public java.lang.String getTimeLastUpdatedUtc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.internalValue"></a>

```java
public DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins</a>

---



